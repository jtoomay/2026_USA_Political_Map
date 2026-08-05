import type { StateElectionData } from '@/api/elections'

export const minnesota: StateElectionData = {
  slug: 'minnesota',
  name: 'Minnesota',
  postalCode: 'MN',
  senate: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: null,
    status:
      "Sen. Tina Smith is retiring, opening the seat for the first time since 2002. Lt. Gov. Peggy Flanagan has led most Democratic primary polling over Rep. Angie Craig (a January 2026 GQR poll had her up 49%–36%), but Craig has generally led fundraising and national Republicans reportedly see the more centrist Craig as the tougher general-election opponent; Minnesota's state fraud scandal has also become an issue in the primary. Retired sports broadcaster Michele Tafoya leads a crowded Republican primary ahead of the August 11, 2026 primary that also includes 2024 nominee Royce White, retired Navy officer Tom Weiler and former Navy SEAL Adam Schwarze. Forecasters rate the general election Likely Democratic.",
    candidates: [
      { name: 'Peggy Flanagan', party: 'D', incumbent: false, winProbability: 46 },
      { name: 'Angie Craig', party: 'D', incumbent: false, winProbability: 34 },
      { name: 'Michele Tafoya', party: 'R', incumbent: false, winProbability: 12 },
      { name: 'Royce White', party: 'R', incumbent: false, winProbability: 4 },
      { name: 'Tom Weiler', party: 'R', incumbent: false, winProbability: 2 },
      { name: 'Adam Schwarze', party: 'R', incumbent: false, winProbability: 2 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Likely',
        leaning: 'D',
        source: 'Cook Political Report — Minnesota Senate 2026 (Likely D, April 13, 2026)',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488611',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Likely',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Senate ratings (Likely D, March 4, 2026)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Likely',
        leaning: 'D',
        source: 'Inside Elections — Minnesota Senate 2026 (Likely D, April 23, 2026)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=mn&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Likely',
        leaning: 'D',
        source: 'Decision Desk HQ — 2026 Senate forecast (Likely D, July 14, 2026)',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [
      {
        id: 'mn-senate-2026-02-08-emerson-craig-tafoya',
        pollster: 'Emerson College Polling',
        dateConducted: '2026-02-08',
        sampleSize: 1000,
        results: [
          { candidateName: 'Angie Craig', percentage: 47 },
          { candidateName: 'Michele Tafoya', percentage: 40 },
        ],
        sourceName: 'Emerson College Polling',
        sourceUrl: 'https://emersoncollegepolling.com/minnesota-2026-poll-democrats-lead-gop-as-voters-cite-threats-to-democracy/',
      },
      {
        id: 'mn-senate-2026-02-08-emerson-flanagan-tafoya',
        pollster: 'Emerson College Polling',
        dateConducted: '2026-02-08',
        sampleSize: 1000,
        results: [
          { candidateName: 'Peggy Flanagan', percentage: 47 },
          { candidateName: 'Michele Tafoya', percentage: 41 },
        ],
        sourceName: 'Emerson College Polling',
        sourceUrl: 'https://emersoncollegepolling.com/minnesota-2026-poll-democrats-lead-gop-as-voters-cite-threats-to-democracy/',
      },
      {
        id: 'mn-senate-2026-01-20-gqr-primary',
        pollster: 'GQR (Global Strategy Group/Garin-Hart-Yang)',
        dateConducted: '2026-01-20',
        sampleSize: 600,
        results: [
          { candidateName: 'Peggy Flanagan', percentage: 49 },
          { candidateName: 'Angie Craig', percentage: 36 },
        ],
        sourceName: 'AOL News',
        sourceUrl: 'https://www.aol.com/articles/flanagan-leads-polling-craig-tops-184300972.html',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: null,
    status:
      "Gov. Tim Walz ended his bid for a third term in January 2026 amid a state fraud scandal involving over $1 billion in alleged theft from public programs, opening the race. U.S. Sen. Amy Klobuchar entered days later, won 71.7% of a DFL straw poll and the party's first-ballot endorsement, and cleared the Democratic field; forecasters rate the race Solid/Safe Democratic. Republicans face a three-way primary ahead of the August 11, 2026 primary: House Speaker Lisa Demuth, 2022 candidate Kendall Qualls (endorsed by the state GOP) and Trump-endorsed MyPillow CEO Mike Lindell, who has led recent primary polling. A June 2026 Star Tribune/KARE 11/Mason-Dixon poll showed Klobuchar leading all three Republicans by double digits, with Demuth running closest.",
    candidates: [
      { name: 'Amy Klobuchar', party: 'D', incumbent: false, winProbability: 88 },
      { name: 'Mike Lindell', party: 'R', incumbent: false, winProbability: 6 },
      { name: 'Lisa Demuth', party: 'R', incumbent: false, winProbability: 4 },
      { name: 'Kendall Qualls', party: 'R', incumbent: false, winProbability: 2 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Minnesota Governor 2026 (Solid D)',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479536',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Governor ratings (Safe D, September 4, 2025)",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Likely',
        leaning: 'D',
        source: 'Inside Elections — Minnesota Governor 2026 (Likely D, August 28, 2025)',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=mn&office=governor',
      },
    ],
    polls: [
      {
        id: 'mn-governor-2026-06-10-masondixon-demuth',
        pollster: 'Mason-Dixon Polling & Research',
        dateConducted: '2026-06-10',
        sampleSize: 800,
        results: [
          { candidateName: 'Amy Klobuchar', percentage: 48 },
          { candidateName: 'Lisa Demuth', percentage: 40 },
        ],
        sourceName: 'KARE 11',
        sourceUrl:
          'https://www.kare11.com/article/news/politics/elections/minnesota-poll-june-2026-midterms/89-a09c95b6-a849-4bd0-a564-466cafb82f3c',
      },
      {
        id: 'mn-governor-2026-06-10-masondixon-lindell',
        pollster: 'Mason-Dixon Polling & Research',
        dateConducted: '2026-06-10',
        sampleSize: 800,
        results: [
          { candidateName: 'Amy Klobuchar', percentage: 53 },
          { candidateName: 'Mike Lindell', percentage: 36 },
        ],
        sourceName: 'KARE 11',
        sourceUrl:
          'https://www.kare11.com/article/news/politics/elections/minnesota-poll-june-2026-midterms/89-a09c95b6-a849-4bd0-a564-466cafb82f3c',
      },
      {
        id: 'mn-governor-2026-06-10-masondixon-qualls',
        pollster: 'Mason-Dixon Polling & Research',
        dateConducted: '2026-06-10',
        sampleSize: 800,
        results: [
          { candidateName: 'Amy Klobuchar', percentage: 48 },
          { candidateName: 'Kendall Qualls', percentage: 37 },
        ],
        sourceName: 'KARE 11',
        sourceUrl:
          'https://www.kare11.com/article/news/politics/elections/minnesota-poll-june-2026-midterms/89-a09c95b6-a849-4bd0-a564-466cafb82f3c',
      },
    ],
  },
  house: {
    totalSeats: 8,
    democratSeats: 4,
    republicanSeats: 4,
    independentSeats: 0,
    majorityParty: 'Split',
  },
  headlines: [
    {
      id: 'mn-headline-1',
      title: 'Klobuchar launches Minnesota governor bid after Walz ends re-election run amid massive fraud scandal',
      sourceName: 'Fox News',
      sourceUrl:
        'https://www.foxnews.com/politics/klobuchar-launches-minnesota-governor-bid-after-walz-ends-re-election-run-amid-massive-fraud-scandal.print',
      publishedAt: '2026-01-29',
      summary:
        "Sen. Amy Klobuchar formally entered the open Minnesota governor's race three weeks after Gov. Tim Walz withdrew his re-election bid amid a state fraud scandal involving over $1 billion in alleged theft from public programs.",
      race: 'governor',
    },
    {
      id: 'mn-headline-2',
      title: 'Minnesota Poll: DFL leads for governor, senate, but undecided voters still a factor',
      sourceName: 'KARE 11',
      sourceUrl:
        'https://www.kare11.com/article/news/politics/elections/minnesota-poll-june-2026-midterms/89-a09c95b6-a849-4bd0-a564-466cafb82f3c',
      publishedAt: '2026-06-15',
      summary:
        'A Star Tribune/KARE 11/Mason-Dixon poll found Amy Klobuchar leading all three Republican gubernatorial rivals by double digits, while DFL candidates also led hypothetical Senate matchups against Republicans.',
    },
    {
      id: 'mn-headline-3',
      title: "In tight Senate race, Peggy Flanagan can't escape the f-word",
      sourceName: 'Minnesota Reformer',
      sourceUrl: 'https://minnesotareformer.com/2026/07/28/in-tight-senate-race-peggy-flanagan-cant-escape-the-f-word/',
      publishedAt: '2026-07-28',
      summary:
        "Lt. Gov. Peggy Flanagan faces continued scrutiny tied to Minnesota's state fraud scandal as she competes with Rep. Angie Craig in the DFL Senate primary.",
      race: 'senate',
    },
    {
      id: 'mn-headline-4',
      title: 'Flanagan leads polling, Craig tops fundraising in U.S. Senate race',
      sourceName: 'AOL News',
      sourceUrl: 'https://www.aol.com/articles/flanagan-leads-polling-craig-tops-184300972.html',
      publishedAt: '2026-02-23',
      summary:
        'A GQR poll showed Lt. Gov. Peggy Flanagan leading Rep. Angie Craig 49%–36% in the DFL Senate primary, even as Craig held a large cash-on-hand advantage.',
      race: 'senate',
    },
  ],
}
