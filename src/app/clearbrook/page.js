import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Clearbrook VA | Frederick County',
  description: 'Selling in Clearbrook VA? Dan White, licensed Frederick County agent, covers every option, cash sale, as-is listing, and more. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/clearbrook' },
  openGraph: {
    title: 'Sell My House in Clearbrook VA | Frederick County',
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
    bodyContent: `
      <h2>Local Knowledge, Not a Call Center</h2>
      <p>Clearbrook homeowners work directly with Dan White, a licensed Virginia agent who has spent 20+ years in Frederick County real estate. He reviews each property's condition, the seller's timeline, and whatever situation is driving the sale, then lays out the realistic cash-sale, as-is-listing, and wholetail numbers before anything is decided.</p>
      <p>The same process applies to a routine move as it does to a home with back taxes or repair issues — every seller gets the same honest breakdown.</p>
      <h2>Clearbrook in Northern Frederick County</h2>
      <p>Clearbrook is an unincorporated community in the northern end of Frederick County, strung along Route 11 with easy access to I-81 toward both Winchester and the West Virginia state line. It's a more rural stretch of the county, with a mix of older farmhouses and newer construction that draws both local buyers and investors looking outside Winchester's city limits.</p>
    `,
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
