import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Before Foreclosure in Stephens City VA | Stop the Clock',
  description: 'Facing foreclosure in Stephens City? Licensed agent Dan White covers every option to sell fast, protect your credit and equity. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-stephens-city-va' },
  openGraph: {
    title: 'Sell Your House Before Foreclosure in Stephens City VA',
    description: 'Facing foreclosure in Stephens City? You may have more time and more options than you think. Dan White goes over every path — fast enough to stop the clock. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-stephens-city-va',
  },
};

export default async function StephensCityForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');

  const config = {
    slug: 'sell-house-foreclosure-stephens-city-va',
    city: 'Stephens City',
    county: 'Frederick County',
    type: 'city',
    h1: 'Facing Foreclosure in Stephens City? <em>You Still Have Options.</em>',
    heroSub: 'Receiving foreclosure notices doesn\'t mean it\'s over. In Virginia you can sell right up to the foreclosure sale date. Dan White has helped Frederick County homeowners in this exact situation close fast, protect their credit, and walk away with money — not just debt.',
    trustItems: [
      '20+ years in Frederick County distressed sales',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in as few as 7 days',
      'No judgment · Confidential · Free consultation',
    ],
    faqs: [
      {
        q: 'Can I still sell my Stephens City home if foreclosure has started?',
        a: 'Yes. In Virginia you retain the right to sell your property up until the actual foreclosure sale date. Even with a sale date set, a fast cash closing can stop it. The earlier you call, the more options you have.',
      },
      {
        q: 'How much equity will I lose if I let foreclosure happen?',
        a: 'Typically all of it. Foreclosure auctions are designed to recover the lender\'s balance — any equity above that often evaporates in fees, penalties, and auction dynamics. Selling before foreclosure lets you capture whatever equity remains.',
      },
      {
        q: 'What if I can\'t afford to make repairs before selling?',
        a: 'You don\'t have to. Cash buyers and as-is listings don\'t require any repairs or cleanup. We work with the home exactly as it stands.',
      },
      {
        q: 'How do I know if I have enough time to close before my foreclosure date?',
        a: 'Call me with your sale date and I\'ll tell you immediately whether we can make it work. Cash closings in Frederick County can happen in 7–14 days. That\'s often enough time even with a looming deadline.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
