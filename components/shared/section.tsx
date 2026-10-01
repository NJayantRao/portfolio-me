import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
  border = true,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  border?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-20 sm:py-28",
        border && "border-t border-border",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">{children}</div>
    </section>
  );
}
