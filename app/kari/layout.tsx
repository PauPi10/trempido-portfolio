import type { Metadata } from "next"
import { Fraunces, Hanken_Grotesk } from "next/font/google"
import { KARI } from "@/lib/kari-content"
import { JsonLd } from "@/components/kari/bits"
import "./kari.css"

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

export const metadata: Metadata = {
  title: {
    default: "Kari — The AI Charisma Coach You Talk To, Out Loud",
    template: "%s — Kari",
  },
  description: KARI.oneLiner,
  keywords: [
    "AI charisma coach",
    "charisma app",
    "social skills app",
    "practice conversations with AI",
    "AI roleplay conversation practice",
    "public speaking practice app",
    "how to be more charismatic",
    "conversation skills training",
    "voice AI coach",
    "social anxiety practice app",
  ],
  openGraph: {
    type: "website",
    siteName: "Kari",
    title: "Kari — The AI Charisma Coach You Talk To, Out Loud",
    description: KARI.oneLiner,
    url: KARI.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kari — The AI Charisma Coach You Talk To, Out Loud",
    description: KARI.oneLiner,
  },
  alternates: { canonical: KARI.siteUrl },
  icons: {
    icon: [
      { url: "/images/kari/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/kari/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/images/kari/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/kari/apple-icon.png",
  },
}

const APP_LD = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Kari",
  operatingSystem: "iOS",
  applicationCategory: "EducationApplication",
  description: KARI.oneLiner,
  url: KARI.siteUrl,
  installUrl: KARI.appStoreUrl,
  inLanguage: ["en", "es"],
  offers: {
    "@type": "Offer",
    category: "subscription",
    availability: "https://schema.org/PreOrder",
  },
  publisher: {
    "@type": "Person",
    name: "Pau Pidelaserra",
    email: KARI.supportEmail,
    url: "https://www.trempido.com",
  },
}

export default function KariLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`kari-theme ${fraunces.variable} ${hanken.variable}`}>
      <JsonLd data={APP_LD} />
      {children}
    </div>
  )
}
