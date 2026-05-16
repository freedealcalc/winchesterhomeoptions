import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Vacant House in Front Royal VA | Stop the Drain, Get the Most Money',
  description: 'Sell your vacant Front Royal home fast and walk away with the most money your situation allows. Dan White goes over every option — vacant properties are his specialty. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-vacant-house-front-royal-va' },
  openGraph: { title: 'Sell a Vacant House in Front Royal VA', description: 'Vacant property in Front Royal costing you money every month? Dan White gets it sold fast, for the most money. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-vacant-house-front-royal-va' },
};

export default async function FrontRoyalVacantPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');
  const config = {
    slug: 'sell-vacant-house-front-royal-va',
    city: 'Front Royal', county: 'Warren County', type: 'city',
    h1: 'Vacant Property in Front Royal? <em>Stop the Bleeding. Sell Fast.</em>',
    heroSub: 'Every month a vacant Front Royal or Warren County property sits, it costs you money — taxes, insurance, maintenance risk, vandalism. Dan White gets vacant properties sold fast, for the most money the market will support, with no cleanup required.',
    trustItems: ['20+ years handling vacant properties in Warren County', 'Licensed VA agent · Pearson Smith Realty', 'Close in as few as 7 days', 'Any condition · No cleanout required · Free consultation'],
    faqs: [
      { q: 'How fast can I sell a vacant Front Royal property?', a: 'Cash buyers close in 7 to 21 days. No occupant coordination needed — vacant properties often close faster because access is straightforward.' },
      { q: 'My Front Royal vacant property has been empty for years — does that matter?', a: 'Long-vacant properties sell regularly to investors in Warren County. They purchase as-is and handle all remediation after closing.' },
      { q: 'What if the vacant Front Royal property has been vandalized?', a: 'Vandalized properties sell to investors who factor damage into their offer. Condition affects price — it does not eliminate the sale.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
