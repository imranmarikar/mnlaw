import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  bare = false,
}: {
  children: ReactNode;
  className?: string;
  bare?: boolean;
}) {
  return (
    <section className={cn(bare ? "" : "py-20 lg:py-28", className)}>
      <div className="container mx-auto px-6 lg:px-10">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
