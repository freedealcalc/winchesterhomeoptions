import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Winchester VA | Every Option, Honest Advice',
  description: 'Selling in Winchester VA? Dan White covers every option, cash sale, as-is listing, wholetail. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/winchester' },
  openGraph: {
    title: 'Sell My House in Winchester VA | Every Option, Honest Advice',
    description: 'Selling a house in Winchester VA? Dan White covers every option so you walk away with the most money your situation allows. Free, no-pressure consultation.',
    url: 'https://www.winchesterhomeoptions.com/winchester',
  },
};

export default async function WinchesterHubPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'winchester',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Sell Your Winchester Home — <em>Know Every Option First</em>',
    heroSub: 'Winchester homeowners have more options than they think. Cash sale, as-is listing, wholetail — every path has a different net number. Dan White has spent 20+ years in Frederick County helping homeowners understand exactly what they can walk away with before making any decision.',
    trustItems: [
      '20+ years fixing & flipping in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Access to thousands of cash buyers — they compete, you win',
      'Any condition · Any situation · No judgment',
    ],
    bodyContent: `
      <h2>Why Winchester Sellers Work With a Licensed Agent, Not Just a Cash Buyer</h2>
      <p>Winchester Home Options is run by Dan White, a licensed Virginia real estate agent with Pearson Smith Realty who has spent over 20 years buying, selling, and renovating property throughout Frederick County. Because he's licensed, he can put a home on the open market as well as connect it directly with cash investors — so the recommendation on any given property depends on what nets the seller more, not on which option pays him more.</p>
      <p>That range matters whether the home is straightforward or complicated by liens, code violations, or an estate that needs to close on a deadline.</p>
      <h2>Winchester's Place in the Shenandoah Valley</h2>
      <p>Winchester is an independent city in the northern Shenandoah Valley, separate from the surrounding Frederick County it's historically tied to, and it sits along the Route 11 and I-81 corridor that runs the length of the valley. Its location changed hands repeatedly during the Civil War due to its position at a strategic crossroads, and the city has long been known for the apple orchards that still give the annual Shenandoah Apple Blossom Festival its name.</p>
    `,
    faqs: [
      {
        q: 'What options do I have to sell my Winchester home?',
        a: 'Three main paths: a cash sale (fastest, below market price), an as-is MLS listing (more buyers, often higher net), or a wholetail (light cleanup, MLS exposure, cash buyer pool). The right option depends on your timeline, condition, and what the numbers look like. I show you all three before you decide anything.',
      },
      {
        q: 'How is the Winchester housing market right now?',
        a: 'Winchester and Frederick County have stayed relatively active compared to surrounding markets. Days on market and inventory levels shift month to month — the live market data on this page reflects current conditions pulled directly from MLS data.',
      },
      {
        q: 'Do I need to make repairs before selling in Winchester?',
        a: 'No. Cash buyers and as-is listings both work without repairs. Even a traditional MLS listing can be positioned as-is for the right buyer pool. You decide the path — I show you what each one nets.',
      },
      {
        q: 'How fast can I close on a Winchester home sale?',
        a: 'Cash sales typically close in 7–21 days. As-is MLS listings in the current Winchester market often go under contract within 2–4 weeks. Your timeline drives the strategy.',
      },
      {
        q: 'What if my Winchester home has liens, back taxes, or code violations?',
        a: 'All solvable at closing. Liens and back taxes come out of proceeds — they rarely block a sale. Code violations can be disclosed and priced accordingly. Call and we figure out your specific situation in 15 minutes.',
      },
      {
        q: 'Do you charge commission on cash sales in Winchester?',
        a: 'No seller commission on off-market cash sales. On MLS listings, standard commission applies — but the higher sale price almost always more than covers it. I give you the net number on every option.',
      },
      {
        q: 'What areas near Winchester do you cover?',
        a: 'All of Frederick County — Winchester city, Stephens City, Clearbrook, Middletown — plus Clarke County (Berryville) and Warren County (Front Royal, Strasburg). The full Shenandoah Valley corridor.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
