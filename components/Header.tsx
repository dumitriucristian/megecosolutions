"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { Logo } from "@/components/Logo";
import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = useMemo(() => siteContent.nav, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "font-medium tracking-wide",
                  active
                    ? "bg-brand-gradient text-white hover:text-white"
                    : "text-white/75 hover:bg-white/10 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white md:hidden",
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn("border-t border-white/10 bg-slate-950 md:hidden", !open && "hidden")}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "h-11 justify-start px-4 font-medium tracking-wide",
                  active
                    ? "bg-brand-gradient text-white hover:text-white"
                    : "text-white/75 hover:bg-white/10 hover:text-white",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "mt-2 h-11 bg-brand-gradient text-white hover:opacity-90",
            )}
            onClick={() => setOpen(false)}
          >
            Schedule a consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
