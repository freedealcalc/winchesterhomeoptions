import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House During Divorce in Winchester, VA',
  description: 'Selling during divorce in Winchester? Dan White covers every option so both parties get a fair outcome. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-divorce-winchester-va' },
  openGraph: {
    title: 'Selling a House During Divorce in Winchester VA',
    description: 'Selling a home during divorce in Winchester? Dan White handles the transaction so you can focus on what matters — and makes sure both parties understand every option. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-divorce-winchester-va',
  },
};

export default async function WinchesterDivorcePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-house-divorce-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Selling Your Winchester Home During Divorce — <em>Done Right.</em>',
    heroSub: 'Divorce is hard enough without the house becoming a battleground. Dan White handles the transaction professionally, works with both parties, and makes sure you understand every option — cash sale, as-is listing, or something in between — so you walk away with the most money possible and move forward.',
    trustItems: [
      '20+ years handling sensitive real estate situations in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Works with both parties and their attorneys',
      'Confidential · No judgment · Free consultation',
    ],
    bodyContent: `
      <h2>How Virginia Actually Divides a House in Divorce</h2>
      <p>Virginia is an "equitable distribution" state, not a community-property state — governed by <a href="https://law.lis.virginia.gov/vacode/title20/chapter6/section20-107.3/" target="_blank" rel="noopener noreferrer">Va. Code &sect;&nbsp;20-107.3</a>. That means the court doesn't automatically split marital assets 50/50. It first classifies property as separate (owned before the marriage, or received as a gift or inheritance), marital (acquired during the marriage), or a mix of both — a house bought before the marriage but paid down with marital income during it is a common example of "mixed" property. Only the marital share is subject to division.</p>
      <p>From there, the statute gives the court broad authority: it can order the home transferred to one spouse, order a private sale between the parties, or order a public sale directed by the court — weighing eleven factors including each spouse's contributions, the marriage's length, and how the property was acquired. In practice, most Winchester couples never get anywhere near a judge deciding this — they negotiate a sale or buyout directly, which is faster, costs less, and gives both people more control over the outcome than waiting for a court date.</p>
      <h2>Where a Winchester Divorce Case Sits</h2>
      <p>Divorce decrees and equitable distribution orders for Winchester residents are handled at the <strong>Frederick County Circuit Court</strong>, which shares the Joint Judicial Center with the City of Winchester at 5 North Kent Street, Winchester, VA 22601 &middot; (540) 667-5770. If a sale needs to be reflected in a separation agreement or final decree, that's the court your attorneys will be filing with.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia property division works, not legal advice for your specific case — the classification of your home as separate, marital, or mixed property depends on facts particular to your marriage and purchase history. Confirm your specific situation with a Virginia family law attorney before making decisions about a sale.</p>
    `,
    faqs: [
      {
        q: 'Do both spouses have to agree to sell the Winchester home during divorce?',
        a: 'Generally yes — if both names are on the title, both parties need to sign off on the sale. If the divorce is contentious, a court can sometimes order the sale. I work with both parties and their attorneys to make the process as smooth as possible.',
      },
      {
        q: 'Should we sell during the divorce or wait until it\'s finalized?',
        a: 'Selling during the divorce often makes financial sense — it removes a major shared asset and its carrying costs from the equation. Waiting can complicate negotiations and cost both parties money in mortgage payments, taxes, and maintenance. I can walk you through the numbers on both approaches.',
      },
      {
        q: 'Can we sell the Winchester home as-is during divorce without making repairs?',
        a: 'Yes. Cash buyers, as-is listings, and wholetail sales all work without any repairs or improvements. This is often the fastest path when both parties want to close a chapter and move on.',
      },
      {
        q: 'How do we split the proceeds from selling the Winchester home?',
        a: 'That\'s determined by your divorce agreement and Virginia law — not by me. My role is to get you the best possible price so there\'s the most to divide. I work with your attorneys to make sure the transaction lines up with whatever division you\'ve agreed to.',
      },
      {
        q: 'One spouse is living in the home and the other isn\'t — how does that affect showing the home?',
        a: 'It\'s something we plan around. Depending on the situation, I coordinate showings with whoever is occupying the home and keep communication professional with both parties throughout.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
