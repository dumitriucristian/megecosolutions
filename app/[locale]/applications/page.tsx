import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { UseCaseCards } from "@/components/UseCaseCards";
import { getSiteContent } from "@/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { applicationsGallery, pageHeroImages } from "@/lib/media";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const content = getSiteContent(raw);
  return {
    title: content.pages.applications.title,
    description: content.pages.applications.description,
  };
}

export default async function ApplicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const { applications } = getSiteContent(locale);

  return (
    <>
      <PageHero
        image={pageHeroImages.applications.src}
        imageAlt={pageHeroImages.applications.alt}
      >
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {applications.title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty leading-7 text-white/75">{applications.intro}</p>
      </PageHero>

      <Section tone="dark">
        <Container className="pb-6 pt-12">
          <GalleryGrid items={applicationsGallery} columns={1} />
        </Container>
        <Container className="py-10 sm:py-14">
          <UseCaseCards items={applications.useCases} />
        </Container>
      </Section>

      <Section tone="dark" className="border-t border-white/10">
        <Container className="py-14 sm:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {applications.principlesTitle}
          </h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {applications.principles.map((p) => (
              <li
                key={p}
                className="border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/75"
              >
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
