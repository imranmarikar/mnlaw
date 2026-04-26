import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "The Firm" },
  { to: "/practice", label: "Practice Areas" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center border border-primary/70 font-serif text-xl font-semibold text-primary">
            MN
          </span>
          <div className="leading-tight">
            <div className="font-serif text-lg font-semibold text-foreground">
              MN Law Chambers
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Counsel since 2009
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          Book Consultation
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="container mx-auto flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-border/40 py-3 text-base text-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
              onClick={() => setOpen(false)}
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
