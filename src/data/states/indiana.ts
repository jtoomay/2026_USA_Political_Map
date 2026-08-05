import type { StateElectionData } from '@/api/elections'

export const indiana: StateElectionData = {
  slug: 'indiana',
  name: 'Indiana',
  postalCode: 'IN',
  senate: null,
  governor: null,
  house: {
    totalSeats: 9,
    democratSeats: 2,
    republicanSeats: 7,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'in-headline-1',
      title: "NRCC to funnel resources into flipping Indiana's 1st Congressional District",
      sourceName: 'IndyStar',
      sourceUrl:
        'https://www.indystar.com/story/news/politics/2026/07/15/nrcc-mrvan-1st-congressional-district-midterms/90919477007/',
      publishedAt: '2026-07-15',
      summary:
        "National Republicans are targeting Democratic Rep. Frank Mrvan's northwest Indiana seat, a onetime blue stronghold that has trended more competitive in recent cycles.",
      race: 'house',
    },
    {
      id: 'in-headline-2',
      title: "Trump endorses Republican Barb Regnitz for Indiana's First Congressional District",
      sourceName: 'Yahoo News',
      sourceUrl: 'https://www.yahoo.com/news/politics/articles/trump-endorses-republican-barb-regnitz-170700521.html',
      publishedAt: '2026-07-15',
      summary:
        "President Trump endorsed Porter County Commissioner Barb Regnitz, the Republican challenging Democratic Rep. Frank Mrvan in Indiana's 1st District.",
      race: 'house',
    },
  ],
}
