'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import toomayLogo from '../assets/toomay-logo.png'
import { NextBadge } from './NextBadge'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/example', label: 'Example Page' },
  { href: '/data', label: 'Data Fetching' },
  { href: '/stack', label: 'Tech Stack' },
]

export function Nav() {
  const pathname = usePathname()

  const linkClass =
    'rounded-full px-4 py-2 text-sm font-medium text-dust transition hover:bg-white/5 hover:text-starlight'
  // `!` forces the active classes to win over `linkClass`'s color utilities —
  // both set color/background, and without `!` the CSS source order (not JSX
  // order) would decide, which previously made the active tab's text invisible.
  const activeLinkClass =
    '!bg-gradient-to-r !from-nebula !to-nebula/70 !text-starlight !shadow-[0_0_24px_rgba(124,92,255,0.5)] hover:!text-starlight'

  return (
    <header className="sticky top-0 z-20 px-4 pt-4 sm:px-6">
      <nav className="glass-panel mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 rounded-full px-4 py-2 sm:px-5">
        <Link href="/" className="flex items-center pr-2">
          <Image src={toomayLogo} alt="Toomay" className="h-8 w-auto" priority />
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

        <NextBadge />
      </nav>
    </header>
  )
}
