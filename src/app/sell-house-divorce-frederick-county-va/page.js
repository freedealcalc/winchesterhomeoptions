import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House During Divorce in Frederick County VA',
  description: 'Selling a house during divorce in Frederick County VA? Dan White works with both parties for a fair, fast outcome. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-divorce-frederick-county-va' },
  openGraph: { title: 'Selling a House During Divorce in Frederick County VA', description: 'Selling a home during divorce in Frederick County? Dan White acts as a neutral third party and handles the transaction professionally. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-divorce-frederick-county-va' },
};

export default async function FrederickCountyDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Frederick County', 'Frederick County');
  const config = {
    slug: 'sell-house-divorce-frederick-county-va',
    city: null, county: 'Frederick County', type: 'county',
    h1: 'Selling Your Frederick County Home During Divorce — <em>Handled Neutrally.</em>',
    heroSub: 'When a marriage ends, the house is often the biggest asset left to untangle, and the last thing either spouse needs is added conflict over the sale. Dan White acts as a neutral third party for homes in Winchester, Stephens City, Clearbrook, and Middletown, laying out a timeline both sides can live with and getting the most money out of the sale so there is more to divide.',
    trustItems: ['20+ years handling sensitive sales in Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Neutral third party — works with both spouses and their attorneys', 'Confidential · No judgment · Free consultation'],
    bodyContent: `
      <h2>How Virginia Actually Divides a House in Divorce</h2>
      <p>Virginia is an "equitable distribution" state, not a community-property state — governed by <a href="https://law.lis.virginia.gov/vacode/title20/chapter6/section20-107.3/" target="_blank" rel="noopener noreferrer">Va. Code &sect;&nbsp;20-107.3</a>. The court doesn't automatically split marital assets 50/50. It first classifies property as separate (owned before the marriage, or received as a gift or inheritance), marital (acquired during the marriage), or a mix of both — a Frederick County home bought before the wedding but paid down with marital income afterward is a common "mixed" property example. Only the marital share is subject to division.</p>
      <p>From there, the statute gives the court broad authority: it can order the home transferred to one spouse, order a private sale between the parties, or order a public sale directed by the court — weighing eleven factors including each spouse's contributions, the marriage's length, and how the property was acquired. Most Frederick County couples never get anywhere near a judge deciding this — they negotiate a sale or buyout directly, which is faster, costs less, and gives both people more control over the outcome than waiting for a court date.</p>
      <h2>Where a Frederick County Divorce Case Sits</h2>
      <p>Divorce decrees and equitable distribution orders for Frederick County residents, including Winchester, Stephens City, Clearbrook, and Middletown, are handled at the <strong>Frederick County Circuit Court</strong>, part of the Joint Judicial Center at 5 North Kent Street, Winchester, VA 22601 &middot; (540) 667-5770. If a sale needs to be reflected in a separation agreement or final decree, that's the court your attorneys will be filing with.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia property division works, not legal advice for your specific case — the classification of your home as separate, marital, or mixed property depends on facts particular to your marriage and purchase history. Confirm your specific situation with a Virginia family law attorney before making decisions about a sale.</p>
    `,
    faqs: [
      { q: 'Do both spouses need to agree before selling a Frederick County home in divorce?', a: 'If both names are on the title, yes, both need to sign off. I stay neutral and communicate the same information to each side, which keeps things moving even when the two of you are not on speaking terms.' },
      { q: 'How flexible is the timeline for a Frederick County divorce sale?', a: 'More flexible than most people expect. Some couples want to close in two weeks to close the chapter; others need 60 to 90 days to coordinate moving and custody logistics. I build the plan around your actual timeline, not a generic one.' },
      { q: 'Is a cash sale or an MLS listing better during a Frederick County divorce?', a: 'Cash is faster and needs almost no coordination between spouses, which matters when communication is strained. An MLS listing can net more if both parties can cooperate on showings and repairs. I run both numbers so you decide with facts, not guesswork.' },
      { q: 'Can we sell our Frederick County home as-is during the divorce?', a: 'Yes. Cash buyers and as-is MLS listings both work without either spouse needing to fund or manage repairs, which is often the simplest path when neither side wants to invest more into a house you are leaving behind.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
