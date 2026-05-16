import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House with Tenants in Virginia | Every Option Explained',
  description: 'Selling a Virginia rental property with tenants? Licensed agent Dan White explains every option — selling with tenants in place, cash buyers, MLS listing — and how to walk away with the most money. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-tenants-virginia' },
  openGraph: {
    title: 'Selling a House with Tenants in Virginia',
    description: 'Tenants in your Virginia rental property? Dan White explains every option — including selling with tenants in place. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/sell-house-tenants-virginia',
  },
};

export default async function SellHouseTenantsVirginiaPage() {
  const config = {
    slug: 'sell-house-tenants-virginia',
    city: null,
    county: null,
    type: 'blog',
    h1: 'Selling a Virginia Home with Tenants — <em>Your Options Explained.</em>',
    heroSub: 'Tenants in a Virginia rental property complicate a sale — but they do not prevent one. In some cases, tenants in place are actually an advantage to certain buyers. Dan White has sold occupied rental properties throughout Virginia and knows how to navigate every scenario.',
    trustItems: [
      '20+ years of rental property sales in Virginia',
      'Licensed VA agent · Pearson Smith Realty',
      'Sell with tenants or vacant — both paths explained',
      'Free consultation · No pressure',
    ],
    bodyContent: `
      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Virginia Tenant Rights During a Home Sale</h2>
      <p style="margin-bottom:16px;">Virginia law protects tenant rights when a rental property is sold. Key points:</p>
      <ul style="margin-bottom:24px;padding-left:20px;line-height:2;">
        <li><strong>Fixed-term lease:</strong> The new buyer takes over the existing lease. Tenants cannot be required to leave until the lease ends unless there is a lease violation.</li>
        <li><strong>Month-to-month tenancy:</strong> The new owner can terminate with proper notice — typically 30 days in Virginia for month-to-month tenancies.</li>
        <li><strong>Notice of entry for showings:</strong> Virginia requires at least 24 hours notice before entering a rental unit for showings.</li>
        <li><strong>Security deposit:</strong> Transfers to the new owner at closing.</li>
      </ul>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Selling Options With Tenants in Place</h2>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Option 1: Sell to an Investor With Tenants In Place</h3>
      <p style="margin-bottom:20px;">Investors who want income-producing properties often prefer tenanted rentals — they can verify rental income history, skip vacancy, and start collecting rent immediately. If your lease terms are reasonable and tenants are paying on time, this can actually be a selling point. Cash buyers in particular handle this situation smoothly.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Option 2: Wait for Lease Expiration Then Sell</h3>
      <p style="margin-bottom:20px;">If you have the luxury of time and want to sell to a broader buyer pool including owner-occupants, waiting for the lease to expire gives you a vacant property. Vacant properties show better, close faster with traditional buyers, and open the full MLS buyer pool.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Option 3: Negotiate Tenant Departure</h3>
      <p style="margin-bottom:20px;">Cash for keys — paying tenants to vacate before lease expiration — is a common and legal approach. The cost of the payment is often offset by the ability to sell to a wider buyer pool at a higher price. This must be done carefully and with proper documentation.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:24px;">Option 4: Sell on the MLS Subject to Tenancy</h3>
      <p style="margin-bottom:24px;">MLS listings that disclose existing tenancy attract investor buyers. This limits your buyer pool but can still produce competitive offers in a market with strong investor demand like Winchester and Frederick County.</p>
    `,
    faqs: [
      { q: 'Can I force tenants to leave so I can sell my Virginia home?', a: 'Not during a fixed-term lease unless there is a lease violation. Month-to-month tenants can be terminated with proper notice. Cash for keys — a voluntary buyout — is the fastest way to get a cooperative early departure.' },
      { q: 'Do I have to disclose tenants when selling a Virginia rental property?', a: 'Yes — existing leases and tenancy must be disclosed. Buyers inherit existing leases at closing.' },
      { q: 'Will tenants cooperate with showings when I sell in Virginia?', a: 'It varies. Virginia requires 24-hour notice for entry. Uncooperative tenants can make showings difficult on the MLS. Cash buyers typically do one walkthrough rather than multiple showings — easier to coordinate.' },
      { q: 'Are there investors who specifically want tenanted properties in Winchester and Frederick County?', a: 'Yes — and I know them. Investor buyers who want income-producing properties without vacancy are an active buyer pool in this market. Call Dan White at (571) 989-3269.' },
    ],
  };

  return <ContentPage config={config} stats={null} lastCronRun={null} />;
}
