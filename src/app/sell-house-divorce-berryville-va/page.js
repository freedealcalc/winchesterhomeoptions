import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House During Divorce in Berryville VA',
  description: 'Sell your Berryville home fast during divorce for the most money. Dan White works with both parties for a fair outcome. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-divorce-berryville-va' },
  openGraph: { title: 'Selling a House During Divorce in Berryville VA', description: 'Selling a home during divorce in Berryville? Dan White handles the transaction professionally so both parties walk away with the most money. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-divorce-berryville-va' },
};

export default async function BerryvilleDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');
  const config = {
    slug: 'sell-house-divorce-berryville-va',
    city: 'Berryville', county: 'Clarke County', type: 'city',
    h1: 'Selling Your Berryville Home During Divorce — <em>Done Right.</em>',
    heroSub: 'The marital home is often the largest asset in a Clarke County divorce — and the most complicated to handle. Dan White works professionally with both parties and their attorneys to get the most money from the sale so there is the most to divide.',
    trustItems: ['20+ years in Clarke County sensitive sales', 'Licensed VA agent · Pearson Smith Realty', 'Works with both parties and their counsel', 'Confidential · No judgment · Free consultation'],
    bodyContent: `
      <h2>How Virginia Actually Divides a House in Divorce</h2>
      <p>Virginia is an "equitable distribution" state, not a community-property state — governed by <a href="https://law.lis.virginia.gov/vacode/title20/chapter6/section20-107.3/" target="_blank" rel="noopener noreferrer">Va. Code &sect;&nbsp;20-107.3</a>. The court doesn't automatically split marital assets 50/50. It first classifies property as separate (owned before the marriage, or received as a gift or inheritance), marital (acquired during the marriage), or a mix of both — a Berryville home bought before the wedding but paid down with marital income afterward is a common example of "mixed" property. Only the marital share is subject to division.</p>
      <p>From there, the statute gives the court broad authority: it can order the home transferred to one spouse, order a private sale between the parties, or order a public sale directed by the court — weighing eleven factors including each spouse's contributions, the marriage's length, and how the property was acquired. Most Berryville couples never get anywhere near a judge deciding this — they negotiate a sale or buyout directly, which is faster, costs less, and gives both people more control over the outcome than waiting for a court date.</p>
      <h2>Where a Clarke County Divorce Case Sits</h2>
      <p>Divorce decrees and equitable distribution orders for Berryville and the rest of Clarke County are handled by the <strong>Clarke County Circuit Court</strong>, 102 N. Church St., Berryville, VA &middot; (540) 955-5188. If a sale needs to be reflected in a separation agreement or final decree, that's the court your attorneys will be filing with.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia property division works, not legal advice for your specific case — the classification of your home as separate, marital, or mixed property depends on facts particular to your marriage and purchase history. Confirm your specific situation with a Virginia family law attorney before making decisions about a sale.</p>
    `,
    faqs: [
      { q: 'Do both spouses need to sign off on selling the Berryville home?', a: 'If both names are on title, yes. I work with both parties professionally even when communication between them is difficult.' },
      { q: 'Is a cash sale or MLS listing better for a Berryville divorce?', a: 'Cash is faster and cleaner when communication is strained. MLS can produce more money if both parties can cooperate on showings. I show you both net numbers.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
