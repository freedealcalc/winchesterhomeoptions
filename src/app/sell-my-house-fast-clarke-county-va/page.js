import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Clarke County VA | Every Option, Honest Advice',
  description: 'Sell your Clarke County home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more — so you make the right call. Free consultation, no pressure.',
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
