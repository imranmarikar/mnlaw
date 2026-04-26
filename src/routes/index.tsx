import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { practiceAreas } from "@/lib/practice-areas";
import heroImage from "@/assets/hero-courthouse.jpg";
import officeImage from "@/assets/office-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MN Law Chambers — Counsel for consequential matters in Sri Lanka" },
      {
        name: "description",
        content:
          "A Sri Lankan law firm advising on commercial, civil, real estate, finance and immigration matters with clarity and care since 2009.",
      },
      { property: "og:title", content: "MN Law Chambers" },
      {
        property: "og:description",
        content:
          "Considered counsel for consequential matters. A Sri Lankan law firm est. 2009.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto grid gap-14 px-6 pt-16 pb-20 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pt-24 lg:pb-32">
          <div className="lg:col-span-7 lg:pr-10">
            <Eyebrow>Counsel since 2009 · Colombo</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-foreground text-balance md:text-6xl lg:text-7xl">
              Considered counsel for{" "}
              <em className="text-primary">consequential</em> matters.
            </h1>
            <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
              MN Law Chambers is a Sri Lankan law firm advising founders, families,
              investors and institutions on commercial, civil, real estate,
              finance and immigration matters — with the clarity that comes
              from caring about the outcome.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/practice"
                className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Practice areas
              </Link>
            </div>

            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Established</dt>
                <dd className="mt-2 font-serif text-3xl text-foreground">2009</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Practice areas</dt>
                <dd className="mt-2 font-serif text-3xl text-foreground">5</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Jurisdictions</dt>
                <dd className="mt-2 font-serif text-3xl text-foreground">LK</dd>
              </div>
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src={heroImage}
                alt="Sunlit colonnade of a colonial-era courthouse in Colombo, Sri Lanka"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden border border-border bg-background p-5 shadow-sm lg:block">
              <div className="font-serif text-xl italic text-primary">
                "Pro lege, pro veritate."
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                For the law, for the truth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>The Firm</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-balance md:text-5xl">
              A small firm, by design.
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-relaxed text-foreground">
              We are a focused team of partners and consultants. Most of our
              clients come back, or send us their friends — which is the only
              metric of legal practice we take seriously.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our work spans the boundary between transactional and contentious
              practice. That breadth lets us give clients an honest second
              opinion on their own position, and to draft documents that hold
              up when tested. We answer phones, return emails, and tell you
              when something is not worth pursuing.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80"
            >
              Read more about the firm
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* PRACTICE AREAS */}
      <Section className="border-t border-border bg-secondary/30">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>Practice</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium md:text-5xl">
              Where we advise.
            </h2>
          </div>
          <Link
            to="/practice"
            className="hidden items-center gap-2 text-sm font-medium text-primary hover:opacity-80 sm:inline-flex"
          >
            All practice areas
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-px bg-border lg:grid-cols-2">
          {practiceAreas.map((p, i) => (
            <Link
              key={p.slug}
              to="/practice/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col justify-between gap-8 bg-background p-8 transition-colors hover:bg-secondary/40 lg:p-10"
            >
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-sm text-muted-foreground">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-foreground transition-colors group-hover:text-primary md:text-3xl">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {p.short}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* APPROACH */}
      <Section className="border-t border-border">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="aspect-[5/4] overflow-hidden lg:col-span-6">
            <img
              src={officeImage}
              alt="A traditional law library with leather chairs and an arched window"
              loading="lazy"
              width={1600}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-balance md:text-5xl">
              The work, done quietly and well.
            </h2>
            <ul className="mt-10 space-y-7">
              {[
                {
                  t: "Plain advice",
                  d: "We say what we think, and we explain why. No hedging memos.",
                },
                {
                  t: "Long-term counsel",
                  d: "Most of our clients have been with us for years. We earn that.",
                },
                {
                  t: "Discretion",
                  d: "Sensitive matters stay sensitive. Always.",
                },
              ].map((item) => (
                <li key={item.t} className="border-l-2 border-primary pl-5">
                  <div className="font-serif text-xl text-foreground">{item.t}</div>
                  <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.d}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border bg-foreground text-background">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow>Begin a conversation</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-balance md:text-5xl">
              Tell us about the matter you're facing.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/70">
              Initial consultations are confidential and conducted personally
              by a partner. We aim to respond within one business day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Contact the firm
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
