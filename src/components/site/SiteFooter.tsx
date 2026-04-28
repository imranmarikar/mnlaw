import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoMark from "@/assets/mn-law-mark.png";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-ink text-ink-foreground md:mt-20">
      {/* CTA band */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 50%, var(--gold) 0, transparent 55%)",
          }}
        />
        <div className="container relative mx-auto grid gap-8 px-6 py-12 md:py-16 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:py-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="hairline-gold" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                Begin a conversation
              </span>
            </div>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl tracking-tight md:text-5xl">
              Tell us about the matter you're facing.
            </h2>
            <p className="mt-5 max-w-xl text-ink-foreground/70">
              Initial consultations are confidential and obligation-free. We
              respond to every enquiry within one business day.
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-3 lg:col-span-5 lg:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:brightness-110"
            >
              Contact the firm
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="mailto:info@mnlawchambers.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-ink-foreground hover:border-gold hover:text-gold"
            >
              Email us
            </a>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="container mx-auto grid gap-10 px-6 py-12 md:py-16 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-white/95 p-1.5 ring-1 ring-gold/40">
              <img src={logoMark} alt="MN Law Chambers" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-tight">
                MN Law Chambers
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-ink-foreground/50">
                Attorneys-at-Law · Colombo
              </span>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            A Sri Lankan law firm advising clients on commercial, civil, real
            estate, finance and immigration matters with clarity and care since
            2009.
          </p>
          <div className="mt-6 font-serif italic text-gold/80">
            Pro lege, pro veritate.
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
            Practice
          </div>
          <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/75">
            <li><Link to="/practice/$slug" params={{ slug: "commercial-corporate" }} className="hover:text-gold">Commercial &amp; Corporate</Link></li>
            <li><Link to="/practice/$slug" params={{ slug: "civil" }} className="hover:text-gold">Civil Litigation</Link></li>
            <li><Link to="/practice/$slug" params={{ slug: "real-estate" }} className="hover:text-gold">Real Estate</Link></li>
            <li><Link to="/practice/$slug" params={{ slug: "finance-tax" }} className="hover:text-gold">Finance &amp; Tax</Link></li>
            <li><Link to="/practice/$slug" params={{ slug: "immigration" }} className="hover:text-gold">Immigration</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
            Firm
          </div>
          <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/75">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/team" className="hover:text-gold">Team</Link></li>
            <li><Link to="/practice" className="hover:text-gold">All practice</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
            Contact
          </div>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
              <span>Colombo 07, Sri Lanka</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
              <a href="tel:+94776992504" className="hover:text-gold">
                +94 77 699 2504
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
              <a href="mailto:info@mnlawchambers.com" className="hover:text-gold">
                info@mnlawchambers.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" />
              <span>Mon–Fri · 09:00–17:30</span>
            </li>
          </ul>
          <a
            href="https://wa.me/94776992504"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs font-medium text-gold hover:bg-gold hover:text-ink"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center lg:px-10">
          <div>© {new Date().getFullYear()} MN Law Chambers. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <span>Attorneys-at-Law · Bar Association of Sri Lanka</span>
            <span className="hidden h-3 w-px bg-white/10 sm:block" />
            <span className="uppercase tracking-[0.24em] text-gold/70">Est. 2009</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
