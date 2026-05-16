import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling Your House to Relocate from Berryville VA | Every Option Explained',
  description: 'Sell your Berryville home fast and walk away with the most money your situation allows before you relocate. Dan White goes over every option so you close on your timeline. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-relocating-berryville-va' },
  openGraph: { title: 'Selling Your House to Relocate from Berryville VA', description: 'Relocating from Berryville? Dan White walks you through every option so you close on your timeline. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-relocating-berryville-va' },
};

export default async function BerryvilleRelocatingPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');
  const config = {
    slug: 'sell-house-relocating-berryville-va',
    city: 'Berryville', county: 'Clarke County', type: 'city',
    h1: 'Relocating from Berryville? <em>Sell on Your Timeline.</em>',
    heroSub: 'Whether you are moving for work, family, or a fresh start — the Berryville home sale should not hold you back. Dan White gives you every option from fast cash close to MLS listing with honest numbers on each so you make the right call for your timeline.',
    trustItems: ['20+ years selling homes for relocating Clarke County owners', 'Licensed VA agent · Pearson Smith Realty', 'Remote signing available — close from anywhere', 'Fast or full-price — you set the priority'],
    faqs: [
      { q: 'How fast can I sell my Berryville home to relocate?', a: 'Cash buyers close in 7 to 21 days. Clarke County is a thinner market than Winchester — which makes accessing the full buyer pool important for a fast close at a good price.' },
      { q: 'Can I close on my Berryville home after I have already relocated?', a: 'Yes. Remote closing is standard — you sign from wherever you are. I coordinate locally on your behalf.' },
      { q: 'Will selling fast cost me money on my Berryville home?', a: 'Speed has a cost in a pure cash sale. But a properly marketed as-is listing in Clarke County can also move quickly and often produces more. I give you real numbers on both.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
