'use client'

import type { Chamber } from '../api/elections'

interface ChamberToggleProps {
  chamber: Chamber
  onChange: (chamber: Chamber) => void
}

const OPTIONS: { value: Chamber; label: string }[] = [
  { value: 'senate', label: 'Senate' },
  { value: 'house', label: 'House' },
]

export function ChamberToggle({ chamber, onChange }: ChamberToggleProps) {
  return (
    <div className="inline-flex rounded-md border border-border p-1" role="group" aria-label="Chamber">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          aria-pressed={chamber === option.value}
          className={
            chamber === option.value
              ? 'rounded px-4 py-1.5 text-sm font-semibold bg-foreground text-background'
              : 'rounded px-4 py-1.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground'
          }
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
