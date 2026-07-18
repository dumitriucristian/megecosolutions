export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Prefix a path with the locale. Path should start with `/` (e.g. `/contact`). */
export function localizedPath(locale: Locale, path: string = "/"): string {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

/** Strip leading locale segment from a pathname. */
export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  if (segments.length >= 2 && isLocale(segments[1])) {
    const rest = segments.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : defaultLocale;
}

export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  return localizedPath(nextLocale, stripLocaleFromPathname(pathname));
}
