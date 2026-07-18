import type { MetadataRoute } from "next";

import { siteIdentity } from "@/content";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteIdentity.domain}`;
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/solutions",
    "/applications",
    "/markets",
    "/investment-model",
    "/contact",
  ];

  return locales.flatMap((locale) =>
    routes.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${base}/${l}${path}`]),
        ),
      },
    })),
  );
}
