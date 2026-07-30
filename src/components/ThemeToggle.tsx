'use client'

import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 1 0 20.354 15.354Z" />
    </svg>
  )
}

// Seeded with the deterministic default ('dark', this site's default theme
// per CLAUDE.md) so the server render and first client render match, then
// corrected in useEffect once `document` is available — the no-flash script
// in layout.tsx has already applied the real theme to <html> before this
// component ever mounts, this just syncs the icon to match. Same
// hydration-mismatch pattern as useCountdown.ts (see CLAUDE.md): never read
// `document`/`localStorage` in the initial useState call.
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    if (next === 'light') {
      document.documentElement.dataset.theme = 'light'
    } else {
      delete document.documentElement.dataset.theme
    }
    localStorage.setItem('theme', next)
    // UsElectionMap's SVG fill colors are set as literal hex (not CSS vars —
    // see the comment in UsElectionMap.tsx), so it can't just inherit the
    // theme from CSS like everything else; it listens for this event to
    // re-pick its palette.
    window.dispatchEvent(new Event('themechange'))
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={theme === 'light'}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-panel-soft text-muted-foreground transition hover:text-foreground"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
