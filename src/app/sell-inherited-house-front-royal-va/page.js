import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Front Royal VA | Your Options',
  description: 'Inherited a Front Royal home? Licensed agent Dan White explains every option — cash sale, as-is listing, wholetail. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-inherited-house-front-royal-va' },
  openGraph: {
    title: 'Sell an Inherited House in Front Royal VA',
    description: 'Inherited a home in Front Royal? Dan White walks you through every option — and which one gets you the most money. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-inherited-house-front-royal-va',
  },
};

export default async function FrontRoyalInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');

  const config = {
    slug: 'sell-inherited-house-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'Inherited a Home in Front Royal? <em>Here\'s What to Do Next.</em>',
    heroSub: 'Warren County inherited properties — farmhouses, older homes, estates with acreage — come with their own set of complexities. Dan White has worked through probate sales, multi-heir situations, and distressed inherited properties across Front Royal and the surrounding area for 20+ years.',
    trustItems: [
      '20+ years in Warren County and Shenandoah Valley estate sales',
      'Licensed VA agent · Pearson Smith Realty',
      'Buy as-is — farmhouses, full estates, any condition',
      'Probate-friendly · No pressure · Free consultation',
    ],
    bodyContent: `
      <h2>What Selling an Inherited House in Virginia Actually Involves</h2>
      <p>Before a Front Royal property from an estate can be sold, someone typically needs to be legally recognized as the person with authority to sell it. If the deceased left a will, that's the executor named in it; if there was no will, the court appoints an administrator. Either way, that person has to formally qualify with the Circuit Court in the county where the deceased lived before they can act on the estate's behalf. Virginia doesn't set a hard deadline for this step, but the courts' own guidance points to starting within roughly 30 days of the death, and it's usually the first practical task standing between an heir and a listing.</p>
      <p>Not every estate needs a full, formal administration. If the deceased's personal property — not counting real estate — was worth $50,000 or less, Virginia's small-estate procedure applies: the will is simply recorded with the court and no formal administration is required, which can meaningfully shorten the path to selling the house.</p>
      <p>The detail most heirs are never told, and it's arguably the single most valuable fact in this entire situation, is what happens to the tax basis. Inherited property receives a step-up in basis: for capital gains purposes, the home's cost basis resets to its fair market value as of the date of death, not whatever the original owner paid for it years or decades earlier. Sell the house reasonably soon after inheriting it, and the sale price and that stepped-up basis are usually close to identical — which means the taxable capital gain is close to $0. The only gain that gets taxed is appreciation that happens after the date of death; whatever the property gained in value during the original owner's lifetime is not taxed at all when the heir sells.</p>
      <h2>Where the Estate Is Handled in Warren County</h2>
      <p>For Front Royal and Warren County estates, probate qualification and any related filings go through the <strong>Warren County Circuit Court</strong> at 1 East Main Street, Front Royal, VA 22630-3313 &middot; (540) 635-2435. This is the office of record to confirm whether an executor or administrator has qualified, verify a recorded will, or check the status of an estate filing — not a substitute for legal advice, but a real place to check facts yourself.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia probate and inherited-property taxes typically work, not legal or tax advice for your specific estate — every will, family situation, and IRS filing is different. Confirm executor authority with a Virginia probate attorney and confirm your specific basis and capital gains numbers with a CPA before you sell.</p>
    `,
    faqs: [
      {
        q: 'Can I sell an inherited Front Royal property before probate closes?',
        a: 'Possibly. If the property was in a trust or held with a survivorship deed, you may be able to sell immediately. If probate is required, listing during probate and closing after is often an option. Call me and we\'ll figure out your specific situation.',
      },
      {
        q: 'The inherited Front Royal home is a farmhouse in rough shape — what are my options?',
        a: 'Warren County has strong investor interest in farmhouses and rural properties regardless of condition. I can put it in front of buyers who specifically want that — no repairs, no cleanup, purchased as-is.',
      },
      {
        q: 'What if I live out of state and inherited a Front Royal property?',
        a: 'Very common. Remote signing is available, and I can handle coordination locally on your behalf. You don\'t need to be here for most of the process.',
      },
      {
        q: 'How do inherited home sales work when there\'s acreage involved in Warren County?',
        a: 'Acreage adds complexity but also often adds value. Rural and agricultural land in Warren County has a separate buyer pool from residential. I assess the whole property — house and land — and give you the full picture of what you\'re working with.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
