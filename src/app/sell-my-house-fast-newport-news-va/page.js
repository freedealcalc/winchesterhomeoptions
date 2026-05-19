/**
 * app/sell-my-house-fast-newport-news-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Newport News VA | Every Option — Dan White',
  description: 'Sell your Newport News home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-newport-news-va' },
  openGraph: { title: 'Sell My House Fast in Newport News VA', description: 'Sell your Newport News home fast. Free consultation.', url: 'https://virginiahomeoptions.com/sell-my-house-fast-newport-news-va' },
};

export default async function NewportNewsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Newport News', 'Newport News City');
  const config = {
    slug: 'sell-my-house-fast-newport-news-va',
    city: 'Newport News', county: 'Newport News City', type: 'city',
    h1: 'Sell Your <em>Newport News</em> Home Fast — Every Option on the Table',
    heroSub: 'Newport News anchors the Virginia Peninsula — home to Huntington Ingalls Newport News Shipbuilding, the largest private employer in Virginia, and significant military presence at Fort Eustis and Langley-Eustis. The constant workforce turnover creates both motivated sellers and active buyers. Dan White covers all of Newport News.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Military and shipyard worker relocation expertise', 'All Newport News neighborhoods covered', 'Free consultation · No pressure · Any condition'],
    faqs: [
      { q: 'Is Newport News a good market for sellers?', a: 'Newport News has consistent demand driven by the shipyard workforce and military presence. Older neighborhoods offer renovation upside that investors actively seek. Live data is above.' },
      { q: 'Can I sell a Newport News home as-is?', a: 'Yes. Newport News has strong investor demand particularly in older neighborhoods. Cash buyers purchase as-is without requiring repairs.' },
      { q: 'I am relocating from Newport News for work — how fast can I sell?', a: 'Cash buyers close in 7 to 21 days. Tell me your start date and I structure the strategy around it. Remote signing is fully available.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
