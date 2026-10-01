import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { ArrowUpRight, ArrowDown, GraduationCap, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";

// Single accent font, used only for the small handwritten annotations below.
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "600"] });

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-28 pb-24 sm:pt-32 lg:pb-32"
    >
      {/* left margin rail */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-8 hidden w-px bg-border lg:block"
      />
      <span className="mono pointer-events-none absolute top-32 left-11 hidden text-xs text-muted-foreground lg:block">
        01
      </span>

      {/* decorative arc, bottom right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -bottom-48 hidden size-[560px] rounded-full border border-border lg:block"
      >
        <span className="absolute top-[16%] left-[-4px] size-2 rounded-full bg-signal" />
      </div>
      <div className="mono pointer-events-none absolute right-10 bottom-20 hidden flex-col items-end gap-1 text-right text-[11px] tracking-widest text-muted-foreground uppercase lg:flex">
        <span>Ideas</span>
        <span>+</span>
        <span>Products</span>
        <span>+</span>
        <span>Impact</span>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8 lg:pl-20">
        <div className="grid gap-16 lg:grid-cols-[380px_1fr] lg:items-center lg:gap-16">
          {/* Photo stack — replace /profile.jpg in /public with a real photograph when available */}
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:mx-0 lg:max-w-none">
              <p
                className={`${caveat.className} pointer-events-none absolute -left-16 bottom-14 hidden -rotate-6 text-xl leading-7 text-muted-foreground xl:block`}
              >
                Build
                <br />
                Learn
                <br />
                Ship
              </p>

              <div className="relative aspect-[4/5] w-full">
                <div className="absolute top-[4%] left-[-6%] z-0 h-[92%] w-[92%] -rotate-6 rounded-2xl border border-border bg-muted/50 grid-backdrop" />
                <div className="absolute top-[-2%] right-[-5%] z-0 h-[94%] w-[94%] rotate-3 rounded-2xl border border-border bg-muted/40 grid-backdrop" />

                <div className="group absolute inset-0 z-10 overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl shadow-black/40">
                  <Image
                    src="/profile.jpg"
                    alt="Portrait of Jayant Rao"
                    fill
                    priority
                    sizes="(min-width: 1024px) 380px, 90vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <Link
                    href="/profile.jpg"
                    target="_blank"
                    aria-label="View full photo"
                    className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm transition-colors hover:bg-background/70"
                  >
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <span className="mono absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-[11px] text-foreground backdrop-blur-sm">
                    <span className="size-1.5 rounded-full bg-signal" />
                    {site.location}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={120}>
            <div className="relative flex flex-col gap-7">
              <p
                className={`${caveat.className} pointer-events-none absolute -top-16 right-0 hidden -rotate-3 text-xl leading-7 text-muted-foreground sm:block`}
              >
                turning
                <br />
                ideas into
                <br />
                real products
              </p>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-signal" />
                <span className="mono text-xs tracking-widest text-muted-foreground uppercase">
                  Full-Stack Developer
                </span>
              </div>

              <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Hey, I&apos;m Jayant<span className="text-signal">.</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                {site.description}
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-7 sm:grid-cols-4">
                {site.points.map((point, i) => (
                  <div key={point} className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2">
                      <span className="mono text-sm text-signal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                    </div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button
                  render={<Link href="#work" />}
                  size="lg"
                  className="px-5"
                >
                  View my work →
                </Button>
                <Button
                  render={<Link href={site.resume} />}
                  variant="outline"
                  size="lg"
                  className="px-5"
                >
                  Resume ↗
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-1">
                <Link
                  href={site.github}
                  target="_blank"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GithubIcon className="size-4" /> GitHub ↗
                </Link>
                <Link
                  href={site.linkedin}
                  target="_blank"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <LinkedinIcon className="size-4" /> LinkedIn ↗
                </Link>
                <Link
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4" /> Email ↗
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 flex items-center gap-3 lg:mt-24">
          <span className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground">
            <ArrowDown className="size-4 animate-bounce motion-reduce:animate-none" />
          </span>
          <span className="mono text-xs tracking-widest text-muted-foreground uppercase">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
