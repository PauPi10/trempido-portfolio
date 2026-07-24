import type { MetadataRoute } from "next"

const BASE = "https://www.trempido.com"

const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"]; updated?: string }[] = [
  { path: "/", priority: 0.8, freq: "monthly" },
  // Kari lives on https://karicoach.app (own sitemap there)
  // Umi
  { path: "/umi", priority: 0.7, freq: "monthly" },
  { path: "/umi/privacy", priority: 0.2, freq: "yearly" },
  { path: "/umi/terms", priority: 0.2, freq: "yearly" },
  // Pick
  { path: "/pick", priority: 0.7, freq: "monthly", updated: "2026-07-24" },
  { path: "/pick/privacy", priority: 0.2, freq: "yearly", updated: "2026-07-24" },
  { path: "/pick/terms", priority: 0.2, freq: "yearly", updated: "2026-07-24" },
  { path: "/pick/legal", priority: 0.2, freq: "yearly", updated: "2026-07-24" },
  { path: "/pick/support", priority: 0.3, freq: "yearly", updated: "2026-07-24" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultModified = new Date("2026-07-11")
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: r.updated ? new Date(r.updated) : defaultModified,
    changeFrequency: r.freq,
    priority: r.priority,
  }))
}
