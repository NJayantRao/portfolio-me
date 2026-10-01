export type JourneyItem = {
  year: string;
  title: string;
  description: string;
};

export const journey: JourneyItem[] = [
  {
    year: "2022",
    title: "Started B.Tech in Computer Science",
    description:
      "Began CSE at NIST University — first real exposure to programming and systems thinking.",
  },
  {
    year: "2024",
    title: "Started exploring web development",
    description:
      "Learned HTML, CSS, and JavaScript, then moved into React and building real projects.",
  },
  {
    year: "2025",
    title: "Moved deeper into full-stack development",
    description:
      "Picked up Next.js, backend architecture, and databases — started building complete applications end to end.",
  },
  {
    year: "2026",
    title: "Exploring AI systems, agents, and architecture",
    description:
      "Currently focused on LLM applications, RAG, agent orchestration, and MCP.",
  },
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "NIST University",
  cgpa: "9.66",
  period: "2022 — 2026",
};

export type CurrentlyColumn = {
  label: string;
  items: string[];
};

export const currently: CurrentlyColumn[] = [
  {
    label: "Building",
    items: ["AI-powered applications", "A RAG-based notes tool"],
  },
  {
    label: "Learning",
    items: ["System Design", "Distributed Systems"],
  },
  {
    label: "Exploring",
    items: ["AI Agents", "MCP", "LLM Architectures"],
  },
];
