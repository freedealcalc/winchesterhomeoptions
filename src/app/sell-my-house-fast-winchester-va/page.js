import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Winchester VA | Every Option, Honest Advice',
  description: 'Sell your Winchester home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more — so you make the right call. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-winchester-va' },
  openGraph: {
    title: 'Sell My House Fast in Winchester VA | Every Option, Honest Advice',
    description: 'Sell your Winchester home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option so you make the right call. Free, no-pressure consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-winchester-va',
  },
};

export default async function WinchesterPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-my-house-fast-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Sell Your Winchester Home Fast — <em>On Your Terms</em>',
    heroSub: 'Most homeowners think they have one option. You have every option. Dan White has spent 20+ years in Frederick County and the Shenandoah Valley helping people navigate every situation — foreclosure, divorce, inherited property, major repairs, and everything in between.',
    trustItems: [
      '20+ years fixing & flipping in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Access to thousands of cash buyers — they compete, you win',
      'Any condition · Any situation · No judgment',
    ],
    faqs: [
      {
        q: 'How fast can I sell my house in Winchester, VA?',
        a: 'With a cash buyer, closings run 7–21 days. As-is MLS listings in Winchester have been moving quickly in the current Frederick County market — often 14–30 days. Your timeline is the starting point of every conversation, not an afterthought.',
      },
      {
        q: 'Do I have to make repairs before selling in Winchester?',
        a: 'Not with any of the options I bring to the table. Cash buyers purchase as-is. As-is MLS listings attract investors and buyers who want a project. Wholetail involves light cleanup but zero renovation. You choose the path that fits your situation.',
      },
      {
        q: 'Will I get a fair price selling as-is in Winchester?',
        a: 'Depends on the path. A single cash offer is typically below market — that\'s the trade-off for speed and certainty. An as-is MLS listing often generates multiple offers and can exceed a cash offer significantly. I show you the honest numbers on each option and let you decide.',
      },
      {
        q: 'What if my Winchester property has liens or back taxes?',
        a: 'Very common — and very solvable. Liens and back taxes get resolved at closing from your proceeds. They don\'t have to block a sale or cost you money out of pocket.',
      },
      {
        q: 'What areas around Winchester do you serve?',
        a: 'I work throughout Frederick County — Winchester city, Stephens City, Clearbrook, and Middletown — plus Clarke County (Berryville) and Warren County (Front Royal). If you\'re in the Shenandoah Valley corridor, I know your market.',
      },
      {
        q: 'Do you charge a commission on cash sales?',
        a: 'No seller commission on off-market cash sales. If we list on the MLS, standard commission applies — but the higher sale price almost always more than covers it. I tell you the net number on every option so you\'re comparing apples to apples.',
      },
      {
        q: 'What if I inherited a property in Winchester and don\'t know where to start?',
        a: 'This is one of the most common situations I work through. I can help regardless of whether probate is complete, whether the home is occupied or vacant, full of belongings or empty. Call and we\'ll figure out where you stand in about 15 minutes.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
