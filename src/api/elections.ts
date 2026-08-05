import type { USAStateAbbreviation } from '@mirawision/usa-map-react'
import { STATES } from '@/data/states'
import { DATA_SNAPSHOT_DATE } from '@/data/meta'

export type Party = 'D' | 'R' | 'I'
export type Chamber = 'senate' | 'house' | 'governor'
export type ElectionType = 'regular' | 'special'
export type RatingCategory = 'Safe' | 'Likely' | 'Lean' | 'Toss-up'

export type Forecaster = 'Cook Political Report' | "Sabato's Crystal Ball" | 'Inside Elections' | 'Decision Desk HQ'

export const FORECASTERS: Forecaster[] = [
  'Cook Political Report',
  "Sabato's Crystal Ball",
  'Inside Elections',
  'Decision Desk HQ',
]

// Every rating is attributed to the forecaster that issued it via `source` —
// ratings disagree by design, mirroring how real forecasters don't always
// agree, and none of these values should be read as this app's own opinion.
export interface RaceRating {
  forecaster: Forecaster
  rating: RatingCategory
  leaning: Party | null // null only for Toss-up, which has no lean
  source: string // human-readable label, e.g. "Cook Political Report — Senate ratings"
  sourceUrl: string // link to the actual ratings page
}

export interface PollResult {
  candidateName: string // must match a Candidate.name in the same race
  percentage: number // 0–100; rows need not sum to 100 (undecided/other/rounding)
}

export interface Poll {
  id: string // stable id, e.g. "fl-senate-2026-07-15-emerson"
  pollster: string
  dateConducted: string // ISO date (poll's end date / midpoint)
  sampleSize: number | null // null when the pollster didn't disclose it
  results: PollResult[]
  sourceName: string // e.g. "RealClearPolitics", "Split Ticket"
  sourceUrl: string
}

export interface Headline {
  id: string
  title: string
  sourceName: string
  sourceUrl: string
  publishedAt: string // ISO date
  summary?: string // 1–2 sentence plain-language dek
  race?: Chamber // optional tag; omitted = general state-level news
}

export interface Incumbent {
  name: string
  party: Party
}

export interface Candidate {
  name: string
  party: Party
  incumbent: boolean
  // 0–100. A simplified, illustrative estimate derived from the `ratings`
  // below (not attributed to any single forecaster), roughly: Safe ≈ 95%+,
  // Likely ≈ 75–85%, Lean ≈ 55–65%, Toss-up ≈ 50–52%. Distinct from real
  // polling numbers (see `Poll`/`getPollingAverage` below) — never mix the
  // two in the UI. Not a prediction from any real polling or forecasting
  // model.
  winProbability: number
}

export interface SenateRace {
  electionType: ElectionType
  // The party CURRENTLY holding the seat — this drives map coloring and stays
  // set even on open-seat races, since the seat has a sitting party until the
  // election actually happens. Distinct from `incumbent`, which is the named
  // officeholder and can be null.
  currentParty: Party
  incumbent: Incumbent | null // null for open-seat races
  status: string
  candidates: Candidate[]
  ratings: RaceRating[]
  polls: Poll[] // [] when no recent public polling exists — never omitted
}

// Structurally identical to SenateRace (both are single-winner, statewide
// races) — kept as its own named interface rather than a shared
// `StatewideRace` alias so the two can diverge later (e.g. governors carry
// term-limit metadata Senators don't) without a breaking rename.
export interface GovernorRace {
  electionType: ElectionType
  currentParty: Party
  incumbent: Incumbent | null // null for open-seat races
  status: string
  candidates: Candidate[]
  ratings: RaceRating[]
  polls: Poll[]
}

export interface HouseDelegation {
  totalSeats: number
  democratSeats: number
  republicanSeats: number
  independentSeats: number
  // 'Split' when democratSeats === republicanSeats — render with the neutral
  // treatment, not a party color.
  // TODO: this is a whole-delegation majority snapshot, not a per-district
  // breakdown. Refine once real per-district data is available.
  majorityParty: Party | 'Split'
}

