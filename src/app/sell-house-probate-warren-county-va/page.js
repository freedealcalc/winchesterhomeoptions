import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House in Probate in Warren County VA',
  description: 'Sell your Warren County probate home fast for the most money. Dan White covers every option for the best estate outcome. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-probate-warren-county-va' },
  openGraph: { title: 'Selling a House in Probate in Warren County VA', description: 'Navigating probate in Warren County? Dan White walks you through every option — and which one gets the estate the most money. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-probate-warren-county-va' },
};

export default async function WarrenCountyProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Warren County', 'Warren County');
  const config = {
    slug: 'sell-house-probate-warren-county-va',
    city: null, county: 'Warren County', type: 'county',
    h1: 'Selling a Warren County Home Through Probate — <em>Every Option Explained.</em>',
    heroSub: 'Warren County probate properties — particularly older homes, farmhouses, and rural estates — need someone who knows both the legal process and the local market. Dan White has worked through estate sales across Front Royal and Warren County for 20+ years. He knows what to do, in what order, and how to get the estate the most money.',
    trustItems: ['20+ years of estate and probate sales in Warren County', 'Licensed VA agent · Pearson Smith Realty', 'Works with Warren County probate court timelines', 'Rural properties, farmhouses, estates — all handled'],
    faqs: [
      { q: 'Can we sell a Warren County probate home before probate closes?', a: 'Often yes. Virginia allows executors with proper authority to list and sell during probate, with closing contingent on court confirmation where required. This stops carrying costs while the rest of the estate settles.' },
      { q: 'The Warren County probate property is a farmhouse in rough condition — can we sell it as-is?', a: 'Yes — and this is often the right call for rural Warren County properties. Cash buyers who want rural land and older homes buy as-is. No repairs, no updates, no cleanup required.' },
      { q: 'What if the Warren County probate home has liens or back taxes?', a: 'Liens and taxes are resolved at closing from the estate proceeds. This is standard in probate sales and does not prevent the transaction — it just factors into the closing settlement.' },
      { q: 'How do I get started with a Warren County probate property?', a: 'Call Dan White at (571) 989-3269 with the basics — executor name, property address, where you are in probate. I walk you through what comes next in 15 minutes. Free, no obligation.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
