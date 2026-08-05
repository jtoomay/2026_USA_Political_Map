import type { StateElectionData } from '@/api/elections'

export const nebraska: StateElectionData = {
  slug: 'nebraska',
  name: 'Nebraska',
  postalCode: 'NE',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Pete Ricketts', party: 'R' },
    status:
      "Ricketts, appointed in 2023 and elected to finish the term in a 2024 special election, is seeking his first full term. He won the May 12 Republican primary with 82% of the vote. Democratic primary winner Cindy Burbank withdrew from the general election on July 17, and the Nebraska Secretary of State confirmed on July 21 she will not appear on the ballot, leaving nonpartisan independent Dan Osborn (a former union leader who nearly unseated Sen. Deb Fischer in 2024) as the main challenger; the state Democratic Party endorsed Osborn rather than field a replacement. Primary runner-up William Forbes has sued the party to force it to name a new nominee, but as of late July that suit remains unresolved. Legal Marijuana Now's Mike Marvin also qualified for the general election.",
    candidates: [
      { name: 'Pete Ricketts', party: 'R', incumbent: true, winProbability: 80 },
      { name: 'Dan Osborn', party: 'I', incumbent: false, winProbability: 19 },
      { name: 'Mike Marvin', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Likely',
        leaning: 'R',
        source: 'Cook Political Report — Nebraska Senate 2026',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488631',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Likely',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Senate ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Likely',
        leaning: 'R',
        source: 'Inside Elections — Nebraska Senate 2026',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=ne&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Likely',
        leaning: 'R',
        source: 'Decision Desk HQ — 2026 Senate forecast',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [
      {
        id: 'ne-senate-2026-05-11-tavern',
        pollster: 'Tavern Research (D)',
        dateConducted: '2026-05-11',
        sampleSize: 1165,
        results: [
          { candidateName: 'Pete Ricketts', percentage: 42 },
          { candidateName: 'Dan Osborn', percentage: 47 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Nebraska',
      },
      {
        id: 'ne-senate-2026-02-05-impact',
        pollster: 'Impact Research (D)',
        dateConducted: '2026-02-05',
        sampleSize: 600,
        results: [
          { candidateName: 'Pete Ricketts', percentage: 48 },
          { candidateName: 'Dan Osborn', percentage: 47 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Nebraska',
      },
      {
        id: 'ne-senate-2025-12-17-lake',
        pollster: 'Lake Research Partners (D)',
        dateConducted: '2025-12-17',
        sampleSize: 900,
        results: [
          { candidateName: 'Pete Ricketts', percentage: 48 },
          { candidateName: 'Dan Osborn', percentage: 47 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Nebraska',
      },
      {
        id: 'ne-senate-2025-07-29-lake',
        pollster: 'Lake Research Partners (D)',
        dateConducted: '2025-07-29',
        sampleSize: 900,
        results: [
          { candidateName: 'Pete Ricketts', percentage: 46 },
          { candidateName: 'Dan Osborn', percentage: 47 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Nebraska',
      },
      {
        id: 'ne-senate-2025-04-01-change',
        pollster: 'Change Research (D)',
        dateConducted: '2025-04-01',
        sampleSize: 524,
        results: [
          { candidateName: 'Pete Ricketts', percentage: 46 },
          { candidateName: 'Dan Osborn', percentage: 45 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Nebraska',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Jim Pillen', party: 'R' },
    status:
      'Gov. Jim Pillen won the May 12 Republican primary with 75% of the vote over several minor challengers and is seeking a second term. Former state Sen. Lynne Walz won the Democratic primary with 91% over Larry Marvin. Former state Sen. Brett Lindstrom is running as an independent, and Rick Beard is on the Legal Marijuana Now line. Major forecasters rate the race safely Republican despite some Democratic-sponsored polling showing a single-digit race earlier in the cycle.',
    candidates: [
      { name: 'Jim Pillen', party: 'R', incumbent: true, winProbability: 93 },
      { name: 'Lynne Walz', party: 'D', incumbent: false, winProbability: 5 },
      { name: 'Brett Lindstrom', party: 'I', incumbent: false, winProbability: 1 },
      { name: 'Rick Beard', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'R',
        source: 'Cook Political Report — Nebraska Governor 2026',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479541',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Governor ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'R',
        source: 'Inside Elections — Nebraska Governor 2026',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=ne&office=governor',
      },
    ],
    polls: [
      {
        id: 'ne-governor-2026-04-29-lake',
        pollster: 'Lake Research Partners (D)',
        dateConducted: '2026-04-29',
        sampleSize: 900,
        results: [
          { candidateName: 'Jim Pillen', percentage: 47 },
          { candidateName: 'Lynne Walz', percentage: 45 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Nebraska_gubernatorial_election',
      },
      {
        id: 'ne-governor-2026-04-07-ppp',
        pollster: 'Public Policy Polling (D)',
        dateConducted: '2026-04-07',
        sampleSize: 670,
        results: [
          { candidateName: 'Jim Pillen', percentage: 38 },
          { candidateName: 'Lynne Walz', percentage: 33 },
          { candidateName: 'Rick Beard', percentage: 12 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Nebraska_gubernatorial_election',
      },
      {
        id: 'ne-governor-2025-12-17-lake',
        pollster: 'Lake Research Partners (D)',
        dateConducted: '2025-12-17',
        sampleSize: 900,
        results: [
          { candidateName: 'Jim Pillen', percentage: 48 },
          { candidateName: 'Lynne Walz', percentage: 43 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Nebraska_gubernatorial_election',
      },
      {
        id: 'ne-governor-2025-07-29-lake',
        pollster: 'Lake Research Partners (D)',
        dateConducted: '2025-07-29',
        sampleSize: 900,
        results: [
          { candidateName: 'Jim Pillen', percentage: 51 },
          { candidateName: 'Lynne Walz', percentage: 39 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Nebraska_gubernatorial_election',
      },
    ],
  },
  house: {
    totalSeats: 3,
    democratSeats: 0,
    republicanSeats: 3,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'ne-headline-1',
      title: "Nebraska Secretary of State says Democrat Cindy Burbank won't appear on US Senate ballot",
      sourceName: 'Nebraska Examiner',
      sourceUrl:
        'https://nebraskaexaminer.com/2026/07/21/nebraska-secretary-of-state-says-democrat-cindy-burbank-wont-appear-on-us-senate-ballot/',
      publishedAt: '2026-07-21',
      summary:
        'State election officials confirmed Burbank, who won the Democratic Senate primary, will not appear on the November ballot after withdrawing to back independent Dan Osborn.',
      race: 'senate',
    },
    {
      id: 'ne-headline-2',
      title:
        'Nebraska set to have a second straight U.S. Senate election without both major parties on the ballot',
      sourceName: 'Ballotpedia News',
      sourceUrl:
        'https://news.ballotpedia.org/2026/07/24/nebraska-set-to-have-a-second-straight-u-s-senate-election-without-both-major-parties-on-the-ballot/',
      publishedAt: '2026-07-24',
      summary:
        "Burbank's withdrawal means Nebraska's Senate race, like the 2024 special election, will not feature a Democratic nominee on the ballot.",
      race: 'senate',
    },
    {
      id: 'ne-headline-3',
      title:
        'Nebraska Democrat Who Lost U.S. Senate Primary Sues Democratic Party to Force it to Name a New Nominee, After Original Nominee Withdrew',
      sourceName: 'Ballot Access News',
      sourceUrl:
        'https://ballot-access.org/2026/07/29/nebraska-democrat-who-lost-u-s-senate-primary-sues-democratic-party-to-force-it-to-name-a-new-nominee-after-original-nominee-withdrew/',
      publishedAt: '2026-07-29',
      summary:
        'Primary runner-up William Forbes filed suit seeking to compel Nebraska Democrats to name a replacement Senate nominee now that Cindy Burbank has withdrawn.',
      race: 'senate',
    },
  ],
}
