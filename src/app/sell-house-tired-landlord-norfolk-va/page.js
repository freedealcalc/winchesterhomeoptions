/**
 * app/sell-house-tired-landlord-norfolk-va/page.js
 * Target keywords: sell rental property norfolk va, tired landlord norfolk virginia
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Rental Property in Norfolk VA | Tired Landlord Options',
  description: 'Sell your Norfolk rental property fast and walk away with the most money your situation allows. Dan White goes over every exit option — tenants in place or vacant. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-house-tired-landlord-norfolk-va' },
  openGraph: {
    title: 'Sell a Rental Property in Norfolk VA | Tired Landlord Options',
    description: 'Done being a landlord in Norfolk? Dan White walks you through every exit. Free consultation.',
    url: 'https://virginiahomeoptions.com/sell-house-tired-landlord-norfolk-va',
  },
};

export default async function NorfolkTiredLandlordPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Norfolk', 'Norfolk City');

  const config = {
    slug: 'sell-house-tired-landlord-norfolk-va',
    city: 'Norfolk',
    county: 'Norfolk City',
    type: 'city',
    h1: 'Done Being a Landlord in Norfolk? <em>Here Is Your Clean Exit.</em>',
    heroSub: 'Norfolk rental properties have unique dynamics — military tenant turnover, older housing stock that requires constant maintenance, and a city landlord-tenant environment that has gotten more complex. Whether you have one rental or a portfolio, Dan White gives you every exit option with honest numbers on each. Norfolk has strong investor demand for rental properties in any condition.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Sell with military or civilian tenants in place — both work',
      'Portfolio sales handled · Multi-family experience',
      'No judgment · Free consultation',
    ],
    faqs: [
      {
        q: 'Can I sell my Norfolk rental with military tenants in place?',
        a: 'Yes. Investors who want income-producing properties in the military rental market actively seek tenanted Norfolk properties. Military tenants with active leases can actually be a selling point to the right buyer.',
      },
      {
        q: 'My Norfolk rental has significant deferred maintenance — does that hurt the sale?',
        a: 'No. Rental property deferred maintenance is extremely common and Norfolk investors know it. They purchase as-is and factor repairs into their offer.',
      },
      {
        q: 'What about selling a multi-family Norfolk rental?',
        a: 'Multi-family in Norfolk — duplexes, triplexes, small apartment buildings — has strong demand from investors who want the military rental income stream. Call me and we will discuss what a multi-family exit looks like.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
