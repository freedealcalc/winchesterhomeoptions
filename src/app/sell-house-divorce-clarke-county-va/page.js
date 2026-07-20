import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House During Divorce in Clarke County VA',
  description: 'Selling a house during divorce in Clarke County VA? Dan White works with both parties for a fair, fast outcome. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-divorce-clarke-county-va' },
  openGraph: { title: 'Selling a House During Divorce in Clarke County VA', description: 'Selling a home during divorce in Clarke County? Dan White acts as a neutral third party and handles the transaction professionally. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-divorce-clarke-county-va' },
};

export default async function ClarkeCountyDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Clarke County', 'Clarke County');
  const config = {
    slug: 'sell-house-divorce-clarke-county-va',
    city: null, county: 'Clarke County', type: 'county',
    h1: 'Selling Your Clarke County Home During Divorce — <em>Handled Neutrally.</em>',
    heroSub: 'A rural Clarke County property, whether it is a Berryville farmhouse or a home with acreage, often takes longer to value fairly and longer to sell than a typical subdivision house, which makes a clear-eyed neutral party even more important during a divorce. Dan White works with both spouses and their attorneys, and sets a realistic timeline based on the smaller Clarke County buyer pool rather than a generic one.',
    trustItems: ['20+ years handling sensitive sales in Clarke County', 'Licensed VA agent · Pearson Smith Realty', 'Neutral third party — works with both spouses and their attorneys', 'Confidential · No judgment · Free consultation'],
    faqs: [
      { q: 'Do both spouses need to agree to sell our Clarke County home?', a: 'If both names are on the title, yes. I stay neutral and give both sides the same information at the same time, which keeps the process moving even under strain.' },
      { q: 'How long does a divorce sale typically take in a county as rural as Clarke?', a: 'Longer than a typical subdivision sale, since the buyer pool is smaller and more specific. I set expectations up front so neither spouse is caught off guard, and build in the flexibility a rural sale usually needs.' },
      { q: 'Should we sell for cash or list on the MLS during a Clarke County divorce?', a: 'Cash is faster and needs minimal coordination between spouses, which helps when communication is difficult. An MLS listing can bring in more for a well-located Clarke County property if both parties can cooperate on showings. I show you both numbers before you choose.' },
      { q: 'Can we sell our Clarke County home as-is during the divorce?', a: 'Yes. Cash buyers purchase Clarke County properties, including farmhouses and homes with acreage, exactly as they are. Neither spouse has to fund repairs on a house you are both moving on from.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
