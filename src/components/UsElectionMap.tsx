'use client'

import type { ComponentProps } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { USAMap } from '@mirawision/usa-map-react'
import type { USAStateAbbreviation } from '@mirawision/usa-map-react'
import { getCandidatePollingSummary, getMostRecentPollDate, getPredictedWinner } from '../api/elections'
import type { Chamber, GovernorRace, Party, SenateRace, StateElectionData } from '../api/elections'
import { formatDate } from '../lib/format'

// Library choice: react-simple-maps only declares React support up to 18.x
// (last published 2023) and would need a separate topojson dataset, forcing
// a peer-dep override against this app's React 19. @mirawision/usa-map-react
// ships its own state paths, declares React 19 support natively, and exposes
// per-state fill/onClick/tooltip/label hooks directly through one prop
// (`customStates`) — enough surface for this feature with no extra
// geo/topojson dependency. This file is the ONLY place that imports it —
// swap map libraries later by rewriting this component and keeping the
// `UsElectionMapProps` contract below the same.

type UsaMapCustomStates = ComponentProps<typeof USAMap>['customStates']
type StateConfig = NonNullable<NonNullable<UsaMapCustomStates>[USAStateAbbreviation]>

interface UsElectionMapProps {
  states: StateElectionData[]
  chamber: Chamber
  showSpecialElections: boolean
}

interface MapPalette {
  inertFill: string
  inertStroke: string
  activeStroke: string
  party: Record<Party | 'Split', string>
}

// Two full hex palettes, not CSS vars: the underlying SVG fill/stroke
// attributes are set before the browser is guaranteed to have resolved CSS
// custom properties on first paint, so this component picks its own theme
// copy in JS (via `useTheme` below) rather than writing `var(--color-*)`
// into the fill/stroke props. Values match --color-panel-soft/--color-
// background/--color-party-* (dark) and their `[data-theme='light']`
// overrides in globals.css — keep the two in sync if either changes.
const DARK_PALETTE: MapPalette = {
  inertFill: '#1b2233',
  inertStroke: '#0a0d14',
  activeStroke: '#0a0d14',
  party: { D: '#4c7ef3', R: '#e3454f', I: '#e3a73b', Split: '#9b7bf0' },
}

const LIGHT_PALETTE: MapPalette = {
  inertFill: '#e5e8f0',
  inertStroke: '#c9cede',
  activeStroke: '#ffffff',
  party: { D: '#2f5fd6', R: '#c8323b', I: '#96700f', Split: '#7c1fb0' },
}

// Seeded with the deterministic default ('dark') so server and first client
// render match — same hydration-safe pattern as useCountdown.ts (see
// CLAUDE.md). Corrected in useEffect once `document` is available, and kept
// in sync with the ThemeToggle button (which lives in the Nav, outside this
// component's tree) via a 'themechange' window event since there's no
// shared theme Context in this app — see ThemeToggle.tsx.
function useTheme(): 'dark' | 'light' {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const read = () => setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
    read()
    window.addEventListener('themechange', read)
    return () => window.removeEventListener('themechange', read)
  }, [])

  return theme
}

// The library's tooltip chrome is a fixed, hardcoded light card (see its
// bundled styles.css) regardless of our page theme, so this content uses
// explicit dark-on-light colors rather than the --foreground/--muted-
// foreground tokens (which are light-on-dark in this theme and would be
// unreadable here).
//
// Shared by the Senate and Governor branches below — both are single-winner
// statewide races with the same shape (see SenateRace/GovernorRace in
// elections.ts), so this renders either from one component rather than
// duplicating the candidate-list markup twice.
function StatewideRaceTooltip({
  stateName,
  raceLabel,
  race,
}: {
  stateName: string
  raceLabel: string
  race: SenateRace | GovernorRace
}) {
  const pollingSummary = getCandidatePollingSummary(race)
  const mostRecentPollDate = getMostRecentPollDate(race.polls)

  return (
    <div className="space-y-1.5">
      <p className="font-display text-sm font-semibold text-neutral-900">{stateName}</p>
      <p className="text-xs text-neutral-500">
        {raceLabel}
        {race.electionType === 'special' ? ' · Special election' : ''}
      </p>
      <ul className="space-y-0.5">
        {pollingSummary.map(({ candidate, pollingAverage }) => (
          <li key={candidate.name} className="flex items-center justify-between gap-3 text-xs text-neutral-800">
            <span>
              {candidate.name} ({candidate.party})
              {candidate.incumbent ? ' · Inc.' : ''}
            </span>
            <span className="font-semibold text-neutral-900">
              {pollingAverage !== null ? `${Math.round(pollingAverage)}%` : `Est. ${candidate.winProbability}%`}
            </span>
          </li>
        ))}
      </ul>
      {/* Real polling when curated for this race, otherwise fall back to the
          illustrative win-probability estimate — the two numbers are never
          shown unlabeled/conflated, per the elections.ts doc comment. */}
      <p className="text-xs text-neutral-500">
        {mostRecentPollDate
          ? `Polling avg · ${race.polls.length} poll${race.polls.length === 1 ? '' : 's'}, most recent ${formatDate(mostRecentPollDate)}`
          : 'No recent public polling — showing est. win probability'}
      </p>
      <p className="text-xs text-neutral-500">{race.status}</p>
    </div>
  )
}

