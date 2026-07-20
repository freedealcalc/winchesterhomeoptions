import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Warren County VA | All Options',
  description: 'Looking for cash buyers in Warren County VA? Licensed VA agent Dan White reviews every option to sell fast for the most money. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/we-buy-houses-warren-county-va' },
  openGraph: { title: 'We Buy Houses Warren County VA | Every Option, Not Just One Offer', description: 'Cash buyers in Warren County VA? Dan White connects you with competing investors and shows you every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/we-buy-houses-warren-county-va' },
};

export default async function WeBuyHousesWarrenCountyPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Warren County', 'Warren County');
  const config = {
    slug: 'we-buy-houses-warren-county-va',
    city: null, county: 'Warren County', type: 'county',
    h1: 'We Buy Houses in Warren County VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Warren County investor demand has grown significantly as buyers move into the Shenandoah Valley corridor. Sellers who tap the full buyer pool — rather than accepting the first cash offer — consistently walk away with more money. Dan White makes sure you see every option.',
    trustItems: ['20+ years in Warren County and the Shenandoah Valley', 'Licensed VA agent · Pearson Smith Realty', 'Growing investor demand — more competition, better numbers', 'Every option on the table · Free consultation'],
    bodyContent: `
      <h2>The Process for Selling a Warren County Property for Cash</h2>
      <p>From Front Royal to Bentonville, Linden, and the rural stretches in between, the process doesn't change with the address: a walkthrough, a cash offer that accounts for the property's actual condition, and a closing date on your schedule once you accept. There's no mortgage underwriting on the buyer's side, so there's no appraisal contingency or loan denial that can unwind the deal weeks in.</p>
      <p>Warren County's growing investor demand means rural properties, homes needing significant work, and straightforward move-in-ready houses all tend to draw interest — condition sets the price, not whether a sale happens at all.</p>
      <h2>Why Skip the Traditional Listing Route</h2>
      <p>A traditional sale across Warren County means preparing the home for showings, waiting for a financed buyer, and living with a financing contingency that can reopen negotiations after inspection. Selling directly removes each of those steps — no repairs required, no open houses on your calendar, and no lender that can back out. What remains is a single offer and a closing date you control.</p>
    `,
    faqs: [
      { q: 'Do you buy houses throughout Warren County?', a: 'Yes — Front Royal, Bentonville, Linden, Waterlick, Chester Gap, and all rural communities. I know this market.' },
      { q: 'How fast can you close on a Warren County home?', a: 'Cash buyers close in 7 to 21 days. Investor demand in Warren County has grown — which means more buyers competing and better numbers for sellers.' },
      { q: 'What types of Warren County properties do you work with?', a: 'All types — single family, rural properties, farmhouses, older homes. Any condition, any situation. Warren County\'s mix of residential and rural properties is something I work with regularly.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
