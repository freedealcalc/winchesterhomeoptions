import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Rental Property in Frederick County VA',
  description: 'Selling a Frederick County VA rental? Licensed agent Dan White covers every exit — tenants in place or vacant. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-rental-property-frederick-county-va' },
  openGraph: { title: 'Sell a Rental Property in Frederick County VA', description: 'Done being a landlord in Frederick County? Dan White walks you through every exit — tenants or vacant, cash or MLS. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-rental-property-frederick-county-va' },
};

export default async function FrederickCountyRentalPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Frederick County', 'Frederick County');
  const config = {
    slug: 'sell-rental-property-frederick-county-va',
    city: null, county: 'Frederick County', type: 'county',
    h1: 'Selling a Rental Property in Frederick County — <em>Your Clean Exit.</em>',
    heroSub: 'Frederick County rental properties have real value — and real exit options. Whether you have one rental or a portfolio, tenants in place or vacant, Dan White has 20+ years of investment property experience in this market and knows exactly how to position your exit for the most money.',
    trustItems: ['20+ years of rental and fix-and-flip experience in Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Sell with tenants or vacant — both paths work', 'Portfolio sales handled · Free consultation'],
    faqs: [
      { q: 'Can I sell a Frederick County rental with tenants still in it?', a: 'Yes. Investor buyers in Frederick County actively seek tenanted rentals — particularly with favorable lease terms and on-time paying tenants.' },
      { q: 'My Frederick County rental needs significant work — will that kill the sale?', a: 'No. Deferred maintenance is standard in rental properties and investor buyers know it. They purchase as-is and price in the work.' },
      { q: 'What if I have multiple rentals in Frederick County to sell?', a: 'Portfolio sales attract investor interest at scale. Multiple properties sold together often command more attention and can be structured for your tax situation. Call me and we will discuss what a multi-property exit looks like.' },
      { q: 'Is it better to sell a Frederick County rental on MLS or off-market?', a: 'Depends on condition and tenancy. Well-maintained tenanted rentals can do well on MLS. Distressed or problem properties do better with direct investor buyers. I show you both net numbers.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
