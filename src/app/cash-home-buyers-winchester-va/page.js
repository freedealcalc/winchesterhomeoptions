import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Cash Home Buyers in Winchester VA | Get the Most Money, Not Just a Fast Offer',
  description: 'Looking for cash home buyers in Winchester VA? Sell your Winchester home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White puts your property in front of competing buyers. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/cash-home-buyers-winchester-va' },
  openGraph: { title: 'Cash Home Buyers in Winchester VA | Get the Most Money', description: 'Cash home buyers in Winchester VA — Dan White connects you with competing investors so you get the best number, not just the fastest offer. Free consultation.', url: 'https://www.winchesterhomeoptions.com/cash-home-buyers-winchester-va' },
};

export default async function CashHomeBuyersWinchesterPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');
  const config = {
    slug: 'cash-home-buyers-winchester-va',
    city: 'Winchester', county: 'Frederick County', type: 'city',
    h1: 'Cash Home Buyers in Winchester VA — <em>Get the Most Money, Not Just a Fast Offer.</em>',
    heroSub: 'There is no shortage of cash buyers in Winchester and Frederick County. The question is whether you are getting the best number available or just the first offer that came in. Dan White puts your property in front of a large pool of competing buyers — so the market tells you what it is worth, not a single investor negotiating alone.',
    trustItems: ['20+ years in Winchester and Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Large cash buyer network — competition produces real numbers', 'Every option explained · Free consultation'],
    faqs: [
      { q: 'How do I find legitimate cash home buyers in Winchester VA?', a: 'Dan White works with a large network of investor buyers throughout Frederick County. Rather than sending you to one buyer, I put the property in front of many and let them compete. Call (571) 989-3269.' },
      { q: 'What is the difference between a cash buyer and using an agent in Winchester?', a: 'A single cash buyer negotiates against you alone. An agent who accesses the investor buyer pool gets competition — which almost always produces a better number. I do both.' },
      { q: 'How fast do cash buyers close in Winchester?', a: 'Typically 7 to 21 days in Frederick County. Cash buyers skip lender underwriting, appraisals, and financing contingencies — which compresses the timeline significantly.' },
      { q: 'Will a cash buyer purchase my Winchester home as-is?', a: 'Yes — cash buyers purchase as-is without requiring repairs, staging, or cleanup. Condition factors into the offer price, not into whether they will buy.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
