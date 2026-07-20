import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Middletown VA | Every Option',
  description: 'Sell your Middletown home fast for the most money. Licensed VA agent Dan White covers every option — cash, as-is listing, and more. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-middletown-va' },
  openGraph: {
    title: 'Sell My House Fast in Middletown VA | Every Option',
    description: 'Sell your Middletown home fast for the most money. Dan White goes over every option. Free consultation, no pressure.',
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
    bodyContent: `
      <h2>What a Fast, As-Is Sale Looks Like in Middletown</h2>
      <p>Selling as-is in Middletown means the property goes to the buyer in its current condition — no repairs, no cleanout, no repainting before anyone sees it. Cash buyers purchase homes exactly as they stand, which removes the back-and-forth over inspection items that can slow down or derail a traditional sale.</p>
      <p>It also gives you control over timing that a traditional MLS listing doesn't. Financed buyers still need to clear an appraisal and loan approval before a deal is truly done, which can take weeks and isn't guaranteed. A cash sale lets you set the closing date and know it's going to hold.</p>
      <h2>A Town Shaped by Its History</h2>
      <p>Middletown sits along Route 11 in Frederick County, close to the Cedar Creek and Belle Grove National Historical Park, where the 1864 Battle of Cedar Creek was fought. It's a small town with a mix of historic properties near its center and newer homes further out — each of which calls for a somewhat different approach when it comes to pricing and marketing.</p>
    `,
    faqs: [
      { q: 'Is Middletown part of the Frederick County real estate market?', a: 'Yes — Middletown is in Frederick County and benefits from the same buyer demand that has strengthened the broader Winchester/Frederick County market. I-81 access makes it attractive for commuters and investors.' },
      { q: 'Can I sell a Middletown home as-is?', a: 'Yes. Cash buyers and as-is listings both work here without any repairs or cleanup. I put your home in front of the buyer pool most likely to pay the most for it in its current condition.' },
      { q: 'How fast can I close on a Middletown property?', a: 'Cash closings run 7–21 days. As-is MLS listings in Frederick County have been moving well in current conditions. Your timeline sets the strategy.' },
      { q: 'Do you handle inherited and estate properties in Middletown?', a: 'Yes — estate sales throughout Frederick County including Middletown are a regular part of my work. Call me with your situation and we will figure out the right path.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
