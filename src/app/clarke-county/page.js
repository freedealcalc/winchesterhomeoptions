import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Clarke County VA | Berryville Home Options',
  description: 'Selling a house in Clarke County VA? Dan White covers every option for Berryville and Clarke County homeowners — cash sale, as-is listing, and more. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/clarke-county' },
  openGraph: {
    title: 'Sell My House in Clarke County VA | Berryville Home Options',
    description: 'Know every option before selling your Clarke County home. Free consultation with Dan White.',
    url: 'https://www.winchesterhomeoptions.com/clarke-county',
  },
};

export default async function ClarkeCountyHubPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Clarke County', 'Clarke County');

  const config = {
    slug: 'clarke-county',
    city: 'Clarke County',
    county: 'Clarke County',
    type: 'county',
    h1: 'Sell Your Clarke County Home — <em>Know Every Option First</em>',
    heroSub: 'Clarke County — anchored by Berryville — is one of the most rural and scenic counties in the Shenandoah Valley corridor. Dan White covers Clarke County alongside Frederick and Warren, and brings the same depth of market knowledge and buyer access to every homeowner situation here.',
    trustItems: [
      '20+ years in Clarke County & the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Access to thousands of cash buyers — they compete, you win',
      'Any condition · Any situation · No judgment',
    ],
    faqs: [
      {
        q: 'What areas of Clarke County do you cover?',
        a: 'Berryville, Boyce, White Post, and all of Clarke County. Also adjacent Frederick County (Winchester) and Warren County (Front Royal).',
      },
      {
        q: 'What options do Clarke County homeowners have?',
        a: 'Cash sale, as-is MLS listing, or wholetail. I walk you through the numbers on all three before you decide anything.',
      },
      {
        q: 'How is the Clarke County market?',
        a: 'Clarke County attracts buyers seeking quiet Shenandoah Valley living within reach of Northern Virginia and the DC area. Smaller inventory means less competition but also a more defined buyer pool. The live data above reflects current conditions.',
      },
      {
        q: 'Can I sell my Clarke County home without repairs?',
        a: 'Yes — cash buyers take properties as-is, and as-is listings reach buyers who want a project.',
      },
      {
        q: 'Is the consultation free?',
        a: 'Yes. Free options review, no obligation, no pressure.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
