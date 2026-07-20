import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Clarke County VA | Every Option',
  description: 'Sell your Clarke County home fast for the most money. Dan White covers every option — cash sale, as-is listing, wholetail. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-clarke-county-va' },
  openGraph: {
    title: 'Sell My House Fast in Clarke County VA | Every Option, Honest Advice',
    description: 'Sell your Clarke County home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-clarke-county-va',
  },
};

export default async function ClarkeCountyPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Clarke County', 'Clarke County');

  const config = {
    slug: 'sell-my-house-fast-clarke-county-va',
    city: null,
    county: 'Clarke County',
    type: 'county',
    h1: 'Sell Your Clarke County Home Fast — <em>For the Most Money</em>',
    heroSub: 'Clarke County is a market that rewards local knowledge. Dan White has worked properties throughout Berryville and the surrounding area for 20+ years — farmhouses, rural estates, older homes, and everything in between. Every option on the table. Honest numbers. No pressure.',
    trustItems: [
      '20+ years in Clarke County and the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Rural properties, farmhouses, estates — all handled',
      'Free consultation · No pressure · Any condition',
    ],
    bodyContent: `
      <h2>How a Fast Sale Works for Clarke County Properties</h2>
      <p>Clarke County has more rural and older housing stock than its neighbors — farmhouses, homes with acreage, properties that have been in a family for decades. Traditional financing can be harder to secure on that kind of property, and repairs an appraiser flags can stall a sale for months. A cash or as-is sale removes financing contingencies and repair negotiations from the equation entirely — the home sells as it stands, on a timeline you set.</p>
      <p>That matters more in Clarke County than in a larger market. A thinner buyer pool means a traditional listing can sit longer waiting for the right buyer, especially on a property that needs work. Selling as-is to a cash buyer, or listing as-is specifically to the investor audience actively looking for these properties, shortens that wait considerably.</p>
      <h2>Selling in the Blue Ridge Foothills</h2>
      <p>Clarke County sits between the Blue Ridge Mountains and the Shenandoah River, with Berryville as the county seat and smaller communities like Boyce and Millwood nearby. It's long been known for orchards and horse farms, and that agricultural character shows up in the housing stock — larger lots, older construction, and properties that don't fit a cookie-cutter MLS listing.</p>
    `,
    faqs: [
      {
        q: 'What areas of Clarke County do you serve?',
        a: 'All of Clarke County — Berryville, Boyce, White Post, Millwood, and the surrounding rural areas. Clarke County is a smaller market and I know it well.',
      },
      {
        q: 'Is Clarke County a good market to sell in?',
        a: 'Clarke County attracts a specific buyer — those who want rural Virginia character with access to Winchester and the Washington metro corridor via Route 7. It\'s a thinner market than Frederick County, which makes strategy more important. Live data is above.',
      },
      {
        q: 'Can I sell a rural Clarke County property as-is?',
        a: 'Yes. Farmhouses, older homes, and rural properties in Clarke County sell as-is regularly — to investors and to buyers who specifically want a project in the country. No repairs, no staging, no cleanout required.',
      },
      {
        q: 'Do you handle estate and probate sales in Clarke County?',
        a: 'Yes — estate sales are one of the most common property types I work with in Clarke County. Many older properties in this area come through inheritance. Call me with the situation and I\'ll walk you through the options.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
