import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import partner1 from "@/assets/team-partner-1.jpg";
import partner2 from "@/assets/team-partner-2.jpg";
import staff1 from "@/assets/team-associate-1.jpg";
import staff2 from "@/assets/team-associate-2.jpg";
import staff3 from "@/assets/team-associate-3.jpg";
import staff4 from "@/assets/team-associate-4.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our People — MN Law Chambers" },
      {
        name: "description",
        content:
          "Meet the partners, associates and consultants of MN Law Chambers — a Colombo-based Sri Lankan law firm practising since 2009.",
      },
      { property: "og:title", content: "Our People — MN Law Chambers" },
      {
        property: "og:description",
        content:
          "Partners, associates and consultants advising clients across commercial, civil, real estate, finance and immigration practice.",
      },
      { property: "og:image", content: partner1 },
      { name: "twitter:image", content: partner1 },
    ],
  }),
  component: TeamPage,
});

type Partner = {
  image: string;
  name: string;
  role: string;
  areas: string[];
  bio: string;
  email?: string;
  phone?: string;
};

const partners: Partner[] = [
  {
    image: partner1,
    name: "Mohamed Nazer",
    role: "Founder & Managing Partner",
    areas: ["Commercial & Corporate", "Foreign Investment", "Banking & Finance"],
    bio: "Nazer founded MN Law Chambers in 2009 and leads the firm's transactional practice. He advises boards, founders and investors on company formation, mergers and acquisitions, joint ventures and inbound investment into Sri Lanka, including BOI structuring and Central Bank approvals. He is an Attorney-at-Law of the Supreme Court of Sri Lanka and a Notary Public.",
    email: "nazer@mnlawchambers.com",
    phone: "+94 77 699 2504",
  },
  {
    image: partner2,
    name: "Priya Jayawardena",
    role: "Partner · Litigation & Disputes",
    areas: ["Civil Litigation", "Commercial Disputes", "Real Estate"],
    bio: "Priya heads the firm's contentious practice and appears regularly before the District Courts, the Court of Appeal and the Supreme Court in commercial, partition and constitutional matters. She also advises on title investigation and conveyancing for local and overseas clients. She is an Attorney-at-Law and holds an LL.M. from the University of Colombo.",
    email: "priya@mnlawchambers.com",
    phone: "+94 77 000 0000",
  },
];

type Staff = {
  image: string;
  name: string;
  role: string;
  areas: string;
};

const staff: Staff[] = [
  {
    image: staff1,
    name: "Dilini Perera",
    role: "Senior Associate",
    areas: "Corporate Compliance · Contracts",
  },
  {
    image: staff2,
    name: "Anjali Fernando",
    role: "Associate",
    areas: "Civil Litigation · Family Law",
  },
  {
    image: staff3,
    name: "Kavinda Silva",
    role: "Associate",
    areas: "Real Estate · Conveyancing",
  },
  {
    image: staff4,
    name: "Nilusha Ranasinghe",
    role: "Tax & Finance Consultant",
    areas: "Tax · Exchange Control",
  },
];

function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-ink text-ink-foreground">
        <div className="container mx-auto px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="flex items-center gap-3">
            <span className="hairline-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Our People
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            A small bench of seasoned counsel.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75 md:text-lg">
            Every matter at MN Law Chambers is led by a partner who knows it
            personally. Our associates and consultants bring specialist depth
            across commercial, litigation, real estate, tax and immigration
            practice.
          </p>
        </div>
      </section>

      {/* Partners — large profile containers */}
      <Section className="pt-12 md:pt-16">
        <div className="flex items-center gap-3">
          <span className="hairline-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            Partners
          </span>
        </div>
        <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-5xl">
          The lawyers leading the firm.
        </h2>

        <div className="mt-10 space-y-10 md:mt-14 md:space-y-14">
          {partners.map((p, i) => (
            <article
              key={p.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]"
            >
              <div className={`grid md:grid-cols-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""}`}>
                <div className="relative md:col-span-5 lg:col-span-4">
                  <div className="aspect-[4/5] overflow-hidden bg-secondary md:h-full">
                    <img
                      src={p.image}
                      alt={`Portrait of ${p.name}`}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-6 p-7 md:col-span-7 md:p-10 lg:col-span-8 lg:p-14">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold">
                      {p.role}
                    </div>
                    <h3 className="mt-3 font-serif text-3xl tracking-tight text-foreground md:text-5xl">
                      {p.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.areas.map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-primary/20 bg-secondary/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-primary"
                      >
                        {a}
                      </span>
                    ))}
                  </div>

                  <p className="leading-relaxed text-muted-foreground md:text-[15px]">
                    {p.bio}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5 text-sm">
                    {p.email && (
                      <a
                        href={`mailto:${p.email}`}
                        className="inline-flex items-center gap-2 text-foreground hover:text-primary"
                      >
                        <Mail className="h-4 w-4 text-gold" />
                        {p.email}
                      </a>
                    )}
                    {p.phone && (
                      <a
                        href={`tel:${p.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 text-foreground hover:text-primary"
                      >
                        <Phone className="h-4 w-4 text-gold" />
                        {p.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Associates & Consultants */}
      <Section className="pt-0">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="hairline-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Associates & Consultants
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-5xl">
              The rest of the bench.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-right">
            Associates work closely with partners on every file. Consultants
            bring specialist expertise when a matter calls for it.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {staff.map((m) => (
            <article
              key={m.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={m.image}
                  alt={`Portrait of ${m.name}`}
                  loading="lazy"
                  width={768}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                  {m.role}
                </div>
                <h3 className="mt-2 font-serif text-xl tracking-tight text-foreground md:text-2xl">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.areas}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border bg-secondary/30">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="hairline-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Work with us
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-5xl">
              Every consultation begins with a partner.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Tell us about the matter you are facing. We will respond within
              one business day and — if we are the right firm for it — arrange
              a confidential first meeting.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-ink-foreground ring-1 ring-gold/30 hover:bg-primary"
            >
              Book a consultation
              <ArrowUpRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/practice"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
            >
              Practice areas
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
