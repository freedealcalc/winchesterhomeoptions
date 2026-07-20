import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Inherited a House in Stephens City VA? Every Option',
  description: 'Inherited a house in Stephens City VA? Dan White, licensed agent, covers every option — cash, as-is, wholetail — for the most money. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-inherited-house-stephens-city-va' },
  openGraph: {
    title: 'Sell an Inherited House in Stephens City VA',
    description: 'Inherited a home in Stephens City? Dan White walks you through every option — and which one gets you the most money. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-inherited-house-stephens-city-va',
  },
};

export default async function StephensCityInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');

  const config = {
    slug: 'sell-inherited-house-stephens-city-va',
    city: 'Stephens City',
    county: 'Frederick County',
    type: 'city',
    h1: 'Inherited a Home in Stephens City? <em>Here\'s What to Do Next.</em>',
    heroSub: 'Inherited properties in Frederick County come with real complexity — probate timelines, condition questions, family dynamics. Dan White has worked through every version of this in Stephens City and the surrounding area. No pressure, no rush. Just a clear picture of every option available to you.',
    trustItems: [
      '20+ years handling inherited and estate sales in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Buy as-is — full of belongings, no cleanout required',
      'Works with probate timelines · Family situations handled with care',
    ],
    bodyContent: `
      <h2>What Selling an Inherited House in Virginia Actually Involves</h2>
      <p>Before a Stephens City property from an estate can be sold, someone typically needs to be legally recognized as the person with authority to sell it. If the deceased left a will, that's the executor named in it; if there was no will, the court appoints an administrator. Either way, that person has to formally qualify with the Circuit Court in the county where the deceased lived before they can act on the estate's behalf. Virginia doesn't set a hard deadline for this step, but the courts' own guidance points to starting within roughly 30 days of the death, and it's usually the first practical task standing between an heir and a listing.</p>
      <p>Not every estate needs a full, formal administration. If the deceased's personal property — not counting real estate — was worth $50,000 or less, Virginia's small-estate procedure applies: the will is simply recorded with the court and no formal administration is required, which can meaningfully shorten the path to selling the house.</p>
      <p>The detail most heirs are never told, and it's arguably the single most valuable fact in this entire situation, is what happens to the tax basis. Inherited property receives a step-up in basis: for capital gains purposes, the home's cost basis resets to its fair market value as of the date of death, not whatever the original owner paid for it years or decades earlier. Sell the house reasonably soon after inheriting it, and the sale price and that stepped-up basis are usually close to identical — which means the taxable capital gain is close to $0. The only gain that gets taxed is appreciation that happens after the date of death; whatever the property gained in value during the original owner's lifetime is not taxed at all when the heir sells.</p>
      <h2>Where the Estate Is Handled in Frederick County</h2>
      <p>For Stephens City and Frederick County estates, probate qualification and any related filings go through the <strong>Frederick County Circuit Court</strong> — the Winchester/Frederick County Joint Judicial Center — at 5 North Kent Street, Winchester, VA 22601-5037 &middot; (540) 667-5770. This is the office of record to confirm whether an executor or administrator has qualified, verify a recorded will, or check the status of an estate filing — not a substitute for legal advice, but a real place to check facts yourself.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia probate and inherited-property taxes typically work, not legal or tax advice for your specific estate — every will, family situation, and IRS filing is different. Confirm executor authority with a Virginia probate attorney and confirm your specific basis and capital gains numbers with a CPA before you sell.</p>
    `,
    faqs: [
      {
        q: 'Can I sell an inherited Stephens City home before probate is complete?',
        a: 'In some cases yes — trusts and transfer-on-death deeds can allow immediate sale. If probate is required, you can often accept offers during the process and close once it clears. I\'ll help you figure out exactly where you stand.',
      },
      {
        q: 'The inherited home in Stephens City is full of stuff — what do I do?',
        a: 'Nothing, if you don\'t want to. Cash buyers purchase homes with all contents included. You take what matters to you and leave the rest. This is one of the most common scenarios I work through.',
      },
      {
        q: 'What if multiple family members inherited the Stephens City property?',
        a: 'All heirs need to agree to sell, but I can help present the options clearly to everyone involved. When decisions are grounded in real numbers rather than assumptions, it\'s easier to reach agreement.',
      },
      {
        q: 'How do I find out what the inherited Stephens City home is worth?',
        a: 'Call me for a free assessment. I look at current Frederick County market data and the actual condition of the property and give you an honest range — not an inflated number designed to get a listing.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
