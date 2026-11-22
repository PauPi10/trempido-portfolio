import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, DM_Sans } from "next/font/google"
import { RONDI_BRAND } from "@/lib/rondi-config"
import "./rondi.css"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-rondi-display",
  display: "swap",
})
const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rondi-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trempido.com"),
  applicationName: "Rondi",
  icons: { icon: RONDI_BRAND.favicon, apple: RONDI_BRAND.appleIcon },
}

export const viewport: Viewport = { themeColor: RONDI_BRAND.colors.ivory }

export default function RondiLayout({ children }: { children: React.ReactNode }) {
  return <div className={`r-theme ${display.variable} ${body.variable}`}>{children}</div>
}
