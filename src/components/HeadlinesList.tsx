import type { Chamber, Headline } from '../api/elections'
import { formatDate } from '../lib/format'

interface HeadlinesListProps {
  headlines: Headline[]
}

const RACE_LABEL: Record<Chamber, string> = {
  senate: 'Senate',
  governor: 'Governor',
  house: 'House',
}

// State-level, not per-race — real headlines are often cross-cutting (see
// Headline.race doc comment in elections.ts). Rendered at the top of the
// state page, ahead of the race breakdowns, for a reader who wants
// plain-language context before probability tables.
export function HeadlinesList({ headlines }: HeadlinesListProps) {
  if (headlines.length === 0) {
    return (
      <p className="rounded-xl border border-border bg-panel px-5 py-4 text-sm text-muted-foreground">
        No recent headlines curated for this state yet.
      </p>
    )
  }

  const sorted = [...headlines].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))

  return (
    <ul className="flex flex-col gap-3">
      {sorted.map((headline) => (
        <li key={headline.id} className="rounded-xl border border-border bg-panel p-4 transition hover:bg-panel-soft">
          <div className="flex flex-wrap items-center gap-2">
            {headline.race ? (
              <span className="rounded-full border border-border bg-panel-soft px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground uppercase">
                {RACE_LABEL[headline.race]}
              </span>
            ) : null}
            <span className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
              {headline.sourceName} &middot; {formatDate(headline.publishedAt)}
            </span>
          </div>
          <a
            href={headline.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display mt-1.5 block text-sm font-semibold text-foreground transition hover:text-accent"
          >
            {headline.title}
          </a>
          {headline.summary ? <p className="mt-1 text-sm text-muted-foreground">{headline.summary}</p> : null}
        </li>
      ))}
    </ul>
  )
}
