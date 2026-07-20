import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Warren County, VA',
  description: 'Inherited a Warren County home? Licensed agent Dan White covers every option, farmhouses, rural estates, any condition. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-inherited-house-warren-county-va' },
  openGraph: { title: 'Sell an Inherited House in Warren County, VA', description: 'Inherited a home in Warren County? Dan White walks you through every option — and which one gets the estate the most money. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-inherited-house-warren-county-va' },
};

export default async function WarrenCountyInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Warren County', 'Warren County');
  const config = {
    slug: 'sell-inherited-house-warren-county-va',
    city: null, county: 'Warren County', type: 'county',
    h1: 'Inherited a Home in Warren County? <em>Here Is What to Do Next.</em>',
    heroSub: 'Warren County inherited properties — farmhouses, older homes, rural estates — come with questions most heirs are not prepared for. Dan White has worked through probate sales, multi-heir situations, and distressed inherited properties across Front Royal and Warren County for 20+ years. Every option on the table, no rush.',
    trustItems: ['20+ years of estate sales throughout Warren County', 'Licensed VA agent · Pearson Smith Realty', 'Farmhouses, rural estates, any condition — all handled', 'Probate-friendly · Free consultation'],
    faqs: [
      { q: 'Can I sell an inherited Warren County home before probate closes?', a: 'Often yes. Virginia allows executors with proper authority to list and sell during probate, with closing contingent on court confirmation. Call me with where you are in the process.' },
      { q: 'The inherited Warren County property is a farmhouse in rough shape — what are my options?', a: 'Warren County has strong investor interest in farmhouses and rural properties regardless of condition. I connect you with buyers who want exactly what you have — no repairs or cleanup required.' },
      { q: 'What if multiple heirs inherited the Warren County property?', a: 'All heirs typically need to agree. I present the options and real numbers to all parties — which usually helps reach agreement faster than negotiating without facts.' },
      { q: 'What if the inherited Warren County property has acreage?', a: 'Acreage adds complexity and often adds value. Land in Warren County has its own buyer pool separate from residential. I assess the whole property and give you the full picture.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
