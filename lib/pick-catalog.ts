// The Pick recipe catalog, straight from the iOS app's bundled JSON
// (Pick/Resources/recipes.json + recipes_es.json — 349 dinners in each
// language, same ids on both sides so a recipe URL translates 1:1).
//
// SERVER ONLY. These two JSON files are ~1.5 MB together; never import this
// module from a "use client" component or they land in the browser bundle.

import en from "./pick-recipes.en.json"
import es from "./pick-recipes.es.json"
import type { Lang } from "./pick-content"

export type Ingredient = {
  name: string
  emoji: string
  qty: number
  unit: string
  /** Canonical English aisle key — translate with `aisle()`. */
  category: string
}

export type Recipe = {
  id: string
  name: string
  emoji: string
  /** Canonical English vibe key ("Protein Packed", …) — translate with `tagLabel()`. */
  tag: string
  minutes: number
  price: number
  kcal: number
  carbs: number
  protein: number
  fats: number
  dietary: string[]
  allergens: string[]
  proteins: string[]
  appliances: string[]
  ingredients: Ingredient[]
  instructions: string[]
}

const CATALOG: Record<Lang, Recipe[]> = {
  en: en as Recipe[],
  es: es as Recipe[],
}

export function recipes(lang: Lang): Recipe[] {
  return CATALOG[lang]
}

export function recipe(lang: Lang, id: string): Recipe | undefined {
  return CATALOG[lang].find((r) => r.id === id)
}

export const RECIPE_COUNT = CATALOG.en.length

// ── formatting ───────────────────────────────────────────────────────────────

/** "$3.22" in English, "3,43 €" in Spanish — same convention as Market.money(). */
export function money(lang: Lang, amount: number): string {
  return lang === "es"
    ? `${amount.toFixed(2).replace(".", ",")} €`
    : `$${amount.toFixed(2)}`
}

export function minutesLabel(lang: Lang, minutes: number): string {
  return lang === "es" ? `${minutes} min` : `${minutes} min`
}

/** Grocery aisle display name (recipes.json keeps the English key). */
export function aisle(lang: Lang, key: string): string {
  if (lang !== "es") return key
  return (
    {
      Produce: "Frutas y verduras",
      "Meat & Seafood": "Carne y pescado",
      "Dairy & Eggs": "Lácteos y huevos",
      Bakery: "Panadería",
      Pantry: "Despensa",
      Frozen: "Congelados",
    }[key] ?? key
  )
}

/** Aisle order used by the app's grocery list. */
export const AISLE_ORDER = ["Produce", "Meat & Seafood", "Dairy & Eggs", "Bakery", "Frozen", "Pantry"]

/** Vibe display name (recipes.json keeps the English key). */
export function tagLabel(lang: Lang, key: string): string {
  if (lang !== "es") return key
  return (
    {
      "Protein Packed": "Alto en proteína",
      "Healthy Comfort": "Sano y rico",
      Fakeaway: "Como a domicilio",
      "Family Favs": "Para la familia",
      "Gut Friendly": "Digestivo",
      "Speedy Meals": "Rápidas",
      "Low Calorie": "Bajas calorías",
    }[key] ?? key
  )
}

export function dietLabel(lang: Lang, key: string): string {
  const map: Record<string, [string, string]> = {
    vegan: ["Vegan", "Vegana"],
    vegetarian: ["Vegetarian", "Vegetariana"],
    pescatarian: ["Pescatarian", "Pescetariana"],
  }
  const pair = map[key]
  return pair ? pair[lang === "es" ? 1 : 0] : key
}

export function allergenLabel(lang: Lang, key: string): string {
  const map: Record<string, [string, string]> = {
    gluten: ["Gluten", "Gluten"],
    dairy: ["Dairy", "Lácteos"],
    egg: ["Egg", "Huevo"],
    soy: ["Soy", "Soja"],
    sesame: ["Sesame", "Sésamo"],
    fish: ["Fish", "Pescado"],
    shellfish: ["Shellfish", "Marisco"],
    nuts: ["Nuts", "Frutos secos"],
  }
  const pair = map[key]
  return pair ? pair[lang === "es" ? 1 : 0] : key
}

export function applianceLabel(lang: Lang, key: string): string {
  const map: Record<string, [string, string]> = {
    hob: ["Stove", "Fuego"],
    oven: ["Oven", "Horno"],
    airfryer: ["Air fryer", "Freidora de aire"],
    microwave: ["Microwave", "Microondas"],
  }
  const pair = map[key]
  return pair ? pair[lang === "es" ? 1 : 0] : key
}

