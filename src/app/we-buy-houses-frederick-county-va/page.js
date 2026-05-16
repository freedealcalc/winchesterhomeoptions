import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Frederick County VA | Every Option, Not Just One Cash Offer',
  description: 'Looking for cash home buyers in Frederick County VA? Sell your home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/we-buy-houses-frederick-county-va' },
  openGraph: { title: 'We Buy Houses Frederick County VA | Every Option, Not Just One Offer', description: 'Cash buyers in Frederick County VA? Dan White connects you with competing investors and shows you every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/we-buy-houses-frederick-county-va' },
};

export default async function WeBuyHousesFrederickCountyPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Frederick County', 'Frederick County');
  const config = {
    slug: 'we-buy-houses-frederick-county-va',
    city: null, county: 'Frederick County', type: 'county',
    h1: 'We Buy Houses in Frederick County VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Frederick County is Dan White\'s home market — 20+ years of buyer relationships throughout Winchester, Stephens City, Clearbrook, and Middletown. When you put a Frederick County property in front of that buyer pool with all options on the table, you get the best number this market will support.',
    trustItems: ['20+ years building buyer relationships in Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Primary market — knows every neighborhood and every buyer', 'Every option on the table · Free consultation'],
    faqs: [
      { q: 'Do you buy houses throughout Frederick County?', a: 'Yes — Winchester, Stephens City, Clearbrook, Middletown, Gore, and all communities in between. Frederick County is my primary market.' },
      { q: 'How fast can you close on a Frederick County home?', a: 'Cash buyers close in 7 to 21 days. As-is MLS listings in Frederick County have been moving in 2 to 4 weeks in current market conditions.' },
      { q: 'Is Frederick County a strong market for sellers right now?', a: 'Yes — buyer demand from Northern Virginia spillover has kept Frederick County competitive. Live market data is at the top of this page.' },
      { q: 'What types of Frederick County properties do you work with?', a: 'All types — single family, townhomes, older farmhouses, rural properties with acreage, multi-family, condos. Any condition. Any situation.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
