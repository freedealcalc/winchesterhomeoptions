import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Clearbrook VA | Frederick County Home Options',
  description: 'Selling a house in Clearbrook VA? Dan White covers every option for Frederick County homeowners — cash sale, as-is listing, and more. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/clearbrook' },
  openGraph: {
    title: 'Sell My House in Clearbrook VA | Frederick County Home Options',
    description: 'Know every option before selling your Clearbrook home. Free consultation with Dan White.',
    url: 'https://www.winchesterhomeoptions.com/clearbrook',
  },
};

export default async function ClearbrookHubPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Clearbrook', 'Frederick County');

  const config = {
    slug: 'clearbrook',
    city: 'Clearbrook',
    county: 'Frederick County',
    type: 'city',
    h1: 'Sell Your Clearbrook Home — <em>Every Option, Honest Advice</em>',
    heroSub: 'Clearbrook is northern Frederick County — rural character, strong I-81 access, and a buyer pool that includes both local buyers and investors. Dan White covers Clearbrook with the same depth as Winchester. Free consultation, no pressure.',
    trustItems: [
      '20+ years in Frederick County & the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Access to thousands of cash buyers — they compete, you win',
      'Any condition · Any situation · No judgment',
    ],
    faqs: [
      {
        q: 'What options do I have to sell my Clearbrook home?',
        a: 'Cash sale, as-is MLS listing, or wholetail. I walk you through the numbers on each before you decide anything.',
      },
      {
        q: 'Do I need repairs before selling in Clearbrook?',
        a: 'No. Cash buyers take properties as-is. As-is listings reach buyers who want a project. No repairs required.',
      },
      {
        q: 'How fast can I sell in Clearbrook?',
        a: 'Cash deals close in 7–21 days. MLS listings in Frederick County often go under contract within 2–4 weeks.',
      },
      {
        q: 'Do you cover all of northern Frederick County?',
        a: 'Yes — Clearbrook, Bunker Hill area, Winchester, Stephens City, and all of Frederick County. Call and we figure out your situation.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
