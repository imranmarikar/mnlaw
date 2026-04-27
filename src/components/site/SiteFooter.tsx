import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="container mx-auto px-6 py-20 lg:px-10">
        {/* CTA band */}
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Begin a conversation
            </div>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
              Tell us about the matter you're facing.
            </h2>
          </div>
          <div className="flex items-end gap-3 lg:col-span-5 lg:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact the firm
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="mailto:info@mnlawchambers.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-ink-foreground hover:border-white/60"
            >
              Email us
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-serif text-sm font-semibold text-primary-foreground">
                MN
              </span>
              <span className="text-sm font-semibold tracking-tight">
                MN Law Chambers
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              A Sri Lankan law firm advising clients on commercial, civil, real
              estate, finance and immigration matters with clarity and care since
              2009.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
              Practice
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/80">
              <li><Link to="/practice/$slug" params={{ slug: "commercial-corporate" }} className="hover:text-primary">Commercial &amp; Corporate</Link></li>
              <li><Link to="/practice/$slug" params={{ slug: "civil" }} className="hover:text-primary">Civil Litigation</Link></li>
              <li><Link to="/practice/$slug" params={{ slug: "real-estate" }} className="hover:text-primary">Real Estate</Link></li>
              <li><Link to="/practice/$slug" params={{ slug: "finance-tax" }} className="hover:text-primary">Finance &amp; Tax</Link></li>
              <li><Link to="/practice/$slug" params={{ slug: "immigration" }} className="hover:text-primary">Immigration</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
              Firm
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/80">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/team" className="hover:text-primary">Team</Link></li>
              <li><Link to="/practice" className="hover:text-primary">All practice</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
              Contact
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-ink-foreground/80">
              <li>Colombo, Sri Lanka</li>
              <li>
                <a href="tel:+94776992504" className="hover:text-primary">
                  +94 77 699 2504
                </a>
              </li>
              <li>
                <a href="mailto:info@mnlawchambers.com" className="hover:text-primary">
                  info@mnlawchambers.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/94776992504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-ink-foreground/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} MN Law Chambers. All rights reserved.</div>
          <div className="font-serif italic">Pro lege, pro veritate.</div>
        </div>
      </div>
    </footer>
  );
}
