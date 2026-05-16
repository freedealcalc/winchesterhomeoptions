import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House During Divorce in Warren County VA | Every Option Explained',
  description: 'Sell your Warren County home fast during divorce and walk away with the most money your situation allows. Licensed Virginia agent Dan White works with both parties for a fair outcome. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-divorce-warren-county-va' },
  openGraph: { title: 'Selling a House During Divorce in Warren County VA', description: 'Selling a home during divorce in Warren County? Dan White handles the transaction professionally. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-divorce-warren-county-va' },
};

export default async function WarrenCountyDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Warren County', 'Warren County');
  const config = {
    slug: 'sell-house-divorce-warren-county-va',
    city: null, county: 'Warren County', type: 'county',
    h1: 'Selling Your Warren County Home During Divorce — <em>Done Right.</em>',
    heroSub: 'The marital home is often the largest and most contested asset in a Warren County divorce. Dan White handles the transaction professionally, works with both parties and their attorneys, and makes sure you extract the most money possible from the sale so there is the most to divide.',
    trustItems: ['20+ years handling sensitive sales in Warren County', 'Licensed VA agent · Pearson Smith Realty', 'Works with both parties and their counsel', 'Confidential · No judgment · Free consultation'],
    faqs: [
      { q: 'Do both spouses have to agree to sell the Warren County home?', a: 'If both names are on the title, yes. I work with both parties professionally — even when direct communication between spouses is difficult.' },
      { q: 'Is a cash sale or MLS listing better for a Warren County divorce?', a: 'Cash is faster and requires less coordination — better when communication is strained. MLS can produce more money if both parties can cooperate on showings. I show you both net numbers.' },
      { q: 'Can we sell a Warren County home as-is during divorce?', a: 'Yes. Cash buyers and as-is listings work without any repairs or updates — often the fastest path when both parties want to close a chapter.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
