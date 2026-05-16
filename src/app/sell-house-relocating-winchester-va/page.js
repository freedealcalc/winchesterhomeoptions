import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling Your House to Relocate from Winchester VA | Every Option Explained',
  description: 'Sell your Winchester home fast and walk away with the most money your situation allows before you relocate. Licensed Virginia agent Dan White goes over every option so you close on your timeline. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-relocating-winchester-va' },
  openGraph: {
    title: 'Selling Your House to Relocate from Winchester VA',
    description: 'Relocating from Winchester? Dan White walks you through every option — fast or full price — so you close on your timeline. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-relocating-winchester-va',
  },
};

export default async function WinchesterRelocatingPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-house-relocating-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Relocating from Winchester? <em>Sell on Your Timeline.</em>',
    heroSub: 'Job relocation, family reasons, lifestyle change — whatever\'s pulling you out of Winchester, the home sale shouldn\'t hold you back. Dan White gives you every option from fast cash close to full MLS listing, with honest numbers on each so you make the right call for your timeline.',
    trustItems: [
      '20+ years selling homes for relocating Frederick County owners',
      'Licensed VA agent · Pearson Smith Realty',
      'Remote signing available — you don\'t have to be here to close',
      'Fast or full-price — you set the priority',
    ],
    faqs: [
      {
        q: 'How fast can I sell my Winchester home if I need to relocate quickly?',
        a: 'Cash buyers can close in 7–21 days. As-is MLS listings in Frederick County have been moving in 2–4 weeks in current market conditions. If you have a hard start date at your new location, tell me that first and we work backward from it.',
      },
      {
        q: 'Should I sell before or after I relocate from Winchester?',
        a: 'Selling before you leave is almost always better — you\'re available for showings, you can handle any last-minute issues, and you\'re not managing a vacant property remotely. If you have to leave first, remote signing and local coordination are both doable.',
      },
      {
        q: 'Will I get less money selling fast to relocate from Winchester?',
        a: 'Not necessarily. A cash sale trades some price for speed and certainty. An as-is listing can close nearly as fast in a strong market and often produces more. I give you the real numbers on both so you decide what the right trade-off is.',
      },
      {
        q: 'Can I close on my Winchester home after I\'ve already moved?',
        a: 'Yes. Remote closing is standard — you sign documents digitally or at a notary near your new location. I coordinate locally so you don\'t have to be here.',
      },
      {
        q: 'What if my Winchester home needs work and I don\'t have time to deal with it before relocating?',
        a: 'That\'s exactly where cash buyers shine. They purchase as-is, handle all the work after closing, and you move forward without repair headaches. We can close before you leave.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
