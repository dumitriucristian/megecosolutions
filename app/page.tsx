import Link from "next/link";

import { GalleryGrid } from "@/components/GalleryGrid";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteContent } from "@/content/siteContent";
import { cn } from "@/lib/utils";
import { heroGallery } from "@/lib/media";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        <div className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(90%_60%_at_50%_0%,black,transparent)]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,197,94,0.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.18),transparent_45%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="text-sm font-medium tracking-wide text-slate-200/80">
            {siteContent.site.name} • Municipal waste management • Energy resilience
          </p>

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {siteContent.home.hero.headline}
          </h1>

          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-200/85 sm:text-xl">
            {siteContent.home.hero.subheadline}
          </p>

          <p className="mt-6 max-w-3xl text-pretty leading-7 text-slate-200/75">
            {siteContent.home.hero.supporting}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteContent.home.hero.ctas[0].href}
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "h-11 bg-white text-slate-950 hover:bg-white/90",
              )}
            >
              {siteContent.home.hero.ctas[0].label}
            </Link>
            <Link
              href={siteContent.home.hero.ctas[1].href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 border-white/15 bg-white/5 text-white hover:bg-white/10",
              )}
            >
              {siteContent.home.hero.ctas[1].label}
            </Link>
          </div>

          <div className="mt-12">
            <GalleryGrid items={heroGallery} columns={2} />
          </div>
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
            <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <p className="max-w-3xl text-pretty leading-7 text-white/75">
                {siteContent.home.partner.body}
              </p>
              <a
                href={siteContent.home.partner.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "h-10 bg-white px-5 text-slate-950 hover:bg-white/90",
                )}
              >
                {siteContent.home.partner.linkLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
