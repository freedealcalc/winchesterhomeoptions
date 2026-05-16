import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Winchester VA | Every Option Explained',
  description: 'Sell your inherited Winchester home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more — so you make the right call. Free consultation, no pressure.',
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
