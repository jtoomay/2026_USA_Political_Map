import { Inter, JetBrains_Mono } from 'next/font/google'

// next/font self-hosts these at build time (no request to Google at runtime),
// inlines fallback-matched metrics, and sets `font-display: swap` — this is
// what keeps CLS near zero without a separate @fontsource dependency.
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})
