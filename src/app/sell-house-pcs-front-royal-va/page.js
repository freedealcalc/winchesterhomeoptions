import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Fast for PCS in Front Royal, VA',
  description: 'PCS orders from Front Royal? Licensed agent Dan White covers every option to sell fast and keep the most money. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-pcs-front-royal-va' },
  openGraph: {
    title: 'Sell Your House Fast for PCS in Front Royal VA',
    description: 'PCS orders out of Front Royal? Dan White walks you through every option to sell fast. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-pcs-front-royal-va',
  },
};

export default async function FrontRoyalPcsPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');
  const config = {
    slug: 'sell-house-pcs-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'PCS Orders Out of Front Royal? <em>Sell Fast. Keep the Most Money.</em>',
    heroSub: 'Front Royal and Warren County military families face the same PCS pressure as everyone else — a hard report date and a home that needs to close. Dan White knows this market and moves fast. Every option available, structured around your timeline.',
    trustItems: [
      '20+ years in Warren County and the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in 7 days or on your military timeline',
      'Remote signing available',
    ],
    bodyContent: `
      <h2>SCRA Protections Give Front Royal Military Families Real Leverage</h2>
      <p>The Servicemembers Civil Relief Act gives you more protection than most sellers realize. If your mortgage originated before you went on active duty, a lender generally cannot foreclose without an actual court order while you're serving, and that protection extends for 12 months after you leave service — no default judgment can simply be entered against you in a foreclosure case. On request, the SCRA can also cap the interest rate on that pre-service debt at 6% for the length of active duty plus one additional year.</p>
      <p>None of this is a substitute for handling the sale itself — it exists to prevent a worst-case foreclosure scenario, not to manage your timeline for you. For questions specific to your orders, mortgage, or situation, your local JAG legal assistance office is the right first call.</p>
      <h2>A Report Date Doesn't Bend Like a Normal Sale Timeline</h2>
      <p>A typical home sale in Warren County moves at the market's pace. A PCS sale doesn't have that luxury — your report date is fixed by orders, not negotiable the way a closing date sometimes is. That's the real difference: the legal protections above matter if things go sideways, but the practical work is building a sale timeline backward from a date you don't control, rather than the other way around.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about SCRA protections and PCS timelines, not legal advice for your specific situation — confirm your specific situation with your local JAG office or a real estate attorney before relying on any SCRA protection or assuming how it applies to your orders.</p>
    `,
    faqs: [
      { q: 'How fast can I sell my Front Royal home with PCS orders?', a: 'Cash sales close in 7 to 21 days in Warren County. Tell me your report date and I structure the sale around it.' },
      { q: 'Can I close on my Front Royal home remotely?', a: 'Yes — remote signing is standard. I handle coordination locally. You sign from your new duty station.' },
      { q: 'Should I sell or rent my Front Royal home on PCS?', a: 'Warren County rental demand is real. I give you the honest math on both — sell now vs. hold and rent — so you make the call with real numbers.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
