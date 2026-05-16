import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a House with Tax Liens in Winchester VA | Every Option Explained',
  description: 'Sell your Winchester home fast with tax liens and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — liens get resolved at closing. Free consultation, no pressure.',
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
