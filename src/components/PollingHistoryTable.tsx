import { getCandidatePollingSummary } from '../api/elections'
import type { GovernorRace, SenateRace } from '../api/elections'
import { formatDate } from '../lib/format'

interface PollingHistoryTableProps {
  race: SenateRace | GovernorRace
}

// Mirrors RaceRatingsTable's visual/structural conventions (rounded panel,
// mono uppercase header, divide-y rows) rather than inventing new table
// styling for the same "sourced data table" concept.
export function PollingHistoryTable({ race }: PollingHistoryTableProps) {
  const { polls } = race

  if (polls.length === 0) {
    return (
      <p className="rounded-xl border border-border bg-panel px-5 py-4 text-sm text-muted-foreground">
        No recent public polling available for this race.
      </p>
    )
  }

  const summary = getCandidatePollingSummary(race).filter((entry) => entry.pollingAverage !== null)
  const sortedPolls = [...polls].sort((a, b) => (a.dateConducted < b.dateConducted ? 1 : -1))

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-muted-foreground">
        Polling average:{' '}
        {summary
          .map((entry) => `${entry.candidate.name} ${Math.round(entry.pollingAverage as number)}%`)
          .join(', ')}{' '}
        across {polls.length} poll{polls.length === 1 ? '' : 's'}
      </p>
      <div className="overflow-x-auto rounded-xl border border-border bg-panel">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-border font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Pollster</th>
              <th className="px-4 py-3 font-medium">Results</th>
              <th className="px-4 py-3 font-medium">Sample</th>
              <th className="px-4 py-3 font-medium">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sortedPolls.map((poll) => (
              <tr key={poll.id} className="transition hover:bg-panel-soft">
                <td className="px-4 py-3 font-mono text-xs whitespace-nowrap text-muted-foreground">
                  {formatDate(poll.dateConducted)}
                </td>
                <td className="font-display px-4 py-3 font-medium text-foreground">{poll.pollster}</td>
                <td className="px-4 py-3 text-xs text-foreground">
                  {poll.results.map((result) => `${result.candidateName} ${result.percentage}%`).join(' · ')}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{poll.sampleSize ?? '—'}</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  <a
                    href={poll.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-2 transition hover:text-accent"
                  >
                    {poll.sourceName}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
