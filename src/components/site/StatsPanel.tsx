const stats = [
  { value: "15+", label: "Years of counsel", hint: "Established 2009" },
  { value: "5", label: "Core practice areas", hint: "Commercial to immigration" },
  { value: "100%", label: "Partner-led", hint: "No junior hand-offs" },
  { value: "1 BD", label: "Initial response", hint: "Average reply time" },
];

export function StatsPanel() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-ink px-6 py-14 text-ink-foreground md:px-12 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0, transparent 40%)",
        }}
      />
      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="hairline-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            By the numbers
          </span>
        </div>
        <h3 className="mt-4 max-w-xl font-serif text-3xl italic text-ink-foreground md:text-4xl">
          A boutique practice, measured.
        </h3>
        <div className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="reveal border-t border-white/10 pt-5">
              <div className="font-serif text-5xl font-medium tracking-tight text-gold md:text-6xl">
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
    </div>
  );
}
