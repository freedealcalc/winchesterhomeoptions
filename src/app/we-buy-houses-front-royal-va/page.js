import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses in Front Royal, VA | Every Option',
  description: 'Cash home buyers in Front Royal? Licensed agent Dan White connects you with competing buyers and shows every option. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/we-buy-houses-front-royal-va' },
  openGraph: { title: 'We Buy Houses Front Royal VA | Every Option, Not Just One Offer', description: 'Cash buyers in Front Royal VA? Dan White connects you with competing investors and shows you every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/we-buy-houses-front-royal-va' },
};

export default async function WeBuyHousesFrontRoyalPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');
  const config = {
    slug: 'we-buy-houses-front-royal-va',
    city: 'Front Royal', county: 'Warren County', type: 'city',
    h1: 'We Buy Houses in Front Royal VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Front Royal and Warren County have strong investor buyer demand — and sellers who approach the market with every option on the table consistently outperform those who take the first cash offer. Dan White puts your property in front of a large pool of competing buyers so you walk away with the real number.',
    trustItems: ['20+ years in Warren County and the Shenandoah Valley', 'Licensed VA agent · Pearson Smith Realty', 'Large investor buyer pool — they compete, you win', 'Every option explained honestly · Free consultation'],
    bodyContent: `
      <h2>What Actually Happens When You Sell for Cash in Front Royal</h2>
      <p>A cash sale in Front Royal starts with a look at the property, a written offer within a day or two, and — once you accept — a closing date scheduled on your timeline rather than a lender's. Because there's no mortgage underwriting standing between the offer and the closing table, there's also no risk of the deal falling apart in week five over a low appraisal or a financing denial.</p>
      <p>Warren County's investor demand has been strong enough that most Front Royal properties, regardless of condition, get real interest — meaning a cash sale here isn't a last-resort option but a genuinely competitive one.</p>
      <h2>Skipping the Parts of a Sale That Slow It Down</h2>
      <p>Listing a Front Royal home the traditional way means repairs before it photographs well, weeks of showings around your schedule, and a financing contingency that can reopen negotiations after an inspection. A direct sale removes all three: no repair list, no open houses, no financing to fall through. What's left is a straightforward transaction — offer, acceptance, closing — on a schedule you set.</p>
    `,
    faqs: [
      { q: 'Do you actually buy houses in Front Royal?', a: 'Sometimes — but more often I connect sellers with a large pool of investor buyers who compete on the property. Competition almost always produces a better number than a single buyer negotiating alone.' },
      { q: 'How fast can you close on a Front Royal home?', a: 'Cash buyers in our network close in 7 to 21 days in Warren County. Tell me your timeline and I match the strategy.' },
      { q: 'Will I get a fair price from a cash buyer in Front Royal?', a: 'With one buyer — maybe. With multiple buyers competing — almost certainly better. That is the core difference in how I work vs. a single we buy houses company.' },
      { q: 'What if my Front Royal home needs major repairs?', a: 'Not a problem. Cash buyers purchase as-is and factor condition into the offer. Multiple investors competing produces the best available number.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
