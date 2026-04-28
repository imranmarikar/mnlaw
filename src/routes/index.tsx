import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Users,
  Globe2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Quote,
  BookOpen,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { StatsPanel } from "@/components/site/StatsPanel";
import { PracticeGrid } from "@/components/site/PracticeGrid";
import { useReveal } from "@/hooks/use-reveal";
import heroImage from "@/assets/hero-courthouse.jpg";
import libraryImage from "@/assets/hero-library.jpg";
import aboutImage from "@/assets/about-lawbook.jpg";
import officeImage from "@/assets/office-interior.jpg";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MN Law Chambers — Counsel for consequential matters in Sri Lanka" },
      {
        name: "description",
        content:
          "A Colombo law firm advising founders, families, investors and institutions on commercial, civil, real estate, finance and immigration matters since 2009.",
      },
      { property: "og:title", content: "MN Law Chambers" },
      {
        property: "og:description",
        content:
          "Considered counsel for consequential matters. A Sri Lankan law firm est. 2009.",
      },
      { property: "og:image", content: libraryImage },
      { name: "twitter:image", content: libraryImage },
    ],
  }),
  component: HomePage,
});

const audiences = [
  {
    icon: Building2,
    title: "For Businesses",
    body: "Structuring, contracts, M&A, disputes, employment — partner-led counsel for boards and founders.",
    href: "/practice/$slug" as const,
    slug: "commercial-corporate",
    cta: "Commercial & Corporate",
  },
  {
    icon: Users,
    title: "For Families",
    body: "Property, succession, testamentary matters and personal disputes handled with discretion.",
    href: "/practice/$slug" as const,
    slug: "real-estate",
    cta: "Real Estate & Family",
  },
  {
    icon: Globe2,
    title: "For Foreign Investors",
    body: "BOI approvals, exchange control, cross-border structuring, visas and residency — under one roof.",
    href: "/practice/$slug" as const,
    slug: "finance-tax",
    cta: "Finance, Tax & Investment",
  },
];

const insights = [
  {
    tag: "Commercial",
    date: "March 2026",
    title: "Structuring a Sri Lankan subsidiary: five decisions founders get wrong",
    excerpt:
      "The BOI route isn't always the right route. A primer on entity choice, exchange control and cap-table hygiene.",
    image: insight1,
  },
  {
    tag: "Real Estate",
    date: "February 2026",
    title: "Condominium title vs. freehold: what overseas buyers need to know",
    excerpt:
      "Non-citizens can own apartments above the fourth floor — but the diligence trail is long. Here's the checklist.",
    image: insight2,
  },
  {
    tag: "Immigration",
    date: "January 2026",
    title: "Residency pathways for investors and retirees in 2026",
    excerpt:
      "Updated thresholds, processing times and the quiet programmes most lawyers don't mention.",
    image: insight3,
  },
];

