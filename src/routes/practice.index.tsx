import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { PageHero } from "@/components/site/PageHero";
import { practiceAreas } from "@/lib/practice-areas";

export const Route = createFileRoute("/practice/")({
  head: () => ({
    meta: [
      { title: "Practice Areas — MN Law Chambers" },
      {
        name: "description",
        content:
          "Commercial, civil, real estate, finance & tax, and immigration practice at MN Law Chambers, Sri Lanka.",
      },
      { property: "og:title", content: "Practice Areas — MN Law Chambers" },
      {
        property: "og:description",
        content:
          "Five areas of legal practice — commercial, civil, real estate, finance & tax, and immigration.",
      },
    ],
  }),
  component: PracticeIndex,
});

function PracticeIndex() {
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Five areas of practice. One standard of work."
        intro="Our practice is intentionally broad enough to be useful across the arc of a client's affairs, and narrow enough that we can be genuinely good at what we do."
      />

      <Section className="pt-0">
        <div className="border-t border-border">
          {practiceAreas.map((p, i) => (
            <Link
              key={p.slug}
              to="/practice/$slug"
              params={{ slug: p.slug }}
              className="group grid grid-cols-12 items-start gap-6 border-b border-border py-10 transition-colors hover:bg-secondary/40 lg:py-14"
            >
              <div className="col-span-12 font-serif text-sm text-muted-foreground md:col-span-1">
                0{i + 1}
              </div>
              <div className="col-span-12 md:col-span-5">
                <h2 className="font-serif text-3xl font-medium text-foreground transition-colors group-hover:text-primary md:text-4xl">
                  {p.title}
                </h2>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="leading-relaxed text-muted-foreground">{p.short}</p>
              </div>
              <div className="col-span-12 flex items-center justify-end md:col-span-1">
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
