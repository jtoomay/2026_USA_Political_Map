import type { USAStateAbbreviation } from '@mirawision/usa-map-react'

export type Party = 'D' | 'R' | 'I'
export type Chamber = 'senate' | 'house'
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
// ratings disagree by design in the mock data below, mirroring how real
// forecasters don't always agree, and none of these values should be read as
// that outlet's actual current rating.
export interface RaceRating {
  forecaster: Forecaster
  rating: RatingCategory
  leaning: Party | null // null only for Toss-up, which has no lean
  source: string
}

export interface Incumbent {
  name: string
  party: Party
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
  ratings: RaceRating[]
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
}

// MOCK DATA — replace via the data-access module, not by editing components.
//
// Covers 12 representative states, not all 50: five 2026 Senate battlegrounds
// (GA, MI, ME, NC, TX), the two 2026 Senate SPECIAL elections (FL, OH — seats
// vacated mid-term, distinct from the 33 regular Class II contests, for 35
// total Senate races), one safe-D and one safe-R seat for contrast (MA, WY),
// and three states with no 2026 Senate election at all (CA, NY, PA — PA also
// doubles as the evenly-split House delegation example). Incumbent names are
// invented placeholders, not real officeholders, and every ForecastRating
// carries its own `source` attribution rather than being presented as fact.
const MOCK_STATES: StateElectionData[] = [
  {
    slug: 'georgia',
    name: 'Georgia',
    postalCode: 'GA',
    senate: {
      electionType: 'regular',
      currentParty: 'D',
      incumbent: { name: 'Marcus Ridley', party: 'D' },
      status: 'Incumbent seeking a second term in a closely divided state.',
      ratings: [
        { forecaster: 'Cook Political Report', rating: 'Toss-up', leaning: null, source: 'Cook Political Report — Senate ratings (mock)' },
        { forecaster: "Sabato's Crystal Ball", rating: 'Lean', leaning: 'R', source: "Sabato's Crystal Ball — Senate (mock)" },
        { forecaster: 'Inside Elections', rating: 'Toss-up', leaning: null, source: 'Inside Elections — Senate ratings (mock)' },
        { forecaster: 'Decision Desk HQ', rating: 'Lean', leaning: 'D', source: 'Decision Desk HQ — Senate forecast (mock)' },
      ],
    },
    house: { totalSeats: 14, democratSeats: 5, republicanSeats: 9, independentSeats: 0, majorityParty: 'R' },
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    postalCode: 'MI',
    senate: {
      electionType: 'regular',
      currentParty: 'D',
      incumbent: null,
      status: 'Open seat — incumbent not seeking re-election.',
      ratings: [
        { forecaster: 'Cook Political Report', rating: 'Lean', leaning: 'D', source: 'Cook Political Report — Senate ratings (mock)' },
        { forecaster: "Sabato's Crystal Ball", rating: 'Toss-up', leaning: null, source: "Sabato's Crystal Ball — Senate (mock)" },
        { forecaster: 'Inside Elections', rating: 'Lean', leaning: 'D', source: 'Inside Elections — Senate ratings (mock)' },
        { forecaster: 'Decision Desk HQ', rating: 'Lean', leaning: 'D', source: 'Decision Desk HQ — Senate forecast (mock)' },
      ],
    },
    house: { totalSeats: 13, democratSeats: 7, republicanSeats: 6, independentSeats: 0, majorityParty: 'D' },
  },
  {
    slug: 'maine',
    name: 'Maine',
    postalCode: 'ME',
    senate: {
      electionType: 'regular',
      currentParty: 'R',
      incumbent: { name: 'Eleanor Whitfield', party: 'R' },
      status: 'Longtime incumbent facing a competitive challenge.',
      ratings: [
        { forecaster: 'Cook Political Report', rating: 'Lean', leaning: 'R', source: 'Cook Political Report — Senate ratings (mock)' },
        { forecaster: "Sabato's Crystal Ball", rating: 'Toss-up', leaning: null, source: "Sabato's Crystal Ball — Senate (mock)" },
        { forecaster: 'Inside Elections', rating: 'Lean', leaning: 'R', source: 'Inside Elections — Senate ratings (mock)' },
        { forecaster: 'Decision Desk HQ', rating: 'Toss-up', leaning: null, source: 'Decision Desk HQ — Senate forecast (mock)' },
      ],
    },
    house: { totalSeats: 2, democratSeats: 2, republicanSeats: 0, independentSeats: 0, majorityParty: 'D' },
  },
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    postalCode: 'NC',
    senate: {
      electionType: 'regular',
      currentParty: 'R',
      incumbent: null,
      status: 'Open seat after the incumbent announced retirement.',
      ratings: [
        { forecaster: 'Cook Political Report', rating: 'Toss-up', leaning: null, source: 'Cook Political Report — Senate ratings (mock)' },
        { forecaster: "Sabato's Crystal Ball", rating: 'Lean', leaning: 'R', source: "Sabato's Crystal Ball — Senate (mock)" },
        { forecaster: 'Inside Elections', rating: 'Toss-up', leaning: null, source: 'Inside Elections — Senate ratings (mock)' },
        { forecaster: 'Decision Desk HQ', rating: 'Lean', leaning: 'R', source: 'Decision Desk HQ — Senate forecast (mock)' },
      ],
    },
    house: { totalSeats: 14, democratSeats: 4, republicanSeats: 10, independentSeats: 0, majorityParty: 'R' },
  },
  {
    slug: 'texas',
    name: 'Texas',
    postalCode: 'TX',
    senate: {
      electionType: 'regular',
      currentParty: 'R',
      incumbent: { name: 'Holt Bregman', party: 'R' },
      status: 'Incumbent seeking re-election after a contested primary.',
      ratings: [
        { forecaster: 'Cook Political Report', rating: 'Likely', leaning: 'R', source: 'Cook Political Report — Senate ratings (mock)' },
        { forecaster: "Sabato's Crystal Ball", rating: 'Likely', leaning: 'R', source: "Sabato's Crystal Ball — Senate (mock)" },
        { forecaster: 'Inside Elections', rating: 'Lean', leaning: 'R', source: 'Inside Elections — Senate ratings (mock)' },
        { forecaster: 'Decision Desk HQ', rating: 'Likely', leaning: 'R', source: 'Decision Desk HQ — Senate forecast (mock)' },
      ],
    },
    house: { totalSeats: 38, democratSeats: 13, republicanSeats: 25, independentSeats: 0, majorityParty: 'R' },
  },
  {
    slug: 'florida',
    name: 'Florida',
    postalCode: 'FL',
    senate: {
      electionType: 'special',
      currentParty: 'R',
      incumbent: { name: 'Diane Castellano', party: 'R' },
      status: 'Special election to complete the remainder of a vacated term.',
      ratings: [
        { forecaster: 'Cook Political Report', rating: 'Likely', leaning: 'R', source: 'Cook Political Report — Senate ratings (mock)' },
        { forecaster: "Sabato's Crystal Ball", rating: 'Safe', leaning: 'R', source: "Sabato's Crystal Ball — Senate (mock)" },
        { forecaster: 'Inside Elections', rating: 'Likely', leaning: 'R', source: 'Inside Elections — Senate ratings (mock)' },
        { forecaster: 'Decision Desk HQ', rating: 'Likely', leaning: 'R', source: 'Decision Desk HQ — Senate forecast (mock)' },
      ],
    },
    house: { totalSeats: 28, democratSeats: 8, republicanSeats: 20, independentSeats: 0, majorityParty: 'R' },
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    postalCode: 'OH',
    senate: {
      electionType: 'special',
      currentParty: 'R',
      incumbent: { name: 'Grant Palmer', party: 'R' },
      status: 'Special election to complete the remainder of a vacated term.',
      ratings: [
        { forecaster: 'Cook Political Report', rating: 'Likely', leaning: 'R', source: 'Cook Political Report — Senate ratings (mock)' },
        { forecaster: "Sabato's Crystal Ball", rating: 'Lean', leaning: 'R', source: "Sabato's Crystal Ball — Senate (mock)" },
        { forecaster: 'Inside Elections', rating: 'Likely', leaning: 'R', source: 'Inside Elections — Senate ratings (mock)' },
        { forecaster: 'Decision Desk HQ', rating: 'Lean', leaning: 'R', source: 'Decision Desk HQ — Senate forecast (mock)' },
      ],
    },
    house: { totalSeats: 15, democratSeats: 5, republicanSeats: 10, independentSeats: 0, majorityParty: 'R' },
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    postalCode: 'MA',
    senate: {
      electionType: 'regular',
      currentParty: 'D',
      incumbent: { name: 'Rosalind Chen', party: 'D' },
      status: 'Incumbent heavily favored for re-election.',
      ratings: [
        { forecaster: 'Cook Political Report', rating: 'Safe', leaning: 'D', source: 'Cook Political Report — Senate ratings (mock)' },
        { forecaster: "Sabato's Crystal Ball", rating: 'Safe', leaning: 'D', source: "Sabato's Crystal Ball — Senate (mock)" },
        { forecaster: 'Inside Elections', rating: 'Safe', leaning: 'D', source: 'Inside Elections — Senate ratings (mock)' },
        { forecaster: 'Decision Desk HQ', rating: 'Safe', leaning: 'D', source: 'Decision Desk HQ — Senate forecast (mock)' },
      ],
    },
    house: { totalSeats: 9, democratSeats: 9, republicanSeats: 0, independentSeats: 0, majorityParty: 'D' },
  },
  {
    slug: 'wyoming',
    name: 'Wyoming',
    postalCode: 'WY',
    senate: {
      electionType: 'regular',
      currentParty: 'R',
      incumbent: { name: 'Walt Truman', party: 'R' },
      status: 'Incumbent heavily favored for re-election.',
      ratings: [
        { forecaster: 'Cook Political Report', rating: 'Safe', leaning: 'R', source: 'Cook Political Report — Senate ratings (mock)' },
        { forecaster: "Sabato's Crystal Ball", rating: 'Safe', leaning: 'R', source: "Sabato's Crystal Ball — Senate (mock)" },
        { forecaster: 'Inside Elections', rating: 'Safe', leaning: 'R', source: 'Inside Elections — Senate ratings (mock)' },
        { forecaster: 'Decision Desk HQ', rating: 'Safe', leaning: 'R', source: 'Decision Desk HQ — Senate forecast (mock)' },
      ],
    },
    house: { totalSeats: 1, democratSeats: 0, republicanSeats: 1, independentSeats: 0, majorityParty: 'R' },
  },
  {
    slug: 'california',
    name: 'California',
    postalCode: 'CA',
    senate: null,
    house: { totalSeats: 52, democratSeats: 43, republicanSeats: 9, independentSeats: 0, majorityParty: 'D' },
  },
  {
    slug: 'new-york',
    name: 'New York',
    postalCode: 'NY',
    senate: null,
    house: { totalSeats: 26, democratSeats: 16, republicanSeats: 10, independentSeats: 0, majorityParty: 'D' },
  },
  {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    postalCode: 'PA',
    senate: null,
    house: { totalSeats: 16, democratSeats: 8, republicanSeats: 8, independentSeats: 0, majorityParty: 'Split' },
  },
]

const MOCK_LAST_UPDATED = '2026-07-29T10:00:00-04:00'

// TODO: once the real backend is connected, these should become async and
// fetch from it. Election data changes often, so use Next's fetch cache with
// a short window — `fetch(url, { next: { revalidate: 21600 } })` (~4x/day) —
// rather than the default full-static caching, mirroring the pattern in
// src/api/launches.ts.
export function getAllStates(): StateElectionData[] {
  return MOCK_STATES
}

export function getStateData(slug: string): StateElectionData | undefined {
  return MOCK_STATES.find((state) => state.slug === slug)
}

export function getLastUpdated(): string {
  return MOCK_LAST_UPDATED
}
