import type { Metadata } from "next"
import { Hanken_Grotesk } from "next/font/google"
import { PICK } from "@/lib/pick-content"
import "./pick.css"

// One family, one call — both display and body weights come from the same
// request so the browser downloads a single font file set.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-pick",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(PICK.origin),
  title: {
    default: "Pick — weekly meal planner & grocery list for iPhone",
    template: "%s — Pick",
  },
  applicationName: PICK.name,
}

export default function PickLayout({ children }: { children: React.ReactNode }) {
  return <div className={`pick-theme ${hanken.variable}`}>{children}</div>
}
