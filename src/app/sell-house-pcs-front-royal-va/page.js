import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Fast for PCS in Front Royal VA | Every Option',
  description: 'PCS orders out of Front Royal? Sell your home fast and walk away with the most money your timeline allows. Licensed Virginia agent Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-pcs-front-royal-va' },
  openGraph: {
    title: 'Sell Your House Fast for PCS in Front Royal VA',
    description: 'PCS orders out of Front Royal? Dan White walks you through every option to sell fast. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-pcs-front-royal-va',
  },
};

export default async function FrontRoyalPcsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');
  const config = {
    slug: 'sell-house-pcs-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'PCS Orders Out of Front Royal? <em>Sell Fast. Keep the Most Money.</em>',
    heroSub: 'Front Royal and Warren County military families face the same PCS pressure as everyone else — a hard report date and a home that needs to close. Dan White knows this market and moves fast. Every option available, structured around your timeline.',
    trustItems: [
      '20+ years in Warren County and the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in 7 days or on your military timeline',
      'Remote signing available',
    ],
    faqs: [
      { q: 'How fast can I sell my Front Royal home with PCS orders?', a: 'Cash sales close in 7 to 21 days in Warren County. Tell me your report date and I structure the sale around it.' },
      { q: 'Can I close on my Front Royal home remotely?', a: 'Yes — remote signing is standard. I handle coordination locally. You sign from your new duty station.' },
      { q: 'Should I sell or rent my Front Royal home on PCS?', a: 'Warren County rental demand is real. I give you the honest math on both — sell now vs. hold and rent — so you make the call with real numbers.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
