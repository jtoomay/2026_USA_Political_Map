import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllStates, getLastUpdated, getStateData } from '@/api/elections'
import { RaceRatingsTable } from '@/components/RaceRatingsTable'

export function generateStaticParams() {
  return getAllStates().map((state) => ({ slug: state.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const state = getStateData(slug)

  if (!state) {
    return { title: 'State not found' }
  }

  return {
    title: `${state.name} — 2026 Midterms`,
    description: `2026 U.S. Senate and House race information for ${state.name}: current officeholders, election type, and side-by-side forecaster ratings.`,
  }
}

function formatLastUpdated(iso: string): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(iso))
}

export default async function StatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const state = getStateData(slug)

  if (!state) {
    notFound()
  }

  const { senate, house } = state

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-6 py-16 sm:py-20">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-accent"
        >
          <span aria-hidden="true">&larr;</span> Back to map
        </Link>
        <h1 className="font-display mt-5 text-5xl font-semibold text-foreground sm:text-6xl">{state.name}</h1>
        <p className="mt-3 flex items-center gap-2 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
          <span aria-hidden="true" className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
          Updated {formatLastUpdated(getLastUpdated())}
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl font-semibold text-foreground">U.S. Senate</h2>

        {senate ? (
          <>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={
                  senate.electionType === 'special'
                    ? 'rounded-full border border-party-i/30 bg-party-i/10 px-3 py-1 text-xs font-semibold text-party-i'
                    : 'rounded-full border border-border bg-panel-soft px-3 py-1 text-xs font-semibold text-muted-foreground'
                }
              >
                {senate.electionType === 'special' ? 'Special election' : 'Regular election'}
              </span>
              <span className="text-sm text-foreground">
                {senate.incumbent
                  ? `${senate.incumbent.name} (${senate.incumbent.party})`
                  : `Open seat — currently held by ${senate.currentParty}`}
              </span>
            </div>

            <p className="text-sm text-muted-foreground">{senate.status}</p>

            <RaceRatingsTable ratings={senate.ratings} />
          </>
        ) : (
          <p className="rounded-xl border border-border bg-panel px-5 py-4 text-sm text-muted-foreground">
            No U.S. Senate election is scheduled in {state.name} for 2026.
          </p>
        )}
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl font-semibold text-foreground">U.S. House delegation</h2>
        {/* TODO: whole-delegation snapshot only, not a per-district breakdown
            — refine once real per-district data is available. */}
        <p className="rounded-xl border border-border bg-panel px-5 py-4 text-sm text-foreground">
          {house.majorityParty === 'Split' ? 'Evenly split' : `${house.majorityParty} majority`} —{' '}
          {house.democratSeats}D–{house.republicanSeats}R
          {house.independentSeats > 0 ? `–${house.independentSeats}I` : ''} of {house.totalSeats} seats
        </p>
      </section>
    </div>
  )
}
