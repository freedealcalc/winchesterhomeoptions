import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Frederick County VA | Home Options for Every Situation',
  description: 'Selling a house in Frederick County VA? Dan White covers every option — cash sale, as-is listing, wholetail. Winchester to Middletown to Stephens City. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/frederick-county' },
  openGraph: {
    title: 'Sell My House in Frederick County VA | Home Options for Every Situation',
    description: 'Know every option before selling your Frederick County home. Free consultation with Dan White.',
    url: 'https://www.winchesterhomeoptions.com/frederick-county',
  },
};

export default async function FrederickCountyHubPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Frederick County', 'Frederick County');

  const config = {
    slug: 'frederick-county',
    city: 'Frederick County',
    county: 'Frederick County',
    type: 'county',
    h1: 'Sell Your Frederick County Home — <em>Every Option, Honest Advice</em>',
    heroSub: 'Frederick County is Dan White\'s home market — Winchester, Stephens City, Clearbrook, Middletown, and everything in between. 20+ years of fix-and-flip investing and licensed agent work means he knows every neighborhood, every buyer pool, and every realistic path to selling your home.',
    trustItems: [
      '20+ years fixing & flipping in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Access to thousands of cash buyers — they compete, you win',
      'Any condition · Any situation · No judgment',
    ],
    faqs: [
      {
        q: 'What cities and towns in Frederick County do you cover?',
        a: 'Winchester city, Stephens City, Clearbrook, Middletown, Cross Junction, Gore, and all of Frederick County Virginia. Also adjacent Warren County (Front Royal) and Clarke County (Berryville).',
      },
      {
        q: 'What options do Frederick County homeowners have?',
        a: 'Cash sale, as-is MLS listing, or wholetail — each with different speed and net price trade-offs. I walk you through the honest numbers on all three before you decide anything.',
      },
      {
        q: 'How is the Frederick County housing market?',
        a: 'Frederick County has remained active relative to surrounding markets, supported by I-81 corridor demand and buyers seeking Shenandoah Valley living within reach of Northern Virginia. The live data above reflects current MLS conditions.',
      },
      {
        q: 'Can I sell my Frederick County home without repairs?',
        a: 'Yes. Cash buyers purchase as-is. As-is MLS listings target buyers who want a project. No repairs required on any path I work with.',
      },
      {
        q: 'How fast can I close in Frederick County?',
        a: 'Cash deals typically close 7–21 days. MLS listings in the current market often go under contract within 2–4 weeks. Your timeline drives the strategy.',
      },
      {
        q: 'What if my Frederick County home has liens, code violations, or probate issues?',
        a: 'All very workable. Liens and taxes resolve at closing. Code violations get disclosed and priced accordingly. Probate situations depend on where you are in the process — call and we sort out your specific situation quickly.',
      },
      {
        q: 'Is there a fee for the options review?',
        a: 'No. Free consultation, no obligation. I only make money if we work together — the conversation costs you nothing.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
