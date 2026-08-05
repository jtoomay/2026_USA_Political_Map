import type { StateElectionData } from '@/api/elections'

export const maryland: StateElectionData = {
  slug: 'maryland',
  name: 'Maryland',
  postalCode: 'MD',
  senate: null,
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Wes Moore', party: 'D' },
    status:
      "Gov. Wes Moore (D) is running for a second term. He won the June 2026 Democratic primary with about 87% against token opposition. Former state delegate Dan Cox — Moore's 2022 opponent — won a crowded nine-candidate Republican primary with 44% of the vote, setting up Maryland's first gubernatorial rematch since 2010. Moore's approval ratings have slipped somewhat since his first term but remain positive; Cox has criticized Moore's push for a special legislative session to redraw the state's congressional map.",
    candidates: [
      { name: 'Wes Moore', party: 'D', incumbent: true, winProbability: 96 },
      { name: 'Dan Cox', party: 'R', incumbent: false, winProbability: 4 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Maryland Governor 2026 (Safe Democratic)',
        sourceUrl: 'https://www.cookpolitical.com/governor/race/479521',
      },
    ],
    polls: [],
  },
  house: {
    totalSeats: 8,
    democratSeats: 7,
    republicanSeats: 1,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'md-headline-1',
      title: 'Cox files to make second bid for governor, adding to already crowded GOP field',
      sourceName: 'Maryland Matters',
      sourceUrl:
        'https://marylandmatters.org/2026/02/01/cox-files-to-make-second-bid-for-governor-adding-already-crowded-gop-field/',
      publishedAt: '2026-02-01',
      race: 'governor',
    },
    {
      id: 'md-headline-2',
      title: "Wes Moore to face Dan Cox again in MD governor's race",
      sourceName: 'Maryland Daily Record',
      sourceUrl: 'https://thedailyrecord.com/2026/06/23/wes-moore-wins-democrat-primary-maryland-governor/',
      publishedAt: '2026-06-23',
      race: 'governor',
    },
    {
      id: 'md-headline-3',
      title: 'Democratic Governor Wes Moore to face Republican challenger Dan Cox in November Election',
      sourceName: 'WEAA',
      sourceUrl:
        'https://www.weaa.org/news/2026-06-25/democratic-governor-wes-moore-to-face-republican-challenger-dan-cox-in-november-election',
      publishedAt: '2026-06-25',
      race: 'governor',
    },
    {
      id: 'md-headline-4',
      title: 'Republican nominee Dan Cox bites back at Gov. Moore on Maryland redistricting',
      sourceName: 'WTOP News',
      sourceUrl: 'https://wtop.com/maryland/2026/07/republican-nominee-dan-cox-bites-back-at-gov-moore-on-maryland-redistricting/',
      publishedAt: '2026-07-01',
      summary:
        "Cox criticized Moore's plan to call a special legislative session to redraw Maryland's congressional map, saying the governor should focus on state issues like taxes and affordability instead.",
      race: 'governor',
    },
  ],
}
