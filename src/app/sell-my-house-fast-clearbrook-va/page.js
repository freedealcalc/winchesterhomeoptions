import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Clearbrook, VA | Dan White',
  description: 'Sell your Clearbrook home fast for the most money. Licensed agent Dan White covers every option, cash sale, as-is listing, wholetail. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-clearbrook-va' },
  openGraph: {
    title: 'Sell My House Fast in Clearbrook, VA | Dan White',
    description: 'Sell your Clearbrook home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-clearbrook-va',
  },
};

export default async function ClearbrookPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Clearbrook', 'Frederick County');

  const config = {
    slug: 'sell-my-house-fast-clearbrook-va',
    city: 'Clearbrook',
    county: 'Frederick County',
    type: 'city',
    h1: 'Sell Your Clearbrook Home Fast — <em>For the Most Money</em>',
    heroSub: 'Clearbrook is northern Frederick County — close to the West Virginia line, the Martinsburg commuter corridor, and buyers who know this pocket of the Valley. Dan White has worked this area for 20+ years. Every option, honest numbers, no pressure.',
    trustItems: [
      '20+ years throughout northern Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Any condition · Rural and residential both handled',
      'Free consultation · No pressure',
    ],
    bodyContent: `
      <h2>A Fast, As-Is Sale Without the Repair List</h2>
      <p>Selling a home in Clearbrook the traditional way means fixing what an appraiser or buyer's inspector flags, opening the house up for showings, and then waiting on financing to clear before you know the deal is real. A cash or as-is sale skips all of that — you're not painting, replacing flooring, or clearing out a garage before anyone sees the property. The home sells in the condition it's in right now.</p>
      <p>The other piece is timing. A traditional MLS listing in this part of Frederick County can move quickly or can sit for weeks depending on price, condition, and what else is on the market at the same time — and even after you accept an offer, financed buyers still have appraisal and loan contingencies that can delay or unravel a closing. An as-is or cash sale trades some of that uncertainty for a closing date you can actually plan around.</p>
      <h2>Selling Property in Northern Frederick County</h2>
      <p>Clearbrook sits in the northern end of Frederick County, close to the West Virginia state line and the I-81/Route 11 corridor that connects Winchester to Martinsburg. It's a mix of rural and residential properties — everything from smaller homes on a lot to acreage and older farmhouses — which calls for a different pricing and marketing approach than a subdivision closer to town.</p>
    `,
    faqs: [
      { q: 'Is Clearbrook a strong market for sellers?', a: 'Clearbrook attracts buyers who want northern Frederick County access — close to I-81, Martinsburg, and Winchester. It is a niche market but there is real buyer demand, particularly from investors and value buyers. Live data is above.' },
      { q: 'Can I sell a Clearbrook property as-is?', a: 'Yes. Cash buyers active in Frederick County purchase Clearbrook properties without requiring repairs or cleanup. As-is MLS listings also work for properties in reasonable condition.' },
      { q: 'Do you work with rural and farm properties in Clearbrook?', a: 'Yes — rural properties with acreage in this part of Frederick County are something I work with regularly. Condition and land size both factor into the strategy.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
