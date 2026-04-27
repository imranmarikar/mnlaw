const stats = [
  { value: "15+", label: "Years of counsel", hint: "Established 2009" },
  { value: "5", label: "Core practice areas", hint: "Commercial to immigration" },
  { value: "100%", label: "Partner-led", hint: "No junior hand-offs" },
  { value: "1 BD", label: "Initial response", hint: "Average reply time" },
];

export function StatsPanel() {
  return (
    <div className="rounded-2xl bg-ink px-6 py-14 text-ink-foreground md:px-12 md:py-20">
      <div className="grid gap-10 md:grid-cols-4 md:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="reveal">
            <div className="font-serif text-5xl font-medium tracking-tight text-primary-foreground md:text-6xl">
              {s.value}
            </div>
            <div className="mt-3 text-sm font-medium text-ink-foreground">
              {s.label}
            </div>
            <div className="mt-1 text-xs text-ink-foreground/60">{s.hint}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
