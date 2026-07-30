import type { Metadata, Viewport } from 'next'
import { FloatingControls } from '../components/FloatingControls'
import { Footer } from '../components/Footer'
import { fraunces, jetbrainsMono, publicSans } from '../lib/fonts'
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
  // 'dark light' (not a bare 'dark') tells the browser this page supports
  // both and to defer to the page's own CSS `color-scheme` — which the
  // `html[data-theme='light']` rule in globals.css sets dynamically. A bare
  // 'dark' would fight the theme toggle: form controls/scrollbars would stay
  // dark-styled even after switching to light.
  colorScheme: 'dark light',
  themeColor: '#0a0d14',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
}

// Runs synchronously, before first paint, so the stored theme/width
// preference applies with no flash of the wrong theme (the classic
// next-themes pattern) — React doesn't control these attributes, hence
// `suppressHydrationWarning` on <html> below. Dark and standard-width are
// the defaults (see CLAUDE.md: this site is dark-first by design), so the
// script only ever needs to *add* the light/wide overrides, never remove
// them. The width preference is also gated on viewport width here (not just
// in CSS) so a stored "wide" preference from a desktop session never causes
// a flash of wide layout before the CSS media query has a chance to
// suppress it on a phone.
const noFlashScript = `
(function () {
  try {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.dataset.theme = 'light';
    }
    if (localStorage.getItem('width') === 'wide' && window.matchMedia('(min-width: 48rem)').matches) {
      document.documentElement.dataset.width = 'wide';
    }
  } catch (e) {}
})();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${publicSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <FloatingControls />

          <main className="flex flex-1 flex-col">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