/** Ingredient quantity as shown in the app: 0.75 cup → "¾ cup", 140 g → "140 g". */
export function qtyLabel(qty: number, unit: string): string {
  const fractions: Record<string, string> = {
    "0.25": "¼",
    "0.33": "⅓",
    "0.5": "½",
    "0.66": "⅔",
    "0.67": "⅔",
    "0.75": "¾",
  }
  const rounded = Math.round(qty * 100) / 100
  const whole = Math.floor(rounded)
  const rest = Math.round((rounded - whole) * 100) / 100
  const frac = fractions[String(rest)]
  let n: string
  if (frac) n = whole > 0 ? `${whole}${frac}` : frac
  else n = String(rounded % 1 === 0 ? rounded : rounded.toFixed(2).replace(/0$/, ""))
  return `${n} ${unit}`
}

/** ISO 8601 duration for Recipe schema (PT25M). */
export function isoDuration(minutes: number): string {
  return `PT${minutes}M`
}

// ── collections (the SEO hubs) ───────────────────────────────────────────────

export type Collection = {
  key: string
  /** URL slug per language — different words, same recipe set. */
  slug: Record<Lang, string>
  title: Record<Lang, string>
  /** H1 + <title> lead-in; kept honest and data-derived. */
  lead: Record<Lang, string>
  match: (r: Recipe) => boolean
  /** Grouping used by the recipe index and cross-links. */
  group: "vibe" | "diet" | "protein" | "time" | "free-from" | "budget"
}

const collection = (
  key: string,
  group: Collection["group"],
  slug: [string, string],
  title: [string, string],
  lead: [string, string],
  match: (r: Recipe) => boolean,
): Collection => ({
  key,
  group,
  slug: { en: slug[0], es: slug[1] },
  title: { en: title[0], es: title[1] },
  lead: { en: lead[0], es: lead[1] },
  match,
})

