'use client'

import type { Launch } from '../api/launches'
import { useCountdown } from '../hooks/useCountdown'

const STATUS_STYLES: Record<string, string> = {
  Go: 'bg-green-50 text-green-700 border-green-200',
  TBD: 'bg-amber-50 text-amber-700 border-amber-200',
  Success: 'bg-green-50 text-green-700 border-green-200',
  Hold: 'bg-muted text-muted-foreground border-border',
  Failure: 'bg-red-50 text-red-700 border-red-200',
}

function statusStyle(abbrev: string): string {
  return STATUS_STYLES[abbrev] ?? 'bg-muted text-muted-foreground border-border'
}

export function LaunchCard({ launch }: { launch: Launch }) {
  const countdown = useCountdown(launch.net)

  return (
    <li className="flex flex-col gap-4 rounded-lg border border-border p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">{launch.lsp_name}</p>
          <h3 className="font-display mt-1 text-lg leading-tight font-semibold text-foreground">
            {launch.mission ?? launch.name}
          </h3>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium tracking-wide uppercase ${statusStyle(launch.status.abbrev)}`}
        >
          {launch.status.abbrev}
        </span>
      </div>

      <p className="text-sm text-muted-foreground">{launch.location}</p>

      <div className="mt-auto rounded-md border border-border bg-muted px-3 py-2 font-mono text-sm text-foreground">
        {countdown}
      </div>
    </li>
  )
}
