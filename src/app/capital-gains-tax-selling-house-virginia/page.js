import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Capital Gains Tax When Selling a House in Virginia',
  description: 'Worried about capital gains tax selling your Virginia home? Dan White explains the primary residence exclusion and stepped-up basis. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/capital-gains-tax-selling-house-virginia' },
  openGraph: {
    title: 'Capital Gains Tax When Selling a House in Virginia',
    description: 'Selling your Virginia home and worried about capital gains? Dan White explains what you actually owe — and what the exclusions are. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/capital-gains-tax-selling-house-virginia',
  },
};

export default async function CapitalGainsTaxVirginiaPage() {
  const config = {
    slug: 'capital-gains-tax-selling-house-virginia',
    city: null,
    county: null,
    type: 'blog',
    h1: 'Capital Gains Tax When Selling Your Virginia Home — <em>What You Actually Owe.</em>',
    heroSub: 'Many Virginia homeowners overestimate what they will owe in capital gains taxes — or do not know about the exclusions that may eliminate the tax entirely. Dan White is not a tax advisor, but he can point you to the right questions to ask your accountant before you sell.',
    trustItems: [
      '20+ years navigating Virginia real estate tax questions',
      'Licensed VA agent · Pearson Smith Realty',
      'Connects sellers with the right tax resources',
      'Free consultation · No pressure',
    ],
    bodyContent: `
      <p style="margin-bottom:16px;font-style:italic;color:#5a5a5a;">Important: Dan White is a licensed real estate agent, not a tax advisor. The information below is general education. Consult a CPA or tax attorney for advice specific to your situation.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">The Primary Residence Exclusion</h2>
      <p style="margin-bottom:16px;">If you have lived in the home as your primary residence for at least 2 of the last 5 years, you may exclude up to $250,000 in capital gains from federal tax ($500,000 for married couples filing jointly). This exclusion eliminates capital gains tax for most Virginia homeowners who sell their primary residence.</p>
      <p style="margin-bottom:24px;">Example: You bought your Winchester home for $200,000 and sell for $450,000. Your gain is $250,000. If you qualify for the primary residence exclusion, you owe zero federal capital gains tax.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Inherited Property: The Stepped-Up Basis</h2>
      <p style="margin-bottom:16px;">Inherited properties receive a stepped-up basis — your cost basis for tax purposes is the fair market value of the property on the date of the original owner's death, not what they originally paid for it.</p>
      <p style="margin-bottom:24px;">This dramatically reduces or eliminates capital gains on inherited properties. Example: Parent bought a Frederick County home in 1980 for $80,000. It was worth $350,000 at their death. Your basis is $350,000. If you sell for $360,000, your taxable gain is only $10,000 — not $280,000.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Investment Property: No Primary Residence Exclusion</h2>
      <p style="margin-bottom:16px;">If the property is a rental or investment property — not your primary residence — the exclusion does not apply. Capital gains on investment property sales are taxed at federal capital gains rates (0, 15, or 20 percent depending on your income) plus Virginia state tax.</p>
      <p style="margin-bottom:24px;">A 1031 exchange may defer capital gains on investment property sales — consult a tax advisor before any investment property sale if this is a concern.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Virginia State Capital Gains Tax</h2>
      <p style="margin-bottom:16px;">Virginia does not have a separate capital gains tax rate — gains are taxed as ordinary income at Virginia's income tax rates, which top out at 5.75 percent. This applies on top of federal capital gains taxes for investment properties or gains exceeding the primary residence exclusion.</p>
    `,
    faqs: [
      { q: 'Do I owe capital gains tax if I sell my primary residence in Virginia?', a: 'Probably not — if you have lived there 2 of the last 5 years and your gain is under $250,000 single or $500,000 married. The primary residence exclusion eliminates the tax for most Virginia homeowners. Confirm with your CPA.' },
      { q: 'How is an inherited Virginia home taxed when sold?', a: 'You are taxed on appreciation from the date of the original owner\'s death — not from their original purchase price. This stepped-up basis often dramatically reduces or eliminates capital gains. Consult a tax advisor for your specific numbers.' },
      { q: 'Does selling fast affect my capital gains tax in Virginia?', a: 'Speed of sale does not affect capital gains calculation — only how long you owned the property and what you paid for it. Short-term gains (property held under 1 year) are taxed as ordinary income; long-term gains get preferential rates.' },
      { q: 'Should I talk to a tax advisor before selling my Virginia home?', a: 'Yes — particularly if the property is an investment property, an inherited home, or if you have significant gains. Dan White can refer you to the right people. The real estate decision and the tax decision are separate conversations.' },
    ],
  };

  return <ContentPage config={config} stats={null} lastCronRun={null} />;
}
