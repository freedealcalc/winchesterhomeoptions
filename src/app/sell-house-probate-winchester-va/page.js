import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a Probate House in Winchester VA',
  description: 'Sell a Winchester probate home for the most money. Licensed VA agent Dan White reviews every option for the estate. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-probate-winchester-va' },
  openGraph: {
    title: 'Selling a House in Probate in Winchester VA',
    description: 'Navigating probate in Winchester? Dan White walks you through every option for the estate property — and which one gets you the most money. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-probate-winchester-va',
  },
};

export default async function WinchesterProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-house-probate-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Selling a Winchester Home Through Probate — <em>Every Option Explained.</em>',
    heroSub: 'Probate real estate in Winchester and Frederick County has its own rules and timelines. Dan White has worked through dozens of probate sales — as executor, as agent, and alongside heirs. He knows what\'s required, what\'s optional, and how to get the most money for the estate without unnecessary delay.',
    trustItems: [
      '20+ years of probate and estate sales in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Works with estate attorneys and executors',
      'Buy as-is — full of belongings, any condition',
    ],
    bodyContent: `
      <h2>How Probate Actually Works in Virginia</h2>
      <p>Before an estate can sell a Winchester property, someone needs legal authority to act for it — an executor (if there's a will) or an administrator (if there isn't) must qualify with the Circuit Court in the county where the deceased lived. Virginia doesn't set a hard deadline for when that qualification has to happen, but the state's own probate guidance points to the first steps typically starting within about 30 days of the death.</p>
      <p>Not every estate needs full-blown probate administration. If the personal property in the estate is worth $50,000 or less, Virginia allows a simplified small-estate procedure — the will is recorded but a formal administration isn't required. For estates that do go through full administration, a first (and often final) accounting is typically due at the one-year mark following qualification, which gives a rough sense of how long a straightforward Frederick County estate takes to fully wind down — though the property itself can often sell well before that accounting is filed.</p>
      <h2>Where a Frederick County Estate Is Handled</h2>
      <p>Qualification, wills, and probate matters for Winchester and the rest of Frederick County — which share the same courthouse — go through the <strong>Frederick County / Winchester Joint Judicial Center</strong>, 5 North Kent Street, Winchester, VA 22601-5037 &middot; (540) 667-5770. That's the office your attorney will be filing with to get the executor or administrator qualified.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information about how Virginia probate works, not legal advice for your specific estate — timelines and whether court approval is needed for a sale depend on the will, the estate's size, and whether heirs agree. Confirm your specific situation with the estate's attorney before listing or accepting an offer.</p>
    `,
    faqs: [
      {
        q: 'Can I sell a Winchester home while it\'s still in probate?',
        a: 'In many cases yes. Virginia probate law allows the executor to list and accept offers during the probate process. The sale typically closes once the court approves it. The timeline depends on the complexity of the estate and the Frederick County probate court\'s schedule.',
      },
      {
        q: 'Does the Winchester probate court have to approve the sale price?',
        a: 'In some cases yes, particularly if the will requires it or if there are creditors involved. Court approval typically involves showing the court that the price is fair — which is where a licensed agent\'s market analysis becomes important.',
      },
      {
        q: 'What if the Winchester probate property has significant deferred maintenance?',
        a: 'Probate properties are frequently sold as-is — courts and buyers both understand this. Cash buyers and as-is listings are well-suited to estate properties that haven\'t been updated. You don\'t need to invest estate funds in repairs.',
      },
      {
        q: 'How long does selling a Winchester probate property typically take?',
        a: 'From listing to close, probate sales in Virginia can take 60–120 days depending on court timelines. A cash sale can compress the transaction side significantly — the probate process itself sets the floor on timing.',
      },
      {
        q: 'The Winchester probate home is full of the deceased\'s belongings — what do we do?',
        a: 'Leave them. Cash buyers purchase homes with all contents. Heirs take what they want and the buyer handles the rest. This removes one of the most time-consuming and emotionally draining parts of settling an estate.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
