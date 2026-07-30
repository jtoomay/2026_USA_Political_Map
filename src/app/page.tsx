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
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-12">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">2026 Midterm Elections</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          An interactive map of the 2026 U.S. Senate and House races, colored by the party
          currently controlling each seat.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">Last updated {formatLastUpdated(lastUpdated)}</p>
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
