import type { StateElectionData } from '@/api/elections'

export const washington: StateElectionData = {
  slug: 'washington',
  name: 'Washington',
  postalCode: 'WA',
  senate: null,
  governor: null,
  house: {
    totalSeats: 10,
    democratSeats: 8,
    republicanSeats: 2,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'wa-headline-1',
      title: "Will WA's Marie Gluesenkamp Perez keep her 3rd District seat? A guide to the primary",
      sourceName: 'KUOW',
      sourceUrl:
        'https://www.kuow.org/elections/2026-07-30/will-was-marie-gluesenkamp-perez-keep-her-3rd-district-seat-a-guide-to-the-primary',
      publishedAt: '2026-07-30',
      summary:
        'Democratic Rep. Marie Gluesenkamp Perez faces progressive and Republican challengers in the August primary for her swing 3rd District seat.',
      race: 'house',
    },
    {
      id: 'wa-headline-2',
      title: "Washington's 3rd District could be among the most competitive House races this fall",
      sourceName: 'OPB',
      sourceUrl: 'https://www.opb.org/article/2026/07/21/washington-3rd-district-marie-gluesenkamp-perez-john-braun/',
      publishedAt: '2026-07-21',
      summary:
        'Nine candidates are running in the 3rd District primary, with the top two advancing to a November race rated among roughly 18 nationwide tossups.',
      race: 'house',
    },
  ],
}
