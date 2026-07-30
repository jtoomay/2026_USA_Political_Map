'use client'

import { useState } from 'react'
import type { Chamber, StateElectionData } from '../api/elections'
import { ChamberToggle } from './ChamberToggle'
import { SpecialElectionsToggle } from './SpecialElectionsToggle'
import { UsElectionMap } from './UsElectionMap'

interface ElectionMapExplorerProps {
  states: StateElectionData[]
}

const LEGEND_ITEMS = [
  { label: 'Republican', color: 'bg-party-r' },
  { label: 'Democrat', color: 'bg-party-d' },
  { label: 'Independent', color: 'bg-party-i' },
  { label: 'Evenly split delegation', color: 'bg-party-split' },
  { label: 'No 2026 election / no data', color: 'border border-border bg-muted' },
]

// The only client-side interactive piece of the home page: it owns the
// chamber + special-elections toggle state and hands it down to the map.
export function ElectionMapExplorer({ states }: ElectionMapExplorerProps) {
  const [chamber, setChamber] = useState<Chamber>('senate')
  const [showSpecialElections, setShowSpecialElections] = useState(true)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ChamberToggle chamber={chamber} onChange={setChamber} />
        {chamber === 'senate' ? (
          <SpecialElectionsToggle checked={showSpecialElections} onChange={setShowSpecialElections} />
        ) : null}
      </div>

      <UsElectionMap states={states} chamber={chamber} showSpecialElections={showSpecialElections} />

      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
        {LEGEND_ITEMS.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
            {item.label}
          </li>
        ))}
        {chamber === 'senate' && showSpecialElections ? (
          <li className="flex items-center gap-1.5">
            <span aria-hidden="true" className="font-mono text-sm leading-none text-foreground">
              *
            </span>
            Special election
          </li>
        ) : null}
      </ul>
    </div>
  )
}
