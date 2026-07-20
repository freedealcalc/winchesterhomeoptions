import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Code Violations in Stephens City VA? You Can Still Sell',
  description: 'Code violations on your Stephens City VA home? Dan White, licensed agent, covers every option — no repairs required. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-code-violations-stephens-city-va' },
  openGraph: { title: 'Sell a House with Code Violations in Stephens City VA', description: 'Code violations on your Stephens City property? Dan White walks you through every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-code-violations-stephens-city-va' },
};

export default async function StephensCityCodeViolationsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');
  const config = {
    slug: 'sell-house-code-violations-stephens-city-va',
    city: 'Stephens City', county: 'Frederick County', type: 'city',
    h1: 'Code Violations on Your Stephens City Home? <em>You Can Still Sell.</em>',
    heroSub: 'Code violations in Stephens City and Frederick County are solvable — and they do not require you to fix anything before selling. Dan White knows the investor buyers in this market who purchase as-is and how to generate competition on your property.',
    trustItems: ['20+ years in Frederick County distressed sales', 'Licensed VA agent · Pearson Smith Realty', 'Cash buyers who take code-violation properties as-is', 'Free consultation · No pressure'],
    bodyContent: `
      <h2>Code Violations Don't Have to Delay a Stephens City Sale</h2>
      <p>Like every Virginia locality, Frederick County maintains its own code enforcement program, with the authority to inspect properties and issue notices for maintenance, safety, or permitting issues. If that notice has gone unresolved for a while, it can escalate into fines or, eventually, a lien against the property — but none of that means the house is unsellable.</p>
      <p>Cash buyers who purchase in Stephens City on a regular basis are used to taking on properties exactly like this. They factor the cost of the repair into their offer and take on the fix themselves after closing, which means the fines stop accumulating on your watch the moment the sale closes, not months down the road while you save up for repairs.</p>
      <h2>Getting the Exact Numbers Before You List</h2>
      <p>The specific violation on your notice, the fine owed, and whether a lien has actually been recorded all depend on what Frederick County's code enforcement office has on file for your address — that's not something to guess at. I'll help you pull the real numbers so we can price the sale accurately from the start.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about code enforcement in Virginia, not legal advice for your specific notice or violation. Confirm the exact violation and any lien or fine amount directly with Frederick County's code enforcement office before listing or accepting an offer.</p>
    `,
    faqs: [
      { q: 'Can I sell my Stephens City home with code violations without fixing them?', a: 'Yes — cash buyers and investors purchase as-is. No repairs, no remediation required from you before closing.' },
      { q: 'Will code violations affect my Stephens City sale price?', a: 'Yes — buyers factor in remediation cost. But competing investors produce better numbers than a single offer. I show you the realistic range for your specific violations.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
