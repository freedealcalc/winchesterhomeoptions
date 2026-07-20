import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Virginia Seller Closing Costs | What You Actually Pay',
  description: 'What do sellers pay at closing in Virginia? Dan White breaks down every cost and shows you how to maximize your net proceeds. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/closing-costs-seller-virginia' },
  openGraph: {
    title: 'Closing Costs for Sellers in Virginia',
    description: 'What do sellers actually pay at closing in Virginia? Dan White breaks it all down — and shows you how to keep more of it. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/closing-costs-seller-virginia',
  },
};

export default async function ClosingCostsSellerVirginiaPage() {
  const config = {
    slug: 'closing-costs-seller-virginia',
    city: null,
    county: null,
    type: 'blog',
    h1: 'What Do Sellers Pay at Closing in Virginia? <em>Full Breakdown.</em>',
    heroSub: 'Most sellers focus on the offer price — but what you actually walk away with depends on closing costs, commissions, and payoffs. Dan White breaks down every seller cost in Virginia so you know your real net before you decide anything.',
    trustItems: [
      '20+ years of Virginia real estate transactions',
      'Licensed VA agent · Pearson Smith Realty',
      'Net proceeds analysis on every option — before you commit',
      'Free consultation · No pressure',
    ],
    bodyContent: `
      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Typical Seller Closing Costs in Virginia</h2>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Real Estate Commission: 5–6% of Sale Price</h3>
      <p style="margin-bottom:20px;">On a traditional MLS sale, the listing agent and buyer's agent split a commission — typically 5 to 6 percent of the sale price. On an off-market cash sale through Dan White, there is no seller commission. The math on each path is part of the comparison I give you upfront.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Virginia Grantor's Tax: $0.50 per $500 of Sale Price</h3>
      <p style="margin-bottom:20px;">Virginia charges a grantor's tax on every real estate sale — approximately 0.1 percent of the sale price. On a $350,000 sale, that is $350.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Title and Settlement Fees: $800–$1,500</h3>
      <p style="margin-bottom:20px;">The title company or settlement attorney charges for closing services, title search, and document preparation. Fees vary by company and transaction complexity.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Prorated Property Taxes</h3>
      <p style="margin-bottom:20px;">You pay property taxes for the portion of the year you owned the home. If taxes are paid annually and you close mid-year, your share is credited to the buyer at closing.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Mortgage Payoff</h3>
      <p style="margin-bottom:20px;">Your outstanding mortgage balance plus any prepayment penalties (rare) and per diem interest to the payoff date. This is typically the largest number coming out of your proceeds.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Other Possible Costs</h3>
      <ul style="margin-bottom:24px;padding-left:20px;line-height:2;">
        <li>HOA transfer fees and estoppel letters</li>
        <li>Home warranty (if offered to buyer)</li>
        <li>Negotiated buyer concessions</li>
        <li>Lien payoffs</li>
        <li>Attorney fees if applicable</li>
      </ul>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Total Seller Closing Costs in Virginia</h2>
      <p style="margin-bottom:16px;">On a traditional MLS sale, sellers typically net 88 to 92 percent of the sale price after all costs. On an off-market cash sale with no commission, the percentage is higher — but the sale price itself is typically lower. The net comparison is what matters.</p>
      <p>Dan White runs that comparison for every selling path before you make any decision. Call (571) 989-3269 for a free net proceeds analysis.</p>
    `,
    faqs: [
      { q: 'Do sellers pay closing costs in Virginia?', a: 'Yes — sellers pay the grantor\'s tax, their share of prorated taxes, title/settlement fees, any lien payoffs, and typically real estate commissions on MLS sales. Total seller costs excluding commissions run 1 to 2 percent of the sale price.' },
      { q: 'Are there closing costs on a cash sale in Virginia?', a: 'Yes but fewer. No commission on off-market cash sales through Dan White. Title fees, grantor\'s tax, and prorated costs still apply — but the overall cost is lower than a traditional sale.' },
      { q: 'Can I negotiate who pays closing costs in a Virginia home sale?', a: 'Yes. Buyer concessions — where the seller credits the buyer for closing costs — are negotiable. These reduce your net proceeds but can make a deal work when a buyer is short on cash.' },
      { q: 'How do I calculate my net proceeds from a Virginia home sale?', a: 'Sale price minus mortgage payoff minus all closing costs minus any liens. Dan White runs this calculation on every path — cash sale, as-is MLS, wholetail — so you compare apples to apples. Free, no obligation.' },
    ],
  };

  return <ContentPage config={config} stats={null} lastCronRun={null} />;
}
