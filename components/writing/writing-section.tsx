import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/data/posts";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";

export function WritingSection() {
  return (
    <Section id="writing">
      <SectionHeading
        index="06"
        label="Thinking / Writing"
        title="Thinking / Writing"
        subtitle="Notes on AI, backend systems, and the things I run into while building."
      />

      <div className="mt-12 flex flex-col">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 60}>
            <Link
              href={`/writing/${post.slug}`}
              className="group flex flex-col gap-2 border-t border-border py-6 transition-colors first:border-t sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div>
                <span className="mono text-[11px] tracking-widest text-signal uppercase">
                  {post.topic}
                </span>
                <h3 className="mt-1.5 text-lg font-medium tracking-tight text-balance transition-colors group-hover:text-signal">
                  {post.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
              <div className="mono flex shrink-0 items-center gap-1.5 text-xs tracking-wide text-muted-foreground uppercase">
                {post.status === "coming-soon" ? "Coming soon" : "Read"}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </Reveal>
        ))}
        <div className="border-t border-border" />
      </div>
    </Section>
  );
}
