import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Winchester VA | Every Option Explained',
  description: 'Cash home buyers in Winchester VA — but also every other option. Licensed agent Dan White helps you get the most money for your home. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/we-buy-houses-winchester-va' },
  openGraph: { title: 'We Buy Houses Winchester VA | Every Option Explained', description: 'Cash home buyers in Winchester VA? Dan White connects you with competing investors and goes over every option — so you get the most money. Free consultation.', url: 'https://www.winchesterhomeoptions.com/we-buy-houses-winchester-va' },
};

export default async function WeBuyHousesWinchesterPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');
  const config = {
    slug: 'we-buy-houses-winchester-va',
    city: 'Winchester', county: 'Frederick County', type: 'city',
    h1: 'We Buy Houses in Winchester VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Yes — Dan White connects Winchester sellers with cash buyers who close fast. But unlike a company that only offers one thing, he also shows you the as-is listing, the wholetail, the competitive cash process — every path available — so you walk away with the most money your situation allows.',
    trustItems: ['20+ years in Winchester and Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Access to large investor buyer pool — they compete, you win', 'Every option explained honestly · Free consultation'],
    bodyContent: `
      <h2>What Selling for Cash in Winchester Actually Looks Like</h2>
      <p>The process starts with a walkthrough of the property and a written offer, usually within a day or two, based on the home's condition as it stands. If you accept, you set the closing date — there's no lender in the transaction to slow things down with an appraisal or a loan approval that can fall through late in the process.</p>
      <p>Winchester's investor demand is deep enough that condition rarely disqualifies a property from interest; it just affects where the offer lands.</p>
      <h2>Where Listing Falls Short for Sellers in a Hurry</h2>
      <p>A traditional Winchester listing means getting the home ready to show, scheduling around buyer availability, and accepting a financing contingency that can reopen negotiations after an inspection turns something up. A direct sale strips out each of those steps: no repairs required, no open houses, and no financing risk. What's left is one offer and a closing date that holds.</p>
    `,
    faqs: [
      { q: 'Do you actually buy houses in Winchester yourself?', a: 'Sometimes — but more often I connect sellers with a large pool of investor buyers who compete on the property. Competition almost always produces a better number than a single buyer negotiating alone.' },
      { q: 'How fast can you close on a Winchester home?', a: 'Cash buyers in our network close in 7 to 21 days in Frederick County. Tell me your timeline and I match the strategy.' },
      { q: 'Will I get a fair price from a cash buyer in Winchester?', a: 'With one buyer — maybe. With multiple buyers competing — almost certainly better. That is the difference in how I work vs. a single "we buy houses" company.' },
      { q: 'What if my Winchester home needs major repairs?', a: 'Not a problem. Cash buyers purchase as-is. Condition affects the offer price — it does not eliminate the sale. Multiple buyers competing on a distressed property produces the best number available.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
