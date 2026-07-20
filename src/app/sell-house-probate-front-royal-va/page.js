import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a Probate House in Front Royal VA',
  description: 'Sell a Front Royal probate home for the most money. Licensed VA agent Dan White reviews every option for the estate. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-probate-front-royal-va' },
  openGraph: {
    title: 'Selling a House in Probate in Front Royal VA',
    description: 'Navigating probate in Front Royal? Dan White walks you through every option for the estate — and which one gets you the most money. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-probate-front-royal-va',
  },
};

export default async function FrontRoyalProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');

  const config = {
    slug: 'sell-house-probate-front-royal-va',
    city: 'Front Royal',
    county: 'Warren County',
    type: 'city',
    h1: 'Selling a Front Royal Home Through Probate — <em>Every Option Explained.</em>',
    heroSub: 'Warren County probate properties — particularly older homes, farmhouses, and rural estates — need someone who knows both the legal process and the local market. Dan White has handled estate sales across Front Royal and Warren County for 20+ years. He knows what to do, in what order, and how to get the estate the most money.',
    trustItems: [
      '20+ years of estate sales in Warren County and the Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Works with Warren County probate court timelines',
      'Rural properties, farmhouses, estates — all handled',
    ],
    bodyContent: `
      <h2>How Probate Actually Works in Virginia</h2>
      <p>Before an estate can sell a Front Royal property, someone needs legal authority to act for it — an executor (if there's a will) or an administrator (if there isn't) must qualify with the Circuit Court in the county where the deceased lived. Virginia doesn't set a hard deadline for when that qualification has to happen, but the state's own probate guidance points to the first steps typically starting within about 30 days of the death.</p>
      <p>Not every estate needs full-blown probate administration. If the personal property in the estate is worth $50,000 or less, Virginia allows a simplified small-estate procedure — the will is recorded but a formal administration isn't required. For estates that do go through full administration, a first (and often final) accounting is typically due at the one-year mark following qualification, which gives a rough sense of how long a straightforward Warren County estate takes to fully wind down — though the property itself can often sell well before that accounting is filed.</p>
      <h2>Where a Warren County Estate Is Handled</h2>
      <p>Qualification, wills, and probate matters for Front Royal and the rest of Warren County go through the <strong>Warren County Circuit Court</strong>, 1 East Main Street, Front Royal, VA 22630-3313 &middot; (540) 635-2435. That's the office your attorney will be filing with to get the executor or administrator qualified.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia probate works, not legal advice for your specific estate — timelines and whether court approval is needed for a sale depend on the will, the estate's size, and whether heirs agree. Confirm your specific situation with the estate's attorney before listing or accepting an offer.</p>
    `,
    faqs: [
      {
        q: 'How does probate work for a Front Royal home sale?',
        a: 'The executor files with the Warren County Circuit Court, which oversees the estate. The property can often be listed and marketed during probate, with the sale closing once the court approves. I work within that timeline and handle the real estate side so the executor can focus on the legal side.',
      },
      {
        q: 'Can we sell a Front Royal farmhouse or rural property through probate as-is?',
        a: 'Yes — and this is often the right call for rural Warren County properties. Cash buyers who want rural land and older homes buy as-is. No repairs, no updates, no cleanup required.',
      },
      {
        q: 'What if the Front Royal probate property has liens or back taxes?',
        a: 'Liens and taxes get resolved at closing from the estate\'s proceeds. This is standard in probate sales and doesn\'t prevent the transaction — it just gets accounted for in the closing settlement.',
      },
      {
        q: 'How do I get started selling a Front Royal probate property?',
        a: 'Call me with the basics — who the executor is, what the property looks like, and whether probate has been opened. I\'ll tell you exactly what comes next. Free, no obligation.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
