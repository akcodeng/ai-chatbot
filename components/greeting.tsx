import { motion } from "framer-motion";

export const Greeting = () => {
  return (
    <div
      className="mx-auto mt-8 flex size-full max-w-3xl flex-col justify-center px-4 md:mt-20 md:px-8"
      key="overview"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-1"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
            <svg
              className="size-5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4" />
              <path d="M12 18v4" />
              <path d="m4.93 4.93 2.83 2.83" />
              <path d="m16.24 16.24 2.83 2.83" />
              <path d="M2 12h4" />
              <path d="M18 12h4" />
              <path d="m4.93 19.07 2.83-2.83" />
              <path d="m16.24 7.76 2.83-2.83" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Imoogle AI
          </span>
        </div>
      </motion.div>

      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 text-balance font-semibold text-2xl leading-tight tracking-tight text-foreground md:text-3xl"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        Good to see you. How can I help?
      </motion.h1>

      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.55, duration: 0.5 }}
      >
        Imoogle Models are fast, intelligent, and always learning. Ask me
        anything -- I can search the web, write code, analyze data, and
        create documents.
      </motion.p>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 flex flex-wrap items-center gap-2"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.65, duration: 0.5 }}
      >
        {[
          { label: "Web Search", color: "bg-primary" },
          { label: "Voice Chat", color: "bg-chart-2" },
          { label: "Code Gen", color: "bg-chart-3" },
          { label: "Documents", color: "bg-chart-4" },
        ].map((feat) => (
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
            key={feat.label}
          >
            <span className={`size-1.5 rounded-full ${feat.color}`} />
            {feat.label}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
