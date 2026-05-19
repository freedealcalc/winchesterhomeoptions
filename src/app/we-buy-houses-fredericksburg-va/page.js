/**
 * app/we-buy-houses-fredericksburg-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Fredericksburg VA | Every Option, Not Just One Cash Offer',
  description: 'Looking for cash home buyers in Fredericksburg VA? Sell your home fast and walk away with the most money. Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/we-buy-houses-fredericksburg-va' },
  openGraph: { title: 'We Buy Houses Fredericksburg VA | Every Option', description: 'Cash buyers in Fredericksburg VA? Dan White shows you every option. Free consultation.', url: 'https://virginiahomeoptions.com/we-buy-houses-fredericksburg-va' },
};

export default async function WeBuyHousesFredericksburgPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Fredericksburg', 'Fredericksburg City');
  const config = {
    slug: 'we-buy-houses-fredericksburg-va',
    city: 'Fredericksburg', county: 'Fredericksburg City', type: 'city',
    h1: 'We Buy Houses in Fredericksburg VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Fredericksburg\'s growing market means as-is MLS listings can outperform private cash offers significantly. Dan White puts your property in front of competing buyers and shows you every option so you walk away with the most money.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Fredericksburg corridor investor network', 'Every option — cash, MLS, wholetail', 'Free consultation · No pressure'],
    faqs: [
      { q: 'How fast do cash buyers close in Fredericksburg?', a: 'Typically 7 to 21 days on the I-95 corridor. Strong investor activity keeps closings moving.' },
      { q: 'Is it better to sell cash or MLS in Fredericksburg?', a: 'In Fredericksburg\'s growing market, as-is MLS listings often produce more than private cash offers. I show you both numbers honestly.' },
      { q: 'Do you cover Stafford and Spotsylvania too?', a: 'Yes — I already have pages for Stafford and Spotsylvania. The full corridor is covered.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
