/**
 * app/sell-my-house-fast-charlottesville-va/page.js
 * Target keywords: sell my house fast charlottesville va, cash home buyers charlottesville va
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Charlottesville VA | Every Option — Dan White',
  description: 'Sell your Charlottesville home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-charlottesville-va' },
  openGraph: {
    title: 'Sell My House Fast in Charlottesville VA | Every Option — Dan White',
    description: 'Sell your Charlottesville home fast and walk away with the most money your situation allows. Free consultation, no pressure.',
    url: 'https://virginiahomeoptions.com/sell-my-house-fast-charlottesville-va',
  },
};

export default async function CharlottesvillePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Charlottesville', 'Charlottesville City');

  const config = {
    slug: 'sell-my-house-fast-charlottesville-va',
    city: 'Charlottesville',
    county: 'Charlottesville City',
    type: 'city',
    h1: 'Sell Your <em>Charlottesville</em> Home Fast — Every Option on the Table',
    heroSub: 'Charlottesville is one of Virginia\'s most desirable markets — driven by UVA, a strong healthcare sector, and consistent demand from buyers who want Blue Ridge access with urban amenities. Whether you are in the city proper or the surrounding Albemarle County, Dan White covers the Charlottesville metro and puts every selling option on the table.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Charlottesville and Albemarle County covered',
      'Active investor and traditional buyer networks',
      'Free consultation · No pressure · Any condition',
    ],
    faqs: [
      {
        q: 'Is Charlottesville a strong seller market right now?',
        a: 'Charlottesville has been one of Virginia\'s more resilient markets — UVA employment, healthcare, and lifestyle appeal keep demand consistent. Live data is in the market snapshot above.',
      },
      {
        q: 'Can I sell a Charlottesville home as-is?',
        a: 'Yes. Even in a desirable market like Charlottesville, cash buyers and as-is MLS listings attract investors and value buyers who compete on price. No repairs required.',
      },
      {
        q: 'Do you cover properties outside of Charlottesville city in Albemarle County?',
        a: 'Yes — all of Charlottesville city and Albemarle County including Crozet, Waynesboro, and the surrounding communities.',
      },
      {
        q: 'What if I have a rental property near UVA in Charlottesville?',
        a: 'UVA-area rental properties in Charlottesville have strong investor demand — consistent tenant base and reliable rental income. Selling with tenants in place often works well here.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
