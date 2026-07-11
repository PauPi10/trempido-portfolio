import type { MetadataRoute } from "next"

const BASE = "https://www.trempido.com"

const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 0.8, freq: "monthly" },
  // Kari
  { path: "/kari", priority: 1, freq: "weekly" },
  { path: "/kari/how-it-works", priority: 0.9, freq: "monthly" },
  { path: "/kari/roleplays", priority: 0.9, freq: "weekly" },
  { path: "/kari/skills", priority: 0.8, freq: "monthly" },
  { path: "/kari/science", priority: 0.8, freq: "monthly" },
  { path: "/kari/pricing", priority: 0.9, freq: "monthly" },
  { path: "/kari/faq", priority: 0.7, freq: "monthly" },
  { path: "/kari/privacy", priority: 0.2, freq: "yearly" },
  { path: "/kari/terms", priority: 0.2, freq: "yearly" },
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
