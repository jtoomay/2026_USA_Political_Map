import type { StateElectionData } from '@/api/elections'

export const newMexico: StateElectionData = {
  slug: 'new-mexico',
  name: 'New Mexico',
  postalCode: 'NM',
  senate: {
    electionType: 'regular',
    currentParty: 'D',
    incumbent: { name: 'Ben Ray Luján', party: 'D' },
    status:
      'Luján won the June 2, 2026 Democratic primary over self-described democratic socialist Matt Dodson, 84.2% to 15.8%, and is seeking a second term. No Republican qualified for the primary ballot, so the state GOP turned to a write-in campaign; former oil-and-gas operator Larry Marker won that write-in primary. Libertarian Rhett Trappman, Forward Party nominee Bob Perls, and independents Cameron Chick and Mira O’Connell are also on the November ballot. Democrats have controlled every statewide office in New Mexico for years, and the last Republican to win a Senate race here was Pete Domenici in 2002.',
    candidates: [
      { name: 'Ben Ray Luján', party: 'D', incumbent: true, winProbability: 97 },
      { name: 'Larry Marker', party: 'R', incumbent: false, winProbability: 3 },
      { name: 'Rhett Trappman', party: 'I', incumbent: false, winProbability: 0 },
      { name: 'Bob Perls', party: 'I', incumbent: false, winProbability: 0 },
      { name: 'Cameron Chick', party: 'I', incumbent: false, winProbability: 0 },
      { name: 'Mira O’Connell', party: 'I', incumbent: false, winProbability: 0 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Senate ratings',
        sourceUrl: 'https://www.cookpolitical.com/ratings/senate-race-ratings',
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
        source: 'Inside Elections — New Mexico Senate 2026',
        sourceUrl: 'https://insideelections.com/election-year/2026/?state-district=nm&office=senate',
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
      'Open seat: Gov. Michelle Lujan Grisham is term-limited. Former Interior Secretary and ex-Rep. Deb Haaland won the June 2, 2026 Democratic primary over Bernalillo County DA Sam Bregman, 72.3% to 27.7%. Rio Rancho Mayor Gregg Hull won a three-way Republican primary with 47.0%, beating businessman Doug Turner and former Human Services Secretary Duke Rodriguez. Former Las Cruces Mayor Ken Miyagishima ended his independent bid and endorsed Hull. A mid-July Republican-sponsored poll showed the race unusually close for a state Democrats have dominated statewide.',
    candidates: [
      { name: 'Deb Haaland', party: 'D', incumbent: false, winProbability: 82 },
      { name: 'Gregg Hull', party: 'R', incumbent: false, winProbability: 17 },
    ],
    ratings: [
      {
        forecaster: 'Cook Political Report',
        rating: 'Safe',
        leaning: 'D',
        source: 'Cook Political Report — Governor ratings',
        sourceUrl: 'https://www.cookpolitical.com/ratings/governor-race-ratings',
      },
      {
        forecaster: "Sabato's Crystal Ball",
        rating: 'Safe',
        leaning: 'D',
        source: "Sabato's Crystal Ball — 2026 Governor ratings",
        sourceUrl: 'https://centerforpolitics.org/crystalball/2026-governor/',
      },
    ],
    polls: [
      {
        id: 'nm-governor-2026-07-15-mclaughlin',
        pollster: 'McLaughlin & Associates',
        dateConducted: '2026-07-15',
        sampleSize: 400,
        results: [
          { candidateName: 'Deb Haaland', percentage: 46 },
          { candidateName: 'Gregg Hull', percentage: 45 },
        ],
        sourceName: 'Wikipedia',
        sourceUrl: 'https://en.wikipedia.org/wiki/2026_New_Mexico_gubernatorial_election',
      },
    ],
  },
  house: {
    totalSeats: 3,
    democratSeats: 3,
    republicanSeats: 0,
    independentSeats: 0,
    majorityParty: 'D',
  },
  headlines: [
    {
      id: 'nm-headline-1',
      title: 'Sen. Ben Ray Lujan will face off against Republican write-in candidate Larry Marker in November',
      sourceName: 'KUNM',
      sourceUrl: 'https://www.kunm.org/NM-Senate-write-in-candidate-larry-marker-wins-primary-ben-ray-lujan',
      publishedAt: '2026-06-04',
      race: 'senate',
    },
    {
      id: 'nm-headline-2',
      title: 'GOP offers write-in hopeful for U.S. Senate',
      sourceName: 'Santa Fe New Mexican',
      sourceUrl: 'https://www.santafenewmexican.com/news/local_news/gop-offers-write-in-hopeful-for-u-s-senate/article_8ff41959-ac49-4712-be39-d8ac45816e1f.html',
      publishedAt: '2026-03-24',
      race: 'senate',
    },
    {
      id: 'nm-headline-3',
      title: 'Journal Poll: Ben Ray Luján holds commanding lead over Democratic challenger in U.S. Senate race',
      sourceName: 'Albuquerque Journal',
      sourceUrl: 'https://www.abqjournal.com/news/journal-poll-ben-ray-lujan-holds-commanding-lead-over-democratic-challenger-in-u-s-senate-race/3029771',
      publishedAt: '2026-04-27',
      race: 'senate',
    },
    {
      id: 'nm-headline-4',
      title: 'Journal Poll: Haaland holds solid lead over Bregman in hotly-contested gubernatorial primary race',
      sourceName: 'Albuquerque Journal',
      sourceUrl: 'https://www.abqjournal.com/news/journal-poll-haaland-holds-solid-lead-over-bregman-in-hotly-contested-gubernatorial-primary-race/3029283',
      publishedAt: '2026-04-27',
      race: 'governor',
    },
    {
      id: 'nm-headline-5',
      title: 'Former Las Cruces mayor Ken Miyagishima announces independent run for New Mexico governor',
      sourceName: 'KFOX-TV',
      sourceUrl: 'https://kfoxtv.com/news/local/ken-miyagishima-announces-independent-run-for-new-mexico-governor',
      publishedAt: '2026-02-02',
      race: 'governor',
    },
  ],
}
