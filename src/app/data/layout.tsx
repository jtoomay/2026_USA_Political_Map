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
        <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs tracking-wide text-comet">
          <span aria-hidden="true" className="status-dot h-1.5 w-1.5 rounded-full bg-comet" />
          EXAMPLE &middot; SERVER-RENDERED DATA
        </div>
        <h1 className="font-display text-glow-nebula mt-4 text-5xl font-bold text-starlight">Data Fetching</h1>
        <p className="mx-auto mt-3 max-w-xl text-dust">
          A working example of data fetching in this template: real upcoming launches from the{' '}
          <a href="https://thespacedevs.com" target="_blank" rel="noreferrer" className="text-starlight underline underline-offset-4">
            Launch Library API
          </a>
          , fetched on the server so the list is already in the HTML on first load &mdash; no
          client-side spinner required. Loading and error states come from Next&rsquo;s{' '}
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-starlight">
            loading.tsx
          </code>{' '}
          and{' '}
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-starlight">
            error.tsx
          </code>{' '}
          file conventions. Copy the pattern in{' '}
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-starlight">
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
