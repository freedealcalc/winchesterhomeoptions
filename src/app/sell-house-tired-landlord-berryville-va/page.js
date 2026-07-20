import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your Berryville Rental Property | Tired Landlord?',
  description: 'Done being a landlord in Berryville? Licensed agent Dan White covers every exit option, tenants in place or vacant. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-tired-landlord-berryville-va' },
  openGraph: { title: 'Sell Your Berryville Rental Property | Tired Landlord?', description: 'Done being a landlord in Berryville? Dan White walks you through every exit option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-tired-landlord-berryville-va' },
};

export default async function BerryvilleTiredLandlordPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');
  const config = {
    slug: 'sell-house-tired-landlord-berryville-va',
    city: 'Berryville', county: 'Clarke County', type: 'city',
    h1: 'Done Being a Landlord in Berryville? <em>Here Is Your Clean Exit.</em>',
    heroSub: 'Clarke County rental properties have their own buyer pool — investors who want rural Virginia and small-town character. Dan White has 20+ years of investment experience in the Valley and knows exactly how to position your Berryville rental for the cleanest, most profitable exit.',
    trustItems: ['20+ years of rental and investment experience in the Valley', 'Licensed VA agent · Pearson Smith Realty', 'Sell with tenants or vacant — both work', 'No judgment · Free consultation'],
    bodyContent: `
      <h2>Selling a Berryville Rental With the Tenant Still in the Lease</h2>
      <p>Clarke County has a small, tight rental market, and investor buyers here are often looking for exactly what you have — an occupied, income-producing property. Many of these buyers are glad to take over an existing lease rather than wait for a vacancy, which means your sale doesn't have to wait for your tenant to move out. Rent keeps coming in right up to closing, and the new owner steps into the landlord role on the terms already in place.</p>
      <p>That said, not every buyer wants a tenant in place, and not every situation lends itself to an assumed lease. If the property would sell better vacant — because of condition, because the lease is below market, or because a particular buyer only wants an empty house — we look at that path too before deciding which way to list.</p>
      <h2>Timing a Vacant Sale Around Clarke County's Rental Market</h2>
      <p>If ending the tenancy first makes more sense, Virginia's landlord-tenant law sets the minimum notice for ending a tenancy without a lease violation: 30 days for a month-to-month rental, or just 7 days if the arrangement is week-to-week. That's a short enough window that waiting for a vacancy rarely adds much time to a Berryville sale, especially compared to the cost of months of continued upkeep and management.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about selling a tenant-occupied rental in Virginia, not legal advice for your specific lease or tenant situation. Confirm your notice requirements and lease terms with a landlord-tenant attorney before ending a tenancy or listing the property.</p>
    `,
    faqs: [
      { q: 'Can I sell my Berryville rental with tenants in place?', a: 'Yes. Investors who want income-producing rural properties in Clarke County actively look for tenanted rentals. Tenants in place can actually be a selling point to the right buyer.' },
      { q: 'My Berryville rental needs significant work — does that kill the sale?', a: 'No. Deferred maintenance is common in rental properties and investor buyers know it. They purchase as-is and factor repairs into their offer.' },
      { q: 'Is there demand for rental properties in Clarke County?', a: 'Yes — Clarke County attracts investors who want rural Virginia assets at prices below the Winchester market. Berryville rentals have real buyer interest.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
