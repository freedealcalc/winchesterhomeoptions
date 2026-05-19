/**
 * app/sell-my-house-fast-salem-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Salem VA | Every Option — Dan White',
  description: 'Sell your Salem home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-salem-va' },
  openGraph: { title: 'Sell My House Fast in Salem VA', description: 'Sell your Salem home fast and walk away with the most money. Free consultation.', url: 'https://virginiahomeoptions.com/sell-my-house-fast-salem-va' },
};

export default async function SalemPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Salem', 'Salem City');
  const config = {
    slug: 'sell-my-house-fast-salem-va',
    city: 'Salem', county: 'Salem City', type: 'city',
    h1: 'Sell Your <em>Salem</em> Home Fast — Every Option on the Table',
    heroSub: 'Salem is an independent city adjacent to Roanoke — a compact, well-established community with strong schools, Roanoke College, and consistent buyer demand. The older housing stock creates renovation opportunities that investor buyers actively seek. Dan White covers all of Salem.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Salem and all surrounding Roanoke metro communities', 'Active investor buyer network', 'Free consultation · No pressure · Any condition'],
    faqs: [
      { q: 'Is Salem a good market for sellers?', a: 'Salem consistently performs well in the Roanoke metro — strong school reputation and community character attract steady buyer demand. Live data is in the snapshot above.' },
      { q: 'Can I sell a Salem home as-is?', a: 'Yes. Cash buyers and as-is MLS listings both work in Salem. Investor demand in the Roanoke metro reaches all Salem communities.' },
      { q: 'How fast can I sell in Salem?', a: 'Cash buyers close in 7 to 21 days. As-is MLS listings in the Roanoke metro have been moving in 2 to 4 weeks in current conditions.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
