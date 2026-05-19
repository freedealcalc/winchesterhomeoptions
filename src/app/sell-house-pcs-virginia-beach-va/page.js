/**
 * app/sell-house-pcs-virginia-beach-va/page.js
 * Target keywords: sell house pcs virginia beach va, pcs orders nas oceana sell home
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Fast for PCS in Virginia Beach VA | Military Relocation',
  description: 'PCS orders from NAS Oceana or JEB Little Creek? Sell your Virginia Beach home fast and walk away with the most money your timeline allows. Dan White structures the sale around your report date. Free consultation.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-house-pcs-virginia-beach-va' },
  openGraph: {
    title: 'Sell Your House Fast for PCS in Virginia Beach VA',
    description: 'PCS orders out of Virginia Beach? Dan White structures the sale around your report date. Free consultation.',
    url: 'https://virginiahomeoptions.com/sell-house-pcs-virginia-beach-va',
  },
};

export default async function VirginiaBeachPcsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Virginia Beach', 'Virginia Beach City');

  const config = {
    slug: 'sell-house-pcs-virginia-beach-va',
    city: 'Virginia Beach',
    county: 'Virginia Beach City',
    type: 'city',
    h1: 'PCS Orders Out of Virginia Beach? <em>Sell Fast. Keep the Most Money.</em>',
    heroSub: 'Virginia Beach military families — NAS Oceana, JEB Little Creek, Dam Neck, and others — face the same PCS pressure every cycle: a hard report date and a home that needs to close. Dan White understands military timelines, VA loans, and how to structure a sale that works around your orders without leaving money behind.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'NAS Oceana, JEB Little Creek PCS expertise',
      'VA loan assumption available when it makes sense',
      'Remote signing — close from your new duty station',
    ],
    faqs: [
      {
        q: 'How fast can I sell my Virginia Beach home with PCS orders?',
        a: 'Cash buyers close in 7 to 21 days. Virginia Beach has strong buyer demand. Tell me your report date and I structure the strategy around it.',
      },
      {
        q: 'Should I sell or rent my Virginia Beach home on PCS?',
        a: 'Virginia Beach has a strong military rental market — particularly near the installations. I give you the honest math on both paths so you make the right call.',
      },
      {
        q: 'What about my VA loan when I PCS from Virginia Beach?',
        a: 'VA loans pay off at closing — your entitlement restores for your next duty station. If your rate is significantly below current market rates, VA assumption may also be worth exploring as a selling advantage.',
      },
      {
        q: 'Can I close remotely after leaving Virginia Beach?',
        a: 'Yes. Remote signing is fully available. I coordinate everything locally and you sign from wherever your orders take you.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
