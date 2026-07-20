import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House in Probate in Berryville, VA',
  description: 'Probate home sale in Berryville? Licensed agent Dan White covers every option for the best estate outcome. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-probate-berryville-va' },
  openGraph: { title: 'Selling a House in Probate in Berryville VA', description: 'Navigating probate in Berryville? Dan White walks you through every option — and which one gets the estate the most money. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-probate-berryville-va' },
};

export default async function BerryvilleProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Berryville', 'Clarke County');
  const config = {
    slug: 'sell-house-probate-berryville-va',
    city: 'Berryville', county: 'Clarke County', type: 'city',
    h1: 'Selling a Berryville Home Through Probate — <em>Every Option Explained.</em>',
    heroSub: 'Clarke County probate real estate — older homes, rural properties, family estates — needs someone who knows both the legal process and the local market. Dan White has worked through probate sales in Berryville and surrounding areas for 20+ years. He knows what to do, in what order.',
    trustItems: ['20+ years of estate sales in Clarke County', 'Licensed VA agent · Pearson Smith Realty', 'Works with estate attorneys and executors', 'As-is purchase — any condition'],
    bodyContent: `
      <h2>How Probate Actually Works in Virginia</h2>
      <p>Before an estate can sell a Berryville property, someone needs legal authority to act for it — an executor (if there's a will) or an administrator (if there isn't) must qualify with the Circuit Court in the county where the deceased lived. Virginia doesn't set a hard deadline for when that qualification has to happen, but the state's own probate guidance points to the first steps typically starting within about 30 days of the death.</p>
      <p>Not every estate needs full-blown probate administration. If the personal property in the estate is worth $50,000 or less, Virginia allows a simplified small-estate procedure — the will is recorded but a formal administration isn't required. For estates that do go through full administration, a first (and often final) accounting is typically due at the one-year mark following qualification, which gives a rough sense of how long a straightforward Clarke County estate takes to fully wind down — though the property itself can often sell well before that accounting is filed.</p>
      <h2>Where a Clarke County Estate Is Handled</h2>
      <p>Qualification, wills, and probate matters for Berryville and the rest of Clarke County go through the <strong>Clarke County Circuit Court</strong>, 102 N. Church St., Berryville, VA &middot; (540) 955-5188. That's the office your attorney will be filing with to get the executor or administrator qualified.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia probate works, not legal advice for your specific estate — timelines and whether court approval is needed for a sale depend on the will, the estate's size, and whether heirs agree. Confirm your specific situation with the estate's attorney before listing or accepting an offer.</p>
    `,
    faqs: [
      { q: 'Can I sell a Berryville home during probate before it closes?', a: 'Often yes. Virginia allows executors with proper authority to list and sell during probate, with closing contingent on court confirmation where required.' },
      { q: 'The Berryville probate property is full of belongings — what do we do?', a: 'Leave them. Cash buyers purchase with all contents. Heirs take what they want; the buyer handles the rest.' },
      { q: 'How do I get started selling a Clarke County probate property?', a: 'Call Dan White at (571) 989-3269 with the basics. I will walk you through what comes next in 15 minutes. Free, no pressure.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
