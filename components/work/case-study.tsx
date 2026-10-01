import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/shared/icons";

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border py-10">
      <span className="mono text-xs tracking-widest text-signal uppercase">
        {label}
      </span>
      <div className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="pt-32 pb-28">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <Link
          href="/#work"
          className="mono inline-flex items-center gap-2 text-xs tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> Back to work
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <span className="mono text-xs text-signal">{project.index}</span>
          <span className="mono text-xs tracking-widest text-muted-foreground uppercase">
            {project.category}
          </span>
        </div>

        <h1 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-signal"
            >
              <GithubIcon className="size-4" /> View Code
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-signal"
            >
              <ExternalLink className="size-4" /> Live Demo
            </a>
          ) : null}
          <span className="mono text-xs tracking-wide text-muted-foreground uppercase">
            {project.status}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="mono rounded-full border border-border px-2.5 py-1 text-[11px] tracking-wide text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <Block label="Overview">
            <p>{project.overview}</p>
          </Block>
          <Block label="Problem">
            <p>{project.problem}</p>
          </Block>
          <Block label="Solution">
            <p>{project.solution}</p>
          </Block>
          <Block label="Features">
            <ul className="flex flex-col gap-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-signal" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Block>
          <Block label="Architecture">
            <p>{project.architecture}</p>
          </Block>
          <Block label="Challenges">
            <p>{project.challenges}</p>
          </Block>
          <Block label="Learnings">
            <p>{project.learnings}</p>
          </Block>
        </div>
      </div>
    </article>
  );
}
