import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Your House Before Foreclosure in Berryville VA',
  description: 'Facing foreclosure in Berryville? Dan White, licensed VA agent, reviews every option to protect your credit and sell fast. Free, no-pressure consult.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-berryville-va' },
  openGraph: {
    title: 'Sell Your House Before Foreclosure in Berryville VA',
    description: 'Facing foreclosure in Berryville? You may have more time and options than you think. Dan White goes over every path. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-berryville-va',
  },
};

export default async function BerryvilleForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');

  const config = {
    slug: 'sell-house-foreclosure-berryville-va',
    city: 'Berryville',
    county: 'Clarke County',
    type: 'city',
    h1: 'Facing Foreclosure in Berryville? <em>You Still Have Options.</em>',
    heroSub: 'Clarke County homeowners facing foreclosure have more runway than they often realize. Virginia law gives you the right to sell right up to the foreclosure sale date. Dan White has closed deals fast enough to stop foreclosure — protecting credit and putting money back in sellers\' pockets.',
    trustItems: [
      '20+ years in Clarke County distressed sales',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in as few as 7 days',
      'Confidential · No judgment · Free consultation',
    ],
    bodyContent: `
      <h2>How Foreclosure Actually Works in Virginia</h2>
      <p>Virginia is a non-judicial foreclosure state, meaning your lender does not have to go through court to foreclose — the deed of trust you signed at closing already gives the trustee the power to sell if you default. That makes the process faster than in states that require a judge, but it also means there's a real, calendar-driven deadline once it starts.</p>
      <p>For an owner-occupied home, Virginia law (<a href="https://law.lis.virginia.gov/vacode/55.1-321/" target="_blank" rel="noopener noreferrer">Va. Code &sect;&nbsp;55.1-321</a> and <a href="https://law.lis.virginia.gov/vacode/55.1-322/" target="_blank" rel="noopener noreferrer">&sect;&nbsp;55.1-322</a>) requires the trustee to give you at least 60 days' written notice before the sale. The sale itself must then be advertised — published in a local newspaper once a week for two weeks, or on three consecutive days — and the auction can happen as early as 8 days after that first publication, but no later than 30 days after the last one. Add it up and most Berryville and Clarke County homeowners have somewhere in the range of 60&ndash;90 days from that first notice to the actual sale date.</p>
      <p>One thing Virginia does <em>not</em> offer: a post-sale right of redemption. Once the trustee's sale happens, there's no window afterward to reclaim the home by paying off the debt — which is exactly why the window <em>before</em> the sale date is the part that matters, and why acting early changes your options.</p>
      <h2>Where a Clarke County Foreclosure Gets Filed</h2>
      <p>Foreclosure trustee's sales and any related court filings for Berryville and Clarke County properties run through the <strong>Clarke County Circuit Court</strong>, 102 N. Church St., Berryville, VA &middot; (540) 955-5188. If you want to independently verify a notice, a filed deed of trust, or check whether a sale has already been advertised, the clerk's office there is the source of record — not a substitute for legal advice, but a real place to check facts for yourself.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia foreclosure works, not legal advice for your specific situation — foreclosure timelines can shift based on your specific deed of trust, servicer, and whether a loss mitigation review is pending. If you're already in the process, confirm your exact dates with your servicer or a Virginia foreclosure attorney alongside anything discussed here.</p>
    `,
    faqs: [
      { q: 'Can I sell my Berryville home to stop foreclosure?', a: 'Yes — in Virginia you can sell right up to the foreclosure sale date. A fast cash closing stops the process. Call me with your sale date and I will tell you immediately if we have enough time.' },
      { q: 'What happens to my equity if foreclosure proceeds in Clarke County?', a: 'Most of it disappears. Foreclosure auctions recover the lender balance — your equity above that is consumed by fees and penalties. Selling pre-foreclosure captures whatever equity remains.' },
      { q: 'How fast can I close on a Berryville home in this situation?', a: 'Cash buyers close in 7–21 days in Clarke County. Berryville is a thinner market than Winchester but investor buyers are active here. Time is the critical factor — the earlier you call, the more options we have.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
