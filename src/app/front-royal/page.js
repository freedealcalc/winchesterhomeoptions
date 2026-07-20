import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Front Royal VA | Warren County Home Options',
  description: 'Selling a house in Front Royal VA? Dan White covers every option — cash, as-is listing, wholetail. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/front-royal' },
  openGraph: {
    title: 'Sell My House in Front Royal VA | Warren County Home Options',
    description: 'Selling a house in Front Royal VA? Know every option before you decide. Free consultation with Dan White — no pressure, no obligation.',
    url: 'https://www.winchesterhomeoptions.com/front-royal',
  },
};

export default async function FrontRoyalHubPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');

  const config = {
    slug: 'front-royal',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'Sell Your Front Royal Home — <em>Every Option on the Table</em>',
    heroSub: 'Front Royal homeowners often think their only option is listing with an agent or taking a lowball cash offer. There\'s a lot more in between. Dan White has worked Warren County and the Shenandoah Valley for 20+ years — he knows the market, knows the buyers, and will tell you exactly what each path nets before you commit to anything.',
    trustItems: [
      '20+ years in Warren County & the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Access to thousands of cash buyers — they compete, you win',
      'Any condition · Any situation · No judgment',
    ],
    bodyContent: `
      <h2>A Local, Licensed Agent for Front Royal Sellers</h2>
      <p>Front Royal Home Options is run by Dan White, a licensed Virginia real estate agent with Pearson Smith Realty who has spent more than two decades working properties throughout Warren County. Whether a Front Royal home needs to sell quickly because of a life change or simply needs a straightforward, well-marketed listing, he walks sellers through the realistic paths open to them — cash sale, as-is listing, or something in between — before any decision gets made.</p>
      <p>That includes distressed situations like pre-foreclosure, inherited property, and tax liens, but also the more ordinary reason most people sell: they're ready to move on and want a fair number without a drawn-out process.</p>
      <h2>Front Royal's Place in the Shenandoah Valley</h2>
      <p>Front Royal is the county seat of Warren County and sits where the North and South Forks of the Shenandoah River come together before continuing north — a geography that also earned the town its long-standing nickname as the "Canoe Capital of Virginia." It also marks the northern entrance to Skyline Drive and Shenandoah National Park, which brings a steady stream of visitors and second-home buyers into the local market alongside commuters using the I-66 corridor toward Northern Virginia.</p>
    `,
    faqs: [
      {
        q: 'What are my options for selling my Front Royal home?',
        a: 'Cash sale, as-is MLS listing, or wholetail. Each has different speed, certainty, and net price trade-offs. A cash sale is fastest but typically below market. An as-is listing reaches more buyers and often nets more. Wholetail is in between. I show you the numbers on all three.',
      },
      {
        q: 'How is the Front Royal / Warren County market right now?',
        a: 'Warren County has seen solid demand from buyers priced out of Northern Virginia and the I-66 corridor. The live market snapshot on this page reflects current MLS data for Front Royal and surrounding Warren County.',
      },
      {
        q: 'Can I sell my Front Royal home without making repairs?',
        a: 'Yes — cash buyers purchase as-is, and as-is MLS listings reach buyers who want a project. No repairs required on any of the paths I work with.',
      },
      {
        q: 'What if my Front Royal property has liens or is in foreclosure?',
        a: 'Both situations are very workable. Liens resolve at closing. Foreclosure has a timeline — knowing where you are in that timeline determines your options. Call and we figure out your situation in 15 minutes.',
      },
      {
        q: 'How fast can I sell in Front Royal?',
        a: 'Cash deals typically close 7–21 days. As-is MLS listings in Warren County often go under contract within 2–4 weeks in active markets. Your timeline is the starting point.',
      },
      {
        q: 'Do you work throughout Warren County?',
        a: 'Yes — Front Royal, Bentonville, Linden, Relics, and all of Warren County. Also adjacent areas in Frederick, Clarke, and Shenandoah counties.',
      },
      {
        q: 'Is there a fee for the consultation?',
        a: 'No. Free options review, no obligation. I don\'t make money unless we do a deal together — so the conversation costs you nothing.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
