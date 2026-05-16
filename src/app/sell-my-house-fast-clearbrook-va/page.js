import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Clearbrook VA | Every Option, Honest Advice',
  description: 'Sell your Clearbrook home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more — so you make the right call. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-clearbrook-va' },
  openGraph: {
    title: 'Sell My House Fast in Clearbrook VA | Every Option, Honest Advice',
    description: 'Sell your Clearbrook home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-clearbrook-va',
  },
};

export default async function ClearbrookPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Clearbrook', 'Frederick County');

  const config = {
    slug: 'sell-my-house-fast-clearbrook-va',
    city: 'Clearbrook',
    county: 'Frederick County',
    type: 'city',
    h1: 'Sell Your Clearbrook Home Fast — <em>For the Most Money</em>',
    heroSub: 'Clearbrook is northern Frederick County — close to the West Virginia line, the Martinsburg commuter corridor, and buyers who know this pocket of the Valley. Dan White has worked this area for 20+ years. Every option, honest numbers, no pressure.',
    trustItems: [
      '20+ years throughout northern Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Any condition · Rural and residential both handled',
      'Free consultation · No pressure',
    ],
    faqs: [
      { q: 'Is Clearbrook a strong market for sellers?', a: 'Clearbrook attracts buyers who want northern Frederick County access — close to I-81, Martinsburg, and Winchester. It is a niche market but there is real buyer demand, particularly from investors and value buyers. Live data is above.' },
      { q: 'Can I sell a Clearbrook property as-is?', a: 'Yes. Cash buyers active in Frederick County purchase Clearbrook properties without requiring repairs or cleanup. As-is MLS listings also work for properties in reasonable condition.' },
      { q: 'Do you work with rural and farm properties in Clearbrook?', a: 'Yes — rural properties with acreage in this part of Frederick County are something I work with regularly. Condition and land size both factor into the strategy.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
