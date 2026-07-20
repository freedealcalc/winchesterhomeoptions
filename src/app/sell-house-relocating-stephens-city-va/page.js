import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling Your House to Relocate from Stephens City VA',
  description: 'Relocating from Stephens City? Sell fast for the most money. Licensed agent Dan White covers every option so you close on your timeline. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-relocating-stephens-city-va' },
  openGraph: {
    title: 'Selling Your House to Relocate from Stephens City VA',
    description: 'Relocating from Stephens City? Dan White walks you through every option so you close on your timeline. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-relocating-stephens-city-va',
  },
};

export default async function StephensCityRelocatingPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');

  const config = {
    slug: 'sell-house-relocating-stephens-city-va',
    city: 'Stephens City',
    county: 'Frederick County',
    type: 'city',
    h1: 'Relocating from Stephens City? <em>Sell on Your Timeline.</em>',
    heroSub: 'Stephens City is a strong seller market right now — which means you do not have to choose between speed and price. Dan White gives you every option so you can close before you leave, or remotely after you have gone.',
    trustItems: [
      '20+ years selling homes for relocating Frederick County owners',
      'Licensed VA agent · Pearson Smith Realty',
      'Remote signing available',
      'Fast or full-price — your call',
    ],
    faqs: [
      { q: 'How fast can I sell my Stephens City home for relocation?', a: 'Cash buyers close in 7–21 days. Frederick County MLS listings have been moving in 2–4 weeks. Tell me your timeline and I match the strategy to it.' },
      { q: 'Can I sell my Stephens City home without being present for showings?', a: 'Yes. I handle showings and coordinate locally. You can be anywhere. Closing happens remotely via digital or notary signing.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
