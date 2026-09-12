import type { Metadata } from "next"
import { KARI } from "@/lib/kari-content"
import { ogImage } from "@/lib/kari-ld"
import { KariRoot } from "@/components/kari/root"
import "@/app/globals.css"
import "@/components/kari/kari.css"

const TITLE = "Kari — Coach de carisma por voz: entrena hablando, no leyendo"
const DESCRIPTION =
  "Kari es una app de iPhone que entrena tu carisma y tus habilidades sociales hablando en voz alta con una IA: más de 160 roleplays, 45 lecciones por voz y un informe que mide tu conducta. Con base científica."

export const metadata: Metadata = {
  metadataBase: new URL(KARI.siteUrl),
  title: { default: TITLE, template: "%s — Kari" },
  description: DESCRIPTION,
  applicationName: "Kari",
  authors: [{ name: "Pau Pidelaserra", url: "https://www.trempido.com" }],
  publisher: KARI.legalName,
  keywords: [
    "coach de carisma",
    "app de carisma",
    "entrenar habilidades sociales",
    "practicar conversaciones con IA",
    "roleplay por voz",
    "hablar en público",
    "ligar y citas",
    "negociación",
    "confianza social",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Kari",
    title: TITLE,
    description: DESCRIPTION,
    url: `${KARI.siteUrl}/es`,
    images: [{ url: ogImage("es"), width: 1200, height: 630, alt: "Kari, la coach de carisma por voz" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [ogImage("es")] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: `${KARI.siteUrl}/es`,
    languages: { en: KARI.siteUrl, es: `${KARI.siteUrl}/es`, "x-default": KARI.siteUrl },
  },
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

export default function KariEsLayout({ children }: { children: React.ReactNode }) {
  return <KariRoot lang="es">{children}</KariRoot>
}
