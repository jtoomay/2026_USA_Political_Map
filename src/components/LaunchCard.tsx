'use client'

import type { Launch } from '../api/launches'
import { useCountdown } from '../hooks/useCountdown'

const STATUS_STYLES: Record<string, string> = {
  Go: 'bg-comet/15 text-comet border-comet/30',
  TBD: 'bg-flare/15 text-flare border-flare/30',
  Success: 'bg-comet/15 text-comet border-comet/30',
  Hold: 'bg-dust/15 text-dust border-dust/30',
  Failure: 'bg-red-500/15 text-red-400 border-red-500/30',
}

function statusStyle(abbrev: string): string {
  return STATUS_STYLES[abbrev] ?? 'bg-dust/15 text-dust border-dust/30'
}

export function LaunchCard({ launch }: { launch: Launch }) {
  const countdown = useCountdown(launch.net)

  return (
    <li className="glass-panel flex flex-col gap-4 rounded-2xl p-5 transition hover:border-nebula/30">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[11px] tracking-wide text-dust uppercase">{launch.lsp_name}</p>
          <h3 className="font-display mt-1 text-lg leading-tight font-semibold text-starlight">
            {launch.mission ?? launch.name}
          </h3>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium tracking-wide uppercase ${statusStyle(launch.status.abbrev)}`}
        >
          {launch.status.abbrev}
        </span>
      </div>

      <p className="text-sm text-dust">{launch.location}</p>

      <div className="mt-auto rounded-lg border border-white/10 bg-black/20 px-3 py-2 font-mono text-sm text-comet">
        {countdown}
      </div>
    </li>
  )
}
