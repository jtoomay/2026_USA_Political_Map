import type { StateElectionData } from '@/api/elections'

export const colorado: StateElectionData = {
  slug: 'colorado',
  name: 'Colorado',
  postalCode: 'CO',
  senate: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'John Hickenlooper', party: 'D' },
    status:
      'Hickenlooper won the June 30, 2026 Democratic primary over state Sen. Julie Gonzales and faces Republican state Sen. Mark Baisley (unopposed for the GOP nod) plus Forward Party nominee Bob Chew in the November general election.',
    candidates: [
      { name: 'John Hickenlooper', party: 'D', incumbent: true, winProbability: 95 },
      { name: 'Mark Baisley', party: 'R', incumbent: false, winProbability: 4 },
      { name: 'Bob Chew', party: 'I', incumbent: false, winProbability: 1 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Senate ratings',
        sourceUrl: 'https://www.cookpolitical.com/senate/race/488546',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Senate ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-senate/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'D',
        source: 'Inside Elections — Colorado Senate 2026',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=co&office=senate',
      },
      {
        forecaster: 'Decision Desk HQ',
        rating: 'Safe',
        leaning: 'D',
        source: 'Decision Desk HQ — 2026 Senate forecast',
        sourceUrl: 'https://votes.decisiondeskhq.com/forecast/2026/senate',
      },
    ],
    polls: [],
  },
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: null,
    status:
      'Open seat: Gov. Jared Polis is term-limited. AG Phil Weiser won the June 30, 2026 Democratic primary over Sen. Michael Bennet. Ministry leader Victor Marx narrowly won a contested Republican primary over state Sen. Barbara Kirkmeyer (certified July 9). Former GOP Rep. Greg Lopez qualified for the ballot as an unaffiliated candidate on July 28, 2026.',
    candidates: [
      { name: 'Phil Weiser', party: 'D', incumbent: false, winProbability: 92 },
      { name: 'Victor Marx', party: 'R', incumbent: false, winProbability: 6 },
      { name: 'Greg Lopez', party: 'I', incumbent: false, winProbability: 2 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Governor ratings',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479471',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Governor ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
      {
        forecaster: 'Inside Elections',
        rating: 'Safe',
        leaning: 'D',
        source: 'Inside Elections — Colorado Governor 2026',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=co&office=governor',
      },
    ],
    polls: [],
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
      id: 'co-headline-1',
      title: 'Ministry founder Victor Marx wins Republican primary for Colorado governor',
      sourceName: 'NBC News',
      sourceUrl:
        'https://www.nbcnews.com/politics/2026-election/ministry-founder-victor-marx-wins-republican-primary-colorado-governor-rcna352780',
      publishedAt: '2026-07-09',
      summary:
        'Marx edged state Sen. Barbara Kirkmeyer by less than a point in a three-way GOP primary decided over a week after polls closed, setting up a general-election matchup with Democrat Phil Weiser.',
      race: 'governor',
    },
    {
      id: 'co-headline-2',
      title: "Forward Party nominee for Colorado's U.S. Senate seat puts $1.1 million into his campaign",
      sourceName: 'Colorado Politics',
      sourceUrl:
        'https://www.coloradopolitics.com/2026/07/14/forward-party-nominee-for-colorados-u-s-senate-seat-puts-1-1-million-into-his-campaign/',
      publishedAt: '2026-07-14',
      summary:
        'Forward Party candidate Bob Chew, a Boulder businessman and Navy veteran, loaned his campaign over $1 million as he seeks to challenge Sen. John Hickenlooper and Republican Mark Baisley.',
      race: 'senate',
    },
    {
      id: 'co-headline-3',
      title: 'Weiser defeats Bennet to become Democratic gubernatorial nominee',
      sourceName: 'Colorado Public Radio',
      sourceUrl: 'https://www.cpr.org/2026/06/30/colorado-governor-democratic-primary-election-2026-results/',
      publishedAt: '2026-06-30',
      summary:
        "Attorney General Phil Weiser defeated Sen. Michael Bennet in the Democratic primary for Colorado's open governor's seat.",
      race: 'governor',
    },
    {
      id: 'co-headline-4',
      title: 'Independent gubernatorial candidate Greg Lopez, a former GOP congressman, qualifies for Colorado ballot',
      sourceName: 'Colorado Politics',
      sourceUrl:
        'https://www.coloradopolitics.com/2026/07/28/independent-gubernatorial-candidate-greg-lopez-a-former-gop-congressman-qualifies-for-colorado-ballot/',
      publishedAt: '2026-07-28',
      summary:
        'Lopez, who left the Republican Party to run unaffiliated, submitted enough signatures to join the November governor race alongside Weiser and Marx.',
      race: 'governor',
    },
    {
      id: 'co-headline-5',
      title: 'John Hickenlooper wins Colorado Democratic primary race for Senate',
      sourceName: 'The Colorado Sun',
      sourceUrl:
        'https://coloradosun.com/2026/06/30/colorado-primary-election-senate-john-hickenlooper-julie-gonzales/',
      publishedAt: '2026-06-30',
      summary: 'Incumbent Sen. John Hickenlooper defeated state Sen. Julie Gonzales in the Democratic primary.',
      race: 'senate',
    },
  ],
}
