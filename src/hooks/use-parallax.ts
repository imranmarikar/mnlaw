import { useEffect } from "react";

/**
 * Translates any element with `data-parallax="<speed>"` on scroll.
 * Speed is a number; positive = moves slower than scroll (background feel),
 * negative = moves opposite direction. Typical range: -0.6 to 0.6.
 *
 * Respects prefers-reduced-motion.
 */
export function useParallax() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    if (els.length === 0) return;

    let raf = 0;
    const update = () => {
      const vh = window.innerHeight;
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0");
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (center - vh / 2) * speed * -1;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
