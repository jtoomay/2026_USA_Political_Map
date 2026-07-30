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
    <div className="flex items-center justify-center gap-3 font-mono text-xs text-muted-foreground">
      {isPending ? <span>refreshing&hellip;</span> : null}
      <button
        type="button"
        onClick={() => startTransition(() => router.refresh())}
        disabled={isPending}
        className="rounded-md border border-border px-3 py-1.5 text-foreground transition hover:bg-muted disabled:opacity-50"
      >
        Refetch manifest
      </button>
    </div>
  )
}
