import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a House With Mold in Winchester, VA | Dan White',
  description: 'Mold does not have to block your Winchester sale. Licensed agent Dan White reviews every option so you get the most money. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-mold-winchester-va' },
  openGraph: {
    title: 'Sell a House With Mold in Winchester, VA | Dan White',
    description: 'Mold in your Winchester home does not have to derail the sale. Dan White walks you through every option — including buyers who purchase as-is. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-mold-winchester-va',
  },
};

export default async function WinchesterMoldPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-house-mold-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Mold in Your Winchester Home? <em>You Still Have Options.</em>',
    heroSub: 'Mold is one of the most feared words in real estate — but it is far more common than most people realize, and it does not automatically tank your sale. Dan White has helped Winchester and Frederick County sellers navigate mold situations, disclose appropriately, and find the right buyer for the property as it stands.',
    trustItems: [
      '20+ years handling disclosure and condition issues in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Cash buyers who accept mold situations as-is',
      'Disclosure handled correctly · Free consultation',
    ],
    bodyContent: `
      <h2>Remediation Is Optional, Not a Prerequisite</h2>
      <p>Finding mold in a Winchester home doesn't create an obligation to remediate it before you can sell. An as-is or cash buyer already expects to evaluate the property in its current condition, and many of them specifically look for homes with exactly this kind of issue, because they have the process and contacts in place to handle it after closing.</p>
      <p>That means you're not stuck choosing between an expensive remediation project and an indefinite delay. The property can go to market with the mold still present, and the right buyer factors that into the number they offer rather than asking you to fix it first.</p>
      <h2>What to Disclose, and to Whom</h2>
      <p>Virginia has its own framework for what a seller does and doesn't need to disclose about known property conditions, and where mold fits into that depends on specifics — how it was discovered, whether it's been tested, and what you actually know versus suspect. Rather than guess at what applies to your situation, this is exactly the kind of question a Virginia real estate attorney can answer directly, based on your specific facts.</p>
      <p>Getting that answer early, before you list, tends to make the rest of the process smoother — you're not making disclosure decisions on the fly once a buyer is already involved.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information, not legal advice for your specific situation — Virginia's disclosure rules and how they apply depend on the specific facts of your property. Confirm your disclosure obligations with a real estate attorney before listing.</p>
    `,
    faqs: [
      { q: 'Do I have to disclose mold when selling a Winchester home?', a: 'Yes — Virginia requires sellers to disclose known material defects including mold. Proper disclosure protects you legally. Trying to hide mold is far riskier than disclosing it. I help you navigate disclosure correctly.' },
      { q: 'Can I sell a Winchester home with mold without remediating first?', a: 'Yes, to the right buyer. Cash buyers and investors who buy as-is factor mold remediation into their pricing and handle it themselves. Traditional buyers using financing may face lender restrictions, which is why the buyer pool matters.' },
      { q: 'Will mold significantly reduce what I get for my Winchester home?', a: 'It affects price — buyers price in remediation cost. But selling to a single lowball cash offer is not your only move. Multiple investors competing on the property often produces a better number. I show you the realistic range.' },
      { q: 'What if the mold is in the basement or crawl space of my Winchester home?', a: 'Very common in older Frederick County homes. Basement and crawl space mold is generally less alarming to experienced buyers than visible mold in living areas. Severity and spread matter — I help you understand what you are working with.' },
      { q: 'Should I remediate the mold before selling or sell as-is in Winchester?', a: 'Depends on the cost of remediation vs. the price improvement it would produce. I give you the honest math on both scenarios so you make a clear decision.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
