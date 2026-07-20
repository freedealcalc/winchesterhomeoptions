import { getMarketStats } from '../../lib/getMarketStats';
import ContentPage from '../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Frederick County VA | Every Option',
  description: 'Sell your Frederick County home fast for top dollar. Licensed VA agent Dan White covers every option — cash, as-is listing, and more. Free consultation.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-frederick-county-va' },
  openGraph: {
    title: 'Sell My House Fast in Frederick County VA | Every Option',
    description: 'Sell your Frederick County home fast for top dollar. Dan White goes over every option. Free consultation, no pressure.',
    url: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-frederick-county-va',
  },
};

export default async function FrederickCountyPage() {
  const { stats, lastCronRun } = await getMarketStats('county', 'Frederick County', 'Frederick County');

  const config = {
    slug: 'sell-my-house-fast-frederick-county-va',
    city: null,
    county: 'Frederick County',
    type: 'county',
    h1: 'Sell Your Frederick County Home Fast — <em>For the Most Money</em>',
    heroSub: 'Frederick County is Dan White\'s primary market. Winchester, Stephens City, Clearbrook, Middletown — he has worked this county for 20+ years, knows every neighborhood, and knows exactly what buyers are paying right now. Every option on the table. Honest numbers. No pressure.',
    trustItems: [
      '20+ years fixing, flipping, and listing in Frederick County',
      'Licensed VA agent · Pearson Smith Realty',
      'Primary market — Winchester to Stephens City to Middletown',
      'Any condition · Any situation · Free consultation',
    ],
    bodyContent: `
      <h2>Selling Fast and As-Is Anywhere in Frederick County</h2>
      <p>Whether your property is in Stephens City, Clearbrook, Middletown, or one of the smaller communities in between, a cash or as-is sale works the same way — the home sells in its current condition, with no repair list, no repainting, and no need to clear it out before showings. That's the core difference from a traditional MLS listing, where an appraisal or inspection can reopen negotiations over things you didn't plan to fix.</p>
      <p>The other advantage is certainty around timing. A financed buyer on the open market still has to clear a loan and an appraisal before the deal is final, and either one can delay or unravel a closing. A cash sale removes that risk entirely and lets you set a closing date that fits your situation — fast if you need it, or further out if you need time.</p>
      <h2>A Shenandoah Valley County With Deep Agricultural Roots</h2>
      <p>Frederick County surrounds the independent city of Winchester and stretches along the I-81 corridor through towns like Stephens City, Clearbrook, and Middletown. The county has long been known for its apple orchards, and that agricultural history still shows up in the mix of rural acreage, older farmhouses, and newer residential development that make up its housing stock today.</p>
    `,
    faqs: [
      {
        q: 'What areas of Frederick County do you serve?',
        a: 'All of Frederick County — Winchester city, Stephens City, Clearbrook, Middletown, Gore, Star Tannery, Cross Junction, and every community in between. Frederick County is my home market.',
      },
      {
        q: 'Is Frederick County a good market for sellers right now?',
        a: 'Frederick County has benefited from buyers priced out of Northern Virginia looking for Shenandoah Valley access with I-81 and I-66 convenience. Current market data is on this page. Conditions change — the live numbers above reflect where the market stands right now.',
      },
      {
        q: 'Can I sell a Frederick County home that needs significant repairs?',
        a: 'Yes — and you have more options than a single cash offer. I put distressed Frederick County properties in front of a large investor buyer pool. They compete on it. You get real numbers, not a single lowball.',
      },
      {
        q: 'What types of properties do you handle in Frederick County?',
        a: 'Single family homes, townhouses, older farmhouses, rural properties with acreage, condos, multi-family. Any condition — pristine, needs work, fire damaged, estate sales, vacant properties.',
      },
      {
        q: 'How do I find out what my Frederick County home is worth?',
        a: 'Call for a free assessment. I look at current sales data and your specific property\'s condition and location and give you an honest range across the different selling paths — not just one number.',
      },
    ],
  };

  return <ContentPage config={config} stats={stats} lastCronRun={lastCronRun} />;
}
