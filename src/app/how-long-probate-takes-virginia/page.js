import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'How Long Does Probate Take in Virginia? Full Timeline for Home Sales',
  description: 'Wondering how long probate takes in Virginia before you can sell a home? Licensed agent Dan White explains the full timeline and how to sell an estate property during probate — not just after. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/how-long-probate-takes-virginia' },
  openGraph: {
    title: 'How Long Does Probate Take in Virginia?',
    description: 'Virginia probate can take months — but you may be able to sell the estate home before it closes. Dan White explains the full timeline. Free consultation.',
    url: 'https://www.winchesterhomeoptions.com/how-long-probate-takes-virginia',
  },
};

export default async function ProbateTimelineVirginiaPage() {
  const config = {
    slug: 'how-long-probate-takes-virginia',
    city: null,
    county: null,
    type: 'blog',
    h1: 'How Long Does Probate Take in Virginia? <em>What Heirs Need to Know.</em>',
    heroSub: 'Virginia probate timelines vary significantly depending on estate complexity, creditor claims, and court schedules. Here is what to expect — and how to move a home sale forward without necessarily waiting for probate to close.',
    trustItems: [
      '20+ years of estate and probate sales throughout Virginia',
      'Licensed VA agent · Pearson Smith Realty',
      'Works with estate attorneys and executors',
      'Free consultation · No pressure',
    ],
    bodyContent: `
      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Virginia Probate Timeline Overview</h2>
      <p style="margin-bottom:20px;">Probate in Virginia is handled by the Circuit Court in the county or city where the deceased lived. Timelines depend on estate size, whether there is a will, creditor claims, and family agreement.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Simple Estates: 6–12 Months</h3>
      <p style="margin-bottom:20px;">Small estates with clear wills, cooperative heirs, and no significant creditor claims can move through Virginia probate in as little as 6 months. Virginia's "small estate" affidavit process may apply to estates under $50,000 — significantly faster.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Average Estates: 12–18 Months</h3>
      <p style="margin-bottom:20px;">Most Virginia probate estates take 12 to 18 months to close completely. The executor must inventory assets, notify creditors, pay debts, file tax returns, and distribute assets — all of which take time even when everything goes smoothly.</p>

      <h3 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.2rem;font-weight:700;color:#1B2B4B;margin-bottom:10px;">Complex Estates: 2+ Years</h3>
      <p style="margin-bottom:24px;">Contested wills, disputed assets, significant creditor claims, or heir disagreements can extend Virginia probate to two years or more. Real estate is often the largest asset driving these delays.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">Can You Sell the Home Before Probate Closes?</h2>
      <p style="margin-bottom:16px;">Often yes. Virginia allows the executor — if authorized by the will or the court — to sell estate real property before probate closes. The typical process:</p>
      <ul style="margin-bottom:24px;padding-left:20px;line-height:2;">
        <li>List and market the property during probate</li>
        <li>Accept an offer subject to court confirmation if required</li>
        <li>Close once the court approves the sale</li>
      </ul>
      <p style="margin-bottom:24px;">This allows heirs to stop carrying costs — mortgage, taxes, insurance, maintenance — on the estate property while probate continues on the non-real-estate assets.</p>

      <h2 style="font-family:var(--font-playfair),Georgia,serif;font-size:1.6rem;font-weight:700;color:#1B2B4B;margin-bottom:16px;">What If There Is No Will?</h2>
      <p style="margin-bottom:16px;">Dying without a will — intestate — means Virginia's intestacy laws determine who inherits. The court appoints an administrator to manage the estate. Real estate still goes through probate and can still be sold, but the process is typically longer and requires court involvement in more steps.</p>
    `,
    faqs: [
      { q: 'Can I sell an inherited Virginia home before probate is complete?', a: 'In many cases yes. Virginia executors with proper authority can list and sell estate property during probate, with closing contingent on court confirmation. This avoids carrying costs while the rest of the estate settles.' },
      { q: 'What happens to a Virginia home during probate if no one is living there?', a: 'Vacant estate properties still incur costs — mortgage payments if any, taxes, insurance at higher vacant-home rates, and maintenance risk. Selling as early as probate allows stops those ongoing costs.' },
      { q: 'How do I start the probate process for a Virginia home?', a: 'File with the Circuit Court in the county or city where the deceased lived — for Winchester and Frederick County that is the Frederick County Circuit Court in Winchester. An estate attorney can handle the filing. I work alongside that process on the real estate side.' },
      { q: 'Can I sell a Frederick County or Winchester probate property as-is?', a: 'Yes — probate properties are sold as-is regularly. Courts and buyers both understand that estate properties often have deferred maintenance. Cash buyers and as-is listings both work without requiring repairs or cleanup.' },
    ],
  };

  return <ContentPage config={config} stats={null} lastCronRun={null} />;
}
