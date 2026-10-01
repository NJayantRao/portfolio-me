import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  label,
  title,
  subtitle,
  align = "left",
  className,
}: {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="mono text-xs tracking-widest text-signal">
          {index}
        </span>
        <span className="mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {label}
        </span>
      </div>
      <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-xl text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
