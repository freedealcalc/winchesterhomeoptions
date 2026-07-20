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
    bodyContent: `
      <h2>How Virginia Actually Divides a House in Divorce</h2>
      <p>Virginia is an "equitable distribution" state, not a community-property state — governed by <a href="https://law.lis.virginia.gov/vacode/title20/chapter6/section20-107.3/" target="_blank" rel="noopener noreferrer">Va. Code &sect;&nbsp;20-107.3</a>. The court doesn't split marital assets automatically down the middle. It first classifies the property as separate (owned before the marriage, or received by gift or inheritance), marital (acquired during the marriage), or mixed — a home bought before the wedding but paid down with marital income afterward is a common mixed-property example in Frederick County. Only the marital share is ever on the table for division.</p>
      <p>From there, the court has broad authority under the statute: it can order the home transferred to one spouse, order a private sale between the parties, or order a public sale — weighing eleven factors including each spouse's contributions, the length of the marriage, and how the property was acquired. Most Stephens City couples never actually see a judge make this call; they work out a sale or buyout directly, which is faster, cheaper, and keeps control of the outcome in their own hands.</p>
      <h2>Where a Frederick County Divorce Case Sits</h2>
      <p>Divorce decrees and equitable distribution orders for Stephens City and the rest of Frederick County are handled at the <strong>Frederick County Circuit Court</strong>, part of the Joint Judicial Center at 5 North Kent Street, Winchester, VA 22601 &middot; (540) 667-5770. That's the court your attorneys will be filing with if a sale needs to be reflected in a separation agreement or final decree.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia property division works, not legal advice for your specific case — whether your home is separate, marital, or mixed property depends on the particular facts of your marriage and purchase history. Confirm your situation with a Virginia family law attorney before making decisions about a sale.</p>
    `,
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
