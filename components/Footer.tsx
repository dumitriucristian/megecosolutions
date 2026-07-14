import Link from "next/link";

import { Logo } from "@/components/Logo";
import { siteContent } from "@/content/siteContent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <Logo imageClassName="h-12" />
          <p className="text-sm leading-6 text-white/65">
            Waste to Energy Solutions — technical infrastructure for municipal waste management and
            energy resilience.
          </p>
          <div className="text-sm text-white/65">
            <a
              className="font-semibold text-meg-cyan hover:text-white hover:underline"
              href={`mailto:${siteContent.site.primaryEmail}`}
            >
              {siteContent.site.primaryEmail}
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold tracking-wide text-white">Pages</div>
          <ul className="space-y-2 text-sm text-white/65">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-meg-cyan hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold tracking-wide text-white">Partner</div>
          <div className="text-sm leading-6 text-white/65">
            Main partner:{" "}
            <a
              className="font-semibold text-meg-green hover:text-white hover:underline"
              href={siteContent.site.partner.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteContent.site.partner.name}
            </a>
          </div>
          <div className="text-sm">
            <a
              className="text-white/65 hover:text-meg-cyan hover:underline"
              href={siteContent.site.partner.applicationsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View B2G applications
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <div>
            © {year} {siteContent.site.name}. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a className="hover:text-meg-cyan hover:underline" href="/sitemap.xml">
              Sitemap
            </a>
            <a className="hover:text-meg-cyan hover:underline" href="/robots.txt">
              Robots
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
