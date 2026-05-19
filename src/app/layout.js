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
  title: 'Sell My House Fast in Woodbridge VA | Woodbridge Home Options',
  description: 'Selling a home in Woodbridge, Dale City, Lake Ridge, Manassas, or Manassas Park? Get honest options from a licensed Virginia agent with 20+ years in Prince William County — military PCS friendly, access to thousands of cash buyers who buy homes in any condition. Free no-pressure consultation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z19VVG9D6G"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z19VVG9D6G');
        `}</Script>
      </head>
      <body className={`${playfair.variable} ${sourceSerif.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  )
}