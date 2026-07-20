import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Mold in Your Front Royal VA Home? You Still Have Options',
  description: 'Mold in your Front Royal VA home? Licensed agent Dan White covers every option — mold won\'t block your sale. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-mold-front-royal-va' },
  openGraph: { title: 'Sell a House with Mold in Front Royal VA', description: 'Mold in your Front Royal home? Dan White walks you through every option — including buyers who purchase as-is. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-mold-front-royal-va' },
};

export default async function FrontRoyalMoldPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');
  const config = {
    slug: 'sell-house-mold-front-royal-va',
    city: 'Front Royal', county: 'Warren County', type: 'city',
    h1: 'Mold in Your Front Royal Home? <em>You Still Have Options.</em>',
    heroSub: 'Mold is more common in older Warren County homes than most sellers realize — and it does not have to derail your sale. Dan White has helped Front Royal sellers navigate mold situations, disclose correctly, and find the right buyer for the property as it stands.',
    trustItems: ['20+ years handling disclosure and condition issues in Warren County', 'Licensed VA agent · Pearson Smith Realty', 'Cash buyers who accept mold situations as-is', 'Disclosure handled correctly · Free consultation'],
    faqs: [
      { q: 'Do I have to disclose mold when selling a Front Royal home?', a: 'Yes — Virginia requires disclosure of known material defects including mold. Proper disclosure protects you legally and I help you navigate it correctly.' },
      { q: 'Can I sell my Front Royal home with mold without remediating it first?', a: 'Yes, to cash buyers and investors. They factor remediation into their pricing and handle it after closing. Traditional buyers using financing may face lender restrictions.' },
      { q: 'What if mold is in the basement or crawl space of my Front Royal home?', a: 'Very common in older Warren County homes. Basement and crawl space mold is generally less alarming to experienced buyers than visible mold in living areas. I help you understand what you are actually working with.' },
      { q: 'Should I remediate or sell as-is in Front Royal?', a: 'Depends on remediation cost vs. price improvement. I give you the honest math on both so you can make a clear decision.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
