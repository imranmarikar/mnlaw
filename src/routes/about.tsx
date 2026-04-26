import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";
import aboutImage from "@/assets/about-lawbook.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Firm — MN Law Chambers" },
      {
        name: "description",
        content:
          "MN Law Chambers is an independent Sri Lankan law firm established in 2009, advising clients across commercial, civil and regulatory practice.",
      },
      { property: "og:title", content: "The Firm — MN Law Chambers" },
      {
        property: "og:description",
        content:
          "An independent Sri Lankan law firm est. 2009. Read about our history, values, and how we work.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section className="pt-16 pb-12 lg:pt-24">
        <Eyebrow>The Firm</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl font-medium leading-[1.05] text-balance md:text-6xl lg:text-7xl">
          An independent firm with a quiet sense of purpose.
        </h1>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={aboutImage}
                alt="An open antique law book on a polished mahogany desk"
                loading="lazy"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8 lg:col-span-6 lg:col-start-7">
            <p className="font-serif text-2xl leading-snug text-foreground text-balance">
              MN Law Chambers was established in 2009 with a simple ambition: to
              be the kind of firm we, ourselves, would want to instruct.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              That meant remaining small enough that partners actually do the
              work. It meant resisting the temptation to specialise so narrowly
              that we lose sight of how a matter fits into a client's wider
              life or business. And it meant building a practice on referrals
              rather than advertising — most of our clients arrive through
              someone we have already served well.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We are based in Colombo and act for clients across Sri Lanka, as
              well as overseas Sri Lankans and foreign investors with interests
              on the island. Our practice spans commercial and corporate work,
              civil litigation, real estate, finance and tax, and immigration.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We work in English, Sinhala and Tamil, and collaborate with
              counsel and tax advisors abroad when a matter calls for it.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-secondary/30">
        <Eyebrow>What we believe</Eyebrow>
        <h2 className="mt-5 max-w-2xl font-serif text-4xl font-medium md:text-5xl">
          Four convictions that shape our work.
        </h2>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
          {[
            {
              n: "01",
              t: "Plain advice over impressive memos",
              d: "If a client cannot summarise our advice in a sentence after reading it, we have not done our job.",
            },
            {
              n: "02",
              t: "Documents written for the bad day",
              d: "Contracts and pleadings should hold up when something goes wrong, not just when everyone is friendly.",
            },
            {
              n: "03",
              t: "Honesty about cost",
              d: "We discuss fees up front, scope work in writing, and tell clients when a matter is not worth pursuing.",
            },
            {
              n: "04",
              t: "Discretion as default",
              d: "We do not name our clients. We do not discuss their matters. Privacy is part of the service.",
            },
          ].map((v) => (
            <div key={v.n} className="bg-background p-8 lg:p-10">
              <div className="font-serif text-sm text-primary">{v.n}</div>
              <h3 className="mt-3 font-serif text-2xl font-medium text-foreground">
                {v.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {v.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Continue</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium md:text-5xl">
              See how we can help.
            </h2>
          </div>
          <div className="flex flex-wrap items-end gap-3 lg:col-span-6 lg:col-start-7">
            <Link
              to="/practice"
              className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Practice areas
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
