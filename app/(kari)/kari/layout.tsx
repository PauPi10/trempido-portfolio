import type { Metadata } from "next"
import { KARI } from "@/lib/kari-content"
import { OG_IMAGE_URL } from "@/lib/kari-ld"
import { KariRoot } from "@/components/kari/root"
import "@/app/globals.css"
import "@/components/kari/kari.css"

const TITLE = "Kari — The AI Charisma Coach You Talk To, Out Loud"

export const metadata: Metadata = {
  metadataBase: new URL(KARI.siteUrl),
  title: {
    default: TITLE,
    template: "%s — Kari",
  },
  description: KARI.oneLiner,
  applicationName: "Kari",
  authors: [{ name: "Pau Pidelaserra", url: "https://www.trempido.com" }],
  creator: "Pau Pidelaserra",
  publisher: KARI.legalName,
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
    locale: "en_US",
    siteName: "Kari",
    title: TITLE,
    description: KARI.oneLiner,
    url: KARI.siteUrl,
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Kari — the AI charisma coach you talk to, out loud" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: KARI.oneLiner,
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
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
  category: "education",
  itunes: { appId: KARI.appStoreId },
}

export default function KariLayout({ children }: { children: React.ReactNode }) {
  return <KariRoot lang="en">{children}</KariRoot>
}
