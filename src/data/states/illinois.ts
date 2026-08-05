import type { StateElectionData } from '@/api/elections'

export const illinois: StateElectionData = {
  slug: 'illinois',
  name: 'Illinois',
  postalCode: 'IL',
  senate: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: null,
    status:
      "Open seat: five-term Sen. Dick Durbin announced in April 2025 that he would not seek reelection. Lt. Gov. Juliana Stratton, backed by a $5 million super PAC funded by Gov. JB Pritzker, won the March 17, 2026 Democratic primary with about 40% of the vote over Reps. Raja Krishnamoorthi and Robin Kelly. Former state GOP chair Don Tracy, who loaned his own campaign $2 million, won the Republican primary. Independents Whitfield Harrington and Tyrone Muhammad also qualified for the November ballot. Illinois hasn't elected a Republican senator since 2010, and forecasters rate the seat Solid/Safe Democratic.",
    candidates: [
      { name: 'Juliana Stratton', party: 'D', incumbent: false, winProbability: 95 },
      { name: 'Don Tracy', party: 'R', incumbent: false, winProbability: 3 },
      { name: 'Whitfield Harrington', party: 'I', incumbent: false, winProbability: 1 },
      { name: 'Tyrone Muhammad', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Illinois Senate 2026 (Solid Democratic)',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488576',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Senate ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
    ],
    polls: [],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'JB Pritzker', party: 'D' },
    status:
      "Gov. JB Pritzker is seeking a third term and won the March 17, 2026 Democratic primary unopposed. He faces a rematch with 2022 Republican nominee Darren Bailey, who won this year's GOP primary with 54% of the vote but has struggled to keep pace financially — Pritzker's campaign spent over $11 million in the second quarter of 2026 alone, against a $127,990 cash balance for Bailey. Independent Collin Corbett and Libertarian Taegun Eimer also qualified for the ballot. Cook Political Report rates the race Solid Democratic; a Pritzker win would make him the first Illinois governor elected to a third term since 1982.",
    candidates: [
      { name: 'JB Pritzker', party: 'D', incumbent: true, winProbability: 95 },
      { name: 'Darren Bailey', party: 'R', incumbent: false, winProbability: 3 },
      { name: 'Collin Corbett', party: 'I', incumbent: false, winProbability: 1 },
      { name: 'Taegun Eimer', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Illinois Governor 2026 (Solid Democrat)',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479501',
      },
    ],
    polls: [],
  },
  house: {
    totalSeats: 17,
    democratSeats: 14,
    republicanSeats: 3,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'il-headline-1',
      title: 'Election 2026: Pritzker To Face Bailey — Again, Stratton Wins Senate Primary And More',
      sourceName: 'Block Club Chicago',
      sourceUrl:
        'https://blockclubchicago.org/2026/03/17/election-2026-pritzker-to-face-bailey-again-preckwinkle-defeats-reilly-and-more/',
      publishedAt: '2026-03-17',
      summary:
        'Illinois primary results set up a Pritzker-Bailey governor rematch and a Stratton-Tracy matchup for the U.S. Senate seat Dick Durbin is vacating.',
      race: 'governor',
    },
    {
      id: 'il-headline-2',
      title: "Illinois governor's race will be a rematch in 2026",
      sourceName: 'St. Louis Public Radio',
      sourceUrl: 'https://www.stlpr.org/government-politics-issues/2026-03-17/illinois-governors-rematch-2026-bailey-pritzker',
      publishedAt: '2026-03-17',
      race: 'governor',
    },
    {
      id: 'il-headline-3',
      title: 'Pritzker spends big in second fundraising quarter as Bailey struggles to keep up',
      sourceName: 'Capitol News Illinois',
      sourceUrl:
        'https://capitolnewsillinois.com/news/pritzker-spends-big-in-second-fundraising-quarter-as-bailey-struggles-to-keep-up/',
      publishedAt: '2026-07-16',
      summary:
        "Pritzker's campaign spent over $11 million in the second quarter, mostly on advertising, while Bailey raised $1.33 million and ended the quarter with just $127,990 on hand.",
      race: 'governor',
    },
  ],
}
