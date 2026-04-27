export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="group relative overflow-hidden border-y border-border bg-background py-5">
      <div className="flex w-max animate-marquee gap-12 pr-12 group-hover:[animation-play-state:paused]">
        {row.map((label, i) => (
          <div
            key={i}
            className="flex items-center gap-12 text-sm uppercase tracking-[0.22em] text-muted-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
