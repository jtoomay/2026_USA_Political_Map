export function NextBadge() {
  return (
    <a
      href="https://nextjs.org"
      target="_blank"
      rel="noreferrer"
      className="group glass-panel flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3 text-xs font-medium text-dust transition hover:border-nebula/40 hover:text-starlight"
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-nebula to-comet text-[10px] text-void">
        ▲
      </span>
      <span className="font-mono tracking-tight">
        Powered by <span className="text-starlight group-hover:text-glow-nebula">Next.js</span>
      </span>
    </a>
  )
}
