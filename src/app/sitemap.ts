import type { MetadataRoute } from 'next'
import { SITE_URL } from '../lib/site'

// Served at /sitemap.xml automatically. Add a new page here whenever a new
// public route is added — this is not derived from the routes automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/example', '/data', '/stack']

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}
