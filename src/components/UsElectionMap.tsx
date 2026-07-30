'use client'

import type { ComponentProps } from 'react'
import { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { USAMap } from '@mirawision/usa-map-react'
import type { USAStateAbbreviation } from '@mirawision/usa-map-react'
import type { Chamber, Party, StateElectionData } from '../api/elections'

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

// Matches the --color-panel-soft / --color-background tokens in globals.css.
// Kept as literal hex here (rather than var(--color-*)) because the
// underlying SVG fill/stroke attributes are set before the CSS custom
// properties are guaranteed to have resolved on first paint.
const INERT_FILL = '#1b2233'
const INERT_STROKE = '#0a0d14'
const ACTIVE_STROKE = '#0a0d14'

// Matches --color-party-* in globals.css.
const PARTY_FILL: Record<Party | 'Split', string> = {
  D: '#4c7ef3',
  R: '#e3454f',
  I: '#e3a73b',
  Split: '#9b7bf0',
}

// The library's tooltip chrome is a fixed, hardcoded light card (see its
// bundled styles.css) regardless of our page theme, so this content uses
// explicit dark-on-light colors rather than the --foreground/--muted-
// foreground tokens (which are light-on-dark in this theme and would be
// unreadable here).
function StateTooltipContent({ state, chamber }: { state: StateElectionData; chamber: Chamber }) {
  if (chamber === 'senate' && state.senate) {
    const holder = state.senate.incumbent
      ? `${state.senate.incumbent.name} (${state.senate.incumbent.party})`
      : `Open seat — currently held by ${state.senate.currentParty}`

    return (
      <div className="space-y-1">
        <p className="font-display text-sm font-semibold text-neutral-900">{state.name}</p>
        <p className="text-xs text-neutral-500">
          Senate{state.senate.electionType === 'special' ? ' · Special election' : ''}
        </p>
        <p className="text-xs text-neutral-800">{holder}</p>
        <p className="text-xs text-neutral-500">{state.senate.status}</p>
      </div>
    )
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
  navigate: (slug: string) => void,
): StateConfig {
  const isActive = chamber === 'senate' ? state.senate !== null : true

  if (!isActive) {
    return {
      fill: INERT_FILL,
      stroke: INERT_STROKE,
      tooltip: { enabled: false },
      label: { enabled: false },
    }
  }

  const fill = chamber === 'senate' ? PARTY_FILL[state.senate!.currentParty] : PARTY_FILL[state.house.majorityParty]
  const isSpecial = chamber === 'senate' && state.senate?.electionType === 'special'

  return {
    fill,
    stroke: ACTIVE_STROKE,
    onClick: () => navigate(state.slug),
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

  const customStates = useMemo(() => {
    const config: Partial<Record<USAStateAbbreviation, StateConfig>> = {}
    for (const state of states) {
      config[state.postalCode] = buildStateConfig(state, chamber, showSpecialElections, (slug) =>
        router.push(`/states/${slug}`),
      )
    }
    return config
  }, [states, chamber, showSpecialElections, router])

  return (
    <div className="rounded-xl border border-border bg-panel p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-6">
      {/* States outside the mock dataset (most of the 50) fall through to
          this inert default — production data needs to cover all 50 so House
          mode can make every state genuinely active, per the spec. The
          `election-map` class drives the hover-lift rule in globals.css. */}
      <USAMap
        className="election-map"
        defaultState={{ fill: INERT_FILL, stroke: INERT_STROKE, tooltip: { enabled: false }, label: { enabled: false } }}
        customStates={customStates}
        hiddenStates={['DC']}
        mapSettings={{ width: '100%', height: 'fit-content' }}
      />
    </div>
  )
}
