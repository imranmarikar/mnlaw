import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "ink" | "cream";

/**
 * Animated page hero with:
 * - Subtle mouse-parallax on background orbs
 * - Drifting gold grid overlay
 * - Floating blurred orbs
 * - Pulsing concentric rings (decorative)
 * - Staggered content rise-in
 *
 * Use this for top-of-page hero sections across routes.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  variant = "cream",
  align = "left",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  variant?: Variant;
  align?: "left" | "center";
  className?: string;
}) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const isInk = variant === "ink";

  return (
    <section
      ref={rootRef}
      className={cn(
        "relative overflow-hidden border-b border-border",
        isInk ? "bg-ink text-ink-foreground" : "bg-background text-foreground",
        className,
      )}
      style={{ ["--mx" as string]: 0, ["--my" as string]: 0 }}
    >
      {/* Drifting gold grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay animate-grid-drift"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--gold) 1px, transparent 1px), linear-gradient(to bottom, var(--gold) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at 60% 40%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 60% 40%, black 0%, transparent 70%)",
        }}
      />

      {/* Floating orbs (mouse parallax via --mx/--my) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 top-[-10%] h-[420px] w-[420px] rounded-full blur-3xl opacity-40 animate-orb-a"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, var(--gold), transparent 60%)",
            transform:
              "translate3d(calc(var(--mx) * -22px), calc(var(--my) * -18px), 0)",
          }}
        />
        <div
          className="absolute right-[-8%] top-[20%] h-[360px] w-[360px] rounded-full blur-3xl opacity-30 animate-orb-b"
          style={{
            background:
              "radial-gradient(circle at 60% 50%, var(--primary), transparent 65%)",
            transform:
              "translate3d(calc(var(--mx) * 28px), calc(var(--my) * 22px), 0)",
          }}
        />
        <div
          className="absolute left-[35%] bottom-[-25%] h-[480px] w-[480px] rounded-full blur-3xl opacity-25 animate-orb-c"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--accent), transparent 60%)",
            transform:
              "translate3d(calc(var(--mx) * 14px), calc(var(--my) * -14px), 0)",
          }}
        />
      </div>

      {/* Decorative concentric rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 md:block"
        style={{ width: 260, height: 260 }}
      >
        <span className="absolute inset-0 rounded-full border border-gold/30 animate-ring-pulse" />
        <span className="absolute inset-0 rounded-full border border-gold/30 animate-ring-pulse-delay" />
        <span className="absolute inset-0 rounded-full border border-gold/30 animate-ring-pulse-delay-2" />
      </div>

      {/* Top loading bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 h-px overflow-hidden"
      >
        <div className="h-full w-1/4 bg-gradient-to-r from-transparent via-gold to-transparent animate-hero-loadbar" />
      </div>

      {/* Shimmer sweep */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-hero-shimmer"
      />

      <div
        className={cn(
          "container relative mx-auto px-5 py-16 md:px-6 md:py-20 lg:px-10 lg:py-28",
          align === "center" && "text-center",
        )}
      >
        {eyebrow && (
          <div
            className={cn(
              "flex items-center gap-3 animate-rise",
              align === "center" && "justify-center",
            )}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="hairline-gold" />
            <span
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.28em]",
                isInk ? "text-gold" : "text-primary",
              )}
            >
              {eyebrow}
            </span>
          </div>
        )}

        <h1
          className={cn(
            "mt-6 max-w-4xl font-serif text-4xl font-medium leading-[1.05] text-balance md:text-6xl lg:text-7xl animate-rise",
            align === "center" && "mx-auto",
          )}
          style={{ animationDelay: "0.25s" }}
        >
          {title}
        </h1>

        {intro && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed md:text-lg animate-rise",
              isInk ? "text-ink-foreground/75" : "text-muted-foreground",
              align === "center" && "mx-auto",
            )}
            style={{ animationDelay: "0.45s" }}
          >
            {intro}
          </p>
        )}

        {children && (
          <div className="animate-rise" style={{ animationDelay: "0.6s" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
