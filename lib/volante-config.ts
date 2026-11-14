// ─────────────────────────────────────────────────────────────────────────────
// Volante · the ONLY file to touch for store id and brand assets.
//
// • App Store: paste the numeric id when App Store Connect gives it
//   (e.g. "6799999999"). While it is empty every "Download" button turns into
//   a non-clickable "Coming soon to the App Store" badge.
// • Brand: when the final logo / og image / favicon exist, drop them in
//   public/images/volante/ and change the paths here. Nothing else changes.
// ─────────────────────────────────────────────────────────────────────────────

// App Store Connect id is 6834824219 (created 14-nov-2026). Leave this empty
// until the app is LIVE on the store, then set it to "6834824219".
export const VOLANTE_APP_STORE_ID = ""

export const VOLANTE_BRAND = {
  /** Square app icon used in the nav, footer and JSON-LD (webp, ≥256 px). */
  logo: "/images/volante/logo.webp",
  /** Same icon in PNG (≥512 px), used in JSON-LD. */
  logoPng: "/images/volante/logo.png",
  /** Social preview image (1200×630) per page language. From the Branding
   *  agent (analisis/branding/web/og-image-<lang>.png, converted to JPEG). */
  ogImage: {
    en: "/images/volante/og-en.jpg",
    es: "/images/volante/og-es.jpg",
    de: "/images/volante/og-de.jpg",
    it: "/images/volante/og-it.jpg",
    nl: "/images/volante/og-nl.jpg",
  },
  /** Favicon + apple-touch icon for the /volante pages. */
  favicon: "/images/volante/favicon-32.png",
  appleIcon: "/images/volante/apple-icon.png",
  /** Brand colours (match Volante/DesignSystem/Theme.swift). */
  colors: {
    ivory: "#FBF7F2",
    ink: "#221C26",
    inkDim: "#6E6470",
    coral: "#F07A5F",
    coralDeep: "#D9573C",
  },
} as const

export const volanteAppStoreUrl = VOLANTE_APP_STORE_ID
  ? `https://apps.apple.com/app/id${VOLANTE_APP_STORE_ID}`
  : ""
