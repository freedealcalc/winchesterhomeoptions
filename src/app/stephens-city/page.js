import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House in Stephens City VA | Frederick County',
  description: 'Selling in Stephens City VA? Dan White covers every option — cash, as-is, wholetail. Frederick County specialist. Free, no-pressure consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/stephens-city' },
  openGraph: {
    title: 'Sell My House in Stephens City VA | Frederick County Home Options',
    description: 'Know every option before selling your Stephens City home. Free consultation with Dan White — no pressure, no obligation.',
    url: 'https://www.winchesterhomeoptions.com/stephens-city',
  },
};

export default async function StephensCityHubPage() {
  const { stats, lastCronRun } = await getMarketStats('city', 'Stephens City', 'Frederick County');

  const config = {
    slug: 'stephens-city',
    city: 'Stephens City',
    county: 'Frederick County',
    type: 'city',
    h1: 'Sell Your Stephens City Home — <em>Know Your Options First</em>',
    heroSub: 'Stephens City sits at the crossroads of I-81 and Route 277 — solid location, active buyer pool, and more options than most homeowners realize. Dan White has worked Frederick County for 20+ years and will walk you through every realistic path before you make any decision.',
    trustItems: [
      '20+ years in Frederick County & the Shenandoah Valley',
      'Licensed VA agent · Pearson Smith Realty',
      'Access to thousands of cash buyers — they compete, you win',
      'Any condition · Any situation · No judgment',
    ],
    faqs: [
      {
        q: 'What options do I have to sell my Stephens City home?',
        a: 'Cash sale (fast, as-is, below market), as-is MLS listing (more buyers, often higher net), or wholetail (light cleanup, MLS and cash buyer pool). I walk you through the numbers on each before you decide.',
      },
      {
        q: 'How active is the Stephens City market?',
        a: 'Stephens City has benefited from strong demand along the I-81 corridor and spillover from Winchester. The live market data on this page reflects current Frederick County MLS conditions.',
      },
      {
        q: 'Do I need to fix anything before selling in Stephens City?',
        a: 'No. Cash buyers take properties as-is. As-is MLS listings reach buyers who specifically want properties to work on. You choose the path that fits — no repairs required.',
      },
      {
        q: 'How quickly can I sell my Stephens City home?',
        a: 'Cash closings run 7–21 days. As-is MLS listings in the current Frederick County market often go under contract within 2–4 weeks. Your timeline is the first question I ask.',
      },
      {
        q: 'What if I have liens, back taxes, or code violations on my Stephens City property?',
        a: 'All very solvable. Liens and taxes resolve at closing from proceeds. Code violations get disclosed and priced accordingly. Call and we sort out your specific situation quickly.',
      },
      {
        q: 'Do you serve all of Frederick County?',
        a: 'Yes — Stephens City, Winchester, Clearbrook, Middletown, and all of Frederick County. Also Warren County (Front Royal) and Clarke County (Berryville).',
      },
      {
        q: 'Is the consultation really free?',
        a: 'Yes. Free options review, no obligation, no pressure. I only make money if we work together — so there\'s no cost to the conversation.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