function HomePage() {
  useReveal();

  return (
    <>
      {/* ============ HERO — dark cinematic ============ */}
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={libraryImage}
          alt="Warmly lit antique law library with leather-bound books"
          width={1536}
          height={1536}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 20%, var(--gold) 0%, transparent 55%)",
          }}
        />

        <div className="container relative mx-auto px-5 pb-14 pt-12 md:px-6 md:pb-20 md:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="hairline-gold" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                  Colombo · Sri Lanka · Est. 2009
                </span>
              </div>

              <h1 className="mt-7 font-serif text-[2.25rem] leading-[1.05] tracking-tight text-ink-foreground text-balance sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                Considered counsel for{" "}
                <span className="italic text-gold">consequential</span> matters.
              </h1>

              <p className="mt-7 max-w-[58ch] text-base leading-relaxed text-ink-foreground/75 md:text-lg">
                A Sri Lankan law firm advising founders, families, investors and
                institutions — with the clarity that comes from caring about the
                outcome. Fifteen years of partner-led work in commercial, civil,
                real estate, finance, and immigration law.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:brightness-110"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/practice"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-ink-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  Explore practice areas
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: credential rail */}
            <div className="lg:col-span-4 lg:self-end">
              <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
                {[
                  { k: "15+", v: "Years practising" },
                  { k: "5", v: "Core practice areas" },
                  { k: "LK", v: "Jurisdiction" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
                  >
                    <div className="font-serif text-3xl text-gold lg:text-4xl">
                      {s.k}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink-foreground/60">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip inside hero */}
        <div className="relative border-t border-white/10 bg-ink/80 backdrop-blur">
          <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-ink-foreground/60 lg:px-10">
            <span>Trusted by · Founders · Family offices · Banks · Boards · Investors</span>
            <Link
              to="/team"
              className="inline-flex items-center gap-1.5 text-gold hover:brightness-125"
            >
              Meet the team
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ AUDIENCE SIGNPOSTS ============ */}
      <Section className="pb-0 pt-12 md:pt-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="hairline-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Who we work with
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-5xl">
              Counsel shaped to the matter — and the person bringing it.
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3 md:mt-10">
          {audiences.map(({ icon: Icon, title, body, slug, cta }) => (
            <Link
              key={title}
              to="/practice/$slug"
              params={{ slug }}
              className="reveal group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold ring-1 ring-gold/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-7 font-serif text-2xl tracking-tight">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span>{cta}</span>
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ============ PRACTICE GRID ============ */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="hairline-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Practice areas
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-5xl text-balance">
              Five connected practices, one firm.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              From incorporation to appellate advocacy, our lawyers cover the
              full arc of a legal relationship. Hover any card to see what we
              handle inside.
            </p>
          </div>
          <Link
            to="/practice"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            All practice areas
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-8 md:mt-10 reveal">
          <PracticeGrid />
        </div>
      </Section>

      {/* ============ APPROACH — sticky ============ */}
      <Section className="bg-secondary/40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="hairline-gold" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                  Our approach
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-5xl">
                The work, done quietly and well.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Our practice spans the boundary between transactional and
                contentious work. That breadth lets us give clients an honest
                second opinion — and draft documents that hold up when tested.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-border">
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
              <div
                key={item.n}
                className="reveal group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-serif text-2xl italic text-gold">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl tracking-tight md:text-2xl">
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

      {/* ============ STATS ============ */}
      <Section className="pt-0">
        <div className="reveal">
          <StatsPanel />
        </div>
      </Section>

      {/* ============ INSIGHTS ============ */}
      <Section className="border-t border-border pt-14 md:pt-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="hairline-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Insights
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-5xl">
              Practical notes on Sri Lankan law.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Plain-language briefings written for the people actually making
              decisions — founders, directors, property owners and families.
            </p>
          </div>
          <Link
            to="/about"
            className="story-link inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-primary"
          >
            All insights
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 md:mt-10 grid gap-5 md:grid-cols-3">
          {insights.map((post) => (
            <article
              key={post.title}
              className="reveal group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                  <BookOpen className="h-3 w-3" />
                  {post.tag}
                  <span className="text-muted-foreground/60">·</span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="mt-4 font-serif text-xl leading-tight tracking-tight text-foreground md:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Read note
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ============ QUOTE ============ */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-4xl text-center">
          <Quote className="mx-auto h-10 w-10 text-gold" />
          <blockquote className="mt-6 font-serif text-3xl italic leading-snug text-foreground text-balance md:text-5xl">
            "They told us what we didn't want to hear, early enough to change
            course. That's worth more than the retainer."
          </blockquote>
          <div className="mt-8 text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
            Long-standing client · Family office, Colombo
          </div>
        </div>
      </Section>

      {/* ============ FIRM TEASER ============ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="overflow-hidden rounded-2xl ring-1 ring-border lg:col-span-6">
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
            <div className="flex items-center gap-3">
              <span className="hairline-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                The firm
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-5xl text-balance">
              Fifteen years of partner-led counsel.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              MN Law Chambers was established in 2009 with a simple ambition:
              to be the kind of firm we ourselves would want to instruct. Small
              enough that partners do the work. Broad enough to see how a matter
              fits into the rest of a client's life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-ink-foreground ring-1 ring-gold/30 hover:bg-primary"
              >
                About the firm
                <ArrowUpRight className="h-4 w-4 text-gold" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
              >
                Meet the team
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ============ CONTACT STRIP ============ */}
      <Section className="pt-0">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid lg:grid-cols-12">
            <div className="relative lg:col-span-5">
              <img
                src={heroImage}
                alt="Colonial-era courthouse colonnade"
                loading="lazy"
                width={800}
                height={600}
                className="h-full min-h-[280px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-ink/10" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-ink-foreground">
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">
                  Our office
                </div>
                <div className="mt-2 font-serif text-2xl">Colombo 07</div>
                <div className="text-sm text-ink-foreground/70">Sri Lanka</div>
              </div>
            </div>

            <div className="grid gap-6 p-8 sm:grid-cols-2 lg:col-span-7 lg:p-12">
              {[
                {
                  icon: MapPin,
                  label: "Visit",
                  lines: ["Colombo 07, Sri Lanka", "By appointment only"],
                },
                {
                  icon: Phone,
                  label: "Call",
                  lines: ["+94 77 699 2504", "+94 11 000 0000"],
                },
                {
                  icon: Mail,
                  label: "Email",
                  lines: ["info@mnlawchambers.com", "enquiries@mnlawchambers.com"],
                },
                {
                  icon: Clock,
                  label: "Hours",
                  lines: ["Mon–Fri · 09:00–17:30", "Urgent matters: WhatsApp"],
                },
              ].map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-gold ring-1 ring-gold/30">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                      {label}
                    </div>
                    {lines.map((l) => (
                      <div key={l} className="mt-1 text-sm text-foreground">
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="sm:col-span-2">
                <Link
                  to="/contact"
                  className="group mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:brightness-110"
                >
                  Send us your matter
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
