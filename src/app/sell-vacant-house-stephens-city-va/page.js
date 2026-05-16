import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Vacant House in Stephens City VA | Stop the Drain, Get the Most Money',
  description: 'Sell your vacant Stephens City home fast and walk away with the most money your situation allows. Dan White goes over every option — no cleanup required. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-vacant-house-stephens-city-va' },
  openGraph: { title: 'Sell a Vacant House in Stephens City VA', description: 'Vacant property in Stephens City? Dan White gets it sold fast for the most money. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-vacant-house-stephens-city-va' },
};

export default async function StephensCityVacantPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');
  const config = {
    slug: 'sell-vacant-house-stephens-city-va',
    city: 'Stephens City', county: 'Frederick County', type: 'city',
    h1: 'Vacant Property in Stephens City? <em>Stop the Bleeding. Sell Fast.</em>',
    heroSub: 'A vacant Stephens City property costs money every month it sits — insurance, taxes, maintenance risk. Dan White has helped Frederick County property owners exit vacant properties quickly, for the most money, with no repairs and no cleanup required.',
    trustItems: ['20+ years in Frederick County vacant property sales', 'Licensed VA agent · Pearson Smith Realty', 'Close in as few as 7 days — stop the monthly drain', 'Any condition · No cleanout · Free consultation'],
    faqs: [
      { q: 'How fast can I sell a vacant Stephens City property?', a: 'Cash buyers close in 7 to 21 days in Frederick County. Vacant properties move fast — no occupant coordination needed.' },
      { q: 'My Stephens City vacant property needs a lot of work — can I still sell?', a: 'Yes. Investor buyers in Frederick County purchase distressed vacant properties regularly. No repairs, no cleanup required from you.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
