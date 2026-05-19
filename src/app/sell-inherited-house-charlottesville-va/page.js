/**
 * app/sell-inherited-house-charlottesville-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Charlottesville VA | Every Option Explained',
  description: 'Sell your inherited Charlottesville home fast and walk away with the most money your situation allows. Dan White goes over every option — probate coordination, as-is sale, cash buyers. Free consultation.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-inherited-house-charlottesville-va' },
  openGraph: {
    title: 'Sell an Inherited House in Charlottesville VA',
    description: 'Inherited a home in Charlottesville? Dan White walks you through every option. Free consultation.',
    url: 'https://virginiahomeoptions.com/sell-inherited-house-charlottesville-va',
  },
};

export default async function CharlottesvilleInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Charlottesville', 'Charlottesville City');

  const config = {
    slug: 'sell-inherited-house-charlottesville-va',
    city: 'Charlottesville',
    county: 'Charlottesville City',
    type: 'city',
    h1: 'Inherited a Home in Charlottesville? <em>Here Is What to Do Next.</em>',
    heroSub: 'Charlottesville and Albemarle County inherited properties range from historic in-town homes to rural estates and farm properties in the surrounding countryside. Dan White has worked through inherited property situations in the Charlottesville metro and knows how to get the estate the most money — whether probate is complete or just starting.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Charlottesville Circuit Court probate process familiar',
      'Rural estates, farms, in-town homes — all handled',
      'Buy as-is — any condition · Free consultation',
    ],
    faqs: [
      { q: 'Can I sell an inherited Charlottesville home before probate closes?', a: 'Often yes. Virginia allows executors with proper authority to list and sell during probate. Closing happens once Charlottesville Circuit Court confirmation is obtained where required.' },
      { q: 'What if the inherited property is a rural estate or farm in Albemarle County?', a: 'Rural and farm properties in Albemarle County have their own active buyer pool — investors, agricultural buyers, and lifestyle buyers who specifically want what you have. I assess the full property and give you the realistic range.' },
      { q: 'What if heirs disagree about selling the Charlottesville property?', a: 'All heirs typically need to agree. I present the financial options clearly to all parties — which usually breaks deadlocks faster than negotiating without real numbers.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
