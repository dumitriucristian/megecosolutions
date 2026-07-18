import { siteContentEn, type SiteContent } from "@/content/en";
import { siteContentEs } from "@/content/es";
import { defaultLocale, type Locale } from "@/lib/i18n";

export type { SiteContent };

const dictionaries: Record<Locale, SiteContent> = {
  en: siteContentEn,
  es: siteContentEs,
};

export function getSiteContent(locale: Locale = defaultLocale): SiteContent {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/** Shared non-UI site identity (safe for API routes). */
export const siteIdentity = siteContentEn.site;
