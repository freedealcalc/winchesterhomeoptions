import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'PCS Orders in Stephens City VA? Sell Fast, Every Option',
  description: 'PCS orders out of Stephens City? Dan White, licensed VA agent, covers every option to sell fast for top dollar. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-pcs-stephens-city-va' },
  openGraph: {
    title: 'Sell Your House Fast for PCS in Stephens City VA',
    description: 'PCS orders out of Stephens City? Dan White walks you through every option to sell fast. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-pcs-stephens-city-va',
  },
};

export default async function StephensCityPcsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');
  const config = {
    slug: 'sell-house-pcs-stephens-city-va',
    city: 'Stephens City',
    county: 'Frederick County',
    type: 'city',
    h1: 'PCS Orders Out of Stephens City? <em>Sell Fast. Keep the Most Money.</em>',
    heroSub: 'Military families in Stephens City and Frederick County need a sale that works around their report date — not the other way around. Dan White structures every transaction around your timeline. Every option available. Remote closing standard.',
    trustItems: [
      '20+ years in Frederick County working with military families',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in 7 days or on your timeline',
      'Remote signing available',
    ],
    faqs: [
      { q: 'How fast can I sell my Stephens City home with PCS orders?', a: 'Cash sales close in 7 to 21 days in Frederick County. As-is MLS listings move quickly in current market conditions. Tell me your report date and I match the strategy.' },
      { q: 'Can I sell my Stephens City home remotely after PCS?', a: 'Yes. Remote closing is standard. I coordinate locally so you can focus on your new assignment.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
