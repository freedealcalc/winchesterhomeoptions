import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling Your House in Financial Hardship | Winchester VA',
  description: 'Facing financial hardship in Winchester? Dan White, licensed VA agent, reviews every option with no judgment. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-financial-hardship-winchester-va' },
  openGraph: {
    title: 'Selling Your House in Financial Hardship | Winchester VA',
    description: 'Financial hardship in Winchester? Dan White goes over every option — honestly, without judgment. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-financial-hardship-winchester-va',
  },
};

export default async function WinchesterFinancialHardshipPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-house-financial-hardship-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Selling Your Winchester Home Through Financial Hardship — <em>No Judgment.</em>',
    heroSub: 'Job loss, medical bills, divorce, a business that went under — financial hardship comes in many forms and none of them are something to be embarrassed about. Dan White has helped homeowners in every version of this situation sell their Winchester or Frederick County home, protect what equity they have, and move forward.',
    trustItems: [
      '20+ years helping sellers navigate hard situations in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Confidential · No judgment · Every option explained',
      'Free consultation · Close on your timeline',
    ],
    faqs: [
      { q: 'What are my options if I need to sell quickly due to financial hardship in Winchester?', a: 'Cash sale is the fastest path — close in 7–21 days, no repairs, no showings. As-is MLS listing can also move quickly in a strong market and often produces more money. I show you the honest numbers on both and you decide which trade-off makes sense.' },
      { q: 'Can I sell my Winchester home if I am behind on taxes or have liens?', a: 'Yes. Back taxes and liens are paid from closing proceeds — you do not need cash in hand to resolve them first. As long as there is enough equity to cover what is owed, the transaction works.' },
      { q: 'What if I owe more on my Winchester home than it is worth?', a: 'That is an upside-down or underwater situation. The path is a short sale — the lender agrees to accept less than the full balance. It is more complex but far better for your credit than foreclosure, and I can walk you through how it works.' },
      { q: 'Will selling fast in financial hardship mean I leave money on the table?', a: 'Not necessarily. Speed costs something — cash offers are typically below MLS value. But a properly marketed as-is listing can close nearly as fast in a strong market and produce significantly more. I show you both options with real numbers.' },
      { q: 'Is my situation confidential if I reach out?', a: 'Completely. I do not share details of your situation with anyone. The conversation is between you and me until you decide what you want to do.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
