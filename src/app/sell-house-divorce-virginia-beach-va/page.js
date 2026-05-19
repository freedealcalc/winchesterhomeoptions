/**
 * app/sell-house-divorce-virginia-beach-va/page.js
 * Target keywords: selling house during divorce virginia beach va, divorce home sale virginia beach
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House During Divorce in Virginia Beach VA | Every Option',
  description: 'Sell your Virginia Beach home fast during divorce and walk away with the most money your situation allows. Dan White works with both parties professionally. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-house-divorce-virginia-beach-va' },
  openGraph: {
    title: 'Selling a House During Divorce in Virginia Beach VA',
    description: 'Selling a home during divorce in Virginia Beach? Dan White handles the transaction so both parties walk away with the most money. Free consultation.',
    url: 'https://virginiahomeoptions.com/sell-house-divorce-virginia-beach-va',
  },
};

export default async function VirginiaBeachDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Virginia Beach', 'Virginia Beach City');

  const config = {
    slug: 'sell-house-divorce-virginia-beach-va',
    city: 'Virginia Beach',
    county: 'Virginia Beach City',
    type: 'city',
    h1: 'Selling Your Virginia Beach Home During Divorce — <em>Done Right.</em>',
    heroSub: 'Divorce is hard enough without the house becoming a battlefield. Virginia Beach military divorces add another layer of complexity — PCS orders, VA loans, and timelines that do not wait for court processes. Dan White handles the transaction professionally, works with both parties and their attorneys, and gets the most money from the sale so there is the most to divide.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Military divorce expertise — VA loans, PCS timelines, BAH implications',
      'Works with both parties and their attorneys',
      'Confidential · No judgment · Free consultation',
    ],
    faqs: [
      {
        q: 'How does a VA loan complicate a divorce home sale in Virginia Beach?',
        a: 'The non-military spouse typically cannot keep the home without the veteran\'s VA entitlement being restored, which requires either paying off the VA loan through sale or refinancing into a conventional loan. Selling and paying off the VA loan at closing is the cleanest path for most military divorces.',
      },
      {
        q: 'Can we sell a Virginia Beach home as-is during divorce?',
        a: 'Yes. Cash buyers, as-is MLS listings, and wholetail all work without repairs or staging. When both parties want to close a chapter, as-is is often the fastest and least contentious path.',
      },
      {
        q: 'What if one spouse has already received PCS orders during the divorce?',
        a: 'Military PCS during divorce is one of the most complex situations I work through in Virginia Beach. We structure the sale around the report date while coordinating with both parties and their attorneys on the divorce proceedings.',
      },
      {
        q: 'Do both spouses have to be present to sell the Virginia Beach home?',
        a: 'Not physically — both must sign documents, but remote signing is fully available. When one spouse is deployed or has already relocated, we coordinate remotely.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
