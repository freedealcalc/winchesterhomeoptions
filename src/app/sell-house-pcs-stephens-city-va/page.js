import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'PCS Orders in Stephens City VA? Sell Fast, Every Option',
  description: 'PCS orders out of Stephens City? Dan White, licensed VA agent, covers every option to sell fast for top dollar. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-pcs-stephens-city-va' },
  openGraph: {
    title: 'Sell Your House Fast for PCS in Stephens City VA',
    description: 'PCS orders out of Stephens City? Dan White walks you through every option to sell fast. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-pcs-stephens-city-va',
  },
};

export default async function StephensCityPcsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');
  const config = {
    slug: 'sell-house-pcs-stephens-city-va',
    city: 'Stephens City',
    county: 'Frederick County',
    type: 'city',
    h1: 'PCS Orders Out of Stephens City? <em>Sell Fast. Keep the Most Money.</em>',
    heroSub: 'Military families in Stephens City and Frederick County need a sale that works around their report date — not the other way around. Dan White structures every transaction around your timeline. Every option available. Remote closing standard.',
    trustItems: [
      '20+ years in Frederick County working with military families',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in 7 days or on your timeline',
      'Remote signing available',
    ],
    bodyContent: `
      <h2>What the SCRA Actually Protects You From</h2>
      <p>Military families sometimes assume PCS orders alone create legal protection over a home sale — what actually applies is the Servicemembers Civil Relief Act, and it's narrower than people expect. It stops a lender from foreclosing without a real court order on a mortgage that predates your active duty, for the length of your service plus 12 months afterward, and it blocks default judgments specifically — meaning a court has to actually rule, rather than a foreclosure proceeding going through uncontested. You can also request a 6% cap on the interest rate for that pre-service loan while on active duty and for a year after.</p>
      <p>These protections matter most if a sale gets delayed and a mortgage payment issue follows — they're not designed to speed up a routine sale. For anything specific to your loan or orders, your local JAG legal assistance office can walk through the details.</p>
      <h2>Orders Set the Date — Everything Else Has to Work Around It</h2>
      <p>Stephens City sits in a market that usually moves at its own pace, but a PCS sale runs on a different clock entirely — your reporting date isn't something a listing agent or a buyer's financing timeline gets to push around. The planning has to start from that date and work backward, which is a different exercise than a typical Frederick County sale.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about SCRA protections and PCS timelines, not legal advice for your specific situation — confirm your specific situation with your local JAG office or a real estate attorney before relying on any SCRA protection or assuming how it applies to your orders.</p>
    `,
    faqs: [
      { q: 'How fast can I sell my Stephens City home with PCS orders?', a: 'Cash sales close in 7 to 21 days in Frederick County. As-is MLS listings move quickly in current market conditions. Tell me your report date and I match the strategy.' },
      { q: 'Can I sell my Stephens City home remotely after PCS?', a: 'Yes. Remote closing is standard. I coordinate locally so you can focus on your new assignment.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
