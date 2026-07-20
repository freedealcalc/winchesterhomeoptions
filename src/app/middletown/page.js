import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Middletown VA | Frederick County',
  description: 'Selling in Middletown VA? Dan White, licensed Frederick County agent, covers every option, cash sale, as-is listing, and more. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/middletown' },
  openGraph: {
    title: 'Sell My House in Middletown VA | Frederick County',
    description: 'Know every option before selling your Middletown home. Free consultation with Dan White — no pressure, no obligation.',
    url: 'https://www.winchesterhomeoptions.com/middletown',
  },
};

export default async function MiddletownHubPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Middletown', 'Frederick County');

  const config = {
    slug: 'middletown',
    city: 'Middletown',
    county: 'Frederick County',
    type: 'city',
    h1: 'Sell Your Middletown Home — <em>Know Every Option First</em>',
    heroSub: 'Middletown sits along the I-81 corridor in Frederick County — a quiet community with steady buyer interest. Dan White covers Middletown with the same depth as Winchester and Stephens City. Free options review, no pressure.',
    trustItems: [
      '20+ years in Frederick County & the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Access to thousands of cash buyers — they compete, you win',
      'Any condition · Any situation · No judgment',
    ],
    faqs: [
      {
        q: 'What are my options to sell my Middletown home?',
        a: 'Cash sale, as-is MLS listing, or wholetail. Each path has different speed and net price characteristics. I show you the honest numbers on all three before you decide.',
      },
      {
        q: 'Do I need repairs before selling in Middletown?',
        a: 'No. Cash buyers take properties as-is. As-is MLS listings target buyers who want a project. No repairs required on any of the paths I work.',
      },
      {
        q: 'How fast can I close in Middletown?',
        a: 'Cash closings run 7–21 days. MLS listings in the current Frederick County market often go under contract within 2–4 weeks.',
      },
      {
        q: 'Do you cover all of Frederick County?',
        a: 'Yes — Middletown, Winchester, Stephens City, Clearbrook, and all of Frederick County. Also Warren County and Clarke County.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
