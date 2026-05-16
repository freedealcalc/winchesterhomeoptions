import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a House with Code Violations in Stephens City VA | Every Option',
  description: 'Sell your Stephens City home fast with code violations and walk away with the most money your situation allows. Dan White goes over every option — no repairs required. Free consultation, no pressure.',
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
    faqs: [
      { q: 'Can I sell my Stephens City home with code violations without fixing them?', a: 'Yes — cash buyers and investors purchase as-is. No repairs, no remediation required from you before closing.' },
      { q: 'Will code violations affect my Stephens City sale price?', a: 'Yes — buyers factor in remediation cost. But competing investors produce better numbers than a single offer. I show you the realistic range for your specific violations.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
