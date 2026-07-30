'use client'

// Error boundaries must be Client Components (Next.js requirement) — this is
// the one file in this route allowed to be one for a reason other than
// interactivity: React needs a client-side boundary to catch render errors.
export default function DataError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-lg border border-border p-8 text-center">
      <p className="font-mono text-sm text-foreground">Request failed.</p>
      <p className="text-sm text-muted-foreground">{error.message || 'Could not reach the launch feed.'}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-md bg-foreground px-5 py-2 text-sm font-semibold text-background"
      >
        Retry
      </button>
    </div>
  )
}
