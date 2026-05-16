import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a House with Code Violations in Winchester VA | Every Option Explained',
  description: 'Sell your Winchester home fast with code violations and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — you do not have to fix violations to sell. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-code-violations-winchester-va' },
  openGraph: {
    title: 'Sell a House with Code Violations in Winchester VA',
    description: 'Code violations on your Winchester property do not have to block a sale. Dan White walks you through every option. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-code-violations-winchester-va',
  },
};

export default async function WinchesterCodeViolationsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-house-code-violations-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Code Violations on Your Winchester Home? <em>You Can Still Sell.</em>',
    heroSub: 'Code violations — open permits, building violations, zoning issues — are solvable problems, not dead ends. Dan White has helped Winchester and Frederick County sellers navigate code violation situations and close successfully without spending money on fixes they could not afford.',
    trustItems: [
      '20+ years handling distressed and non-conforming properties in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Cash buyers purchase code-violation properties as-is',
      'Free consultation · Confidential · No pressure',
    ],
    faqs: [
      { q: 'Can I sell a Winchester home that has open code violations?', a: 'Yes — particularly to cash buyers and investors. These buyers purchase properties knowing violations exist and handle remediation after closing. Traditional buyers using financing may face hurdles, which is why cash buyers are often the right path for this situation.' },
      { q: 'Do I have to fix code violations before selling in Winchester?', a: 'Not with cash buyers. With traditional buyers on the MLS, lenders sometimes require violations to be resolved before they fund the loan. I help you figure out which buyer pool makes the most sense for your specific violation situation.' },
      { q: 'What types of code violations can I sell through in Winchester?', a: 'Unpermitted additions, electrical violations, plumbing violations, structural issues, zoning non-conformance, open permits — all situations I have seen and worked through. Each has its own nuance but none are automatic deal-killers.' },
      { q: 'Will code violations significantly reduce what I get for my Winchester home?', a: 'They affect price — buyers factor in the cost of remediation. But a single cash buyer lowball is not your only option. Multiple investors competing on the property often produces a better number than you expect. I show you the realistic range.' },
      { q: 'What if the city has fined me for the violations in Winchester?', a: 'City fines are typically handled like liens — paid at closing from proceeds. They do not prevent a sale. I can help you understand what is owed and how it factors into your net.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
