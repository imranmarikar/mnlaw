import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { PageHero } from "@/components/site/PageHero";
import { getPracticeArea, practiceAreas } from "@/lib/practice-areas";

const AREA_SERVED = [
  { "@type": "Country", name: "Sri Lanka" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "Canada" },
  { "@type": "Country", name: "Australia" },
  { "@type": "Country", name: "United Arab Emirates" },
  { "@type": "Country", name: "Singapore" },
  { "@type": "Country", name: "India" },
  { "@type": "Country", name: "Qatar" },
  { "@type": "Country", name: "Saudi Arabia" },
];

export const Route = createFileRoute("/practice/$slug")({
  loader: ({ params }): { area: PracticeArea } => {
    const area = getPracticeArea(params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { area } = loaderData;
    const url = `https://mnlawchambers.com/practice/${area.slug}`;
    const legalServiceLd = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: `${area.title} — MN Law Chambers`,
      description: area.short,
      url,
      provider: {
        "@type": "LegalService",
        name: "MN Law Chambers",
        url: "https://mnlawchambers.com",
        telephone: "+94112300111",
        email: "info@mnlawchambers.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "367, 2/2, 2nd Floor, Dam Street",
          addressLocality: "Colombo 12",
          addressCountry: "LK",
        },
      },
      serviceType: area.title,
      areaServed: AREA_SERVED,
    };
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: area.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    return {
      meta: [
        { title: `${area.title} — MN Law Chambers` },
        { name: "description", content: area.short },
        { property: "og:title", content: `${area.title} — MN Law Chambers` },
        { property: "og:description", content: area.short },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(legalServiceLd),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqLd),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <Section>
      <Eyebrow>Not found</Eyebrow>
      <h1 className="mt-4 font-serif text-4xl">Practice area not found</h1>
      <Link to="/practice" className="mt-6 inline-block text-primary">
        ← All practice areas
      </Link>
    </Section>
  ),
  component: PracticeDetail,
});

function PracticeDetail() {
  const { area } = Route.useLoaderData();
  const idx = practiceAreas.findIndex((p) => p.slug === area.slug);
  const next = practiceAreas[(idx + 1) % practiceAreas.length];

  return (
    <>
      <PageHero
        eyebrow={`0${idx + 1} · Practice`}
        title={area.title}
        intro={area.short}
      >
        <Link
          to="/practice"
          className="mt-8 inline-block text-xs uppercase tracking-widest text-muted-foreground hover:text-primary"
        >
          ← All practice areas
        </Link>
      </PageHero>

      <Section className="border-t border-border pt-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Overview</Eyebrow>
            <p className="mt-6 font-serif text-2xl leading-snug text-foreground text-balance">
              {area.intro}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Eyebrow>How we help</Eyebrow>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {area.services.map((s) => (
                <li key={s} className="flex items-start gap-4 py-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Long-form practice content */}
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Eyebrow>In depth</Eyebrow>
            <h2 className="mt-4 font-serif text-2xl leading-tight tracking-tight md:text-3xl">
              How this practice works at MN Law Chambers.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-8 lg:col-start-5">
            {area.longContent.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-foreground/85 md:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-foreground text-background">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <Eyebrow>Approach</Eyebrow>
          </div>
          <div className="lg:col-span-9 lg:col-start-4">
            <p className="font-serif text-3xl leading-snug text-balance md:text-4xl">
              {area.approach}
            </p>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              Questions clients usually ask first.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <dl className="divide-y divide-border border-y border-border">
              {area.faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="font-serif text-lg leading-snug text-foreground md:text-xl">
                    {f.q}
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-2">
          <Link
            to="/contact"
            className="group flex items-center justify-between gap-6 border border-border bg-background p-8 transition-colors hover:border-primary lg:p-10"
          >
            <div>
              <div className="eyebrow">Begin</div>
              <div className="mt-3 font-serif text-2xl text-foreground">
                Discuss your matter
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Confidential, partner-led consultation.
              </div>
            </div>
            <ArrowRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/practice/$slug"
            params={{ slug: next.slug }}
            className="group flex items-center justify-between gap-6 border border-border bg-background p-8 transition-colors hover:border-primary lg:p-10"
          >
            <div>
              <div className="eyebrow">Next practice</div>
              <div className="mt-3 font-serif text-2xl text-foreground">
                {next.title}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {next.short}
              </div>
            </div>
            <ArrowRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>
    </>
  );
}
