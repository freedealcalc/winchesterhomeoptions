import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Frederick County, VA',
  description: 'Inherited a Frederick County home? Dan White covers every option — any condition, no cleanout required. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-inherited-house-frederick-county-va' },
  openGraph: { title: 'Sell an Inherited House in Frederick County, VA', description: 'Inherited a home in Frederick County? Dan White walks you through every option, including as-is sales with no cleanout. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-inherited-house-frederick-county-va' },
};

export default async function FrederickCountyInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Frederick County', 'Frederick County');
  const config = {
    slug: 'sell-inherited-house-frederick-county-va',
    city: null, county: 'Frederick County', type: 'county',
    h1: 'Inherited a Home in Frederick County? <em>Sell It As-Is, No Cleanout Needed.</em>',
    heroSub: 'Sorting through a lifetime of belongings in Winchester, Stephens City, Clearbrook, or Middletown is hard enough without also worrying about repairs before a sale. Dan White buys and sells inherited Frederick County homes exactly as they sit — furniture, attics, and all — and coordinates the sale around wherever the estate is in the probate timeline.',
    trustItems: ['20+ years of estate sales in Frederick County, his home market', 'Licensed VA agent · Pearson Smith Realty', 'As-is, no cleanout — take what you want, leave the rest', 'Probate-friendly · Free consultation'],
    bodyContent: `
      <h2>What Selling an Inherited House in Virginia Actually Involves</h2>
      <p>Before a Frederick County property from an estate can be sold, someone typically needs to be legally recognized as the person with authority to sell it. If the deceased left a will, that's the executor named in it; if there was no will, the court appoints an administrator. Either way, that person has to formally qualify with the Circuit Court in the county where the deceased lived before they can act on the estate's behalf. Virginia doesn't set a hard deadline for this step, but the courts' own guidance points to starting within roughly 30 days of the death, and it's usually the first practical task standing between an heir and a listing.</p>
      <p>Not every estate needs a full, formal administration. If the deceased's personal property — not counting real estate — was worth $50,000 or less, Virginia's small-estate procedure applies: the will is simply recorded with the court and no formal administration is required, which can meaningfully shorten the path to selling the house.</p>
      <p>The detail most heirs are never told, and it's arguably the single most valuable fact in this entire situation, is what happens to the tax basis. Inherited property receives a step-up in basis: for capital gains purposes, the home's cost basis resets to its fair market value as of the date of death, not whatever the original owner paid for it years or decades earlier. Sell the house reasonably soon after inheriting it, and the sale price and that stepped-up basis are usually close to identical — which means the taxable capital gain is close to $0. The only gain that gets taxed is appreciation that happens after the date of death; whatever the property gained in value during the original owner's lifetime is not taxed at all when the heir sells.</p>
      <h2>Where the Estate Is Handled in Frederick County</h2>
      <p>For Frederick County estates, probate qualification and any related filings go through the <strong>Frederick County Circuit Court</strong> — the Winchester/Frederick County Joint Judicial Center — at 5 North Kent Street, Winchester, VA 22601-5037 &middot; (540) 667-5770. This is the office of record to confirm whether an executor or administrator has qualified, verify a recorded will, or check the status of an estate filing — not a substitute for legal advice, but a real place to check facts yourself.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia probate and inherited-property taxes typically work, not legal or tax advice for your specific estate — every will, family situation, and IRS filing is different. Confirm executor authority with a Virginia probate attorney and confirm your specific basis and capital gains numbers with a CPA before you sell.</p>
    `,
    faqs: [
      { q: 'Do I need to clean out the Frederick County house before selling it?', a: 'No. Cash buyers purchase inherited Frederick County homes exactly as they are, contents included. Take anything with sentimental value and leave the rest to be handled at closing.' },
      { q: 'Can I sell an inherited Frederick County home before probate is finished?', a: 'Often yes. Virginia allows an executor with proper authority to list and sell during probate, with closing contingent on court confirmation. Call me with where the estate stands and I will tell you what is realistic.' },
      { q: 'The inherited Frederick County property needs major repairs — does that matter?', a: 'Not to a cash buyer. Older farmhouses, homes needing a full renovation, and properties that have sat vacant all sell as-is in this market. No repairs, no showings, no staging.' },
      { q: 'What if multiple siblings or heirs inherited the Frederick County property together?', a: 'All heirs typically need to agree to sell. I present the same numbers and options to everyone involved, which tends to speed up agreement compared to negotiating without a clear picture.' },
      { q: 'How does the timeline work for an inherited home sale?', a: 'As fast or as slow as the estate needs. Some heirs want to close within weeks; others are waiting on probate steps that take months. I build the sale around your timeline, not the other way around.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
