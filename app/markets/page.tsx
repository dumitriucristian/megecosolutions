import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Markets",
  description: "Solutions tailored to public-sector, healthcare, industrial, and corporate needs.",
};

export default function MarketsPage() {
  const { markets } = siteContent;

  return (
    <>
      <Section tone="light" className="border-b border-slate-200">
        <Container className="py-16 sm:py-20">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {markets.title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty leading-7 text-slate-600">
            Engagement models for B2G, institutional operators, and strategic stakeholders across the waste value chain.
          </p>
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="py-14 sm:py-18">
          <div className="grid gap-6 md:grid-cols-2">
            {markets.items.map((m) => (
              <div key={m.title} className="border border-slate-200 bg-white p-7">
                <h2 className="text-base font-semibold text-slate-950">{m.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{m.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

