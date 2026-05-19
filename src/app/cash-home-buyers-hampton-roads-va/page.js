/**
 * app/cash-home-buyers-hampton-roads-va/page.js
 * Target keywords: cash home buyers hampton roads va, sell house fast hampton roads virginia
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Cash Home Buyers in Hampton Roads VA | Get the Most Money',
  description: 'Looking for cash home buyers in Hampton Roads VA? Sell your home fast and walk away with the most money your situation allows. Dan White puts your property in front of competing investors. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/cash-home-buyers-hampton-roads-va' },
  openGraph: {
    title: 'Cash Home Buyers in Hampton Roads VA | Get the Most Money',
    description: 'Cash home buyers in Hampton Roads VA — Dan White connects you with competing investors so you get the best number. Free consultation.',
    url: 'https://virginiahomeoptions.com/cash-home-buyers-hampton-roads-va',
  },
};

export default async function CashHomeBuyersHamptonRoadsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Norfolk', 'Norfolk City');

  const config = {
    slug: 'cash-home-buyers-hampton-roads-va',
    city: 'Hampton Roads',
    county: 'Hampton Roads Region',
    type: 'city',
    h1: 'Cash Home Buyers in Hampton Roads VA — <em>Get the Most Money, Not Just a Fast Offer.</em>',
    heroSub: 'Hampton Roads has a large and competitive cash buyer market — driven by military relocation cycles, investor activity in older neighborhoods, and coastal property demand. The question is not whether you can find a cash buyer. The question is whether the offer you are looking at is actually the best number available. Dan White finds out for you.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Hampton Roads investor network across all seven cities',
      'Military relocation expertise — PCS timelines understood',
      'Free consultation · No pressure',
    ],
    faqs: [
      {
        q: 'How do I find legitimate cash buyers in Hampton Roads?',
        a: 'Dan White works with a large investor network across all Hampton Roads cities — Norfolk, Virginia Beach, Chesapeake, Suffolk, Portsmouth, Hampton, and Newport News. Rather than connecting you with one buyer, I put the property in front of many and let them compete.',
      },
      {
        q: 'How fast do cash buyers close in Hampton Roads?',
        a: 'Typically 7 to 21 days across all seven Hampton Roads cities. Military relocation timelines often drive faster closings — I structure the sale around your actual deadline.',
      },
      {
        q: 'Are there cash buyers for flood zone properties in Hampton Roads?',
        a: 'Yes — coastal Virginia investors understand flood zone properties and buy them regularly. Flood zone status affects price but does not eliminate buyer demand in this region.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
