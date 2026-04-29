import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { Section } from "@/components/site/Section";
import naleem from "@/assets/team/naleem.jpg";
import kashyapa from "@/assets/team/kashyapa.jpg";
import sahran from "@/assets/team/sahran.jpg";
import shezza from "@/assets/team/shezza.jpg";
import dinika from "@/assets/team/dinika.jpg";
import shafi from "@/assets/team/shafi.png";
import dayani from "@/assets/team/dayani.jpg";
import nuzra from "@/assets/team/nuzra.jpg";
import kasun from "@/assets/team/kasun.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — MN Law Chambers" },
      {
        name: "description",
        content:
          "Meet the partners, attorneys and consultants of MN Law Chambers — a Sri Lankan law firm practising since 2009.",
      },
      { property: "og:title", content: "Our Team — MN Law Chambers" },
      {
        property: "og:description",
        content:
          "Partners, attorneys and consultants advising clients across commercial, civil, criminal, real estate, finance and immigration practice.",
      },
      { property: "og:image", content: naleem },
      { name: "twitter:image", content: naleem },
    ],
  }),
  component: TeamPage,
});

type Partner = {
  image: string;
  name: string;
  role: string;
  credentials: string;
  bios: string[];
};

const partners: Partner[] = [
  {
    image: naleem,
    name: "M.I.M. Naleem",
    role: "Precedent Partner",
    credentials:
      "Attorney-at-Law, Notary Public, Commissioner for Oaths & Registered Company Secretary",
    bios: [
      "As the Precedent Partner of MN Law Chambers, Mr. M.I.M. Naleem brings a wealth of expertise and experience to the team. His journey in the legal realm began with his enrollment as an Attorney-at-Law of the Supreme Court of the Democratic Socialist Republic of Sri Lanka. After being called to the Bar, he went on to train under some of the country's most respected legal minds. Fueled by a vision for legal excellence, Mr. Naleem laid the foundation for the esteemed MN Law Chambers in 2009. With expertise in civil, criminal and corporate law, he is a reliable and trusted advisor and an advocate for clients.",
      "Beyond his professional achievements, Mr. Naleem is recognised for his dedication to social responsibility. He is deeply committed to assisting the most vulnerable members of the public, ensuring that justice is accessible to all — his pro bono service has become a cornerstone of his reputation.",
    ],
  },
  {
    image: kashyapa,
    name: "Kashyapa Perera",
    role: "Partner",
    credentials:
      "Attorney-at-Law, Notary Public, Commissioner for Oaths & Registered Company Secretary",
    bios: [
      "Mr. Kashyapa Perera, a distinguished Partner at MN Law Chambers, brings a remarkable 17-year legal career primarily focused on Criminal and Labour Law since being called to the Bar, and holds an LLB from the Open University of Sri Lanka. He is renowned for his specialised expertise in the Penal Code and Criminal Procedure, backed by extensive trial experience.",
      "His commitment shines through empathetic client support, transparent communication and a relentless dedication to preparation, making him a trusted advocate in the realm of Criminal Law. His strategic approach, coupled with a deep understanding of the intricacies of criminal law, allows him to navigate even the most challenging cases with confidence.",
    ],
  },
  {
    image: sahran,
    name: "Ahamed Sahran",
    role: "Partner",
    credentials: "Attorney-at-Law, Notary Public, Commissioner for Oaths",
    bios: [
      "Mr. Sahran, Principal Attorney at MN Law Chambers, leverages over a decade of legal experience, specialising in Conveyancing, land and property law. His expertise lies in providing strategic advice — particularly in navigating the complexities of Conveyancing — and he is recognised as a trusted expert in deeds and other notarial documents.",
      "With a career spanning more than 10 years, Mr. Sahran has honed his skills in Civil and Land Law, emerging as a sought-after professional. His multilingual capabilities, combined with a commitment to community engagement, make him an ideal choice for comprehensive guidance in real estate transactions and conveyancing.",
    ],
  },
];

