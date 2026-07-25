import type { Metadata } from "next"
import { PICK, abs, alternates, type Lang } from "./pick-content"

/**
 * Metadata for a Pick page. `paths` carries the URL of this page in each
 * language it exists in, which is what canonical + hreflang are built from.
 */
export function pickMeta({
  lang,
  title,
  description,
  paths,
  image,
  imageAlt,
}: {
  lang: Lang
  title: string
  description: string
  paths: Partial<Record<Lang, string>>
  image?: string
  imageAlt?: string
}): Metadata {
  const url = abs(paths[lang]!)
  const images = image ? [{ url: abs(image), width: 720, height: 720, alt: imageAlt ?? title }] : undefined
  return {
    title,
    description,
    alternates: alternates(lang, paths),
    openGraph: {
      type: "website",
      siteName: PICK.name,
      locale: lang === "es" ? "es_ES" : "en_US",
      title,
      description,
      url,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images ? { images } : {}),
    },
  }
}

// ── page-type builders ───────────────────────────────────────────────────────
// Titles and descriptions are written for search: the keyword first, the brand
// last, and the numbers straight from the catalog.

import { PICK as P, paths, dishImg, type Store } from "./pick-content"
import { catalogStats, collectionRecipes, money, tagLabel, type Collection, type Recipe } from "./pick-catalog"

export function homeMeta(lang: Lang) {
  const s = catalogStats(lang)
  return pickMeta({
    lang,
    title:
      lang === "es"
        ? "Pick — planificador de menús semanales y lista de la compra"
        : "Pick — weekly meal planner & grocery list app for iPhone",
    description:
      lang === "es"
        ? `Planifica la semana de cenas en un toque: ${s.count} recetas con coste estimado en tu supermercado, lista de la compra por pasillos y filtros de dieta y alergias. App para iPhone, sin cuenta.`
        : `Plan a week of dinners in one tap: ${s.count} recipes costed at your supermarket, a grocery list sorted by aisle, and filters for diets and allergies. iPhone app, no account needed.`,
    paths: { en: paths.home("en"), es: paths.home("es") },
  })
}

export function recipesIndexMeta(lang: Lang) {
  const s = catalogStats(lang)
  return pickMeta({
    lang,
    title:
      lang === "es"
        ? `Las ${s.count} recetas de cena de Pick`
        : `All ${s.count} dinner recipes in Pick`,
    description:
      lang === "es"
        ? `El catálogo completo: ${s.count} cenas con tiempo, coste por ración (media ${s.avgPriceLabel}), macros, ingredientes y pasos. Filtra por mood, dieta, proteína, tiempo o presupuesto.`
        : `The full catalog: ${s.count} dinners with cook time, cost per serving (${s.avgPriceLabel} average), macros, ingredients and steps. Browse by mood, diet, protein, time or budget.`,
    paths: { en: paths.recipes("en"), es: paths.recipes("es") },
  })
}

export function recipeMeta(lang: Lang, r: Recipe) {
  return pickMeta({
    lang,
    title:
      lang === "es"
        ? `${r.name} — receta de ${r.minutes} min`
        : `${r.name} — ${r.minutes}-minute recipe`,
    description:
      lang === "es"
        ? `${r.name}: ${r.minutes} minutos, ${money(lang, r.price)} por ración, ${r.kcal} kcal y ${r.protein} g de proteína. Ingredientes, pasos y macros de la app Pick.`
        : `${r.name}: ${r.minutes} minutes, ${money(lang, r.price)} a serving, ${r.kcal} kcal and ${r.protein}g of protein. Ingredients, method and macros from the Pick app.`,
    paths: { en: paths.recipe("en", r.id), es: paths.recipe("es", r.id) },
    image: dishImg(r.id, 720),
    imageAlt: r.name,
  })
}

export function collectionMeta(lang: Lang, c: Collection) {
  const n = collectionRecipes(lang, c).length
  return pickMeta({
    lang,
    title: `${c.title[lang]} — ${n} ${lang === "es" ? "recetas" : "recipes"}`,
    description: `${c.lead[lang]} ${
      lang === "es"
        ? `${n} recetas con tiempo, coste y macros, todas dentro de la app Pick.`
        : `${n} recipes with time, cost and macros, all inside the Pick app.`
    }`,
    paths: { en: paths.collection("en", c.slug.en), es: paths.collection("es", c.slug.es) },
  })
}

export function storeMeta(lang: Lang, s: Store) {
  return pickMeta({
    lang,
    title:
      lang === "es"
        ? `Menú semanal para ${s.name} con lista de la compra`
        : `Weekly meal plan for ${s.name}, with grocery list`,
    description:
      lang === "es"
        ? `Cinco cenas pensadas para comprar en ${s.name}, con el coste estimado y la lista de la compra ordenada por pasillo. Generado con la app Pick.`
        : `Five dinners to shop for at ${s.name}, with the estimated cost and a grocery list sorted by aisle. Built with the Pick app.`,
    paths: s.markets.length > 1
      ? { en: paths.store("en", s.slug), es: paths.store("es", s.slug) }
      : { [lang]: paths.store(lang, s.slug) },
  })
}

// re-exported so route files import one module
export { P as PICK_BRAND, tagLabel }
