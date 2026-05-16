import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Vacant House in Winchester VA | Every Option Explained',
  description: 'Sell your vacant Winchester home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — vacant properties are his specialty. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-vacant-house-winchester-va' },
  openGraph: {
    title: 'Sell a Vacant House in Winchester VA',
    description: 'Vacant property in Winchester costing you money every month? Dan White goes over every option to get it sold fast, for the most money. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-vacant-house-winchester-va',
  },
};

export default async function WinchesterVacantPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-vacant-house-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Vacant Property in Winchester? <em>Stop the Bleeding. Sell Fast.</em>',
    heroSub: 'Every month a vacant property sits, it costs you money — insurance, taxes, maintenance, vandalism risk. Dan White has helped Winchester and Frederick County owners get out from under vacant properties quickly, for the most money the market will support.',
    trustItems: [
      '20+ years handling vacant and distressed properties in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in as few as 7 days — stop the monthly drain',
      'Any condition · No cleanout required · Free consultation',
    ],
    faqs: [
      { q: 'How fast can I sell a vacant Winchester property?', a: 'Cash buyers can close in 7–21 days. Vacant properties often move faster because there is no occupant to coordinate with for showings or access. If speed is the priority, cash is the path.' },
      { q: 'My vacant Winchester home has been empty for years and needs a lot of work — what are my options?', a: 'Long-vacant properties with deferred maintenance are actually well-suited for the investor buyer pool. They purchase as-is, price in the work, and handle remediation after closing. No repairs needed from you.' },
      { q: 'Can I sell a vacant Winchester property that has been vandalized?', a: 'Yes. Vandalized and stripped properties sell to investors regularly — particularly in markets like Frederick County where renovation demand is strong. Condition affects price, but it does not eliminate the sale.' },
      { q: 'What about a vacant property with squatters in Winchester?', a: 'Squatter situations require care — Virginia has specific legal processes for removing occupants. I can help you understand the right sequence and connect you with the right resources. A sale is still possible once the occupancy situation is resolved.' },
      { q: 'Am I paying too much to insure a vacant Winchester property?', a: 'Almost certainly. Vacant home insurance premiums are significantly higher than standard homeowner policies — and most standard policies become void after 30–60 days of vacancy. Selling fast eliminates that ongoing cost entirely.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
