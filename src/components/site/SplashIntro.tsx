import { useEffect, useState } from "react";
import logo from "@/assets/mn-law-logo.png";

const SEEN_KEY = "mn-splash-seen";

export function SplashIntro() {
  const [phase, setPhase] = useState<"hidden" | "center" | "fly" | "done">(
    "center",
  );

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(SEEN_KEY)) {
      setPhase("done");
      return;
    }
    const t1 = setTimeout(() => setPhase("fly"), 5000);
    const t2 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem(SEEN_KEY, "1");
    }, 5500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "hidden" || phase === "done") return null;

  const flying = phase === "fly";

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] pointer-events-none transition-opacity duration-500 ${
        flying ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background — matches site cream/brown palette */}
      {!flying && (
        <div className="absolute inset-0 bg-background overflow-hidden">
          {/* Drifting gold grid */}
          <div
            className="absolute inset-0 opacity-[0.16] animate-grid-drift"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--gold) 1px, transparent 1px), linear-gradient(to bottom, var(--gold) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage:
                "radial-gradient(ellipse at 50% 50%, black 0%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 50% 50%, black 0%, transparent 70%)",
            }}
          />
          {/* Floating gold orbs */}
          <div
            className="absolute -left-24 top-[-10%] h-[420px] w-[420px] rounded-full blur-3xl opacity-40 animate-orb-a"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, var(--gold), transparent 60%)",
            }}
          />
          <div
            className="absolute right-[-8%] top-[15%] h-[360px] w-[360px] rounded-full blur-3xl opacity-30 animate-orb-b"
            style={{
              background:
                "radial-gradient(circle at 60% 50%, var(--primary), transparent 65%)",
            }}
          />
          <div
            className="absolute left-[35%] bottom-[-25%] h-[480px] w-[480px] rounded-full blur-3xl opacity-25 animate-orb-c"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, var(--accent), transparent 60%)",
            }}
          />
          {/* Pulsing concentric rings behind logo */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: 320, height: 320 }}
          >
            <span className="absolute inset-0 rounded-full border border-gold/30 animate-ring-pulse" />
            <span className="absolute inset-0 rounded-full border border-gold/30 animate-ring-pulse-delay" />
            <span className="absolute inset-0 rounded-full border border-gold/30 animate-ring-pulse-delay-2" />
          </div>
        </div>
      )}

      {/* Tagline above logo */}
      {!flying && (
        <div
          className="absolute left-1/2 top-[calc(50%-9rem)] -translate-x-1/2 text-center animate-rise"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="hairline-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              Est. 2009 · Colombo
            </span>
            <span className="hairline-gold" />
          </div>
        </div>
      )}

      {/* Logo with sparkles */}
      <div
        className="absolute transition-all duration-500 ease-in-out"
        style={
          flying
            ? { top: "1.25rem", left: "1.25rem", height: "2.5rem" }
            : {
                top: "50%",
                left: "50%",
                height: "10rem",
                transform: "translate(-50%, -50%)",
              }
        }
      >
        <div className="relative h-full aspect-square">
          {!flying && (
            <>
              {/* Rotating edge light around logo */}
              <span
                aria-hidden
                className="absolute -inset-3 rounded-full animate-edge-spin"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 280deg, color-mix(in oklab, var(--gold) 80%, transparent) 330deg, var(--gold) 355deg, color-mix(in oklab, var(--gold) 80%, transparent) 20deg, transparent 70deg, transparent 360deg)",
                  WebkitMask:
                    "radial-gradient(circle, transparent 58%, black 60%, black 70%, transparent 72%)",
                  mask: "radial-gradient(circle, transparent 58%, black 60%, black 70%, transparent 72%)",
                  filter: "blur(2px) drop-shadow(0 0 6px var(--gold))",
                }}
              />
            </>
          )}
          <img
            src={logo}
            alt=""
            className="relative h-full w-auto object-contain"
          />
        </div>
      </div>

      {/* Tagline below logo */}
      {!flying && (
        <div
          className="absolute left-1/2 top-[calc(50%+8rem)] -translate-x-1/2 max-w-md px-6 text-center animate-rise"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="font-serif text-xl md:text-2xl text-foreground/80 italic leading-snug">
            Considered counsel for consequential matters.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Commercial</span>
            <span className="text-gold">·</span>
            <span>Civil</span>
            <span className="text-gold">·</span>
            <span>Real Estate</span>
            <span className="text-gold">·</span>
            <span>Finance</span>
          </div>
        </div>
      )}

      {/* Bottom loading bar */}
      {!flying && (
        <div className="absolute left-0 right-0 bottom-0 h-px overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-gold to-transparent animate-hero-shimmer" />
        </div>
      )}
    </div>
  );
}
