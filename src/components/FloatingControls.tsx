import { ThemeToggle } from './ThemeToggle'
import { WidthToggle } from './WidthToggle'

// Replaces the old top nav bar's toggle cluster. Fixed (not sticky, no
// header element) so it floats over page content instead of reserving a
// full-width bar — this is a Server Component wrapper since neither toggle
// needs anything from here, only their own 'use client' boundaries.
export function FloatingControls() {
  return (
    <div className="fixed top-4 left-4 z-20 flex items-center gap-2">
      <ThemeToggle />
      <WidthToggle />
    </div>
  )
}
