import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import { pageHeroImages, solutionsGallery } from "@/lib/media";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Engineering solutions for comprehensive municipal waste management, recovery, and energy resilience.",
};

export default function SolutionsPage() {
  const { solutions } = siteContent;

  return (
    <>
      <PageHero image={pageHeroImages.solutions.src} imageAlt={pageHeroImages.solutions.alt}>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {solutions.title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty leading-7 text-white/75">
          {solutions.intro}
        </p>
      </PageHero>

      <Section tone="tint">
        <Container className="py-12">
          <GalleryGrid items={solutionsGallery} columns={2} />
        </Container>
      </Section>

      <Section tone="light">
        <Container className="py-14 sm:py-18">
          <div className="space-y-10">
            {solutions.items.map((s) => (
              <section
                key={s.slug}
                id={s.slug}
                className="border border-slate-200 bg-white p-8"
              >
                <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{s.body}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
