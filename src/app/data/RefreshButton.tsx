'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

// The only client-side piece of this route. `router.refresh()` re-runs the
// Server Component on the server and streams in new markup — no client cache
// library needed, and the page content stays server-rendered for SEO.
export function RefreshButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <div className="flex items-center justify-center gap-3 font-mono text-xs text-dust">
      {isPending ? <span className="text-comet">refreshing&hellip;</span> : null}
      <button
        type="button"
        onClick={() => startTransition(() => router.refresh())}
        disabled={isPending}
        className="glass-panel rounded-full px-3 py-1.5 text-starlight transition hover:border-nebula/40 disabled:opacity-50"
      >
        Refetch manifest
      </button>
    </div>
  )
}
