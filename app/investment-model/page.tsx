import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import { pageHeroImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Investment Model",
  description:
    "A structured development model from feasibility to operation — designed to minimize risk and support long-term performance.",
};

export default function InvestmentModelPage() {
  const { investmentModel } = siteContent;

  return (
    <>
      <PageHero image={pageHeroImages.investmentModel.src} imageAlt={pageHeroImages.investmentModel.alt}>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {investmentModel.title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty leading-7 text-white/75">
          {investmentModel.body}
        </p>
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
