import type { StateElectionData } from '@/api/elections'

export const wyoming: StateElectionData = {
  slug: 'wyoming',
  name: 'Wyoming',
  postalCode: 'WY',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null, // Sen. Cynthia Lummis (R) announced Dec. 19, 2025 she would not seek reelection
    status:
      "Open seat: Sen. Cynthia Lummis announced December 19, 2025 that she would not seek a second term. U.S. Rep. Harriet Hageman is the heavy favorite for the August 18, 2026 Republican primary, carrying endorsements from President Trump, Sen. John Barrasso, and Lummis herself over minor candidates including veteran Jimmy Skovgard and former Kirby mayor Sam Mead. Former state Rep. James Byrd leads a small Democratic field. Wyoming has voted Republican in every Senate election since 1977 and hasn't elected a Democratic senator to this seat since 1954; every major forecaster rates the race Safe/Solid Republican.",
    candidates: [
      { name: 'Harriet Hageman', party: 'R', incumbent: false, winProbability: 97 },
      { name: 'James Byrd', party: 'D', incumbent: false, winProbability: 3 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Wyoming Senate 2026 (Solid R, April 13, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/ratings/senate-race-ratings',
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
        source: 'Inside Elections — Wyoming Senate 2026 (Solid R, April 23, 2026)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=wy&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Senate forecast (Safe R, July 14, 2026)',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null, // Gov. Mark Gordon (R) is term-limited
    status:
      "Open seat: Gov. Mark Gordon is term-limited after two terms. State Sen. Eric Barlow, Superintendent of Public Instruction Megan Degenfelder (endorsed by President Trump), retired Marine Corps Col. Brent Bien, and businessman Curt Blake are competing in a genuinely contested August 18, 2026 Republican primary; a Barlow-campaign-sponsored Pulse Decision Science poll (July 18–20) showed him leading. Constitution Party candidate Rebecca Bextel has been framed by some observers as an insurance option against Barlow, while Ken Casner is the presumptive Democratic nominee in a state that has not elected a Democratic governor since 2006. Every major forecaster rates the general election Safe/Solid Republican.",
    candidates: [
      { name: 'Eric Barlow', party: 'R', incumbent: false, winProbability: 47 },
      { name: 'Megan Degenfelder', party: 'R', incumbent: false, winProbability: 27 },
      { name: 'Brent Bien', party: 'R', incumbent: false, winProbability: 14 },
      { name: 'Curt Blake', party: 'R', incumbent: false, winProbability: 7 },
      { name: 'Ken Casner', party: 'D', incumbent: false, winProbability: 3 },
      { name: 'Rebecca Bextel', party: 'I', incumbent: false, winProbability: 2 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Wyoming Governor 2026 (Solid R, September 11, 2025)',
        sourceUrl: 'https://www.cookpolitical.com/ratings/governor-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Governor ratings (Safe R, September 4, 2025)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — Wyoming Governor 2026 (Solid R, August 28, 2025)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=wy&office=governor',
      },
    ],
    polls: [
      {
        id: 'wy-governor-2026-07-20-pulse',
        pollster: 'Pulse Decision Science (for Barlow campaign)',
        dateConducted: '2026-07-20',
        sampleSize: 400,
        results: [
          { candidateName: 'Eric Barlow', percentage: 42 },
          { candidateName: 'Megan Degenfelder', percentage: 19 },
          { candidateName: 'Brent Bien', percentage: 14 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Wyoming_gubernatorial_election',
      },
    ],
  },
  house: {
    totalSeats: 1,
    democratSeats: 0,
    republicanSeats: 1,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'wy-headline-1',
      title: "Here's where the Republican candidates for Wyoming governor diverge on policy",
      sourceName: 'WyoFile',
      sourceUrl: 'https://wyofile.com/heres-where-the-republican-candidates-for-wyoming-governor-diverge-on-policy/',
      publishedAt: '2026-07-29',
      race: 'governor',
    },
    {
      id: 'wy-headline-2',
      title: "Will voters split Wyoming's Republican race for governor?",
      sourceName: 'WyoFile',
      sourceUrl: 'https://wyofile.com/will-voters-split-wyomings-republican-race-for-governor/',
      publishedAt: '2026-07-14',
      race: 'governor',
    },
    {
      id: 'wy-headline-3',
      title: "Trump endorses Wyoming's congresswoman Harriet Hageman for Senate",
      sourceName: 'The National Desk',
      sourceUrl:
        'https://thenationaldesk.com/news/americas-news-now/president-donald-trump-endorses-wyomings-congresswoman-harriet-hageman-for-senate',
      publishedAt: '2025-12-23',
      summary: "President Trump endorsed Rep. Harriet Hageman's bid for Cynthia Lummis's open Senate seat.",
      race: 'senate',
    },
    {
      id: 'wy-headline-4',
      title: 'Wyoming Sen. John Barrasso endorses Harriet Hageman in Senate race',
      sourceName: 'The Hill',
      sourceUrl: 'https://thehill.com/homenews/campaign/5684410-hageman-gop-senate-bid/',
      publishedAt: '2026-01-12',
      race: 'senate',
    },
  ],
}
