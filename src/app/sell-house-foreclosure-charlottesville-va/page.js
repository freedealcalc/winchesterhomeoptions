/**
 * app/sell-house-foreclosure-charlottesville-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Before Foreclosure in Charlottesville VA | Stop the Clock',
  description: 'Sell your Charlottesville home fast and walk away with the most money your situation allows — even facing foreclosure. Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-house-foreclosure-charlottesville-va' },
  openGraph: { title: 'Sell Your House Before Foreclosure in Charlottesville VA', description: 'Facing foreclosure in Charlottesville? Dan White walks you through every path. Free consultation.', url: 'https://virginiahomeoptions.com/sell-house-foreclosure-charlottesville-va' },
};

export default async function CharlottesvilleForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Charlottesville', 'Charlottesville City');
  const config = {
    slug: 'sell-house-foreclosure-charlottesville-va',
    city: 'Charlottesville', county: 'Charlottesville City', type: 'city',
    h1: 'Facing Foreclosure in Charlottesville? <em>You Still Have Options.</em>',
    heroSub: 'Charlottesville homeowners facing foreclosure have more runway than they often realize. Virginia law gives you the right to sell right up to the foreclosure sale date. Charlottesville\'s active market means cash buyers can close fast. Dan White has helped homeowners here stop foreclosure and walk away with money.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Close in as few as 7 days — fast enough to stop most foreclosures', 'Charlottesville area investor network', 'Confidential · No judgment · Free consultation'],
    faqs: [
      { q: 'Can I sell my Charlottesville home while in foreclosure?', a: 'Yes — in Virginia you can sell right up to the foreclosure sale date. Tell me your deadline and I will tell you immediately if we have enough time.' },
      { q: 'How fast can I close in Charlottesville to beat a foreclosure deadline?', a: 'Cash buyers close in 7 to 14 days in most cases. Charlottesville has active investor interest — closings move quickly when the property is priced right.' },
      { q: 'What if I owe more than my Charlottesville home is worth?', a: 'A short sale is the path — the lender agrees to accept less than full payoff. Far better than foreclosure for your credit. I can walk you through how it works.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
