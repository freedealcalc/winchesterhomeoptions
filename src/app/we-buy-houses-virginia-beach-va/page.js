/**
 * app/we-buy-houses-virginia-beach-va/page.js
 * Target keywords: we buy houses virginia beach va, cash home buyers virginia beach virginia
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Virginia Beach VA | Every Option, Not Just One Cash Offer',
  description: 'Looking for cash home buyers in Virginia Beach VA? Sell your Virginia Beach home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/we-buy-houses-virginia-beach-va' },
  openGraph: {
    title: 'We Buy Houses Virginia Beach VA | Every Option, Not Just One Offer',
    description: 'Cash buyers in Virginia Beach VA? Dan White connects you with competing investors and shows you every option. Free consultation.',
    url: 'https://virginiahomeoptions.com/we-buy-houses-virginia-beach-va',
  },
};

export default async function WeBuyHousesVirginiaBeachPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Virginia Beach', 'Virginia Beach City');

  const config = {
    slug: 'we-buy-houses-virginia-beach-va',
    city: 'Virginia Beach',
    county: 'Virginia Beach City',
    type: 'city',
    h1: 'We Buy Houses in Virginia Beach VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Virginia Beach has a large and active "we buy houses" market — but most of those companies make one offer and move on. Dan White puts your Virginia Beach property in front of a large pool of competing buyers and shows you every option so you make the most informed decision possible.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Large Virginia Beach investor network — real competition',
      'Military PCS relocation expertise',
      'Free consultation · No pressure',
    ],
    faqs: [
      {
        q: 'How fast do cash buyers close in Virginia Beach?',
        a: 'Typically 7 to 21 days. Virginia Beach has one of the more active investor markets in Hampton Roads — closings move quickly.',
      },
      {
        q: 'Is it better to sell to a cash buyer or list on MLS in Virginia Beach?',
        a: 'Depends on condition and timeline. Virginia Beach\'s strong market means as-is MLS listings often outperform private cash offers. I show you the honest numbers on both paths.',
      },
      {
        q: 'What if I have a VA loan on my Virginia Beach home?',
        a: 'VA loans pay off at closing like any mortgage. If your rate is low, VA loan assumption may be a marketing advantage that expands your buyer pool. I walk you through every angle.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
