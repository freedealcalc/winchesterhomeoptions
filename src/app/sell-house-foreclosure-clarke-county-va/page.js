import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Before Foreclosure in Clarke County VA',
  description: 'Facing foreclosure in Clarke County? Dan White explains every option to sell fast, protect your credit and equity. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-clarke-county-va' },
  openGraph: { title: 'Sell Your House Before Foreclosure in Clarke County VA', description: 'Facing foreclosure in Clarke County? You have more time and options than you think. Dan White goes over every path. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-clarke-county-va' },
};

export default async function ClarkeCountyForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Clarke County', 'Clarke County');
  const config = {
    slug: 'sell-house-foreclosure-clarke-county-va',
    city: null, county: 'Clarke County', type: 'county',
    h1: 'Facing Foreclosure in Clarke County? <em>You Still Have Options.</em>',
    heroSub: 'Foreclosure timelines do not slow down because a property sits on acreage outside Berryville, but Virginia law still gives you the right to sell right up to the sale date. The rural nature of Clarke County means fewer buyers know the area well, which is exactly why having someone who already has investor relationships here matters when the clock is running.',
    trustItems: ['20+ years covering Clarke County distressed sales', 'Licensed VA agent · Pearson Smith Realty', 'Close in as few as 7 days — fast enough to stop most foreclosures', 'Confidential · No judgment · Free consultation'],
    faqs: [
      { q: 'How much time do I have before a Clarke County foreclosure sale?', a: 'You can sell up to the trustee sale date under Virginia law. Call with your sale date and I will tell you right away whether a fast cash close can beat the clock.' },
      { q: 'Is it harder to sell quickly in a rural county like Clarke before foreclosure?', a: 'It can be if you rely on the general market alone, since Clarke County has fewer active buyers than Frederick or Warren County. I already work with investors specifically interested in rural Clarke County properties, which shortens the search.' },
      { q: 'What happens to my equity if the Clarke County foreclosure proceeds?', a: 'Most of it is lost. A foreclosure auction is structured to recover what the lender is owed, and any equity above that gets consumed by fees and costs. Selling before the sale date is the only way to capture what is left.' },
      { q: 'What if I owe more than my Clarke County home is worth?', a: 'That is a short sale situation, where the lender agrees to accept less than the full payoff. It takes coordination but is far better for your credit than letting the foreclosure complete.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
