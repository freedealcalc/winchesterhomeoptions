import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling Your House to Relocate from Front Royal VA | Every Option Explained',
  description: 'Sell your Front Royal home fast and walk away with the most money your situation allows before you relocate. Dan White goes over every option so you close on your timeline. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-relocating-front-royal-va' },
  openGraph: {
    title: 'Selling Your House to Relocate from Front Royal VA',
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
    faqs: [
      { q: 'How fast can I sell my Front Royal home to relocate?', a: 'Cash buyers close in 7–21 days in Warren County. If you have a hard start date at your destination, give me that first and we work backward from it.' },
      { q: 'Can I close on my Front Royal home after I have already moved?', a: 'Yes. Remote closing is standard — you sign from wherever you are. I coordinate locally on your behalf.' },
      { q: 'Will selling fast cost me money on my Front Royal home?', a: 'Speed has a cost in a cash sale — but an as-is MLS listing can close nearly as fast in good market conditions and often produces more. I give you real numbers on both.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
