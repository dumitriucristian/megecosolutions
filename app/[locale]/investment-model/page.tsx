import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { buttonVariants } from "@/components/ui/button";
import { getSiteContent } from "@/content";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
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
    title: content.pages.investmentModel.title,
    description: content.pages.investmentModel.description,
  };
}

export default async function InvestmentModelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const { investmentModel } = getSiteContent(locale);

  return (
    <>
      <PageHero
        image={pageHeroImages.investmentModel.src}
        imageAlt={pageHeroImages.investmentModel.alt}
      >
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {investmentModel.title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty leading-7 text-white/75">{investmentModel.body}</p>
        <p className="mt-5 max-w-3xl text-pretty text-base font-medium leading-7 text-meg-cyan sm:text-lg">
          {investmentModel.overview}
        </p>
        <div className="mt-8">
          <Link
            href={localizedPath(locale, investmentModel.cta.href)}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 bg-brand-gradient text-white hover:opacity-90",
            )}
          >
            {investmentModel.cta.label}
          </Link>
        </div>
      </PageHero>

      <Section tone="tint">
        <Container className="py-14 sm:py-18">
          <div className="grid gap-6">
            {investmentModel.phases.map((phase) => (
              <div key={phase.title} className="border border-slate-200 bg-white p-8">
                <h2 className="text-lg font-semibold tracking-tight text-slate-950">
                  {phase.title}
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {phase.bullets.map((b) => (
                    <li
                      key={b}
                      className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
