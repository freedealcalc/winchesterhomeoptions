import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Clarke County, VA',
  description: 'Inherited a Clarke County home? Dan White covers every option — any condition, no cleanout required. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-inherited-house-clarke-county-va' },
  openGraph: { title: 'Sell an Inherited House in Clarke County, VA', description: 'Inherited a home in Clarke County? Dan White walks you through every option, including as-is sales with no cleanout. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-inherited-house-clarke-county-va' },
};

export default async function ClarkeCountyInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Clarke County', 'Clarke County');
  const config = {
    slug: 'sell-inherited-house-clarke-county-va',
    city: null, county: 'Clarke County', type: 'county',
    h1: 'Inherited a Home in Clarke County? <em>Sell It As-Is, No Cleanout Needed.</em>',
    heroSub: 'Inherited farmhouses and rural properties around Berryville and the rest of Clarke County often come with decades of belongings, outbuildings, and acreage that make a traditional listing feel overwhelming. Dan White buys and sells these properties exactly as they sit, and connects the estate with the smaller but genuinely interested pool of buyers who specifically want rural Clarke County land and older homes.',
    trustItems: ['20+ years of estate sales throughout Clarke County', 'Licensed VA agent · Pearson Smith Realty', 'As-is, no cleanout — take what you want, leave the rest', 'Probate-friendly · Free consultation'],
    bodyContent: `
      <h2>What Selling an Inherited House in Virginia Actually Involves</h2>
      <p>Before a Clarke County property from an estate can be sold, someone typically needs to be legally recognized as the person with authority to sell it. If the deceased left a will, that's the executor named in it; if there was no will, the court appoints an administrator. Either way, that person has to formally qualify with the Circuit Court in the county where the deceased lived before they can act on the estate's behalf. Virginia doesn't set a hard deadline for this step, but the courts' own guidance points to starting within roughly 30 days of the death, and it's usually the first practical task standing between an heir and a listing.</p>
      <p>Not every estate needs a full, formal administration. If the deceased's personal property — not counting real estate — was worth $50,000 or less, Virginia's small-estate procedure applies: the will is simply recorded with the court and no formal administration is required, which can meaningfully shorten the path to selling the house.</p>
      <p>The detail most heirs are never told, and it's arguably the single most valuable fact in this entire situation, is what happens to the tax basis. Inherited property receives a step-up in basis: for capital gains purposes, the home's cost basis resets to its fair market value as of the date of death, not whatever the original owner paid for it years or decades earlier. Sell the house reasonably soon after inheriting it, and the sale price and that stepped-up basis are usually close to identical — which means the taxable capital gain is close to $0. The only gain that gets taxed is appreciation that happens after the date of death; whatever the property gained in value during the original owner's lifetime is not taxed at all when the heir sells.</p>
      <h2>Where the Estate Is Handled in Clarke County</h2>
      <p>For Clarke County estates, probate qualification and any related filings go through the <strong>Clarke County Circuit Court</strong> at 102 N. Church St., Berryville, VA &middot; (540) 955-5188. This is the office of record to confirm whether an executor or administrator has qualified, verify a recorded will, or check the status of an estate filing — not a substitute for legal advice, but a real place to check facts yourself.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia probate and inherited-property taxes typically work, not legal or tax advice for your specific estate — every will, family situation, and IRS filing is different. Confirm executor authority with a Virginia probate attorney and confirm your specific basis and capital gains numbers with a CPA before you sell.</p>
    `,
    faqs: [
      { q: 'Do I need to clean out a Clarke County farmhouse before selling it?', a: 'No. Cash buyers take inherited Clarke County properties as they are, including furniture, outbuildings, and everything left inside. Keep what matters to you and leave the rest for closing.' },
      { q: 'Is there a buyer for a rural inherited property in Clarke County?', a: 'Yes, and often a strong one. Buyers specifically seeking acreage and older farmhouses in the Shenandoah Valley are drawn to Clarke County, and I already have relationships with several of them.' },
      { q: 'Can I sell an inherited Clarke County home before probate closes?', a: 'Often yes. Virginia allows an executor with proper authority to list and sell during probate, with closing contingent on court confirmation. Tell me where the estate stands and I will tell you what is realistic.' },
      { q: 'What if the inherited Clarke County property includes significant acreage?', a: 'Acreage adds both complexity and value, and land in Clarke County draws its own dedicated buyer pool separate from residential buyers. I evaluate the full property and give you the complete picture before you decide anything.' },
      { q: 'What if multiple heirs inherited the property together?', a: 'All heirs generally need to agree before a sale can proceed. I present the same numbers and options to every heir, which usually helps the family reach agreement faster than negotiating without clear facts.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
