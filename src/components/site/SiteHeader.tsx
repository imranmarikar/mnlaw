import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/mn-law-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "The Firm" },
  { to: "/practice", label: "Practice" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      {/* Utility bar */}
      <div className="hidden border-b border-white/5 bg-ink text-ink-foreground md:block">
        <div className="container mx-auto flex h-9 items-center justify-between px-6 text-[11px] tracking-wide lg:px-10">
          <div className="flex items-center gap-6 text-ink-foreground/70">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-gold" />
              Colombo, Sri Lanka
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span className="uppercase tracking-[0.22em] text-gold">Est. 2009</span>
            <span className="h-3 w-px bg-white/10" />
            <span>Mon–Fri · 09:00–17:30</span>
          </div>
          <div className="flex items-center gap-5 text-ink-foreground/80">
            <a href="tel:+94776992504" className="flex items-center gap-1.5 hover:text-gold">
              <Phone className="h-3 w-3" />
              +94 77 699 2504
            </a>
            <a
              href="mailto:info@mnlawchambers.com"
              className="flex items-center gap-1.5 hover:text-gold"
            >
              <Mail className="h-3 w-3" />
              info@mnlawchambers.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
            : "border-b border-transparent bg-background"
        }`}
      >
        <div className="container mx-auto flex h-18 items-center justify-between gap-6 px-6 py-3 lg:px-10">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink font-serif text-base font-semibold text-gold ring-1 ring-gold/40">
              MN
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                MN Law Chambers
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Attorneys-at-Law · Colombo
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="story-link text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground", "data-active": "true" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-ink-foreground ring-1 ring-gold/30 transition-all hover:bg-primary hover:ring-gold/60 md:inline-flex"
          >
            Book consultation
            <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-0.5" />
          </Link>

          <button
            aria-label="Toggle menu"
            className="rounded-md p-1.5 text-foreground hover:bg-secondary md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[72px] z-40 animate-[fade-in_0.2s_ease-out] border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col px-6 py-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-border/60 py-4 text-lg font-medium text-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-ink-foreground"
              onClick={() => setOpen(false)}
            >
              Book consultation
              <ArrowRight className="h-4 w-4 text-gold" />
            </Link>
            <div className="mt-6 space-y-1 text-xs text-muted-foreground">
              <div>Colombo, Sri Lanka</div>
              <a href="mailto:info@mnlawchambers.com" className="block">
                info@mnlawchambers.com
              </a>
              <a href="tel:+94776992504" className="block">
                +94 77 699 2504
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
