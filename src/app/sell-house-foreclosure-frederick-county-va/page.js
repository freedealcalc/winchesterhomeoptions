import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Before Foreclosure in Frederick County VA',
  description: 'Facing foreclosure in Frederick County? Dan White explains every option to sell fast, protect your credit and equity. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-frederick-county-va' },
  openGraph: { title: 'Sell Your House Before Foreclosure in Frederick County VA', description: 'Facing foreclosure in Frederick County? You have more time and options than you think. Dan White goes over every path. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-frederick-county-va' },
};

export default async function FrederickCountyForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Frederick County', 'Frederick County');
  const config = {
    slug: 'sell-house-foreclosure-frederick-county-va',
    city: null, county: 'Frederick County', type: 'county',
    h1: 'Facing Foreclosure in Frederick County? <em>You Still Have Options.</em>',
    heroSub: 'Every day you wait narrows your options, but in Virginia you can still sell right up to the foreclosure sale date. Frederick County is Dan White\'s home market — Winchester, Stephens City, Clearbrook, and Middletown — and he moves fast when a sale date is on the calendar, lining up a cash close that stops the process and protects your credit before it takes a hit.',
    trustItems: ['20+ years in Frederick County, his home market', 'Licensed VA agent · Pearson Smith Realty', 'Close in as few as 7 days — fast enough to stop most foreclosures', 'Confidential · No judgment · Free consultation'],
    faqs: [
      { q: 'How much time do I have before a Frederick County foreclosure sale?', a: 'Under Virginia law you can sell all the way up to the trustee sale date. Call me with your sale date and I will tell you within minutes whether we have enough runway for a cash close.' },
      { q: 'Will selling before foreclosure protect my credit?', a: 'Yes. A completed foreclosure is one of the most damaging marks on a credit report and can affect your ability to buy or rent for years. A pre-foreclosure sale, even a short sale, is a materially better outcome.' },
      { q: 'How fast can you close on a home in Winchester or Stephens City facing foreclosure?', a: 'Cash buyers close in 7 to 21 days throughout Winchester, Stephens City, Clearbrook, and Middletown. Because Frederick County is my primary market, I already have buyers who move quickly here.' },
      { q: 'What if I owe more on my Frederick County home than it is worth?', a: 'That calls for a short sale, where the lender agrees to accept less than the full payoff to avoid foreclosure. It takes more paperwork than a standard sale but is far better for your credit and finances. I can walk you through exactly how it works.' },
      { q: 'Do I have to make repairs before selling to stop foreclosure?', a: 'No. Cash buyers purchase Frederick County homes as-is, in any condition. Repairs and cleanup are never a requirement on the foreclosure-avoidance path.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
