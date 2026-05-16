import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a House with Tax Liens in Front Royal VA | Every Option',
  description: 'Sell your Front Royal home fast with tax liens and walk away with the most money your situation allows. Dan White goes over every option — liens resolve at closing. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-tax-lien-front-royal-va' },
  openGraph: { title: 'Sell a House with Tax Liens in Front Royal VA', description: 'Tax liens on your Front Royal home do not block a sale. Dan White walks you through every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-tax-lien-front-royal-va' },
};

export default async function FrontRoyalTaxLienPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');
  const config = {
    slug: 'sell-house-tax-lien-front-royal-va',
    city: 'Front Royal', county: 'Warren County', type: 'city',
    h1: 'Tax Liens on Your Front Royal Home? <em>You Can Still Sell.</em>',
    heroSub: 'Tax liens in Front Royal and Warren County do not prevent a sale — they are resolved at closing from your proceeds. Dan White has navigated lien situations throughout this market for 20+ years. No cash needed upfront to clear them.',
    trustItems: ['20+ years navigating liens in Warren County', 'Licensed VA agent · Pearson Smith Realty', 'Liens paid at closing from proceeds — no cash required upfront', 'Free consultation · No pressure'],
    faqs: [
      { q: 'Can I sell my Front Royal home if it has a tax lien?', a: 'Yes. Tax liens attach to title and are paid from your closing proceeds. As long as there is enough equity to cover the lien plus mortgage, the transaction works.' },
      { q: 'Do I need to pay off the lien before listing my Front Royal home?', a: 'No. The payoff happens at closing from your proceeds. You can list the home with the lien in place.' },
      { q: 'What if the tax lien exceeds my equity in the Front Royal home?', a: 'That requires negotiating with the lienholder for a reduced payoff — a lien release. More complex but absolutely doable. I have worked through these situations before.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
