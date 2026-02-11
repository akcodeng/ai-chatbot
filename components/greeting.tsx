import { motion } from "framer-motion";

export const Greeting = () => {
  return (
    <div
      className="mx-auto mt-8 flex size-full max-w-3xl flex-col justify-center px-4 md:mt-20 md:px-8"
      key="overview"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-2"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <svg
              className="size-5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-sm font-medium text-primary">NexusAI</span>
        </div>
      </motion.div>

      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-balance font-semibold text-2xl leading-tight tracking-tight text-foreground md:text-3xl"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        What would you like to explore today?
      </motion.h1>

      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.55, duration: 0.5 }}
      >
        Powered by Groq, Cloudflare, and Nebius. Choose from multiple
        open-source models for fast, intelligent conversations.
      </motion.p>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 flex flex-wrap gap-2"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.65, duration: 0.5 }}
      >
        {["Groq", "Cloudflare", "Nebius"].map((provider) => (
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
            key={provider}
          >
            <span className="size-1.5 rounded-full bg-primary" />
            {provider}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
