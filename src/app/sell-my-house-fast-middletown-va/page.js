import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Middletown VA | Every Option, Honest Advice',
  description: 'Sell your Middletown home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more — so you make the right call. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-middletown-va' },
  openGraph: {
    title: 'Sell My House Fast in Middletown VA | Every Option, Honest Advice',
    description: 'Sell your Middletown home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-middletown-va',
  },
};

export default async function MiddletownPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Middletown', 'Frederick County');

  const config = {
    slug: 'sell-my-house-fast-middletown-va',
    city: 'Middletown',
    county: 'Frederick County',
    type: 'city',
    h1: 'Sell Your Middletown Home Fast — <em>For the Most Money</em>',
    heroSub: 'Middletown sits at the heart of Frederick County — small community, real market. Dan White has worked properties along this I-81 corridor for 20+ years and knows exactly what buyers are paying here. Every option on the table. No pressure.',
    trustItems: [
      '20+ years in Frederick County including the Middletown corridor',
      'Licensed VA agent · Pearson Smith Realty',
      'Any condition · Close fast or on your timeline',
      'Free consultation · No pressure',
    ],
    faqs: [
      { q: 'Is Middletown part of the Frederick County real estate market?', a: 'Yes — Middletown is in Frederick County and benefits from the same buyer demand that has strengthened the broader Winchester/Frederick County market. I-81 access makes it attractive for commuters and investors.' },
      { q: 'Can I sell a Middletown home as-is?', a: 'Yes. Cash buyers and as-is listings both work here without any repairs or cleanup. I put your home in front of the buyer pool most likely to pay the most for it in its current condition.' },
      { q: 'How fast can I close on a Middletown property?', a: 'Cash closings run 7–21 days. As-is MLS listings in Frederick County have been moving well in current conditions. Your timeline sets the strategy.' },
      { q: 'Do you handle inherited and estate properties in Middletown?', a: 'Yes — estate sales throughout Frederick County including Middletown are a regular part of my work. Call me with your situation and we will figure out the right path.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
