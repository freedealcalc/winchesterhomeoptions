import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Before Foreclosure in Warren County VA | Stop the Clock',
  description: 'Sell your Warren County home fast and walk away with the most money your situation allows — even facing foreclosure. Dan White goes over every option so you protect your credit and equity. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-warren-county-va' },
  openGraph: { title: 'Sell Your House Before Foreclosure in Warren County VA', description: 'Facing foreclosure in Warren County? You have more time and options than you think. Dan White goes over every path. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-warren-county-va' },
};

export default async function WarrenCountyForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Warren County', 'Warren County');
  const config = {
    slug: 'sell-house-foreclosure-warren-county-va',
    city: null, county: 'Warren County', type: 'county',
    h1: 'Facing Foreclosure in Warren County? <em>You Still Have Options.</em>',
    heroSub: 'Warren County homeowners facing foreclosure have more runway than they often realize. Virginia law gives you the right to sell right up to the foreclosure sale date. Dan White has closed deals fast enough to stop foreclosure, protect credit, and put money back in sellers\' pockets throughout this market.',
    trustItems: ['20+ years in Warren County distressed sales', 'Licensed VA agent · Pearson Smith Realty', 'Close in as few as 7 days — fast enough to stop most foreclosures', 'Confidential · No judgment · Free consultation'],
    faqs: [
      { q: 'Can I sell my Warren County home to stop foreclosure?', a: 'Yes — in Virginia you can sell right up to the foreclosure sale date. A fast cash closing stops the process. Call me with your sale date and I tell you immediately if we have enough time.' },
      { q: 'What happens to my equity if foreclosure proceeds in Warren County?', a: 'Most of it disappears. Foreclosure auctions recover the lender balance — equity above that is consumed by fees and penalties. Selling pre-foreclosure captures whatever equity remains.' },
      { q: 'How fast can I close on a Warren County home facing foreclosure?', a: 'Cash buyers close in 7 to 21 days throughout Warren County and Front Royal. The earlier you call, the more options we have.' },
      { q: 'What if I owe more than my Warren County home is worth?', a: 'A short sale is the path — the lender agrees to accept less than full payoff. Far better than foreclosure for your credit and financial future. I can walk you through how it works.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
