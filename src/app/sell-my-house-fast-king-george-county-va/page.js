/**
 * app/sell-my-house-fast-king-george-county-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in King George County VA | Every Option — Dan White',
  description: 'Sell your King George County home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-king-george-county-va' },
  openGraph: { title: 'Sell My House Fast in King George County VA', description: 'Sell your King George County home fast. Free consultation.', url: 'https://virginiahomeoptions.com/sell-my-house-fast-king-george-county-va' },
};

export default async function KingGeorgeCountyPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'King George County', 'King George County');
  const config = {
    slug: 'sell-my-house-fast-king-george-county-va',
    city: null, county: 'King George County', type: 'county',
    h1: 'Sell Your <em>King George County</em> Home Fast — Every Option on the Table',
    heroSub: 'King George County sits between Fredericksburg and the Northern Neck — a rural market with a military connection through Dahlgren Naval Surface Warfare Center. Growing commuter demand from both the DC metro and Fredericksburg corridor makes King George an increasingly active market. Dan White covers all of King George County.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'King George County and Dahlgren area covered', 'Rural and suburban properties both handled', 'Free consultation · No pressure'],
    faqs: [
      { q: 'Is King George County a growing market?', a: 'Yes — Dahlgren Naval employees and commuters from the DC metro have driven growth in King George. It remains more affordable than Stafford and Spotsylvania. Live data is above.' },
      { q: 'Can I sell a rural King George County property as-is?', a: 'Yes. Rural and agricultural properties in King George have their own buyer pool — investors and buyers who want rural Virginia at reasonable prices.' },
      { q: 'Do you serve Dahlgren area properties?', a: 'Yes — the Dahlgren area and all King George County communities are covered.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
