/**
 * app/sell-inherited-house-hampton-roads-va/page.js
 * Target keywords: sell inherited house hampton roads va, inherited property hampton roads
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Hampton Roads VA | Every Option Explained',
  description: 'Sell your inherited Hampton Roads home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — probate coordination, as-is sale, cash buyers. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-inherited-house-hampton-roads-va' },
  openGraph: {
    title: 'Sell an Inherited House in Hampton Roads VA',
    description: 'Inherited a home in Hampton Roads? Dan White walks you through every option. Free consultation.',
    url: 'https://virginiahomeoptions.com/sell-inherited-house-hampton-roads-va',
  },
};

export default async function HamptonRoadsInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Norfolk', 'Norfolk City');

  const config = {
    slug: 'sell-inherited-house-hampton-roads-va',
    city: 'Hampton Roads',
    county: 'Hampton Roads Region',
    type: 'city',
    h1: 'Inherited a Home in Hampton Roads? <em>Here Is What to Do Next.</em>',
    heroSub: 'Hampton Roads inherited properties come in every form — postwar bungalows in Norfolk, ranch homes in Chesapeake, coastal properties in Virginia Beach, older colonials in Hampton. Dan White has worked through inherited property situations across all seven Hampton Roads cities and knows how to get the estate the most money regardless of condition, probate status, or family complexity.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'All Hampton Roads cities covered for inherited properties',
      'Works with estate attorneys across the region',
      'Buy as-is — full of belongings, any condition',
    ],
    faqs: [
      {
        q: 'Can I sell an inherited Hampton Roads home before probate closes?',
        a: 'Often yes — Virginia allows executors with proper authority to list and sell during probate. Closing happens once court confirmation is obtained where required. This stops carrying costs while the rest of the estate settles.',
      },
      {
        q: 'The inherited Hampton Roads home is full of belongings — what do we do?',
        a: 'Leave them. Cash buyers purchase homes with all contents. Heirs take what they want and the buyer handles everything else.',
      },
      {
        q: 'What if the inherited Hampton Roads property is in a flood zone?',
        a: 'Flood zone inherited properties are common in Hampton Roads. Investors familiar with coastal Virginia buy these properties regularly and price accordingly. Condition and flood zone status both factor in — but neither prevents a sale.',
      },
      {
        q: 'What if the inherited property is owned by out-of-state heirs?',
        a: 'Very common in Hampton Roads — particularly with military families who have relocated. Remote signing is fully available. I coordinate locally on behalf of out-of-state heirs throughout the process.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