type Member = {
  image: string;
  name: string;
  credentials?: string;
  role: string;
};

const consultants: Member[] = [
  {
    image: shezza,
    name: "Shezza Zarook",
    credentials: "Attorney-at-Law, Notary Public",
    role: "Immigration Consultant",
  },
  {
    image: dinika,
    name: "Dinika Kithmini Dias",
    credentials: "Attorney-at-Law",
    role: "Head of Litigation",
  },
  {
    image: shafi,
    name: "Shafi Hussain",
    credentials: "Attorney-at-Law, Notary Public, Commissioner for Oaths",
    role: "Head of Conveyancing",
  },
];

const staff: Member[] = [
  { image: dayani, name: "Dayani Nandaseeli", role: "Manager, Administration" },
  { image: nuzra, name: "Nuzra Yoonus", role: "Finance Controller" },
  { image: kasun, name: "Kasun Mendis", role: "Office Staff" },
];

function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-ink text-ink-foreground">
        <div className="container mx-auto px-6 py-14 md:py-20 lg:px-10 lg:py-24">
          <div className="flex items-center gap-3">
            <span className="hairline-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Our Team
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            The lawyers and people behind MN Law Chambers.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75 md:text-lg">
            A dynamic team of partners and consultants, blending specialised
            industry knowledge with deep expertise across civil, criminal,
            commercial, conveyancing, immigration and labour law.
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
              <div
                className={`grid md:grid-cols-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""}`}
              >
                <div className="relative md:col-span-5 lg:col-span-4">
                  <div className="aspect-[4/5] overflow-hidden bg-secondary md:h-full">
                    <img
                      src={p.image}
                      alt={`Portrait of ${p.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
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
                    <p className="mt-3 text-sm italic text-muted-foreground">
                      {p.credentials}
                    </p>
                  </div>

                  <div className="space-y-4 leading-relaxed text-muted-foreground md:text-[15px]">
                    {p.bios.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5 text-sm">
                    <a
                      href="tel:+94776992504"
                      className="inline-flex items-center gap-2 text-foreground hover:text-primary"
                    >
                      <Phone className="h-4 w-4 text-gold" />
                      +94 77 699 2504
                    </a>
                    <a
                      href="mailto:info@mnlawchambers.com"
                      className="inline-flex items-center gap-2 text-foreground hover:text-primary"
                    >
                      <Mail className="h-4 w-4 text-gold" />
                      info@mnlawchambers.com
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Consultants & Heads */}
      <Section className="pt-0">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="hairline-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Consultants & Heads of Practice
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-5xl">
              Specialist depth across every practice.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-right">
            Heads of practice and consultants who lead day-to-day work in
            litigation, conveyancing and immigration matters.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {consultants.map((m) => (
            <PersonCard key={m.name} m={m} />
          ))}
        </div>
      </Section>

      {/* Administrative & Support Staff */}
      <Section className="pt-0">
        <div className="flex items-center gap-3">
          <span className="hairline-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            Administration & Support
          </span>
        </div>
        <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-5xl">
          The people who keep things running.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3 md:mt-12">
          {staff.map((m) => (
            <PersonCard key={m.name} m={m} compact />
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
            <a
              href="https://wa.me/94776992504?text=Thank%20you%20for%20contacting%20MN%20Law%20Chambers.%20How%20can%20I%20help%20you%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

function PersonCard({ m, compact }: { m: Member; compact?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <div className="aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={m.image}
          alt={`Portrait of ${m.name}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className={compact ? "p-5" : "p-6"}>
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
          {m.role}
        </div>
        <h3 className={`mt-2 font-serif tracking-tight text-foreground ${compact ? "text-lg" : "text-xl md:text-2xl"}`}>
          {m.name}
        </h3>
        {m.credentials && (
          <p className="mt-2 text-xs italic text-muted-foreground">{m.credentials}</p>
        )}
      </div>
    </article>
  );
}
