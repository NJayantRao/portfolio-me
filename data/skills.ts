export type SkillCategory =
  "Frontend" | "Backend" | "Database" | "AI" | "Tools";

export type Skill = {
  name: string;
  category: SkillCategory;
};

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "AI",
  "Tools",
];

export const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Authentication", category: "Backend" },

  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Neon", category: "Database" },

  { name: "LLMs", category: "AI" },
  { name: "RAG", category: "AI" },
  { name: "AI Agents", category: "AI" },
  { name: "MCP", category: "AI" },

  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Linux", category: "Tools" },
];
