export type Experiment = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "exploring" | "active" | "paused";
};

export const experiments: Experiment[] = [
  {
    id: "mcp-vs-apis",
    title: "MCP × APIs",
    description:
      "Exploring how MCP differs from traditional REST APIs, and where each fits when giving an AI agent access to tools.",
    tags: ["MCP", "AI Agents"],
    status: "active",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Experimenting with agent orchestration, tool-calling loops, and how much autonomy to hand an agent versus a human.",
    tags: ["Agents", "LLMs"],
    status: "active",
  },
  {
    id: "rag-pipelines",
    title: "RAG",
    description:
      "Exploring retrieval pipelines, chunking strategies, and context-aware applications built on top of a vector store.",
    tags: ["RAG", "Vector Search"],
    status: "exploring",
  },
  {
    id: "event-driven-systems",
    title: "Event-Driven Systems",
    description:
      "Experimenting with queues, background workflows, and how event-driven design changes the shape of a backend.",
    tags: ["Backend", "Systems Design"],
    status: "exploring",
  },
  {
    id: "auth-patterns",
    title: "Auth Patterns",
    description:
      "Working through session-based vs. token-based auth, and how row-level security changes API design decisions.",
    tags: ["Backend", "Security"],
    status: "paused",
  },
  {
    id: "self-hosting",
    title: "Self-Hosting & Docker",
    description:
      "Learning to containerize and self-host small services, and what breaks between 'it works locally' and production.",
    tags: ["Docker", "Linux"],
    status: "exploring",
  },
];
