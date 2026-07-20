import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Berryville VA | All Options',
  description: 'Sell your Berryville home fast for top dollar. Dan White, licensed VA agent, reviews every option — cash, as-is, or listing. Free, no-pressure consult.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-berryville-va' },
  openGraph: {
    title: 'Sell My House Fast in Berryville VA | Every Option, Honest Advice',
    description: 'Sell your Berryville home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-berryville-va',
  },
};

export default async function BerryvillePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');

  const config = {
    slug: 'sell-my-house-fast-berryville-va',
    city: 'Berryville',
    county: 'Clarke County',
    type: 'city',
    h1: 'Sell Your Berryville Home Fast — <em>For the Most Money</em>',
    heroSub: 'Berryville and Clarke County are a quieter market than Winchester — but that doesn\'t mean fewer options. Dan White has worked this area for 20+ years and knows exactly what buyers are paying for Clarke County homes right now. Every path on the table. Honest numbers. No pressure.',
    trustItems: [
      '20+ years in Clarke County and the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Any condition — no repairs, no cleanout required',
      'Free consultation · No pressure · Close on your timeline',
    ],
    bodyContent: `
      <h2>The Mechanics of a Cash or As-Is Sale in Berryville</h2>
      <p>An as-is sale means the buyer takes the property exactly as it is — no negotiating over a leaking roof, an old HVAC system, or cosmetic issues that would normally come up in a home inspection. That also means no repainting, no repairs, and no opening your home for a string of showings before you've even decided to sell.</p>
      <p>A cash sale adds certainty on top of that. There's no lender in the process who can deny financing weeks after you've accepted an offer, which is one of the more common ways a traditional sale falls apart. You set the closing date — sooner if you need to move quickly, later if you need time to find your next place.</p>
      <h2>Selling in the Clarke County Seat</h2>
      <p>Berryville is the county seat of Clarke County, a small town built around its historic courthouse square in the Blue Ridge foothills. The surrounding area is largely agricultural — orchards and horse farms are part of the landscape — and that rural character extends into the housing stock, with older homes and larger lots that don't always fit neatly into a standard MLS comparison.</p>
    `,
    faqs: [
      {
        q: 'Is Berryville a good market to sell in right now?',
        a: 'Clarke County attracts buyers who want a true small-town feel with proximity to Winchester and the Washington metro area via Route 7. It\'s a more limited market than Frederick County — which makes pricing and buyer pool strategy even more important. Current data is on this page.',
      },
      {
        q: 'Can I sell a Berryville home as-is?',
        a: 'Yes. Cash buyers and as-is listings both work in Clarke County. Investor interest in Berryville properties has grown as buyers look beyond Winchester. You don\'t have to make repairs or clean out the property.',
      },
      {
        q: 'How long does it take to sell in Berryville?',
        a: 'Clarke County is a thinner market than Winchester, so MLS listings can take longer to find the right buyer. Cash closings cut through that — 7–21 days regardless of market conditions. I show you the realistic timeline on each path.',
      },
      {
        q: 'Do you handle inherited properties in Berryville and Clarke County?',
        a: 'Yes — inherited properties in rural Clarke County, including older farmhouses and properties with acreage, are something I work through regularly. Call me with the situation and I\'ll walk you through the options.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
