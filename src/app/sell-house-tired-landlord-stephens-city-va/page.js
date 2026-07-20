import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Tired Landlord in Stephens City VA? Your Clean Exit',
  description: 'Done being a landlord in Stephens City VA? Dan White covers every exit option — tenants in place or vacant. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-tired-landlord-stephens-city-va' },
  openGraph: {
    title: 'Sell a Rental Property in Stephens City VA | Tired Landlord Options',
    description: 'Done being a landlord in Stephens City? Dan White walks you through every exit. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-tired-landlord-stephens-city-va',
  },
};

export default async function StephensCityTiredLandlordPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');

  const config = {
    slug: 'sell-house-tired-landlord-stephens-city-va',
    city: 'Stephens City',
    county: 'Frederick County',
    type: 'city',
    h1: 'Done Being a Landlord in Stephens City? <em>Here is Your Clean Exit.</em>',
    heroSub: 'Stephens City rental properties attract strong investor interest — which works in your favor when you are ready to sell. Dan White has 20+ years of rental and fix-and-flip experience in Frederick County and knows exactly how to position your exit for the most money.',
    trustItems: [
      '20+ years of rental and investment experience in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Sell with tenants or vacant — both paths work',
      'No judgment · Free consultation',
    ],
    bodyContent: `
      <h2>Stephens City Rentals Sell Whether They're Occupied or Empty</h2>
      <p>Growth along the Route 11 corridor has pulled steady investor demand into Stephens City, and much of it is aimed squarely at occupied rental property. Buyers in this market are frequently comfortable stepping into the landlord role on your tenant's existing lease, which means you can sell without waiting for a lease to run out or coordinating a move-out first.</p>
      <p>Some sellers still prefer to hand a buyer an empty house — maybe the lease is close to ending anyway, or the tenant relationship has run its course. Virginia only requires 30 days' written notice to end a month-to-month tenancy without a lease violation (7 days if it's week-to-week), so a vacant sale in Stephens City rarely takes much longer to set up than an occupied one.</p>
      <h2>Deciding Which Path Fits Your Rental</h2>
      <p>The right answer usually comes down to your lease terms and how much time you want to spend managing the property before closing. I'll walk you through both the occupied-sale number and the vacant-sale number so you're deciding with real figures, not a guess.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about selling occupied rental property in Virginia, not legal advice for your specific lease or tenant. Confirm your notice period and lease-transfer terms with a landlord-tenant attorney before ending a tenancy or listing the property.</p>
    `,
    faqs: [
      { q: 'Can I sell my Stephens City rental with tenants in place?', a: 'Yes. Investors buying in Frederick County regularly purchase tenanted rentals. If the lease terms are reasonable, tenants in place can actually be a selling point.' },
      { q: 'My Stephens City rental needs a lot of work — will that kill the sale?', a: 'No. Deferred maintenance is the norm in rental properties and investor buyers know it. They purchase as-is and factor repairs into their offer. You do not spend a dollar on prep.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
