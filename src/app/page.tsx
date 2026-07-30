import type { Metadata } from 'next'
import { getAllStates, getLastUpdated } from '@/api/elections'
import { ElectionMapExplorer } from '@/components/ElectionMapExplorer'
import { StateList } from '@/components/StateList'

export const metadata: Metadata = {
  title: 'Home',
  description:
    '2026 U.S. midterm elections: an interactive Senate and House control map with side-by-side race ratings from multiple forecasters.',
}

function formatLastUpdated(iso: string): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(iso))
}

// TODO: once the real backend is connected, this should read from a `fetch`
// using Next's cache with a short `revalidate` window (see the TODO in
// src/api/elections.ts) instead of a fully static build — election data
// changes often and a twice-daily refresh agent is the plan.
export default function Home() {
  const states = getAllStates()
  const lastUpdated = getLastUpdated()

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-14 sm:py-20">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">2026 U.S. Midterms</p>
        <h1 className="font-display max-w-2xl text-5xl font-semibold text-foreground sm:text-6xl">
          Who controls Congress?
        </h1>
        <p className="max-w-xl text-muted-foreground">
          An interactive map of the House and Senate, colored by the party currently holding each seat.
        </p>
        <p className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
          <span aria-hidden="true" className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
          Updated {formatLastUpdated(lastUpdated)}
        </p>
      </div>

      {/* Desktop/tablet: interactive map. Mobile: plain list below — both
          link to the same /states/[slug] routes so every state page stays
          reachable regardless of device. */}
      <div className="hidden md:block">
        <ElectionMapExplorer states={states} />
      </div>

      <div className="md:hidden">
        <StateList states={states} />
      </div>
    </div>
  )
}
