"use client";

import { ExternalLinkIcon, GlobeIcon, SearchIcon } from "lucide-react";

interface SearchResult {
  title: string;
  url: string;
  content: string;
  relevanceScore: number;
}

interface WebSearchResultsProps {
  results: SearchResult[];
  answer?: string | null;
  query: string;
}

export function WebSearchResults({
  results,
  answer,
  query,
}: WebSearchResultsProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
        <SearchIcon className="size-4 text-primary" />
        <span>Web search: {query}</span>
      </div>

      {answer && (
        <div className="rounded-lg bg-secondary/50 p-3 text-sm leading-relaxed text-foreground">
          {answer}
        </div>
      )}

      <div className="flex flex-col gap-2">
        {results.slice(0, 5).map((result, index) => (
          <a
            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/50"
            href={result.url}
            key={index}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-muted">
              <GlobeIcon className="size-3.5 text-muted-foreground" />
            </div>
            <div className="flex min-w-0 flex-col gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="truncate text-sm font-medium text-foreground group-hover:text-primary">
                  {result.title}
                </span>
                <ExternalLinkIcon className="size-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <span className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {result.content}
              </span>
              <span className="truncate text-xs text-muted-foreground/60">
                {new URL(result.url).hostname}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
