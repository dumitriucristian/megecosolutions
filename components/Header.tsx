"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { Logo } from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import { getSiteContent } from "@/content";
import {
  localeLabels,
  locales,
  localizedPath,
  stripLocaleFromPathname,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const content = useMemo(() => getSiteContent(locale), [locale]);
  const nav = content.nav;
  const pathWithoutLocale = stripLocaleFromPathname(pathname);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-6">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const href = localizedPath(locale, item.href);
            const active = pathWithoutLocale === item.href;
            return (
              <Link
                key={item.href}
                href={href}
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

        <div className="flex items-center gap-2">
          <div
            className="hidden items-center gap-1 md:flex"
            role="group"
            aria-label={content.ui.language}
          >
            {locales.map((code) => {
              const active = code === locale;
              return (
                <Link
                  key={code}
                  href={switchLocalePath(pathname, code)}
                  hrefLang={code}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "min-w-10 px-2 font-semibold uppercase tracking-wide",
                    active
                      ? "bg-white/15 text-white"
                      : "text-white/60 hover:bg-white/10 hover:text-white",
                  )}
                  aria-current={active ? "true" : undefined}
                >
                  {code}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white lg:hidden",
            )}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? content.ui.closeMenu : content.ui.menu}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn("border-t border-white/10 bg-slate-950 lg:hidden", !open && "hidden")}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
          {nav.map((item) => {
            const href = localizedPath(locale, item.href);
            const active = pathWithoutLocale === item.href;
            return (
              <Link
                key={item.href}
                href={href}
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

          <div className="mt-3 flex gap-2 border-t border-white/10 pt-3 md:hidden">
            {locales.map((code) => {
              const active = code === locale;
              return (
                <Link
                  key={code}
                  href={switchLocalePath(pathname, code)}
                  hrefLang={code}
                  className={cn(
                    buttonVariants({ variant: active ? "default" : "outline", size: "sm" }),
                    active
                      ? "bg-brand-gradient text-white"
                      : "border-white/20 bg-transparent text-white hover:bg-white/10",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {localeLabels[code]}
                </Link>
              );
            })}
          </div>

          <Link
            href={localizedPath(locale, "/contact")}
            className={cn(
              buttonVariants(),
              "mt-2 h-11 bg-brand-gradient text-white hover:opacity-90",
            )}
            onClick={() => setOpen(false)}
          >
            {content.ui.scheduleConsultation}
          </Link>
        </nav>
      </div>
    </header>
  );
}
