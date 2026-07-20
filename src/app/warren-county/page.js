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
