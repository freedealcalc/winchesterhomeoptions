/**
 * app/sell-my-house-fast-portsmouth-va/page.js
 * Target keywords: sell my house fast portsmouth va, cash home buyers portsmouth va
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Portsmouth VA | Every Option — Dan White',
  description: 'Sell your Portsmouth home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-my-house-fast-portsmouth-va' },
  openGraph: {
    title: 'Sell My House Fast in Portsmouth VA | Every Option — Dan White',
    description: 'Sell your Portsmouth home fast and walk away with the most money your situation allows. Free consultation, no pressure.',
    url: 'https://virginiahomeoptions.com/sell-my-house-fast-portsmouth-va',
  },
};

export default async function PortsmouthPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Portsmouth', 'Portsmouth City');

  const config = {
    slug: 'sell-my-house-fast-portsmouth-va',
    city: 'Portsmouth',
    county: 'Portsmouth City',
    type: 'city',
    h1: 'Sell Your <em>Portsmouth</em> Home Fast — Every Option on the Table',
    heroSub: 'Portsmouth sits across the Elizabeth River from Norfolk — a city with historic character, active waterfront development, and strong investor interest in its older neighborhoods. Olde Towne Portsmouth is one of Virginia\'s most intact historic districts. The price points relative to Virginia Beach and Chesapeake make Portsmouth a strong investor market. Dan White covers all of Portsmouth.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Portsmouth and all neighborhoods covered including Olde Towne',
      'Strong investor buyer network in the Hampton Roads market',
      'Free consultation · No pressure · Any condition',
    ],
    faqs: [
      {
        q: 'Is Portsmouth a good market for selling as-is?',
        a: 'Portsmouth has strong investor demand driven by its price points relative to Virginia Beach and Chesapeake, and significant renovation upside in older neighborhoods. As-is cash sales move well here.',
      },
      {
        q: 'What if my Portsmouth home is older and needs significant work?',
        a: 'Older Portsmouth homes — particularly in Olde Towne and surrounding historic neighborhoods — attract specific investor buyers who want character and bones. Condition affects price but does not eliminate demand.',
      },
      {
        q: 'How fast can I sell in Portsmouth?',
        a: 'Cash buyers close in 7 to 21 days in Portsmouth. The Hampton Roads investor network is active across all seven cities including Portsmouth.',
      },
      {
        q: 'Does the military presence affect Portsmouth home sales?',
        a: 'Yes — Portsmouth is home to the Naval Medical Center and proximity to Naval Station Norfolk means military families are a consistent buyer and seller base here.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
