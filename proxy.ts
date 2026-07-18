import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, isLocale, locales } from "@/lib/i18n";

function getPreferredLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, qValue] = part.trim().split(";q=");
      const language = tag?.split("-")[0]?.toLowerCase() ?? "";
      const quality = qValue ? Number(qValue) : 1;
      return { language, quality: Number.isFinite(quality) ? quality : 1 };
    })
    .filter((item) => item.language)
    .sort((a, b) => b.quality - a.quality);

  for (const item of preferred) {
    if (isLocale(item.language)) return item.language;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except:
     * - api routes
     * - _next internals
     * - static files (containing a dot)
     */
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
  ],
};
