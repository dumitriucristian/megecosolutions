import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactForm } from "@/components/ContactForm";
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
    title: content.pages.contact.title,
    description: content.pages.contact.description,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const content = getSiteContent(locale);
  const { contact, ui } = content;

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
            <ContactForm locale={locale} />
            <aside className="border border-slate-200 bg-white p-8">
              <h2 className="text-base font-semibold text-slate-950">{ui.contactAsideTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{ui.contactAsideIntro}</p>
              <div className="mt-5 border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-xs font-semibold text-slate-500">{ui.contactEmailLabel}</div>
                <a
                  className="mt-1 block text-sm font-semibold text-slate-950 hover:underline"
                  href={`mailto:${content.site.primaryEmail}`}
                >
                  {content.site.primaryEmail}
                </a>
              </div>

              <div className="mt-5 border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-xs font-semibold text-slate-500">{ui.contactTeamLabel}</div>
                <ul className="mt-3 space-y-4">
                  {contact.people.map((person) => (
                    <li key={person.name}>
                      <p className="text-sm font-semibold text-slate-950">{person.name}</p>
                      <p className="mt-0.5 text-xs font-medium text-slate-500">{person.role}</p>
                      <a
                        className="mt-1 block text-sm text-slate-600 hover:text-slate-950 hover:underline"
                        href={person.phoneHref}
                      >
                        {person.phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-xs font-semibold text-slate-500">{ui.contactCompanyLabel}</div>
                <p className="mt-1 text-sm font-semibold text-slate-950">{contact.company.name}</p>
                <address className="mt-2 space-y-0.5 text-sm not-italic leading-6 text-slate-600">
                  {contact.company.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <p className="mt-3 text-sm text-slate-600">
                  {contact.company.registrationLabel} {contact.company.registrationNumber}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
