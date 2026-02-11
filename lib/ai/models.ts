export const DEFAULT_CHAT_MODEL = "groq/llama-3.3-70b-versatile";

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  // Groq Models
  {
    id: "groq/llama-3.3-70b-versatile",
    name: "Llama 3.3 70B",
    provider: "groq",
    description: "Fast and powerful, great for complex tasks",
  },
  {
    id: "groq/llama-3.1-8b-instant",
    name: "Llama 3.1 8B",
    provider: "groq",
    description: "Ultra-fast responses for simple tasks",
  },
  {
    id: "groq/mixtral-8x7b-32768",
    name: "Mixtral 8x7B",
    provider: "groq",
    description: "Strong mixture-of-experts model with 32K context",
  },
  {
    id: "groq/gemma2-9b-it",
    name: "Gemma 2 9B",
    provider: "groq",
    description: "Google's efficient open model via Groq",
  },
  {
    id: "groq/deepseek-r1-distill-llama-70b",
    name: "DeepSeek R1 70B",
    provider: "groq",
    description: "Reasoning model for complex problem solving",
  },
  // Cloudflare Workers AI Models
  {
    id: "cloudflare/@cf/meta/llama-3.3-70b-instruct-fp8-fast",
    name: "Llama 3.3 70B",
    provider: "cloudflare",
    description: "Meta's flagship model on Cloudflare edge",
  },
  {
    id: "cloudflare/@cf/meta/llama-3.1-8b-instruct",
    name: "Llama 3.1 8B",
    provider: "cloudflare",
    description: "Fast edge inference with low latency",
  },
  {
    id: "cloudflare/@cf/mistral/mistral-7b-instruct-v0.1",
    name: "Mistral 7B",
    provider: "cloudflare",
    description: "Efficient model for quick tasks",
  },
  {
    id: "cloudflare/@cf/qwen/qwen1.5-14b-chat-awq",
    name: "Qwen 1.5 14B",
    provider: "cloudflare",
    description: "Strong multilingual capabilities",
  },
  // Nebius AI Studio Models
  {
    id: "nebius/meta-llama/Meta-Llama-3.1-70B-Instruct",
    name: "Llama 3.1 70B",
    provider: "nebius",
    description: "High-quality reasoning and generation",
  },
  {
    id: "nebius/meta-llama/Meta-Llama-3.1-8B-Instruct",
    name: "Llama 3.1 8B",
    provider: "nebius",
    description: "Fast and cost-effective inference",
  },
  {
    id: "nebius/mistralai/Mixtral-8x22B-Instruct-v0.1",
    name: "Mixtral 8x22B",
    provider: "nebius",
    description: "Powerful mixture-of-experts model",
  },
  {
    id: "nebius/Qwen/Qwen2.5-72B-Instruct",
    name: "Qwen 2.5 72B",
    provider: "nebius",
    description: "Top-tier multilingual open model",
  },
];

// Group models by provider for UI
export const modelsByProvider = chatModels.reduce(
  (acc, model) => {
    if (!acc[model.provider]) {
      acc[model.provider] = [];
    }
    acc[model.provider].push(model);
    return acc;
  },
  {} as Record<string, ChatModel[]>
);
