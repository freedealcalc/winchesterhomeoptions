import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Rental Property in Winchester VA | Tired Landlord Options',
  description: 'Sell your Winchester rental property fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — with tenants in place or vacant. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-tired-landlord-winchester-va' },
  openGraph: {
    title: 'Sell a Rental Property in Winchester VA | Tired Landlord Options',
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
