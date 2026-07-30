import type { Metadata, Viewport } from 'next'
import { NebulaField } from '../components/NebulaField'
import { Nav } from '../components/Nav'
import { Starfield } from '../components/Starfield'
import { inter, jetbrainsMono, spaceGrotesk } from '../lib/fonts'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE_DEFAULT, SITE_URL } from '../lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE_NAME,
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#06060c',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <div className="relative min-h-screen">
          <Starfield />
          <NebulaField />

          <div className="relative z-10 flex min-h-screen flex-col">
            <Nav />

            <main className="flex flex-1 flex-col">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
