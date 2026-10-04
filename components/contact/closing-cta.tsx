import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <Section border={false} className="pt-0 pb-0">
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-card/30 px-6 py-16 text-center">
          <h2 className="max-w-md text-2xl font-medium tracking-tight text-balance sm:text-3xl">
            Hey, you scrolled this far — let&apos;s connect!
          </h2>
          <Button
            render={<Link href={`mailto:${site.email}`} />}
            size="lg"
            className="gap-1.5 px-5"
          >
            Get in Touch
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
