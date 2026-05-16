import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Behind on Payments in Berryville VA | Stop the Damage',
  description: 'Sell your Berryville home fast and walk away with the most money your situation allows — even if you are behind on payments. Dan White goes over every option before foreclosure closes the door. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-behind-payments-berryville-va' },
  openGraph: { title: 'Sell My House Behind on Payments in Berryville VA', description: 'Behind on payments in Berryville? You still have options. Dan White walks you through every path. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-behind-payments-berryville-va' },
};

export default async function BerryvilleBehindPaymentsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');
  const config = {
    slug: 'sell-house-behind-payments-berryville-va',
    city: 'Berryville', county: 'Clarke County', type: 'city',
    h1: 'Behind on Payments in Berryville? <em>You Still Have Options.</em>',
    heroSub: 'Falling behind on mortgage payments in Berryville does not mean foreclosure is inevitable. Dan White has helped Clarke County homeowners in this exact situation close fast, stop the damage, and walk away with money rather than a foreclosure on their record.',
    trustItems: ['20+ years in Clarke County distressed sales', 'Licensed VA agent · Pearson Smith Realty', 'Close in as few as 7 days', 'Confidential · No judgment · Free consultation'],
    faqs: [
      { q: 'Can I sell my Berryville home while behind on payments?', a: 'Yes. The sale pays off your mortgage including all arrears at closing. As long as there is equity to cover the full balance owed, you keep the difference.' },
      { q: 'How fast can I close on a Berryville home in this situation?', a: 'Cash buyers close in 7 to 21 days in Clarke County. Tell me your situation and I tell you exactly what is possible given your timeline.' },
      { q: 'What if I owe more than my Berryville home is worth?', a: 'Short sale is the path — the lender accepts a reduced payoff. Far better than foreclosure for your credit. I can walk you through how it works.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
