'use client'

// Error boundaries must be Client Components (Next.js requirement) — this is
// the one file in this route allowed to be one for a reason other than
// interactivity: React needs a client-side boundary to catch render errors.
export default function DataError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="glass-panel mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl p-8 text-center">
      <p className="font-mono text-sm text-flare">Request failed.</p>
      <p className="text-sm text-dust">{error.message || 'Could not reach the launch feed.'}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full bg-gradient-to-r from-nebula to-comet px-5 py-2 text-sm font-semibold text-void"
      >
        Retry
      </button>
    </div>
  )
}
