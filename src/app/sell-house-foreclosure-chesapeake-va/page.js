/**
 * app/sell-house-foreclosure-chesapeake-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Before Foreclosure in Chesapeake VA | Stop the Clock',
  description: 'Sell your Chesapeake home fast and walk away with the most money your situation allows — even facing foreclosure. Dan White goes over every option. Free consultation.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-house-foreclosure-chesapeake-va' },
  openGraph: { title: 'Sell Your House Before Foreclosure in Chesapeake VA', description: 'Facing foreclosure in Chesapeake? Dan White walks you through every path. Free consultation.', url: 'https://virginiahomeoptions.com/sell-house-foreclosure-chesapeake-va' },
};

export default async function ChesapeakeForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Chesapeake', 'Chesapeake City');
  const config = {
    slug: 'sell-house-foreclosure-chesapeake-va',
    city: 'Chesapeake', county: 'Chesapeake City', type: 'city',
    h1: 'Facing Foreclosure in Chesapeake? <em>You Still Have Options.</em>',
    heroSub: 'Chesapeake homeowners facing foreclosure often have more equity — and more time — than they realize. Virginia law lets you sell right up to the sale date. Chesapeake\'s strong market means investor buyers close quickly. Dan White has helped homeowners here stop foreclosure and protect their financial future.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Close in as few as 7 days', 'Hampton Roads investor network', 'Confidential · No judgment · Free consultation'],
    faqs: [
      { q: 'Can I sell my Chesapeake home to stop foreclosure?', a: 'Yes — in Virginia you retain the right to sell right up to the foreclosure sale date. Tell me your sale date and I will tell you immediately whether we have enough time.' },
      { q: 'How fast can I close in Chesapeake to beat a foreclosure deadline?', a: 'Cash buyers close in 7 to 14 days in Chesapeake. Strong investor activity in Hampton Roads keeps closings moving.' },
      { q: 'What if I owe more than my Chesapeake home is worth?', a: 'Short sale is the path. Far better than foreclosure for your credit and financial future. I can walk you through how it works.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
