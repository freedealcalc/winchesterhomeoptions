import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Front Royal VA | Every Option Explained',
  description: 'Sell your inherited Front Royal home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more — so you make the right call. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-inherited-house-front-royal-va' },
  openGraph: {
    title: 'Sell an Inherited House in Front Royal VA',
    description: 'Inherited a home in Front Royal? Dan White walks you through every option — and which one gets you the most money. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-inherited-house-front-royal-va',
  },
};

export default async function FrontRoyalInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');

  const config = {
    slug: 'sell-inherited-house-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'Inherited a Home in Front Royal? <em>Here\'s What to Do Next.</em>',
    heroSub: 'Warren County inherited properties — farmhouses, older homes, estates with acreage — come with their own set of complexities. Dan White has worked through probate sales, multi-heir situations, and distressed inherited properties across Front Royal and the surrounding area for 20+ years.',
    trustItems: [
      '20+ years in Warren County and Shenandoah Valley estate sales',
      'Licensed VA agent · Pearson Smith Realty',
      'Buy as-is — farmhouses, full estates, any condition',
      'Probate-friendly · No pressure · Free consultation',
    ],
    faqs: [
      {
        q: 'Can I sell an inherited Front Royal property before probate closes?',
        a: 'Possibly. If the property was in a trust or held with a survivorship deed, you may be able to sell immediately. If probate is required, listing during probate and closing after is often an option. Call me and we\'ll figure out your specific situation.',
      },
      {
        q: 'The inherited Front Royal home is a farmhouse in rough shape — what are my options?',
        a: 'Warren County has strong investor interest in farmhouses and rural properties regardless of condition. I can put it in front of buyers who specifically want that — no repairs, no cleanup, purchased as-is.',
      },
      {
        q: 'What if I live out of state and inherited a Front Royal property?',
        a: 'Very common. Remote signing is available, and I can handle coordination locally on your behalf. You don\'t need to be here for most of the process.',
      },
      {
        q: 'How do inherited home sales work when there\'s acreage involved in Warren County?',
        a: 'Acreage adds complexity but also often adds value. Rural and agricultural land in Warren County has a separate buyer pool from residential. I assess the whole property — house and land — and give you the full picture of what you\'re working with.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
