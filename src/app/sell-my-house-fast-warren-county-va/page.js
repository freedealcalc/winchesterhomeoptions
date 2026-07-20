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
    faqs: [
      { q: 'What areas of Warren County do you serve?', a: 'All of Warren County — Front Royal, Bentonville, Linden, Waterlick, Chester Gap, and all rural communities. Front Royal is the anchor but I work the entire county.' },
      { q: 'Is Warren County a good market to sell in right now?', a: 'Warren County has attracted buyers seeking Shenandoah Valley living with I-66 and I-81 access. Investor interest has grown significantly. Live market data is at the top of this page.' },
      { q: 'Can I sell a rural Warren County property as-is?', a: 'Yes — rural and farm properties in Warren County sell as-is regularly. No repairs, no cleanout. Cash buyers and investor-focused MLS listings both work without you spending a dollar on prep.' },
      { q: 'Do you handle estate and probate sales in Warren County?', a: 'Yes. Estate sales — particularly older farmhouses and rural properties — are one of the most common situations I work through in Warren County. Call me and we will figure out your options in 15 minutes.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
