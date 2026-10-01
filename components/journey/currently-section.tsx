import { currently } from "@/data/journey";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";

export function CurrentlySection() {
  return (
    <Section border={false} className="pt-0 pb-16 sm:pb-20">
      <div className="grid gap-4 sm:grid-cols-3">
        {currently.map((col, i) => (
          <Reveal key={col.label} delay={i * 90}>
            <div className="h-full rounded-xl border border-border bg-card/30 p-6">
              <span className="mono text-xs tracking-widest text-signal uppercase">
                {col.label}
              </span>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
