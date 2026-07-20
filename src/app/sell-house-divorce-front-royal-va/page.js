import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House During Divorce in Front Royal, VA',
  description: 'Selling during divorce in Front Royal? Dan White, licensed VA agent, reviews every option so both parties get a fair outcome. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-divorce-front-royal-va' },
  openGraph: {
    title: 'Selling a House During Divorce in Front Royal, VA',
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
    bodyContent: `
      <h2>How Virginia Actually Divides a House in Divorce</h2>
      <p>Virginia is an "equitable distribution" state, not a community-property state — governed by <a href="https://law.lis.virginia.gov/vacode/title20/chapter6/section20-107.3/" target="_blank" rel="noopener noreferrer">Va. Code &sect;&nbsp;20-107.3</a>. That means the court doesn't automatically split marital assets 50/50. It first classifies property as separate (owned before the marriage, or received as a gift or inheritance), marital (acquired during the marriage), or a mix of both — a house bought before the marriage but paid down with marital income during it is a common example of "mixed" property. Only the marital share is subject to division.</p>
      <p>From there, the statute gives the court broad authority: it can order the home transferred to one spouse, order a private sale between the parties, or order a public sale directed by the court — weighing eleven factors including each spouse's contributions, the marriage's length, and how the property was acquired. In practice, most Front Royal and Warren County couples never get anywhere near a judge deciding this — they negotiate a sale or buyout directly, which is faster, costs less, and gives both people more control over the outcome than waiting for a court date.</p>
      <h2>Where a Warren County Divorce Case Sits</h2>
      <p>Divorce decrees and equitable distribution orders for Warren County residents are handled by the <strong>Warren County Circuit Court</strong>, 1 East Main Street, Front Royal, VA 22630 &middot; (540) 635-2435. If a sale needs to be reflected in a separation agreement or final decree, that's the court your attorneys will be filing with.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia property division works, not legal advice for your specific case — the classification of your home as separate, marital, or mixed property depends on facts particular to your marriage and purchase history. Confirm your specific situation with a Virginia family law attorney before making decisions about a sale.</p>
    `,
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
