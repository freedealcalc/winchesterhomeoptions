import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House During Divorce in Front Royal VA | Every Option Explained',
  description: 'Sell your Front Royal home fast during divorce and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option so both parties get a fair outcome. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-divorce-front-royal-va' },
  openGraph: {
    title: 'Selling a House During Divorce in Front Royal VA',
    description: 'Selling a home during divorce in Front Royal? Dan White handles the transaction so both parties walk away with the most money possible. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-divorce-front-royal-va',
  },
};

export default async function FrontRoyalDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');

  const config = {
    slug: 'sell-house-divorce-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'Selling Your Front Royal Home During Divorce — <em>Done Right.</em>',
    heroSub: 'Front Royal and Warren County homeowners going through divorce need a professional who keeps the transaction moving without adding to the stress. Dan White works with both parties, coordinates with attorneys, and makes sure every option is on the table so you walk away with the most money possible.',
    trustItems: [
      '20+ years in Warren County — sensitive situations handled with care',
      'Licensed VA agent · Pearson Smith Realty',
      'Works with both parties and their attorneys',
      'Confidential · No judgment · Free consultation',
    ],
    faqs: [
      {
        q: 'Can I sell my Front Royal home before the divorce is finalized?',
        a: 'Yes — selling during the divorce process is often the cleaner path. It removes the shared asset, stops the carrying costs, and gives both parties liquid proceeds to work with. Timing depends on your specific agreement and court situation.',
      },
      {
        q: 'What if one spouse wants to sell and the other wants to keep the Front Royal home?',
        a: 'This is a common impasse. Options include one spouse buying out the other, refinancing into a single name, or a court-ordered sale if agreement can\'t be reached. I can walk through the financial picture on each scenario.',
      },
      {
        q: 'How fast can we close on a Front Royal home during divorce?',
        a: 'As fast as both parties can cooperate on paperwork. Cash sales in Warren County can close in 7–21 days. MLS listings take a bit longer but can maximize proceeds. I work around whatever timeline the divorce agreement requires.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
