import type { MetadataRoute } from "next";

import { siteIdentity } from "@/content";

export default function robots(): MetadataRoute.Robots {
  const base = `https://${siteIdentity.domain}`;
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}
