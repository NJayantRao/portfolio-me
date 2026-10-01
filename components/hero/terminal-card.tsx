"use client";

import { useEffect, useState } from "react";

const LINES: { prompt?: string; text: string; tone?: "muted" | "signal" }[] = [
  { prompt: "~/jayant", text: "" },
  { prompt: "$", text: "whoami" },
  { text: "jayant@developer", tone: "muted" },
  { prompt: "$", text: "currently" },
  { text: "→ building AI systems", tone: "muted" },
  { text: "→ learning system design", tone: "muted" },
  { text: "→ shipping products", tone: "muted" },
  { prompt: "$", text: "status" },
];

export function TerminalCard() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= LINES.length) return;
    const delay = visibleCount === 0 ? 200 : 260;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  const done = visibleCount >= LINES.length;

  return (
    <div className="w-full max-w-md rounded-xl border border-border bg-card/60 shadow-2xl shadow-black/40 backdrop-blur-sm">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-muted" />
        <span className="size-2.5 rounded-full bg-muted" />
        <span className="size-2.5 rounded-full bg-muted" />
        <span className="mono ml-2 text-[11px] text-muted-foreground">
          jayant — zsh
        </span>
      </div>
      <div className="mono flex flex-col gap-1.5 px-5 py-5 text-[13px] leading-relaxed">
        {LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.prompt ? (
              <span className="shrink-0 text-signal">{line.prompt}</span>
            ) : null}
            <span
              className={
                line.tone === "muted"
                  ? "text-muted-foreground"
                  : "text-foreground"
              }
            >
              {line.text}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-1">
          {done ? (
            <>
              <span className="size-1.5 animate-pulse-dot rounded-full bg-signal" />
              <span className="text-muted-foreground">
                available for interesting ideas
              </span>
            </>
          ) : null}
          <span className="h-3.5 w-[7px] animate-blink bg-foreground/70" />
        </div>
      </div>
    </div>
  );
}
