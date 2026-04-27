## Direction: Modern Law-Tech

Move away from the current "editorial magazine" feel. The new language is **lighter, more product-like, and interactive** — the kind of visual system you'd see on a boutique advisory or a modern fintech firm, while keeping the gravitas a law firm needs.

### Visual language shift

| | Current | New |
|---|---|---|
| Type hierarchy | Serif-led, huge display serif | Sans-led (Inter tighter), serif only for accents / big numbers |
| Palette | Warm ivory + burgundy | Near-white (`#FAFAF7`), deep ink `#0E1414`, single accent (kept burgundy **or** swap to deep teal `#0F4C47` — see Q below in plan) |
| Surfaces | Flat blocks separated by hairlines | Soft cards with subtle borders + 1–2% shadow, rounded `--radius: 0.75rem` |
| Rhythm | Stacked full-width sections, all same weight | Alternating: full-bleed → contained card grid → split → sticky sidebar → full-bleed CTA |
| Motion | None | Tasteful: fade-in-up on scroll, hover lifts, animated underline, counter roll on stats |

### Header + Footer rework

**Header** (`SiteHeader.tsx`)
- Slimmer (h-16), transparent over hero, turns frosted white on scroll.
- Monogram mark redone as a small wordmark `MN — Law Chambers` with a hairline divider.
- Nav items get the animated underline (`story-link` pattern).
- "Book Consultation" button becomes a pill with an arrow icon that slides on hover.
- Mobile: full-screen overlay menu with fade-in, large tap targets, contact details at the bottom.

**Footer** (`SiteFooter.tsx`)
- 4-column layout: brand + tagline / Practice / Firm / Contact.
- Adds a "Get in touch" mini-form (email + matter type) that routes to `/contact`.
- Bottom bar: est. 2009 · Colombo · credentials · small social icons.

### Homepage structure (new)

```text
┌────────────────────────────────────────────────────┐
│ 1. HERO — split, but inverted & kinetic            │
│    • Left: oversized sans headline w/ serif italic │
│      accent word, animated on load (stagger).      │
│    • Right: stacked "credential chips" (Est. 2009, │
│      Colombo, 5 practice areas) + small image      │
│      collage instead of single photo.              │
│    • Bottom strip: marquee of client types         │
│      ("Founders · Families · Investors · Banks…")  │
├────────────────────────────────────────────────────┤
│ 2. VALUE PROP STRIP — 3 icon cards in a row,       │
│    soft shadow, hover lift (Plain advice /         │
│    Long-term counsel / Discretion).                │
├────────────────────────────────────────────────────┤
│ 3. PRACTICE AREAS — INTERACTIVE SELECTOR           │
│    • Left: vertical list of 5 areas (numbered).    │
│    • Hovering/tapping one swaps the right panel    │
│      (image + short + 3 service bullets + CTA).    │
│    • Replaces the flat 2-col grid entirely.        │
├────────────────────────────────────────────────────┤
│ 4. APPROACH — sticky-left heading, scrolling       │
│    right column of principles (modular cards).     │
├────────────────────────────────────────────────────┤
│ 5. BY THE NUMBERS — 4 stat tiles on a dark panel   │
│    (15+ yrs · 5 practices · LK jurisdiction · …),  │
│    numbers animate on enter. Adds rhythm/contrast. │
├────────────────────────────────────────────────────┤
│ 6. TESTIMONIAL / QUOTE — single anonymised quote   │
│    on ivory, serif italic, oversized quotation     │
│    mark as graphic.                                │
├────────────────────────────────────────────────────┤
│ 7. CTA — card on dark ink background, two actions  │
│    (Book consultation / Email the firm).           │
└────────────────────────────────────────────────────┘
```

### Technical details

- `src/styles.css` — retune tokens:
  - `--background` → lighter near-white, `--foreground` → deeper ink
  - `--radius` → `0.75rem`
  - Add `--shadow-card` and a `.card-soft` utility
  - Keep Cormorant for accents only; set default headings to Inter with tight tracking
  - Add scroll-triggered fade-in-up utility (`.reveal` + `IntersectionObserver` hook)
- `src/hooks/use-reveal.ts` — new small hook for on-scroll reveal.
- `src/components/site/SiteHeader.tsx` — transparent-on-top, frosted-on-scroll (scroll listener), new mobile overlay.
- `src/components/site/SiteFooter.tsx` — 4-column, mini contact form.
- `src/components/site/PracticeSelector.tsx` — NEW interactive component (list + detail panel, keyboard accessible, falls back to stacked on mobile).
- `src/components/site/StatsPanel.tsx` — NEW animated counter tiles.
- `src/components/site/Marquee.tsx` — NEW simple CSS-animated marquee for hero strip.
- `src/routes/index.tsx` — full rewrite to the 7-section structure above, using existing `heroImage` / `officeImage` / `aboutImage` plus 1 new asset for the practice selector default (generated).
- No changes to About / Practice / Team / Contact routes this pass (scope = homepage + chrome). The new tokens will flow to them automatically and they'll still look consistent; we can polish them in a follow-up.

### Accent color question

Quick call: keep **burgundy** accent (continuity with what's already built) or switch to **deep teal** (feels more "modern law-tech" and pairs better with the lighter palette)? If you don't specify, I'll keep burgundy but desaturate it slightly so it reads more contemporary.

### Out of scope (can follow up)

- Inner-page redesigns (About, Practice detail, Team, Contact)
- Real photography (will continue with the existing generated images)
- CMS / Insights blog
