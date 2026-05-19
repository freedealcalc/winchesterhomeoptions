/**
 * app/sell-house-pcs-norfolk-va/page.js
 * Target keywords: sell house pcs norfolk va, pcs orders naval station norfolk sell home
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Fast for PCS in Norfolk VA | Military Relocation Expert',
  description: 'PCS orders from Naval Station Norfolk? Sell your home fast and walk away with the most money your timeline allows. Dan White goes over every option structured around your report date. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-house-pcs-norfolk-va' },
  openGraph: {
    title: 'Sell Your House Fast for PCS in Norfolk VA | Military Relocation',
    description: 'PCS orders out of Norfolk? Dan White structures the sale around your report date so you close on time and keep the most money. Free consultation.',
    url: 'https://virginiahomeoptions.com/sell-house-pcs-norfolk-va',
  },
};

export default async function NorfolkPcsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Norfolk', 'Norfolk City');

  const config = {
    slug: 'sell-house-pcs-norfolk-va',
    city: 'Norfolk',
    county: 'Norfolk City',
    type: 'city',
    h1: 'PCS Orders Out of Norfolk? <em>Sell Fast. Keep the Most Money.</em>',
    heroSub: 'Naval Station Norfolk is the world\'s largest naval base — and the PCS cycle it generates makes Norfolk one of the most active motivated seller markets in Virginia. Dan White understands the military relocation timeline, the VA loan questions, and how to structure a sale that closes before your report date without leaving money on the table.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Naval Station Norfolk PCS expertise — understand the timeline',
      'VA loan assumption available when rate makes sense',
      'Remote signing — close from your new duty station',
    ],
    faqs: [
      {
        q: 'How fast can I sell my Norfolk home with PCS orders from Naval Station Norfolk?',
        a: 'Cash buyers close in 7 to 21 days in Norfolk. Tell me your report date first — I build the strategy backward from that deadline.',
      },
      {
        q: 'Should I sell or rent my Norfolk home on PCS?',
        a: 'Norfolk has a strong military rental market. I give you the honest numbers on both — sell now vs. hold and rent — so you make the call with real math, not guesswork.',
      },
      {
        q: 'Can I use VA loan assumption to sell my Norfolk home faster?',
        a: 'If your VA loan rate is significantly below current market rates, assumption can be a major selling advantage in Norfolk\'s military community. Takes longer to process but can attract premium interest from buyers who want your rate.',
      },
      {
        q: 'Can I close on my Norfolk home after I have already left for my new duty station?',
        a: 'Yes. Remote signing is standard. I coordinate the Norfolk side locally — you sign from wherever you are.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
