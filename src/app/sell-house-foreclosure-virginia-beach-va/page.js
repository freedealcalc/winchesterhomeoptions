/**
 * app/sell-house-foreclosure-virginia-beach-va/page.js
 * Target keywords: sell house before foreclosure virginia beach va, stop foreclosure virginia beach
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Before Foreclosure in Virginia Beach VA | Stop the Clock',
  description: 'Sell your Virginia Beach home fast and walk away with the most money your situation allows — even facing foreclosure. Dan White goes over every option so you protect your credit and equity. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-house-foreclosure-virginia-beach-va' },
  openGraph: {
    title: 'Sell Your House Before Foreclosure in Virginia Beach VA',
    description: 'Facing foreclosure in Virginia Beach? You have more options than you think. Dan White walks you through every path. Free consultation.',
    url: 'https://virginiahomeoptions.com/sell-house-foreclosure-virginia-beach-va',
  },
};

export default async function VirginiaBeachForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Virginia Beach', 'Virginia Beach City');

  const config = {
    slug: 'sell-house-foreclosure-virginia-beach-va',
    city: 'Virginia Beach',
    county: 'Virginia Beach City',
    type: 'city',
    h1: 'Facing Foreclosure in Virginia Beach? <em>You Still Have Options.</em>',
    heroSub: 'Virginia Beach homeowners facing foreclosure often have more equity — and more time — than they realize. Virginia\'s non-judicial process moves fast, but you can sell right up to the auction date. Virginia Beach\'s strong market means investor buyers close quickly. Dan White has helped homeowners here stop foreclosure and protect their financial future.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Close in as few as 7 days — fast enough to stop foreclosure',
      'Virginia Beach investor network — active and motivated buyers',
      'Confidential · No judgment · Free consultation',
    ],
    faqs: [
      {
        q: 'Can I sell my Virginia Beach home to stop foreclosure?',
        a: 'Yes — in Virginia you retain the right to sell right up to the foreclosure sale date. A fast cash closing stops the process entirely. Tell me your sale date and I will tell you immediately whether we have enough time.',
      },
      {
        q: 'How fast can I close in Virginia Beach to beat a foreclosure deadline?',
        a: 'Cash buyers close in 7 to 14 days in Virginia Beach in most cases. Virginia Beach has strong investor activity — the right buyer closes fast.',
      },
      {
        q: 'What happens to my equity if foreclosure proceeds in Virginia Beach?',
        a: 'Most of it disappears. Foreclosure auctions recover the lender balance — equity above that is consumed by penalties, legal fees, and auction dynamics. Selling before foreclosure captures whatever equity remains.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
