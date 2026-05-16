import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House During Divorce in Berryville VA | Every Option Explained',
  description: 'Sell your Berryville home fast during divorce and walk away with the most money your situation allows. Licensed Virginia agent Dan White works with both parties for a fair outcome. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-divorce-berryville-va' },
  openGraph: { title: 'Selling a House During Divorce in Berryville VA', description: 'Selling a home during divorce in Berryville? Dan White handles the transaction professionally so both parties walk away with the most money. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-divorce-berryville-va' },
};

export default async function BerryvilleDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');
  const config = {
    slug: 'sell-house-divorce-berryville-va',
    city: 'Berryville', county: 'Clarke County', type: 'city',
    h1: 'Selling Your Berryville Home During Divorce — <em>Done Right.</em>',
    heroSub: 'The marital home is often the largest asset in a Clarke County divorce — and the most complicated to handle. Dan White works professionally with both parties and their attorneys to get the most money from the sale so there is the most to divide.',
    trustItems: ['20+ years in Clarke County sensitive sales', 'Licensed VA agent · Pearson Smith Realty', 'Works with both parties and their counsel', 'Confidential · No judgment · Free consultation'],
    faqs: [
      { q: 'Do both spouses need to sign off on selling the Berryville home?', a: 'If both names are on title, yes. I work with both parties professionally even when communication between them is difficult.' },
      { q: 'Is a cash sale or MLS listing better for a Berryville divorce?', a: 'Cash is faster and cleaner when communication is strained. MLS can produce more money if both parties can cooperate on showings. I show you both net numbers.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
