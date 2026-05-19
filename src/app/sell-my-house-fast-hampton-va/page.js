/**
 * app/sell-my-house-fast-hampton-va/page.js
 * Target keywords: sell my house fast hampton va, cash home buyers hampton va
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Hampton VA | Every Option — Dan White',
  description: 'Sell your Hampton home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-hampton-va' },
  openGraph: {
    title: 'Sell My House Fast in Hampton VA | Every Option — Dan White',
    description: 'Sell your Hampton home fast and walk away with the most money your situation allows. Free consultation, no pressure.',
    url: 'https://virginiahomeoptions.com/sell-my-house-fast-hampton-va',
  },
};

export default async function HamptonPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Hampton', 'Hampton City');

  const config = {
    slug: 'sell-my-house-fast-hampton-va',
    city: 'Hampton',
    county: 'Hampton City',
    type: 'city',
    h1: 'Sell Your <em>Hampton</em> Home Fast — Every Option on the Table',
    heroSub: 'Hampton is the oldest continuously English-speaking settlement in America — and today it is home to Langley Air Force Base, NASA Langley, and a real estate market shaped by decades of military and federal employment. Investor demand in Hampton is strong, particularly in older neighborhoods with renovation upside. Dan White covers all of Hampton.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Military PCS expertise — Langley AFB, JEB Little Creek',
      'All Hampton neighborhoods covered',
      'Free consultation · No pressure · Any condition',
    ],
    faqs: [
      {
        q: 'I have PCS orders from Langley AFB — how fast can I sell in Hampton?',
        a: 'Cash buyers close in 7 to 21 days in Hampton. Military relocation from Langley is one of the most common situations I work through in this market. Tell me your report date and I structure the sale around it.',
      },
      {
        q: 'Is Hampton a good market for selling as-is?',
        a: 'Hampton has consistent investor demand — the older housing stock and price points relative to Virginia Beach attract renovation investors actively. As-is cash sales move well in Hampton.',
      },
      {
        q: 'What Hampton neighborhoods have the strongest buyer demand?',
        a: 'Wythe, Phoebus, Buckroe Beach, Aberdeen Road corridor, and communities near Langley all have active buyer interest. Each neighborhood has slightly different buyer profiles — I know which buyers want which areas.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
