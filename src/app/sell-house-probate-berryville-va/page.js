import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House in Probate in Berryville, VA',
  description: 'Probate home sale in Berryville? Licensed agent Dan White covers every option for the best estate outcome. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-probate-berryville-va' },
  openGraph: { title: 'Selling a House in Probate in Berryville VA', description: 'Navigating probate in Berryville? Dan White walks you through every option — and which one gets the estate the most money. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-probate-berryville-va' },
};

export default async function BerryvilleProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');
  const config = {
    slug: 'sell-house-probate-berryville-va',
    city: 'Berryville', county: 'Clarke County', type: 'city',
    h1: 'Selling a Berryville Home Through Probate — <em>Every Option Explained.</em>',
    heroSub: 'Clarke County probate real estate — older homes, rural properties, family estates — needs someone who knows both the legal process and the local market. Dan White has worked through probate sales in Berryville and surrounding areas for 20+ years. He knows what to do, in what order.',
    trustItems: ['20+ years of estate sales in Clarke County', 'Licensed VA agent · Pearson Smith Realty', 'Works with estate attorneys and executors', 'As-is purchase — any condition'],
    faqs: [
      { q: 'Can I sell a Berryville home during probate before it closes?', a: 'Often yes. Virginia allows executors with proper authority to list and sell during probate, with closing contingent on court confirmation where required.' },
      { q: 'The Berryville probate property is full of belongings — what do we do?', a: 'Leave them. Cash buyers purchase with all contents. Heirs take what they want; the buyer handles the rest.' },
      { q: 'How do I get started selling a Clarke County probate property?', a: 'Call Dan White at (571) 989-3269 with the basics. I will walk you through what comes next in 15 minutes. Free, no pressure.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
