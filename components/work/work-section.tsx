import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { ProjectCard } from "@/components/work/project-card";
import { Reveal } from "@/components/motion/reveal";

export function WorkSection() {
  const [first, second, ...rest] = projects;

  return (
    <Section id="work">
      <SectionHeading
        index="02"
        label="Selected Work"
        title="Selected Work"
        subtitle="A few things I've built, experimented with, and learned from."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {first ? (
          <Reveal>
            <ProjectCard project={first} size="large" />
          </Reveal>
        ) : null}
        {second ? (
          <Reveal delay={100}>
            <ProjectCard project={second} size="large" />
          </Reveal>
        ) : null}
      </div>

      {rest.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : null}
    </Section>
  );
}
