import { journey, education } from "@/data/journey";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";

export function JourneySection() {
  return (
    <Section id="about">
      <SectionHeading
        index="05"
        label="Journey"
        title="A little about me."
        subtitle="Computer Science student who prefers learning by building — currently spending most of my time on full-stack products and AI systems."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              I&apos;m a Computer Science undergraduate who enjoys understanding
              systems deeply, not just using them. Most of what I know has come
              from building real projects — full-stack apps, backend services,
              and lately, AI-powered tools — and figuring out what breaks along
              the way.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I&apos;m especially drawn to backend and systems thinking: how data
              flows, how services talk to each other, and how AI fits into
              software that people actually use. I&apos;m still learning, and I
              like it that way.
            </p>

            <div className="mt-4 rounded-xl border border-border bg-card/30 p-6">
              <span className="mono text-xs tracking-widest text-signal uppercase">
                Education
              </span>
              <p className="mt-3 font-medium">{education.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {education.institution} · {education.period}
              </p>
              <p className="mono mt-3 text-xs text-muted-foreground">
                CGPA {education.cgpa}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col">
            {journey.map((item, i) => (
              <div
                key={item.year}
                className="group grid grid-cols-[3.5rem_1px_1fr] gap-5"
              >
                <span className="mono pt-1 text-xs text-signal">{item.year}</span>
                <div className="relative flex justify-center">
                  <div className="w-px flex-1 bg-border" />
                  <span className="absolute top-1 size-1.5 -translate-x-1/2 rounded-full bg-signal" />
                </div>
                <div className={i !== journey.length - 1 ? "pb-9" : ""}>
                  <p className="font-medium tracking-tight">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
