import type { MetadataRoute } from "next"

// Sitemap for https://karicoach.app (served at karicoach.app/sitemap.xml
// via the host rewrite in next.config.mjs).
const BASE = "https://karicoach.app"

const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, freq: "weekly" },
  { path: "/how-it-works", priority: 0.9, freq: "monthly" },
  { path: "/roleplays", priority: 0.9, freq: "weekly" },
  { path: "/skills", priority: 0.8, freq: "monthly" },
  { path: "/science", priority: 0.8, freq: "monthly" },
  { path: "/pricing", priority: 0.9, freq: "monthly" },
  { path: "/faq", priority: 0.7, freq: "monthly" },
  { path: "/privacy", priority: 0.2, freq: "yearly" },
  { path: "/terms", priority: 0.2, freq: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-11")
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified,
    changeFrequency: r.freq,
    priority: r.priority,
  }))
}
