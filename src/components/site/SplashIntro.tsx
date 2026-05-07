import { useEffect, useState } from "react";
import logo from "@/assets/mn-law-logo.png";

const SEEN_KEY = "mn-splash-seen";

export function SplashIntro() {
  const [phase, setPhase] = useState<"hidden" | "center" | "fly" | "done">(
    "hidden",
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SEEN_KEY)) return;
    setPhase("center");
    const t1 = setTimeout(() => setPhase("fly"), 10000);
    const t2 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem(SEEN_KEY, "1");
    }, 10600);
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
        flying ? "opacity-0" : "opacity-100 bg-background"
      }`}
    >
      <img
        src={logo}
        alt=""
        className="absolute object-contain transition-all duration-500 ease-in-out"
        style={
          flying
            ? { top: "1.25rem", left: "1.25rem", height: "2.5rem", width: "auto" }
            : {
                top: "50%",
                left: "50%",
                height: "10rem",
                width: "auto",
                transform: "translate(-50%, -50%)",
              }
        }
      />
    </div>
  );
}
