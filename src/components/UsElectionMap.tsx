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

// Matches the --color-muted / --color-border tokens in globals.css. Kept as
// literal hex here (rather than var(--color-muted)) because the underlying
// SVG fill/stroke attributes are set before the CSS custom properties are
// guaranteed to have resolved on first paint.
const INERT_FILL = '#e5e5e5'
const INERT_STROKE = '#ffffff'
const ACTIVE_STROKE = '#ffffff'

const PARTY_FILL: Record<Party | 'Split', string> = {
  D: '#1d4ed8',
  R: '#b91c1c',
  I: '#b45309',
  Split: '#6d28d9',
}

function StateTooltipContent({ state, chamber }: { state: StateElectionData; chamber: Chamber }) {
  if (chamber === 'senate' && state.senate) {
    const holder = state.senate.incumbent
      ? `${state.senate.incumbent.name} (${state.senate.incumbent.party})`
      : `Open seat — currently held by ${state.senate.currentParty}`

    return (
      <div className="space-y-1">
        <p className="font-display text-sm font-semibold text-foreground">{state.name}</p>
        <p className="text-xs text-muted-foreground">
          Senate{state.senate.electionType === 'special' ? ' · Special election' : ''}
        </p>
        <p className="text-xs text-foreground">{holder}</p>
        <p className="text-xs text-muted-foreground">{state.senate.status}</p>
      </div>
    )
  }

  const { house } = state
  const majority = house.majorityParty === 'Split' ? 'Evenly split' : `${house.majorityParty} majority`

  return (
    <div className="space-y-1">
      <p className="font-display text-sm font-semibold text-foreground">{state.name}</p>
      <p className="text-xs text-muted-foreground">House delegation</p>
      <p className="text-xs text-foreground">
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
    <div className="rounded-lg border border-border p-4">
      {/* States outside the mock dataset (most of the 50) fall through to
          this inert default — production data needs to cover all 50 so House
          mode can make every state genuinely active, per the spec. */}
      <USAMap
        defaultState={{ fill: INERT_FILL, stroke: INERT_STROKE, tooltip: { enabled: false }, label: { enabled: false } }}
        customStates={customStates}
        hiddenStates={['DC']}
        mapSettings={{ width: '100%', height: 'fit-content' }}
      />
    </div>
  )
}
