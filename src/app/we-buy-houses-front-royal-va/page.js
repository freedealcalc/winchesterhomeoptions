import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Front Royal VA | Every Option, Not Just One Cash Offer',
  description: 'Looking for cash home buyers in Front Royal VA? Sell your home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option. Free consultation, no pressure.',
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
    faqs: [
      { q: 'Do you actually buy houses in Front Royal?', a: 'Sometimes — but more often I connect sellers with a large pool of investor buyers who compete on the property. Competition almost always produces a better number than a single buyer negotiating alone.' },
      { q: 'How fast can you close on a Front Royal home?', a: 'Cash buyers in our network close in 7 to 21 days in Warren County. Tell me your timeline and I match the strategy.' },
      { q: 'Will I get a fair price from a cash buyer in Front Royal?', a: 'With one buyer — maybe. With multiple buyers competing — almost certainly better. That is the core difference in how I work vs. a single we buy houses company.' },
      { q: 'What if my Front Royal home needs major repairs?', a: 'Not a problem. Cash buyers purchase as-is and factor condition into the offer. Multiple investors competing produces the best available number.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