function StateTooltipContent({ state, chamber }: { state: StateElectionData; chamber: Chamber }) {
  if (chamber === 'senate' && state.senate) {
    return <StatewideRaceTooltip stateName={state.name} raceLabel="Senate" race={state.senate} />
  }

  if (chamber === 'governor' && state.governor) {
    return <StatewideRaceTooltip stateName={state.name} raceLabel="Governor" race={state.governor} />
  }

  const { house } = state
  const majority = house.majorityParty === 'Split' ? 'Evenly split' : `${house.majorityParty} majority`

  return (
    <div className="space-y-1">
      <p className="font-display text-sm font-semibold text-neutral-900">{state.name}</p>
      <p className="text-xs text-neutral-500">House delegation</p>
      <p className="text-xs text-neutral-800">
        {majority} ({house.democratSeats}D–{house.republicanSeats}R
        {house.independentSeats > 0 ? `–${house.independentSeats}I` : ''} of {house.totalSeats})
      </p>
    </div>
  )
}

function buildStateConfig(
  state: StateElectionData,
  chamber: Chamber,
  showSpecialElections: boolean,
  palette: MapPalette,
  isHovered: boolean,
  navigate: (slug: string) => void,
  setHoveredState: (postalCode: USAStateAbbreviation | null) => void,
): StateConfig {
  const isActive =
    chamber === 'senate' ? state.senate !== null : chamber === 'governor' ? state.governor !== null : true

  if (!isActive) {
    return {
      fill: palette.inertFill,
      stroke: palette.inertStroke,
      tooltip: { enabled: false },
      label: { enabled: false },
    }
  }

  // Senate/Governor only — House mode has no single-race prediction to show
  // (HouseDelegation is a whole-delegation snapshot, not a per-district
  // race), so `race` stays null there and the fill never changes on hover.
  const race = chamber === 'senate' ? state.senate : chamber === 'governor' ? state.governor : null
  let fill =
    chamber === 'senate'
      ? palette.party[state.senate!.currentParty]
      : chamber === 'governor'
        ? palette.party[state.governor!.currentParty]
        : palette.party[state.house.majorityParty]

  // On hover, preview a projected flip: if the race's projected winner (real
  // polling average when the race has any, else the illustrative
  // winProbability estimate — see getPredictedWinner) belongs to a
  // different party than the one currently holding the seat, swap to that
  // party's color. Races not expected to flip keep their current-party fill
  // unchanged on hover.
  if (isHovered && race) {
    const predictedWinner = getPredictedWinner(race)
    if (predictedWinner.party !== race.currentParty) {
      fill = palette.party[predictedWinner.party]
    }
  }

  // Only Senate specials are modeled in this dataset (see the MOCK_STATES
  // header comment) — this stays senate-only rather than also checking
  // `state.governor?.electionType`, which would never be 'special' anyway.
  const isSpecial = chamber === 'senate' && state.senate?.electionType === 'special'

  return {
    fill,
    stroke: palette.activeStroke,
    onClick: () => navigate(state.slug),
    onHover: () => setHoveredState(state.postalCode),
    onLeave: () => setHoveredState(null),
    tooltip: {
      enabled: true,
      render: () => <StateTooltipContent state={state} chamber={chamber} />,
    },
    // TODO: refine the special-election indicator — an asterisk label is the
    // simplest option the library's SVG-text label slot supports; a small
    // ring/badge would need a custom marker overlay this library doesn't
    // expose.
    label: showSpecialElections && isSpecial ? { enabled: true, render: () => '*' } : { enabled: false },
  }
}

export function UsElectionMap({ states, chamber, showSpecialElections }: UsElectionMapProps) {
  const router = useRouter()
  const theme = useTheme()
  const palette = theme === 'light' ? LIGHT_PALETTE : DARK_PALETTE
  const [hoveredState, setHoveredState] = useState<USAStateAbbreviation | null>(null)

  const customStates = useMemo(() => {
    const config: Partial<Record<USAStateAbbreviation, StateConfig>> = {}
    for (const state of states) {
      config[state.postalCode] = buildStateConfig(
        state,
        chamber,
        showSpecialElections,
        palette,
        hoveredState === state.postalCode,
        (slug) => router.push(`/states/${slug}`),
        setHoveredState,
      )
    }
    return config
  }, [states, chamber, showSpecialElections, palette, hoveredState, router])

  return (
    <div className="rounded-xl border border-border bg-panel p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-6">
      {/* States outside the mock dataset (most of the 50) fall through to
          this inert default — production data needs to cover all 50 so House
          mode can make every state genuinely active, per the spec. The
          `election-map` class drives the hover-lift rule in globals.css. */}
      <USAMap
        className="election-map"
        defaultState={{
          fill: palette.inertFill,
          stroke: palette.inertStroke,
          tooltip: { enabled: false },
          label: { enabled: false },
        }}
        customStates={customStates}
        hiddenStates={['DC']}
        mapSettings={{ width: '100%', height: 'fit-content' }}
      />
    </div>
  )
}
