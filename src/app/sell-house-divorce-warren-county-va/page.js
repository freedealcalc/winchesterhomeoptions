import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House During Divorce in Warren County VA',
  description: 'Selling a house during divorce in Warren County VA? Dan White, licensed agent, works with both parties for a fair, fast outcome. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-divorce-warren-county-va' },
  openGraph: { title: 'Selling a House During Divorce in Warren County VA', description: 'Selling a home during divorce in Warren County? Dan White handles the transaction professionally. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-divorce-warren-county-va' },
};

export default async function WarrenCountyDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Warren County', 'Warren County');
  const config = {
    slug: 'sell-house-divorce-warren-county-va',
    city: null, county: 'Warren County', type: 'county',
    h1: 'Selling Your Warren County Home During Divorce — <em>Done Right.</em>',
    heroSub: 'The marital home is often the largest and most contested asset in a Warren County divorce. Dan White handles the transaction professionally, works with both parties and their attorneys, and makes sure you extract the most money possible from the sale so there is the most to divide.',
    trustItems: ['20+ years handling sensitive sales in Warren County', 'Licensed VA agent · Pearson Smith Realty', 'Works with both parties and their counsel', 'Confidential · No judgment · Free consultation'],
    bodyContent: `
      <h2>How Virginia Actually Divides a House in Divorce</h2>
      <p>Virginia is an "equitable distribution" state, not a community-property state — governed by <a href="https://law.lis.virginia.gov/vacode/title20/chapter6/section20-107.3/" target="_blank" rel="noopener noreferrer">Va. Code &sect;&nbsp;20-107.3</a>. The court doesn't automatically split marital assets 50/50. It first classifies property as separate (owned before the marriage, or received as a gift or inheritance), marital (acquired during the marriage), or a mix of both — a house bought before the marriage but paid down with marital income during it is a common example of "mixed" property. Only the marital share is subject to division.</p>
      <p>From there, the statute gives the court broad authority: it can order the home transferred to one spouse, order a private sale between the parties, or order a public sale directed by the court — weighing eleven factors including each spouse's contributions, the marriage's length, and how the property was acquired. In practice, most Warren County couples never get anywhere near a judge deciding this — they negotiate a sale or buyout directly, which is faster, costs less, and gives both people more control over the outcome than waiting for a court date.</p>
      <h2>Where a Warren County Divorce Case Sits</h2>
      <p>Divorce decrees and equitable distribution orders for Warren County residents are handled by the <strong>Warren County Circuit Court</strong>, 1 East Main Street, Front Royal, VA 22630 &middot; (540) 635-2435. If a sale needs to be reflected in a separation agreement or final decree, that's the court your attorneys will be filing with.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia property division works, not legal advice for your specific case — the classification of your home as separate, marital, or mixed property depends on facts particular to your marriage and purchase history. Confirm your specific situation with a Virginia family law attorney before making decisions about a sale.</p>
    `,
    faqs: [
      { q: 'Do both spouses have to agree to sell the Warren County home?', a: 'If both names are on the title, yes. I work with both parties professionally — even when direct communication between spouses is difficult.' },
      { q: 'Is a cash sale or MLS listing better for a Warren County divorce?', a: 'Cash is faster and requires less coordination — better when communication is strained. MLS can produce more money if both parties can cooperate on showings. I show you both net numbers.' },
      { q: 'Can we sell a Warren County home as-is during divorce?', a: 'Yes. Cash buyers and as-is listings work without any repairs or updates — often the fastest path when both parties want to close a chapter.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