export interface StateElectionData {
  slug: string
  name: string
  postalCode: USAStateAbbreviation
  // null when the state has no 2026 U.S. Senate election at all (most
  // common case: two-thirds of states in any given cycle). Distinguish this
  // from `electionType: 'special'`, which IS an active 2026 race.
  senate: SenateRace | null
  house: HouseDelegation
  // null when the state has no 2026 gubernatorial election (governors follow
  // various state-specific cycles, not one shared schedule).
  governor: GovernorRace | null
  // State-level, not per-race: real headlines are often cross-cutting (e.g.
  // "Kansas's 2026 elections, explained"). The optional `Headline.race` tag
  // lets the UI badge/filter without forcing every headline into one race.
  headlines: Headline[]
}

// Real, hand/agent-researched data lives in src/data/states/ (one file per
// state) — this module stays a pure schema + data-access layer, per the
// pattern this file has always followed ("replace via the data-access
// module, not by editing components").
//
// TODO: once a live backend is connected, these three functions become
// async and fetch from it — `fetch(url, { next: { revalidate: 21600 } })`
// (~4x/day), mirroring the pattern this template originally used for
// src/api/launches.ts — replacing the static `STATES` import below with a
// network call. Call sites (`app/page.tsx`, `states/[slug]/page.tsx`,
// `sitemap.ts`) will need `await` added at that point; not done yet.
export function getAllStates(): StateElectionData[] {
  return STATES
}

export function getStateData(slug: string): StateElectionData | undefined {
  return STATES.find((state) => state.slug === slug)
}

// This is a hand-researched snapshot, not a live feed — callers should
// present it as "data compiled as of {date}", not "updated {date}" (which
// would imply live freshness). Per-poll (`Poll.dateConducted`) and
// per-headline (`Headline.publishedAt`) dates carry the real freshness
// signal wherever specific data is shown.
export function getDataSnapshotDate(): string {
  return DATA_SNAPSHOT_DATE
}

// Unweighted mean of whatever polls were curated for this candidate — any
// recency/quality filtering is a data-entry-time decision (which polls got
// included in a state's file), not a runtime one. Revisit with a real
// weighted average (recency/sample size/pollster rating) once this is
// backed by a live source instead of a hand-curated snapshot.
export function getPollingAverage(polls: Poll[], candidateName: string): number | null {
  const values = polls
    .flatMap((poll) => poll.results)
    .filter((result) => result.candidateName === candidateName)
    .map((result) => result.percentage)

  if (values.length === 0) return null
  return values.reduce((sum, value) => sum + value, 0) / values.length
}

export function getMostRecentPollDate(polls: Poll[]): string | null {
  if (polls.length === 0) return null
  return polls.reduce((latest, poll) => (poll.dateConducted > latest ? poll.dateConducted : latest), polls[0].dateConducted)
}

// Convenience for the map tooltip and state detail page: candidates sorted
// by polling average desc. `pollingAverage` is null for every candidate when
// the race has no polls at all — callers fall back to `winProbability` and
// must label it distinctly (see the Candidate.winProbability doc comment)
// rather than conflating the two numbers.
export function getCandidatePollingSummary(
  race: SenateRace | GovernorRace,
): Array<{ candidate: Candidate; pollingAverage: number | null }> {
  return [...race.candidates]
    .map((candidate) => ({ candidate, pollingAverage: getPollingAverage(race.polls, candidate.name) }))
    .sort((a, b) => (b.pollingAverage ?? -1) - (a.pollingAverage ?? -1))
}

// The single most-likely-to-win candidate for a race — real polling average
// when the race has any polls at all (a candidate absent from every poll
// ranks last, via the -Infinity fallback below), otherwise the illustrative
// `winProbability` estimate. Used by the map to preview a projected flip on
// hover (see UsElectionMap.tsx) — kept as its own function rather than
// reusing `getCandidatePollingSummary`'s ordering, since that function
// preserves input order (not a winProbability-based ranking) for the
// no-polls case, which isn't the right fallback for "who's ahead."
export function getPredictedWinner(race: SenateRace | GovernorRace): Candidate {
  const rank =
    race.polls.length > 0
      ? (candidate: Candidate) => getPollingAverage(race.polls, candidate.name) ?? -Infinity
      : (candidate: Candidate) => candidate.winProbability

  return [...race.candidates].sort((a, b) => rank(b) - rank(a))[0]
}

