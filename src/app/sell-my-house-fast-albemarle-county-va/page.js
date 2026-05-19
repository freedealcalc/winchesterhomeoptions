/**
 * app/sell-my-house-fast-albemarle-county-va/page.js
 * Target keywords: sell my house fast albemarle county va, cash home buyers albemarle county
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Albemarle County VA | Every Option — Dan White',
  description: 'Sell your Albemarle County home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-albemarle-county-va' },
  openGraph: {
    title: 'Sell My House Fast in Albemarle County VA | Every Option — Dan White',
    description: 'Sell your Albemarle County home fast and walk away with the most money your situation allows. Free consultation, no pressure.',
    url: 'https://virginiahomeoptions.com/sell-my-house-fast-albemarle-county-va',
  },
};

export default async function AlbemarleCountyPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Albemarle County', 'Albemarle County');

  const config = {
    slug: 'sell-my-house-fast-albemarle-county-va',
    city: null,
    county: 'Albemarle County',
    type: 'county',
    h1: 'Sell Your <em>Albemarle County</em> Home Fast — Every Option on the Table',
    heroSub: 'Albemarle County surrounds Charlottesville and extends into the Blue Ridge foothills — a market of rural estates, farms, horse properties, and suburban communities that attract buyers seeking Virginia country living with proximity to UVA and I-64. Dan White covers all of Albemarle County.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Rural estates, farms, horse properties — all handled',
      'Charlottesville metro buyer network',
      'Free consultation · No pressure · Any condition',
    ],
    faqs: [
      {
        q: 'Do you handle rural and farm properties in Albemarle County?',
        a: 'Yes — rural properties, farms, horse properties, and estates in Albemarle County have their own active buyer pool separate from the Charlottesville suburban market. Land and acreage add complexity but often add significant value.',
      },
      {
        q: 'Can I sell an Albemarle County property as-is?',
        a: 'Yes. Cash buyers and as-is listings both work in Albemarle County. Investor demand reaches properties of all types and conditions throughout the county.',
      },
      {
        q: 'What Albemarle County communities do you cover?',
        a: 'All of Albemarle County — Crozet, Earlysville, Ivy, Keswick, Scottsville, and all rural communities throughout the county.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
