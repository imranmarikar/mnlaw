import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { PageHero } from "@/components/site/PageHero";
import { getPracticeArea, practiceAreas } from "@/lib/practice-areas";

export const Route = createFileRoute("/practice/$slug")({
  loader: ({ params }) => {
    const area = getPracticeArea(params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { area } = loaderData;
    return {
      meta: [
        { title: `${area.title} — MN Law Chambers` },
        { name: "description", content: area.short },
        { property: "og:title", content: `${area.title} — MN Law Chambers` },
        { property: "og:description", content: area.short },
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
