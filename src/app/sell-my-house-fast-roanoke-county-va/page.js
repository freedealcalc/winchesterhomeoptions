/**
 * app/sell-my-house-fast-roanoke-county-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Roanoke County VA | Every Option — Dan White',
  description: 'Sell your Roanoke County home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-roanoke-county-va' },
  openGraph: { title: 'Sell My House Fast in Roanoke County VA', description: 'Sell your Roanoke County home fast and walk away with the most money. Free consultation.', url: 'https://virginiahomeoptions.com/sell-my-house-fast-roanoke-county-va' },
};

export default async function RoanokeCountyPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Roanoke County', 'Roanoke County');
  const config = {
    slug: 'sell-my-house-fast-roanoke-county-va',
    city: null, county: 'Roanoke County', type: 'county',
    h1: 'Sell Your <em>Roanoke County</em> Home Fast — Every Option on the Table',
    heroSub: 'Roanoke County surrounds the city and includes communities like Vinton, Cave Spring, Hollins, and the Blue Ridge corridor — a mix of suburban and rural properties with strong family buyer demand. Dan White covers all of Roanoke County.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Vinton, Cave Spring, Hollins, Blue Ridge — all covered', 'Active investor and traditional buyer networks', 'Free consultation · No pressure'],
    faqs: [
      { q: 'What communities in Roanoke County do you serve?', a: 'All of Roanoke County — Vinton, Cave Spring, Hollins, Blue Ridge, Catawba, and all unincorporated communities throughout the county.' },
      { q: 'Is Roanoke County a stronger market than Roanoke City?', a: 'Roanoke County generally has higher price points and stronger suburban buyer demand than the city. Both have active investor markets. Live data is above.' },
      { q: 'Can I sell a Roanoke County home as-is?', a: 'Yes. Cash buyers and as-is MLS listings both work throughout Roanoke County regardless of condition.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
