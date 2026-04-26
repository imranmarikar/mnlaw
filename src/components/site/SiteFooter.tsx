import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container mx-auto grid gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-primary/70 font-serif text-xl font-semibold text-primary">
              MN
            </span>
            <div className="font-serif text-xl font-semibold">MN Law Chambers</div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            A Sri Lankan law firm advising clients on commercial, civil, real estate, finance and immigration matters with clarity and care since 2009.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Practice</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/practice/$slug" params={{ slug: "commercial-corporate" }} className="hover:text-primary">Commercial &amp; Corporate</Link></li>
            <li><Link to="/practice/$slug" params={{ slug: "civil" }} className="hover:text-primary">Civil Litigation</Link></li>
            <li><Link to="/practice/$slug" params={{ slug: "real-estate" }} className="hover:text-primary">Real Estate</Link></li>
            <li><Link to="/practice/$slug" params={{ slug: "finance-tax" }} className="hover:text-primary">Finance &amp; Tax</Link></li>
            <li><Link to="/practice/$slug" params={{ slug: "immigration" }} className="hover:text-primary">Immigration</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Colombo, Sri Lanka</li>
            <li><a href="tel:+94776992504" className="hover:text-primary">+94 77 699 2504</a></li>
            <li><a href="mailto:info@mnlawchambers.com" className="hover:text-primary">info@mnlawchambers.com</a></li>
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

      <div className="border-t border-border/60">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row lg:px-10">
          <div>© {new Date().getFullYear()} MN Law Chambers. All rights reserved.</div>
          <div className="font-serif italic">Pro lege, pro veritate.</div>
        </div>
      </div>
    </footer>
  );
}
