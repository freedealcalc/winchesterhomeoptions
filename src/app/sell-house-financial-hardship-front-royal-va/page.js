import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Financial Hardship in Front Royal VA | Every Option',
  description: 'Sell your Front Royal home fast during financial hardship and walk away with the most money your situation allows. Dan White goes over every option with no judgment. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-financial-hardship-front-royal-va' },
  openGraph: { title: 'Sell My House in Financial Hardship in Front Royal VA', description: 'Financial hardship in Front Royal? Dan White goes over every option honestly, without judgment. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-financial-hardship-front-royal-va' },
};

export default async function FrontRoyalFinancialHardshipPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');
  const config = {
    slug: 'sell-house-financial-hardship-front-royal-va',
    city: 'Front Royal', county: 'Warren County', type: 'city',
    h1: 'Selling Your Front Royal Home Through Financial Hardship — <em>No Judgment.</em>',
    heroSub: 'Financial hardship comes in many forms — job loss, medical bills, divorce, a business that did not work out. Dan White has helped Warren County homeowners in every version of this situation sell their home, protect their equity, and move forward without judgment.',
    trustItems: ['20+ years helping distressed sellers in Warren County', 'Licensed VA agent · Pearson Smith Realty', 'Confidential · No judgment · Every option explained', 'Free consultation · Close on your timeline'],
    faqs: [
      { q: 'What are my options if I need to sell quickly due to financial hardship in Front Royal?', a: 'Cash sale closes in 7 to 21 days — fastest path. As-is MLS listing can also move quickly in Warren County and often produces more. I show you both with real numbers.' },
      { q: 'Can I sell my Front Royal home if I am behind on taxes or have liens?', a: 'Yes. Back taxes and liens are paid from closing proceeds. As long as there is enough equity, the transaction works.' },
      { q: 'Is my situation confidential if I reach out?', a: 'Completely. The conversation is between you and me until you decide what you want to do.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
