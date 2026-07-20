import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Rental Property in Front Royal VA | Landlord Exit',
  description: 'Tired landlord in Front Royal? Licensed agent Dan White covers every exit option — tenants in place or vacant. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-tired-landlord-front-royal-va' },
  openGraph: {
    title: 'Sell a Rental Property in Front Royal VA | Tired Landlord Options',
    description: 'Done being a landlord in Front Royal? Dan White walks you through every exit — tenants in place or vacant. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-tired-landlord-front-royal-va',
  },
};

export default async function FrontRoyalTiredLandlordPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');

  const config = {
    slug: 'sell-house-tired-landlord-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'Done Being a Landlord in Front Royal? <em>Here is Your Clean Exit.</em>',
    heroSub: 'Rental properties in Warren County can be great investments — until they are not. Problem tenants, deferred maintenance, or simply wanting out are all legitimate reasons to sell. Dan White gives you every exit option with honest numbers on each one.',
    trustItems: [
      '20+ years of fix-and-flip and rental experience in the Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Sell with tenants in place or vacant — both work',
      'No judgment · Free consultation',
    ],
    bodyContent: `
      <h2>An Occupied Front Royal Rental Is Still a Sellable Rental</h2>
      <p>Warren County draws investor buyers who want income property along the Shenandoah River corridor, and plenty of them prefer a tenant already in place over an empty house they'd have to fill themselves. Selling with your current lease intact means rent keeps landing in your account through closing, and the buyer simply assumes the landlord role once the deal is done — no gap in income, no scramble to find a new tenant before you can list.</p>
      <p>If your situation calls for a clean, vacant handoff instead — say the lease is nearly up or the tenant relationship isn't one you want to hand off to someone else — that's a straightforward path too, just on a slightly different timeline.</p>
      <h2>How Long a Vacant Exit Realistically Takes</h2>
      <p>Ending a Virginia tenancy without a lease violation only requires 30 days' written notice for a month-to-month arrangement, or 7 days if it's week-to-week. Add that to a fast closing and going vacant-first in Front Royal doesn't have to mean months of extra waiting — it's usually a matter of a few weeks layered on top of the sale timeline.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about selling a tenant-occupied rental in Virginia, not legal advice for your specific lease or tenant situation. Confirm your exact notice requirements and lease terms with a landlord-tenant attorney before ending a tenancy or listing the property.</p>
    `,
    faqs: [
      { q: 'Can I sell my Front Royal rental with tenants still living there?', a: 'Yes. Investors who want income-producing properties actively seek tenanted rentals. Selling with tenants in place avoids eviction and can be a selling point to the right buyer.' },
      { q: 'What if my Front Royal rental has significant deferred maintenance?', a: 'Very common in rental properties. Investor buyers price in the work and purchase as-is. You do not need to invest in repairs before selling.' },
      { q: 'What if I have multiple rentals in Warren County to sell?', a: 'Portfolio sales often attract premium interest from investors who want scale. Call me and we will discuss what a multi-property exit looks like.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
