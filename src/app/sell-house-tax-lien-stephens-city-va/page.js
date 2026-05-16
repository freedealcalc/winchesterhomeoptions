import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a House with Tax Liens in Stephens City VA | Every Option',
  description: 'Sell your Stephens City home fast with tax liens and walk away with the most money your situation allows. Dan White goes over every option — liens resolve at closing. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-tax-lien-stephens-city-va' },
  openGraph: { title: 'Sell a House with Tax Liens in Stephens City VA', description: 'Tax liens on your Stephens City home? Dan White walks you through every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-tax-lien-stephens-city-va' },
};

export default async function StephensCityTaxLienPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');
  const config = {
    slug: 'sell-house-tax-lien-stephens-city-va',
    city: 'Stephens City', county: 'Frederick County', type: 'city',
    h1: 'Tax Liens on Your Stephens City Home? <em>You Can Still Sell.</em>',
    heroSub: 'Tax liens in Stephens City do not have to block your sale or cost you out-of-pocket money upfront. Dan White has navigated lien situations throughout Frederick County for 20+ years. Liens get resolved at closing from your proceeds.',
    trustItems: ['20+ years navigating liens in Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Liens resolved at closing — no upfront cash needed in most cases', 'Free consultation · No pressure'],
    faqs: [
      { q: 'Can I sell my Stephens City home with a tax lien?', a: 'Yes — the lien is paid from closing proceeds. You do not need cash in hand to resolve it before listing.' },
      { q: 'Will a tax lien scare off buyers in Stephens City?', a: 'Not cash buyers or experienced investors. Liens are routine in real estate transactions and are handled by the title company at closing.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
