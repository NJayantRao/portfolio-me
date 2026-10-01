export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  status: "draft" | "coming-soon";
  content?: string[];
};

export const posts: Post[] = [
  {
    slug: "beyond-chatbots-what-is-agi",
    title: "Beyond Chatbots: What Exactly Is AGI?",
    excerpt:
      "Unpacking what people actually mean when they say AGI, and why the term gets stretched to cover very different ideas.",
    topic: "AI",
    status: "coming-soon",
  },
  {
    slug: "mcp-vs-apis",
    title: "MCP vs APIs: When Should You Use Which?",
    excerpt:
      "A practical comparison of the Model Context Protocol and traditional REST APIs for connecting agents to tools.",
    topic: "AI Engineering",
    status: "coming-soon",
  },
  {
    slug: "backend-as-a-service-explained",
    title: "Backend as a Service: What Actually Happens Behind the Scenes?",
    excerpt:
      "Peeling back what tools like Supabase are really doing for you — and what you still need to understand yourself.",
    topic: "Backend",
    status: "coming-soon",
  },
  {
    slug: "http-options-and-cors",
    title: "Understanding HTTP OPTIONS & CORS",
    excerpt:
      "A developer's field guide to preflight requests and the CORS errors that show up right before a demo.",
    topic: "Web Fundamentals",
    status: "coming-soon",
  },
  {
    slug: "building-ai-agents-architecture",
    title: "Building AI Agents: Architecture & Orchestration",
    excerpt:
      "Notes on structuring agent loops, tool calls, and state — from a few small agents I've built and broken.",
    topic: "AI Engineering",
    status: "coming-soon",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
