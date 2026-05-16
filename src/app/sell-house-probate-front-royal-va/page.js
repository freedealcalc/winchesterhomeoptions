import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House in Probate in Front Royal VA | Every Option Explained',
  description: 'Sell your Front Royal probate home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option so the estate gets the best outcome. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-probate-front-royal-va' },
  openGraph: {
    title: 'Selling a House in Probate in Front Royal VA',
    description: 'Navigating probate in Front Royal? Dan White walks you through every option for the estate — and which one gets you the most money. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-probate-front-royal-va',
  },
};

export default async function FrontRoyalProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');

  const config = {
    slug: 'sell-house-probate-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'Selling a Front Royal Home Through Probate — <em>Every Option Explained.</em>',
    heroSub: 'Warren County probate properties — particularly older homes, farmhouses, and rural estates — need someone who knows both the legal process and the local market. Dan White has handled estate sales across Front Royal and Warren County for 20+ years. He knows what to do, in what order, and how to get the estate the most money.',
    trustItems: [
      '20+ years of estate sales in Warren County and the Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Works with Warren County probate court timelines',
      'Rural properties, farmhouses, estates — all handled',
    ],
    faqs: [
      {
        q: 'How does probate work for a Front Royal home sale?',
        a: 'The executor files with the Warren County Circuit Court, which oversees the estate. The property can often be listed and marketed during probate, with the sale closing once the court approves. I work within that timeline and handle the real estate side so the executor can focus on the legal side.',
      },
      {
        q: 'Can we sell a Front Royal farmhouse or rural property through probate as-is?',
        a: 'Yes — and this is often the right call for rural Warren County properties. Cash buyers who want rural land and older homes buy as-is. No repairs, no updates, no cleanup required.',
      },
      {
        q: 'What if the Front Royal probate property has liens or back taxes?',
        a: 'Liens and taxes get resolved at closing from the estate\'s proceeds. This is standard in probate sales and doesn\'t prevent the transaction — it just gets accounted for in the closing settlement.',
      },
      {
        q: 'How do I get started selling a Front Royal probate property?',
        a: 'Call me with the basics — who the executor is, what the property looks like, and whether probate has been opened. I\'ll tell you exactly what comes next. Free, no obligation.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
