import type { StateElectionData } from '@/api/elections'

export const alaska: StateElectionData = {
  slug: 'alaska',
  name: 'Alaska',
  postalCode: 'AK',
  senate: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: { name: 'Dan Sullivan', party: 'R' },
    status:
      'Two-term incumbent Sen. Dan Sullivan (R) is seeking a third term. Former U.S. Rep. Mary Peltola (D) entered the race in January 2026 and has significantly tightened the contest, with several forecasters moving the race to Toss-up by mid-2026 despite Trump having carried Alaska by 14 points in 2024.',
    candidates: [
      { name: 'Dan Sullivan', party: 'R', incumbent: true, winProbability: 52 },
      { name: 'Mary Peltola', party: 'D', incumbent: false, winProbability: 47 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Toss-up',
        leaning: null,
        source: 'Cook Political Report — 2026 Alaska Senate election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alaska',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Toss-up',
        leaning: null,
        source: "Sabato's Crystal Ball — 2026 Alaska Senate election ratings",
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alaska',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Lean',
        leaning: 'R',
        source: 'Inside Elections — 2026 Alaska Senate election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alaska',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Toss-up',
        leaning: null,
        source: 'Decision Desk HQ — 2026 Alaska Senate election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alaska',
      },
    ],
    polls: [
      {
        id: 'ak-senate-2026-06-29-nyt-siena',
        pollster: 'NYT/Siena College',
        dateConducted: '2026-06-29',
        sampleSize: 593,
        results: [
          { candidateName: 'Dan Sullivan', percentage: 47 },
          { candidateName: 'Mary Peltola', percentage: 45 },
        ],
        sourceName: 'Wikipedia — 2026 United States Senate election in Alaska',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alaska',
      },
      {
        id: 'ak-senate-2026-06-07-alaska-survey-research',
        pollster: 'Alaska Survey Research',
        dateConducted: '2026-06-07',
        sampleSize: 1393,
        results: [
          { candidateName: 'Dan Sullivan', percentage: 44 },
          { candidateName: 'Mary Peltola', percentage: 49 },
        ],
        sourceName: 'Wikipedia — 2026 United States Senate election in Alaska',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alaska',
      },
      {
        id: 'ak-senate-2026-05-17-alaska-survey-research',
        pollster: 'Alaska Survey Research',
        dateConducted: '2026-05-17',
        sampleSize: 1401,
        results: [
          { candidateName: 'Dan Sullivan', percentage: 44 },
          { candidateName: 'Mary Peltola', percentage: 48 },
        ],
        sourceName: 'Wikipedia — 2026 United States Senate election in Alaska',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alaska',
      },
      {
        id: 'ak-senate-2026-01-17-public-policy-polling',
        pollster: 'Public Policy Polling (D)',
        dateConducted: '2026-01-17',
        sampleSize: 611,
        results: [
          { candidateName: 'Dan Sullivan', percentage: 47 },
          { candidateName: 'Mary Peltola', percentage: 49 },
        ],
        sourceName: 'Wikipedia — 2026 United States Senate election in Alaska',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alaska',
      },
      {
        id: 'ak-senate-2026-01-11-alaska-survey-research',
        pollster: 'Alaska Survey Research',
        dateConducted: '2026-01-11',
        sampleSize: 1988,
        results: [
          { candidateName: 'Dan Sullivan', percentage: 46 },
          { candidateName: 'Mary Peltola', percentage: 48 },
        ],
        sourceName: 'Wikipedia — 2026 United States Senate election in Alaska',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Alaska',
      },
    ],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'R',
    incumbent: null, // Gov. Mike Dunleavy (R) is term-limited
    status:
      "Open seat: Gov. Mike Dunleavy (R) is term-limited. A crowded field (11 Republicans, 3 Democrats, 3 independents/nonpartisan) contests a nonpartisan top-four primary on Aug. 18, 2026; the top four advance to a ranked-choice-voting general election Nov. 3, 2026. Businesswoman Bernadette Wilson (R) and former state Sen. Tom Begich (D) lead most polling and media attention, with Republicans Dave Bronson and Click Bishop, Democrat Jonathan Kreiss-Tomkins, and independent Bill Walker also drawing significant support. Former Lt. Gov. Nancy Dahlstrom (R) dropped out of the race.",
    candidates: [
      { name: 'Bernadette Wilson', party: 'R', incumbent: false, winProbability: 45 },
      { name: 'Tom Begich', party: 'D', incumbent: false, winProbability: 35 },
      { name: 'Dave Bronson', party: 'R', incumbent: false, winProbability: 8 },
      { name: 'Click Bishop', party: 'R', incumbent: false, winProbability: 5 },
      { name: 'Jonathan Kreiss-Tomkins', party: 'D', incumbent: false, winProbability: 4 },
      { name: 'Bill Walker', party: 'I', incumbent: false, winProbability: 3 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Likely',
        leaning: 'R',
        source: 'Cook Political Report — 2026 Alaska gubernatorial election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Alaska_gubernatorial_election',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Likely',
        leaning: 'R',
        source: "Sabato's Crystal Ball — 2026 Alaska gubernatorial election ratings",
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Alaska_gubernatorial_election',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Likely',
        leaning: 'R',
        source: 'Inside Elections — 2026 Alaska gubernatorial election ratings',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Alaska_gubernatorial_election',
      },
      // Decision Desk HQ: N/A — no Safe/Likely/Lean/Toss-up category found for
      // this race on DDHQ's own site or Wikipedia's ratings table; omitted
      // rather than guessed.
    ],
    polls: [
      {
        id: 'ak-governor-2026-07-01-alaska-survey-research',
        pollster: 'Alaska Survey Research (final-round ranked-choice simulation)',
        dateConducted: '2026-07-01',
        sampleSize: 1528,
        results: [
          { candidateName: 'Tom Begich', percentage: 51 },
          { candidateName: 'Bernadette Wilson', percentage: 49 },
        ],
        sourceName: 'Wikipedia — 2026 Alaska gubernatorial election',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Alaska_gubernatorial_election',
      },
      {
        id: 'ak-governor-2026-02-11-lake-research-partners',
        pollster: 'Lake Research Partners (D)',
        dateConducted: '2026-02-11',
        sampleSize: 600,
        results: [
          { candidateName: 'Tom Begich', percentage: 38 },
          { candidateName: 'Bernadette Wilson', percentage: 16 },
          { candidateName: 'Dave Bronson', percentage: 13 },
          { candidateName: 'Click Bishop', percentage: 8 },
        ],
        sourceName: 'Wikipedia — 2026 Alaska gubernatorial election',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_Alaska_gubernatorial_election',
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
      id: 'ak-headline-1',
      title:
        "Alaska primary ballot set: 17 governor candidates, competitive U.S. Senate race & legislature at a crossroads",
      sourceName: "Alaska's News Source",
      sourceUrl:
        'https://www.alaskasnewssource.com/2026/06/02/alaska-primary-ballot-set-17-governor-candidates-competitive-us-senate-race-legislature-crossroads/',
      publishedAt: '2026-06-02',
      summary:
        "Seventeen candidates filed for Alaska's open governor's race, while Sen. Dan Sullivan faces a newly competitive reelection bid against Mary Peltola.",
    },
    {
      id: 'ak-headline-2',
      title: "Peltola raises millions more than Sullivan in Alaska's U.S. Senate race",
      sourceName: 'Anchorage Daily News',
      sourceUrl: 'https://www.adn.com/politics/2026/07/20/peltola-raises-millions-more-than-sullivan-in-alaskas-us-senate-race/',
      publishedAt: '2026-07-20',
      summary:
        'Democrat Mary Peltola outraised incumbent Republican Sen. Dan Sullivan in the latest fundraising reports as the race is rated a Toss-up.',
      race: 'senate',
    },
    {
      id: 'ak-headline-3',
      title: "Alaska Division of Elections disqualifies challenger to U.S. Sen. Dan Sullivan with same name",
      sourceName: 'Alaska Beacon',
      sourceUrl:
        'https://alaskabeacon.com/2026/06/15/alaska-division-of-elections-disqualifies-challenger-to-u-s-sen-dan-sullivan-with-same-name/',
      publishedAt: '2026-06-15',
      race: 'senate',
    },
    {
      id: 'ak-headline-4',
      title: "Seventeen candidates compete in top-four primary for open Alaska governor's office",
      sourceName: 'Ballotpedia News',
      sourceUrl:
        'https://news.ballotpedia.org/2026/07/08/seventeen-candidates-compete-in-top-four-primary-for-open-alaska-governors-office/',
      publishedAt: '2026-07-08',
      race: 'governor',
    },
  ],
}
