export const DEFAULT_CHAT_MODEL = "groq/llama-3.3-70b-versatile";

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  // Imoogle Fast (Groq) -- lightning-fast inference
  {
    id: "groq/llama-3.3-70b-versatile",
    name: "Imoogle Fast 70B",
    provider: "groq",
    description: "Our fastest large model -- ideal for complex tasks",
  },
  {
    id: "groq/llama-3.1-8b-instant",
    name: "Imoogle Flash 8B",
    provider: "groq",
    description: "Ultra-fast responses for simple questions",
  },
  {
    id: "groq/mixtral-8x7b-32768",
    name: "Imoogle Mix 8x7B",
    provider: "groq",
    description: "Strong mixture-of-experts with 32K context",
  },
  {
    id: "groq/gemma2-9b-it",
    name: "Imoogle Gemma 9B",
    provider: "groq",
    description: "Efficient open model for everyday tasks",
  },
  {
    id: "groq/deepseek-r1-distill-llama-70b",
    name: "Imoogle Reason 70B",
    provider: "groq",
    description: "Deep reasoning model for complex problems",
  },
  // Imoogle Edge (Cloudflare) -- edge-optimized inference
  {
    id: "cloudflare/@cf/meta/llama-3.3-70b-instruct-fp8-fast",
    name: "Imoogle Edge 70B",
    provider: "cloudflare",
    description: "Global edge inference with low latency",
  },
  {
    id: "cloudflare/@cf/meta/llama-3.1-8b-instruct",
    name: "Imoogle Edge 8B",
    provider: "cloudflare",
    description: "Lightweight edge model for quick tasks",
  },
  {
    id: "cloudflare/@cf/mistral/mistral-7b-instruct-v0.1",
    name: "Imoogle Edge Mistral",
    provider: "cloudflare",
    description: "Compact and efficient edge model",
  },
  {
    id: "cloudflare/@cf/qwen/qwen1.5-14b-chat-awq",
    name: "Imoogle Edge Qwen",
    provider: "cloudflare",
    description: "Multilingual edge capabilities",
  },
  // Imoogle Pro (Nebius) -- high-quality studio inference
  {
    id: "nebius/meta-llama/Meta-Llama-3.1-70B-Instruct",
    name: "Imoogle Pro 70B",
    provider: "nebius",
    description: "High-quality reasoning and generation",
  },
  {
    id: "nebius/meta-llama/Meta-Llama-3.1-8B-Instruct",
    name: "Imoogle Pro 8B",
    provider: "nebius",
    description: "Fast and cost-effective inference",
  },
  {
    id: "nebius/mistralai/Mixtral-8x22B-Instruct-v0.1",
    name: "Imoogle Pro Mix 8x22B",
    provider: "nebius",
    description: "Powerful mixture-of-experts model",
  },
  {
    id: "nebius/Qwen/Qwen2.5-72B-Instruct",
    name: "Imoogle Pro Qwen 72B",
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
