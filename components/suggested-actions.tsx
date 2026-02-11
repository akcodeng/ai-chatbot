"use client";

import type { UseChatHelpers } from "@ai-sdk/react";
import { motion } from "framer-motion";
import {
  BookOpenIcon,
  CodeIcon,
  LightbulbIcon,
  SparklesIcon,
} from "lucide-react";
import { memo } from "react";
import type { ChatMessage } from "@/lib/types";
import { Suggestion } from "./elements/suggestion";
import type { VisibilityType } from "./visibility-selector";

type SuggestedActionsProps = {
  chatId: string;
  sendMessage: UseChatHelpers<ChatMessage>["sendMessage"];
  selectedVisibilityType: VisibilityType;
};

const suggestions = [
  {
    icon: CodeIcon,
    label: "Write code",
    text: "Write a Python script that generates a beautiful fractal pattern using recursion",
  },
  {
    icon: LightbulbIcon,
    label: "Explain a concept",
    text: "Explain how neural networks learn, using a simple analogy",
  },
  {
    icon: SparklesIcon,
    label: "Creative writing",
    text: "Write a short sci-fi story about AI discovering consciousness",
  },
  {
    icon: BookOpenIcon,
    label: "Summarize",
    text: "What are the key differences between REST and GraphQL APIs?",
  },
];

function PureSuggestedActions({ chatId, sendMessage }: SuggestedActionsProps) {
  return (
    <div
      className="grid w-full gap-2 sm:grid-cols-2"
      data-testid="suggested-actions"
    >
      {suggestions.map((suggestion, index) => (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          key={suggestion.label}
          transition={{ delay: 0.05 * index }}
        >
          <Suggestion
            className="group h-auto w-full whitespace-normal rounded-xl border border-border/50 bg-card/50 p-3.5 text-left transition-all duration-200 hover:border-primary/30 hover:bg-card"
            onClick={(text) => {
              window.history.pushState({}, "", `/chat/${chatId}`);
              sendMessage({
                role: "user",
                parts: [{ type: "text", text }],
              });
            }}
            suggestion={suggestion.text}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <suggestion.icon className="size-3.5" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-foreground">
                  {suggestion.label}
                </span>
                <span className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {suggestion.text}
                </span>
              </div>
            </div>
          </Suggestion>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(
  PureSuggestedActions,
  (prevProps, nextProps) => {
    if (prevProps.chatId !== nextProps.chatId) {
      return false;
    }
    if (prevProps.selectedVisibilityType !== nextProps.selectedVisibilityType) {
      return false;
    }

    return true;
  }
);
