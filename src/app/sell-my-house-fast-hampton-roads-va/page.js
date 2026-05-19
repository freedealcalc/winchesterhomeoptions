/**
 * app/sell-my-house-fast-hampton-roads-va/page.js
 * Target keywords: sell my house fast hampton roads va, cash home buyers hampton roads virginia
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Hampton Roads VA | Every Option — Dan White',
  description: 'Sell your Hampton Roads home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-hampton-roads-va' },
  openGraph: {
    title: 'Sell My House Fast in Hampton Roads VA | Every Option — Dan White',
    description: 'Sell your Hampton Roads home fast and walk away with the most money your situation allows. Free consultation, no pressure.',
    url: 'https://virginiahomeoptions.com/sell-my-house-fast-hampton-roads-va',
  },
};

export default async function HamptonRoadsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Norfolk', 'Norfolk City');

  const config = {
    slug: 'sell-my-house-fast-hampton-roads-va',
    city: 'Hampton Roads',
    county: 'Hampton Roads Region',
    type: 'city',
    h1: 'Sell Your <em>Hampton Roads</em> Home Fast — Every Option on the Table',
    heroSub: 'Hampton Roads is Virginia\'s second-largest metro and one of the most unique real estate markets in the country — shaped by military installations, coastal living, and some of the strongest investor demand in the state. Whether you are in Norfolk, Virginia Beach, Chesapeake, Suffolk, or Portsmouth, Dan White covers the entire region.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Full Hampton Roads coverage — all seven cities',
      'Military PCS specialists — understand the relocation timeline',
      'Free consultation · No pressure · Any condition',
    ],
    faqs: [
      {
        q: 'What cities does Hampton Roads cover?',
        a: 'The Hampton Roads metro includes Norfolk, Virginia Beach, Chesapeake, Suffolk, Portsmouth, Hampton, and Newport News. Dan White covers all seven cities plus the surrounding Peninsula and Southside communities.',
      },
      {
        q: 'Is Hampton Roads a good market for selling as-is?',
        a: 'Yes — Hampton Roads has strong investor demand driven by military relocation cycles, coastal property appeal, and population density. As-is listings and cash sales both perform well across the region.',
      },
      {
        q: 'How does the military presence affect Hampton Roads home sales?',
        a: 'Significantly. Constant PCS rotation means a steady stream of motivated sellers who need to close fast. It also means a consistent buyer base. I understand the military timeline and structure sales around it.',
      },
      {
        q: 'Can I sell a Hampton Roads home with flood zone issues?',
        a: 'Yes — flood zone properties are common in Hampton Roads and have their own buyer pool. Investors who understand coastal Virginia buy these properties regularly. Condition and flood zone status both factor into pricing.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
