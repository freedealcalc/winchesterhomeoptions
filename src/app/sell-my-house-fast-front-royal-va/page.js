import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Front Royal VA | Every Option',
  description: 'Sell your Front Royal home fast for the most money. Licensed VA agent Dan White covers every option — cash, as-is listing, and more. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-front-royal-va' },
  openGraph: {
    title: 'Sell My House Fast in Front Royal VA | Every Option',
    description: 'Sell your Front Royal home fast for the most money. Licensed Virginia agent Dan White goes over every option so you make the right call. Free, no-pressure consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-front-royal-va',
  },
};

export default async function FrontRoyalPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');

  const config = {
    slug: 'sell-my-house-fast-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'Sell Your Front Royal Home Fast — <em>For the Most Money</em>',
    heroSub: 'Front Royal and Warren County are moving faster than most sellers realize. Dan White has worked this market for 20+ years — from distressed properties to estate sales to straightforward listings. Every option explained honestly. You pick the path.',
    trustItems: [
      '20+ years in the Shenandoah Valley — Warren County to Frederick',
      'Licensed VA agent · Pearson Smith Realty',
      'Any condition — no repairs, no cleanout required',
      'Close in 7 days or on your timeline · No pressure',
    ],
    faqs: [
      {
        q: 'What is the Front Royal housing market like right now?',
        a: 'Warren County has attracted buyers who want Shenandoah Valley living without Northern Virginia prices. Front Royal in particular has seen investor and primary buyer demand. Live market data is at the top of this page.',
      },
      {
        q: 'Can I sell a Front Royal home that needs major work?',
        a: 'Absolutely. Front Royal and Warren County have a healthy investor base that actively looks for properties to renovate. I put your home in front of that buyer pool and let them compete — which almost always beats a single lowball cash offer.',
      },
      {
        q: 'What if I inherited a property in Front Royal?',
        a: 'Common situation in Warren County — particularly farmhouses and older estates. Whether the estate is in probate or already settled, whether the home is occupied or vacant, I can walk you through every realistic option in about 15 minutes.',
      },
      {
        q: 'How quickly can I close in Front Royal?',
        a: 'Cash sales run 7–21 days. As-is listings in Warren County have been moving well. If you need to close fast — foreclosure deadline, relocation, financial pressure — we structure around that. If you need time, that works too.',
      },
      {
        q: 'Do you charge commission on cash sales in Front Royal?',
        a: 'No seller commission on off-market cash sales. If we list on MLS, standard commission applies — but the higher price typically covers it with room to spare. I give you the net number on every option so you can compare them clearly.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
