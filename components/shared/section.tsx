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
        "scroll-mt-20 py-16 sm:py-20 lg:py-24",
        border && "border-t border-border",
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-8">
        {children}
      </div>
    </section>
  );
}
