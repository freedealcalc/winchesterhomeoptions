import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Berryville VA | Every Option, Not Just One Cash Offer',
  description: 'Looking for cash home buyers in Berryville VA? Sell your home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/we-buy-houses-berryville-va' },
  openGraph: { title: 'We Buy Houses Berryville VA | Every Option, Not Just One Offer', description: 'Cash buyers in Berryville VA? Dan White connects you with competing investors and shows you every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/we-buy-houses-berryville-va' },
};

export default async function WeBuyHousesBerryvillePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');
  const config = {
    slug: 'we-buy-houses-berryville-va',
    city: 'Berryville', county: 'Clarke County', type: 'city',
    h1: 'We Buy Houses in Berryville VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Berryville and Clarke County attract buyers who know value — and Dan White knows how to find them and get them competing on your property. Every option on the table. Honest numbers. The most money your situation allows.',
    trustItems: ['20+ years in Clarke County and the Shenandoah Valley', 'Licensed VA agent · Pearson Smith Realty', 'Investor buyer pool — they compete, you win', 'Every option explained honestly · Free consultation'],
    faqs: [
      { q: 'Do you buy houses in Berryville and Clarke County?', a: 'Sometimes directly, but more often I connect sellers with a pool of investor buyers who compete. Clarke County is a thinner market than Winchester — which makes accessing the full buyer pool even more important.' },
      { q: 'How fast can you close on a Berryville home?', a: 'Cash buyers close in 7 to 21 days. Clarke County is a smaller market — strategic buyer access matters more here than in Winchester or Frederick County.' },
      { q: 'What if my Berryville home is older or needs significant work?', a: 'Older homes and rural properties in Clarke County sell to investors and buyers who want character and land. As-is, no repairs required.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
