import { ImageResponse } from "next/og";

import { siteContent } from "@/content/siteContent";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #020617 0%, #0F172A 55%, #020617 100%)",
          padding: 64,
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            MEG
          </div>
          <div style={{ fontSize: 22, fontWeight: 650, opacity: 0.9 }}>
            {siteContent.site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            <span>Municipal waste solutions</span>
            <span>with energy resilience</span>
          </div>
          <div style={{ fontSize: 24, opacity: 0.82, maxWidth: 980, lineHeight: 1.35 }}>
            Waste diversion • Emission control • Compliance documentation • Modular deployment
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 18, opacity: 0.75 }}>{siteContent.site.domain}</div>
          <div style={{ fontSize: 18, opacity: 0.75 }}>
            {`Partner: ${siteContent.site.partner.name}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

