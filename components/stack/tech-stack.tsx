"use client";

import { useState } from "react";
import { skills, skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { cn } from "@/lib/utils";

type Filter = "All" | (typeof skillCategories)[number];

export function TechStack() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All" ? skills : skills.filter((s) => s.category === filter);

  return (
    <Section id="stack">
      <SectionHeading
        index="04"
        label="Tech Arsenal"
        title="Tech Arsenal"
        subtitle="Technologies I reach for, organized by where they fit."
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {(["All", ...skillCategories] as Filter[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "mono rounded-full border px-3.5 py-1.5 text-xs tracking-wide uppercase transition-colors",
              filter === cat
                ? "border-signal bg-signal text-signal-foreground"
                : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {filtered.map((skill) => (
          <span
            key={skill.name}
            className="rounded-full bg-card px-4 py-2 text-sm text-foreground/90 transition-colors hover:bg-muted"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </Section>
  );
}
