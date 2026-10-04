import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { ArrowUpRight, ArrowDown, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
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

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8 lg:pl-20">
        <div className="grid gap-16 lg:grid-cols-[380px_1fr] lg:items-center lg:gap-16">
          {/* Photo stack — replace /profile.jpg in /public with a real photograph when available */}
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:mx-0 lg:max-w-none">
              <p
                className={`${caveat.className} pointer-events-none absolute -left-16 bottom-14 hidden -rotate-6 text-xl leading-7 text-muted-foreground xl:block`}
              >
                Learn
                <br />
                Build
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

              <div className="flex flex-wrap items-center gap-6 pt-1">
                <Link
                  href={site.github}
                  target="_blank"
                  aria-label="GitHub"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GithubIcon className="size-4" />
                  <span aria-hidden="true" className="icon-link-label">
                    GitHub
                  </span>
                </Link>
                <Link
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <LinkedinIcon className="size-4" />
                  <span aria-hidden="true" className="icon-link-label">
                    LinkedIn
                  </span>
                </Link>
                <Link
                  href={site.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <FaXTwitter className="size-4" />
                  <span aria-hidden="true" className="icon-link-label">
                    X
                  </span>
                </Link>
                <Link
                  href={`mailto:${site.email}`}
                  aria-label="Email"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4" />
                  <span aria-hidden="true" className="icon-link-label">
                    Email
                  </span>
                </Link>
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