export const COLLECTIONS: Collection[] = [
  // ── by vibe (the app's own tags) ──
  collection(
    "speedy", "vibe",
    ["quick-dinner-recipes", "cenas-rapidas"],
    ["Quick dinner recipes", "Cenas rápidas"],
    [
      "Dinners the app tags Speedy Meals: short ingredient lists, one pan where possible, on the table fast.",
      "Las cenas que la app marca como Rápidas: pocos ingredientes, una sartén siempre que se pueda y a la mesa en nada.",
    ],
    (r) => r.tag === "Speedy Meals",
  ),
  collection(
    "protein", "vibe",
    ["high-protein-dinners", "cenas-altas-en-proteina"],
    ["High-protein dinners", "Cenas altas en proteína"],
    [
      "Every dinner Pick tags Protein Packed, with the grams per serving next to each one.",
      "Todas las cenas que Pick marca como altas en proteína, con los gramos por ración a la vista.",
    ],
    (r) => r.tag === "Protein Packed",
  ),
  collection(
    "fakeaway", "vibe",
    ["fakeaway-recipes", "recetas-tipo-takeaway"],
    ["Fakeaway recipes", "Recetas tipo takeaway"],
    [
      "Takeaway favourites cooked at home for a fraction of the delivery price — the estimated cost is on every card.",
      "Los clásicos del delivery hechos en casa por una fracción del precio — el coste estimado está en cada tarjeta.",
    ],
    (r) => r.tag === "Fakeaway",
  ),
  collection(
    "comfort", "vibe",
    ["healthy-comfort-food", "comfort-food-saludable"],
    ["Healthy comfort food", "Comfort food saludable"],
    [
      "Warm, filling dinners that still keep the macros in view.",
      "Cenas calientes y saciantes que no esconden los macros.",
    ],
    (r) => r.tag === "Healthy Comfort",
  ),
  collection(
    "gut", "vibe",
    ["gut-friendly-dinners", "cenas-digestivas"],
    ["Gut-friendly dinners", "Cenas digestivas"],
    [
      "Fibre-forward dinners built around vegetables, pulses and whole grains.",
      "Cenas con fibra por delante: verduras, legumbres y cereales integrales.",
    ],
    (r) => r.tag === "Gut Friendly",
  ),
  collection(
    "family", "vibe",
    ["family-dinner-ideas", "cenas-para-toda-la-familia"],
    ["Family dinner ideas", "Cenas para toda la familia"],
    [
      "Crowd-pleasers that scale cleanly to four, five or six servings in the app.",
      "Platos que gustan a todos y escalan sin problema a cuatro, cinco o seis raciones en la app.",
    ],
    (r) => r.tag === "Family Favs",
  ),

  // ── by diet ──
  collection(
    "vegan", "diet",
    ["vegan-dinner-recipes", "cenas-veganas"],
    ["Vegan dinner recipes", "Cenas veganas"],
    [
      "Dinners with no animal products at all, filtered by the same rule the app uses.",
      "Cenas sin ningún producto de origen animal, con el mismo filtro que usa la app.",
    ],
    (r) => r.dietary.includes("vegan"),
  ),
  collection(
    "vegetarian", "diet",
    ["vegetarian-dinner-recipes", "cenas-vegetarianas"],
    ["Vegetarian dinner recipes", "Cenas vegetarianas"],
    [
      "No meat and no fish — the set Pick plans from when you pick a vegetarian diet.",
      "Sin carne ni pescado: el conjunto con el que Pick planifica cuando eliges dieta vegetariana.",
    ],
    (r) => r.dietary.includes("vegetarian"),
  ),
  collection(
    "pescatarian", "diet",
    ["pescatarian-recipes", "cenas-pescetarianas"],
    ["Pescatarian recipes", "Cenas pescetarianas"],
    [
      "Fish and seafood welcome, meat off the table.",
      "Pescado y marisco sí, carne no.",
    ],
    (r) => r.dietary.includes("pescatarian"),
  ),

  // ── by protein ──
  collection(
    "chicken", "protein",
    ["chicken-dinner-recipes", "cenas-con-pollo"],
    ["Chicken dinner recipes", "Cenas con pollo"],
    [
      "Every chicken dinner in the catalog, with cook time, macros and estimated cost.",
      "Todas las cenas con pollo del catálogo, con tiempo, macros y coste estimado.",
    ],
    (r) => r.proteins.includes("chicken"),
  ),
  collection(
    "fish", "protein",
    ["fish-dinner-recipes", "cenas-con-pescado"],
    ["Fish dinner recipes", "Cenas con pescado"],
    [
      "Salmon, cod, prawns and the rest of the catalog's seafood dinners.",
      "Salmón, bacalao, gambas y el resto de cenas de pescado del catálogo.",
    ],
    (r) => r.proteins.includes("fish"),
  ),
  collection(
    "beef", "protein",
    ["beef-dinner-recipes", "cenas-con-ternera"],
    ["Beef dinner recipes", "Cenas con ternera"],
    [
      "Mince, steak and slow-cooked beef dinners, costed per serving.",
      "Picada, filete y guisos de ternera, con el coste por ración.",
    ],
    (r) => r.proteins.includes("beef"),
  ),
  collection(
    "pork", "protein",
    ["pork-dinner-recipes", "cenas-con-cerdo"],
    ["Pork dinner recipes", "Cenas con cerdo"],
    [
      "Pork, sausage, bacon and chorizo dinners from the catalog.",
      "Cenas con cerdo, salchicha, bacon y chorizo del catálogo.",
    ],
    (r) => r.proteins.includes("pork"),
  ),

  // ── by time ──
  collection(
    "under20", "time",
    ["20-minute-dinners", "cenas-en-20-minutos"],
    ["20-minute dinners", "Cenas en 20 minutos"],
    [
      "Everything in the catalog that's done in 20 minutes or less, start to plate.",
      "Todo lo que está listo en 20 minutos o menos, de empezar a servir.",
    ],
    (r) => r.minutes <= 20,
  ),
  collection(
    "under30", "time",
    ["30-minute-meals", "cenas-en-30-minutos"],
    ["30-minute meals", "Cenas en 30 minutos"],
    [
      "The weeknight core of the catalog: 30 minutes or less, every night of the week.",
      "El corazón de entre semana: 30 minutos o menos, cualquier noche.",
    ],
    (r) => r.minutes <= 30,
  ),

  // ── free-from ──
  collection(
    "gluten-free", "free-from",
    ["gluten-free-dinners", "cenas-sin-gluten"],
    ["Gluten-free dinners", "Cenas sin gluten"],
    [
      "Dinners with no gluten-containing ingredient in the recipe. Always check the label on what you buy.",
      "Cenas sin ningún ingrediente con gluten en la receta. Revisa siempre la etiqueta de lo que compres.",
    ],
    (r) => !r.allergens.includes("gluten"),
  ),
  collection(
    "dairy-free", "free-from",
    ["dairy-free-dinners", "cenas-sin-lactosa"],
    ["Dairy-free dinners", "Cenas sin lácteos"],
    [
      "Dinners with no dairy in the recipe. Always check the label on what you buy.",
      "Cenas sin lácteos en la receta. Revisa siempre la etiqueta de lo que compres.",
    ],
    (r) => !r.allergens.includes("dairy"),
  ),

  // ── by budget / calories ──
  collection(
    "cheap", "budget",
    ["cheap-dinner-ideas", "cenas-baratas"],
    ["Cheap dinner ideas", "Cenas baratas"],
    [
      "Dinners the app estimates under $4 a serving at a mid-range store.",
      "Cenas que la app estima por debajo de 4 € por ración en un súper de precio medio.",
    ],
    (r) => r.price < 4,
  ),
  collection(
    "lowcal", "budget",
    ["low-calorie-dinners", "cenas-bajas-en-calorias"],
    ["Low-calorie dinners", "Cenas bajas en calorías"],
    [
      "Dinners under 500 kcal a serving, with the full macro split on every recipe.",
      "Cenas por debajo de 500 kcal por ración, con el desglose de macros en cada receta.",
    ],
    (r) => r.kcal < 500,
  ),
]

