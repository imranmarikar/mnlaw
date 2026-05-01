import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MN Law Chambers" },
      {
        name: "description",
        content:
          "Reach MN Law Chambers in Colombo. Phone, email and WhatsApp for confidential, partner-led consultations.",
      },
      { property: "og:title", content: "Contact — MN Law Chambers" },
      {
        property: "og:description",
        content:
          "Confidential, partner-led consultations. Reach us by phone, email or WhatsApp.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin a conversation in confidence."
        intro="Initial consultations are conducted personally by a partner. We aim to respond to enquiries within one business day."
      />

      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Form */}
          <form
            className="space-y-6 lg:col-span-7"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent(
                `Enquiry from ${data.get("name") || "website"}`,
              );
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nMatter: ${data.get("matter")}\n\n${data.get("message")}`,
              );
              window.location.href = `mailto:info@mnlawchambers.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Matter type" name="matter" placeholder="e.g. Corporate, Civil, Real Estate" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                How can we help?
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send enquiry
            </button>
            <p className="text-xs text-muted-foreground">
              By sending an enquiry you acknowledge that no attorney–client
              relationship is created until the firm formally accepts your
              instructions in writing.
            </p>
          </form>

          {/* Details */}
          <aside className="space-y-8 lg:col-span-4 lg:col-start-9">
            <div className="border border-border bg-secondary/40 p-8">
              <Eyebrow>Reach us</Eyebrow>
              <ul className="mt-6 space-y-5">
                <ContactRow icon={<MapPin className="h-4 w-4" />} label="Office">
                  MN Law Chambers
                  <br />
                  Colombo 03, Sri Lanka
                </ContactRow>
                <ContactRow icon={<Phone className="h-4 w-4" />} label="Telephone">
                  <a href="tel:+94776992504" className="hover:text-primary">
                    +94 77 699 2504
                  </a>
                </ContactRow>
                <ContactRow icon={<Mail className="h-4 w-4" />} label="Email">
                  <a
                    href="mailto:info@mnlawchambers.com"
                    className="hover:text-primary"
                  >
                    info@mnlawchambers.com
                  </a>
                </ContactRow>
                <ContactRow
                  icon={<MessageCircle className="h-4 w-4" />}
                  label="WhatsApp"
                >
                  <a
                    href="https://wa.me/94776992504?text=Thank%20you%20for%20contacting%20MN%20Law%20Chambers.%20How%20can%20I%20help%20you%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    Message us on WhatsApp
                  </a>
                </ContactRow>
              </ul>
            </div>

            <div className="border border-border p-8">
              <Eyebrow>Hours</Eyebrow>
              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <dt>Monday – Friday</dt>
                  <dd className="text-foreground">9:00 — 18:00</dd>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <dt>Saturday</dt>
                  <dd className="text-foreground">By appointment</dd>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <dt>Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <Eyebrow>Locate us</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium tracking-tight md:text-4xl">
          Find our chambers in Colombo.
        </h2>
        <div className="mt-8 overflow-hidden border border-border shadow-sm">
          <iframe
            title="MN Law Chambers — Colombo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6098518921576!2d79.86023159999999!3d6.9371449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259425dd7c26b%3A0x77f8e4673f294af1!2sMN%20Law%20Chambers!5e0!3m2!1sen!2slk!4v1777436759649!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[360px] w-full md:h-[480px]"
          />
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-primary/40 text-primary">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 text-foreground">{children}</div>
      </div>
    </li>
  );
}
