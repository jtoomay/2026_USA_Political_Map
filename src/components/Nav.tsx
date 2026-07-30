'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE_NAME } from '../lib/site'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/example', label: 'Example Page' },
  { href: '/data', label: 'Data Fetching' },
  { href: '/stack', label: 'Tech Stack' },
]

export function Nav() {
  const pathname = usePathname()

  const linkClass =
    'border-b-2 border-transparent py-1 text-sm font-medium text-muted-foreground transition hover:text-foreground'
  // `!` forces the active classes to win over `linkClass`'s color/border
  // utilities — both set color/border-color, and without `!` the CSS source
  // order (not JSX order) would decide, which previously made the active
  // tab's text invisible.
  const activeLinkClass = '!border-accent !text-foreground'

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-xl font-semibold text-foreground italic">
          {SITE_NAME}
        </Link>

        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? `${linkClass} ${activeLinkClass}` : linkClass}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
