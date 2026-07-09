import type { MetadataRoute } from "next";

import { siteContent } from "@/content/siteContent";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteContent.site.domain}`;
  const now = new Date();

  const routes = [
    "/",
    "/about",
    "/solutions",
    "/applications",
    "/markets",
    "/investment-model",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

