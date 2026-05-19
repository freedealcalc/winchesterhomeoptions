/**
 * app/we-buy-houses-norfolk-va/page.js
 * Target keywords: we buy houses norfolk va, cash home buyers norfolk virginia
 */

import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Norfolk VA | Every Option, Not Just One Cash Offer',
  description: 'Looking for cash home buyers in Norfolk VA? Sell your Norfolk home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://virginiahomeoptions.com/we-buy-houses-norfolk-va' },
  openGraph: {
    title: 'We Buy Houses Norfolk VA | Every Option, Not Just One Offer',
    description: 'Cash buyers in Norfolk VA? Dan White connects you with competing investors and shows you every option. Free consultation.',
    url: 'https://virginiahomeoptions.com/we-buy-houses-norfolk-va',
  },
};

export default async function WeBuyHousesNorfolkPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Norfolk', 'Norfolk City');

  const config = {
    slug: 'we-buy-houses-norfolk-va',
    city: 'Norfolk',
    county: 'Norfolk City',
    type: 'city',
    h1: 'We Buy Houses in Norfolk VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Norfolk has no shortage of "we buy houses" signs — but a single cash offer gives the buyer all the leverage. Dan White puts your Norfolk property in front of a large pool of competing investors simultaneously so the market tells you what it is worth, not one buyer negotiating alone.',
    trustItems: [
      'Licensed VA real estate agent · Pearson Smith Realty',
      'Large Norfolk investor network — competition produces real numbers',
      'Military relocation expertise',
      'Free consultation · No pressure',
    ],
    faqs: [
      {
        q: 'How fast do cash buyers close in Norfolk?',
        a: 'Typically 7 to 21 days in Norfolk. Strong investor activity in this market means closings move quickly when a property is priced right.',
      },
      {
        q: 'Will I get a fair price from a cash buyer in Norfolk?',
        a: 'With one buyer — maybe not. With multiple investors competing — almost certainly better. That is the difference in how I work vs. a single we buy houses company.',
      },
      {
        q: 'What if my Norfolk home needs significant repairs?',
        a: 'Not a problem. Norfolk has strong renovation demand. Cash buyers purchase as-is and factor condition into the offer — which is why competition matters. Multiple buyers competing on your specific property produces a better number than accepting one offer.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
