import Link from 'next/link'

const FOOTER_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-4 py-6 text-xs text-muted-foreground sm:px-6">
        {FOOTER_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-foreground">
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  )
}
