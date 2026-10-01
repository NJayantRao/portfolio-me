import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/shared/icons";

export function ProjectCard({
  project,
  size = "default",
}: {
  project: Project;
  size?: "default" | "large";
}) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/30 transition-colors duration-300 hover:border-signal/40">
      {/* cover */}
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden border-b border-border bg-muted/40 grid-backdrop",
          size === "large" ? "aspect-[16/9]" : "aspect-[16/10]"
        )}
      >
        <span
          className={cn(
            "mono font-medium text-foreground/10 transition-colors duration-300 group-hover:text-signal/15",
            size === "large" ? "text-8xl" : "text-6xl"
          )}
        >
          {project.index}
        </span>
        <span className="absolute top-3 right-3 mono rounded-full border border-border bg-background/70 px-2.5 py-1 text-[10px] tracking-wide text-muted-foreground uppercase backdrop-blur-sm">
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3
          className={cn(
            "font-medium tracking-tight",
            size === "large" ? "text-2xl" : "text-lg"
          )}
        >
          {project.title}
        </h3>

        <div className="mt-2 flex flex-col gap-0.5">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-3" />{" "}
              {project.github.replace("https://", "")}
            </a>
          ) : null}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="mono rounded-full bg-muted px-2.5 py-1 text-[10px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="mt-5 flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-signal"
        >
          View Details
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
