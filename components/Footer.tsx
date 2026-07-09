import Link from "next/link";

import { siteContent } from "@/content/siteContent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-sm font-semibold text-slate-950">{siteContent.site.name}</div>
          <div className="text-sm leading-6 text-slate-600">
            Technical solutions for municipal waste management and energy resilience.
          </div>
          <div className="text-sm text-slate-600">
            <a className="font-semibold text-slate-950 hover:underline" href={`mailto:${siteContent.site.primaryEmail}`}>
              {siteContent.site.primaryEmail}
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-slate-950">Pages</div>
          <ul className="space-y-2 text-sm text-slate-600">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-slate-950 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-slate-950">Partner</div>
          <div className="text-sm leading-6 text-slate-600">
            Main partner:{" "}
            <a
              className="font-semibold text-slate-950 hover:underline"
              href={siteContent.site.partner.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteContent.site.partner.name}
            </a>
          </div>
          <div className="text-sm">
            <a
              className="text-slate-600 hover:text-slate-950 hover:underline"
              href={siteContent.site.partner.applicationsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View B2G applications
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {year} {siteContent.site.name}. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-slate-950 hover:underline" href="/sitemap.xml">
              Sitemap
            </a>
            <a className="hover:text-slate-950 hover:underline" href="/robots.txt">
              Robots
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

