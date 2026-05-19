/**
 * app/sell-my-house-fast-suffolk-va/page.js
 * Target keywords: sell my house fast suffolk va, cash home buyers suffolk va
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Suffolk VA | Every Option — Dan White',
  description: 'Sell your Suffolk home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-suffolk-va' },
  openGraph: {
    title: 'Sell My House Fast in Suffolk VA | Every Option — Dan White',
    description: 'Sell your Suffolk home fast and walk away with the most money your situation allows. Free consultation, no pressure.',
    url: 'https://virginiahomeoptions.com/sell-my-house-fast-suffolk-va',
  },
};

export default async function SuffolkPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Suffolk', 'Suffolk City');

  const config = {
    slug: 'sell-my-house-fast-suffolk-va',
    city: 'Suffolk',
    county: 'Suffolk City',
    type: 'city',
    h1: 'Sell Your <em>Suffolk</em> Home Fast — Every Option on the Table',
    heroSub: 'Suffolk is one of Virginia\'s largest cities by land area — a unique mix of growing suburban communities near the Hampton Roads metro and vast rural areas to the west and south. Harbour View and the Route 17 corridor have seen significant growth; older parts of downtown Suffolk have strong investor interest. Dan White covers all of Suffolk.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Suffolk city and surrounding communities covered',
      'Harbour View, Downtown Suffolk, rural areas — all served',
      'Free consultation · No pressure · Any condition',
    ],
    faqs: [
      {
        q: 'Is Suffolk a growing real estate market?',
        a: 'Yes — particularly in the Harbour View area and the Route 17 corridor near the Chesapeake border. Older downtown Suffolk neighborhoods attract investor interest. Live data is in the snapshot above.',
      },
      {
        q: 'Can I sell a rural Suffolk property as-is?',
        a: 'Yes. Rural and agricultural properties in Suffolk have their own buyer pool — investors and buyers who want land, acreage, and rural Virginia character. I assess the full property and give you the realistic range.',
      },
      {
        q: 'How fast can I close on a Suffolk home?',
        a: 'Cash buyers close in 7 to 21 days. Suffolk is a varied market — strategy depends on your specific area and condition. Call me with the details and I will tell you what is realistic.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
