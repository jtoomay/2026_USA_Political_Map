import type { Metadata } from 'next'
import { RefreshButton } from './RefreshButton'

export const metadata: Metadata = {
  title: 'Data Fetching',
  description:
    'A server-rendered data fetching example built on Next.js Server Components, with loading.tsx and error.tsx handling the loading and error states.',
}

export default function DataLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-foreground">Data Fetching</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          A working example of data fetching in this template: real upcoming launches from the{' '}
          <a href="https://thespacedevs.com" target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-4">
            Launch Library API
          </a>
          , fetched on the server so the list is already in the HTML on first load &mdash; no
          client-side spinner required. Loading and error states come from Next&rsquo;s{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            loading.tsx
          </code>{' '}
          and{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            error.tsx
          </code>{' '}
          file conventions. Copy the pattern in{' '}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            src/app/data/
          </code>{' '}
          for your own endpoints.
        </p>
      </div>

      <RefreshButton />

      {children}
    </div>
  )
}
