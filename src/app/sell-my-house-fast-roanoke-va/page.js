/**
 * app/sell-my-house-fast-roanoke-va/page.js
 * Target keywords: sell my house fast roanoke va, cash home buyers roanoke va
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Roanoke VA | Every Option — Dan White',
  description: 'Sell your Roanoke home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-roanoke-va' },
  openGraph: {
    title: 'Sell My House Fast in Roanoke VA | Every Option — Dan White',
    description: 'Sell your Roanoke home fast and walk away with the most money your situation allows. Free consultation, no pressure.',
    url: 'https://virginiahomeoptions.com/sell-my-house-fast-roanoke-va',
  },
};

export default async function RoanokePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Roanoke', 'Roanoke City');

  const config = {
    slug: 'sell-my-house-fast-roanoke-va',
    city: 'Roanoke',
    county: 'Roanoke City',
    type: 'city',
    h1: 'Sell Your <em>Roanoke</em> Home Fast — Every Option on the Table',
    heroSub: 'Roanoke is the anchor city of the Blue Ridge metro — a market shaped by healthcare, manufacturing, and a growing outdoor recreation economy. The older housing stock throughout Roanoke City creates strong investor demand for renovation properties. Dan White covers all of Roanoke and the surrounding metro.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Roanoke City and Roanoke County covered',
      'Active investor buyer network — strong renovation demand',
      'Free consultation · No pressure · Any condition',
    ],
    faqs: [
      {
        q: 'Is Roanoke a good market for selling as-is?',
        a: 'Yes — Roanoke has strong investor demand, particularly in older city neighborhoods where renovation upside is significant. Cash buyers are active across all Roanoke City communities. Live data is above.',
      },
      {
        q: 'What Roanoke neighborhoods have the most investor activity?',
        a: 'South Roanoke, Old Southwest, Raleigh Court, Grandin Village, and older communities throughout the city attract renovation investors. Each neighborhood has its own buyer profile — I know which buyers want which areas.',
      },
      {
        q: 'How fast can I sell in Roanoke?',
        a: 'Cash buyers close in 7 to 21 days. As-is MLS listings in Roanoke\'s current market move in 2 to 4 weeks depending on price and condition.',
      },
      {
        q: 'Can I sell a Roanoke home that needs major repairs?',
        a: 'Yes. Roanoke\'s older housing stock means renovation investors are actively looking for exactly that. No repairs required before selling.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
