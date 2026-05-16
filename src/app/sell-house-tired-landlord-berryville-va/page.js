import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Rental Property in Berryville VA | Tired Landlord Options',
  description: 'Sell your Berryville rental property fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every exit option — tenants in place or vacant. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-tired-landlord-berryville-va' },
  openGraph: { title: 'Sell a Rental Property in Berryville VA | Tired Landlord Options', description: 'Done being a landlord in Berryville? Dan White walks you through every exit option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-tired-landlord-berryville-va' },
};

export default async function BerryvilleTiredLandlordPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');
  const config = {
    slug: 'sell-house-tired-landlord-berryville-va',
    city: 'Berryville', county: 'Clarke County', type: 'city',
    h1: 'Done Being a Landlord in Berryville? <em>Here Is Your Clean Exit.</em>',
    heroSub: 'Clarke County rental properties have their own buyer pool — investors who want rural Virginia and small-town character. Dan White has 20+ years of investment experience in the Valley and knows exactly how to position your Berryville rental for the cleanest, most profitable exit.',
    trustItems: ['20+ years of rental and investment experience in the Valley', 'Licensed VA agent · Pearson Smith Realty', 'Sell with tenants or vacant — both work', 'No judgment · Free consultation'],
    faqs: [
      { q: 'Can I sell my Berryville rental with tenants in place?', a: 'Yes. Investors who want income-producing rural properties in Clarke County actively look for tenanted rentals. Tenants in place can actually be a selling point to the right buyer.' },
      { q: 'My Berryville rental needs significant work — does that kill the sale?', a: 'No. Deferred maintenance is common in rental properties and investor buyers know it. They purchase as-is and factor repairs into their offer.' },
      { q: 'Is there demand for rental properties in Clarke County?', a: 'Yes — Clarke County attracts investors who want rural Virginia assets at prices below the Winchester market. Berryville rentals have real buyer interest.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
