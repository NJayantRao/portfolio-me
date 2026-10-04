import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";

const items = [
  {
    number: "01",
    title: "Full-Stack Applications",
    description:
      "Modern web applications with thoughtful frontend and backend architecture.",
    stack: "Next.js · React · TypeScript",
  },
  {
    number: "02",
    title: "AI-Powered Products",
    description:
      "Applications using LLMs, AI workflows, RAG, agents, and automation.",
    stack: "LLMs · RAG · Agents",
  },
  {
    number: "03",
    title: "Backend Systems",
    description:
      "APIs, authentication, databases, integrations, background workflows, and server-side systems.",
    stack: "Node.js · PostgreSQL · Supabase",
  },
  {
    number: "04",
    title: "Developer Tools & Experiments",
    description:
      "Small tools, prototypes, experiments, and technical explorations.",
    stack: "MCP · Docker · Linux",
  },
];

export function WhatIBuild() {
  return (
    <Section id="build">
      <SectionHeading
        index="01"
        label="What I Build"
        title="What I Build"
        subtitle="Areas where I like turning ideas into working systems."
      />

      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {items.map((item, i) => (
          <Reveal key={item.number} delay={i * 80}>
            <div className="group h-full bg-background p-7 transition-colors duration-300 hover:bg-card sm:p-8">
              <div className="flex items-start justify-between">
                <span className="mono text-xs text-signal">{item.number}</span>
                <span className="mono text-[10px] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.stack}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-6 h-px w-8 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-signal" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
