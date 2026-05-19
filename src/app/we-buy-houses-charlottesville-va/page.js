/**
 * app/we-buy-houses-charlottesville-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Charlottesville VA | Every Option, Not Just One Cash Offer',
  description: 'Looking for cash home buyers in Charlottesville VA? Sell your home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/we-buy-houses-charlottesville-va' },
  openGraph: { title: 'We Buy Houses Charlottesville VA | Every Option', description: 'Cash buyers in Charlottesville VA? Dan White shows you every option — not just one offer. Free consultation.', url: 'https://virginiahomeoptions.com/we-buy-houses-charlottesville-va' },
};

export default async function WeBuyHousesCharlottesvillePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Charlottesville', 'Charlottesville City');
  const config = {
    slug: 'we-buy-houses-charlottesville-va',
    city: 'Charlottesville', county: 'Charlottesville City', type: 'city',
    h1: 'We Buy Houses in Charlottesville VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Charlottesville\'s desirable market means as-is MLS listings often outperform private cash offers significantly. Dan White puts your property in front of competing investors and shows you every option so you know which one actually serves you best.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Charlottesville and Albemarle County investor network', 'Every option explained — not just cash', 'Free consultation · No pressure'],
    faqs: [
      { q: 'How fast do cash buyers close in Charlottesville?', a: 'Typically 7 to 21 days. Charlottesville has active investor interest particularly in older homes and properties with renovation upside.' },
      { q: 'Is it better to sell to a cash buyer or list in Charlottesville?', a: 'In Charlottesville\'s strong market, as-is MLS listings often produce significantly more than private cash offers. I show you both numbers honestly.' },
      { q: 'Do you cover rural Albemarle County properties too?', a: 'Yes — farms, rural estates, and properties with acreage in Albemarle County have their own buyer pool that I can access.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
