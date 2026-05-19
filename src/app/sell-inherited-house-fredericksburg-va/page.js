/**
 * app/sell-inherited-house-fredericksburg-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Fredericksburg VA | Every Option Explained',
  description: 'Sell your inherited Fredericksburg home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-inherited-house-fredericksburg-va' },
  openGraph: { title: 'Sell an Inherited House in Fredericksburg VA', description: 'Inherited a home in Fredericksburg? Dan White walks you through every option. Free consultation.', url: 'https://virginiahomeoptions.com/sell-inherited-house-fredericksburg-va' },
};

export default async function FredericksburgInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Fredericksburg', 'Fredericksburg City');
  const config = {
    slug: 'sell-inherited-house-fredericksburg-va',
    city: 'Fredericksburg', county: 'Fredericksburg City', type: 'city',
    h1: 'Inherited a Home in Fredericksburg? <em>Here Is What to Do Next.</em>',
    heroSub: 'Fredericksburg and the surrounding corridor have a mix of historic in-town properties, suburban homes in Stafford and Spotsylvania, and rural properties in King George and Caroline. Dan White works through inherited property situations across the entire Fredericksburg corridor.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Works with Fredericksburg area estate attorneys', 'Buy as-is — any condition · Full corridor coverage', 'Free consultation'],
    faqs: [
      { q: 'Can I sell an inherited Fredericksburg home during probate?', a: 'Often yes. Virginia allows executors with proper authority to list and sell during probate. Fredericksburg Circuit Court may need to confirm the sale price in some cases.' },
      { q: 'What if the inherited property is in Stafford or Spotsylvania rather than Fredericksburg City?', a: 'Same process — I cover the full corridor including Stafford, Spotsylvania, King George, and Caroline counties.' },
      { q: 'The inherited Fredericksburg home needs significant work — what are my options?', a: 'Cash buyers and as-is MLS listings both work. Fredericksburg corridor has active investor demand particularly for properties with renovation upside.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
