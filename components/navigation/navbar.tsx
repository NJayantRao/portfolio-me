"use client";

import { useState } from "react";
import Link from "next/link";
import { site, navLinks } from "@/data/site";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ResizableNavbar>
      <NavBody className="px-5 py-3 sm:px-7">
        <Link
          href="#top"
          className="relative z-20 flex size-9 shrink-0 items-center justify-center rounded-full border border-border mono text-xs font-medium tracking-wide text-foreground transition-colors hover:border-signal hover:text-signal"
        >
          {site.initials}
          <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full border-2 border-background bg-signal" />
        </Link>

        <NavItems
          items={navLinks.map(({ label, href }) => ({
            name: label,
            link: href,
          }))}
          className="hidden items-center gap-1 lg:flex"
        />

        <div className="relative z-20 hidden shrink-0 items-center gap-2 lg:flex">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-signal" />
          </span>
          <span className="text-xs text-muted-foreground">
            Available for work
          </span>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader className="px-4 py-2">
          <Link
            href="#top"
            className="relative z-20 flex size-9 items-center justify-center rounded-full border border-border mono text-xs font-medium tracking-wide text-foreground"
          >
            {site.initials}
            <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full border-2 border-background bg-signal" />
          </Link>
          <MobileNavToggle
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          className="border border-border bg-background/95 text-foreground backdrop-blur-xl"
        >
          <div className="mono mb-1 px-2 text-[10px] tracking-widest text-muted-foreground uppercase">
            {site.initials} / Navigation
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="w-full rounded-md px-2 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
