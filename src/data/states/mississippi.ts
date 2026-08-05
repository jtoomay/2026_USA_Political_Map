import type { StateElectionData } from '@/api/elections'

export const mississippi: StateElectionData = {
  slug: 'mississippi',
  name: 'Mississippi',
  postalCode: 'MS',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Cindy Hyde-Smith', party: 'R' },
    status:
      "Sen. Cindy Hyde-Smith won renomination with 80.8% of the vote over physician Sarah Adlakha in the March 10, 2026 Republican primary and faces Lowndes County District Attorney Scott Colom, who won the Democratic nomination with 73% of the vote, plus independent Ty Pinkins (the 2024 Democratic Senate nominee) in November. Democratic strategist James Carville called Hyde-Smith vulnerable and predicted a Democratic upset after an April 2026 Impact Research/SPLC Action Fund poll showed Colom trailing by just 3 points in a three-way race, down from a 13-point deficit a year earlier, amid weak favorability numbers for Hyde-Smith. Most forecasters nonetheless rate the seat Solid/Safe Republican — Mississippi hasn't elected a Democrat to the Senate since 1982.",
    candidates: [
      { name: 'Cindy Hyde-Smith', party: 'R', incumbent: true, winProbability: 88 },
      { name: 'Scott Colom', party: 'D', incumbent: false, winProbability: 10 },
      { name: 'Ty Pinkins', party: 'I', incumbent: false, winProbability: 2 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Mississippi Senate 2026 (Solid R, April 13, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488616',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Senate ratings (Safe R, March 4, 2026)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — Mississippi Senate 2026 (Solid R, April 23, 2026)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=ms&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Likely',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Senate forecast (Likely R, July 14, 2026)',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [
      {
        id: 'ms-senate-2026-04-18-impact-splc',
        pollster: 'Impact Research (for SPLC Action Fund)',
        dateConducted: '2026-04-18',
        sampleSize: 500,
        results: [
          { candidateName: 'Cindy Hyde-Smith', percentage: 42 },
          { candidateName: 'Scott Colom', percentage: 39 },
          { candidateName: 'Ty Pinkins', percentage: 6 },
        ],
        sourceName: 'SPLC Action Fund',
        sourceUrl:
          'https://www.splcactionfund.org/news/new-poll-of-likely-voters-shows-mississippi-senate-race-tightening-as-voters-continue-to-sour-on-sen-cindy-hyde-smith/',
      },
    ],
  },
  governor: null,
  house: {
    totalSeats: 4,
    democratSeats: 1,
    republicanSeats: 3,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'ms-headline-1',
      title: "Legendary strategist: GOP Senator is 'nervous as a cat in a room full of rocking chairs'",
      sourceName: 'Raw Story',
      sourceUrl: 'https://www.rawstory.com/cindy-hyde-smith-2677070079/',
      publishedAt: '2026-06-20',
      summary:
        'Democratic strategist James Carville predicted an upset in the Mississippi Senate race, pointing to a poll showing Scott Colom trailing Cindy Hyde-Smith by just 3 points even though no Democrat has won a Mississippi Senate seat since 1982.',
      race: 'senate',
    },
    {
      id: 'ms-headline-2',
      title: 'New Poll of Likely Voters Shows Mississippi Senate Race Tightening as Voters Continue to Sour on Sen. Cindy Hyde-Smith',
      sourceName: 'SPLC Action Fund',
      sourceUrl:
        'https://www.splcactionfund.org/news/new-poll-of-likely-voters-shows-mississippi-senate-race-tightening-as-voters-continue-to-sour-on-sen-cindy-hyde-smith/',
      publishedAt: '2026-04-20',
      summary:
        "An Impact Research poll found Scott Colom trailing Sen. Cindy Hyde-Smith by only 3 points in a three-way race with independent Ty Pinkins, down from a 13-point deficit the year before, as Hyde-Smith's favorability numbers slipped.",
      race: 'senate',
    },
    {
      id: 'ms-headline-3',
      title: 'Democratic U.S. Senate challenger says math turning in his favor, though ratings still indicate Republican advantage',
      sourceName: 'Mississippi Independent',
      sourceUrl: 'https://msindy.org/p/democratic-us-senate-challenger-says',
      publishedAt: '2026-06-10',
      summary:
        'Scott Colom argued tightening polls and a surge in Democratic primary turnout make the race competitive, even as major election handicappers continue to rate the seat safely Republican.',
      race: 'senate',
    },
  ],
}
