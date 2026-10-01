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

  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },

  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Docker", category: "Tools" },
];
