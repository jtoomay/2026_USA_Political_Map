'use client'

import { useEffect, useState } from 'react'

function formatCountdown(msRemaining: number): string {
  if (msRemaining <= 0) return 'T-0 · LIFTOFF'

  const totalSeconds = Math.floor(msRemaining / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const pad = (n: number) => n.toString().padStart(2, '0')

  if (days > 0) {
    return `T-minus ${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
  }
  return `T-minus ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

// Starts `null` rather than computing from `Date.now()` on first render: this
// component is server-rendered, and the server's clock reading will never
// exactly match the client's clock reading at hydration time, which is a
// guaranteed hydration mismatch for a `Date.now()`-derived string. Computing
// the real value only in `useEffect` (client-only) sidesteps that entirely.
export function useCountdown(targetIso: string): string {
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    const target = new Date(targetIso).getTime()
    const tick = () => setLabel(formatCountdown(target - Date.now()))

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [targetIso])

  return label ?? ' '
}
