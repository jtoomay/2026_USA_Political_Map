import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Example Page',
  description: 'A blank route to start a new page from, with the nav, layout, and metadata pattern already wired up.',
}

export default function ExamplePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-foreground">Example Page</h1>
      <p className="max-w-md text-muted-foreground">
        A clean route with nothing on it yet. The nav, layout, and metadata are already wired up
        &mdash; this is the part that&rsquo;s yours.
      </p>
      <code className="rounded-md border border-border bg-muted px-3 py-1.5 font-mono text-xs text-foreground">
        src/app/example/page.tsx
      </code>
    </div>
  )
}
