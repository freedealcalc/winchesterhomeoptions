import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Selling a House in Probate in Frederick County VA',
  description: 'Sell your Frederick County probate home fast for the most money. Dan White covers every option for the estate. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-house-probate-frederick-county-va' },
  openGraph: { title: 'Selling a House in Probate in Frederick County VA', description: 'Executor navigating probate in Frederick County? Dan White walks you through the court process and every option. Free consultation.', url: 'https://www.winchesterhomeoptions.com/sell-house-probate-frederick-county-va' },
};

export default async function FrederickCountyProbatePage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Frederick County', 'Frederick County');
  const config = {
    slug: 'sell-house-probate-frederick-county-va',
    city: null, county: 'Frederick County', type: 'county',
    h1: 'Selling a Frederick County Home Through Probate — <em>Executor Guidance Included.</em>',
    heroSub: 'As executor, you are responsible to the court and to the other heirs for getting this right, and Frederick County Circuit Court has its own process and pace for confirming a probate sale. Dan White has guided executors in Winchester, Stephens City, Clearbrook, and Middletown through that process for 20+ years, keeping filings, timelines, and buyers moving together instead of stalling out.',
    trustItems: ['20+ years of executor and probate sales in Frederick County', 'Licensed VA agent · Pearson Smith Realty', 'Works alongside Frederick County Circuit Court timelines', 'Handles liens, back taxes, and title issues at closing'],
    faqs: [
      { q: 'As executor, can I list a Frederick County probate home before the estate closes?', a: 'In most cases yes. Virginia lets an executor with proper authority list and sell real estate during probate, with the sale contingent on the required court confirmation. I coordinate the listing and closing timeline around your court dates.' },
      { q: 'What paperwork does the court need to approve a Frederick County probate sale?', a: 'Typically the letters of qualification showing you have authority to act, plus the signed contract for court confirmation where required. I work directly with your attorney so nothing gets held up on the real estate side.' },
      { q: 'How long does a probate sale usually take in Frederick County?', a: 'It depends on where the estate is in the process, but once you have authority to sell, a cash closing can happen in as little as 2 to 3 weeks. Ongoing carrying costs like insurance and utilities are one of the biggest reasons executors move quickly here.' },
      { q: 'The Frederick County probate property has liens or unpaid taxes — is that a problem?', a: 'No. Liens and back taxes are resolved out of the sale proceeds at closing. This is routine in probate sales and does not stop the transaction, it simply gets accounted for in the settlement statement.' },
      { q: 'How do I get started on a Frederick County probate sale?', a: 'Call Dan White at (571) 989-3269 with the basics: your role as executor, the property address, and where the estate stands in probate. You will have a clear next step within 15 minutes, at no cost.' },
    ],
  };
  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
