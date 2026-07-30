import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Example Page',
  description: 'A blank route to start a new page from, with the nav, layout, and metadata pattern already wired up.',
}

export default function ExamplePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs tracking-wide text-comet">
        <span aria-hidden="true" className="status-dot h-1.5 w-1.5 rounded-full bg-comet" />
        EXAMPLE &middot; BLANK ROUTE
      </div>
      <h1 className="font-display text-glow-nebula text-5xl font-bold text-starlight">Example Page</h1>
      <p className="max-w-md text-dust">
        A clean route with nothing on it yet. The nav, layout, and metadata are already wired up
        &mdash; this is the part that&rsquo;s yours.
      </p>
      <code className="glass-panel rounded-full px-4 py-1.5 font-mono text-xs text-starlight">
        src/app/example/page.tsx
      </code>
    </div>
  )
}
