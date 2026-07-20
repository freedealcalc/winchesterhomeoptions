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
    bodyContent: `
      <h2>Selling a Rental Is a Business Decision, Not a Breaking Point</h2>
      <p>Exiting a Frederick County rental doesn't have to mean you've hit a wall as a landlord — for many owners it's simply the next step in a portfolio strategy: reallocating capital toward a different property type, consolidating multiple units into fewer higher-performing assets, or converting equity into cash for a different investment entirely. Whether the property has a tenant in place or sits vacant, the sale can be structured around your investment goals rather than around a crisis.</p>
      <p>Frederick County's rental market has held enough tenant demand that selling with a lease already in place is a realistic option, which keeps the property cash-flowing right up to closing and can make the deal more attractive to the investor buyers most likely to purchase this type of asset.</p>
      <h2>Using the Proceeds to Move Your Investment Forward</h2>
      <p>If the plan is to redeploy proceeds into another investment property rather than cash out entirely, a 1031 like-kind exchange can defer the capital gains tax that would otherwise be due on the sale. In broad terms, the rules require identifying a replacement property within 45 days of closing and completing that purchase within 180 days — deadlines that start running the day your Frederick County property sells, so the timeline needs to be mapped out before you close, not after.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how 1031 exchanges work, not tax or legal advice — eligibility, timing, and the mechanics of using a qualified intermediary vary by situation. Confirm the specifics with a CPA or a 1031 qualified intermediary before relying on this strategy.</p>
    `,
    faqs: [
      { q: 'Can I sell a Frederick County rental with tenants still in it?', a: 'Yes. Investor buyers in Frederick County actively seek tenanted rentals — particularly with favorable lease terms and on-time paying tenants.' },
      { q: 'My Frederick County rental needs significant work — will that kill the sale?', a: 'No. Deferred maintenance is standard in rental properties and investor buyers know it. They purchase as-is and price in the work.' },
      { q: 'What if I have multiple rentals in Frederick County to sell?', a: 'Portfolio sales attract investor interest at scale. Multiple properties sold together often command more attention and can be structured for your tax situation. Call me and we will discuss what a multi-property exit looks like.' },
      { q: 'Is it better to sell a Frederick County rental on MLS or off-market?', a: 'Depends on condition and tenancy. Well-maintained tenanted rentals can do well on MLS. Distressed or problem properties do better with direct investor buyers. I show you both net numbers.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
