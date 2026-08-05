import type { StateElectionData } from '@/api/elections'

export const pennsylvania: StateElectionData = {
  slug: 'pennsylvania',
  name: 'Pennsylvania',
  postalCode: 'PA',
  senate: null,
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Josh Shapiro', party: 'D' },
    status:
      'Gov. Josh Shapiro is running for a second term unopposed in the Democratic primary. State Treasurer Stacy Garrity, endorsed by President Trump, won the Republican nomination after 2022 nominee Doug Mastriano opted not to run and backed her instead. Libertarian Ken Krawchuk, Green Party nominee Tony Dastra, and Constitution Party nominee Justin Magill also qualified for the general-election ballot. Polling has consistently shown Shapiro leading by double digits, and forecasters rate the race Safe/Solid to Likely Democratic.',
    candidates: [
      { name: 'Josh Shapiro', party: 'D', incumbent: true, winProbability: 95 },
      { name: 'Stacy Garrity', party: 'R', incumbent: false, winProbability: 3 },
      { name: 'Ken Krawchuk', party: 'I', incumbent: false, winProbability: 1 },
      { name: 'Tony Dastra', party: 'I', incumbent: false, winProbability: 1 },
      { name: 'Justin L. Magill', party: 'I', incumbent: false, winProbability: 0 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Pennsylvania Governor 2026',
        sourceUrl: 'https://www.cookpolitical.com/ratings/governor-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Likely',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Governor ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'D',
        source: 'Inside Elections — Pennsylvania Governor 2026',
        sourceUrl: 'https://www.insideelections.com/ratings/governor',
      },
    ],
    polls: [
      {
        id: 'pa-governor-2026-07-13-quinnipiac',
        pollster: 'Quinnipiac University',
        dateConducted: '2026-07-13',
        sampleSize: 895,
        results: [
          { candidateName: 'Josh Shapiro', percentage: 53 },
          { candidateName: 'Stacy Garrity', percentage: 40 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Pennsylvania_gubernatorial_election',
      },
      {
        id: 'pa-governor-2026-06-25-pennlive-bravo',
        pollster: 'PennLive/Bravo Group',
        dateConducted: '2026-06-25',
        sampleSize: 644,
        results: [
          { candidateName: 'Josh Shapiro', percentage: 54 },
          { candidateName: 'Stacy Garrity', percentage: 29 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Pennsylvania_gubernatorial_election',
      },
      {
        id: 'pa-governor-2026-06-14-franklin-marshall',
        pollster: 'Franklin & Marshall College',
        dateConducted: '2026-06-14',
        sampleSize: 546,
        results: [
          { candidateName: 'Josh Shapiro', percentage: 50 },
          { candidateName: 'Stacy Garrity', percentage: 28 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Pennsylvania_gubernatorial_election',
      },
      {
        id: 'pa-governor-2026-06-11-mad-global',
        pollster: 'MAD Global Strategy',
        dateConducted: '2026-06-11',
        sampleSize: 600,
        results: [
          { candidateName: 'Josh Shapiro', percentage: 48 },
          { candidateName: 'Stacy Garrity', percentage: 31 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Pennsylvania_gubernatorial_election',
      },
      {
        id: 'pa-governor-2026-05-24-pennlive-bravo',
        pollster: 'PennLive/Bravo Group',
        dateConducted: '2026-05-24',
        sampleSize: 683,
        results: [
          { candidateName: 'Josh Shapiro', percentage: 53 },
          { candidateName: 'Stacy Garrity', percentage: 29 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Pennsylvania_gubernatorial_election',
      },
    ],
  },
  house: {
    totalSeats: 17,
    democratSeats: 7,
    republicanSeats: 10,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'pa-headline-1',
      title: 'Trump endorses Stacy Garrity in her bid to oust Gov. Josh Shapiro',
      sourceName: 'Pittsburgh Post-Gazette',
      sourceUrl:
        'https://www.post-gazette.com/news/politics-state/2026/01/27/stacy-garrity-donald-trump-pennsylvania-josh-shapiro/stories/202601270093',
      publishedAt: '2026-01-27',
      race: 'governor',
    },
    {
      id: 'pa-headline-2',
      title:
        "Facing an uphill battle against Gov. Josh Shapiro's $30 million war chest, Stacy Garrity still has to convince top Republicans she's worth investing in",
      sourceName: 'The Philadelphia Inquirer',
      sourceUrl: 'https://www.inquirer.com/politics/pennsylvania/stacy-garrity-campaign-financing-governor-election-20260126.html',
      publishedAt: '2026-01-26',
      race: 'governor',
    },
    {
      id: 'pa-headline-3',
      title: "Mastriano backs Garrity, says he didn't make deal for ambassadorship",
      sourceName: 'abc27',
      sourceUrl: 'https://www.abc27.com/pennsylvania-politics/mastriano-backs-garrity-says-he-didnt-make-deal-for-ambassadorship/',
      publishedAt: '2026-07-01',
      summary: '2022 GOP gubernatorial nominee Doug Mastriano confirmed he would not run again and denied rumors of a quid pro quo behind his endorsement of Garrity.',
      race: 'governor',
    },
    {
      id: 'pa-headline-4',
      title: 'Pennsylvania Republican primary voters favor Mastriano over Garrity by wide margin, poll suggests',
      sourceName: 'Pittsburgh Post-Gazette',
      sourceUrl:
        'https://www.post-gazette.com/news/politics-state/2025/09/24/republican-primary-voters-favor-mastriano-over-garrity-by-wide-margin-poll-sugge/stories/202509240083',
      publishedAt: '2025-09-24',
      summary: 'Polling taken before Mastriano opted out of the race found GOP primary voters preferred him to Garrity by a wide margin.',
      race: 'governor',
    },
  ],
}
