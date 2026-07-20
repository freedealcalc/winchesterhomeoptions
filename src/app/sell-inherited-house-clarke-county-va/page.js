import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Clarke County, VA',
  description: 'Inherited a Clarke County home? Dan White covers every option — any condition, no cleanout required. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-inherited-house-clarke-county-va' },
  openGraph: { title: 'Sell an Inherited House in Clarke County, VA', description: 'Inherited a home in Clarke County? Dan White walks you through every option, including as-is sales with no cleanout. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-inherited-house-clarke-county-va' },
};

export default async function ClarkeCountyInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Clarke County', 'Clarke County');
  const config = {
    slug: 'sell-inherited-house-clarke-county-va',
    city: null, county: 'Clarke County', type: 'county',
    h1: 'Inherited a Home in Clarke County? <em>Sell It As-Is, No Cleanout Needed.</em>',
    heroSub: 'Inherited farmhouses and rural properties around Berryville and the rest of Clarke County often come with decades of belongings, outbuildings, and acreage that make a traditional listing feel overwhelming. Dan White buys and sells these properties exactly as they sit, and connects the estate with the smaller but genuinely interested pool of buyers who specifically want rural Clarke County land and older homes.',
    trustItems: ['20+ years of estate sales throughout Clarke County', 'Licensed VA agent · Pearson Smith Realty', 'As-is, no cleanout — take what you want, leave the rest', 'Probate-friendly · Free consultation'],
    faqs: [
      { q: 'Do I need to clean out a Clarke County farmhouse before selling it?', a: 'No. Cash buyers take inherited Clarke County properties as they are, including furniture, outbuildings, and everything left inside. Keep what matters to you and leave the rest for closing.' },
      { q: 'Is there a buyer for a rural inherited property in Clarke County?', a: 'Yes, and often a strong one. Buyers specifically seeking acreage and older farmhouses in the Shenandoah Valley are drawn to Clarke County, and I already have relationships with several of them.' },
      { q: 'Can I sell an inherited Clarke County home before probate closes?', a: 'Often yes. Virginia allows an executor with proper authority to list and sell during probate, with closing contingent on court confirmation. Tell me where the estate stands and I will tell you what is realistic.' },
      { q: 'What if the inherited Clarke County property includes significant acreage?', a: 'Acreage adds both complexity and value, and land in Clarke County draws its own dedicated buyer pool separate from residential buyers. I evaluate the full property and give you the complete picture before you decide anything.' },
      { q: 'What if multiple heirs inherited the property together?', a: 'All heirs generally need to agree before a sale can proceed. I present the same numbers and options to every heir, which usually helps the family reach agreement faster than negotiating without clear facts.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
