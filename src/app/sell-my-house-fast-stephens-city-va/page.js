import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Stephens City VA | Every Option, Honest Advice',
  description: 'Sell your Stephens City home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more — so you make the right call. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-stephens-city-va' },
  openGraph: {
    title: 'Sell My House Fast in Stephens City VA | Every Option, Honest Advice',
    description: 'Sell your Stephens City home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option so you make the right call. Free, no-pressure consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-stephens-city-va',
  },
};

export default async function StephensCityPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');

  const config = {
    slug: 'sell-my-house-fast-stephens-city-va',
    city: 'Stephens City',
    county: 'Frederick County',
    type: 'city',
    h1: 'Sell Your Stephens City Home Fast — <em>For the Most Money</em>',
    heroSub: 'Stephens City is one of Frederick County\'s most underrated markets — and most sellers don\'t know what their home is actually worth. Dan White has spent 20+ years fixing, flipping, and listing in this corridor. Every option on the table. No pressure.',
    trustItems: [
      '20+ years in Frederick County — Stephens City to Winchester',
      'Licensed VA agent · Pearson Smith Realty',
      'Cash buyers compete — you keep the difference',
      'Any condition · Close in 7 days or 90 · Your call',
    ],
    faqs: [
      {
        q: 'Is Stephens City a good market to sell in right now?',
        a: 'Frederick County as a whole has seen strong demand from buyers priced out of Northern Virginia. Stephens City sits on the Route 11 corridor with easy I-81 access — that\'s attractive to commuters and investors alike. Current market data is on this page above.',
      },
      {
        q: 'Can I sell my Stephens City home as-is?',
        a: 'Yes — every path I offer works as-is. Cash buyers don\'t care about condition. As-is MLS listings in Frederick County attract investors who want a project. You don\'t have to fix or clean a thing.',
      },
      {
        q: 'How fast can I close on a Stephens City property?',
        a: 'Cash closings typically run 7–21 days. As-is MLS listings in this market have been moving in 2–4 weeks. Your timeline drives the conversation — fast or slow, we structure it around you.',
      },
      {
        q: 'What if my Stephens City home needs major repairs?',
        a: 'That\'s actually where I add the most value. A single cash buyer will price your repairs into a lowball offer. I put your property in front of thousands of investors simultaneously — they compete on it, and you get a real number instead of a take-it-or-leave-it.',
      },
      {
        q: 'Do you handle inherited properties in Stephens City?',
        a: 'Yes — inherited property is one of the most common situations I work through in Frederick County. Whether probate is complete or just starting, whether the home is full of belongings or empty, I can help you figure out the path forward.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
