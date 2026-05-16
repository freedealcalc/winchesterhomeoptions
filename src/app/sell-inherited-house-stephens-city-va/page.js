import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell an Inherited House in Stephens City VA | Every Option Explained',
  description: 'Sell your inherited Stephens City home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more — so you make the right call. Free consultation, no pressure.',
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
