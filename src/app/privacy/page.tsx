import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How this site handles data and privacy.',
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-foreground">Privacy Policy</h1>
      {/* TODO: write a real privacy policy before launch — required for AdSense. */}
      <p className="max-w-md text-muted-foreground">Placeholder page — content coming soon.</p>
    </div>
  )
}
