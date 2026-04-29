import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { practiceAreas } from "@/lib/practice-areas";
import practiceImage from "@/assets/practice-abstract.jpg";
import officeImage from "@/assets/office-interior.jpg";
import aboutImage from "@/assets/about-lawbook.jpg";
import heroImage from "@/assets/hero-courthouse.jpg";
import libraryImage from "@/assets/hero-library.jpg";

const images = [heroImage, practiceImage, aboutImage, officeImage, libraryImage];

export function PracticeGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {practiceAreas.map((p, i) => (
        <Link
          key={p.slug}
          to="/practice/$slug"
          params={{ slug: p.slug }}
          className="group relative flex flex-col overflow-hidden rounded-2xl bg-ink text-ink-foreground shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
        >
          {/* Image — fixed, focused aspect; never tall on mobile or laptop */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={images[i % images.length]}
              alt={p.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur">
              <span className="font-mono tabular-nums">0{i + 1}</span>
              <span className="h-px w-3 bg-gold/60" />
              Practice
            </div>
          </div>

          {/* Body — always visible, no hover-only content */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-serif text-2xl leading-tight text-ink-foreground">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">
              {p.short}
            </p>

            <ul className="mt-4 space-y-1.5">
              {p.services.slice(0, 3).map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 text-xs text-ink-foreground/80"
                >
                  <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Explore practice
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
