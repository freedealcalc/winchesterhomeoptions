import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Strasburg VA | Shenandoah Options',
  description: 'Selling a house in Strasburg VA? Dan White covers every option — cash sale, as-is listing, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/strasburg' },
  openGraph: {
    title: 'Sell My House in Strasburg VA | Shenandoah Valley Home Options',
    description: 'Know every option before selling your Strasburg home. Free consultation with Dan White.',
    url: 'https://www.winchesterhomeoptions.com/strasburg',
  },
};

export default async function StrasburgHubPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Strasburg', 'Shenandoah County');

  const config = {
    slug: 'strasburg',
    city: 'Strasburg',
    county: 'Shenandoah County',
    type: 'city',
    h1: 'Sell Your Strasburg Home — <em>Know Every Option First</em>',
    heroSub: 'Strasburg sits at the southern end of the Shenandoah Valley corridor — I-81, North Fork of the Shenandoah River, and a distinct small-town character. Dan White covers Strasburg alongside Winchester, Front Royal, and the full Shenandoah Valley market. Free options review, no pressure.',
    trustItems: [
      '20+ years in the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Access to thousands of cash buyers — they compete, you win',
      'Any condition · Any situation · No judgment',
    ],
    faqs: [
      {
        q: 'What options do I have to sell my Strasburg home?',
        a: 'Cash sale, as-is MLS listing, or wholetail. Each path has different speed and net price trade-offs. I show you the honest numbers on all three.',
      },
      {
        q: 'Do I need repairs before selling in Strasburg?',
        a: 'No. Cash buyers purchase as-is. As-is listings reach buyers who want a project. Your timeline and situation drive the strategy.',
      },
      {
        q: 'How fast can I sell in Strasburg?',
        a: 'Cash closings run 7–21 days. MLS listings often go under contract within a few weeks in active markets.',
      },
      {
        q: 'Do you cover the full Shenandoah Valley corridor?',
        a: 'Yes — Strasburg, Woodstock, Front Royal, Winchester, Stephens City, and surrounding markets. Call and we figure out your specific situation.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
