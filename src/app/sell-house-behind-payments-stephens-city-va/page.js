import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Behind on Payments in Stephens City VA | Stop the Damage',
  description: 'Sell your Stephens City home fast and walk away with the most money your situation allows — even if you are behind on payments. Dan White goes over every option before foreclosure closes the door. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-behind-payments-stephens-city-va' },
  openGraph: {
    title: 'Sell My House Behind on Payments in Stephens City VA',
    description: 'Behind on payments in Stephens City? You still have options. Dan White walks you through every path. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-behind-payments-stephens-city-va',
  },
};

export default async function StephensCityBehindPaymentsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');

  const config = {
    slug: 'sell-house-behind-payments-stephens-city-va',
    city: 'Stephens City',
    county: 'Frederick County',
    type: 'city',
    h1: 'Behind on Payments in Stephens City? <em>You Still Have Options.</em>',
    heroSub: 'Being behind on payments in Stephens City is stressful — but it does not have to end in foreclosure. Dan White has helped Frederick County homeowners close fast, protect their credit, and walk away with money in situations that felt hopeless.',
    trustItems: [
      '20+ years in Frederick County distressed sales',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in as few as 7 days',
      'Confidential · No judgment · Free consultation',
    ],
    faqs: [
      { q: 'Can I sell my Stephens City home while behind on mortgage payments?', a: 'Yes — as long as foreclosure has not completed, you can sell. The sale pays off all arrears and the full mortgage balance at closing. You keep whatever equity remains.' },
      { q: 'How fast can I close on a Stephens City home in this situation?', a: 'Cash buyers can close in 7–21 days in Frederick County. That is often fast enough to stop foreclosure proceedings if you act early enough.' },
      { q: 'What if my Stephens City home is worth less than I owe?', a: 'Short sale is the path. The lender accepts a reduced payoff and you avoid foreclosure. I can walk you through how the process works and what to expect.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
