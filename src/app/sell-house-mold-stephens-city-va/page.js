import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a House With Mold in Stephens City, VA',
  description: 'Mold does not have to block your Stephens City sale. Dan White reviews every option so you get the most money. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-mold-stephens-city-va' },
  openGraph: { title: 'Sell a House With Mold in Stephens City, VA', description: 'Mold in your Stephens City home? Dan White walks you through every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-mold-stephens-city-va' },
};

export default async function StephensCityMoldPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');
  const config = {
    slug: 'sell-house-mold-stephens-city-va',
    city: 'Stephens City', county: 'Frederick County', type: 'city',
    h1: 'Mold in Your Stephens City Home? <em>You Still Have Options.</em>',
    heroSub: 'Mold in a Stephens City home is a solvable problem — not a dead end. Dan White knows which buyers will take the property as-is and how to get them competing on it. Proper disclosure, right buyer pool, best number your situation allows.',
    trustItems: ['20+ years handling condition issues in Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Cash buyers who purchase mold situations as-is', 'Free consultation · No pressure'],
    faqs: [
      { q: 'Can I sell my Stephens City home with mold without fixing it?', a: 'Yes — to cash buyers and investors who purchase as-is and handle remediation themselves.' },
      { q: 'Will mold significantly reduce what I get for my Stephens City home?', a: 'Buyers price in remediation cost. But multiple investors competing on the property produces better results than accepting a single lowball. I show you the realistic range.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
