import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Winchester, VA',
  description: 'Inherited a Winchester home? Licensed agent Dan White explains every option — cash sale, as-is listing, wholetail. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-inherited-house-winchester-va' },
  openGraph: {
    title: 'Sell an Inherited House in Winchester VA | Every Option Explained',
    description: 'Inherited a home in Winchester? Don\'t make a rushed decision. Dan White walks you through every option — and which one gets you the most money. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-inherited-house-winchester-va',
  },
};

export default async function WinchesterInheritedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-inherited-house-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Inherited a Home in Winchester? <em>Here\'s What to Do Next.</em>',
    heroSub: 'Inheriting a property in Winchester or Frederick County comes with questions most people aren\'t prepared for — probate, condition, family dynamics, taxes. Dan White has helped dozens of heirs navigate every version of this situation. No rush. No pressure. Just honest answers.',
    trustItems: [
      '20+ years handling inherited and estate properties in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Buy as-is — full of belongings, no cleanout required',
      'Works with probate attorneys · Family situations handled with care',
    ],
    bodyContent: `
      <h2>What Selling an Inherited House in Virginia Actually Involves</h2>
      <p>Before a Winchester property from an estate can be sold, someone typically needs to be legally recognized as the person with authority to sell it. If the deceased left a will, that's the executor named in it; if there was no will, the court appoints an administrator. Either way, that person has to formally qualify with the Circuit Court in the county where the deceased lived before they can act on the estate's behalf. Virginia doesn't set a hard deadline for this step, but the courts' own guidance points to starting within roughly 30 days of the death, and it's usually the first practical task standing between an heir and a listing.</p>
      <p>Not every estate needs a full, formal administration. If the deceased's personal property — not counting real estate — was worth $50,000 or less, Virginia's small-estate procedure applies: the will is simply recorded with the court and no formal administration is required, which can meaningfully shorten the path to selling the house.</p>
      <p>The detail most heirs are never told, and it's arguably the single most valuable fact in this entire situation, is what happens to the tax basis. Inherited property receives a step-up in basis: for capital gains purposes, the home's cost basis resets to its fair market value as of the date of death, not whatever the original owner paid for it years or decades earlier. Sell the house reasonably soon after inheriting it, and the sale price and that stepped-up basis are usually close to identical — which means the taxable capital gain is close to $0. The only gain that gets taxed is appreciation that happens after the date of death; whatever the property gained in value during the original owner's lifetime is not taxed at all when the heir sells.</p>
      <h2>Where the Estate Is Handled in Frederick County</h2>
      <p>For Winchester and Frederick County estates, probate qualification and any related filings go through the <strong>Frederick County Circuit Court</strong> — the Winchester/Frederick County Joint Judicial Center — at 5 North Kent Street, Winchester, VA 22601-5037 &middot; (540) 667-5770. Winchester is an independent city, but it shares this courthouse with Frederick County, so estates from both are qualified and administered at the same address. This is the office of record to confirm whether an executor or administrator has qualified, verify a recorded will, or check the status of an estate filing — not a substitute for legal advice, but a real place to check facts yourself.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia probate and inherited-property taxes typically work, not legal or tax advice for your specific estate — every will, family situation, and IRS filing is different. Confirm executor authority with a Virginia probate attorney and confirm your specific basis and capital gains numbers with a CPA before you sell.</p>
    `,
    faqs: [
      {
        q: 'Do I have to wait for probate to finish before selling an inherited Winchester home?',
        a: 'Not always. If the property was held in a trust or passed through a transfer-on-death deed, you may be able to sell immediately. If probate is required, you can often list the home and accept offers during the process — closing happens once probate clears. Every situation is different; I\'ll help you figure out where you stand.',
      },
      {
        q: 'What if the inherited home is full of the deceased\'s belongings?',
        a: 'Cash buyers routinely purchase homes full of contents — furniture, personal items, everything. You take what you want and leave the rest. No estate sale required, no dumpster, no cleanout crews. This is one of the most common inherited property scenarios I see.',
      },
      {
        q: 'What if the inherited home needs major repairs?',
        a: 'You have options that don\'t require spending money on repairs. Cash buyers price in the work. An as-is MLS listing attracts investors who want a project. A wholetail approach does light cleanup but no renovation. I show you the net number on each path.',
      },
      {
        q: 'Are there tax implications to selling an inherited Winchester home?',
        a: 'Inherited properties typically receive a stepped-up basis — meaning you\'re taxed on appreciation from the date of death, not the original purchase price. This often dramatically reduces capital gains taxes. I\'m not a tax advisor, but I can point you to the right questions to ask your accountant.',
      },
      {
        q: 'What if multiple heirs are involved and we disagree?',
        a: 'Family disagreements over inherited property are common. I\'ve worked through them before. I can present options to all parties clearly so decisions are based on facts — not emotion. Sometimes that helps break the deadlock.',
      },
      {
        q: 'How do I know what the inherited Winchester home is worth?',
        a: 'I can give you a free, honest assessment based on current Frederick County market data and the condition of the property. No obligation, no sales pitch — just a clear picture of what you\'re working with.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
