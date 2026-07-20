import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Berryville VA | Clarke Co. Options',
  description: 'Selling a house in Berryville VA? Dan White covers every option for Clarke County homeowners — cash, as-is, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/berryville' },
  openGraph: {
    title: 'Sell My House in Berryville VA | Clarke County Home Options',
    description: 'Know every option before selling your Berryville home. Free consultation with Dan White — no pressure, no obligation.',
    url: 'https://www.winchesterhomeoptions.com/berryville',
  },
};

export default async function BerryvilleHubPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');

  const config = {
    slug: 'berryville',
    city: 'Berryville',
    county: 'Clarke County',
    type: 'city',
    h1: 'Sell Your Berryville Home — <em>Every Option, Honest Numbers</em>',
    heroSub: 'Clarke County homeowners in Berryville have real options — cash sale, as-is listing, or something in between. Dan White has worked the Shenandoah Valley corridor for 20+ years and covers Clarke County with the same depth as Frederick and Warren. Free consultation, no pressure.',
    trustItems: [
      '20+ years in Clarke County & the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Access to thousands of cash buyers — they compete, you win',
      'Any condition · Any situation · No judgment',
    ],
    bodyContent: `
      <h2>A Licensed Agent With Deep Clarke County Roots</h2>
      <p>Berryville homeowners work directly with Dan White, a licensed Virginia agent who has spent more than 20 years in the Shenandoah Valley, including Clarke County. He compares the cash-sale, as-is-listing, and wholetail paths for every property before recommending anything, whether the situation is a standard move or something more complicated like probate or deferred repairs.</p>
      <h2>Berryville, the Seat of Clarke County</h2>
      <p>Berryville is the county seat of Clarke County, sitting in the foothills of the Blue Ridge Mountains east of the Shenandoah River. It's a small, historic downtown surrounded by working farmland, which keeps the local housing market smaller and more rural in character than the busier corridors around Winchester and Front Royal.</p>
    `,
    faqs: [
      {
        q: 'What options do I have to sell my Berryville home?',
        a: 'Cash sale, as-is MLS listing, or wholetail. Each path has different speed and net price trade-offs. I walk you through the honest numbers on each before you make any decision.',
      },
      {
        q: 'How is the Clarke County / Berryville market?',
        a: 'Clarke County is a smaller, more rural market with a steady buyer pool — particularly from buyers seeking quiet Shenandoah Valley living within commuting distance of Northern Virginia. The live data above reflects current conditions.',
      },
      {
        q: 'Do I need to make repairs before selling in Berryville?',
        a: 'No. Cash buyers purchase as-is. As-is MLS listings attract buyers who want a project. Your property can sell without a single repair.',
      },
      {
        q: 'How fast can I sell in Berryville?',
        a: 'Cash deals close in 7–21 days. As-is MLS listings typically go under contract within a few weeks in active markets. Your timeline is the starting point of every conversation.',
      },
      {
        q: 'Do you cover all of Clarke County?',
        a: 'Yes — Berryville and all of Clarke County. Also Frederick County (Winchester, Stephens City) and Warren County (Front Royal). Full Shenandoah Valley corridor coverage.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
