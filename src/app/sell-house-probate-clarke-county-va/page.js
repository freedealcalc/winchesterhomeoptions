import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House in Probate in Clarke County VA',
  description: 'Sell your Clarke County probate home fast for the most money. Dan White covers every option for the estate. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-probate-clarke-county-va' },
  openGraph: { title: 'Selling a House in Probate in Clarke County VA', description: 'Executor navigating probate in Clarke County? Dan White walks you through the court process and every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-probate-clarke-county-va' },
};

export default async function ClarkeCountyProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Clarke County', 'Clarke County');
  const config = {
    slug: 'sell-house-probate-clarke-county-va',
    city: null, county: 'Clarke County', type: 'county',
    h1: 'Selling a Clarke County Home Through Probate — <em>Executor Guidance Included.</em>',
    heroSub: 'As executor of a Clarke County estate, you answer to the court and to the other heirs, and a rural farmhouse or property with acreage near Berryville needs a plan that accounts for a smaller, more specific buyer pool. Dan White has guided executors through Clarke County probate sales for 20+ years, coordinating court timelines with buyers who are genuinely interested in this kind of property.',
    trustItems: ['20+ years of executor and probate sales in Clarke County', 'Licensed VA agent · Pearson Smith Realty', 'Works alongside Clarke County Circuit Court timelines', 'Handles liens, back taxes, and title issues at closing'],
    faqs: [
      { q: 'As executor, can I list a Clarke County probate property before the estate closes?', a: 'In most cases yes. Virginia allows an executor with proper authority to list and sell real estate during probate, with the sale contingent on required court confirmation. I coordinate the listing and closing around your court dates.' },
      { q: 'Is it harder to sell a probate property in a rural county like Clarke?', a: 'It can take longer without the right buyer relationships, since Clarke County has fewer active buyers than its neighbors. I already work with investors and buyers specifically interested in rural Clarke County estates and farmhouses.' },
      { q: 'What paperwork does the Clarke County court need to approve a probate sale?', a: 'Typically your letters of qualification showing authority to act, along with the signed contract for court confirmation where required. I coordinate directly with your attorney so the real estate side does not hold anything up.' },
      { q: 'The Clarke County probate property has liens or back taxes — is that a problem?', a: 'No. Liens and unpaid taxes are settled out of the sale proceeds at closing. This is standard in probate sales and will not stop the transaction, it simply gets accounted for in the final settlement.' },
      { q: 'How do I get started on a Clarke County probate sale?', a: 'Call Dan White at (571) 989-3269 with the basics: your role as executor, the property address, and where the estate stands in probate. You will have a clear next step within 15 minutes, at no cost.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
