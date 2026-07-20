import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a Probate House in Stephens City VA',
  description: 'Sell a Stephens City probate home for the most money. Licensed VA agent Dan White reviews every option for the estate. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-probate-stephens-city-va' },
  openGraph: {
    title: 'Selling a House in Probate in Stephens City VA',
    description: 'Navigating probate in Stephens City? Dan White walks you through every option for the estate — and which one gets you the most money. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-probate-stephens-city-va',
  },
};

export default async function StephensCityProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');

  const config = {
    slug: 'sell-house-probate-stephens-city-va',
    city: 'Stephens City',
    county: 'Frederick County',
    type: 'city',
    h1: 'Selling a Stephens City Home Through Probate — <em>Every Option Explained.</em>',
    heroSub: 'Probate sales in Frederick County have specific legal requirements — but they don\'t have to be slow or complicated. Dan White works with executors, estate attorneys, and heirs throughout Stephens City and the surrounding area to get the estate property sold for the most money with the least friction.',
    trustItems: [
      '20+ years of estate and probate sales in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Works with executors and estate attorneys',
      'As-is purchase — no cleanout, no repairs required',
    ],
    faqs: [
      {
        q: 'Can the executor sell a Stephens City probate property before probate is complete?',
        a: 'Often yes. Virginia allows executors to list and market property during probate, with closing contingent on court approval. This lets you get the home under contract and move the transaction forward while the legal process runs in parallel.',
      },
      {
        q: 'Does the Frederick County probate court need to approve the sale?',
        a: 'Depends on the will and the estate\'s circumstances. When court approval is required, I can provide the market analysis the court needs to confirm the price is fair. This is standard in probate transactions.',
      },
      {
        q: 'What if heirs disagree about selling the Stephens City probate property?',
        a: 'All heirs typically need to agree, or the executor (if granted authority by the will or court) can act on behalf of the estate. I present the financials clearly so decisions are based on real numbers.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
