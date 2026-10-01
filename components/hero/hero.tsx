import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* contained glow — sits behind the avatar/heading, restrained and off to one side */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[12%] left-[6%] h-[420px] w-[420px] rounded-full bg-[oklch(0.623_0.214_259.815/20%)] blur-[130px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 grid-backdrop [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto w-full max-w-2xl px-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-10">
            <span className="mono flex items-center gap-2 text-xs tracking-wide text-muted-foreground uppercase">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-signal" />
              </span>
              Available for work
            </span>

            {/* Portrait + heading — replace /profile.jpg in /public with a real photograph when available */}
            <div className="flex items-center gap-6 sm:gap-7">
              <div className="group relative size-24 shrink-0 overflow-hidden rounded-full border border-border bg-muted shadow-[0_0_30px_-8px_oklch(0.623_0.214_259.815/35%)] sm:size-28">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Jayant Rao"
                  fill
                  priority
                  sizes="112px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Hey, I&apos;m Jayant.
              </h1>
            </div>

            <hr className="border-border" />

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {site.description}
            </p>

            <div className="flex flex-wrap items-center gap-5">
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

            <div className="flex flex-wrap items-center gap-3">
              <Button render={<Link href="#work" />} size="lg" className="rounded-full px-6">
                View my work →
              </Button>
              <Button
                render={<Link href={site.resume} />}
                variant="outline"
                size="lg"
                className="rounded-full px-6"
              >
                Resume ↗
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}