import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Berryville, VA | Dan White',
  description: 'Inherited a Berryville home? Licensed agent Dan White explains every option, cash sale, as-is listing, wholetail. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-inherited-house-berryville-va' },
  openGraph: {
    title: 'Sell an Inherited House in Berryville, VA | Dan White',
    description: 'Inherited a home in Berryville? Dan White walks you through every option — and which one gets you the most money. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-inherited-house-berryville-va',
  },
};

export default async function BerryvilleInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');

  const config = {
    slug: 'sell-inherited-house-berryville-va',
    city: 'Berryville',
    county: 'Clarke County',
    type: 'city',
    h1: 'Inherited a Home in Berryville? <em>Here is What to Do Next.</em>',
    heroSub: 'Clarke County inherited properties — older homes, farmhouses, rural estates — come with questions most heirs are not prepared for. Dan White has worked through probate sales, multi-heir situations, and distressed inherited properties in Berryville and surrounding areas for 20+ years.',
    trustItems: [
      '20+ years of estate sales in Clarke County and the Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Buy as-is — full of belongings, any condition',
      'Probate-friendly · Free consultation',
    ],
    bodyContent: `
      <h2>What Selling an Inherited House in Virginia Actually Involves</h2>
      <p>Before a Berryville property from an estate can be sold, someone typically needs to be legally recognized as the person with authority to sell it. If the deceased left a will, that's the executor named in it; if there was no will, the court appoints an administrator. Either way, that person has to formally qualify with the Circuit Court in the county where the deceased lived before they can act on the estate's behalf. Virginia doesn't set a hard deadline for this step, but the courts' own guidance points to starting within roughly 30 days of the death, and it's usually the first practical task standing between an heir and a listing.</p>
      <p>Not every estate needs a full, formal administration. If the deceased's personal property — not counting real estate — was worth $50,000 or less, Virginia's small-estate procedure applies: the will is simply recorded with the court and no formal administration is required, which can meaningfully shorten the path to selling the house.</p>
      <p>The detail most heirs are never told, and it's arguably the single most valuable fact in this entire situation, is what happens to the tax basis. Inherited property receives a step-up in basis: for capital gains purposes, the home's cost basis resets to its fair market value as of the date of death, not whatever the original owner paid for it years or decades earlier. Sell the house reasonably soon after inheriting it, and the sale price and that stepped-up basis are usually close to identical — which means the taxable capital gain is close to $0. The only gain that gets taxed is appreciation that happens after the date of death; whatever the property gained in value during the original owner's lifetime is not taxed at all when the heir sells.</p>
      <h2>Where the Estate Is Handled in Clarke County</h2>
      <p>For Berryville and Clarke County estates, probate qualification and any related filings go through the <strong>Clarke County Circuit Court</strong> at 102 N. Church St., Berryville, VA &middot; (540) 955-5188. This is the office of record to confirm whether an executor or administrator has qualified, verify a recorded will, or check the status of an estate filing — not a substitute for legal advice, but a real place to check facts yourself.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia probate and inherited-property taxes typically work, not legal or tax advice for your specific estate — every will, family situation, and IRS filing is different. Confirm executor authority with a Virginia probate attorney and confirm your specific basis and capital gains numbers with a CPA before you sell.</p>
    `,
    faqs: [
      { q: 'Can I sell an inherited Berryville home before probate is finished?', a: 'In many cases yes — you can list and accept offers during probate with closing contingent on court approval. I help you navigate what Clarke County probate requires.' },
      { q: 'The inherited Berryville property is full of belongings — what do we do?', a: 'Leave them. Cash buyers purchase homes with all contents. Heirs take what they want and the buyer handles the rest.' },
      { q: 'What if multiple family members inherited the Berryville property?', a: 'All heirs typically need to agree to sell. I present the options and numbers clearly to all parties — which usually helps reach agreement faster than going back and forth without facts.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
