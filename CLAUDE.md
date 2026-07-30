# This repo is a personal starter template

This is not a real project. It's the foundation Jake reuses to start SEO-critical Next.js
projects (SaaS marketing sites, landing pages, docs, anything that needs to rank in search) from
the same base, so the stack, tooling, and SEO groundwork don't have to be re-decided or re-built
each time. The moment a real project begins from this repo, the example content described below
should be torn out. This file exists so a session doesn't need to re-read the whole tree to answer
"how is this built" — treat it as authoritative over re-deriving things from source. It is a sibling
of `vite-react-template` (same visual theme, same example content) — this one exists specifically
for projects where SEO and server-rendering matter, which is why the stack diverges from it on
routing, data fetching, and fonts.

## SEO is the point of this template — non-negotiable

This template exists specifically to build SEO-critical, server-rendered products. Every page and
feature added to a project built from this template MUST be treated as SEO-critical by default,
not as an afterthought. Concretely, for every new route:

1. **Export `metadata` (or `generateMetadata` for dynamic routes).** Every route needs its own
   `title` and `description` — never ship a page that silently inherits the root default title.
   Titles should be unique and descriptive (~60 characters); descriptions ~155-160 characters.
2. **Default to Server Components.** Only add `'use client'` when something genuinely needs
   browser APIs, state, or event handlers (see the Client/Server split below). Content search
   engines need to read must be in the server-rendered HTML — not fetched or painted in after
   hydration.
3. **One `<h1>` per page, real heading hierarchy.** Don't skip levels, don't reach for a heading
   tag just for its default font size — style a `<p>` if that's what it semantically is.
