import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "About",
  description: "Purpose-driven engineering and transparent delivery for B2G waste infrastructure.",
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <>
      <Section tone="light" className="border-b border-slate-200">
        <Container className="py-16 sm:py-20">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {about.title}
          </h1>
          <div className="mt-6 space-y-4 text-pretty leading-7 text-slate-600">
            {about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="tint">
        <Container className="py-14 sm:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Institutional pillars
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

