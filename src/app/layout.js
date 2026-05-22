import { Playfair_Display, Source_Serif_4, DM_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
  axes: ['opsz'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata = {
  title: 'Winchester Home Options | Know Your Options Before You Sell',
  description: 'Selling a home in Winchester, Frederick County, Clarke, or Warren County? Get honest options from a licensed Virginia agent with 20+ years in the Shenandoah Valley and access to thousands of cash buyers who buy homes in any condition. Free no-pressure consultation.',
  verification: {
    google: 'QJeWbFQ0DeLC5DhjyIdr6Ou8KnlVclEac70QnM-LdxE',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NC1H5EVHDR"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NC1H5EVHDR');
        `}</Script>
      </head>
      <body className={`${playfair.variable} ${sourceSerif.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  )
}