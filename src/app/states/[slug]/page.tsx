import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllStates, getDataSnapshotDate, getStateData } from '@/api/elections'
import type { GovernorRace, SenateRace } from '@/api/elections'
import { HeadlinesList } from '@/components/HeadlinesList'
import { PollingHistoryTable } from '@/components/PollingHistoryTable'
import { RaceRatingsTable } from '@/components/RaceRatingsTable'
import { WinProbabilityMeter } from '@/components/WinProbabilityMeter'
import { formatDate } from '@/lib/format'

export function generateStaticParams() {
  return getAllStates().map((state) => ({ slug: state.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const state = getStateData(slug)

  if (!state) {
    return { title: 'State not found' }
  }

  if (state.senate && state.governor) {
    const senateMatchup = state.senate.candidates.map((c) => `${c.name} (${c.party})`).join(' vs. ')
    return {
      title: `${state.name} 2026 Senate & Governor: Candidates & Odds`,
      description: `Who's running in ${state.name} in 2026? Senate: ${senateMatchup}. Nonpartisan win odds for Senate and governor, plus forecaster ratings.`,
    }
  }

  if (state.senate) {
    const matchup = state.senate.candidates.map((c) => `${c.name} (${c.party})`).join(' vs. ')
    return {
      title: `${state.name} 2026 Senate Race: Candidates & Odds`,
      description: `Who's running for U.S. Senate in ${state.name} in 2026? ${matchup} — nonpartisan win odds and forecaster ratings.`,
    }
  }

  if (state.governor) {
    const matchup = state.governor.candidates.map((c) => `${c.name} (${c.party})`).join(' vs. ')
    return {
      title: `${state.name} 2026 Governor's Race: Candidates & Odds`,
      description: `Who's running for governor in ${state.name} in 2026? ${matchup} — nonpartisan win odds and forecaster ratings.`,
    }
  }

  return {
    title: `${state.name} 2026 House Delegation — Party Breakdown`,
    description: `${state.name}'s U.S. House delegation for 2026: nonpartisan party breakdown and seat totals. No Senate or governor race in ${state.name} this cycle.`,
  }
}

// Senate and Governor races are both single-winner, statewide races with the
// same shape (see SenateRace/GovernorRace in elections.ts) — this renders
// either from one component rather than duplicating the badge/candidates/
// ratings markup for each.
function StatewideRaceSection({
  title,
  race,
  noElectionMessage,
}: {
  title: string
  race: SenateRace | GovernorRace | null
  noElectionMessage: string
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-display text-2xl font-semibold text-foreground">{title}</h2>

      {race ? (
        <>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={
                race.electionType === 'special'
                  ? 'rounded-full border border-party-i/30 bg-party-i/10 px-3 py-1 text-xs font-semibold text-party-i'
                  : 'rounded-full border border-border bg-panel-soft px-3 py-1 text-xs font-semibold text-muted-foreground'
              }
            >
              {race.electionType === 'special' ? 'Special election' : 'Regular election'}
            </span>
            <span className="text-sm text-foreground">
              {race.incumbent
                ? `${race.incumbent.name} (${race.incumbent.party})`
                : `Open seat — currently held by ${race.currentParty}`}
            </span>
          </div>

          <p className="text-sm text-muted-foreground">{race.status}</p>

          <div className="flex flex-col gap-4 rounded-xl border border-border bg-panel p-5">
            <h3 className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
              2026 candidates &amp; win probability
            </h3>
            <div className="flex flex-col gap-4">
              {[...race.candidates]
                .sort((a, b) => b.winProbability - a.winProbability)
                .map((candidate) => (
                  <WinProbabilityMeter key={candidate.name} candidate={candidate} />
                ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Win probability is a simplified estimate derived from the forecaster ratings below — not a
              prediction from any single pollster, model, or party.
            </p>
          </div>

          <RaceRatingsTable ratings={race.ratings} />

          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">Recent polling</h3>
            <PollingHistoryTable race={race} />
          </div>
        </>
      ) : (
        <p className="rounded-xl border border-border bg-panel px-5 py-4 text-sm text-muted-foreground">
          {noElectionMessage}
        </p>
      )}
    </section>
  )
}

export default async function StatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const state = getStateData(slug)

  if (!state) {
    notFound()
  }

  const { senate, house, governor, headlines } = state

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
          Data compiled as of {formatDate(getDataSnapshotDate())}
        </p>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-2xl font-semibold text-foreground">Headlines</h2>
        <HeadlinesList headlines={headlines} />
      </section>

      <StatewideRaceSection
        title="U.S. Senate"
        race={senate}
        noElectionMessage={`No U.S. Senate election is scheduled in ${state.name} for 2026.`}
      />

      <StatewideRaceSection
        title="Governor"
        race={governor}
        noElectionMessage={`No gubernatorial election is scheduled in ${state.name} for 2026.`}
      />

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
