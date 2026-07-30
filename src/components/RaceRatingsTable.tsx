import { FORECASTERS } from '../api/elections'
import type { RaceRating } from '../api/elections'

interface RaceRatingsTableProps {
  ratings: RaceRating[]
}

function ratingColorClass(leaning: RaceRating['leaning']): string {
  switch (leaning) {
    case 'D':
      return 'border-party-d/30 bg-party-d/10 text-party-d'
    case 'R':
      return 'border-party-r/30 bg-party-r/10 text-party-r'
    case 'I':
      return 'border-party-i/30 bg-party-i/10 text-party-i'
    default:
      return 'border-border bg-panel-soft text-muted-foreground'
  }
}

// Renders every forecaster side by side, each with its own attributed
// source — no single rating is presented as "the" rating for the race.
export function RaceRatingsTable({ ratings }: RaceRatingsTableProps) {
  const byForecaster = new Map(ratings.map((rating) => [rating.forecaster, rating]))

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-panel">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-border font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
            <th className="px-4 py-3 font-medium">Forecaster</th>
            <th className="px-4 py-3 font-medium">Rating</th>
            <th className="px-4 py-3 font-medium">Source</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {FORECASTERS.map((forecaster) => {
            const rating = byForecaster.get(forecaster)
            if (!rating) return null
            return (
              <tr key={forecaster} className="transition hover:bg-panel-soft">
                <td className="font-display px-4 py-3 font-medium text-foreground">{forecaster}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${ratingColorClass(rating.leaning)}`}
                  >
                    {rating.rating}
                    {rating.leaning ? ` ${rating.leaning}` : ''}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{rating.source}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
