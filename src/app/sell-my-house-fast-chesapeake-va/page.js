/**
 * app/sell-my-house-fast-chesapeake-va/page.js
 * Target keywords: sell my house fast chesapeake va, cash home buyers chesapeake va
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Chesapeake VA | Every Option — Dan White',
  description: 'Sell your Chesapeake home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-chesapeake-va' },
  openGraph: {
    title: 'Sell My House Fast in Chesapeake VA | Every Option — Dan White',
    description: 'Sell your Chesapeake home fast and walk away with the most money your situation allows. Free consultation, no pressure.',
    url: 'https://virginiahomeoptions.com/sell-my-house-fast-chesapeake-va',
  },
};

export default async function ChesapeakePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Chesapeake', 'Chesapeake City');

  const config = {
    slug: 'sell-my-house-fast-chesapeake-va',
    city: 'Chesapeake',
    county: 'Chesapeake City',
    type: 'city',
    h1: 'Sell Your <em>Chesapeake</em> Home Fast — Every Option on the Table',
    heroSub: 'Chesapeake is one of Virginia\'s largest cities by land area — spanning suburban communities like Great Bridge, Greenbrier, and Deep Creek to rural areas in the southern part of the city. Strong family-friendly reputation and consistent demand make Chesapeake one of the better Hampton Roads markets for sellers. Dan White covers all of Chesapeake.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'All Chesapeake areas — Great Bridge, Greenbrier, Deep Creek, and more',
      'Active investor and traditional buyer networks',
      'Free consultation · No pressure · Any condition',
    ],
    faqs: [
      {
        q: 'Is Chesapeake a strong seller market in Hampton Roads?',
        a: 'Chesapeake consistently performs well relative to other Hampton Roads cities — strong school reputation and suburban character attract family buyers. Live data is in the snapshot above.',
      },
      {
        q: 'Can I sell a Chesapeake home as-is without repairs?',
        a: 'Yes. Cash buyers and as-is MLS listings both work in Chesapeake. Investor demand across Hampton Roads reaches all Chesapeake communities.',
      },
      {
        q: 'What Chesapeake neighborhoods have the strongest buyer demand?',
        a: 'Great Bridge, Greenbrier, and the Battlefield Boulevard corridor consistently attract strong buyer interest. Deep Creek and the more rural southern Chesapeake communities have their own active buyer pool.',
      },
      {
        q: 'How fast can I close on a Chesapeake home?',
        a: 'Cash buyers close in 7 to 21 days. As-is MLS listings in Chesapeake have been moving in 2 to 4 weeks in current market conditions.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
