import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How We Work — MN Law Chambers" },
      {
        name: "description",
        content:
          "How MN Law Chambers engages with clients: the first consultation, working with overseas clients, fee structures, confidentiality and what we won't do.",
      },
      { property: "og:title", content: "How We Work — MN Law Chambers" },
      {
        property: "og:description",
        content:
          "Plain answers on first consultations, remote work for overseas clients, fee structures and confidentiality.",
      },
    ],
  }),
  component: HowWeWorkPage,
});

function SectionBlock({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 border-t border-border pt-12 lg:grid-cols-12 lg:gap-12 lg:pt-16">
      <div className="lg:col-span-4">
        <div className="font-serif text-sm text-primary">{index}</div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
      </div>
      <div className="space-y-5 leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
        {children}
      </div>
    </div>
  );
}

function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Plain answers, before you even pick up the phone."
        intro="Every sentence on this page exists to remove a reason not to get in touch. Read it before you write."
      />

      <Section className="pt-0">
        <div className="space-y-16">
          <SectionBlock
            index="01"
            eyebrow="The first conversation"
            title="What happens when you contact us."
          >
            <p>
              Every matter begins the same way: you contact us, we respond
              within one business day, and — if it seems like we can help — we
              arrange a first consultation. That consultation is confidential
              and free of obligation. We will tell you honestly whether we are
              the right firm for the matter, and if we are not, we will say so
              and suggest who might be.
            </p>
            <p>
              Most first consultations take 30 to 45 minutes. For clients
              outside Sri Lanka, we conduct these by video call or telephone at
              a time that suits your timezone. We ask that you come with a
              short summary of the matter and any documents you consider
              relevant — we will do the rest.
            </p>
          </SectionBlock>

          <SectionBlock
            index="02"
            eyebrow="Working from overseas"
            title="We are structured to act for you remotely."
          >
            <p>
              A significant portion of our clients are based outside Sri Lanka
              — overseas Sri Lankans, foreign nationals with interests on the
              island, and investors operating across borders. We are structured
              to work with you remotely at every stage of a matter.
            </p>
            <p>
              In practice, this means: initial consultations by video call,
              document exchange by email and secure file share, execution of
              documents by notarial power of attorney where your physical
              presence is not required, and regular status updates by WhatsApp
              or email. Where a matter requires your presence — certain court
              hearings, the signing of specific notarial deeds — we will tell
              you well in advance.
            </p>
            <p>
              We work in English as our primary professional language.
              Correspondence and documents can also be handled in Sinhala or
              Tamil.
            </p>
          </SectionBlock>

          <SectionBlock
            index="03"
            eyebrow="Fees"
            title="How we structure and discuss cost."
          >
            <p>
              We discuss fees in the first consultation and confirm them in
              writing before accepting a matter. We do not commence work
              without written confirmation of the fee arrangement. Depending on
              the work, one of three structures usually applies:
            </p>
            <ul className="space-y-4 border-l border-gold/40 pl-5">
              <li>
                <span className="font-medium text-foreground">Fixed fees</span>{" "}
                — for defined, predictable work such as company incorporation,
                title investigation, standard conveyancing transactions, or
                visa applications. We quote a fixed figure at the outset and do
                not vary it unless the scope of the matter changes materially.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Time-based fees
                </span>{" "}
                — for matters where the scope cannot be fixed in advance, such
                as litigation or complex cross-border structuring. We agree a
                daily or hourly rate before commencing, provide an estimate of
                likely time, and report against that estimate.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Retainer arrangements
                </span>{" "}
                — for clients with ongoing needs across multiple practice
                areas. We agree a monthly scope and fee, reviewed quarterly.
              </li>
            </ul>
            <p className="border border-border bg-secondary/40 p-5 text-sm">
              <span className="font-medium text-foreground">
                For overseas clients:
              </span>{" "}
              fees are quoted in Sri Lankan Rupees and, where agreed, in US
              Dollars or Pounds Sterling. We accept payment by bank transfer
              and typically request a retainer at the start of a matter.
            </p>
          </SectionBlock>

          <SectionBlock
            index="04"
            eyebrow="What we won't do"
            title="We don't take on every matter."
          >
            <p>
              We are not a high-volume practice and we do not operate as a
              document factory. If a matter is outside our competence, we will
              say so promptly and refer you to a firm better placed to help.
            </p>
            <p>
              We also don't make promises about outcomes. We give you our
              honest assessment of the legal position and the realistic range
              of results. That is what considered counsel means.
            </p>
          </SectionBlock>

          <SectionBlock
            index="05"
            eyebrow="Confidentiality"
            title="Privacy is part of the service."
          >
            <p>
              All matters handled by MN Law Chambers are subject to
              attorney-client privilege and professional secrecy obligations
              under Sri Lankan law. We do not discuss client matters with third
              parties, do not name our clients publicly, and do not share
              documentation with any party without written authorisation.
            </p>
            <p>
              Initial enquiries — before any formal engagement — are also
              treated as confidential.
            </p>
          </SectionBlock>
        </div>
      </Section>

      <Section className="border-t border-border bg-secondary/30">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>Begin</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium md:text-5xl">
              If you have a matter to discuss, simply reach out.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              We will take it from there. Initial consultations are
              confidential and free of obligation.
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-3 lg:col-span-5 lg:col-start-8 lg:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Contact the firm
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://wa.me/94776992504"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
