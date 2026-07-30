import type { Candidate } from '../api/elections'

// Server-rendered (no 'use client'): a static meter, nothing interactive.
// Fill color follows the candidate's party (this app's categorical identity
// channel — same tokens as the map/legend), track is the same ramp at low
// opacity so state reads across the whole bar per the dataviz meter spec.
const TRACK_CLASS: Record<Candidate['party'], string> = {
  D: 'bg-party-d/15',
  R: 'bg-party-r/15',
  I: 'bg-party-i/15',
}

const FILL_CLASS: Record<Candidate['party'], string> = {
  D: 'bg-party-d',
  R: 'bg-party-r',
  I: 'bg-party-i',
}

const TEXT_CLASS: Record<Candidate['party'], string> = {
  D: 'text-party-d',
  R: 'text-party-r',
  I: 'text-party-i',
}

interface WinProbabilityMeterProps {
  candidate: Candidate
}

export function WinProbabilityMeter({ candidate }: WinProbabilityMeterProps) {
  const { name, party, incumbent, winProbability } = candidate

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="text-foreground">
          {name} <span className={`font-mono text-xs ${TEXT_CLASS[party]}`}>({party})</span>
          {incumbent ? <span className="ml-1.5 text-xs text-muted-foreground">Incumbent</span> : null}
        </span>
        <span className={`font-mono text-xs font-semibold tabular-nums ${TEXT_CLASS[party]}`}>
          {winProbability}%
        </span>
      </div>
      <div
        role="meter"
        aria-label={`${name} win probability`}
        aria-valuenow={winProbability}
        aria-valuemin={0}
        aria-valuemax={100}
        className={`h-2 w-full overflow-hidden rounded-full ${TRACK_CLASS[party]}`}
      >
        <div className={`h-full rounded-full ${FILL_CLASS[party]}`} style={{ width: `${winProbability}%` }} />
      </div>
    </div>
  )
}
