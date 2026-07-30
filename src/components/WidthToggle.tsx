'use client'

import { useEffect, useState } from 'react'

type Width = 'standard' | 'wide'

function ExpandIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
    </svg>
  )
}

function CollapseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5" />
    </svg>
  )
}

// Desktop/tablet only (`hidden md:inline-flex`) — a wide layout isn't
// meaningful on a phone-width viewport, and the CSS media query backing
// `data-width="wide"` in globals.css already no-ops below `md` for the same
// reason, so this hides the control rather than shipping a toggle that does
// nothing below that breakpoint.
export function WidthToggle() {
  const [width, setWidth] = useState<Width>('standard')

  useEffect(() => {
    setWidth(document.documentElement.dataset.width === 'wide' ? 'wide' : 'standard')
  }, [])

  function toggle() {
    const next: Width = width === 'standard' ? 'wide' : 'standard'
    setWidth(next)
    if (next === 'wide') {
      document.documentElement.dataset.width = 'wide'
    } else {
      delete document.documentElement.dataset.width
    }
    localStorage.setItem('width', next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={width === 'standard' ? 'Switch to wide layout' : 'Switch to standard layout'}
      aria-pressed={width === 'wide'}
      className="hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-panel-soft text-muted-foreground transition hover:text-foreground md:inline-flex"
    >
      {width === 'standard' ? <ExpandIcon /> : <CollapseIcon />}
    </button>
  )
}
