import type { Metadata } from "next"
import { Bricolage_Grotesque, DM_Sans } from "next/font/google"
import { VOLANTE_BRAND } from "@/lib/volante-config"
import "./volante.css"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-volante-display",
  display: "swap",
})
const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-volante-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trempido.com"),
  applicationName: "Volante",
  icons: { icon: VOLANTE_BRAND.favicon, apple: VOLANTE_BRAND.appleIcon },
}

export default function VolanteLayout({ children }: { children: React.ReactNode }) {
  return <div className={`v-theme ${display.variable} ${body.variable}`}>{children}</div>
}
