import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Behind on Payments in Winchester VA | Stop the Damage Now',
  description: 'Sell your Winchester home fast and walk away with the most money your situation allows — even if you\'re behind on payments. Licensed Virginia agent Dan White goes over every option before foreclosure takes it off the table. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-behind-payments-winchester-va' },
  openGraph: {
    title: 'Sell My House Behind on Payments in Winchester VA',
    description: 'Behind on mortgage payments in Winchester? You still have options — and time. Dan White walks you through every path before foreclosure becomes the only one. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-behind-payments-winchester-va',
  },
};

export default async function WinchesterBehindPaymentsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-house-behind-payments-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Behind on Payments in Winchester? <em>You Still Have Options.</em>',
    heroSub: 'Falling behind on mortgage payments feels like a spiral — and the longer it goes, the fewer options you have. Dan White has helped Winchester and Frederick County homeowners in exactly this situation sell fast, stop the damage, and walk away with money instead of a foreclosure on their record.',
    trustItems: [
      '20+ years helping distressed sellers in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in as few as 7 days — before foreclosure locks you out',
      'Confidential · No judgment · Free consultation',
    ],
    faqs: [
      {
        q: 'If I\'m behind on payments in Winchester, how much time do I have before foreclosure?',
        a: 'Virginia is a non-judicial foreclosure state — the process can move relatively fast once a lender initiates it. Typically 30–90 days from the first default notice to a sale date, though timelines vary. The earlier you act, the more options you have.',
      },
      {
        q: 'Can I sell my Winchester home while behind on payments?',
        a: 'Yes — as long as foreclosure proceedings haven\'t concluded. The sale pays off the mortgage at closing, including any arrears. You keep whatever equity remains after paying off the full balance owed.',
      },
      {
        q: 'What if I owe more than the Winchester home is worth?',
        a: 'That\'s an upside-down or underwater situation. The path forward is a short sale — the lender agrees to accept less than the full balance. It\'s more complex but doable, and far better for your credit than foreclosure.',
      },
      {
        q: 'Will selling fast mean I get less money for my Winchester home?',
        a: 'Not necessarily. A cash sale is typically below market but fast. An as-is listing can close in 2–4 weeks and often generates more. I show you both numbers — speed vs. maximum return — and you make the call based on your actual deadline.',
      },
      {
        q: 'Can I sell and then have time to find somewhere to live?',
        a: 'Yes. Post-closing occupancy agreements are common — you close the sale and have an agreed period (often 30–60 days) to vacate. We build that into the contract upfront.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
