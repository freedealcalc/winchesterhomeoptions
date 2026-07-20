import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Frederick County, VA',
  description: 'Inherited a Frederick County home? Dan White covers every option — any condition, no cleanout required. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-inherited-house-frederick-county-va' },
  openGraph: { title: 'Sell an Inherited House in Frederick County, VA', description: 'Inherited a home in Frederick County? Dan White walks you through every option, including as-is sales with no cleanout. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-inherited-house-frederick-county-va' },
};

export default async function FrederickCountyInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Frederick County', 'Frederick County');
  const config = {
    slug: 'sell-inherited-house-frederick-county-va',
    city: null, county: 'Frederick County', type: 'county',
    h1: 'Inherited a Home in Frederick County? <em>Sell It As-Is, No Cleanout Needed.</em>',
    heroSub: 'Sorting through a lifetime of belongings in Winchester, Stephens City, Clearbrook, or Middletown is hard enough without also worrying about repairs before a sale. Dan White buys and sells inherited Frederick County homes exactly as they sit — furniture, attics, and all — and coordinates the sale around wherever the estate is in the probate timeline.',
    trustItems: ['20+ years of estate sales in Frederick County, his home market', 'Licensed VA agent · Pearson Smith Realty', 'As-is, no cleanout — take what you want, leave the rest', 'Probate-friendly · Free consultation'],
    faqs: [
      { q: 'Do I need to clean out the Frederick County house before selling it?', a: 'No. Cash buyers purchase inherited Frederick County homes exactly as they are, contents included. Take anything with sentimental value and leave the rest to be handled at closing.' },
      { q: 'Can I sell an inherited Frederick County home before probate is finished?', a: 'Often yes. Virginia allows an executor with proper authority to list and sell during probate, with closing contingent on court confirmation. Call me with where the estate stands and I will tell you what is realistic.' },
      { q: 'The inherited Frederick County property needs major repairs — does that matter?', a: 'Not to a cash buyer. Older farmhouses, homes needing a full renovation, and properties that have sat vacant all sell as-is in this market. No repairs, no showings, no staging.' },
      { q: 'What if multiple siblings or heirs inherited the Frederick County property together?', a: 'All heirs typically need to agree to sell. I present the same numbers and options to everyone involved, which tends to speed up agreement compared to negotiating without a clear picture.' },
      { q: 'How does the timeline work for an inherited home sale?', a: 'As fast or as slow as the estate needs. Some heirs want to close within weeks; others are waiting on probate steps that take months. I build the sale around your timeline, not the other way around.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
