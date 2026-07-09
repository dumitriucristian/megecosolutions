import type { MetadataRoute } from "next";

import { siteContent } from "@/content/siteContent";

export default function robots(): MetadataRoute.Robots {
  const base = `https://${siteContent.site.domain}`;
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}

