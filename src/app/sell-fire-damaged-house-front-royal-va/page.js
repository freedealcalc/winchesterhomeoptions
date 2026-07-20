import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell a Fire Damaged House in Front Royal VA',
  description: 'Sell your fire damaged Front Royal home fast, as-is. Dan White connects you with buyers who purchase fire damaged homes. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-fire-damaged-house-front-royal-va' },
  openGraph: { title: 'Sell a Fire Damaged House in Front Royal VA', description: 'Fire damaged home in Front Royal? Buyers who purchase as-is — no repairs, no cleanup. Dan White walks you through every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-fire-damaged-house-front-royal-va' },
};

export default async function FrontRoyalFireDamagedPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Front Royal', 'Warren County');
  const config = {
    slug: 'sell-fire-damaged-house-front-royal-va',
    city: 'Front Royal', county: 'Warren County', type: 'city',
    h1: 'Selling a Fire Damaged Home in Front Royal — <em>As-Is, No Repairs.</em>',
    heroSub: 'A fire damaged home in Front Royal or Warren County feels like an impossible situation — repair costs you cannot afford, insurance complexity, a timeline that keeps moving. Dan White knows which buyers want these properties, what they will pay, and how to get you to closing without spending money you do not have.',
    trustItems: ['20+ years handling damaged properties in the Shenandoah Valley', 'Licensed VA agent · Pearson Smith Realty', 'Buyers who specifically want fire damaged properties as-is', 'Free consultation · Works alongside insurance claims'],
    faqs: [
      { q: 'Can I sell a fire damaged home in Front Royal without repairing it?', a: 'Yes. Investors and contractors actively seek fire damaged properties in Warren County. They buy as-is, handle all remediation after closing, and close fast. No repairs or cleanup required from you.' },
      { q: 'Should I rebuild or sell my fire damaged Front Royal home?', a: 'Depends on your insurance coverage, your equity position, and your timeline. I walk you through the financial picture on both — as-is value vs. rebuild cost — so you make the call with real numbers.' },
      { q: 'Can I sell a fire damaged Front Royal home with an open insurance claim?', a: 'Yes, though it requires coordination between the sale and the claim. I have navigated this before and can help you sequence it correctly.' },
      { q: 'How much will I get for a fire damaged property in Front Royal?', a: 'Depends on extent of damage, land value, and remediation cost. I assess the property honestly and give you a realistic range — not an inflated number to get a listing.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
