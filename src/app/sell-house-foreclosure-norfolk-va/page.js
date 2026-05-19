/**
 * app/sell-house-foreclosure-norfolk-va/page.js
 * Target keywords: sell house before foreclosure norfolk va, stop foreclosure norfolk va
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Before Foreclosure in Norfolk VA | Stop the Clock',
  description: 'Sell your Norfolk home fast and walk away with the most money your situation allows — even facing foreclosure. Dan White goes over every option so you protect your credit and equity. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/sell-house-foreclosure-norfolk-va' },
  openGraph: {
    title: 'Sell Your House Before Foreclosure in Norfolk VA',
    description: 'Facing foreclosure in Norfolk? You have more options than you think. Dan White walks you through every path. Free consultation.',
    url: 'https://virginiahomeoptions.com/sell-house-foreclosure-norfolk-va',
  },
};

export default async function NorfolkForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Norfolk', 'Norfolk City');

  const config = {
    slug: 'sell-house-foreclosure-norfolk-va',
    city: 'Norfolk',
    county: 'Norfolk City',
    type: 'city',
    h1: 'Facing Foreclosure in Norfolk? <em>You Still Have Options.</em>',
    heroSub: 'Norfolk homeowners facing foreclosure have more runway than they often realize. Virginia\'s non-judicial foreclosure process moves fast — but you retain the right to sell right up to the sale date. Norfolk\'s active investor market means cash buyers can close in days. Dan White has helped Norfolk homeowners stop foreclosure and walk away with money instead of a damaged credit record.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Close in as few as 7 days — fast enough to stop most foreclosures',
      'Norfolk investor network — competitive cash offers',
      'Confidential · No judgment · Free consultation',
    ],
    faqs: [
      {
        q: 'Can I sell my Norfolk home while in foreclosure?',
        a: 'Yes — in Virginia you can sell right up to the foreclosure sale date. Even with a sale date set, a fast cash closing can stop the process. Call me with your deadline and I will tell you immediately if we have enough time.',
      },
      {
        q: 'How fast can I close to beat a foreclosure deadline in Norfolk?',
        a: 'Cash buyers in our Hampton Roads network close in 7 to 14 days in most cases. Norfolk has strong investor activity — closings move quickly when a property is priced right.',
      },
      {
        q: 'What if I owe more than my Norfolk home is worth?',
        a: 'A short sale is the path — the lender agrees to accept less than full payoff. Far better than foreclosure for your credit. I can walk you through how it works in Virginia.',
      },
      {
        q: 'Will selling before foreclosure protect my credit?',
        a: 'Significantly better than letting it go to foreclosure. A foreclosure stays on your credit report for 7 years and can drop your score 100+ points. A pre-foreclosure sale is far less damaging.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
