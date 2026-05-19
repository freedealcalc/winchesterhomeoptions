/**
 * app/sell-my-house-fast-fredericksburg-area-va/page.js
 * Target keywords: sell my house fast fredericksburg area va, cash buyers fredericksburg corridor
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in the Fredericksburg Area VA | Every Option — Dan White',
  description: 'Sell your Fredericksburg area home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-fredericksburg-area-va' },
  openGraph: {
    title: 'Sell My House Fast in the Fredericksburg Area VA | Every Option — Dan White',
    description: 'Sell your Fredericksburg area home fast and walk away with the most money. Free consultation, no pressure.',
    url: 'https://virginiahomeoptions.com/sell-my-house-fast-fredericksburg-area-va',
  },
};

export default async function FredericksburgAreaPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Fredericksburg', 'Fredericksburg City');

  const config = {
    slug: 'sell-my-house-fast-fredericksburg-area-va',
    city: 'Fredericksburg',
    county: 'Fredericksburg City',
    type: 'city',
    h1: 'Sell Your <em>Fredericksburg Area</em> Home Fast — Every Option on the Table',
    heroSub: 'The Fredericksburg corridor — Fredericksburg City, Spotsylvania, Stafford, and King George — sits between Northern Virginia and Richmond, drawing buyers who want I-95 access at a lower price point than NoVA. It is one of Virginia\'s fastest growing markets and one of the most active for both traditional buyers and investors. Dan White covers the entire Fredericksburg corridor.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Fredericksburg City, Spotsylvania, Stafford, King George — all covered',
      'Active investor and traditional buyer networks on the I-95 corridor',
      'Free consultation · No pressure · Any condition',
    ],
    faqs: [
      {
        q: 'Why is the Fredericksburg area growing so fast?',
        a: 'Fredericksburg offers I-95 access to both Northern Virginia and Richmond at significantly lower price points than NoVA. Remote work has accelerated this trend — buyers who can commute part-time find Fredericksburg an attractive compromise.',
      },
      {
        q: 'Is the Fredericksburg area a good seller market?',
        a: 'One of the better ones in Virginia — consistent demand from NoVA spillover buyers keeps the market active. Live data is in the snapshot above.',
      },
      {
        q: 'Do you cover Stafford and Spotsylvania as well as Fredericksburg City?',
        a: 'Yes — Fredericksburg City, Stafford County, Spotsylvania County, King George County, and Caroline County. The entire I-95 corridor south of NoVA.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
