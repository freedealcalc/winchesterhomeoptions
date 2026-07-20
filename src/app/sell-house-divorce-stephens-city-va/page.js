import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House During Divorce in Stephens City, VA',
  description: 'Selling during divorce in Stephens City? Dan White covers every option so both parties get a fair outcome. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-divorce-stephens-city-va' },
  openGraph: {
    title: 'Selling a House During Divorce in Stephens City VA',
    description: 'Selling a home during divorce in Stephens City? Dan White handles the transaction so both parties walk away with the most money possible. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-divorce-stephens-city-va',
  },
};

export default async function StephensCityDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');

  const config = {
    slug: 'sell-house-divorce-stephens-city-va',
    city: 'Stephens City',
    county: 'Frederick County',
    type: 'city',
    h1: 'Selling Your Stephens City Home During Divorce — <em>Done Right.</em>',
    heroSub: 'The home is often the biggest asset in a divorce — and the most complicated one to deal with. Dan White handles the transaction professionally, works with both parties and their attorneys, and makes sure you walk away with the most money Frederick County\'s market will support.',
    trustItems: [
      '20+ years handling sensitive sales in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Works with both parties and their counsel',
      'Confidential · No judgment · Free consultation',
    ],
    faqs: [
      {
        q: 'Do both spouses have to sign off on selling the Stephens City home?',
        a: 'If both names are on the title, yes. I work with both parties and their attorneys to keep the process moving professionally — even when communication between spouses is difficult.',
      },
      {
        q: 'Is a cash sale or MLS listing better during a divorce in Stephens City?',
        a: 'Depends on timeline and cooperation level. A cash sale is faster and involves fewer showings — less friction when living arrangements are tense. An MLS listing can produce more money but takes longer. I show you both numbers and you decide.',
      },
      {
        q: 'What if we can\'t agree on a listing price for the Stephens City home?',
        a: 'I can provide a market analysis that gives both parties an objective basis for pricing. Having an independent professional assessment often helps break a deadlock.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
