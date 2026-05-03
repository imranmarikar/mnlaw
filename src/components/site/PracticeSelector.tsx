import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { practiceAreas } from "@/lib/practice-areas";
import commercialImage from "@/assets/practice-commercial.png";
import civilImage from "@/assets/practice-civil.png";
import realEstateImage from "@/assets/practice-real-estate.png";
import financeImage from "@/assets/practice-finance.png";
import immigrationImage from "@/assets/practice-immigration.png";

const imageBySlug: Record<string, string> = {
  "commercial-corporate": commercialImage,
  civil: civilImage,
  "real-estate": realEstateImage,
  "finance-tax": financeImage,
  immigration: immigrationImage,
};

export function PracticeSelector() {
  const [active, setActive] = useState(0);
  const area = practiceAreas[active];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      {/* List */}
      <ul className="lg:col-span-5">
        {practiceAreas.map((p, i) => {
          const isActive = i === active;
          return (
            <li key={p.slug}>
              <button
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`group flex w-full items-start gap-5 border-b border-border py-6 text-left transition-colors ${
                  isActive ? "" : "opacity-70 hover:opacity-100"
                }`}
              >
                <span
                  className={`mt-1 font-mono text-xs tabular-nums transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  0{i + 1}
                </span>
                <span className="flex-1">
                  <span
                    className={`block text-xl font-semibold tracking-tight transition-colors md:text-2xl ${
                      isActive ? "text-foreground" : "text-foreground/70"
                    }`}
                  >
                    {p.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {p.short.split(".")[0]}.
                  </span>
                </span>
                <span
                  className={`mt-1 h-2 w-2 shrink-0 rounded-full transition-colors ${
                    isActive ? "bg-primary" : "bg-transparent"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>

      {/* Detail panel */}
      <div className="lg:col-span-7">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="aspect-[16/10] overflow-hidden bg-secondary">
            <img
              key={area.slug}
              src={images[active % images.length]}
              alt={area.title}
              loading="lazy"
              width={1280}
              height={800}
              className="h-full w-full animate-[fade-in_0.4s_ease-out] object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <div className="eyebrow">Practice · 0{active + 1}</div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {area.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {area.intro}
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {area.services.slice(0, 4).map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 text-sm text-foreground/80"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              to="/practice/$slug"
              params={{ slug: area.slug }}
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80"
            >
              Explore {area.title}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
