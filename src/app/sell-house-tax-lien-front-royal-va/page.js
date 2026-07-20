import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a House with Tax Liens in Front Royal VA',
  description: 'Have tax liens on your Front Royal home? You can still sell — liens resolve at closing. Dan White covers every option. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-tax-lien-front-royal-va' },
  openGraph: { title: 'Sell a House with Tax Liens in Front Royal VA', description: 'Tax liens on your Front Royal home do not block a sale. Dan White walks you through every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-tax-lien-front-royal-va' },
};

export default async function FrontRoyalTaxLienPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');
  const config = {
    slug: 'sell-house-tax-lien-front-royal-va',
    city: 'Front Royal', county: 'Warren County', type: 'city',
    h1: 'Tax Liens on Your Front Royal Home? <em>You Can Still Sell.</em>',
    heroSub: 'Tax liens in Front Royal and Warren County do not prevent a sale — they are resolved at closing from your proceeds. Dan White has navigated lien situations throughout this market for 20+ years. No cash needed upfront to clear them.',
    trustItems: ['20+ years navigating liens in Warren County', 'Licensed VA agent · Pearson Smith Realty', 'Liens paid at closing from proceeds — no cash required upfront', 'Free consultation · No pressure'],
    bodyContent: `
      <h2>How a Delinquent Property Tax Sale Works in Warren County</h2>
      <p>A private lien is one thing — an unpaid property tax bill is another, because in Virginia the county itself can eventually force a sale. Under <a href="https://law.lis.virginia.gov/vacode/58.1-3965/" target="_blank" rel="noopener noreferrer">Va. Code &sect;&nbsp;58.1-3965</a>, land becomes eligible for a judicial tax sale once taxes have gone unpaid as of December 31 following the second anniversary of the original due date — in practice, a property usually needs to be roughly two or more years behind before Warren County can move toward a sale. Properties with condemned structures, nuisance conditions, or a blighted/derelict designation can move on a much faster track, sometimes in as little as a year, or even six months where unpaid abatement costs are involved.</p>
      <p>Before any court filing happens, the county's tax collector has to send written notice to your last known address at least 30 days ahead of time and publish a notice in a local newspaper at least 30 days before proceedings begin — so a tax sale should never come as a surprise. You can redeem the property at any point before the actual sale date by paying the accumulated taxes, penalties, interest, attorney fees, and costs; a partial payment alone won't stop the process, though the county can offer a payment agreement (potentially spread across as long as 72 months) that pauses things while you catch up. For smaller, lower-value parcels, Virginia also allows a simplified non-judicial sale track under &sect;&nbsp;58.1-3975.</p>
      <h2>Where a Warren County Tax Sale Case Is Filed</h2>
      <p>Judicial tax sale proceedings for Front Royal and the rest of Warren County are filed in the <strong>Warren County Circuit Court</strong>, 1 East Main Street, Front Royal, VA 22630 &middot; (540) 635-2435. That's the clerk's office where you or your attorney can confirm whether a case has actually been filed against your property and review the specific notice you received.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia's delinquent tax sale process works, not legal advice for your specific situation — exact deadlines and options depend on how far behind you are and what Warren County has already filed. Confirm your specific situation with the Commissioner of the Revenue's office or a Virginia real estate attorney before assuming a sale date is set in stone.</p>
    `,
    faqs: [
      { q: 'Can I sell my Front Royal home if it has a tax lien?', a: 'Yes. Tax liens attach to title and are paid from your closing proceeds. As long as there is enough equity to cover the lien plus mortgage, the transaction works.' },
      { q: 'Do I need to pay off the lien before listing my Front Royal home?', a: 'No. The payoff happens at closing from your proceeds. You can list the home with the lien in place.' },
      { q: 'What if the tax lien exceeds my equity in the Front Royal home?', a: 'That requires negotiating with the lienholder for a reduced payoff — a lien release. More complex but absolutely doable. I have worked through these situations before.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
