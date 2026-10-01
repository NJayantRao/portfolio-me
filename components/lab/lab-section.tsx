import { experiments } from "@/data/experiments";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  active: "text-signal",
  exploring: "text-muted-foreground",
  paused: "text-muted-foreground/60",
};

export function LabSection() {
  return (
    <Section id="lab">
      <SectionHeading
        index="03"
        label="The Lab"
        title="The Lab"
        subtitle="Experiments, ideas, and things I'm currently figuring out."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {experiments.map((exp, i) => (
          <Reveal key={exp.id} delay={(i % 3) * 90}>
            <div className="group flex h-full flex-col justify-between rounded-xl border border-border bg-card/30 p-6 transition-colors duration-300 hover:bg-card">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium tracking-tight">{exp.title}</h3>
                  <span
                    className={cn(
                      "mono flex items-center gap-1.5 text-[10px] tracking-wide uppercase",
                      statusStyles[exp.status]
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        exp.status === "active" ? "bg-signal" : "bg-muted-foreground/50"
                      )}
                    />
                    {exp.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
