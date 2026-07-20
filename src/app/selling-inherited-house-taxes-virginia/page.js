import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Tax Implications of Selling an Inherited House in Virginia',
  description: 'Selling an inherited home in Virginia? Dan White explains stepped-up basis, capital gains, and what to ask your CPA before selling. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/selling-inherited-house-taxes-virginia' },
  openGraph: {
    title: 'Tax Implications of Selling an Inherited House in Virginia',
    description: 'Inherited a home in Virginia and not sure about taxes? Dan White explains the stepped-up basis and what you actually owe. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/selling-inherited-house-taxes-virginia',
  },
};

export default async function InheritedHouseTaxesVirginiaPage() {
  const config = {
    slug: 'selling-inherited-house-taxes-virginia',
    city: null,
    county: null,
    type: 'blog',
    h1: 'Selling an Inherited Home in Virginia — <em>What the Taxes Actually Look Like.</em>',
    heroSub: 'Most heirs dramatically overestimate what they will owe in taxes when selling an inherited Virginia home. The stepped-up basis rule changes the math significantly. Here is what you need to understand — and what questions to bring to your accountant.',
    trustItems: [
      '20+ years of inherited and estate property sales in Virginia',
      'Licensed VA agent · Pearson Smith Realty',
      'Every option explained — cash, as-is, wholetail',
      'Free consultation · No pressure',
    ],
    bodyContent: `
      <p style="margin-bottom:16px;font-style:italic;color:#5a5a5a;">Dan White is a licensed real estate agent, not a tax advisor. This page is general education. Consult a CPA or tax attorney for advice specific to your inherited property situation.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">The Stepped-Up Basis: The Most Important Tax Rule for Inherited Property</h2>
      <p style="margin-bottom:16px;">When you inherit a property, your cost basis for tax purposes is reset to the fair market value of the property on the date the original owner died — not what they originally paid for it.</p>
      <p style="margin-bottom:24px;">This is called the stepped-up basis, and it dramatically reduces or eliminates capital gains taxes when you sell the inherited property — particularly for homes purchased decades ago at much lower prices.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Example: Frederick County Farmhouse</h2>
      <p style="margin-bottom:8px;">Parent purchased a home in Frederick County in 1975 for $65,000. At their death in 2024, it was appraised at $380,000. You inherit it and sell for $390,000.</p>
      <ul style="margin-bottom:24px;padding-left:20px;line-height:2;">
        <li><strong>Without stepped-up basis:</strong> Gain = $325,000. Significant tax liability.</li>
        <li><strong>With stepped-up basis:</strong> Your basis = $380,000. Gain = $10,000. Minimal tax liability.</li>
      </ul>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">What If You Wait to Sell the Inherited Property?</h2>
      <p style="margin-bottom:16px;">The stepped-up basis is set at date of death — not date of sale. If the property appreciates further after you inherit it, you owe capital gains on that additional appreciation. Selling sooner typically means less additional gain above the stepped-up basis.</p>
      <p style="margin-bottom:24px;">There are also carrying costs — taxes, insurance, maintenance — that accumulate while you hold an inherited property. These factor into the net proceeds analysis.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Virginia Inheritance Tax</h2>
      <p style="margin-bottom:16px;">Virginia does not have a state inheritance tax. There is no tax owed simply because you inherited the property. The only tax question is capital gains when you sell — and the stepped-up basis rules above apply.</p>
      <p>Federal estate tax may apply to very large estates — consult an estate attorney if the total estate value is substantial.</p>
    `,
    faqs: [
      { q: 'Do I pay taxes when I sell an inherited home in Virginia?', a: 'Possibly a small amount, possibly nothing. The stepped-up basis means you are only taxed on appreciation from the date of death — not from original purchase. For recently inherited properties sold quickly, the tax is often minimal or zero.' },
      { q: 'How do I establish the stepped-up basis for an inherited Virginia property?', a: 'Get a professional appraisal as of the date of death, or use the assessed value in some cases. Your estate attorney or CPA will handle this as part of the estate settlement.' },
      { q: 'Should I sell an inherited Frederick County home quickly to minimize taxes?', a: 'The tax question and the market question are separate. The optimal sale timing balances market conditions, carrying costs, and tax implications. Talk to both your CPA and Dan White before deciding.' },
      { q: 'What if multiple heirs inherited the Virginia property?', a: 'All heirs share the stepped-up basis proportionally. The tax math is the same — it is just applied to each heir\'s share. Agreement among heirs on whether and when to sell is the more common challenge.' },
    ],
  };

  return <ContentPage config={config} stats={null} lastCronRun={null} />;
}
