import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Section } from "@/components/Section";
import { UseCaseCards } from "@/components/UseCaseCards";
import { siteContent } from "@/content/siteContent";
import { applicationsGallery } from "@/lib/media";

export const metadata: Metadata = {
  title: "Applications (B2G)",
  description:
    "Government and institutional applications for waste diversion, emission control, and energy resilience.",
};

export default function ApplicationsPage() {
  const { applications } = siteContent;

  return (
    <>
      <Section tone="dark">
        <Container className="py-16 sm:py-20">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {applications.title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty leading-7 text-white/75">
            {applications.intro}
          </p>
        </Container>
      </Section>

      <Section tone="dark">
        <Container className="pb-6">
          <GalleryGrid items={applicationsGallery} columns={2} />
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
              <li key={p} className="border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/75">
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href={applications.source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center bg-white px-6 text-sm font-semibold text-slate-950 hover:bg-white/90"
            >
              {applications.source.label}
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}

