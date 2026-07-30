import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About this site and where its 2026 midterm election data comes from.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-foreground">About</h1>
      {/* TODO: write real About content (data sources, methodology, team) before launch. */}
      <p className="max-w-md text-muted-foreground">Placeholder page — content coming soon.</p>
    </div>
  )
}
