import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Berryville VA | Every Option Explained',
  description: 'Sell your inherited Berryville home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-inherited-house-berryville-va' },
  openGraph: {
    title: 'Sell an Inherited House in Berryville VA',
    description: 'Inherited a home in Berryville? Dan White walks you through every option — and which one gets you the most money. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-inherited-house-berryville-va',
  },
};

export default async function BerryvilleInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');

  const config = {
    slug: 'sell-inherited-house-berryville-va',
    city: 'Berryville',
    county: 'Clarke County',
    type: 'city',
    h1: 'Inherited a Home in Berryville? <em>Here is What to Do Next.</em>',
    heroSub: 'Clarke County inherited properties — older homes, farmhouses, rural estates — come with questions most heirs are not prepared for. Dan White has worked through probate sales, multi-heir situations, and distressed inherited properties in Berryville and surrounding areas for 20+ years.',
    trustItems: [
      '20+ years of estate sales in Clarke County and the Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Buy as-is — full of belongings, any condition',
      'Probate-friendly · Free consultation',
    ],
    faqs: [
      { q: 'Can I sell an inherited Berryville home before probate is finished?', a: 'In many cases yes — you can list and accept offers during probate with closing contingent on court approval. I help you navigate what Clarke County probate requires.' },
      { q: 'The inherited Berryville property is full of belongings — what do we do?', a: 'Leave them. Cash buyers purchase homes with all contents. Heirs take what they want and the buyer handles the rest.' },
      { q: 'What if multiple family members inherited the Berryville property?', a: 'All heirs typically need to agree to sell. I present the options and numbers clearly to all parties — which usually helps reach agreement faster than going back and forth without facts.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
