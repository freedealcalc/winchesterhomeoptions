import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Fire Damaged House in Stephens City VA | As-Is, No Repairs',
  description: 'Sell your fire damaged Stephens City home fast and walk away with the most money your situation allows. Dan White connects you with buyers who purchase fire damaged properties as-is. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-fire-damaged-house-stephens-city-va' },
  openGraph: { title: 'Sell a Fire Damaged House in Stephens City VA', description: 'Fire damaged home in Stephens City? Buyers who purchase as-is. Dan White walks you through every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-fire-damaged-house-stephens-city-va' },
};

export default async function StephensCityFireDamagedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');
  const config = {
    slug: 'sell-fire-damaged-house-stephens-city-va',
    city: 'Stephens City', county: 'Frederick County', type: 'city',
    h1: 'Selling a Fire Damaged Home in Stephens City — <em>As-Is, No Repairs.</em>',
    heroSub: 'Fire damaged properties in Stephens City and Frederick County have real buyer demand — from investors and contractors who want exactly what you have. Dan White connects sellers with that buyer pool and gets competition on the property. No repairs, no cleanup, close fast.',
    trustItems: ['20+ years with damaged properties in Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Investor buyers who want fire damaged properties as-is', 'Free consultation · No pressure'],
    faqs: [
      { q: 'Can I sell my Stephens City fire damaged home without making any repairs?', a: 'Yes. Investor buyers in Frederick County purchase fire damaged properties as-is and handle all remediation themselves. No repairs required.' },
      { q: 'Will I get a reasonable price for a fire damaged home in Stephens City?', a: 'Condition affects price — but multiple investors competing on the same property produces a better number than a single lowball. I put the property in front of a large buyer pool and let them compete.' },
      { q: 'How fast can I close on a fire damaged Stephens City property?', a: 'Cash buyers close in 7 to 21 days. Fire damaged properties actually move faster in some ways — no occupant coordination needed and buyers who want them move decisively.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
