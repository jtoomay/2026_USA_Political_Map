import type { StateElectionData } from '@/api/elections'

export const connecticut: StateElectionData = {
  slug: 'connecticut',
  name: 'Connecticut',
  postalCode: 'CT',
  // No 2026 U.S. Senate race: Richard Blumenthal (D, Class 3) serves until
  // Jan. 2029 and Chris Murphy (D, Class 1) serves until Jan. 2031 — neither
  // seat is up in 2026.
  senate: null,
  governor: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Ned Lamont', party: 'D' },
    status:
      "Gov. Ned Lamont is seeking a third term. He won the state Democratic convention's endorsement on May 16, 2026, but state Rep. Josh Elliott cleared the delegate threshold to force Connecticut's first gubernatorial primary in nearly 50 years, set for August 11, 2026; a July 23–26 Change Research poll had Lamont leading Elliott 48%–27% among likely primary voters. Republicans nominated state Sen. Ryan Fazio at their own May 16 convention after commentator Betsy McCaughey conceded rather than force a primary. Lamont is running with Lt. Gov. Susan Bysiewicz; Fazio with Matthew Corey.",
    candidates: [
      { name: 'Ned Lamont', party: 'D', incumbent: true, winProbability: 90 },
      { name: 'Ryan Fazio', party: 'R', incumbent: false, winProbability: 7 },
      { name: 'Josh Elliott', party: 'D', incumbent: false, winProbability: 3 },
    ],
    ratings: [],
    polls: [
      {
        id: 'ct-governor-2026-07-26-change-research-primary',
        pollster: 'Change Research (for Impact CT)',
        dateConducted: '2026-07-26',
        sampleSize: 859,
        results: [
          { candidateName: 'Ned Lamont', percentage: 48 },
          { candidateName: 'Josh Elliott', percentage: 27 },
        ],
        sourceName: 'CT Mirror',
        sourceUrl: 'https://ctmirror.org/2026/07/29/governor-ct-poll-lamont-elliott/',
      },
      {
        id: 'ct-governor-2026-06-23-unh-nutmeg',
        pollster: 'UNH Survey Center (Nutmeg State Poll)',
        dateConducted: '2026-06-23',
        sampleSize: null,
        results: [
          { candidateName: 'Ned Lamont', percentage: 49 },
          { candidateName: 'Ryan Fazio', percentage: 36 },
        ],
        sourceName: 'UNH Survey Center',
        sourceUrl: 'https://scholars.unh.edu/survey_center_polls/972/',
      },
    ],
  },
  house: {
    totalSeats: 5,
    democratSeats: 5,
    republicanSeats: 0,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'ct-headline-1',
      title: 'Ryan Fazio wins the CT GOP nomination for governor',
      sourceName: 'CT Mirror',
      sourceUrl: 'https://ctmirror.org/2026/05/16/ryan-fazio-wins-the-ct-gop-nomination-for-governor/',
      publishedAt: '2026-05-16',
      summary:
        'State Sen. Ryan Fazio won the Republican nomination for governor at the party convention after rival Betsy McCaughey conceded rather than force an August primary.',
      race: 'governor',
    },
    {
      id: 'ct-headline-2',
      title: 'CT Dems endorse Lamont for 3rd term, but he faces primary',
      sourceName: 'CT Mirror',
      sourceUrl:
        'https://ctmirror.org/2026/05/16/lamont-clinches-ct-democratic-party-endorsement-but-will-face-primary/',
      publishedAt: '2026-05-16',
      summary:
        'Gov. Ned Lamont secured the Democratic convention endorsement, but state Rep. Josh Elliott won enough delegate support to force an August primary.',
      race: 'governor',
    },
    {
      id: 'ct-headline-3',
      title: 'Connecticut Gov. Lamont faces primary challenge for first time in nearly 50 years',
      sourceName: 'WFSB',
      sourceUrl:
        'https://www.wfsb.com/2026/05/18/connecticut-gov-lamont-faces-primary-challenge-first-time-nearly-50-years/',
      publishedAt: '2026-05-18',
      race: 'governor',
    },
    {
      id: 'ct-headline-4',
      title: 'Lamont leads Elliott by 21 points in tightening primary race',
      sourceName: 'CT Mirror',
      sourceUrl: 'https://ctmirror.org/2026/07/29/governor-ct-poll-lamont-elliott/',
      publishedAt: '2026-07-29',
      summary:
        'A Change Research poll for Impact CT found Gov. Ned Lamont leading state Rep. Josh Elliott 48%–27% among likely Democratic primary voters.',
      race: 'governor',
    },
  ],
}
