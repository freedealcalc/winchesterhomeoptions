/**
 * app/sell-inherited-house-roanoke-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Roanoke VA | Every Option Explained',
  description: 'Sell your inherited Roanoke home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-inherited-house-roanoke-va' },
  openGraph: { title: 'Sell an Inherited House in Roanoke VA', description: 'Inherited a home in Roanoke? Dan White walks you through every option. Free consultation.', url: 'https://virginiahomeoptions.com/sell-inherited-house-roanoke-va' },
};

export default async function RoanokeInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Roanoke', 'Roanoke City');
  const config = {
    slug: 'sell-inherited-house-roanoke-va',
    city: 'Roanoke', county: 'Roanoke City', type: 'city',
    h1: 'Inherited a Home in Roanoke? <em>Here Is What to Do Next.</em>',
    heroSub: 'Roanoke inherited properties often involve older homes in established city neighborhoods — some with historic character, many with deferred maintenance. Dan White has worked through inherited property situations in the Roanoke metro and knows how to get the estate the most money regardless of condition or probate status.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Roanoke Circuit Court probate process familiar', 'Buy as-is — full of belongings, any condition', 'Free consultation · No pressure'],
    faqs: [
      { q: 'Can I sell an inherited Roanoke home during probate?', a: 'Often yes. Virginia allows executors with proper authority to list and sell during probate, with closing contingent on Roanoke Circuit Court confirmation where required.' },
      { q: 'The inherited Roanoke home needs significant repairs — what are my options?', a: 'Roanoke has strong investor demand for properties needing renovation. Selling as-is to investors is a clean, fast path that does not require the estate to invest in repairs.' },
      { q: 'What if multiple heirs inherited the Roanoke property?', a: 'All heirs typically need to agree to sell. I present the financial options clearly to all parties — which usually helps break disagreements faster than negotiating without real numbers.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
