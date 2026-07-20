import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Fast for PCS in Winchester VA | Every Option',
  description: 'PCS orders out of Winchester? Sell fast for the most money your timeline allows. Dan White covers every option. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-pcs-winchester-va' },
  openGraph: {
    title: 'Sell Your House Fast for PCS in Winchester VA',
    description: 'PCS orders out of Winchester? Dan White walks you through every option to sell fast and keep the most money. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-pcs-winchester-va',
  },
};

export default async function WinchesterPcsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');
  const config = {
    slug: 'sell-house-pcs-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'PCS Orders Out of Winchester? <em>Sell Fast. Keep the Most Money.</em>',
    heroSub: 'PCS timelines are real deadlines. Dan White has helped military families sell Winchester and Frederick County homes for 20+ years — structured around report dates, not around what is convenient for the market. Every option on the table. Remote signing available.',
    trustItems: [
      '20+ years working with military families in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in 7 days or on your report date timeline',
      'Remote signing — sell from anywhere',
    ],
    bodyContent: `
      <h2>The SCRA Backstop Behind Every Military Home Sale</h2>
      <p>Even with orders in hand and a home to sell, it helps to know what protection actually exists if things get complicated. The Servicemembers Civil Relief Act prevents a lender from foreclosing on a pre-service mortgage without a genuine court order while you're on active duty, and for a full 12 months afterward — and it specifically prevents default judgments in foreclosure cases, so a lender can't win by default just because you're deployed or reassigned. You can also request that the interest rate on that pre-service debt be capped at 6% for the duration of active duty and one additional year.</p>
      <p>This is a legal backstop, not a sale strategy — it protects you if a mortgage issue arises, but it doesn't change how fast a Winchester property actually sells. For specifics tied to your orders or your loan, your local JAG office is the resource to use.</p>
      <h2>Why a PCS Sale Can't Run on a Normal Timeline</h2>
      <p>A typical Winchester listing has room to wait for the right offer. A PCS sale doesn't — the report date on your orders is fixed, and everything about the sale needs to be scheduled backward from it rather than forward from when the house happens to sell in the ordinary course.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about SCRA protections and PCS timelines, not legal advice for your specific situation — confirm your specific situation with your local JAG office or a real estate attorney before relying on any SCRA protection or assuming how it applies to your orders.</p>
    `,
    faqs: [
      { q: 'How fast can I sell my Winchester home with PCS orders?', a: 'Cash sales close in 7 to 21 days in Frederick County. As-is MLS listings move in 2 to 4 weeks in current market conditions. Tell me your report date and I tell you which option works.' },
      { q: 'Can I sell my Winchester home after I have left for my new duty station?', a: 'Yes. Remote signing is standard. I coordinate everything locally — you sign from wherever you are.' },
      { q: 'Should I sell or rent my Winchester home for PCS?', a: 'Depends on your rate, your equity, and how long you expect to be gone. I give you the honest numbers on both. No pitch either way.' },
      { q: 'Does my VA loan affect how fast I can sell in Winchester?', a: 'No — VA loans pay off at closing like any mortgage. Your entitlement restores so you can use your VA benefit at your next duty station.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
