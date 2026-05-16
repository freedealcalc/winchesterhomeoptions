import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Stephens City VA | Every Option, Not Just One Cash Offer',
  description: 'Looking for cash home buyers in Stephens City VA? Sell your home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/we-buy-houses-stephens-city-va' },
  openGraph: { title: 'We Buy Houses Stephens City VA | Every Option, Not Just One Offer', description: 'Cash buyers in Stephens City VA? Dan White connects you with competing investors and shows you every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/we-buy-houses-stephens-city-va' },
};

export default async function WeBuyHousesStephensCityPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');
  const config = {
    slug: 'we-buy-houses-stephens-city-va',
    city: 'Stephens City', county: 'Frederick County', type: 'city',
    h1: 'We Buy Houses in Stephens City VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Stephens City is one of Frederick County\'s most active markets for investor buyers — which works directly in your favor. Dan White puts your property in front of that buyer pool, lets them compete, and makes sure every other option is on the table too. The most money your situation allows.',
    trustItems: ['20+ years in Frederick County and the Shenandoah Valley', 'Licensed VA agent · Pearson Smith Realty', 'Investor buyer pool that competes — you keep the difference', 'Every option explained honestly · Free consultation'],
    faqs: [
      { q: 'Do you actually buy houses in Stephens City?', a: 'Sometimes — but more often I connect sellers with a large pool of investor buyers who compete on the property. Competition almost always produces a better number than a single offer.' },
      { q: 'How fast can you close on a Stephens City home?', a: 'Cash buyers close in 7 to 21 days in Frederick County. As-is MLS listings move in 2 to 4 weeks in current market conditions. Your timeline sets the strategy.' },
      { q: 'Will I get a fair price from a cash buyer in Stephens City?', a: 'With one buyer — maybe. With multiple buyers competing on your property — almost certainly better.' },
      { q: 'What if my Stephens City home needs significant work?', a: 'Cash buyers and investors purchase as-is. Condition affects the price — it does not eliminate the sale or the competition.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
