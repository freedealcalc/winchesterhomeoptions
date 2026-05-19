/**
 * app/sell-my-house-fast-virginia-beach-va/page.js
 * Target keywords: sell my house fast virginia beach va, cash home buyers virginia beach va
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Virginia Beach VA | Every Option — Dan White',
  description: 'Sell your Virginia Beach home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-virginia-beach-va' },
  openGraph: {
    title: 'Sell My House Fast in Virginia Beach VA | Every Option — Dan White',
    description: 'Sell your Virginia Beach home fast and walk away with the most money your situation allows. Free consultation, no pressure.',
    url: 'https://virginiahomeoptions.com/sell-my-house-fast-virginia-beach-va',
  },
};

export default async function VirginiaBeachPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Virginia Beach', 'Virginia Beach City');

  const config = {
    slug: 'sell-my-house-fast-virginia-beach-va',
    city: 'Virginia Beach',
    county: 'Virginia Beach City',
    type: 'city',
    h1: 'Sell Your <em>Virginia Beach</em> Home Fast — Every Option on the Table',
    heroSub: 'Virginia Beach is Virginia\'s largest city by population — a market that spans oceanfront condos and resort area properties to suburban neighborhoods in the Great Neck, Kempsville, and Chesapeake Beach corridors. Military families from Naval Air Station Oceana and surrounding installations drive constant buying and selling activity. Dan White covers all of Virginia Beach.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Military PCS expertise — NAS Oceana, Joint Expeditionary Base',
      'All Virginia Beach areas covered — resort to suburban',
      'Free consultation · No pressure · Any condition',
    ],
    faqs: [
      {
        q: 'Is Virginia Beach a strong seller market right now?',
        a: 'Virginia Beach benefits from military demand, coastal desirability, and strong job market fundamentals. Live market data is in the snapshot above — conditions vary by neighborhood.',
      },
      {
        q: 'I have PCS orders from NAS Oceana — how fast can I sell?',
        a: 'Cash buyers close in 7 to 21 days in Virginia Beach. Military relocation is one of the most common situations I handle in this market. Tell me your report date first and I build the strategy around it.',
      },
      {
        q: 'Can I sell a Virginia Beach oceanfront or resort area property as-is?',
        a: 'Yes — resort area and oceanfront properties have their own buyer pool separate from the suburban market. Investment buyers and vacation rental investors actively seek these properties regardless of condition.',
      },
      {
        q: 'What about selling a Virginia Beach home in a flood zone?',
        a: 'Very common in Virginia Beach. Flood zone properties require specific buyer knowledge — I work with investors and buyers who understand coastal Virginia flood zone pricing and buy these properties regularly.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