4. **Use semantic HTML** (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
   over generic `<div>` soup wherever it changes the accessibility tree — it's also what search
   engines parse for page structure.
5. **Every `next/image` needs real, descriptive `alt` text.** Empty `alt=""` only for genuinely
   decorative images, matching the `aria-hidden` pattern already used for `Starfield`/`NebulaField`.
6. **Internal links use `next/link` (`<Link>`), never a bare `<a>`.** That's what lets Next
   prefetch and what keeps the link crawlable as part of the app rather than an external hop.
7. **Add every new route to `src/app/sitemap.ts`.** It is hand-maintained, not derived from the
   `app/` folder automatically — a route that exists but isn't listed is invisible to search
   engines until they discover it by chance.
8. **Add JSON-LD structured data for anything Google has a rich-result type for** — articles,
   FAQs, products, breadcrumbs, etc. Follow the pattern in `src/app/layout.tsx` (a `WebSite`
   schema): a plain object serialized into a `<script type="application/ld+json">`.
9. **Set `SITE_URL` in `src/lib/site.ts` to the real production domain before shipping.** It
   defaults to `https://example.com`. This backs `metadataBase`, every canonical URL, Open Graph
   image resolution, and the sitemap/robots absolute URLs — leaving it as the placeholder silently
   breaks all of them without throwing an error.
10. **Watch Core Web Vitals.** Minimize client-side JS (see the Client/Server split below), use
    `next/image` for every image (its inferred `width`/`height` + modern-format negotiation is
    what prevents layout shift), and use `next/font` for any new font — never a runtime `<link>`
    to a font CDN, which reintroduces the CLS/FOUT problem `next/font` exists to solve.

When in doubt on an SEO question, the deciding test is: **would Googlebot see this in the
server-rendered HTML without executing client JS?** If not, it needs to move server-side.

## Stack

- Next.js (App Router) + TypeScript, React 19
- App Router — file-based routing (`src/app/`), Next's own router; no TanStack Router here
- No client-side query library — data fetching is server-side (`fetch` in Server Components with
  Next's built-in cache), which is both simpler and better for SEO than a client cache would be;
  see "Data fetching" below for why TanStack Query was deliberately left out
- Tailwind CSS 4 — CSS-first config via `@theme` in `src/app/globals.css`, no `tailwind.config.js`
- `next/font` — self-hosted, zero-CLS fonts (replaces `@fontsource` from the Vite sibling)
- Oxlint — linting, config in `.oxlintrc.json`

## Structure

```
src/
  api/          fetch functions + response types (launches.ts) — plain functions, callable
                from Server Components since they only use `fetch`, no browser APIs
  app/          Next.js App Router routes
    layout.tsx        root layout: fonts, global <Metadata>, JSON-LD, Nav/Starfield/NebulaField
    globals.css        Tailwind import + @theme design tokens + global styles
    page.tsx           home route
    icon.svg           favicon (Next's file-convention auto-favicon, no manual <link> needed)
    sitemap.ts         generates /sitemap.xml — hand-maintained route list
    robots.ts          generates /robots.txt
    example/page.tsx
    stack/page.tsx
    data/
      layout.tsx        static header + <RefreshButton/>, always visible
      page.tsx           async Server Component, fetches + renders the launch grid
      loading.tsx         skeleton grid shown automatically while page.tsx suspends
      error.tsx            error boundary shown if the fetch throws (must be a Client Component)
      RefreshButton.tsx     the one interactive piece: router.refresh() to re-run page.tsx
  components/   shared UI (Nav, Starfield, NebulaField, NextBadge, LaunchCard)
  hooks/        reusable hooks (useCountdown)
  lib/          app-wide singletons (fonts.ts, site.ts)
```

## How it's wired together

**Routing (`src/app/`):** plain Next.js App Router — folders are routes, `page.tsx` is the route's
content, `layout.tsx` wraps a segment and its children. No route-tree codegen, no router plugin;
this is simpler than the Vite sibling's TanStack Router setup by construction.

**Client vs. Server Components — deliberately minimal client surface:** everything defaults to a
Server Component unless it's listed here, and everything listed here needs `'use client'` for a
specific, load-bearing reason:
- `Nav.tsx` — uses `usePathname()` for active-link styling
- `Starfield.tsx` — draws to a `<canvas>` via `useEffect`/`requestAnimationFrame`
- `LaunchCard.tsx` (and `useCountdown.ts`) — the countdown ticks via `setInterval`/`useState`
- `data/RefreshButton.tsx` — calls `router.refresh()` from a click handler
- `data/error.tsx` — Next requires error boundaries to be Client Components

Everything else (`layout.tsx`, `page.tsx` files, `NebulaField.tsx`, `NextBadge.tsx`,
`data/layout.tsx`) is a Server Component. This split is not incidental — it's what keeps the
actual page content (text, data, structure) in the server-rendered HTML instead of behind a
client JS execution, which is the whole SEO premise of this template.

- **Hydration gotcha (`useCountdown.ts`):** a `'use client'` component still renders once on the
  server as part of SSR, then again on the client during hydration — React requires those two
  renders to produce identical output. The original Vite version seeded its countdown state from
  `Date.now()` on first render, which worked because that app never ran on a server. Ported
  as-is here, it broke: the server's `Date.now()` reading and the client's `Date.now()` reading at
  hydration are never exactly equal, so React threw a hydration-mismatch error on every page load.
  The fix is in `useCountdown.ts`: seed state with `null` (renders identically — a single space —
  on both server and client), and only compute the real, clock-dependent value inside `useEffect`,
  which runs client-only, after hydration. **Any new state that reads `Date.now()`, `Math.random()`,
  `window`, or other non-deterministic/browser-only values in a Client Component must follow this
  same pattern** — compute it in `useEffect`, never in the initial `useState()` call — or it will
  hydration-mismatch the moment the component is server-rendered, which everything here is by
  default.

**Data fetching (`src/api/launches.ts` + `src/app/data/`):** no TanStack Query, no client cache.
`fetchUpcomingLaunches()` is a plain `async function` using `fetch` with `next: { revalidate: 60
}` — Next's own fetch cache, analogous to the old `staleTime: 60_000`. It runs directly inside the
`data/page.tsx` Server Component (`await`ed in the component body), so the launch list is present
in the initial HTML on first load, not fetched after hydration.
- The route is split across `layout.tsx` (static header text + `<RefreshButton/>`, always
  rendered) and `page.tsx` (just the async grid) so that Next's `loading.tsx`/`error.tsx`
  conventions swap only the grid area, not the whole page — mirrors the original's behavior where
  the header stayed put while the card grid alone showed a skeleton or error panel.
- `loading.tsx` is shown automatically by Next while `page.tsx`'s `await` is pending — no manual
  `isPending` state.
- `error.tsx` is shown automatically if the `fetch` throws (the fetch wrapper throws on
  `!response.ok`, unchanged from the Vite sibling) — no manual `isError` state. Its `reset()` prop
  is wired to the "Retry" button.
- `RefreshButton.tsx` calls `router.refresh()` inside `useTransition`, which re-runs `page.tsx` on
  the server and streams in new markup; `isPending` from the transition drives the
  "refreshing…" label — this replaces TanStack Query's `refetch`/`isFetching` with a Next-native
  equivalent, no client library required.
- The pattern to copy for a new data-backed route: plain `fetch`-based function in `src/api/`,
  `await` it directly in an async Server Component, add a sibling `loading.tsx` for the pending
  state and `error.tsx` for the failure state.

**Styling (`src/app/globals.css`):** Tailwind v4, so tokens are defined in `@theme` (not a JS
config file) as `--color-*` / `--font-*` custom properties, which Tailwind then exposes as
utilities (`--color-nebula` → `bg-nebula`, `text-nebula`, etc). Current tokens: `void` (bg),
`panel` / `panel-soft` (surfaces), `nebula` / `comet` / `flare` (accents), `starlight` (text),
`dust` (muted text). The `--font-*` tokens point at CSS variables set by `next/font` (see Fonts
below), not literal font-family strings. Dark-only — no light mode; `html { color-scheme: dark }`
plus `viewport.colorScheme`/`themeColor` in `layout.tsx` (Next's replacement for the Vite
sibling's inline `body` background-color hack — same goal, avoid a white flash before CSS loads).
Custom utility classes live outside `@theme` in the same file: `.glass-panel` (frosted-glass
card/nav surface), `.text-glow-nebula` / `.text-glow-comet` (text-shadow glow), `.status-dot`
(pulsing indicator dot), `.nebula-field` / `.nebula-blob` (the drifting background gradients,
three variants + keyframes `drift-a/b/c`). All animation is disabled under
`prefers-reduced-motion: reduce`, including inside `Starfield.tsx` (checks the media query in JS
and renders a static canvas frame instead of starting the `requestAnimationFrame` loop).

**Fonts (`src/lib/fonts.ts`):** `next/font/google` — Space Grotesk (500/700), Inter (400/500/600),
JetBrains Mono (400/500), each with `display: 'swap'`. `next/font` self-hosts at build time (no
runtime request to Google), generates a CSS variable per font (e.g. `--font-space-grotesk`), and
those variable classes are applied on `<html>` in `layout.tsx`. `globals.css`'s `@theme` then maps
`--font-display`/`--font-body`/`--font-mono` to `var(--font-space-grotesk)` etc. Adding a new
font or weight means adding it in `fonts.ts`, applying its `.variable` class in `layout.tsx`, and
wiring a token to it in `globals.css` if it needs a Tailwind utility.

**TypeScript (`tsconfig.json`):** `strict: true`, plus `noUnusedLocals`/`noUnusedParameters`
carried over from the Vite sibling's strictness (Next's own template doesn't set these by
default). `verbatimModuleSyntax` is left `false` here (unlike the Vite sibling) since it can
conflict with Next's generated `.next/types` — `import type` is still good practice for type-only
imports, just not compiler-enforced. Path alias `@/*` → `./src/*` is available (see
`src/app/data/page.tsx` for the pattern); relative imports are also fine and used elsewhere for
consistency with the Vite sibling.
- **Version-pin gotcha:** `package.json` pins `"typescript": "^6.0.3"`, not the newer `7.x` line
  that `npm install typescript@latest` will resolve to. TypeScript 7 is a from-scratch native/Go
  port and, as of this template's setup, doesn't yet expose the compiler API `next build`'s
  type-checking step needs — installing 7.x makes `npm run build` fail outright with "TypeScript
  7.0.2 does not provide the compiler API required by Next.js." Don't bump past the `6.x` line
  without first confirming Next.js has added support for the TS7 API.

**Linting:** Oxlint only, same as the Vite sibling — `.oxlintrc.json` disables
`react/only-export-components` for `src/app/**` since route files legitimately export multiple
things (`default` component, `metadata`, `generateMetadata`, etc.), same rationale as the Vite
sibling's `src/routes/**` override. Oxlint does **not** know Next-specific rules (e.g. warning on
`<img>` instead of `next/image`, or `<a>` instead of `next/link`) — that discipline has to be
applied by hand (see the SEO section above) or by adding `eslint-config-next` if the project
outgrows this gap.

**npm install scripts:** this repo uses npm's `allowScripts` gate (see `package.json`), same as
the Vite sibling. A new dependency with an install script will `npm warn` until approved with
`npm approve-scripts <pkg>` — expected, not an error to work around.

**Dev server:** `npm run dev` runs `next dev --turbopack`, default port 3000 (not the Vite
sibling's 5173) — Next auto-increments if it's taken.

## What's foundation vs. what's example content

**Foundation — keep this, it's the point of the template:**
- Build tooling and config: Next.js, TypeScript, Oxlint, Tailwind setup
- The App Router structure and root-layout shell in `src/app/layout.tsx`
- The Metadata API / JSON-LD / `sitemap.ts` / `robots.ts` SEO scaffolding, and the SEO rules
  above — this is the actual point of this template, do not weaken it for a new project
- The Server-Component-first data fetching pattern (`src/api/launches.ts` +
  `src/app/data/{layout,page,loading,error}.tsx`)
- The `@theme` token pattern in `globals.css` (the mechanism, not the specific colors)
- The `next/font` self-hosting pattern (the mechanism, not the specific fonts)
- The active-link `!important` pattern in `Nav.tsx` and the Client/Server split discipline above
  — both will bite again (or quietly erode the SEO story) in a new project if forgotten
- The `useEffect`-not-`useState()` pattern for any non-deterministic value in a Client Component
  (see the hydration gotcha below) — will silently reintroduce hydration errors if forgotten
- The TypeScript version pin at `^6.0.3` (see the version-pin gotcha below) — don't bump to `7.x`

**Example content — delete/replace once a real project starts:**
- All four routes' actual content: `page.tsx`, `example/page.tsx`, `data/*`, `stack/page.tsx`
- The "outer space" visual theme: `Starfield.tsx`, `NebulaField.tsx`, the
  nebula/comet/flare/void color tokens, the glass/glow utility classes in `globals.css`
- `src/api/launches.ts`, `LaunchCard.tsx`, `useCountdown.ts` — the rocket-launch demo data
- The Toomay logo/wordmark in the nav (`src/assets/toomay-logo.png`), `NextBadge.tsx`, and the
  site name/description/JSON-LD in `src/lib/site.ts` + `src/app/layout.tsx`

## Starting a real project from this template

1. Gut `src/app/` down to `layout.tsx` (strip its nav/theme content too) plus whatever routes the
   new project actually needs. Update `sitemap.ts` to match.
2. Set `SITE_URL` in `src/lib/site.ts` to the real domain, and update `SITE_NAME`/
   `SITE_DESCRIPTION` — this is load-bearing for SEO, not just copy.
3. Replace the design tokens in `globals.css` — new palette, new fonts via `src/lib/fonts.ts` —
   or drop the space theme entirely for something plain.
4. Point `src/api/` at the real backend; delete `launches.ts` and its consumers.
5. Swap the logo/branding, and replace the `WebSite` JSON-LD in `layout.tsx` with whatever
   structured data actually fits the product (`Organization`, `SoftwareApplication`, etc.).
6. Rewrite or delete this file once the project has its own identity — but keep the SEO
   discipline described above; that's the reason this template exists.
