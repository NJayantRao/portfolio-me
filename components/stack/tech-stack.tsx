import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { TechIcon } from "@/components/shared/tech-icons";

export function TechStack() {
  return (
    <Section id="stack">
      <SectionHeading
        index="04"
        label="Tech Arsenal"
        title="Tech Arsenal"
        subtitle="Technologies I reach for, organized by where they fit."
      />

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card/60 p-3 text-center transition-colors duration-300 hover:border-foreground/15 hover:bg-card"
          >
            <TechIcon name={skill.name} />
            <span className="text-sm text-foreground/90">{skill.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
