import { createGroq } from "@ai-sdk/groq";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";
import { isTestEnvironment } from "../constants";

// --- Groq Provider ---
const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

// --- Cloudflare Workers AI (OpenAI-compatible REST API) ---
const cloudflare = createOpenAICompatible({
  name: "cloudflare",
  baseURL: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/v1`,
  headers: {
    Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
  },
});

// --- Nebius AI Studio (OpenAI-compatible) ---
const nebius = createOpenAICompatible({
  name: "nebius",
  baseURL: "https://api.studio.nebius.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.NEBIUS_API_KEY}`,
  },
});

// Provider map for routing model IDs to providers
const providerMap: Record<
  string,
  ReturnType<typeof createGroq> | ReturnType<typeof createOpenAICompatible>
> = {
  groq,
  cloudflare,
  nebius,
};

export const myProvider = isTestEnvironment
  ? (() => {
      const { artifactModel, chatModel, reasoningModel, titleModel } =
        require("./models.mock");
      return customProvider({
        languageModels: {
          "chat-model": chatModel,
          "chat-model-reasoning": reasoningModel,
          "title-model": titleModel,
          "artifact-model": artifactModel,
        },
      });
    })()
  : null;

export function getLanguageModel(modelId: string) {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel(modelId);
  }

  // Parse provider/model format: "groq/llama-3.3-70b-versatile"
  const [providerName, ...modelParts] = modelId.split("/");
  const modelName = modelParts.join("/");
  const provider = providerMap[providerName];

  if (!provider) {
    throw new Error(`Unknown provider: ${providerName}`);
  }

  const isReasoningModel =
    modelId.includes("reasoning") || modelId.endsWith("-thinking");

  if (isReasoningModel) {
    return wrapLanguageModel({
      model: provider.languageModel(modelName),
      middleware: extractReasoningMiddleware({ tagName: "thinking" }),
    });
  }

  return provider.languageModel(modelName);
}

export function getTitleModel() {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel("title-model");
  }
  // Use Groq for fast title generation
  return groq.languageModel("llama-3.3-70b-versatile");
}

export function getArtifactModel() {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel("artifact-model");
  }
  // Use Groq for artifact generation
  return groq.languageModel("llama-3.3-70b-versatile");
}
