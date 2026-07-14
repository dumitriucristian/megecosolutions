import Link from "next/link";

import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/utils";
import { heroGallery, pageHeroImages } from "@/lib/media";

export default function Home() {
  return (
    <div>
      <PageHero
        image={pageHeroImages.home.src}
        imageAlt={pageHeroImages.home.alt}
        containerClassName="py-20 sm:py-28"
      >
        <p className="text-sm font-medium tracking-wide text-slate-200/80">
          {siteContent.site.name} • Municipal waste management • Energy resilience
        </p>

        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          {siteContent.home.hero.headline}
        </h1>

        <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-200/85 sm:text-xl">
          {siteContent.home.hero.subheadline}
        </p>

        <p className="mt-5 max-w-3xl text-pretty text-base font-medium leading-7 text-meg-cyan sm:text-lg">
          {siteContent.home.hero.regionalRole}
        </p>

        <p className="mt-6 max-w-3xl text-pretty leading-7 text-slate-200/75">
          {siteContent.home.hero.supporting}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteContent.home.hero.ctas[0].href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-brand-gradient text-white hover:opacity-90",
              )}
            >
              {siteContent.home.hero.ctas[0].label}
            </Link>
            <Link
              href={siteContent.home.hero.ctas[1].href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 border-meg-cyan/40 bg-white/5 text-white hover:border-meg-green/60 hover:bg-white/10",
              )}
            >
            {siteContent.home.hero.ctas[1].label}
          </Link>
        </div>
      </PageHero>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <GalleryGrid items={heroGallery} columns={2} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-18">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Designed for B2G performance and accountability
          </h2>
          <p className="mt-3 max-w-3xl text-pretty leading-7 text-slate-600">
            Regulatory clarity, measurable outcomes, and integration into existing municipal
            logistics — engineered for real-world operation.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {siteContent.home.highlights.map((h) => (
              <Card key={h.title} className="bg-slate-50 ring-slate-200">
                <CardHeader className="border-b border-slate-200">
                  <CardTitle className="text-base">{h.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-slate-600">{h.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-18">
          <div className="border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold tracking-wide text-white/80">
              {siteContent.home.partner.title}
            </p>
            <p className="mt-3 max-w-3xl text-pretty leading-7 text-white/75">
              {siteContent.home.partner.bodyBefore}
              <a
                href={siteContent.site.partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/70"
              >
                {siteContent.site.partner.name}
              </a>
              {siteContent.home.partner.bodyAfter}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
