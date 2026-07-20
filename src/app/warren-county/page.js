import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Warren County VA | Front Royal Home Options',
  description: 'Selling in Warren County VA? Dan White, licensed agent, covers every option — cash, as-is, wholetail. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/warren-county' },
  openGraph: {
    title: 'Sell My House in Warren County VA | Front Royal Home Options',
    description: 'Know every option before selling your Warren County home. Free consultation with Dan White.',
    url: 'https://www.winchesterhomeoptions.com/warren-county',
  },
};

export default async function WarrenCountyHubPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Warren County', 'Warren County');

  const config = {
    slug: 'warren-county',
    city: 'Warren County',
    county: 'Warren County',
    type: 'county',
    h1: 'Sell Your Warren County Home — <em>Every Option, Honest Numbers</em>',
    heroSub: 'Warren County — anchored by Front Royal at the northern entrance to Shenandoah National Park — has a unique buyer pool: outdoor enthusiasts, remote workers, and investors who know the I-66 corridor value. Dan White covers all of Warren County with 20+ years of Shenandoah Valley market experience.',
    trustItems: [
      '20+ years in Warren County & the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Access to thousands of cash buyers — they compete, you win',
      'Any condition · Any situation · No judgment',
    ],
    bodyContent: `
      <h2>A Licensed Agent Covering All of Warren County</h2>
      <p>Dan White is a licensed Virginia real estate agent who has worked Warren County properties for more than 20 years, from Front Royal out to the more rural corners of the county. Every seller gets a look at the cash-sale, as-is-listing, and wholetail paths side by side, whether the sale is routine or complicated by foreclosure, probate, or deferred maintenance.</p>
      <h2>Warren County and the Northern Shenandoah Valley</h2>
      <p>Warren County's seat is Front Royal, positioned where the North and South Forks of the Shenandoah River meet and marking the northern entrance to Skyline Drive and Shenandoah National Park. The county's location along the I-66 corridor has also made it a landing spot for buyers priced out of Northern Virginia, adding steady demand on top of the area's outdoor-recreation draw.</p>
    `,
    faqs: [
      {
        q: 'What areas of Warren County do you cover?',
        a: 'Front Royal, Bentonville, Linden, Relics, and all of Warren County. Also adjacent Frederick County (Winchester) and Clarke County (Berryville).',
      },
      {
        q: 'What options do Warren County homeowners have?',
        a: 'Cash sale, as-is MLS listing, or wholetail. Each has different speed and net price trade-offs. I walk you through honest numbers on all three.',
      },
      {
        q: 'How is the Warren County market?',
        a: 'Warren County has seen strong demand from buyers priced out of Northern Virginia and the DC suburbs — particularly for rural and semi-rural properties along the I-66 corridor. The live data above reflects current conditions.',
      },
      {
        q: 'Can I sell my Warren County home without repairs?',
        a: 'Yes — cash buyers take properties as-is. As-is MLS listings reach buyers who want a project. No repairs required.',
      },
      {
        q: 'What if my Warren County property has liens or is in foreclosure?',
        a: 'Both situations are workable. Liens resolve at closing. Foreclosure has a timeline — call and we figure out where you stand and what your options are.',
      },
      {
        q: 'Is the consultation free?',
        a: 'Yes. Free options review, no obligation. I only make money if we work together.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
