import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a House with Tax Liens in Winchester VA',
  description: 'Sell your Winchester home fast even with tax liens. Licensed VA agent Dan White explains every option — liens resolve at closing. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-tax-lien-winchester-va' },
  openGraph: {
    title: 'Sell a House with Tax Liens in Winchester VA',
    description: 'Tax liens on your Winchester home don\'t have to block a sale. Dan White walks you through every option — liens resolve at closing. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-tax-lien-winchester-va',
  },
};

export default async function WinchesterTaxLienPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-house-tax-lien-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Tax Liens on Your Winchester Home? <em>You Can Still Sell.</em>',
    heroSub: 'Tax liens feel like a wall — but they are almost never the end of the road. In most Winchester and Frederick County sales, liens are paid off at closing from your proceeds. You don\'t need cash in hand to fix them first. Dan White has navigated lien situations throughout this market for 20+ years.',
    trustItems: [
      '20+ years navigating liens and title issues in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Liens resolved at closing — no out-of-pocket required in most cases',
      'Free consultation · Confidential · No pressure',
    ],
    bodyContent: `
      <h2>The Timeline Behind a Frederick County Tax Sale</h2>
      <p>Most tax liens on a Winchester property are just that — liens, resolved at closing like any other debt on title. But if property taxes go unpaid long enough, Frederick County has the legal authority to force a sale through the courts. <a href="https://law.lis.virginia.gov/vacode/58.1-3965/" target="_blank" rel="noopener noreferrer">Va. Code &sect;&nbsp;58.1-3965</a> allows a judicial tax sale once taxes are unpaid as of December 31 following the second anniversary of their due date — roughly two years or more of delinquency in most cases. That window shrinks considerably for properties flagged as condemned, a nuisance, or blighted, where the county can move in as little as a year, or six months in localities pursuing unpaid abatement costs.</p>
      <p>You're entitled to advance warning either way: at least 30 days' written notice to your last known address, plus 30 days' published notice in a local paper before any proceeding starts, and that notice has to spell out payment plan options that can run as long as 72 months. Redemption stays open the whole time — you can pay off everything owed, including penalties and interest, at any point up until the sale itself. A partial payment on its own won't pause the case, but requesting an installment agreement can.</p>
      <h2>Where Winchester and Frederick County Tax Sale Filings Happen</h2>
      <p>Winchester and Frederick County share a courthouse — the <strong>Frederick County Circuit Court</strong> at the Joint Judicial Center, 5 North Kent Street, Winchester, VA 22601 &middot; (540) 667-5770. If a delinquent tax case has actually been filed against your property, that's the office of record.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about Virginia's delinquent property tax sale process, not legal advice for your specific situation — how much time you actually have depends on your payment history and whether Frederick County has already initiated a case. Confirm your specific situation with the Commissioner of the Revenue or a Virginia attorney before making decisions based on a deadline you haven't verified.</p>
    `,
    faqs: [
      { q: 'Can I sell my Winchester home if it has a tax lien?', a: 'Yes. Tax liens attach to the property title and must be satisfied before or at closing — but they do not prevent a sale. The lien gets paid from your closing proceeds. As long as there is enough equity to cover the lien plus your mortgage, the transaction works.' },
      { q: 'What if the tax lien is larger than my equity in the Winchester home?', a: 'That is a more complex situation — it may require negotiating with the lienholder to accept a reduced payoff, which is called a lien release or settlement. I have worked through these situations before and can connect you with the right resources.' },
      { q: 'Do I need to pay off the tax lien before listing my Winchester home?', a: 'No. The lien payoff happens at closing, not before. You can list the home, accept an offer, and the title company handles the lien payoff as part of the closing settlement.' },
      { q: 'Will a tax lien scare off buyers in Winchester?', a: 'Not cash buyers or experienced investors — they deal with lien situations regularly. On the MLS, title issues are disclosed and handled at closing. It is a routine part of real estate transactions.' },
      { q: 'What other types of liens can I sell through?', a: 'Most liens — IRS federal tax liens, HOA liens, contractor mechanic\'s liens, judgment liens — can be resolved at closing the same way. Each has its own payoff process but none automatically prevents a sale.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
