import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a House with Code Violations in Front Royal VA | Every Option',
  description: 'Sell your Front Royal home fast with code violations and walk away with the most money your situation allows. Dan White goes over every option — you do not have to fix violations to sell. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-code-violations-front-royal-va' },
  openGraph: { title: 'Sell a House with Code Violations in Front Royal VA', description: 'Code violations on your Front Royal property do not block a sale. Dan White walks you through every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-code-violations-front-royal-va' },
};

export default async function FrontRoyalCodeViolationsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');
  const config = {
    slug: 'sell-house-code-violations-front-royal-va',
    city: 'Front Royal', county: 'Warren County', type: 'city',
    h1: 'Code Violations on Your Front Royal Home? <em>You Can Still Sell.</em>',
    heroSub: 'Code violations in Front Royal and Warren County do not have to end in a forced fix or a blocked sale. Cash buyers purchase code-violation properties as-is regularly. Dan White knows which buyers want them and how to get you the best number without spending money you do not have.',
    trustItems: ['20+ years in Warren County distressed sales', 'Licensed VA agent · Pearson Smith Realty', 'Cash buyers purchase code-violation properties as-is', 'Free consultation · No pressure'],
    faqs: [
      { q: 'Can I sell my Front Royal home with open code violations?', a: 'Yes — particularly to cash buyers and investors. These buyers purchase knowing violations exist and handle remediation after closing.' },
      { q: 'Do I have to fix code violations before listing in Front Royal?', a: 'Not with cash buyers. With traditional MLS buyers using financing, lenders sometimes require violations resolved. Cash buyers sidestep this entirely.' },
      { q: 'Will code violations significantly reduce my Front Royal home price?', a: 'They factor into the offer but multiple competing investors produce a better number than a single lowball. I show you the realistic range.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
