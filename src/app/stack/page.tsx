import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tech Stack',
  description: 'Everything this Next.js template ships with, end to end — already installed and configured.',
}

const SYSTEMS = [
  { name: 'Next.js', role: 'Framework — App Router, SSR & static rendering' },
  { name: 'React 19', role: 'UI runtime' },
  { name: 'TypeScript', role: 'Type safety' },
  { name: 'Tailwind CSS 4', role: 'Styling system' },
  { name: 'next/font', role: 'Self-hosted, zero-CLS fonts' },
  { name: 'next/image', role: 'Optimized, responsive images' },
  { name: 'Metadata API + JSON-LD', role: 'SEO — titles, OG tags, structured data' },
  { name: 'Oxlint', role: 'Linting' },
]

export default function StackPage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-6 py-16">
      <div className="text-center">
        <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs tracking-wide text-comet">
          <span aria-hidden="true" className="status-dot h-1.5 w-1.5 rounded-full bg-comet" />
          EXAMPLE &middot; WHAT&rsquo;S INCLUDED
        </div>
        <h1 className="font-display text-glow-nebula mt-4 text-5xl font-bold text-starlight">Tech Stack</h1>
        <p className="mx-auto mt-3 max-w-md text-dust">
          Everything this template ships with, end to end &mdash; already installed and configured.
        </p>
      </div>

      <ul className="glass-panel divide-y divide-white/10 rounded-2xl">
        {SYSTEMS.map((system) => (
          <li key={system.name} className="flex items-center justify-between gap-4 px-5 py-4">
            <div>
              <p className="font-display font-medium text-starlight">{system.name}</p>
              <p className="text-sm text-dust">{system.role}</p>
            </div>
            <span className="flex items-center gap-2 font-mono text-xs tracking-wide text-comet">
              <span aria-hidden="true" className="status-dot h-1.5 w-1.5 rounded-full bg-comet" />
              ONLINE
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
