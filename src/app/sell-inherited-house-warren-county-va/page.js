import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Warren County, VA',
  description: 'Inherited a Warren County home? Licensed agent Dan White covers every option, farmhouses, rural estates, any condition. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-inherited-house-warren-county-va' },
  openGraph: { title: 'Sell an Inherited House in Warren County, VA', description: 'Inherited a home in Warren County? Dan White walks you through every option — and which one gets the estate the most money. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-inherited-house-warren-county-va' },
};

export default async function WarrenCountyInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Warren County', 'Warren County');
  const config = {
    slug: 'sell-inherited-house-warren-county-va',
    city: null, county: 'Warren County', type: 'county',
    h1: 'Inherited a Home in Warren County? <em>Here Is What to Do Next.</em>',
    heroSub: 'Warren County inherited properties — farmhouses, older homes, rural estates — come with questions most heirs are not prepared for. Dan White has worked through probate sales, multi-heir situations, and distressed inherited properties across Front Royal and Warren County for 20+ years. Every option on the table, no rush.',
    trustItems: ['20+ years of estate sales throughout Warren County', 'Licensed VA agent · Pearson Smith Realty', 'Farmhouses, rural estates, any condition — all handled', 'Probate-friendly · Free consultation'],
    bodyContent: `
      <h2>What Selling an Inherited House in Virginia Actually Involves</h2>
      <p>Before a Warren County property from an estate can be sold, someone typically needs to be legally recognized as the person with authority to sell it. If the deceased left a will, that's the executor named in it; if there was no will, the court appoints an administrator. Either way, that person has to formally qualify with the Circuit Court in the county where the deceased lived before they can act on the estate's behalf. Virginia doesn't set a hard deadline for this step, but the courts' own guidance points to starting within roughly 30 days of the death, and it's usually the first practical task standing between an heir and a listing.</p>
      <p>Not every estate needs a full, formal administration. If the deceased's personal property — not counting real estate — was worth $50,000 or less, Virginia's small-estate procedure applies: the will is simply recorded with the court and no formal administration is required, which can meaningfully shorten the path to selling the house.</p>
      <p>The detail most heirs are never told, and it's arguably the single most valuable fact in this entire situation, is what happens to the tax basis. Inherited property receives a step-up in basis: for capital gains purposes, the home's cost basis resets to its fair market value as of the date of death, not whatever the original owner paid for it years or decades earlier. Sell the house reasonably soon after inheriting it, and the sale price and that stepped-up basis are usually close to identical — which means the taxable capital gain is close to $0. The only gain that gets taxed is appreciation that happens after the date of death; whatever the property gained in value during the original owner's lifetime is not taxed at all when the heir sells.</p>
      <h2>Where the Estate Is Handled in Warren County</h2>
      <p>For Warren County estates, probate qualification and any related filings go through the <strong>Warren County Circuit Court</strong> at 1 East Main Street, Front Royal, VA 22630-3313 &middot; (540) 635-2435. This is the office of record to confirm whether an executor or administrator has qualified, verify a recorded will, or check the status of an estate filing — not a substitute for legal advice, but a real place to check facts yourself.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia probate and inherited-property taxes typically work, not legal or tax advice for your specific estate — every will, family situation, and IRS filing is different. Confirm executor authority with a Virginia probate attorney and confirm your specific basis and capital gains numbers with a CPA before you sell.</p>
    `,
    faqs: [
      { q: 'Can I sell an inherited Warren County home before probate closes?', a: 'Often yes. Virginia allows executors with proper authority to list and sell during probate, with closing contingent on court confirmation. Call me with where you are in the process.' },
      { q: 'The inherited Warren County property is a farmhouse in rough shape — what are my options?', a: 'Warren County has strong investor interest in farmhouses and rural properties regardless of condition. I connect you with buyers who want exactly what you have — no repairs or cleanup required.' },
      { q: 'What if multiple heirs inherited the Warren County property?', a: 'All heirs typically need to agree. I present the options and real numbers to all parties — which usually helps reach agreement faster than negotiating without facts.' },
      { q: 'What if the inherited Warren County property has acreage?', a: 'Acreage adds complexity and often adds value. Land in Warren County has its own buyer pool separate from residential. I assess the whole property and give you the full picture.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
