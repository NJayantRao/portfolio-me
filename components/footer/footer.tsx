import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-6 py-8 sm:px-8">
        <p className="text-sm text-muted-foreground">
          Built by {site.name}. All rights reserved. © 2026
        </p>
      </div>
    </footer>
  );
}
