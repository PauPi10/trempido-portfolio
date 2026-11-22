// ─────────────────────────────────────────────────────────────────────────────
// Rondi (formerly «Volante») · the ONLY file to touch for store id and brand
// assets.
//
// • App Store: paste the numeric id when the app is LIVE on the store
//   (App Store Connect id is 6834824219, created 14-nov-2026). While it is
//   empty every "Download" button turns into a non-clickable
//   "Coming soon to the App Store" badge and no store URL is printed anywhere
//   (JSON-LD included).
// • Brand: the logo files come from ~/Desktop/Rondi - Logos and live in
//   public/rondi/. Change the paths here and nothing else changes.
// ─────────────────────────────────────────────────────────────────────────────

export const RONDI_NAME = "Rondi"

/** Leave empty until the app is LIVE, then set it to "6834824219". */
export const RONDI_APP_STORE_ID = ""

/** Section root on www.trempido.com. The old /volante… URLs 308 here (next.config.mjs). */
export const RONDI_BASE_PATH = "/rondi"
export const RONDI_ORIGIN = "https://www.trempido.com"

/** ISO date of the last content change of the Rondi pages (shown on the page, sitemap, JSON-LD). */
export const RONDI_UPDATED = "2026-11-22"

export const RONDI_BRAND = {
  /** Rounded app icon (SVG) used in the nav, footer and as favicon. */
  icon: "/rondi/rondi-icono-redondeado.svg",
  /** Square icon in PNG (512 px), used in JSON-LD. */
  iconPng: "/rondi/rondi-icono-512.png",
  /** Wordmark, plum ink on light / ivory on dark. */
  wordmarkInk: "/rondi/rondi-logotipo-tinta.svg",
  wordmarkIvory: "/rondi/rondi-logotipo-marfil.svg",
  /** Icon + wordmark lockup. */
  lockup: "/rondi/rondi-logo-horizontal.svg",
  /** Social preview image (1200×630) per page language (scripts: see public/rondi/og/). */
  ogImage: {
    en: "/rondi/og/og-en.jpg",
    es: "/rondi/og/og-es.jpg",
    de: "/rondi/og/og-de.jpg",
    it: "/rondi/og/og-it.jpg",
    nl: "/rondi/og/og-nl.jpg",
  },
  favicon: "/rondi/rondi-icono-redondeado.svg",
  faviconPng: "/rondi/favicon-48.png",
  appleIcon: "/rondi/apple-icon.png",
  /** Brand colours (match the app's DesignSystem/Theme.swift). */
  colors: {
    ivory: "#FBF7F2",
    ink: "#221C26",
    inkDim: "#6E6470",
    coral: "#F07A5F",
    coralDeep: "#D9573C",
    sage: "#A9D4BB",
    sageTint: "#E4EFE8",
    blush: "#F6E3DA",
    asphalt: "#4B4150",
    edge: "#EDE2D8",
  },
} as const

export const rondiAppStoreUrl = RONDI_APP_STORE_ID
  ? `https://apps.apple.com/app/id${RONDI_APP_STORE_ID}`
  : ""
