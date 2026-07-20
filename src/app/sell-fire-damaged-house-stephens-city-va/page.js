import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Fire Damaged House in Stephens City, VA',
  description: 'Fire damaged home in Stephens City? Dan White connects you with buyers who purchase as-is, no repairs. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-fire-damaged-house-stephens-city-va' },
  openGraph: { title: 'Sell a Fire Damaged House in Stephens City VA', description: 'Fire damaged home in Stephens City? Buyers who purchase as-is. Dan White walks you through every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-fire-damaged-house-stephens-city-va' },
};

export default async function StephensCityFireDamagedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');
  const config = {
    slug: 'sell-fire-damaged-house-stephens-city-va',
    city: 'Stephens City', county: 'Frederick County', type: 'city',
    h1: 'Selling a Fire Damaged Home in Stephens City — <em>As-Is, No Repairs.</em>',
    heroSub: 'Fire damaged properties in Stephens City and Frederick County have real buyer demand — from investors and contractors who want exactly what you have. Dan White connects sellers with that buyer pool and gets competition on the property. No repairs, no cleanup, close fast.',
    trustItems: ['20+ years with damaged properties in Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Investor buyers who want fire damaged properties as-is', 'Free consultation · No pressure'],
    bodyContent: `
      <h2>Your Claim and Your Sale Don't Have to Wait on Each Other</h2>
      <p>There isn't a required order between a fire insurance claim and a home sale in Stephens City. Some sellers wait until the claim is resolved; others move the sale forward first and let the buyer factor in an open claim. Investors and cash buyers who purchase fire damaged homes are used to working around a claim at any stage — before it's filed, mid-review, or already settled — and none of those stages has to block a closing.</p>
      <p>If reconstruction hasn't started, or started and stalled, that's fine too. The sale isn't contingent on any particular repair milestone being hit first — a buyer who wants this type of property is evaluating the house as it sits today.</p>
      <h2>Selling As-Is Means Skipping Permits and Repairs</h2>
      <p>A Stephens City home with fire damage can be sold exactly as it stands — no permits pulled, no framing repaired, no smoke remediation completed first. Buyers who focus on this category of property build the cost of all of that into their offer rather than asking you to complete it before they'll look at it.</p>
      <p>That removes a layer of decisions that would otherwise fall on you: which contractor to hire, which permits to file with the county, how long the work would take. None of it is required before a sale can close.</p>
      <p style="font-style: italic; color: #8a8a8a; font-size: 0.85rem;">This is general information, not insurance or legal advice for your specific situation — every policy and every claim is different. Confirm where your claim stands, and how it affects your sale, with your insurance adjuster before making decisions.</p>
    `,
    faqs: [
      { q: 'Can I sell my Stephens City fire damaged home without making any repairs?', a: 'Yes. Investor buyers in Frederick County purchase fire damaged properties as-is and handle all remediation themselves. No repairs required.' },
      { q: 'Will I get a reasonable price for a fire damaged home in Stephens City?', a: 'Condition affects price — but multiple investors competing on the same property produces a better number than a single lowball. I put the property in front of a large buyer pool and let them compete.' },
      { q: 'How fast can I close on a fire damaged Stephens City property?', a: 'Cash buyers close in 7 to 21 days. Fire damaged properties actually move faster in some ways — no occupant coordination needed and buyers who want them move decisively.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
