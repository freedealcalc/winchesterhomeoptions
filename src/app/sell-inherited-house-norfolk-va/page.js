/**
 * app/sell-inherited-house-norfolk-va/page.js
 * Target keywords: sell inherited house norfolk va, inherited property norfolk virginia
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Norfolk VA | Every Option Explained',
  description: 'Sell your inherited Norfolk home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-inherited-house-norfolk-va' },
  openGraph: {
    title: 'Sell an Inherited House in Norfolk VA',
    description: 'Inherited a home in Norfolk? Dan White walks you through every option — and which one gets the estate the most money. Free consultation.',
    url: 'https://virginiahomeoptions.com/sell-inherited-house-norfolk-va',
  },
};

export default async function NorfolkInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Norfolk', 'Norfolk City');

  const config = {
    slug: 'sell-inherited-house-norfolk-va',
    city: 'Norfolk',
    county: 'Norfolk City',
    type: 'city',
    h1: 'Inherited a Home in Norfolk? <em>Here Is What to Do Next.</em>',
    heroSub: 'Norfolk inherited properties often come with complexity — older homes in historic neighborhoods, potential flood zone issues, out-of-state heirs, or estates caught in Norfolk Circuit Court probate. Dan White has worked through all of these situations and knows how to get the estate the most money with the least friction.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Norfolk Circuit Court probate process familiar',
      'Buy as-is — full of belongings, any condition',
      'Remote signing for out-of-state heirs · Free consultation',
    ],
    faqs: [
      {
        q: 'Can I sell an inherited Norfolk home during probate?',
        a: 'Often yes. Virginia allows executors with proper authority to list and market during probate, with closing contingent on Norfolk Circuit Court confirmation where required.',
      },
      {
        q: 'What if the inherited Norfolk home is in a flood zone?',
        a: 'Very common in Norfolk. Flood zone properties have their own active buyer pool — investors familiar with coastal Virginia buy these as-is. Flood zone status affects price, not saleability.',
      },
      {
        q: 'I live out of state and inherited a Norfolk property — how does this work?',
        a: 'Entirely manageable remotely. I coordinate locally, handle access and showings, and remote signing is fully available for closing. Many Hampton Roads estate sales involve out-of-state heirs.',
      },
      {
        q: 'The inherited Norfolk home needs significant work — what are my options?',
        a: 'Norfolk has strong investor demand for properties needing renovation — particularly in historic neighborhoods like Ghent, Larchmont, and Ocean View where renovation upside is real. Selling as-is to investors is a clean path.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
