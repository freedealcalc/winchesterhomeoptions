import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a House With Mold in Stephens City, VA',
  description: 'Mold does not have to block your Stephens City sale. Dan White reviews every option so you get the most money. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-mold-stephens-city-va' },
  openGraph: { title: 'Sell a House With Mold in Stephens City, VA', description: 'Mold in your Stephens City home? Dan White walks you through every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-mold-stephens-city-va' },
};

export default async function StephensCityMoldPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');
  const config = {
    slug: 'sell-house-mold-stephens-city-va',
    city: 'Stephens City', county: 'Frederick County', type: 'city',
    h1: 'Mold in Your Stephens City Home? <em>You Still Have Options.</em>',
    heroSub: 'Mold in a Stephens City home is a solvable problem — not a dead end. Dan White knows which buyers will take the property as-is and how to get them competing on it. Proper disclosure, right buyer pool, best number your situation allows.',
    trustItems: ['20+ years handling condition issues in Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Cash buyers who purchase mold situations as-is', 'Free consultation · No pressure'],
    bodyContent: `
      <h2>Selling As-Is Doesn't Require Fixing the Mold First</h2>
      <p>A Stephens City seller who discovers mold isn't required to remediate it before putting the home on the market. Cash buyers who purchase homes in as-is condition specifically work with properties that already have this kind of issue priced into their process — they don't expect it fixed, and many prefer to handle remediation themselves with contractors they already use.</p>
      <p>That changes the decision from "can I afford to fix this before selling" to "what does the property bring in its current condition" — a much shorter path to a closing date.</p>
      <h2>Confirm Disclosure Obligations Before You List</h2>
      <p>What you're required to tell a buyer about known conditions like mold is governed by Virginia's property disclosure rules, and the details depend on facts specific to your home — what you know, how it was found, and whether any testing or remediation has already occurred. That's not something to guess at from a general guide.</p>
      <p>A real estate attorney can walk through your specific situation and tell you exactly what needs to be disclosed and how, which removes the guesswork before you're under contract.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information, not legal advice for your specific situation — disclosure requirements depend on the facts of your property and your knowledge of the condition. Confirm your specific obligations with a real estate attorney before you list.</p>
    `,
    faqs: [
      { q: 'Can I sell my Stephens City home with mold without fixing it?', a: 'Yes — to cash buyers and investors who purchase as-is and handle remediation themselves.' },
      { q: 'Will mold significantly reduce what I get for my Stephens City home?', a: 'Buyers price in remediation cost. But multiple investors competing on the property produces better results than accepting a single lowball. I show you the realistic range.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
