import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  MessagesSquare,
  Handshake,
  Quote,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { Marquee } from "@/components/site/Marquee";
import { StatsPanel } from "@/components/site/StatsPanel";
import { PracticeSelector } from "@/components/site/PracticeSelector";
import { useReveal } from "@/hooks/use-reveal";
import heroImage from "@/assets/hero-courthouse.jpg";
import officeImage from "@/assets/office-interior.jpg";
import aboutImage from "@/assets/about-lawbook.jpg";
import practiceImage from "@/assets/practice-abstract.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MN Law Chambers — Counsel for consequential matters in Sri Lanka" },
      {
        name: "description",
        content:
          "A Sri Lankan law firm advising founders, families, investors and institutions on commercial, civil, real estate, finance and immigration matters since 2009.",
      },
      { property: "og:title", content: "MN Law Chambers" },
      {
        property: "og:description",
        content:
          "Considered counsel for consequential matters. A Sri Lankan law firm est. 2009.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

const values = [
  {
    icon: MessagesSquare,
    title: "Plain advice",
    body: "We say what we think and explain why. No hedging memos, no defensive footnotes.",
  },
  {
    icon: Handshake,
    title: "Long-term counsel",
    body: "Most of our clients have been with us for years. We earn the relationship — and keep earning it.",
  },
  {
    icon: ShieldCheck,
    title: "Discretion by default",
    body: "Sensitive matters stay sensitive. Always. It's the only way this work gets done well.",
  },
];

function HomePage() {
  useReveal();

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,theme(colors.secondary)_0%,transparent_60%)]" />

        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            {/* Left: headline */}
            <div className="lg:col-span-7 lg:pr-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Colombo · Established 2009
              </div>

              <h1 className="mt-7 text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-foreground text-balance md:text-6xl lg:text-[5.25rem]">
                Considered counsel{" "}
                <span className="font-serif italic font-normal text-primary">
                  for&nbsp;consequential
                </span>{" "}
                matters.
              </h1>

              <p className="mt-7 max-w-[58ch] text-base leading-relaxed text-muted-foreground md:text-lg">
                MN Law Chambers is a Sri Lankan law firm advising founders,
                families, investors and institutions — with the clarity that comes
                from caring about the outcome.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:bg-primary"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/practice"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
                >
                  Explore practice areas
                </Link>
              </div>
            </div>

            {/* Right: image collage + credential chips */}
            <div className="relative lg:col-span-5">
              <div className="grid grid-cols-6 grid-rows-6 gap-3 lg:aspect-[4/5]">
                <div className="col-span-6 row-span-4 overflow-hidden rounded-2xl bg-secondary shadow-[var(--shadow-card)]">
                  <img
                    src={heroImage}
                    alt="Colonial-era courthouse colonnade in Colombo"
                    width={1280}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="col-span-3 row-span-2 overflow-hidden rounded-2xl bg-secondary shadow-[var(--shadow-card)]">
                  <img
                    src={practiceImage}
                    alt="Modern architectural detail"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="col-span-3 row-span-2 overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Motto
                  </div>
                  <div className="mt-2 font-serif text-xl italic leading-tight text-foreground">
                    Pro lege,<br />pro veritate.
                  </div>
                  <div className="mt-2 text-[11px] text-muted-foreground">
                    For the law, for the truth.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <Marquee
        items={[
          "Founders",
          "Family Offices",
          "Investors",
          "Banks & Financial Institutions",
          "High-Net-Worth Individuals",
          "Boards & Executives",
          "Property Owners",
        ]}
      />

      {/* ============ VALUES ============ */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="eyebrow">How we work</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A small firm, by design.
            </h2>
          </div>
          <Link
            to="/about"
            className="story-link inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            Read about the firm
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map(({ icon: Icon, title, body }) => (
            <div key={title} className="reveal card-soft p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ INTERACTIVE PRACTICE SELECTOR ============ */}
      <Section className="bg-secondary/40">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="eyebrow">Practice areas</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Where we advise.
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Five connected practices. Hover a heading to see the detail.
            </p>
          </div>
          <Link
            to="/practice"
            className="story-link inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            All practice areas
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 reveal">
          <PracticeSelector />
        </div>
      </Section>

      {/* ============ APPROACH — sticky heading + scrolling detail ============ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow">Our approach</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                The work, done quietly and well.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Our work spans the boundary between transactional and contentious
                practice. That breadth lets us give clients an honest second
                opinion — and draft documents that hold up when tested.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl">
                <img
                  src={officeImage}
                  alt="A traditional law library"
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {[
              {
                n: "01",
                t: "Understand the matter before drafting it",
                d: "We start with what the client actually needs — commercial outcome, relationship, timeline. Only then do we put pen to paper.",
              },
              {
                n: "02",
                t: "Tell clients what they need to hear",
                d: "An honest second opinion on your own position is one of the most valuable things a lawyer can give you. We give it.",
              },
              {
                n: "03",
                t: "Draft documents that hold up when tested",
                d: "Because we litigate as well as transact, we draft with the courtroom in mind. Clean language, no ambiguity.",
              },
              {
                n: "04",
                t: "Keep files moving",
                d: "We return calls. We answer email. We over-document and never let a matter go quiet.",
              },
            ].map((item) => (
              <div key={item.n} className="reveal card-soft p-7">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-xs tabular-nums text-primary">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                      {item.t}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.d}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ STATS PANEL ============ */}
      <Section className="pt-0">
        <div className="reveal">
          <StatsPanel />
        </div>
      </Section>

      {/* ============ QUOTE ============ */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-4xl text-center">
          <Quote className="mx-auto h-10 w-10 text-primary/70" />
          <blockquote className="mt-6 font-serif text-3xl italic leading-snug text-foreground text-balance md:text-5xl">
            "They told us what we didn't want to hear, early enough to change
            course. That's worth more than the retainer."
          </blockquote>
          <div className="mt-8 text-sm uppercase tracking-[0.22em] text-muted-foreground">
            Long-standing client · Family office, Colombo
          </div>
        </div>
      </Section>

      {/* ============ ABOUT TEASE ============ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="overflow-hidden rounded-2xl lg:col-span-6">
            <img
              src={aboutImage}
              alt="Open antique law book on a mahogany desk"
              loading="lazy"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:self-center">
            <div className="eyebrow">The firm</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-balance">
              Fifteen years of partner-led counsel.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              MN Law Chambers was established in 2009 with a simple ambition:
              to be the kind of firm we, ourselves, would want to instruct.
              Small enough that partners do the work. Broad enough to see how a
              matter fits into the rest of your life.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              More about the firm
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
