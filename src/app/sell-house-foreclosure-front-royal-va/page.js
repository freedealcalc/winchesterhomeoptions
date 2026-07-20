import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell Before Foreclosure in Front Royal, VA | Options',
  description: 'Facing foreclosure in Front Royal? Licensed agent Dan White covers every option to protect your credit and equity. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-front-royal-va' },
  openGraph: {
    title: 'Sell Your House Before Foreclosure in Front Royal VA',
    description: 'Facing foreclosure in Front Royal? You may have more time and more options than you think. Dan White goes over every path — fast enough to stop the clock. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-foreclosure-front-royal-va',
  },
};

export default async function FrontRoyalForeclosurePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');

  const config = {
    slug: 'sell-house-foreclosure-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'Facing Foreclosure in Front Royal? <em>You Still Have Options.</em>',
    heroSub: 'Front Royal and Warren County homeowners facing foreclosure often have more runway than they think. Virginia law gives you the right to sell right up to the sale date. Dan White has closed deals in days — fast enough to stop foreclosure, protect your credit, and put money back in your pocket.',
    trustItems: [
      '20+ years in Warren County and the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Close in as few as 7 days — fast enough to stop most foreclosures',
      'No judgment · Confidential · Free consultation',
    ],
    bodyContent: `
      <h2>How Foreclosure Actually Works in Virginia</h2>
      <p>Virginia is a non-judicial foreclosure state, meaning your lender does not have to go through court to foreclose — the deed of trust you signed at closing already gives the trustee the power to sell if you default. That makes the process faster than in states that require a judge, but it also means there's a real, calendar-driven deadline once it starts.</p>
      <p>For an owner-occupied home, Virginia law (<a href="https://law.lis.virginia.gov/vacode/55.1-321/" target="_blank" rel="noopener noreferrer">Va. Code &sect;&nbsp;55.1-321</a> and <a href="https://law.lis.virginia.gov/vacode/55.1-322/" target="_blank" rel="noopener noreferrer">&sect;&nbsp;55.1-322</a>) requires the trustee to give you at least 60 days' written notice before the sale. The sale itself must then be advertised — published in a local newspaper once a week for two weeks, or on three consecutive days — and the auction can happen as early as 8 days after that first publication, but no later than 30 days after the last one. Add it up and most Front Royal and Warren County homeowners have somewhere in the range of 60&ndash;90 days from that first notice to the actual sale date.</p>
      <p>One thing Virginia does <em>not</em> offer: a post-sale right of redemption. Once the trustee's sale happens, there's no window afterward to reclaim the home by paying off the debt — which is exactly why the window <em>before</em> the sale date is the part that matters, and why acting early changes your options.</p>
      <h2>Where a Warren County Foreclosure Gets Filed</h2>
      <p>Foreclosure trustee's sales and any related court filings for Front Royal and Warren County properties run through the <strong>Warren County Circuit Court</strong>, 1 East Main Street, Front Royal, VA 22630 &middot; (540) 635-2435. If you want to independently verify a notice, a filed deed of trust, or check whether a sale has already been advertised, the clerk's office there is the source of record — not a substitute for legal advice, but a real place to check facts for yourself.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia foreclosure works, not legal advice for your specific situation — foreclosure timelines can shift based on your specific deed of trust, servicer, and whether a loss mitigation review is pending. If you're already in the process, confirm your exact dates with your servicer or a Virginia foreclosure attorney alongside anything discussed here.</p>
    `,
    faqs: [
      {
        q: 'Can I sell my Front Royal home before the foreclosure sale date?',
        a: 'Yes. Virginia law allows you to sell your property up until the foreclosure sale actually occurs. Once you have a buyer and a closing date that beats your sale date, the foreclosure stops. Time is the critical factor — call as early as possible.',
      },
      {
        q: 'What happens to my equity if I let foreclosure proceed in Warren County?',
        a: 'Most sellers lose it. The foreclosure auction recovers the lender\'s balance — whatever equity you had above that is consumed by penalties, legal fees, and auction processes. Selling pre-foreclosure lets you keep that equity.',
      },
      {
        q: 'I\'m already behind on payments — is it too late?',
        a: 'Probably not. Being behind on payments triggers the foreclosure process but doesn\'t end your options. As long as the actual auction hasn\'t happened, you can sell. Call me with where you are in the process and I\'ll tell you exactly what\'s possible.',
      },
      {
        q: 'Do I need to fix up the home before selling in Front Royal?',
        a: 'No. Every option I work with — cash buyers, as-is listings, wholetail — works without any repairs or cleanup. The home sells exactly as it stands.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
