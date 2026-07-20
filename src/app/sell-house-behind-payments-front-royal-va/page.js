import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Behind on Payments in Front Royal, VA? Stop the Damage',
  description: 'Behind on mortgage payments in Front Royal? Dan White reviews every option before foreclosure. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-behind-payments-front-royal-va' },
  openGraph: {
    title: 'Behind on Payments in Front Royal, VA? Stop the Damage',
    description: 'Behind on payments in Front Royal? You still have options. Dan White walks you through every path before foreclosure. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-behind-payments-front-royal-va',
  },
};

export default async function FrontRoyalBehindPaymentsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');

  const config = {
    slug: 'sell-house-behind-payments-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'Behind on Payments in Front Royal? <em>You Still Have Options.</em>',
    heroSub: 'Falling behind on mortgage payments in Front Royal does not mean foreclosure is inevitable. Dan White has helped Warren County homeowners in this exact situation close fast, stop the damage to their credit, and walk away with money instead of a foreclosure record.',
    trustItems: [
      '20+ years in Warren County distressed sales',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in as few as 7 days',
      'Confidential · No judgment · Free consultation',
    ],
    faqs: [
      { q: 'How much time do I have if I am behind on payments in Front Royal?', a: 'Virginia foreclosure timelines can move quickly once initiated — often 30–90 days from default notice to sale date. The earlier you act, the more options you have. Call me with where you are in the process.' },
      { q: 'Can I sell my Front Royal home while behind on payments?', a: 'Yes. The sale pays off your mortgage including arrears at closing. As long as you have enough equity to cover the full balance owed, you walk away with the difference.' },
      { q: 'What if I owe more than my Front Royal home is worth?', a: 'A short sale is the path — the lender agrees to a reduced payoff. It is complex but far better than foreclosure for your credit and financial future. I can walk you through how it works.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
