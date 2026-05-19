/**
 * app/sell-my-house-fast-norfolk-va/page.js
 * Target keywords: sell my house fast norfolk va, cash home buyers norfolk va
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Norfolk VA | Every Option — Dan White',
  description: 'Sell your Norfolk home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-norfolk-va' },
  openGraph: {
    title: 'Sell My House Fast in Norfolk VA | Every Option — Dan White',
    description: 'Sell your Norfolk home fast and walk away with the most money your situation allows. Free consultation, no pressure.',
    url: 'https://virginiahomeoptions.com/sell-my-house-fast-norfolk-va',
  },
};

export default async function NorfolkPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Norfolk', 'Norfolk City');

  const config = {
    slug: 'sell-my-house-fast-norfolk-va',
    city: 'Norfolk',
    county: 'Norfolk City',
    type: 'city',
    h1: 'Sell Your <em>Norfolk</em> Home Fast — Every Option on the Table',
    heroSub: 'Norfolk is the anchor city of Hampton Roads — home to Naval Station Norfolk, the largest naval base in the world, and a diverse real estate market that spans historic neighborhoods like Ghent and Larchmont to older working-class communities throughout the city. Investor demand in Norfolk is consistently strong. Dan White covers all of Norfolk.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Military PCS relocation expertise — Naval Station Norfolk',
      'All Norfolk neighborhoods covered — Ghent, Larchmont, Ocean View, and more',
      'Free consultation · No pressure · Any condition',
    ],
    faqs: [
      {
        q: 'Is Norfolk a good market for selling as-is right now?',
        a: 'Norfolk has strong investor demand — particularly in older neighborhoods where renovation upside is significant. As-is listings and cash sales both move well. Live market data is in the snapshot above.',
      },
      {
        q: 'I have PCS orders out of Naval Station Norfolk — how fast can I close?',
        a: 'Cash buyers close in 7 to 21 days in Norfolk. I structure the sale around your report date — if you have a hard deadline, tell me that first and we build the strategy backward from it.',
      },
      {
        q: 'What if my Norfolk home is in a flood zone?',
        a: 'Flood zone properties are common throughout Norfolk and have their own active buyer pool. Investors familiar with coastal Virginia understand flood zone pricing and buy these properties regularly.',
      },
      {
        q: 'Do you cover all Norfolk neighborhoods?',
        a: 'Yes — Ghent, Larchmont, Edgewater, Ocean View, Wards Corner, Berkley, Campostella, and all neighborhoods throughout the city.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
