/**
 * app/sell-house-tired-landlord-virginia-beach-va/page.js
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Rental Property in Virginia Beach VA | Tired Landlord Options',
  description: 'Sell your Virginia Beach rental property fast and walk away with the most money your situation allows. Dan White goes over every exit option — tenants in place or vacant. Free consultation.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-house-tired-landlord-virginia-beach-va' },
  openGraph: { title: 'Sell a Rental Property in Virginia Beach VA | Tired Landlord', description: 'Done being a landlord in Virginia Beach? Dan White walks you through every exit option. Free consultation.', url: 'https://virginiahomeoptions.com/sell-house-tired-landlord-virginia-beach-va' },
};

export default async function VirginiaBeachTiredLandlordPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Virginia Beach', 'Virginia Beach City');
  const config = {
    slug: 'sell-house-tired-landlord-virginia-beach-va',
    city: 'Virginia Beach', county: 'Virginia Beach City', type: 'city',
    h1: 'Done Being a Landlord in Virginia Beach? <em>Here Is Your Clean Exit.</em>',
    heroSub: 'Virginia Beach rental properties — military tenants on short leases, vacation rentals with seasonal income volatility, or just properties that have become more headache than they are worth. Dan White gives you every exit option with honest numbers. Virginia Beach has strong investor demand for rental properties in any condition.',
    trustItems: ['Licensed VA real estate agent · Pearson Smith Realty', 'Military and civilian rentals both handled', 'Vacation rental properties covered', 'No judgment · Free consultation'],
    faqs: [
      { q: 'Can I sell my Virginia Beach rental with military tenants in place?', a: 'Yes. Investors who want military rental income actively seek tenanted Virginia Beach properties. Military tenants on active leases can be a selling point.' },
      { q: 'What about selling a Virginia Beach vacation rental?', a: 'Vacation rentals in Virginia Beach have their own investor pool — buyers who want the short-term rental income stream. Selling with bookings in place or vacant both have buyer markets.' },
      { q: 'My Virginia Beach rental needs significant work — does that hurt the sale?', a: 'No. Deferred maintenance is standard in rental properties and investor buyers price it in. They purchase as-is.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
