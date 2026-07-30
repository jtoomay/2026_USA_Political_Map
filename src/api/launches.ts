const LAUNCH_LIBRARY_URL = 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=6&mode=list'

export interface Launch {
  id: string
  name: string
  status: {
    name: string
    abbrev: string
  }
  net: string
  lsp_name: string
  mission: string | null
  location: string
}

interface LaunchLibraryResponse {
  results: Launch[]
}

// Runs on the server (this file has no browser APIs), so the fetch happens
// before the page ever reaches the client — the launch list is present in
// the initial HTML, not stitched in after a client-side request.
// `next.revalidate` is Next's fetch cache: a request within the window reuses
// the cached response instead of hitting the upstream API again.
export async function fetchUpcomingLaunches(): Promise<Launch[]> {
  const response = await fetch(LAUNCH_LIBRARY_URL, {
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    throw new Error(`Launch Library request failed: ${response.status}`)
  }

  const data: LaunchLibraryResponse = await response.json()
  return data.results
}
