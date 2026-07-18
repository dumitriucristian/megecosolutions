import Link from "next/link";

import { Logo } from "@/components/Logo";
import { getSiteContent } from "@/content";
import { localizedPath, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const content = getSiteContent(locale);

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <Logo locale={locale} imageClassName="h-12" />
          <p className="text-sm leading-6 text-white/65">{content.meta.description}</p>
          <div className="text-sm text-white/65">
            <a
              className="font-semibold text-meg-cyan hover:text-white hover:underline"
              href={`mailto:${content.site.primaryEmail}`}
            >
              {content.site.primaryEmail}
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold tracking-wide text-white">{content.ui.pages}</div>
          <ul className="space-y-2 text-sm text-white/65">
            {content.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={localizedPath(locale, item.href)}
                  className="hover:text-meg-cyan hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold tracking-wide text-white">{content.ui.partner}</div>
          <div className="text-sm leading-6 text-white/65">
            {content.ui.mainPartner}{" "}
            <a
              className="font-semibold text-meg-green hover:text-white hover:underline"
              href={content.site.partner.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.site.partner.name}
            </a>
          </div>
          <div className="text-sm">
            <a
              className="text-white/65 hover:text-meg-cyan hover:underline"
              href={content.site.partner.applicationsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.ui.viewB2gApplications}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <div>
            © {year} {content.site.name}. {content.ui.allRightsReserved}
          </div>
          <div className="flex gap-4">
            <a className="hover:text-meg-cyan hover:underline" href="/sitemap.xml">
              {content.ui.sitemap}
            </a>
            <a className="hover:text-meg-cyan hover:underline" href="/robots.txt">
              {content.ui.robots}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
