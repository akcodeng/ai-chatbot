import { tool } from "ai";
import { z } from "zod";

export const webSearch = tool({
  description:
    "Search the web for current information using Tavily. Use this when the user asks about recent events, needs up-to-date information, wants to look something up, or asks a factual question that might need current data.",
  inputSchema: z.object({
    query: z
      .string()
      .describe("The search query to look up on the web"),
    searchDepth: z
      .enum(["basic", "advanced"])
      .default("basic")
      .describe(
        "The depth of search -- 'basic' for quick answers, 'advanced' for in-depth research"
      ),
    maxResults: z
      .number()
      .min(1)
      .max(10)
      .default(5)
      .describe("Maximum number of search results to return"),
  }),
  execute: async ({ query, searchDepth, maxResults }) => {
    const apiKey = process.env.TAVILY_API_KEY;

    if (!apiKey) {
      return {
        error:
          "Tavily API key not configured. Please set TAVILY_API_KEY in your environment variables.",
      };
    }

    try {
      const response = await fetch("https://api.tavily.com/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: apiKey,
          query,
          search_depth: searchDepth,
          max_results: maxResults,
          include_answer: true,
          include_raw_content: false,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        return {
          error: `Search failed (${response.status}): ${errorText}`,
        };
      }

      const data = await response.json();

      return {
        answer: data.answer || null,
        results: (data.results || []).map(
          (result: {
            title: string;
            url: string;
            content: string;
            score: number;
          }) => ({
            title: result.title,
            url: result.url,
            content: result.content,
            relevanceScore: result.score,
          })
        ),
        query,
      };
    } catch (error) {
      return {
        error: `Failed to perform web search: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
    }
  },
});
