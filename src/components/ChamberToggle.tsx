'use client'

import type { Chamber } from '../api/elections'

interface ChamberToggleProps {
  chamber: Chamber
  onChange: (chamber: Chamber) => void
}

const OPTIONS: { value: Chamber; label: string }[] = [
  { value: 'senate', label: 'Senate' },
  { value: 'house', label: 'House' },
  { value: 'governor', label: 'Governor' },
]

export function ChamberToggle({ chamber, onChange }: ChamberToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-border bg-panel-soft p-1" role="group" aria-label="Chamber">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          aria-pressed={chamber === option.value}
          className={
            chamber === option.value
              ? 'rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground'
              : 'rounded-full px-4 py-1.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground'
          }
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
