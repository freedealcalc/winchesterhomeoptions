import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Mold in Your Front Royal VA Home? You Still Have Options',
  description: 'Mold in your Front Royal VA home? Licensed agent Dan White covers every option — mold won\'t block your sale. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-mold-front-royal-va' },
  openGraph: { title: 'Sell a House with Mold in Front Royal VA', description: 'Mold in your Front Royal home? Dan White walks you through every option — including buyers who purchase as-is. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-mold-front-royal-va' },
};

export default async function FrontRoyalMoldPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');
  const config = {
    slug: 'sell-house-mold-front-royal-va',
    city: 'Front Royal', county: 'Warren County', type: 'city',
    h1: 'Mold in Your Front Royal Home? <em>You Still Have Options.</em>',
    heroSub: 'Mold is more common in older Warren County homes than most sellers realize — and it does not have to derail your sale. Dan White has helped Front Royal sellers navigate mold situations, disclose correctly, and find the right buyer for the property as it stands.',
    trustItems: ['20+ years handling disclosure and condition issues in Warren County', 'Licensed VA agent · Pearson Smith Realty', 'Cash buyers who accept mold situations as-is', 'Disclosure handled correctly · Free consultation'],
    bodyContent: `
      <h2>No Remediation Required Before You Sell</h2>
      <p>Older homes throughout Warren County can develop mold for all kinds of ordinary reasons — moisture, age, ventilation — and none of that creates a requirement to remediate before selling. A buyer who purchases as-is is already prepared to take on a property in whatever condition it's in, mold included, and many of these buyers specifically look for homes that need this kind of work.</p>
      <p>That means the choice isn't "spend money you may not have on remediation" versus "don't sell." A third path — selling as-is to a buyer who accounts for it in the price — is usually available and often the faster route to closing.</p>
      <h2>Let an Attorney Confirm What Needs to Be Disclosed</h2>
      <p>Virginia's disclosure framework covers known property conditions, and whether and how mold needs to be disclosed depends on specifics — what's actually been found, whether it's been tested, and what you know as the owner. Those are facts a real estate attorney needs to see, not something to assume based on a general guide.</p>
      <p>Working that out before you list means you walk into the sale with a clear answer instead of making a judgment call under pressure once a buyer is already interested.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information, not legal advice for your specific situation — how Virginia's disclosure rules apply depends on the specific facts of your property. Confirm your disclosure obligations with a real estate attorney before listing.</p>
    `,
    faqs: [
      { q: 'Do I have to disclose mold when selling a Front Royal home?', a: 'Yes — Virginia requires disclosure of known material defects including mold. Proper disclosure protects you legally and I help you navigate it correctly.' },
      { q: 'Can I sell my Front Royal home with mold without remediating it first?', a: 'Yes, to cash buyers and investors. They factor remediation into their pricing and handle it after closing. Traditional buyers using financing may face lender restrictions.' },
      { q: 'What if mold is in the basement or crawl space of my Front Royal home?', a: 'Very common in older Warren County homes. Basement and crawl space mold is generally less alarming to experienced buyers than visible mold in living areas. I help you understand what you are actually working with.' },
      { q: 'Should I remediate or sell as-is in Front Royal?', a: 'Depends on remediation cost vs. price improvement. I give you the honest math on both so you can make a clear decision.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
