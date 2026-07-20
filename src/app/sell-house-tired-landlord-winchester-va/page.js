import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your Winchester Rental Property | Tired Landlord?',
  description: 'Done being a landlord in Winchester? Dan White covers every exit option, tenants in place or vacant. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-tired-landlord-winchester-va' },
  openGraph: {
    title: 'Sell Your Winchester Rental Property | Tired Landlord?',
    description: 'Done being a landlord in Winchester? Dan White walks you through every exit option — tenants in place, vacant, or anything in between. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-tired-landlord-winchester-va',
  },
};

export default async function WinchesterTiredLandlordPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-house-tired-landlord-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Done Being a Landlord in Winchester? <em>Here\'s Your Clean Exit.</em>',
    heroSub: 'Landlording in Winchester and Frederick County has its rewards — until it doesn\'t. Problem tenants, deferred maintenance, rising taxes, or simply being done with the headache are all legitimate reasons to sell. Dan White gives you every exit option and the honest numbers on each one.',
    trustItems: [
      '20+ years of fix-and-flip and rental experience in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Sell with tenants in place or vacant — both work',
      'No judgment · Free consultation',
    ],
    bodyContent: `
      <h2>You Don't Have to Get the Property Vacant First</h2>
      <p>One of the biggest misconceptions Winchester landlords have is that they need an empty house before they can sell. In most cases, that's backwards. Investors active in the Frederick County and Winchester rental market routinely buy occupied properties and simply take over as the new landlord at closing, inheriting the existing lease and the rent that comes with it. If your tenants are current and easy to work with, that can actually make your property more attractive, not less.</p>
      <p>If you'd rather sell with nobody living there — because the lease is about to expire, the tenant relationship has soured, or you simply want a clean handoff — Virginia law gives you a defined runway to end things properly. A month-to-month tenancy requires 30 days' written notice to end with no violation involved; a week-to-week arrangement only needs 7 days.</p>
      <h2>Weighing Occupied vs. Vacant for Your Winchester Property</h2>
      <p>Which route nets you more depends on your specific lease, your tenant's reliability, and how much runway you have. A property with a well-behaved, paying tenant on a market-rate lease is often worth selling as-is with them in place — you skip the vacancy period and the carrying costs that come with it entirely. A property with a problem tenant or a stale below-market lease is usually worth clearing first. I walk through both numbers with you before you decide.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about selling a rental property with a tenant in place, not legal advice for your specific lease or tenancy. Confirm notice requirements and any lease-transfer terms with a landlord-tenant attorney before ending a tenancy or accepting an offer.</p>
    `,
    faqs: [
      {
        q: 'Can I sell my Winchester rental property with tenants still in it?',
        a: 'Yes. Investors actively look for tenanted properties — especially if the lease terms are favorable. Selling with tenants in place avoids the hassle of eviction and can actually be a selling point for the right buyer.',
      },
      {
        q: 'Do I have to evict tenants before selling in Winchester?',
        a: 'Not necessarily. If tenants are in place on a current lease, many investors will take over the lease. If the property is month-to-month or tenants are behind, we discuss whether eviction before sale makes financial sense given your timeline.',
      },
      {
        q: 'My Winchester rental needs work — does that hurt the sale?',
        a: 'Deferred maintenance is extremely common in rental properties. Investor buyers price it in and buy as-is. You don\'t need to invest in repairs before selling — I show you the net number with and without repairs so you can make a clear comparison.',
      },
      {
        q: 'Is a cash sale or MLS listing better for a Winchester rental property?',
        a: 'Depends on condition and tenancy. Well-maintained, tenanted rentals can list on MLS effectively. Distressed or problematic properties do better with investor buyers. I show you both paths and you decide.',
      },
      {
        q: 'What if I have multiple rental properties in Frederick County to sell?',
        a: 'That\'s a portfolio sale — a different conversation with more leverage. Investors often pay a premium for a package. Call me and we\'ll talk through what a multi-property exit looks like.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
