"use client";

import { useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill in every field.");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email doesn't look right.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError("");

    // No backend is wired up yet — this simply confirms the message was
    // composed correctly. Replace with a real submission handler.
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus("success");
    form.reset();
  }

  return (
    <Section id="contact">
      <Reveal>
        <div className="flex flex-col items-start gap-4">
          <span className="mono text-xs tracking-widest text-signal uppercase">
            07 / Contact
          </span>
          <h2 className="max-w-xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">
            Have an idea worth building?
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            I&apos;m always interested in interesting products, experiments, and
            collaborations.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={100}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <Button
                render={<a href={`mailto:${site.email}`} />}
                size="lg"
                className="gap-1.5 px-5"
              >
                Let&apos;s Talk
                <ArrowUpRight className="size-4" />
              </Button>
              <Button
                render={
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="outline"
                size="lg"
                className="gap-1.5 px-5"
              >
                <GithubIcon className="size-4" /> GitHub
              </Button>
              <Button
                render={
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="outline"
                size="lg"
                className="gap-1.5 px-5"
              >
                <LinkedinIcon className="size-4" /> LinkedIn
              </Button>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="mono flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" /> {site.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="mono text-xs text-muted-foreground uppercase"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="rounded-lg border border-border bg-card/30 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-signal"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="mono text-xs text-muted-foreground uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="rounded-lg border border-border bg-card/30 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-signal"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="mono text-xs text-muted-foreground uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="resize-none rounded-lg border border-border bg-card/30 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-signal"
              />
            </div>

            <div className="flex items-center gap-4">
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="px-5"
              >
                {status === "submitting" ? "Sending…" : "Send Message"}
              </Button>
              {status === "error" ? (
                <span className="text-xs text-destructive">{error}</span>
              ) : null}
              {status === "success" ? (
                <span className="mono text-xs text-signal">
                  Message composed — email link above for now.
                </span>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
