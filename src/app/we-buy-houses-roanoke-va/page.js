/**
 * app/we-buy-houses-roanoke-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Roanoke VA | Every Option, Not Just One Cash Offer',
  description: 'Looking for cash home buyers in Roanoke VA? Sell your home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/we-buy-houses-roanoke-va' },
  openGraph: { title: 'We Buy Houses Roanoke VA | Every Option', description: 'Cash buyers in Roanoke VA? Dan White shows you every option — not just one offer. Free consultation.', url: 'https://virginiahomeoptions.com/we-buy-houses-roanoke-va' },
};

export default async function WeBuyHousesRoanokePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Roanoke', 'Roanoke City');
  const config = {
    slug: 'we-buy-houses-roanoke-va',
    city: 'Roanoke', county: 'Roanoke City', type: 'city',
    h1: 'We Buy Houses in Roanoke VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Roanoke has active investor demand for renovation properties — but a single cash offer still gives the buyer all the leverage. Dan White puts your Roanoke property in front of competing buyers and shows you every option so you walk away with the most money.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Roanoke investor network — real competition', 'Every option explained', 'Free consultation · No pressure'],
    faqs: [
      { q: 'How fast do cash buyers close in Roanoke?', a: 'Typically 7 to 21 days. Roanoke has consistent investor activity — renovation demand across older neighborhoods keeps buyers motivated.' },
      { q: 'Will I get a fair price from a cash buyer in Roanoke?', a: 'With one buyer — maybe not. With multiple investors competing — almost certainly better. That is the core difference in how I work.' },
      { q: 'What if my Roanoke home needs significant repairs?', a: 'That is where Roanoke investor demand is strongest — older homes with renovation upside attract real competition. Condition affects the offer but not the demand.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
