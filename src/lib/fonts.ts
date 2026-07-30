import { Fraunces, JetBrains_Mono, Public_Sans } from 'next/font/google'

// next/font self-hosts these at build time (no request to Google at runtime),
// inlines fallback-matched metrics, and sets `font-display: swap` — this is
// what keeps CLS near zero without a separate @fontsource dependency.
//
// Fraunces is an editorial serif with real gravitas for headlines — the
// "newspaper of record" register this site wants for election coverage.
// Public Sans is USWDS's own typeface (the U.S. government's digital design
// system) — using it for a U.S. elections site is a deliberate, subject-
// grounded choice, not an arbitrary pick.
export const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-public-sans',
  display: 'swap',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})
