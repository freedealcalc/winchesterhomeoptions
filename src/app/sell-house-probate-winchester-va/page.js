import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House in Probate in Winchester VA | Every Option Explained',
  description: 'Sell your Winchester probate home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option so the estate gets the best outcome. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-probate-winchester-va' },
  openGraph: {
    title: 'Selling a House in Probate in Winchester VA',
    description: 'Navigating probate in Winchester? Dan White walks you through every option for the estate property — and which one gets you the most money. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-probate-winchester-va',
  },
};

export default async function WinchesterProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-house-probate-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Selling a Winchester Home Through Probate — <em>Every Option Explained.</em>',
    heroSub: 'Probate real estate in Winchester and Frederick County has its own rules and timelines. Dan White has worked through dozens of probate sales — as executor, as agent, and alongside heirs. He knows what\'s required, what\'s optional, and how to get the most money for the estate without unnecessary delay.',
    trustItems: [
      '20+ years of probate and estate sales in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Works with estate attorneys and executors',
      'Buy as-is — full of belongings, any condition',
    ],
    faqs: [
      {
        q: 'Can I sell a Winchester home while it\'s still in probate?',
        a: 'In many cases yes. Virginia probate law allows the executor to list and accept offers during the probate process. The sale typically closes once the court approves it. The timeline depends on the complexity of the estate and the Frederick County probate court\'s schedule.',
      },
      {
        q: 'Does the Winchester probate court have to approve the sale price?',
        a: 'In some cases yes, particularly if the will requires it or if there are creditors involved. Court approval typically involves showing the court that the price is fair — which is where a licensed agent\'s market analysis becomes important.',
      },
      {
        q: 'What if the Winchester probate property has significant deferred maintenance?',
        a: 'Probate properties are frequently sold as-is — courts and buyers both understand this. Cash buyers and as-is listings are well-suited to estate properties that haven\'t been updated. You don\'t need to invest estate funds in repairs.',
      },
      {
        q: 'How long does selling a Winchester probate property typically take?',
        a: 'From listing to close, probate sales in Virginia can take 60–120 days depending on court timelines. A cash sale can compress the transaction side significantly — the probate process itself sets the floor on timing.',
      },
      {
        q: 'The Winchester probate home is full of the deceased\'s belongings — what do we do?',
        a: 'Leave them. Cash buyers purchase homes with all contents. Heirs take what they want and the buyer handles the rest. This removes one of the most time-consuming and emotionally draining parts of settling an estate.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
