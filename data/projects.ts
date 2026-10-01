export type Project = {
  slug: string;
  index: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  status: "In Progress" | "Shipped" | "Prototype";
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  challenges: string;
  learnings: string;
};

export const projects: Project[] = [
  {
    slug: "smart-education",
    index: "01",
    title: "Smart Education",
    description:
      "AI-powered school management and learning platform for administrators, teachers, and students.",
    category: "AI / EDUCATION / FULL-STACK",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "AI"],
    github: "https://github.com/jayantrao",
    live: undefined,
    featured: true,
    status: "In Progress",
    overview:
      "A school management platform that brings attendance, grading, communication, and AI-assisted learning support into a single system for schools that currently rely on disconnected spreadsheets and paper records.",
    problem:
      "Small and mid-sized schools often manage academics, attendance, and communication across disconnected tools — spreadsheets, messaging apps, and paper registers — making it hard to track a student's progress in one place.",
    solution:
      "A role-based platform for administrators, teachers, students, and parents, with a unified data model for classes, attendance, and grades, plus an AI layer that can summarize a student's performance and flag things worth a teacher's attention.",
    features: [
      "Role-based dashboards for admins, teachers, students, and parents",
      "Attendance and grade tracking with a shared data model",
      "AI-assisted performance summaries for teachers",
      "Class and timetable management",
    ],
    architecture:
      "Next.js App Router on the frontend with server components for data-heavy views, Supabase for auth, Postgres storage, and row-level security, and a thin API layer for AI summarization requests.",
    challenges:
      "Designing row-level security policies that correctly scope data across four different roles without leaking cross-tenant data was the hardest part — it required thinking carefully about the permission model before writing any UI.",
    learnings:
      "Working through Supabase's RLS model in depth, and learning how much of an application's complexity can be pushed down into well-designed database policies instead of application code.",
  },
  {
    slug: "devnotes-ai",
    index: "02",
    title: "DevNotes AI",
    description:
      "A RAG-powered notes app that lets developers chat with their own technical notes and documentation.",
    category: "AI / DEVELOPER TOOLS",
    technologies: ["Next.js", "TypeScript", "RAG", "PostgreSQL"],
    github: "https://github.com/jayantrao",
    live: undefined,
    featured: true,
    status: "Prototype",
    overview:
      "An experiment in building a retrieval-augmented notes tool — write and organize technical notes as usual, then ask questions across all of them instead of searching manually.",
    problem:
      "Personal technical notes pile up fast and become hard to search meaningfully — keyword search misses context, and skimming old notes wastes time.",
    solution:
      "Notes are chunked and embedded on save, stored alongside their vectors, and a chat interface retrieves the most relevant chunks before asking an LLM to answer using only that context.",
    features: [
      "Markdown note editor with automatic chunking on save",
      "Vector search over personal notes",
      "Chat interface answering strictly from retrieved context",
      "Source snippets shown alongside every answer",
    ],
    architecture:
      "A Next.js app with API routes handling embedding generation and retrieval, Postgres with a vector extension for storage, and a simple prompt-construction layer that grounds every answer in retrieved snippets.",
    challenges:
      "Getting chunking granularity right — chunks that were too large diluted retrieval relevance, and chunks that were too small lost surrounding context.",
    learnings:
      "A hands-on understanding of how retrieval quality, not model choice, is usually the bottleneck in a RAG system.",
  },
  {
    slug: "taskflow-api",
    index: "03",
    title: "TaskFlow API",
    description:
      "A backend service for team task management with webhooks and background jobs.",
    category: "BACKEND / API",
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com/jayantrao",
    featured: false,
    status: "Shipped",
    overview:
      "A standalone REST API for team task management, built to practice designing a backend service the way a small product team would run one in production.",
    problem:
      "Most of my early projects were frontend-heavy. I wanted a project focused entirely on backend concerns — auth, data modeling, background processing — without a UI to lean on.",
    solution:
      "A REST API with JWT authentication, role-scoped workspaces, background job processing for notifications, and outbound webhooks so other tools can react to task events.",
    features: [
      "JWT-based authentication and workspace-scoped authorization",
      "Background job queue for notification delivery",
      "Outbound webhooks for task lifecycle events",
      "Dockerized for consistent local and deployed environments",
    ],
    architecture:
      "An Express API with a service layer separating route handlers from business logic, PostgreSQL for storage, a lightweight job queue for async work, and Docker Compose for local development.",
    challenges:
      "Designing webhook delivery to be reliable — retries, signature verification, and not blocking the main request cycle — took more thought than the core CRUD logic.",
    learnings:
      "A much better instinct for where to draw boundaries between route handlers, services, and background workers in a backend codebase.",
  },
  {
    slug: "mcp-toolkit",
    index: "04",
    title: "MCP Toolkit",
    description:
      "A small collection of MCP servers for connecting AI agents to everyday developer tools.",
    category: "AI / TOOLING",
    technologies: ["TypeScript", "MCP", "Node.js"],
    github: "https://github.com/jayantrao",
    featured: false,
    status: "Prototype",
    overview:
      "A set of minimal Model Context Protocol servers built to understand how MCP structures the connection between AI agents and external tools, compared to writing traditional API integrations by hand.",
    problem:
      "Most explanations of MCP stay conceptual. Building a few servers myself was the fastest way to actually understand the protocol's shape.",
    solution:
      "Small, focused MCP servers exposing a handful of tools each — file search, a notes lookup, and a simple task tool — following the protocol's resource and tool conventions.",
    features: [
      "Multiple standalone MCP servers with narrow, well-defined tools",
      "Consistent error handling and structured tool responses",
      "Local test harness for exercising tools without a full agent runtime",
    ],
    architecture:
      "TypeScript servers implementing the MCP spec directly, run locally and connected to an MCP-compatible client for testing.",
    challenges:
      "Understanding the right granularity for a 'tool' — too broad and the agent loses control, too narrow and every task needs many round trips.",
    learnings:
      "A clearer mental model of how MCP differs from a REST API: it's less about the transport and more about giving an agent a well-scoped, self-describing set of capabilities.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
