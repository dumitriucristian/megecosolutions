import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipToContent } from "@/components/SkipToContent";
import { getSiteContent } from "@/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const content = getSiteContent(locale);

  return {
    title: {
      default: content.meta.defaultTitle,
      template: content.meta.titleTemplate,
    },
    description: content.meta.description,
    metadataBase: new URL(`https://${content.site.domain}`),
    openGraph: {
      title: content.meta.defaultTitle,
      description: content.meta.description,
      url: `https://${content.site.domain}/${locale}`,
      siteName: content.site.name,
      locale: content.meta.openGraphLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.defaultTitle,
      description: content.meta.description,
    },
    alternates: {
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const content = getSiteContent(locale);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(locale)};`,
        }}
      />
      <SkipToContent label={content.ui.skipToContent} />
      <Header locale={locale} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
