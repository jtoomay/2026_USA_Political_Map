# Next.js + TypeScript + Tailwind

A starter for SEO-critical, server-rendered apps: Next.js App Router, TypeScript, Tailwind CSS 4,
and the Next.js Metadata API wired up end to end (per-page metadata, JSON-LD, `sitemap.xml`,
`robots.txt`). See `CLAUDE.md` for the full architecture and the SEO rules this project is held to.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — Oxlint

## 2026 midterms map — mock data, data-access seam, and TODOs

The home page's interactive Senate/House map and the `/states/[slug]` pages run
entirely on **mock data** — there is no real backend or database yet.

**What's mocked:** `src/api/elections.ts` has hand-written data for 12 states —
five 2026 Senate battlegrounds (GA, MI, ME, NC, TX), the two 2026 Senate
SPECIAL elections (FL, OH), one safe-D and one safe-R seat (MA, WY), and three
states with no 2026 Senate election (CA, NY, PA — PA also demonstrates the
evenly-split House delegation treatment). Incumbent names are invented
placeholders, not real officeholders, and every forecaster rating carries its
own mock `source` attribution rather than being presented as real Cook/
Sabato's/Inside Elections/DDHQ data.

**The data-access seam:** `src/api/elections.ts` exports exactly three
functions — `getAllStates()`, `getStateData(slug)`, `getLastUpdated()` — and
every component/page calls only those, never the mock array directly.
Connecting the real backend later means rewriting the *implementation* of
those three functions (likely making them `async` and adding `fetch` calls);
nothing outside this one file should need to change.

**TODOs left in the code** (all grep-able as `TODO`):
- `src/api/elections.ts` — once real endpoints exist, use Next's fetch cache
  with a short `revalidate` window (election data changes often), following
  the pattern in `src/api/launches.ts`.
- `src/api/elections.ts` / `src/app/states/[slug]/page.tsx` — `HouseDelegation`
  is a whole-delegation seat-count snapshot, not a per-district breakdown;
  refine once real per-district data is available.
- `src/components/UsElectionMap.tsx` — the special-election indicator is a
  plain asterisk rendered through the map library's SVG label slot; a real
  ring/badge would need a custom marker overlay the library doesn't expose.
- `src/components/UsElectionMap.tsx` — any state outside the mocked 12 falls
  back to inert gray in both chamber modes; production data needs to cover
  all 50 states so House mode can make every state genuinely active/clickable.
- `src/app/about`, `/privacy`, `/contact` — stub placeholders (heading only);
  need real content before relying on them for AdSense trust-page purposes.
- Not TODO-commented but worth knowing: the map library (`@mirawision/usa-map-react`)
  applies `cursor: pointer` to every state path via its own bundled CSS, so
  inert/no-data states still show a pointer cursor on hover even though
  they're not clickable — it doesn't expose a per-state class hook to
  override this.

**Map library:** `@mirawision/usa-map-react`, chosen over `react-simple-maps`
because it declares native React 19 support (react-simple-maps' peer range
tops out at React 18) and ships its own state paths, so no extra topojson/geo
dependency was needed. It's isolated entirely behind
`src/components/UsElectionMap.tsx` — that's the only file that imports it, so
swapping map libraries later means rewriting that one component.
