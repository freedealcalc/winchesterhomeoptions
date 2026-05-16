import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Fast for PCS in Winchester VA | Every Option',
  description: 'PCS orders out of Winchester? Sell your home fast and walk away with the most money your timeline allows. Licensed Virginia agent Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-pcs-winchester-va' },
  openGraph: {
    title: 'Sell Your House Fast for PCS in Winchester VA',
    description: 'PCS orders out of Winchester? Dan White walks you through every option to sell fast and keep the most money. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-pcs-winchester-va',
  },
};

export default async function WinchesterPcsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');
  const config = {
    slug: 'sell-house-pcs-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'PCS Orders Out of Winchester? <em>Sell Fast. Keep the Most Money.</em>',
    heroSub: 'PCS timelines are real deadlines. Dan White has helped military families sell Winchester and Frederick County homes for 20+ years — structured around report dates, not around what is convenient for the market. Every option on the table. Remote signing available.',
    trustItems: [
      '20+ years working with military families in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in 7 days or on your report date timeline',
      'Remote signing — sell from anywhere',
    ],
    faqs: [
      { q: 'How fast can I sell my Winchester home with PCS orders?', a: 'Cash sales close in 7 to 21 days in Frederick County. As-is MLS listings move in 2 to 4 weeks in current market conditions. Tell me your report date and I tell you which option works.' },
      { q: 'Can I sell my Winchester home after I have left for my new duty station?', a: 'Yes. Remote signing is standard. I coordinate everything locally — you sign from wherever you are.' },
      { q: 'Should I sell or rent my Winchester home for PCS?', a: 'Depends on your rate, your equity, and how long you expect to be gone. I give you the honest numbers on both. No pitch either way.' },
      { q: 'Does my VA loan affect how fast I can sell in Winchester?', a: 'No — VA loans pay off at closing like any mortgage. Your entitlement restores so you can use your VA benefit at your next duty station.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
