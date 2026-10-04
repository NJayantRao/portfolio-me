"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { journey } from "@/data/journey";
import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";

export function JourneySection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  /*
   * Track only the Journey section.
   *
   * start 70%  → animation begins when the section enters the viewport
   * end   40%  → animation completes before the section leaves
   */
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 40%"],
  });

  return (
    <Section id="about">
      <SectionHeading
        index="05"
        label="Journey"
        title="My academic journey."
        subtitle="The milestones that shaped my path into computer science."
      />

      <div ref={timelineRef} className="relative mx-auto max-w-5xl">
        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block">
          {/* Base gray line */}
          <div className="absolute inset-0 bg-border" />

          {/* Animated blue progress line */}
          <motion.div
            className="absolute left-0 top-0 h-full w-px origin-top bg-signal"
            style={{
              scaleY: scrollYProgress,
            }}
          />
        </div>

        {/* =====================================================
            JOURNEY ITEMS
        ===================================================== */}

        <div className="space-y-16 md:space-y-20">
          {journey.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isCurrent = index === 0;

            return (
              <TimelineItem
                key={item.period}
                item={item}
                index={index}
                total={journey.length}
                isLeft={isLeft}
                isCurrent={isCurrent}
                progress={scrollYProgress}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* =============================================================
   TIMELINE ITEM
============================================================= */

function TimelineItem({
  item,
  index,
  total,
  isLeft,
  isCurrent,
  progress,
}: {
  item: (typeof journey)[number];
  index: number;
  total: number;
  isLeft: boolean;
  isCurrent: boolean;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  /*
   * Calculate where this particular node sits on the timeline.
   *
   * Example with 3 items:
   *
   * 1st → ~16%
   * 2nd → ~50%
   * 3rd → ~83%
   */
  const threshold = (index + 0.5) / total;

  /*
   * Node becomes active when the blue progress line
   * reaches its position.
   */
  const nodeProgress = useTransform(
    progress,
    [Math.max(0, threshold - 0.08), threshold],
    [0, 1]
  );

  const nodeScale = useTransform(
    progress,
    [Math.max(0, threshold - 0.08), threshold],
    [0.75, 1]
  );

  const nodeBorder = useTransform(
    progress,
    [Math.max(0, threshold - 0.08), threshold],
    ["rgba(255,255,255,0.15)", "var(--signal)"]
  );

  const glowOpacity = useTransform(nodeProgress, [0, 1], [0, 0.2]);
  const inactiveDotOpacity = useTransform(nodeProgress, [0, 1], [1, 0]);
  const pulseOpacity = useTransform(nodeProgress, [0, 1], [0, 0.8]);

  return (
    <motion.div
      className="relative grid min-h-[130px] md:grid-cols-2"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
    >
      {/* =====================================================
          LEFT CARD
      ===================================================== */}

      {isLeft ? (
        <motion.div
          className="pr-10 md:pr-16"
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <TimelineCard item={item} isCurrent={isCurrent} align="left" />
        </motion.div>
      ) : (
        <div />
      )}

      {/* =====================================================
          RIGHT CARD
      ===================================================== */}

      {!isLeft ? (
        <motion.div
          className="pl-10 md:pl-16"
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <TimelineCard item={item} isCurrent={isCurrent} align="right" />
        </motion.div>
      ) : (
        <div />
      )}

      {/* =====================================================
          CENTER NODE
      ===================================================== */}

      <motion.div
        className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
        style={{
          scale: nodeScale,
        }}
      >
        {/* Outer glow */}
        <motion.div
          className="absolute -inset-3 rounded-full bg-signal blur-md"
          style={{
            opacity: glowOpacity,
          }}
        />

        {/* Node */}
        <motion.div
          className="relative flex size-5 items-center justify-center rounded-full border bg-background"
          style={{
            borderColor: nodeBorder,
          }}
        >
          {/* Inactive dot */}
          <motion.span
            className="absolute size-2 rounded-full bg-muted-foreground"
            style={{
              opacity: inactiveDotOpacity,
            }}
          />

          {/* Active blue dot */}
          <motion.span
            className="absolute size-2 rounded-full bg-signal"
            style={{
              opacity: nodeProgress,
            }}
          />

          {/* Current item pulse */}
          {isCurrent && (
            <motion.span
              className="absolute -inset-2 rounded-full border border-signal/30"
              style={{
                opacity: pulseOpacity,
              }}
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* =====================================================
          CONNECTOR
      ===================================================== */}

      <motion.div
        className={`absolute top-1/2 hidden h-px w-14 md:block ${
          isLeft ? "right-1/2 mr-2 origin-right" : "left-1/2 ml-2 origin-left"
        }`}
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        whileInView={{
          scaleX: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
      >
        <div className="h-px w-full bg-border" />
      </motion.div>
    </motion.div>
  );
}

/* =============================================================
   TIMELINE CARD
============================================================= */

function TimelineCard({
  item,
  isCurrent,
  align,
}: {
  item: (typeof journey)[number];
  isCurrent: boolean;
  align: "left" | "right";
}) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl border bg-card/40 p-5 backdrop-blur-sm ${
        isCurrent ? "border-signal/30" : "border-border"
      }`}
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      {/* =====================================================
          HOVER GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle,rgba(255,255,255,0.07),transparent_65%)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className={`relative ${align === "left" ? "text-right" : "text-left"}`}
      >
        {/* Current badge */}
        {isCurrent && (
          <span className="mono mb-3 inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal/5 px-3 py-1 text-[10px] tracking-widest text-signal uppercase">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative size-1.5 rounded-full bg-signal" />
            </span>
            Currently here
          </span>
        )}

        {/* Education */}
        <h3 className="mt-2 text-lg font-medium tracking-tight">
          {item.title}
        </h3>

        {/* Institution */}
        <p className="mt-1 text-sm text-foreground/70">{item.institution}</p>

        {/* Period */}
        <p className="mono mt-2 text-xs tracking-widest text-signal">
          [{item.period}]
        </p>
      </div>
    </motion.div>
  );
}