export function collectionBySlug(lang: Lang, slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug[lang] === slug)
}

export function collectionRecipes(lang: Lang, c: Collection): Recipe[] {
  return recipes(lang).filter(c.match)
}

/** Collections a given recipe belongs to — used for cross-linking recipe pages. */
export function collectionsFor(r: Recipe): Collection[] {
  return COLLECTIONS.filter((c) => c.match(r))
}

// ── derived stats (honest proof for the landing) ─────────────────────────────

export function catalogStats(lang: Lang) {
  const all = recipes(lang)
  const avgPrice = all.reduce((s, r) => s + r.price, 0) / all.length
  const under30 = all.filter((r) => r.minutes <= 30).length
  return {
    count: all.length,
    avgPrice,
    avgPriceLabel: money(lang, Math.round(avgPrice * 100) / 100),
    under30,
    vegan: all.filter((r) => r.dietary.includes("vegan")).length,
    vegetarian: all.filter((r) => r.dietary.includes("vegetarian")).length,
    cheapest: money(lang, Math.min(...all.map((r) => r.price))),
  }
}

/**
 * Recipes related to `r`: same vibe first, then closest in price, never itself.
 * Deterministic so the static build is stable between deploys.
 */
export function relatedRecipes(lang: Lang, r: Recipe, limit = 6): Recipe[] {
  const rest = recipes(lang).filter((x) => x.id !== r.id)
  const score = (x: Recipe) =>
    (x.tag === r.tag ? 0 : 100) +
    Math.abs(x.price - r.price) +
    Math.abs(x.minutes - r.minutes) / 60
  return [...rest].sort((a, b) => score(a) - score(b) || a.id.localeCompare(b.id)).slice(0, limit)
}

/**
 * A stable five-night sample week, biased cheap and varied the way the app's
 * planner is: never the same vibe twice, never the same main protein twice.
 * `seed` keeps different store pages from all showing the same five dinners.
 */
export function sampleWeek(lang: Lang, seed: number, nights = 5): Recipe[] {
  const pool = [...recipes(lang)].sort((a, b) => a.price - b.price || a.id.localeCompare(b.id))
  const picked: Recipe[] = []
  const tags = new Set<string>()
  const proteins = new Set<string>()
  // Walk the cheap end of the catalog from an offset so each store differs.
  for (let i = 0; i < pool.length && picked.length < nights; i++) {
    const r = pool[(i + seed * 7) % pool.length]
    const p = r.proteins[0] ?? "veg"
    if (tags.has(r.tag) || proteins.has(p)) continue
    tags.add(r.tag)
    proteins.add(p)
    picked.push(r)
  }
  return picked
}

/** Ingredients of a set of recipes, merged and grouped by aisle like the app's list. */
export function groceryList(lang: Lang, list: Recipe[]) {
  const byAisle = new Map<string, Map<string, Ingredient>>()
  for (const r of list) {
    for (const ing of r.ingredients) {
      const aisleMap = byAisle.get(ing.category) ?? new Map<string, Ingredient>()
      const prev = aisleMap.get(ing.name)
      aisleMap.set(
        ing.name,
        prev && prev.unit === ing.unit ? { ...prev, qty: prev.qty + ing.qty } : prev ?? ing,
      )
      byAisle.set(ing.category, aisleMap)
    }
  }
  return AISLE_ORDER.filter((a) => byAisle.has(a)).map((a) => ({
    aisle: a,
    label: aisle(lang, a),
    items: [...byAisle.get(a)!.values()].sort((x, y) => x.name.localeCompare(y.name)),
  }))
}
