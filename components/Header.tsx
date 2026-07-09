"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/cn";

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
                  "px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-slate-950 text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 inline-flex h-10 items-center justify-center bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-900"
          >
            Consult
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 items-center justify-center border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-950 hover:bg-slate-50 md:hidden"
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
                  "px-4 py-3 text-sm font-semibold",
                  active ? "bg-slate-950 text-white" : "text-slate-800 hover:bg-slate-100",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-2 inline-flex h-11 items-center justify-center bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-slate-900"
            onClick={() => setOpen(false)}
          >
            Schedule a consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}

