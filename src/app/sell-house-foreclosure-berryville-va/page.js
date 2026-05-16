import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Before Foreclosure in Berryville VA | Stop the Clock',
  description: 'Sell your Berryville home fast and walk away with the most money your situation allows — even facing foreclosure. Dan White goes over every option so you protect your credit and equity. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-berryville-va' },
  openGraph: {
    title: 'Sell Your House Before Foreclosure in Berryville VA',
    description: 'Facing foreclosure in Berryville? You may have more time and options than you think. Dan White goes over every path. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-berryville-va',
  },
};

export default async function BerryvilleForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');

  const config = {
    slug: 'sell-house-foreclosure-berryville-va',
    city: 'Berryville',
    county: 'Clarke County',
    type: 'city',
    h1: 'Facing Foreclosure in Berryville? <em>You Still Have Options.</em>',
    heroSub: 'Clarke County homeowners facing foreclosure have more runway than they often realize. Virginia law gives you the right to sell right up to the foreclosure sale date. Dan White has closed deals fast enough to stop foreclosure — protecting credit and putting money back in sellers\' pockets.',
    trustItems: [
      '20+ years in Clarke County distressed sales',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in as few as 7 days',
      'Confidential · No judgment · Free consultation',
    ],
    faqs: [
      { q: 'Can I sell my Berryville home to stop foreclosure?', a: 'Yes — in Virginia you can sell right up to the foreclosure sale date. A fast cash closing stops the process. Call me with your sale date and I will tell you immediately if we have enough time.' },
      { q: 'What happens to my equity if foreclosure proceeds in Clarke County?', a: 'Most of it disappears. Foreclosure auctions recover the lender balance — your equity above that is consumed by fees and penalties. Selling pre-foreclosure captures whatever equity remains.' },
      { q: 'How fast can I close on a Berryville home in this situation?', a: 'Cash buyers close in 7–21 days in Clarke County. Berryville is a thinner market than Winchester but investor buyers are active here. Time is the critical factor — the earlier you call, the more options we have.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
