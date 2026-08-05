import type { StateElectionData } from '@/api/elections'

export const northDakota: StateElectionData = {
  slug: 'north-dakota',
  name: 'North Dakota',
  postalCode: 'ND',
  senate: null,
  governor: null,
  house: {
    totalSeats: 1,
    democratSeats: 0,
    republicanSeats: 1,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'nd-headline-1',
      title: 'Fedorchak wins North Dakota House primary over NDGOP-endorsed challenger',
      sourceName: 'Yahoo News',
      sourceUrl: 'https://www.yahoo.com/news/politics/articles/fedorchak-projected-win-north-dakota-012638205.html',
      publishedAt: '2026-06-10',
      summary:
        "Rep. Julie Fedorchak won her Republican primary with 73% of the vote over NDGOP-endorsed challenger Alex Balazs and will face Democratic-NPL nominee Trygve Hammer in a November rematch of the state's at-large House seat.",
      race: 'house',
    },
  ],
}
