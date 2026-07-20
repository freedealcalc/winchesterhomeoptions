import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Fire Damaged House in Winchester VA | Options',
  description: 'Fire damaged home in Winchester? Licensed agent Dan White covers every option to sell as-is — no repairs required. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-fire-damaged-house-winchester-va' },
  openGraph: {
    title: 'Sell a Fire Damaged House in Winchester VA',
    description: 'Fire damaged home in Winchester? Dan White connects you with buyers who purchase as-is — no repairs, no cleanup. Every option explained. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-fire-damaged-house-winchester-va',
  },
};

export default async function WinchesterFireDamagedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Winchester', 'Frederick County');

  const config = {
    slug: 'sell-fire-damaged-house-winchester-va',
    city: 'Winchester',
    county: 'Frederick County',
    type: 'city',
    h1: 'Selling a Fire Damaged Home in Winchester — <em>As-Is, No Repairs.</em>',
    heroSub: 'A fire damaged home feels like an impossible situation — the cost to repair, the insurance process, the timeline. Dan White has worked with fire damaged properties in Frederick County and knows exactly which buyers want them, what they will pay, and how to get you to closing without spending money you do not have.',
    trustItems: [
      '20+ years handling distressed and damaged properties in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Buyers who specifically want fire damaged properties as-is',
      'Works alongside insurance claims · Free consultation',
    ],
    bodyContent: `
      <h2>Selling While a Fire Claim Is Open</h2>
      <p>A fire loss and the sale of the house are two separate processes, and they don't need to be resolved in the same order. Some Frederick County homeowners choose to sell before ever filing a claim; others sell with a claim already open, or even after part of an insurance settlement has already been paid out. A cash or as-is buyer doesn't need the claim to be closed first, and doesn't need reconstruction to have started — let alone finished — before making an offer.</p>
      <p>What matters to that kind of buyer is the property as it sits today, not a repair estimate, a contractor's schedule, or where things stand with the adjuster. If you're still working through a claim, that conversation can continue in parallel with a sale conversation — the two don't have to block each other.</p>
      <h2>No Permits, No Repairs Required to Sell As-Is</h2>
      <p>Because the buyer pool for fire damaged homes already expects post-fire condition, there's no obligation to pull permits, complete structural repairs, or even begin cleanup before putting a Winchester property on the market. That's different from a typical resale, where a buyer's lender might require completed repairs before closing. Cash buyers who specialize in this category account for the damage in their offer and take on remediation themselves after closing.</p>
      <p>That also means there's no pressure to make decisions under a repair deadline. Whether the structure needs a full rebuild or the damage is contained to one area, the property can be marketed and sold in its current condition, on your timeline rather than a contractor's.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information, not insurance or legal advice for your specific situation — how your claim interacts with a sale depends on your policy, your insurer, and where your claim currently stands. Confirm your specific situation with your insurance adjuster before making decisions about the sale.</p>
    `,
    faqs: [
      { q: 'Can I sell a fire damaged home in Winchester without making repairs?', a: 'Yes. There is an active buyer pool — contractors, investors, developers — who specifically seek fire damaged properties. They purchase as-is and handle all remediation themselves. No repairs, no cleanup, no remediation required from you.' },
      { q: 'Should I rebuild or sell a fire damaged Winchester property?', a: 'Depends on your insurance coverage, your equity, and your timeline. I can walk you through the financial picture on both — rebuild cost vs. current as-is value — so you make the call with real numbers in front of you, not guesswork.' },
      { q: 'Can I sell a fire damaged Winchester home if I still have an open insurance claim?', a: 'Yes, though it adds complexity. The insurance proceeds and the sale need to be coordinated carefully. I have navigated this before and can help you understand the right sequencing.' },
      { q: 'How do I know what a fire damaged Winchester home is worth?', a: 'It depends on the extent of damage, the land value, and the cost to remediate. I assess the property honestly and give you a realistic range — not an inflated number to get the listing.' },
      { q: 'Will I get anything close to market value for a fire damaged property in Winchester?', a: 'Not full market value — that accounts for a fully functional home. But fire damaged properties have real value, particularly in Frederick County where investor demand is strong. The gap between as-is value and repair cost is what you are navigating. I help you maximize the as-is number.' },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
