import type { StateElectionData } from '@/api/elections'

export const wisconsin: StateElectionData = {
  slug: 'wisconsin',
  name: 'Wisconsin',
  postalCode: 'WI',
  senate: null,
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: null, // Gov. Tony Evers (D) announced in July 2025 he would not seek a third term
    status:
      "Open seat: Gov. Tony Evers announced in July 2025 he would not seek a third term and endorsed Milwaukee County Executive David Crowley, who briefly dropped out of the crowded Democratic primary before re-entering in July with Evers's backing. State Rep. Francesca Hong built a commanding lead in the final stretch before the August 11, 2026 primary, with state Sen. Kelda Roys and former DOA Secretary Joel Brennan also competing. 2022 Senate nominee and former Lt. Gov. Mandela Barnes, who had been polling second, dropped out July 30 and called for Democrats to unite. On the Republican side, U.S. Rep. Tom Tiffany is heavily favored over token candidate Andy Manske. Every major forecaster rates the general election a pure Toss-up — one of the most competitive open governor's races in the country.",
    candidates: [
      { name: 'Tom Tiffany', party: 'R', incumbent: false, winProbability: 47 },
      { name: 'Francesca Hong', party: 'D', incumbent: false, winProbability: 44 },
      { name: 'David Crowley', party: 'D', incumbent: false, winProbability: 3 },
      { name: 'Kelda Roys', party: 'D', incumbent: false, winProbability: 2 },
      { name: 'Joel Brennan', party: 'D', incumbent: false, winProbability: 2 },
      { name: 'Andy Manske', party: 'R', incumbent: false, winProbability: 2 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Toss-up',
        leaning: null,
        source: 'Cook Political Report — Wisconsin Governor 2026 (Toss Up, September 11, 2025)',
        sourceUrl: 'https://www.cookpolitical.com/ratings/governor-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Toss-up',
        leaning: null,
        source: "Sabato's Crystal Ball — 2026 Governor ratings (Toss-up, September 4, 2025)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Toss-up',
        leaning: null,
        source: 'Inside Elections — Wisconsin Governor 2026 (Toss-up, August 28, 2025)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=wi&office=governor',
      },
    ],
    polls: [
      {
        id: 'wi-governor-2026-07-27-marquette',
        pollster: 'Marquette University Law School',
        dateConducted: '2026-07-27',
        sampleSize: 407,
        results: [
          { candidateName: 'Francesca Hong', percentage: 38 },
          { candidateName: 'David Crowley', percentage: 7 },
        ],
        sourceName: 'Marquette Law School Poll',
        sourceUrl:
          'https://law.marquette.edu/poll/2026/07/29/marquette-law-poll-finds-expanded-support-for-hong-in-democratic-primary-barnes-sits-second-and-crowley-third/',
      },
      {
        id: 'wi-governor-2026-07-26-state-navigate',
        pollster: 'State Navigate',
        dateConducted: '2026-07-26',
        sampleSize: 1085,
        results: [
          { candidateName: 'Francesca Hong', percentage: 44 },
          { candidateName: 'David Crowley', percentage: 15 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Wisconsin_gubernatorial_election',
      },
    ],
  },
  house: {
    totalSeats: 8,
    democratSeats: 2,
    republicanSeats: 6,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'wi-headline-1',
      title: 'Barnes ends bid for governor, calls for Democrats to unite',
      sourceName: 'Wisconsin Public Radio',
      sourceUrl: 'https://www.wpr.org/news/barnes-ends-bid-for-governor-calls-for-democrats-to-unite',
      publishedAt: '2026-07-30',
      summary:
        'Mandela Barnes withdrew from the Democratic primary for governor, urging supporters to rally behind the eventual nominee.',
      race: 'governor',
    },
    {
      id: 'wi-headline-2',
      title: "Mainstream Democrats pin hopes on David Crowley's reboot campaign for governor",
      sourceName: 'Wisconsin Public Radio',
      sourceUrl: 'https://www.wpr.org/news/david-crowley-democratic-primary-campaign-governor-2026',
      publishedAt: '2026-07-30',
      race: 'governor',
    },
    {
      id: 'wi-headline-3',
      title: 'Marquette Law Poll finds expanded support for Hong in Democratic primary; Barnes sits second and Crowley third',
      sourceName: 'Marquette Law School Poll',
      sourceUrl:
        'https://law.marquette.edu/poll/2026/07/29/marquette-law-poll-finds-expanded-support-for-hong-in-democratic-primary-barnes-sits-second-and-crowley-third/',
      publishedAt: '2026-07-29',
      summary: 'Francesca Hong widened her lead in the final major poll before the August 11 Democratic primary.',
      race: 'governor',
    },
  ],
}
