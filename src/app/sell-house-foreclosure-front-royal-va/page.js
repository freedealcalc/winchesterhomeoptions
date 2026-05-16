import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Before Foreclosure in Front Royal VA | Stop the Clock',
  description: 'Sell your Front Royal home fast and walk away with the most money your situation allows — even facing foreclosure. Licensed Virginia agent Dan White goes over every option so you protect your credit and your equity. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-front-royal-va' },
  openGraph: {
    title: 'Sell Your House Before Foreclosure in Front Royal VA',
    description: 'Facing foreclosure in Front Royal? You may have more time and more options than you think. Dan White goes over every path — fast enough to stop the clock. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-front-royal-va',
  },
};

export default async function FrontRoyalForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');

  const config = {
    slug: 'sell-house-foreclosure-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'Facing Foreclosure in Front Royal? <em>You Still Have Options.</em>',
    heroSub: 'Front Royal and Warren County homeowners facing foreclosure often have more runway than they think. Virginia law gives you the right to sell right up to the sale date. Dan White has closed deals in days — fast enough to stop foreclosure, protect your credit, and put money back in your pocket.',
    trustItems: [
      '20+ years in Warren County and the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in as few as 7 days — fast enough to stop most foreclosures',
      'No judgment · Confidential · Free consultation',
    ],
    faqs: [
      {
        q: 'Can I sell my Front Royal home before the foreclosure sale date?',
        a: 'Yes. Virginia law allows you to sell your property up until the foreclosure sale actually occurs. Once you have a buyer and a closing date that beats your sale date, the foreclosure stops. Time is the critical factor — call as early as possible.',
      },
      {
        q: 'What happens to my equity if I let foreclosure proceed in Warren County?',
        a: 'Most sellers lose it. The foreclosure auction recovers the lender\'s balance — whatever equity you had above that is consumed by penalties, legal fees, and auction processes. Selling pre-foreclosure lets you keep that equity.',
      },
      {
        q: 'I\'m already behind on payments — is it too late?',
        a: 'Probably not. Being behind on payments triggers the foreclosure process but doesn\'t end your options. As long as the actual auction hasn\'t happened, you can sell. Call me with where you are in the process and I\'ll tell you exactly what\'s possible.',
      },
      {
        q: 'Do I need to fix up the home before selling in Front Royal?',
        a: 'No. Every option I work with — cash buyers, as-is listings, wholetail — works without any repairs or cleanup. The home sells exactly as it stands.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
