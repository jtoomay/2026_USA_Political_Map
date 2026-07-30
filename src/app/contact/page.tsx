import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch about this site.',
}

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-foreground">Contact</h1>
      {/* TODO: add a real contact method (form or email) before launch. */}
      <p className="max-w-md text-muted-foreground">Placeholder page — content coming soon.</p>
    </div>
  )
}
