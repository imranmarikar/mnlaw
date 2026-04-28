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
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {practiceAreas.map((p, i) => {
        const featured = i === 0;
        return (
          <Link
            key={p.slug}
            to="/practice/$slug"
            params={{ slug: p.slug }}
            className={`group relative overflow-hidden rounded-2xl bg-ink text-ink-foreground shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-lift)] ${
              featured ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <div className={`relative ${featured ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[480px]" : "aspect-[4/3]"}`}>
              <img
                src={images[i % images.length]}
                alt={p.title}
                loading="lazy"
                width={1200}
                height={900}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                <span className="font-mono tabular-nums">0{i + 1}</span>
                <span className="h-px w-6 bg-gold/60" />
                <span>Practice</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-ink-foreground md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-foreground/70">
                {p.short}
              </p>

              {/* services peek — shown on hover (desktop), always on mobile */}
              <ul className="mt-4 grid gap-1.5 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:group-hover:max-h-40 md:group-hover:opacity-100">
                {p.services.slice(0, featured ? 4 : 3).map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 text-xs text-ink-foreground/80"
                  >
                    <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Explore practice
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
