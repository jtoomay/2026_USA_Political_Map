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
    'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground'
  // `!` forces the active classes to win over `linkClass`'s color utilities —
  // both set color/background, and without `!` the CSS source order (not JSX
  // order) would decide, which previously made the active tab's text invisible.
  const activeLinkClass = '!bg-foreground !text-background hover:!text-background'

  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="font-display text-lg font-semibold text-foreground">
          {SITE_NAME}
        </Link>

        <div className="flex items-center gap-1">
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
