import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/shared/icons";

export function GithubSection() {
  return (
    <Section border={false} className="pt-0">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-card/30 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="flex items-center gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border">
              <GithubIcon className="size-5" />
            </span>
            <div>
              <p className="font-medium tracking-tight">
                Open Source & Activity
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Most of what I build lives on GitHub, including work in
                progress.
              </p>
            </div>
          </div>
          <Button
            render={
              <a href={site.github} target="_blank" rel="noopener noreferrer" />
            }
            variant="outline"
            className="gap-1.5"
          >
            View GitHub
            <ArrowUpRight className="size-3.5" />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
