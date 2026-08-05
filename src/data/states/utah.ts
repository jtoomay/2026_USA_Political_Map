import type { StateElectionData } from '@/api/elections'

export const utah: StateElectionData = {
  slug: 'utah',
  name: 'Utah',
  postalCode: 'UT',
  senate: null,
  governor: null,
  house: {
    totalSeats: 4,
    democratSeats: 0,
    republicanSeats: 4,
    independentSeats: 0,
    majorityParty: 'R',
  },
  headlines: [
    {
      id: 'ut-headline-1',
      title: 'Ben McAdams defeats progressives in Utah Democratic primary as he seeks a return to US House',
      sourceName: 'Daily Herald',
      sourceUrl:
        'https://www.heraldextra.com/news/2026/jun/24/ben-mcadams-defeats-progressives-in-utah-democratic-primary-as-he-seeks-a-return-to-us-house/',
      publishedAt: '2026-06-24',
      summary:
        "Former Rep. Ben McAdams won the Democratic primary for a newly redrawn, Democratic-leaning 1st Congressional District after a court-ordered map replaced Utah's previous congressional lines.",
      race: 'house',
    },
    {
      id: 'ut-headline-2',
      title: "Moderate Democrat Ben McAdams wins primary in Utah's new left-leaning district, CBS News projects",
      sourceName: 'CBS News',
      sourceUrl:
        'https://www.cbsnews.com/news/utah-1st-congressional-district-results-democrats-redistricting-ben-mcadams/',
      publishedAt: '2026-06-23',
      summary:
        "McAdams, a centrist former congressman, defeated three more progressive candidates in a district redrawn after a multiyear gerrymandering lawsuit — seen as Democrats' best chance to flip a Utah U.S. House seat in years.",
      race: 'house',
    },
  ],
}
