"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = useMemo(() => siteContent.nav, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center bg-slate-950 text-sm font-semibold text-white">
            MEG
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-950">
            {siteContent.site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  buttonVariants({ variant: active ? "default" : "ghost", size: "sm" }),
                  active ? "" : "text-slate-700",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "sm" }), "ml-2")}
          >
            Consult
          </Link>
        </nav>

        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "md:hidden")}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn("border-t border-slate-200 bg-white md:hidden", !open && "hidden")}
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
                  buttonVariants({ variant: active ? "default" : "ghost" }),
                  "h-11 justify-start px-4",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={cn(buttonVariants(), "mt-2 h-11")}
            onClick={() => setOpen(false)}
          >
            Schedule a consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}

