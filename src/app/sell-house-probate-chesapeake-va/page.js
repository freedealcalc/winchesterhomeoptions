/**
 * app/sell-house-probate-chesapeake-va/page.js
 * Target keywords: sell house probate chesapeake va, probate real estate chesapeake virginia
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House in Probate in Chesapeake VA | Every Option Explained',
  description: 'Sell your Chesapeake probate home fast and walk away with the most money your situation allows. Dan White coordinates with estate attorneys and executors. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-house-probate-chesapeake-va' },
  openGraph: {
    title: 'Selling a House in Probate in Chesapeake VA',
    description: 'Navigating probate in Chesapeake? Dan White works with executors and estate attorneys to get the estate the most money. Free consultation.',
    url: 'https://virginiahomeoptions.com/sell-house-probate-chesapeake-va',
  },
};

export default async function ChesapeakeProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Chesapeake', 'Chesapeake City');

  const config = {
    slug: 'sell-house-probate-chesapeake-va',
    city: 'Chesapeake',
    county: 'Chesapeake City',
    type: 'city',
    h1: 'Selling a Chesapeake Home Through Probate — <em>Every Option Explained.</em>',
    heroSub: 'Chesapeake probate properties — particularly in established neighborhoods like Great Bridge and Deep Creek — often involve older homes that have been in families for decades. Dan White works alongside estate attorneys through the Chesapeake Circuit Court process and gets estate properties sold for the most money with the least friction.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Chesapeake Circuit Court probate process familiar',
      'Works with executors and estate attorneys',
      'Buy as-is — any condition · Free consultation',
    ],
    faqs: [
      {
        q: 'Can I sell a Chesapeake home while it is in probate?',
        a: 'In many cases yes. Virginia allows executors with proper authority to list and sell during probate. The Chesapeake Circuit Court may need to confirm the sale price before closing, which I can support with a market analysis.',
      },
      {
        q: 'How long does probate take in Chesapeake before I can sell?',
        a: 'Simple Chesapeake estates can move through probate in 6 to 12 months. More complex estates take longer. You do not necessarily have to wait — listing during probate and closing after court confirmation is often an option.',
      },
      {
        q: 'The Chesapeake probate property needs significant repairs — what are my options?',
        a: 'Chesapeake has active investor demand, and probate properties are commonly sold as-is. Cash buyers purchase without requiring repairs or cleanup from the estate.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
