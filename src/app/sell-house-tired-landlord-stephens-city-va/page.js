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
    faqs: [
      { q: 'Can I sell my Stephens City rental with tenants in place?', a: 'Yes. Investors buying in Frederick County regularly purchase tenanted rentals. If the lease terms are reasonable, tenants in place can actually be a selling point.' },
      { q: 'My Stephens City rental needs a lot of work — will that kill the sale?', a: 'No. Deferred maintenance is the norm in rental properties and investor buyers know it. They purchase as-is and factor repairs into their offer. You do not spend a dollar on prep.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
