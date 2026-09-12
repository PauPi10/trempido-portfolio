// Shared Schema.org entities for karicoach.app. One Organization node with a
// stable @id, referenced by the WebSite, the MobileApplication and the
// Article on /science, so AI engines and Google resolve "Kari" to a single
// entity instead of a person with the same name.

import { KARI } from "./kari-content"

export const ORG_ID = `${KARI.siteUrl}/#organization`
export const APP_ID = `${KARI.siteUrl}/#app`
export const WEBSITE_ID = `${KARI.siteUrl}/#website`
export const OG_IMAGE_URL = `${KARI.siteUrl}/og/home`
export const ogImage = (variant: string) => `${KARI.siteUrl}/og/${variant}`

export const AUTHOR_LD = {
  "@type": "Person",
  "@id": "https://www.trempido.com/#pau",
  name: "Pau Pidelaserra",
  url: "https://www.trempido.com",
  jobTitle: "Founder and developer",
  worksFor: { "@id": ORG_ID },
}

export const ORG_LD = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Kari",
  legalName: KARI.legalName,
  url: KARI.siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${KARI.siteUrl}/images/kari/icon-192.png`,
    width: 192,
    height: 192,
  },
  email: KARI.supportEmail,
  founder: AUTHOR_LD,
  address: { "@type": "PostalAddress", addressLocality: "Barcelona", addressCountry: "ES" },
  sameAs: [KARI.appStoreUrl, "https://www.trempido.com"],
}

export const WEBSITE_LD = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Kari",
  url: KARI.siteUrl,
  inLanguage: ["en", "es"],
  publisher: { "@id": ORG_ID },
}

export const APP_LD = {
  "@type": "MobileApplication",
  "@id": APP_ID,
  name: "Kari",
  alternateName: ["Kari: Social Skills Rizz Coach", "Kari - Coach de Carisma", "Kari Coach"],
  operatingSystem: "iOS",
  applicationCategory: "EducationApplication",
  description: KARI.oneLiner,
  url: KARI.siteUrl,
  installUrl: KARI.appStoreUrl,
  sameAs: KARI.appStoreUrl,
  image: OG_IMAGE_URL,
  inLanguage: ["en", "es"],
  datePublished: KARI.datePublished,
  offers: {
    "@type": "Offer",
    category: "subscription",
    availability: "https://schema.org/InStock",
    url: KARI.appStoreUrl,
  },
  featureList: [
    "160+ voice roleplays with characters who talk back",
    "45 spoken lessons across 9 social skills",
    "Session report: filler words counted, silences measured, follow-up questions",
    "Four scored traits (Listening, Clarity, Confidence, Tone) and a charisma number",
  ],
  publisher: { "@id": ORG_ID },
  author: { "@id": AUTHOR_LD["@id"] },
}

export const SITE_LD = {
  "@context": "https://schema.org",
  "@graph": [ORG_LD, WEBSITE_LD, APP_LD],
}
