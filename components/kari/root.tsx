/* Root document for the karicoach.app pages. Each language lives in its own
   Next route group with its own root layout, so <html lang> is correct for
   crawlers that do not run JavaScript (which is every AI crawler). */

import { Fraunces, Hanken_Grotesk, Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "./bits"
import { SITE_LD } from "@/lib/kari-ld"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-kari-display",
  display: "swap",
  axes: ["opsz"],
})

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-kari-body",
  display: "swap",
})

// The legal pages (/privacy, /terms) use the portfolio's Tailwind/shadcn
// styling and its font variables, so both families stay available.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export function KariRoot({ lang, children }: { lang: "en" | "es"; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-body antialiased`}>
        <div className={`kari-theme ${fraunces.variable} ${hanken.variable}`}>
          <JsonLd data={SITE_LD} />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
