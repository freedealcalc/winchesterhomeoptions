import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Financial Hardship in Stephens City VA | Every Option',
  description: 'Sell your Stephens City home fast during financial hardship and walk away with the most money your situation allows. Dan White goes over every option with no judgment. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-financial-hardship-stephens-city-va' },
  openGraph: { title: 'Sell My House in Financial Hardship in Stephens City VA', description: 'Financial hardship in Stephens City? Dan White goes over every option honestly, without judgment. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-financial-hardship-stephens-city-va' },
};

export default async function StephensCityFinancialHardshipPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');
  const config = {
    slug: 'sell-house-financial-hardship-stephens-city-va',
    city: 'Stephens City', county: 'Frederick County', type: 'city',
    h1: 'Selling Your Stephens City Home Through Financial Hardship — <em>No Judgment.</em>',
    heroSub: 'Financial hardship is not something to be embarrassed about — it is something to solve. Dan White has helped Stephens City and Frederick County homeowners in every version of this situation sell their home, protect their equity, and move forward.',
    trustItems: ['20+ years helping distressed sellers in Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Confidential · No judgment · Every option explained', 'Free consultation · Close on your timeline'],
    faqs: [
      { q: 'What are my options if I need to sell fast due to financial hardship in Stephens City?', a: 'Cash sale closes in 7 to 21 days — fastest path with certainty. As-is MLS listing in Frederick County can also move quickly and often produces more. I show you real numbers on both.' },
      { q: 'Can I sell my Stephens City home if I have back taxes or liens?', a: 'Yes. Back taxes and liens are paid from closing proceeds. As long as there is enough equity to cover what is owed, the transaction works.' },
      { q: 'Is my situation confidential if I call?', a: 'Completely. The conversation stays between you and me until you decide what you want to do.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
