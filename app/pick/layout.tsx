import type { Metadata } from "next"
import { Hanken_Grotesk } from "next/font/google"
import { PICK, FAQ } from "@/lib/pick-content"
import { JsonLd } from "@/components/pick/bits"
import "./pick.css"

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-pick-display",
  display: "swap",
})

const hankenBody = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pick-body",
  display: "swap",
})

const DESC =
  "Pick plans your week of dinners around your budget, your cravings and what's in your kitchen — then gives you a grocery list sorted by aisle. iPhone app, no account needed."

export const metadata: Metadata = {
  title: {
    default: "Pick — eat well, stress less",
    template: "%s — Pick",
  },
  description: DESC,
  keywords: [
    "meal planner app",
    "weekly dinner planner",
    "grocery list app",
    "budget meal planning",
    "what's for dinner app",
    "meal plan on a budget",
    "family dinner planner",
    "recipe app iphone",
  ],
  openGraph: {
    type: "website",
    siteName: "Pick",
    title: "Pick — eat well, stress less",
    description: DESC,
    url: PICK.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pick — eat well, stress less",
    description: DESC,
  },
  alternates: { canonical: PICK.siteUrl },
}

const APP_LD = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Pick",
  operatingSystem: "iOS 17",
  applicationCategory: "LifestyleApplication",
  description: DESC,
  url: PICK.siteUrl,
  installUrl: PICK.appStoreUrl,
  inLanguage: ["en", "es"],
  offers: [
    {
      "@type": "Offer",
      name: "Yearly subscription (3-day free trial)",
      price: "49.99",
      priceCurrency: "USD",
      category: "subscription",
    },
    {
      "@type": "Offer",
      name: "Weekly subscription",
      price: "9.99",
      priceCurrency: "USD",
      category: "subscription",
    },
  ],
  publisher: {
    "@type": "Organization",
    name: "TREMPIDO SL",
    email: PICK.supportEmail,
    url: "https://www.trempido.com",
  },
}

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q.en,
    acceptedAnswer: { "@type": "Answer", text: item.a.en },
  })),
}

export default function PickLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`pick-theme ${hanken.variable} ${hankenBody.variable}`}>
      <JsonLd data={[APP_LD, FAQ_LD]} />
      {children}
    </div>
  )
}
