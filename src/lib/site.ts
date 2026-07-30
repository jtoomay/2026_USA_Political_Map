// Central SEO constants. Every page's metadata, the root JSON-LD, sitemap.ts,
// and robots.ts all read from here — change the domain/name once, everywhere
// updates. Replace SITE_URL with the real production domain before shipping;
// an unset/placeholder metadataBase silently breaks canonical URLs and OG images.
export const SITE_NAME = 'Site'
export const SITE_TITLE_DEFAULT = 'Site — built with Next.js'
export const SITE_DESCRIPTION =
  'A Next.js starter tuned for SEO from the ground up: server-rendered content, full metadata, structured data, and a sitemap.'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
