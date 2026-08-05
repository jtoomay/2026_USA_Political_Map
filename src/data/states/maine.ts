import type { StateElectionData } from '@/api/elections'

export const maine: StateElectionData = {
  slug: 'maine',
  name: 'Maine',
  postalCode: 'ME',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Susan Collins', party: 'R' },
    status:
      "Sen. Susan Collins (R), seeking a sixth term, faced no serious primary opposition. Sullivan harbor master Graham Platner won the June 9, 2026 Democratic primary over Gov. Janet Mills (who suspended her campaign April 30) and others, but withdrew in July 2026 after sexual assault allegations surfaced. Maine Democrats selected former state Senate President Troy Jackson as the replacement nominee at a July 25 convention. A University of New Hampshire poll taken July 15–20 showed Jackson leading Collins 49%–46%, and Cook Political Report and Sabato's Crystal Ball both rate the race a toss-up.",
    candidates: [
      { name: 'Susan Collins', party: 'R', incumbent: true, winProbability: 51 },
      { name: 'Troy Jackson', party: 'D', incumbent: false, winProbability: 49 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Toss-up',
        leaning: null,
        source: 'Cook Political Report — Maine Senate 2026 (Toss Up, moved April 13, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488601',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Toss-up',
        leaning: null,
        source: "Sabato's Crystal Ball — The Maine Senate Do-Over (Toss-up, July 16, 2026)",
        sourceUrl:
          'https://centerforpolitics.org/crystalball/the-maine-senate-do-over-and-rating-changes-in-other-pine-tree-state-races/',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Lean',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Senate forecast (Lean R)',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [
      {
        id: 'me-senate-2026-07-20-unh',
        pollster: 'University of New Hampshire Survey Center (Pine Tree State Poll)',
        dateConducted: '2026-07-20',
        sampleSize: 1236,
        results: [
          { candidateName: 'Troy Jackson', percentage: 49 },
          { candidateName: 'Susan Collins', percentage: 46 },
        ],
        sourceName: 'UNH Survey Center',
        sourceUrl: 'https://scholars.unh.edu/survey_center_polls/981/',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: null,
    status:
      'Open seat: Gov. Janet Mills is term-limited after two terms. Former House Speaker Hannah Pingree won a multi-round ranked-choice Democratic primary on June 9, 2026 over Secretary of State Shenna Bellows, former Senate President Troy Jackson (who later became the Senate nominee), former Maine CDC director Nirav Shah, and energy executive Angus King III. Attorney Bobby Charles won the Republican nomination; former state Senate President Rick Bennett is running as an independent. A late-June New York Times/Portland Press Herald/Siena College poll showed Pingree leading Charles 50%–36%, with Bennett at 8%.',
    candidates: [
      { name: 'Hannah Pingree', party: 'D', incumbent: false, winProbability: 88 },
      { name: 'Bobby Charles', party: 'R', incumbent: false, winProbability: 10 },
      { name: 'Rick Bennett', party: 'I', incumbent: false, winProbability: 2 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Maine Governor 2026 (upgraded Likely D to Solid D)',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479516',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Likely',
        leaning: 'D',
        source: "Sabato's Crystal Ball — The Maine Senate Do-Over (Likely Democratic, July 16, 2026)",
        sourceUrl:
          'https://centerforpolitics.org/crystalball/the-maine-senate-do-over-and-rating-changes-in-other-pine-tree-state-races/',
      },
    ],
    polls: [
      {
        id: 'me-governor-2026-06-26-siena',
        pollster: 'Siena College (for The New York Times / Portland Press Herald)',
        dateConducted: '2026-06-26',
        sampleSize: 608,
        results: [
          { candidateName: 'Hannah Pingree', percentage: 50 },
          { candidateName: 'Bobby Charles', percentage: 36 },
          { candidateName: 'Rick Bennett', percentage: 8 },
        ],
        sourceName: 'Portland Press Herald',
        sourceUrl: 'https://www.pressherald.com/?p=7675894',
      },
      {
        id: 'me-governor-2026-06-27-fox',
        pollster: 'Fox News',
        dateConducted: '2026-06-27',
        sampleSize: null,
        results: [
          { candidateName: 'Hannah Pingree', percentage: 53 },
          { candidateName: 'Bobby Charles', percentage: 42 },
        ],
        sourceName: 'Fox News',
        sourceUrl:
          'https://static.foxnews.com/foxnews.com/content/uploads/2026/06/fox_june-23-27-2026_complete_maine_topline_june-30-release.pdf',
      },
    ],
  },
  house: {
    totalSeats: 2,
    democratSeats: 2,
    republicanSeats: 0,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'me-headline-1',
      title: "Poll of Maine governor's race gives Hannah Pingree comfortable lead over Bobby Charles",
      sourceName: 'Maine Public',
      sourceUrl:
        'https://www.mainepublic.org/maine/2026-06-30/poll-of-maine-governors-race-gives-hannah-pingree-comfortable-lead-over-bobby-charles',
      publishedAt: '2026-06-30',
      summary:
        'The first public poll since the June primary showed Pingree leading Charles 50%–36%, with independent Rick Bennett drawing 8%.',
      race: 'governor',
    },
    {
      id: 'me-headline-2',
      title: "Hannah Pingree leads Bobby Charles in Maine governor's race poll",
      sourceName: 'Bangor Daily News',
      sourceUrl:
        'https://www.bangordailynews.com/2026/07/01/politics/elections/maine-governor-race-poll-hannah-pingree-bobby-charles-rick-bennett/',
      publishedAt: '2026-07-01',
      race: 'governor',
    },
    {
      id: 'me-headline-3',
      title: 'The Maine Senate Do-Over, and Rating Changes in Other Pine Tree State Races',
      sourceName: "Sabato's Crystal Ball",
      sourceUrl:
        'https://centerforpolitics.org/crystalball/the-maine-senate-do-over-and-rating-changes-in-other-pine-tree-state-races/',
      publishedAt: '2026-07-16',
      summary:
        "After Graham Platner's withdrawal amid misconduct allegations, Democrats moved to select a new Senate nominee; Crystal Ball says the party should end up with a less-damaged candidate against Susan Collins.",
      race: 'senate',
    },
    {
      id: 'me-headline-4',
      title: 'Troy Jackson has slight edge over Susan Collins, new poll finds',
      sourceName: 'Portland Press Herald',
      sourceUrl: 'https://www.pressherald.com/2026/07/21/troy-jackson-has-slight-edge-over-susan-collins-new-poll-finds/',
      publishedAt: '2026-07-21',
      race: 'senate',
    },
    {
      id: 'me-headline-5',
      title: 'Susan Collins faces Troy Jackson in toss-up 2026 Maine Senate race',
      sourceName: 'Fox News',
      sourceUrl:
        'https://www.foxnews.com/politics/democrats-shake-up-collins-faces-toss-up-platner-replacement-must-win-senate-race',
      publishedAt: '2026-07-22',
      race: 'senate',
    },
  ],
}
