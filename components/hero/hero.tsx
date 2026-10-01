import Link from "next/link";
import { FileText } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-backdrop [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="flex size-16 items-center justify-center rounded-full border border-border bg-card/60 mono text-lg text-signal">
              {site.initials}
            </div>

            <div>
              <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Hey, I&apos;m Jayant
              </h1>
              <p className="mt-2 flex items-center gap-2 text-muted-foreground">
                {site.role}
                <span className="flex items-center gap-1.5 text-sm text-signal">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-signal" />
                  </span>
                  Available for work
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.facts.map((fact) => (
                <p key={fact}>{fact}</p>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <Button render={<Link href={site.resume} />} size="lg" className="gap-1.5 px-5">
                <FileText className="size-4" /> Resume / CV
              </Button>
              <Button
                render={<Link href="#contact" />}
                variant="outline"
                size="lg"
                className="px-5"
              >
                Get in Touch
              </Button>
            </div>

            <div className="mt-2 flex items-center gap-5">
              <Link
                href={site.linkedin}
                target="_blank"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="size-4" /> LinkedIn
              </Link>
              <Link
                href={site.github}
                target="_blank"
                className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-4" /> GitHub
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
