import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a Parent\'s Home to Pay for Care in Virginia | Every Option',
  description: 'Selling a parent\'s home in Virginia to fund elder care or a nursing facility? Licensed agent Dan White explains every option — fast sale, as-is, and more — so your family walks away with the most money. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/selling-parents-home-for-care-virginia' },
  openGraph: {
    title: 'Selling a Parent\'s Home to Pay for Care in Virginia',
    description: 'Selling a parent\'s Virginia home to fund elder care? Dan White explains every option — and how to maximize what the family walks away with. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/selling-parents-home-for-care-virginia',
  },
};

export default async function SellingParentsHomeForCareVirginiaPage() {
  const config = {
    slug: 'selling-parents-home-for-care-virginia',
    city: null,
    county: null,
    type: 'blog',
    h1: 'Selling a Parent\'s Home to Fund Care in Virginia — <em>Every Option Explained.</em>',
    heroSub: 'When a parent moves to a care facility, the family home often becomes the primary resource for funding that care. Getting the most money out of the sale — while handling it with the speed and sensitivity the situation requires — takes someone who has been through this before. Dan White has.',
    trustItems: [
      '20+ years helping Virginia families navigate elder care home sales',
      'Licensed VA agent · Pearson Smith Realty',
      'Sensitive situations handled with care and confidentiality',
      'Free consultation · No pressure',
    ],
    bodyContent: `
      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">The Unique Pressures of This Situation</h2>
      <p style="margin-bottom:16px;">Selling a parent's home to fund care involves financial urgency — care costs in Virginia can run $5,000 to $12,000 per month — combined with emotional weight, family complexity, and sometimes a parent who is not fully able to participate in decisions.</p>
      <p style="margin-bottom:24px;">The goal is to maximize sale proceeds while moving at whatever speed the care situation requires. These two things are not always in conflict — and getting the strategy right makes a real difference in how many months of care the proceeds fund.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Who Has Authority to Sell?</h2>
      <ul style="margin-bottom:24px;padding-left:20px;line-height:2;">
        <li><strong>Parent still competent:</strong> They sign the listing agreement and the deed. You assist but they decide.</li>
        <li><strong>Power of attorney:</strong> If a family member holds durable POA that includes real estate, they can sign on behalf of the parent.</li>
        <li><strong>Guardianship/conservatorship:</strong> If the parent lacks capacity and there is no POA, a court-appointed guardian or conservator can authorize the sale. This takes time.</li>
        <li><strong>Trust:</strong> If the home is in a revocable living trust, the successor trustee handles the sale when the grantor is incapacitated.</li>
      </ul>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Selling Options for Virginia Families</h2>
      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Cash Sale — Fastest</h3>
      <p style="margin-bottom:20px;">Close in 7 to 21 days. No repairs, no cleanout required, no showings. Proceeds available immediately for care costs. Trade-off is price — typically below MLS value.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">As-Is MLS Listing — More Money</h3>
      <p style="margin-bottom:20px;">List as-is, priced to sell. Takes 30 to 60 days in most Virginia markets. Often produces significantly more than a cash offer. If care is funded for the next 2 months, the additional proceeds may cover 6 more months of care. The math is often worth the short wait.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Wholetail — Middle Ground</h3>
      <p style="margin-bottom:24px;">Light cleanup, no renovation, priced between cash and retail. Faster than full MLS, more money than straight cash. Works well for parent homes in decent but dated condition.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Medicaid and Home Sale Proceeds</h2>
      <p style="margin-bottom:16px;">If the parent is applying for Medicaid to fund long-term care, the proceeds from the home sale become a countable asset and may affect Medicaid eligibility. This is a significant issue that requires guidance from an elder law attorney before you sell.</p>
      <p>Dan White works alongside elder law attorneys and financial advisors on these situations. The real estate strategy and the Medicaid strategy need to coordinate.</p>
    `,
    faqs: [
      { q: 'Can I sell my parent\'s Virginia home if they are in a nursing home?', a: 'Yes — if the parent is still competent, they authorize the sale. If they have granted durable power of attorney including real estate, the POA holder can sign. If neither applies, a guardianship process may be needed. Consult an elder law attorney on the authority question before listing.' },
      { q: 'Does selling the home affect Medicaid eligibility in Virginia?', a: 'Potentially yes. Home sale proceeds become countable assets for Medicaid purposes. This is a critical question to answer before selling. An elder law attorney can help you navigate the timing and structuring of the sale in a way that protects Medicaid eligibility where possible.' },
      { q: 'The parent\'s home is dated and needs work — do we have to renovate before selling?', a: 'No. Dated parent homes sell as-is regularly in Virginia. Cash buyers and investor-focused MLS listings handle dated properties without renovation. You keep the proceeds rather than spending them on repairs.' },
      { q: 'How fast can proceeds be available for care costs after selling in Virginia?', a: 'Cash sales close in 7 to 21 days — proceeds available at closing. MLS listings take 30 to 60 days but often produce more. If care is bridged for 60 days, the additional MLS proceeds can fund significantly more care time.' },
    ],
  };

  return <ContentPage config={config} stats={null} lastCronRun={null} />;
}
