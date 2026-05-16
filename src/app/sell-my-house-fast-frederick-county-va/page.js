import { getMarketStats } from '../../../lib/getMarketStats';
import ContentPage from '../../../components/ContentPage';

export const revalidate = 2592000;

export const metadata = {
  title: 'Sell My House Fast in Frederick County VA | Every Option, Honest Advice',
  description: 'Sell your Frederick County home fast and walk away with the most money your situation allows. Licensed Virginia agent Dan White goes over every option — cash sale, as-is listing, wholetail, and more — so you make the right call. Free consultation, no pressure.',
  alternates: { canonical: 'https://www.winchesterhomeoptions.com/sell-my-house-fast-frederick-county-va' },
  openGraph: {
    title: 'Sell My House Fast in Frederick County VA | Every Option, Honest Advice',
    description: 'Sell your Frederick County home fast and walk away with the most money your situation allows. Dan White goes over every option. Free consultation, no pressure.',
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
