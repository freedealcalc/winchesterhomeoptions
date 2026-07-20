import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling to Relocate From Front Royal, VA | Dan White',
  description: 'Relocating from Front Royal? Dan White reviews every option so you close on your timeline and get the most money. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-relocating-front-royal-va' },
  openGraph: {
    title: 'Selling to Relocate From Front Royal, VA | Dan White',
    description: 'Relocating from Front Royal? Dan White walks you through every option so you close on your timeline. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-relocating-front-royal-va',
  },
};

export default async function FrontRoyalRelocatingPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');

  const config = {
    slug: 'sell-house-relocating-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'Relocating from Front Royal? <em>Sell on Your Timeline.</em>',
    heroSub: 'Whether you are moving for work, family, or a fresh start — the Front Royal home sale should not hold you back. Dan White gives you every option from fast cash close to full MLS listing, with honest numbers so you make the right call for your timeline.',
    trustItems: [
      '20+ years selling homes for relocating Warren County owners',
      'Licensed VA agent · Pearson Smith Realty',
      'Remote signing available — close from anywhere',
      'Fast or full-price — you set the priority',
    ],
    bodyContent: `
      <h2>When a Front Royal Move Comes With a Deadline</h2>
      <p>A new job doesn't wait for your Front Royal house to sell. Start dates get set months in advance, moving trucks get booked, and a lease at your next stop often begins on a fixed day — none of which lines up neatly with how long a traditional listing takes to go from "for sale" to a check in hand. If the house is still sitting on the market the week you're supposed to report somewhere new, you're managing a sale you can no longer be present for.</p>
      <p>The gap gets wider when Warren County's market slows for a season, or when a home needs work before it would show well enough to compete on the open market. Neither problem is fatal, but both eat into calendar time a relocating seller usually doesn't have to spare.</p>
      <h2>Closing on a Compressed Schedule</h2>
      <p>An as-is cash sale sidesteps most of what makes a normal listing slow: no waiting on repairs, no staging and re-showing, no buyer financing contingency that can fall through weeks in. Closings can be scheduled around your actual moving date rather than the other way around, often in as little as one to three weeks.</p>
      <p>You don't have to stay in Front Royal to make it happen, either — paperwork can be signed remotely, and a short post-closing rent-back can bridge the days between your closing date and your actual departure if the two don't line up perfectly.</p>
    `,
    faqs: [
      { q: 'How fast can I sell my Front Royal home to relocate?', a: 'Cash buyers close in 7–21 days in Warren County. If you have a hard start date at your destination, give me that first and we work backward from it.' },
      { q: 'Can I close on my Front Royal home after I have already moved?', a: 'Yes. Remote closing is standard — you sign from wherever you are. I coordinate locally on your behalf.' },
      { q: 'Will selling fast cost me money on my Front Royal home?', a: 'Speed has a cost in a cash sale — but an as-is MLS listing can close nearly as fast in good market conditions and often produces more. I give you real numbers on both.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
