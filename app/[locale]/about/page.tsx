import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { getSiteContent } from "@/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { pageHeroImages } from "@/lib/media";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const content = getSiteContent(raw);
  return {
    title: content.pages.about.title,
    description: content.pages.about.description,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const { about, ui } = getSiteContent(locale);

  return (
    <>
      <PageHero image={pageHeroImages.about.src} imageAlt={pageHeroImages.about.alt}>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {about.title}
        </h1>
        <div className="mt-6 space-y-4 text-pretty leading-7 text-white/75">
          {about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </PageHero>

      <Section tone="tint">
        <Container className="py-14 sm:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            {ui.aboutPillarsTitle}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {about.pillars.map((p) => (
              <div key={p.title} className="border border-slate-200 bg-white p-7">
                <h3 className="text-base font-semibold text-slate-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
