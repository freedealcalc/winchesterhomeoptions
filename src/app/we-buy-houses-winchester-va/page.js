import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Winchester VA | Every Option, Not Just One Cash Offer',
  description: 'Looking for cash home buyers in Winchester VA? Sell your Winchester home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/we-buy-houses-winchester-va' },
  openGraph: { title: 'We Buy Houses Winchester VA | Every Option, Not Just One Offer', description: 'Cash home buyers in Winchester VA? Dan White connects you with competing investors and goes over every option — so you get the most money. Free consultation.', url: 'https://www.winchesterhomeoptions.com/we-buy-houses-winchester-va' },
};

export default async function WeBuyHousesWinchesterPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');
  const config = {
    slug: 'we-buy-houses-winchester-va',
    city: 'Winchester', county: 'Frederick County', type: 'city',
    h1: 'We Buy Houses in Winchester VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Yes — Dan White connects Winchester sellers with cash buyers who close fast. But unlike a company that only offers one thing, he also shows you the as-is listing, the wholetail, the competitive cash process — every path available — so you walk away with the most money your situation allows.',
    trustItems: ['20+ years in Winchester and Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Access to large investor buyer pool — they compete, you win', 'Every option explained honestly · Free consultation'],
    faqs: [
      { q: 'Do you actually buy houses in Winchester yourself?', a: 'Sometimes — but more often I connect sellers with a large pool of investor buyers who compete on the property. Competition almost always produces a better number than a single buyer negotiating alone.' },
      { q: 'How fast can you close on a Winchester home?', a: 'Cash buyers in our network close in 7 to 21 days in Frederick County. Tell me your timeline and I match the strategy.' },
      { q: 'Will I get a fair price from a cash buyer in Winchester?', a: 'With one buyer — maybe. With multiple buyers competing — almost certainly better. That is the difference in how I work vs. a single "we buy houses" company.' },
      { q: 'What if my Winchester home needs major repairs?', a: 'Not a problem. Cash buyers purchase as-is. Condition affects the offer price — it does not eliminate the sale. Multiple buyers competing on a distressed property produces the best number available.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
