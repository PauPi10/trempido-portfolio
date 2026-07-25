import type { MetadataRoute } from "next"
import { COLLECTIONS, recipes } from "@/lib/pick-catalog"
import { isReleased } from "@/lib/pick-release"
import { abs, paths, storesFor, type Lang } from "@/lib/pick-content"

const BASE = "https://www.trempido.com"
const PICK_UPDATED = new Date("2026-07-25")

type Row = {
  path: string
  priority: number
  freq: MetadataRoute.Sitemap[number]["changeFrequency"]
  updated?: string
  /** Same page in the other language, so the sitemap carries hreflang too. */
  alt?: Partial<Record<Lang, string>>
}

const routes: Row[] = [
  { path: "/", priority: 0.8, freq: "monthly" },
  // Kari lives on https://karicoach.app (own sitemap there)
  { path: "/umi", priority: 0.5, freq: "monthly" },
  { path: "/umi/privacy", priority: 0.2, freq: "yearly" },
  { path: "/umi/terms", priority: 0.2, freq: "yearly" },
  // Pick legal + support (English only)
  { path: "/pick/privacy", priority: 0.2, freq: "yearly" },
  { path: "/pick/terms", priority: 0.2, freq: "yearly" },
  { path: "/pick/legal", priority: 0.2, freq: "yearly" },
  { path: "/pick/support", priority: 0.3, freq: "yearly" },
]

/** Every Pick page, with its counterpart in the other language. */
function pickRoutes(): Row[] {
  const rows: Row[] = []
  const pair = (en: string, es: string, priority: number, freq: Row["freq"]) => {
    const alt = { en, es }
    rows.push({ path: en, priority, freq, alt })
    rows.push({ path: es, priority, freq, alt })
  }

  pair(paths.home("en"), paths.home("es"), 1, "weekly")
  pair(paths.recipes("en"), paths.recipes("es"), 0.9, "weekly")

  for (const c of COLLECTIONS) {
    pair(paths.collection("en", c.slug.en), paths.collection("es", c.slug.es), 0.8, "weekly")
  }

  // Only the released batches go in the sitemap; the rest are noindex for now
  // (see lib/pick-release.ts).
  for (const r of recipes("en")) {
    if (!isReleased(r.id)) continue
    pair(paths.recipe("en", r.id), paths.recipe("es", r.id), 0.7, "monthly")
  }

  for (const lang of ["en", "es"] as Lang[]) {
    for (const s of storesFor(lang)) {
      const both = s.markets.length > 1
      rows.push({
        path: paths.store(lang, s.slug),
        priority: 0.6,
        freq: "monthly",
        alt: both ? { en: paths.store("en", s.slug), es: paths.store("es", s.slug) } : undefined,
      })
    }
  }

  return rows
}

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultModified = new Date("2026-07-11")
  return [...routes, ...pickRoutes()].map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: r.path.startsWith("/pick") ? PICK_UPDATED : r.updated ? new Date(r.updated) : defaultModified,
    changeFrequency: r.freq,
    priority: r.priority,
    ...(r.alt
      ? {
          alternates: {
            languages: {
              ...(r.alt.en ? { en: abs(r.alt.en) } : {}),
              ...(r.alt.es ? { "es-ES": abs(r.alt.es) } : {}),
              ...(r.alt.en ? { "x-default": abs(r.alt.en) } : {}),
            },
          },
        }
      : {}),
  }))
}
