import Link from 'next/link'
import type { StateElectionData } from '../api/elections'

interface StateListProps {
  states: StateElectionData[]
}

// Server-rendered on purpose (no 'use client'): this is the mobile fallback
// for the interactive map, and its links need to be present in the raw HTML
// so state pages stay crawlable/indexable even when the map itself (which
// needs client JS) is hidden. It intentionally ignores the chamber/special-
// election toggle state, which lives in a client component — see the file
// header comment in ElectionMapExplorer.tsx.
export function StateList({ states }: StateListProps) {
  const sorted = [...states].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-muted-foreground">Tap a state to view its 2026 race details.</p>
      <ul className="divide-y divide-border rounded-lg border border-border">
        {sorted.map((state) => (
          <li key={state.slug}>
            <Link
              href={`/states/${state.slug}`}
              className="flex items-center justify-between gap-3 px-4 py-3 text-sm text-foreground transition hover:bg-muted"
            >
              <span>{state.name}</span>
              <span aria-hidden="true" className="text-muted-foreground">
                &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
