import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import { pageHeroImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start the conversation. Confidential, structured inquiry for B2G and institutional projects.",
};

export default function ContactPage() {
  const { contact } = siteContent;

  return (
    <>
      <PageHero image={pageHeroImages.contact.src} imageAlt={pageHeroImages.contact.alt}>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {contact.title}
        </h1>
        <div className="mt-6 max-w-3xl space-y-4 text-pretty leading-7 text-white/75">
          {contact.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </PageHero>

      <Section tone="tint">
        <Container className="py-14 sm:py-18">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />
            <aside className="border border-slate-200 bg-white p-8">
              <h2 className="text-base font-semibold text-slate-950">Direct contact</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Prefer email? We respond from a monitored institutional inbox.
              </p>
              <div className="mt-5 border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-xs font-semibold text-slate-500">Email</div>
                <a
                  className="mt-1 block text-sm font-semibold text-slate-950 hover:underline"
                  href={`mailto:${siteContent.site.primaryEmail}`}
                >
                  {siteContent.site.primaryEmail}
                </a>
              </div>

              <div className="mt-6">
                <div className="text-xs font-semibold text-slate-500">Partner</div>
                <a
                  href={siteContent.site.partner.applicationsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-50"
                >
                  View WPowertech applications
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
