import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'We Buy Houses Clarke County VA | Every Option Explained',
  description: 'Cash home buyers in Clarke County VA — but also every other option. Licensed agent Dan White helps you get the most money. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/we-buy-houses-clarke-county-va' },
  openGraph: { title: 'We Buy Houses Clarke County VA | Every Option Explained', description: 'Cash buyers in Clarke County VA? Dan White connects you with competing investors and shows you every option, from Berryville and beyond. Free consultation.', url: 'https://www.winchesterhomeoptions.com/we-buy-houses-clarke-county-va' },
};

export default async function WeBuyHousesClarkeCountyPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Clarke County', 'Clarke County');
  const config = {
    slug: 'we-buy-houses-clarke-county-va',
    city: null, county: 'Clarke County', type: 'county',
    h1: 'We Buy Houses in Clarke County VA — <em>But We Also Show You Every Other Option.</em>',
    heroSub: 'Clarke County is smaller and more rural than its neighbors, anchored by Berryville, and that means the buyer pool here looks different than in Winchester or Front Royal — fewer but more targeted investors, often looking specifically for land, farmhouses, or a quiet setting. Dan White brings those buyers into direct competition for your property rather than letting you settle for the first offer.',
    trustItems: ['20+ years covering Clarke County alongside Frederick & Warren', 'Licensed VA agent · Pearson Smith Realty', 'Direct access to investors seeking rural Clarke County properties', 'Every option on the table · Free consultation'],
    faqs: [
      { q: 'Do you buy houses throughout Clarke County, not just Berryville?', a: 'Yes — Berryville, Boyce, White Post, and the surrounding rural parts of Clarke County. I cover the whole county, not just the county seat.' },
      { q: 'Is there real investor demand for houses in a county as rural as Clarke?', a: 'Yes, though the pool is smaller and more specific than in Frederick or Warren County. Buyers here are often looking for acreage, farmhouses, or a quieter setting within reach of Northern Virginia, and I know which ones are active right now.' },
      { q: 'How fast can you close on a Clarke County property?', a: 'Cash buyers typically close in 7 to 21 days. Because Clarke County has less inventory competing for buyer attention, well-priced properties often move efficiently once the right buyer is found.' },
      { q: 'What types of Clarke County properties do you work with?', a: 'Single family homes, older farmhouses, properties with acreage, and homes needing significant work. Rural condition and remote settings are not a problem for the buyers I work with.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
