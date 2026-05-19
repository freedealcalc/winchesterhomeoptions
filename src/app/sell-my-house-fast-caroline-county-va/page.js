/**
 * app/sell-my-house-fast-caroline-county-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Caroline County VA | Every Option — Dan White',
  description: 'Sell your Caroline County home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-caroline-county-va' },
  openGraph: { title: 'Sell My House Fast in Caroline County VA', description: 'Sell your Caroline County home fast. Free consultation.', url: 'https://virginiahomeoptions.com/sell-my-house-fast-caroline-county-va' },
};

export default async function CarolineCountyPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Caroline County', 'Caroline County');
  const config = {
    slug: 'sell-my-house-fast-caroline-county-va',
    city: null, county: 'Caroline County', type: 'county',
    h1: 'Sell Your <em>Caroline County</em> Home Fast — Every Option on the Table',
    heroSub: 'Caroline County sits between Fredericksburg and Richmond on I-95 — a rural market with growing commuter appeal as buyers look south of Spotsylvania for more affordable options. Bowling Green is the county seat; Fort A.P. Hill provides some military employment base. Dan White covers all of Caroline County.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Caroline County — Bowling Green and all communities covered', 'Rural and agricultural properties handled', 'Free consultation · No pressure'],
    faqs: [
      { q: 'Is Caroline County a growing market?', a: 'Yes — I-95 access and lower prices than Spotsylvania have attracted commuter buyers. Caroline remains one of the more affordable I-95 corridor counties in Virginia.' },
      { q: 'Can I sell a rural Caroline County property as-is?', a: 'Yes. Agricultural and rural properties in Caroline County have their own buyer pool. Cash sales work well for rural properties regardless of condition.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
