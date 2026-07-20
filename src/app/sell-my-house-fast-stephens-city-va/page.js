import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Stephens City VA | Every Option',
  description: 'Sell your Stephens City home fast for the most money. Licensed VA agent Dan White covers every option — cash, as-is listing, and more. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-stephens-city-va' },
  openGraph: {
    title: 'Sell My House Fast in Stephens City VA | Every Option',
    description: 'Sell your Stephens City home fast for the most money. Licensed Virginia agent Dan White goes over every option so you make the right call. Free, no-pressure consultation.',
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
    bodyContent: `
      <h2>Selling As-Is in Stephens City — Skip the Repairs and the Wait</h2>
      <p>A cash or as-is sale means your home sells the way it looks today — no repainting, no repairs, no weekends spent staging for showings. That's the practical difference from a traditional listing, where an inspection or appraisal can send you back to the table negotiating over things you weren't planning to fix.</p>
      <p>It also changes how much certainty you have going into closing. A financed buyer can fall through late in the process over a loan denial or appraisal gap. A cash sale removes that risk, and you agree to a closing date that works for your situation, whether that's a week out or several months.</p>
      <h2>One of the Valley's Oldest Towns</h2>
      <p>Stephens City is one of the older towns in the Shenandoah Valley, founded in 1758 and originally known as Newtown. It sits along Route 11 in Frederick County just south of Winchester, and its long history is reflected in a mix of historic homes near the town's center alongside newer subdivisions that have grown up around it.</p>
    `,
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
