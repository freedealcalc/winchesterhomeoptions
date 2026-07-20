import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Warren County VA | All Options',
  description: 'Sell your Warren County home fast for top dollar. Dan White, licensed VA agent, reviews every option — cash, as-is, or listing. Free, no-pressure consult.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-warren-county-va' },
  openGraph: {
    title: 'Sell My House Fast in Warren County VA | Every Option, Honest Advice',
    description: 'Sell your Warren County home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-warren-county-va',
  },
};

export default async function WarrenCountyPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Warren County', 'Warren County');

  const config = {
    slug: 'sell-my-house-fast-warren-county-va',
    city: null,
    county: 'Warren County',
    type: 'county',
    h1: 'Sell Your Warren County Home Fast — <em>For the Most Money</em>',
    heroSub: 'Warren County runs from Front Royal through the Shenandoah Valley foothills — a market with strong investor interest and growing buyer demand. Dan White has worked properties across this county for 20+ years. Every option on the table. Honest numbers. No pressure.',
    trustItems: [
      '20+ years in Warren County and the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Farmhouses, rural estates, single family — all handled',
      'Any condition · Free consultation · No pressure',
    ],
    bodyContent: `
      <h2>Selling Fast Without Waiting on a Buyer's Financing</h2>
      <p>A cash or as-is sale in Warren County means no repair list, no staging, and no strangers walking through the house every weekend. The property sells in whatever condition it's in today — carpet, roof, foundation, all of it. That's the biggest practical difference from a traditional listing, where an appraisal or home inspection can send you back to the negotiating table over things you didn't expect to pay for.</p>
      <p>It also changes the risk profile. A financed buyer on the MLS can fall through weeks into the process over an appraisal gap or a loan denial, and you're back to square one. A cash sale doesn't carry that risk — once the offer is accepted, there's no lender in the middle who can say no. You also set the closing date, whether that's a week out or a few months out.</p>
      <h2>A County Built Around the River and the Mountains</h2>
      <p>Warren County's seat, Front Royal, sits where the North and South Forks of the Shenandoah River come together, near the northern entrance to Skyline Drive and Shenandoah National Park. The rest of the county spreads out from there through smaller communities along the river and the base of the Blue Ridge — a mix of long-established homes, newer construction, and rural acreage that each need a different selling strategy.</p>
    `,
    faqs: [
      { q: 'What areas of Warren County do you serve?', a: 'All of Warren County — Front Royal, Bentonville, Linden, Waterlick, Chester Gap, and all rural communities. Front Royal is the anchor but I work the entire county.' },
      { q: 'Is Warren County a good market to sell in right now?', a: 'Warren County has attracted buyers seeking Shenandoah Valley living with I-66 and I-81 access. Investor interest has grown significantly. Live market data is at the top of this page.' },
      { q: 'Can I sell a rural Warren County property as-is?', a: 'Yes — rural and farm properties in Warren County sell as-is regularly. No repairs, no cleanout. Cash buyers and investor-focused MLS listings both work without you spending a dollar on prep.' },
      { q: 'Do you handle estate and probate sales in Warren County?', a: 'Yes. Estate sales — particularly older farmhouses and rural properties — are one of the most common situations I work through in Warren County. Call me and we will figure out your options in 15 minutes.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
