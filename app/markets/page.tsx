import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import { pageHeroImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Markets",
  description: "Solutions tailored to public-sector, healthcare, industrial, and corporate needs.",
};

export default function MarketsPage() {
  const { markets } = siteContent;

  return (
    <>
      <PageHero image={pageHeroImages.markets.src} imageAlt={pageHeroImages.markets.alt}>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {markets.title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty leading-7 text-white/75">
          Engagement models for B2G, institutional operators, and strategic stakeholders across the
          waste value chain.
        </p>
        <ul className="mt-6 max-w-3xl space-y-2 text-pretty text-base leading-7 text-white/85">
          {markets.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-meg-green" aria-hidden="true">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </PageHero>

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
