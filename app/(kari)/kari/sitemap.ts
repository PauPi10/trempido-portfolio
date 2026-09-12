import type { MetadataRoute } from "next"
import { KARI } from "@/lib/kari-content"

// Sitemap for https://karicoach.app (served at karicoach.app/sitemap.xml
// via the host rewrite in next.config.mjs). `lastmod` is per page: bump the
// date of the page you actually changed, not all of them.
const BASE = KARI.siteUrl
const LAUNCH = "2026-07-11"
const REVIEW = KARI.lastReviewed

const HOME_ALTERNATES = { languages: { en: BASE, es: `${BASE}/es`, "x-default": BASE } }

const routes: {
  path: string
  priority: number
  freq: MetadataRoute.Sitemap[number]["changeFrequency"]
  lastmod: string
  alternates?: MetadataRoute.Sitemap[number]["alternates"]
}[] = [
  { path: "", priority: 1, freq: "weekly", lastmod: REVIEW, alternates: HOME_ALTERNATES },
  { path: "/es", priority: 0.9, freq: "weekly", lastmod: REVIEW, alternates: HOME_ALTERNATES },
  { path: "/how-it-works", priority: 0.9, freq: "monthly", lastmod: LAUNCH },
  { path: "/roleplays", priority: 0.9, freq: "weekly", lastmod: REVIEW },
  { path: "/roleplays/dating", priority: 0.8, freq: "monthly", lastmod: REVIEW },
  { path: "/roleplays/career", priority: 0.8, freq: "monthly", lastmod: REVIEW },
  { path: "/roleplays/persuasion", priority: 0.8, freq: "monthly", lastmod: REVIEW },
  { path: "/roleplays/everyday", priority: 0.8, freq: "monthly", lastmod: REVIEW },
  { path: "/roleplays/relationships", priority: 0.8, freq: "monthly", lastmod: REVIEW },
  { path: "/compare", priority: 0.7, freq: "monthly", lastmod: REVIEW },
  { path: "/skills", priority: 0.8, freq: "monthly", lastmod: LAUNCH },
  { path: "/science", priority: 0.8, freq: "monthly", lastmod: REVIEW },
  { path: "/pricing", priority: 0.9, freq: "monthly", lastmod: LAUNCH },
  { path: "/faq", priority: 0.7, freq: "monthly", lastmod: REVIEW },
  { path: "/privacy", priority: 0.2, freq: "yearly", lastmod: "2026-07-10" },
  { path: "/terms", priority: 0.2, freq: "yearly", lastmod: "2026-07-12" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(r.lastmod),
    changeFrequency: r.freq,
    priority: r.priority,
    ...(r.alternates ? { alternates: r.alternates } : {}),
  }))
}
