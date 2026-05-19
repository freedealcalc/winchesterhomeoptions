/**
 * app/sell-house-pcs-fredericksburg-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Fast for PCS in Fredericksburg VA | Military Relocation',
  description: 'PCS orders out of the Fredericksburg area? Sell your home fast and walk away with the most money your timeline allows. Dan White structures the sale around your report date. Free consultation.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-house-pcs-fredericksburg-va' },
  openGraph: { title: 'Sell Your House Fast for PCS in Fredericksburg VA', description: 'PCS orders out of Fredericksburg? Dan White structures the sale around your report date. Free consultation.', url: 'https://virginiahomeoptions.com/sell-house-pcs-fredericksburg-va' },
};

export default async function FredericksburgPcsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Fredericksburg', 'Fredericksburg City');
  const config = {
    slug: 'sell-house-pcs-fredericksburg-va',
    city: 'Fredericksburg', county: 'Fredericksburg City', type: 'city',
    h1: 'PCS Orders Out of Fredericksburg? <em>Sell Fast. Keep the Most Money.</em>',
    heroSub: 'The Fredericksburg corridor has significant military population — Quantico Marines, Fort A.P. Hill, and commuters to both Pentagon and Dahlgren. PCS cycles create motivated sellers who need to close fast without leaving money behind. Dan White understands military timelines and structures sales around report dates.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Quantico, Fort A.P. Hill PCS expertise', 'Remote signing available', 'Free consultation · No pressure'],
    faqs: [
      { q: 'How fast can I sell in Fredericksburg with PCS orders?', a: 'Cash buyers close in 7 to 21 days. Tell me your report date and I structure the strategy around it.' },
      { q: 'Should I sell or rent my Fredericksburg home on PCS?', a: 'Fredericksburg has rental demand but also a strong seller market. I give you the honest math on both — you decide.' },
      { q: 'Can I close remotely after leaving Fredericksburg?', a: 'Yes — remote signing is standard. I coordinate locally and you sign from wherever your orders take you.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
