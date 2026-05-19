/**
 * app/sell-house-foreclosure-fredericksburg-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Before Foreclosure in Fredericksburg VA | Stop the Clock',
  description: 'Sell your Fredericksburg home fast and walk away with the most money your situation allows — even facing foreclosure. Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-house-foreclosure-fredericksburg-va' },
  openGraph: { title: 'Sell Your House Before Foreclosure in Fredericksburg VA', description: 'Facing foreclosure in Fredericksburg? Dan White walks you through every path. Free consultation.', url: 'https://virginiahomeoptions.com/sell-house-foreclosure-fredericksburg-va' },
};

export default async function FredericksburgForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Fredericksburg', 'Fredericksburg City');
  const config = {
    slug: 'sell-house-foreclosure-fredericksburg-va',
    city: 'Fredericksburg', county: 'Fredericksburg City', type: 'city',
    h1: 'Facing Foreclosure in Fredericksburg? <em>You Still Have Options.</em>',
    heroSub: 'Fredericksburg homeowners facing foreclosure have more runway than they often realize. Virginia law lets you sell right up to the sale date — and Fredericksburg\'s active market means cash buyers close fast. Dan White has helped homeowners here stop foreclosure and walk away with money.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Close in as few as 7 days — fast enough to stop foreclosure', 'Fredericksburg corridor investor network', 'Confidential · No judgment · Free consultation'],
    faqs: [
      { q: 'Can I sell my Fredericksburg home while in foreclosure?', a: 'Yes — in Virginia you can sell right up to the foreclosure sale date. Tell me your deadline and I will tell you if we have enough time.' },
      { q: 'How fast can I close in Fredericksburg to stop foreclosure?', a: 'Cash buyers close in 7 to 14 days. Fredericksburg has active investor interest on the I-95 corridor.' },
      { q: 'What if I owe more than my Fredericksburg home is worth?', a: 'Short sale is the path — the lender agrees to accept less than full payoff. Far better than foreclosure for your credit.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
