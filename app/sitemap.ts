import type { MetadataRoute } from "next"

const BASE = "https://www.trempido.com"

const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 0.8, freq: "monthly" },
  // Kari lives on https://karicoach.app (own sitemap there)
  // Umi
  { path: "/umi", priority: 0.7, freq: "monthly" },
  { path: "/umi/privacy", priority: 0.2, freq: "yearly" },
  { path: "/umi/terms", priority: 0.2, freq: "yearly" },
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
