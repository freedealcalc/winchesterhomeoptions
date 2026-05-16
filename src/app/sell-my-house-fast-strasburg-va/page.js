import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Strasburg VA | Every Option, Honest Advice',
  description: 'Sell your Strasburg home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more — so you make the right call. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-strasburg-va' },
  openGraph: {
    title: 'Sell My House Fast in Strasburg VA | Every Option, Honest Advice',
    description: 'Sell your Strasburg home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-strasburg-va',
  },
};

export default async function StrasburgPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Strasburg', 'Shenandoah County');

  const config = {
    slug: 'sell-my-house-fast-strasburg-va',
    city: 'Strasburg',
    county: 'Shenandoah County',
    type: 'city',
    h1: 'Sell Your Strasburg Home Fast — <em>For the Most Money</em>',
    heroSub: 'Strasburg sits at the southern edge of Dan White\'s market — Shenandoah County, I-81 corridor, strong investor and buyer demand for properties priced below the Winchester/Frederick County premium. Every option on the table. Honest numbers. No pressure.',
    trustItems: [
      '20+ years in the Shenandoah Valley including the Strasburg corridor',
      'Licensed VA agent · Pearson Smith Realty',
      'Any condition · Fast or full-price — your call',
      'Free consultation · No pressure',
    ],
    faqs: [
      { q: 'Do you serve Strasburg and Shenandoah County?', a: 'Yes — Strasburg is at the edge of my primary market but I work it regularly. The I-81 corridor from Winchester to Strasburg is an area I know well after 20+ years.' },
      { q: 'Is Strasburg a good market to sell in?', a: 'Strasburg offers Shenandoah Valley living at prices below Winchester — which attracts a specific buyer pool including investors, first-time buyers, and value seekers. Live market data is above.' },
      { q: 'Can I sell a Strasburg home as-is?', a: 'Yes. Cash buyers active in this corridor purchase properties without requiring any repairs or cleanup. As-is MLS listings also work depending on condition and price.' },
      { q: 'How does selling in Strasburg compare to selling in Winchester?', a: 'Strasburg is a thinner market — fewer buyers, longer average days on market. That makes cash buyer access and smart pricing more important than in Winchester. I show you the realistic path for both.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
