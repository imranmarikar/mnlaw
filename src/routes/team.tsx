import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — MN Law Chambers" },
      {
        name: "description",
        content:
          "A small bench of partners and consultants at MN Law Chambers, Sri Lanka.",
      },
      { property: "og:title", content: "Team — MN Law Chambers" },
      {
        property: "og:description",
        content:
          "Partners and consultants advising clients at MN Law Chambers, Sri Lanka.",
      },
    ],
  }),
  component: TeamPage,
});

const team = [
  {
    initials: "MN",
    name: "Managing Partner",
    role: "Commercial & Corporate · Foreign Investment",
    bio: "Heads the firm's transactional practice, advising on company formation, M&A, joint ventures and inbound investment into Sri Lanka.",
  },
  {
    initials: "LP",
    name: "Litigation Partner",
    role: "Civil Litigation · Disputes",
    bio: "Appears regularly before the District Courts, Court of Appeal and Supreme Court in commercial, partition and constitutional matters.",
  },
  {
    initials: "RP",
    name: "Real Estate Partner",
    role: "Real Estate · Conveyancing",
    bio: "Advises on title investigation, conveyancing and property holding structures for local and overseas clients.",
  },
  {
    initials: "FT",
    name: "Tax Consultant",
    role: "Finance, Tax & Exchange Control",
    bio: "Works with the firm on income tax, VAT, stamp duty and Central Bank approvals for cross-border transactions.",
  },
  {
    initials: "IM",
    name: "Immigration Counsel",
    role: "Immigration & Emigration",
    bio: "Manages residency, dual citizenship and work visa files for individuals, families and corporate sponsors.",
  },
  {
    initials: "AS",
    name: "Associate",
    role: "Corporate · Civil Practice",
    bio: "Supports partners across transactional and contentious matters, with a focus on corporate compliance and contract drafting.",
  },
];

function TeamPage() {
  return (
    <>
      <Section className="pt-16 pb-12 lg:pt-24">
        <Eyebrow>The Team</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl font-medium leading-[1.05] text-balance md:text-6xl lg:text-7xl">
          A small bench of seasoned counsel.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Our partners and consultants combine deep specialisation with the
          kind of cross-practice judgement that comes from working closely
          together over many years.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article key={m.name} className="bg-background p-8 lg:p-10">
              <div className="flex h-24 w-24 items-center justify-center border border-primary/40 bg-secondary/40 font-serif text-3xl text-primary">
                {m.initials}
              </div>
              <h2 className="mt-6 font-serif text-2xl text-foreground">
                {m.name}
              </h2>
              <div className="mt-1 text-xs uppercase tracking-widest text-primary">
                {m.role}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {m.bio}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-secondary/30">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>A note on names</Eyebrow>
            <p className="mt-5 font-serif text-2xl leading-snug text-foreground text-balance">
              Our partners and consultants are introduced personally during
              your first consultation. Out of respect for client confidentiality
              — and the privacy of our team — we do not publish full bios online.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Request an introduction
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
