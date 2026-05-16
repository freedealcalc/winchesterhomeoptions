import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Who Gets the House in a Divorce in Virginia? What the Law Says',
  description: 'Divorcing in Virginia and wondering who keeps the house? Licensed agent Dan White explains Virginia equitable distribution law, the options for the marital home, and how to get the most money either way. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/who-gets-house-divorce-virginia' },
  openGraph: {
    title: 'Who Gets the House in a Divorce in Virginia?',
    description: 'Virginia divorce and the marital home — Dan White explains equitable distribution, your options, and how to maximize proceeds. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/who-gets-house-divorce-virginia',
  },
};

export default async function WhoGetsHouseDivorceVirginiaPage() {
  const config = {
    slug: 'who-gets-house-divorce-virginia',
    city: null,
    county: null,
    type: 'blog',
    h1: 'Who Gets the House in a Virginia Divorce? <em>What the Law Says.</em>',
    heroSub: 'The marital home is usually the largest and most contested asset in a Virginia divorce. Understanding how Virginia law handles it — and what your practical options are — helps you make better decisions under pressure. Dan White has helped divorcing couples navigate this dozens of times.',
    trustItems: [
      '20+ years handling divorce-related real estate in Virginia',
      'Licensed VA agent · Pearson Smith Realty',
      'Works with both parties and their attorneys',
      'Confidential · No judgment · Free consultation',
    ],
    bodyContent: `
      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Virginia Is an Equitable Distribution State</h2>
      <p style="margin-bottom:16px;">Virginia divides marital property equitably — meaning fairly, not necessarily equally. The court considers factors including length of marriage, each spouse's contributions, economic circumstances, and more. There is no automatic 50/50 split.</p>
      <p style="margin-bottom:24px;">Marital property includes assets acquired during the marriage. Separate property — assets owned before marriage or received as gifts or inheritance — is generally not divided. Homes purchased during the marriage are typically marital property regardless of whose name is on the deed.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Three Outcomes for the Marital Home in Virginia</h2>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">1. One Spouse Keeps the Home</h3>
      <p style="margin-bottom:20px;">The keeping spouse buys out the other's equity and refinances the mortgage into their own name. Requires qualifying for the mortgage independently. The departing spouse is removed from title and the mortgage — critical, because otherwise both spouses remain liable for the loan.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">2. Both Spouses Sell and Split Proceeds</h3>
      <p style="margin-bottom:20px;">The most common and cleanest outcome. The home is sold, mortgage and costs are paid at closing, and proceeds are divided according to the divorce agreement or court order. Removes the largest shared asset from the negotiating table and gives both parties liquid funds.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">3. Court-Ordered Sale</h3>
      <p style="margin-bottom:24px;">If spouses cannot agree, a court can order the home sold and proceeds divided. This is more expensive and slower than an agreed sale — legal fees accumulate while the home continues carrying costs. Agreement almost always produces a better financial outcome for both parties.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">What Happens to the Mortgage During Divorce?</h2>
      <p style="margin-bottom:16px;">Both spouses remain legally responsible for the mortgage until it is refinanced or paid off — regardless of what the divorce decree says. A divorce agreement that awards the home to one spouse does not remove the other from the mortgage. Only a refinance into one name does that.</p>
      <p style="margin-bottom:24px;">This is why selling is often the cleaner financial exit — it pays off the mortgage and severs the financial connection between spouses entirely.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Getting the Most From the Sale</h2>
      <p>Whether you sell by agreement or court order, maximizing what the home produces is in both parties\' interests. Dan White works with both spouses professionally, coordinates with attorneys, and brings every selling option to the table so the estate gets the most money possible to divide.</p>
    `,
    faqs: [
      { q: 'Does it matter whose name is on the deed in a Virginia divorce?', a: 'Less than you might think. Property acquired during the marriage is generally marital property regardless of whose name is on the deed. Both spouses typically have an equitable interest.' },
      { q: 'Can one spouse sell the marital home without the other\'s consent in Virginia?', a: 'Not if both names are on the title. Both titleholders must sign the deed to convey ownership. One spouse cannot sell unilaterally.' },
      { q: 'What if the home is worth less than what is owed on the mortgage during a Virginia divorce?', a: 'An upside-down home during divorce is particularly complicated — neither spouse benefits from the sale and someone may have to contribute cash at closing. A short sale with lender approval is one path. Consult both a real estate attorney and an agent experienced in this situation.' },
      { q: 'How fast can we sell the marital home during a Virginia divorce?', a: 'As fast as both spouses cooperate. Cash sales in Winchester and Frederick County close in 7 to 21 days. MLS listings take longer but often produce more. I show you both options with real net numbers.' },
    ],
  };

  return <ContentPage config={config} stats={null} lastCronRun={null} />;
}
