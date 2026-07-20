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
    faqs: [
      { q: 'Can I sell my Front Royal rental with tenants still living there?', a: 'Yes. Investors who want income-producing properties actively seek tenanted rentals. Selling with tenants in place avoids eviction and can be a selling point to the right buyer.' },
      { q: 'What if my Front Royal rental has significant deferred maintenance?', a: 'Very common in rental properties. Investor buyers price in the work and purchase as-is. You do not need to invest in repairs before selling.' },
      { q: 'What if I have multiple rentals in Warren County to sell?', a: 'Portfolio sales often attract premium interest from investors who want scale. Call me and we will discuss what a multi-property exit looks like.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
