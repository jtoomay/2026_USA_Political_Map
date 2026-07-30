import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <div className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs tracking-wide text-comet">
        <span aria-hidden="true" className="status-dot h-1.5 w-1.5 rounded-full bg-comet" />
        READY TO LAUNCH
      </div>

      <div className="max-w-3xl space-y-5">
        <h1 className="font-display text-glow-nebula text-6xl font-bold tracking-tight text-starlight sm:text-7xl">
          Home
        </h1>
        <p className="mx-auto max-w-xl text-lg text-dust">
          Consider this liftoff. Routing, server-rendered data, and full SEO metadata are already
          wired up on Next.js &mdash; everything after this page is yours to build.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/data"
          className="rounded-full bg-gradient-to-r from-nebula to-comet px-6 py-3 text-sm font-semibold text-void shadow-[0_0_30px_rgba(124,92,255,0.35)] transition hover:brightness-110"
        >
          Try the data-fetching example &rarr;
        </Link>
        <Link
          href="/stack"
          className="glass-panel rounded-full px-6 py-3 text-sm font-semibold text-starlight transition hover:border-white/30"
        >
          Browse what&rsquo;s included
        </Link>
      </div>
    </div>
  )
}
