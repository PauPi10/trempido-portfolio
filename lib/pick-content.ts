// Brand facts, URLs and every string on the Pick marketing pages, in both
// languages. Everything here is checked against the iOS app (Models.swift,
// PaywallView.swift, recipes.json) — if the app changes, this changes.
//
// Safe to import from anywhere: no recipe JSON lives here (see pick-catalog.ts).

export type Lang = "en" | "es"
export const LANGS: Lang[] = ["en", "es"]

export const PICK = {
  name: "Pick",
  origin: "https://www.trempido.com",
  appStoreUrl: "https://apps.apple.com/app/id6794273453",
  tagline: "eat well, stress less",
  supportEmail: "hello@trempido.com",
  /** Both catalogs ship 349 dinners (recipes.json / recipes_es.json). */
  recipeCount: 349,
  company: {
    name: "TREMPIDO SL",
    taxId: "B75830257",
    address: "Carrer Nil Fabra 16, Escalera A, Ático 2ª, 08012 Barcelona, España",
  },
} as const

/**
 * Real App Store prices per storefront. The Spanish tier is NOT the dollar
 * figure converted — it is set separately in App Store Connect, so it gets its
 * own numbers here. Showing the wrong one is a 3.1.2 problem.
 */
export const PRICING: Record<Lang, {
  trialDays: number
  yearly: string
  yearlyWeekly: string
  weekly: string
  storefront: string
}> = {
  en: { trialDays: 3, yearly: "$49.99", yearlyWeekly: "$0.96", weekly: "$9.99", storefront: "US App Store" },
  es: { trialDays: 3, yearly: "39,99 €", yearlyWeekly: "0,77 €", weekly: "9,99 €", storefront: "App Store de España" },
}

// ── supermarkets (Supermarket enum in Models.swift) ──────────────────────────

export type Store = {
  slug: string
  name: string
  /** File in /public/images/pick/stores. */
  logo: string
  markets: Lang[]
}

export const STORES: Store[] = [
  // US storefront
  { slug: "walmart", name: "Walmart", logo: "walmart", markets: ["en"] },
  { slug: "kroger", name: "Kroger", logo: "kroger", markets: ["en"] },
  { slug: "target", name: "Target", logo: "target", markets: ["en"] },
  { slug: "safeway", name: "Safeway", logo: "safeway", markets: ["en"] },
  { slug: "publix", name: "Publix", logo: "publix", markets: ["en"] },
  { slug: "trader-joes", name: "Trader Joe's", logo: "traderjoes", markets: ["en"] },
  { slug: "costco", name: "Costco", logo: "costco", markets: ["en"] },
  { slug: "whole-foods", name: "Whole Foods", logo: "wholefoods", markets: ["en"] },
  // Spain
  { slug: "mercadona", name: "Mercadona", logo: "mercadona", markets: ["es"] },
  { slug: "carrefour", name: "Carrefour", logo: "carrefour", markets: ["es"] },
  { slug: "lidl", name: "Lidl", logo: "lidl", markets: ["es"] },
  { slug: "dia", name: "Dia", logo: "dia", markets: ["es"] },
  { slug: "eroski", name: "Eroski", logo: "eroski", markets: ["es"] },
  { slug: "alcampo", name: "Alcampo", logo: "alcampo", markets: ["es"] },
  { slug: "el-corte-ingles", name: "El Corte Inglés", logo: "elcorteingles", markets: ["es"] },
  { slug: "consum", name: "Consum", logo: "consum", markets: ["es"] },
  // Both storefronts
  { slug: "aldi", name: "Aldi", logo: "aldi", markets: ["en", "es"] },
]

export const storesFor = (lang: Lang) => STORES.filter((s) => s.markets.includes(lang))
export const storeBySlug = (slug: string) => STORES.find((s) => s.slug === slug)
export const storeLogo = (s: Store) => `/images/pick/stores/${s.logo}.webp`

// ── URLs ─────────────────────────────────────────────────────────────────────

const seg = (lang: Lang, en: string, es: string) => (lang === "es" ? `/pick/es/${es}` : `/pick/${en}`)

export const paths = {
  home: (lang: Lang) => (lang === "es" ? "/pick/es" : "/pick"),
  recipes: (lang: Lang) => seg(lang, "recipes", "recetas"),
  recipe: (lang: Lang, id: string) => `${seg(lang, "recipes", "recetas")}/${id}`,
  collection: (lang: Lang, slug: string) => `${seg(lang, "collections", "colecciones")}/${slug}`,
  stores: (lang: Lang) => seg(lang, "supermarkets", "supermercados"),
  store: (lang: Lang, slug: string) => `${seg(lang, "supermarkets", "supermercados")}/${slug}`,
  // Legal pages exist in both languages: the EULA is the contract the user is
  // agreeing to, so a Spanish buyer gets it in Spanish.
  privacy: (lang: Lang) => (lang === "es" ? "/pick/es/privacidad" : "/pick/privacy"),
  terms: (lang: Lang) => (lang === "es" ? "/pick/es/terminos" : "/pick/terms"),
  legal: (lang: Lang) => (lang === "es" ? "/pick/es/aviso-legal" : "/pick/legal"),
  support: "/pick/support",
}

export const abs = (path: string) => `${PICK.origin}${path}`

/**
 * canonical + hreflang for a page that exists in both languages. Pages with no
 * counterpart (a US-only store, say) pass only their own language.
 */
export function alternates(lang: Lang, byLang: Partial<Record<Lang, string>>) {
  const languages: Record<string, string> = {}
  if (byLang.en) languages["en"] = abs(byLang.en)
  if (byLang.es) languages["es-ES"] = abs(byLang.es)
  if (byLang.en) languages["x-default"] = abs(byLang.en)
  return { canonical: abs(byLang[lang]!), languages }
}

/** Photos published from the app's asset catalog, two widths. */
export const dishImg = (id: string, size: 360 | 720 = 720) => `/images/pick/dishes/${id}-${size}.webp`

// ── copy ─────────────────────────────────────────────────────────────────────

type Copy = { en: string; es: string }
const c = (en: string, es: string): Copy => ({ en, es })

export const T = {
  // nav / chrome
  navHow: c("How it works", "Cómo funciona"),
  navFeatures: c("Features", "Características"),
  navRecipes: c("Recipes", "Recetas"),
  navStores: c("Supermarkets", "Supermercados"),
  navPricing: c("Pricing", "Precios"),
  navFaq: c("FAQ", "Preguntas"),
  getApp: c("Get the app", "Descargar"),
  menu: c("Menu", "Menú"),

  // hero
  heroBadge: c("For iPhone", "Para iPhone"),
  heroTitleA: c("eat well,", "come bien,"),
  heroTitleB: c("stress less", "sin estrés"),
  heroKicker: c(
    "Weekly meal planner & grocery list for iPhone",
    "Planificador de menús semanales y lista de la compra para iPhone",
  ),
  heroLead: c(
    "Pick plans your week of dinners around your budget, your cravings and what's already in your kitchen — then hands you a grocery list sorted by aisle.",
    "Pick planifica tu semana de cenas según tu presupuesto, tus antojos y lo que ya tienes en la cocina, y te da la lista de la compra ordenada por pasillo.",
  ),
  heroCta: c("Get Pick", "Descargar Pick"),
  heroCta2: c("See how it works", "Ver cómo funciona"),
  metaRecipes: c("dinner recipes", "recetas de cena"),
  metaNoAccount: c("no account needed", "sin cuenta"),
  metaOffline: c("works offline", "funciona sin conexión"),

  // hero plan artifact
  planTitle: c("your week", "tu semana"),
  planFoot: c("Grocery list ready", "Lista de la compra lista"),

  // proof band
  proofRecipes: c("dinners in the app", "cenas en la app"),
  proofUnder30: c("ready in 30 min or less", "listas en 30 min o menos"),
  proofAvg: c("average cost per serving", "coste medio por ración"),
  proofStores: c("supermarkets to plan around", "supermercados para planificar"),

  // supermarkets
  storesEyebrow: c("Your supermarket", "Tu supermercado"),
  storesTitle: c("prices from the shop you actually use", "precios del súper en el que compras"),
  storesLead: c(
    "Pick the chain you shop at and every plan is costed against it, with the grocery list grouped the way that store is laid out.",
    "Elige la cadena en la que compras y cada plan se calcula con sus precios, con la lista agrupada como está montada la tienda.",
  ),
  storesDisclaimer: c(
    "Supermarket names and logos are trademarks of their respective owners. Pick is not affiliated with, sponsored by or endorsed by any of them.",
    "Los nombres y logotipos de los supermercados son marcas de sus respectivos titulares. Pick no está afiliado, patrocinado ni respaldado por ninguno.",
  ),
  storesSeeAll: c("See the plan for your store", "Ver el plan de tu súper"),

  // features
  featEyebrow: c("Why Pick", "Por qué Pick"),
  featTitle: c("dinner, decided", "la cena, decidida"),
  featLead: c(
    "The whole point is to kill the daily \"what's for dinner?\" — with real recipes, real prices and zero meal-prep spreadsheets.",
    "El objetivo es acabar con el \"¿qué cenamos hoy?\" — con recetas reales, precios reales y cero hojas de cálculo.",
  ),
  f1t: c("A plan in one tap", "Un plan en un toque"),
  f1b: c(
    "Answer a few questions once and Pick builds a balanced week — never five rice bowls in a row, never the same protein two days running.",
    "Responde unas preguntas una vez y Pick monta una semana equilibrada: nunca cinco bowls de arroz seguidos ni la misma proteína dos días.",
  ),
  f2t: c("On your budget", "Ajustado a tu bolsillo"),
  f2b: c(
    "Set a weekly budget and Pick keeps the plan under it, showing the estimated cost at your chosen store as you go.",
    "Fija un presupuesto semanal y Pick mantiene el plan por debajo, con el coste estimado en tu supermercado.",
  ),
  f3t: c("Around your kitchen", "A tu cocina"),
  f3b: c(
    "Only an air fryer and a stove? Vegetarian, no shellfish, hate pork? Pick filters every recipe to what you can actually cook and want to eat.",
    "¿Solo freidora de aire y fuego? ¿Vegetariano, sin marisco, sin cerdo? Pick filtra cada receta a lo que puedes cocinar y quieres comer.",
  ),
  f4t: c("Grocery list by aisle", "Lista por pasillos"),
  f4b: c(
    "Every ingredient, scaled to your household and grouped by aisle — produce, meat, dairy, pantry — with a live \"bought\" checklist.",
    "Cada ingrediente, escalado a tu hogar y agrupado por pasillo — fresco, carne, lácteos, despensa — con checklist de \"comprado\".",
  ),
  f5t: c("Don't like it? Swap it", "¿No te gusta? Cámbialo"),
  f5b: c(
    "Tap swap on any night for a fresh idea, or redo the whole week. Save favourites and revisit last week's menu anytime.",
    "Toca cambiar cualquier noche para otra idea, o rehaz la semana entera. Guarda favoritos y vuelve al menú de la semana pasada.",
  ),
  f6t: c("Private by design", "Privado de fábrica"),
  f6b: c(
    "No account, no sign-up. Your plan and preferences live on your iPhone — we only receive anonymous usage analytics.",
    "Sin cuenta, sin registro. Tu plan y tus preferencias viven en tu iPhone — solo recibimos analíticas de uso anónimas.",
  ),

  // how it works
  howEyebrow: c("How it works", "Cómo funciona"),
  howTitle: c("from blank week to full cart", "de la semana en blanco al carrito lleno"),
  s1k: c("Tell Pick about you", "Cuéntale a Pick"),
  s1t: c("Your shop, your budget, your vibe", "Tu tienda, tu presupuesto, tu rollo"),
  s1b: c(
    "Pick which supermarket you shop at, how many you cook for, which nights you want dinner, and the moods you're after — speedy, low-cal, family, fakeaway and more.",
    "Elige en qué supermercado compras, para cuántos cocinas, qué noches quieres cenar y el mood que buscas — rápido, ligero, family, fakeaway y más.",
  ),
  s2k: c("Get your week", "Recibe tu semana"),
  s2t: c("A balanced plan, instantly", "Un plan equilibrado, al instante"),
  s2b: c(
    "Pick assembles dinners that fit your diet, allergies and appliances, keep the week varied and land under your budget — with the estimated cost right there.",
    "Pick monta cenas que encajan con tu dieta, alergias y electrodomésticos, mantienen la semana variada y caben en tu presupuesto — con el coste estimado a la vista.",
  ),
  s3k: c("Shop & cook", "Compra y cocina"),
  s3t: c("One list, sorted by aisle", "Una lista, ordenada por pasillo"),
  s3b: c(
    "Every ingredient is scaled to your household and grouped by aisle. Check things off as you go, then follow simple step-by-step instructions with macros for each dish.",
    "Cada ingrediente se escala a tu hogar y se agrupa por pasillo. Ve marcando y sigue instrucciones paso a paso con los macros de cada plato.",
  ),

  // dishes / catalog
  dishesEyebrow: c("The menu", "El menú"),
  dishesTitle: c("349 dinners, and counting", "349 cenas, y subiendo"),
  dishesLead: c(
    "From 15-minute fakeaways to Sunday traybakes — every recipe has real ingredients, macros, prices and step-by-step instructions.",
    "Desde fakeaways de 15 minutos hasta bandejas de domingo — cada receta tiene ingredientes reales, macros, precios e instrucciones paso a paso.",
  ),
  dishesCta: c("Browse all 349 recipes", "Ver las 349 recetas"),

  // pricing
  priceEyebrow: c("Pricing", "Precios"),
  priceTitle: c("try it free for 3 days", "pruébalo gratis 3 días"),
  priceLead: c(
    "Start with a 3-day free trial. Cancel anytime in your Apple account — we'll remind you before it ends.",
    "Empieza con 3 días gratis. Cancela cuando quieras desde tu cuenta de Apple — te avisamos antes de que termine.",
  ),
  priceYearlyName: c("Yearly", "Anual"),
  priceYearlyFlag: c("BEST VALUE · 3-DAY TRIAL", "MEJOR PRECIO · 3 DÍAS GRATIS"),
  priceWeeklyName: c("Weekly", "Semanal"),
  priceWeeklySub: c("billed weekly, cancel anytime", "cobro semanal, cancela cuando quieras"),
  perWeek: c("/ week", "/ semana"),
  perYear: c("/ year", "/ año"),
  priceFeat1: c("Unlimited weekly meal plans", "Planes semanales ilimitados"),
  priceFeat2: c("All 349 recipes & grocery lists", "Las 349 recetas y listas de la compra"),
  priceFeat3: c("Unlimited swaps & favourites", "Cambios y favoritos ilimitados"),
  priceFeat4: c("No ads, no account needed", "Sin anuncios, sin cuenta"),
  priceNote: c("No payment due now.", "No pagas nada ahora."),
  priceStorefront: c("Prices shown for the US App Store.", "Precios de la App Store de España."),

  // faq
  faqEyebrow: c("Good to know", "Buena info"),
  faqTitle: c("questions, answered", "preguntas, resueltas"),

  // cta
  ctaTitle: c("Never ask \"what's for dinner?\" again", "No vuelvas a preguntar \"¿qué cenamos?\""),
  ctaBody: c(
    "A whole week of dinners, on your budget, in one tap. Free for 3 days.",
    "Una semana entera de cenas, a tu presupuesto, en un toque. Gratis 3 días.",
  ),
  ctaBtn: c("Download Pick", "Descargar Pick"),

  // footer
  footTagline: c(
    "Plan dinners around your budget, your cravings and what's in your kitchen.",
    "Planifica cenas según tu presupuesto, tus antojos y lo que hay en tu cocina.",
  ),
  footProduct: c("Product", "Producto"),
  footBrowse: c("Browse", "Explorar"),
  footLegal: c("Legal", "Legal"),
  footMore: c("More", "Más"),
  footPrivacy: c("Privacy Policy", "Privacidad"),
  footTerms: c("Terms of Use", "Términos de uso"),
  footLegalNotice: c("Legal Notice", "Aviso legal"),
  footTermsShort: c("Terms of Use (EULA)", "Condiciones (EULA)"),
  footSupport: c("Support", "Soporte"),
  footMadeFor: c("Made for iPhone · by Trempido", "Hecho para iPhone · por Trempido"),

  // ── recipe index / collections ──
  recipesTitle: c("All 349 dinner recipes", "Las 349 recetas de cena"),
  recipesLead: c(
    "The full Pick catalog: every dinner with its cook time, estimated cost per serving, macros, ingredient list and steps. Everything here is in the app, offline, and gets planned into your week automatically.",
    "El catálogo completo de Pick: cada cena con su tiempo, coste estimado por ración, macros, ingredientes y pasos. Todo esto está en la app, sin conexión, y entra solo en tu planning semanal.",
  ),
  browseBy: c("Browse by", "Explorar por"),
  groupVibe: c("Mood", "Mood"),
  groupDiet: c("Diet", "Dieta"),
  groupProtein: c("Main protein", "Proteína principal"),
  groupTime: c("Time", "Tiempo"),
  groupFree: c("Free from", "Sin"),
  groupBudget: c("Budget & calories", "Presupuesto y calorías"),
  recipesAll: c("Every recipe, A–Z", "Todas las recetas, A–Z"),
  recipeCountLabel: c("recipes", "recetas"),

  // ── recipe page ──
  ingredients: c("Ingredients", "Ingredientes"),
  method: c("Method", "Elaboración"),
  perServing: c("per serving", "por ración"),
  nutrition: c("Nutrition", "Nutrición"),
  kcal: c("Calories", "Calorías"),
  protein: c("Protein", "Proteína"),
  carbs: c("Carbs", "Carbohidratos"),
  fats: c("Fat", "Grasas"),
  cookTime: c("Cook time", "Tiempo"),
  estCost: c("Est. cost", "Coste est."),
  costNote: c(
    "Estimated cost per serving at a mid-range supermarket. Real prices vary by store and week.",
    "Coste estimado por ración en un súper de precio medio. El precio real varía según tienda y semana.",
  ),
  youNeed: c("You'll need", "Necesitas"),
  suitableFor: c("Suitable for", "Apto para"),
  containsAllergens: c("Contains", "Contiene"),
  allergenNote: c(
    "Allergen tags come from the recipe, not from the products you buy — always check the label.",
    "Los alérgenos salen de la receta, no de los productos que compras — revisa siempre la etiqueta.",
  ),
  inTheApp: c("This recipe in the app", "Esta receta en la app"),
  inTheAppBody: c(
    "Pick scales these ingredients to how many you cook for, adds them to a grocery list sorted by aisle, and drops the dish into a week that stays under your budget.",
    "Pick escala estos ingredientes a para cuántos cocinas, los añade a una lista ordenada por pasillo y mete el plato en una semana que no se pasa de tu presupuesto.",
  ),
  moreLike: c("More like this", "Más como esta"),
  inTheAppWeek: c("This week in the app", "Esta semana en la app"),
  inTheAppWeekBody: c(
    "Pick builds a week like this in one tap, scales every ingredient to how many you cook for, and keeps the total under the budget you set — then hands you the list, sorted by aisle.",
    "Pick monta una semana como esta en un toque, escala cada ingrediente a para cuántos cocinas y mantiene el total por debajo del presupuesto que fijes — y te da la lista ordenada por pasillo.",
  ),
  alsoIn: c("Also in", "También en"),

  // ── store page ──
  storeTitleTpl: c("Weekly meal plan for {store}", "Menú semanal para {store}"),
  storeLeadTpl: c(
    "Pick costs every dinner against {store} prices and sorts your grocery list the way the store is laid out. Here's what a cheap week looks like.",
    "Pick calcula cada cena con precios de {store} y ordena la lista de la compra como está montada la tienda. Así es una semana barata.",
  ),
  storeWeek: c("A sample week", "Una semana de ejemplo"),
  storeList: c("The grocery list it produces", "La lista de la compra que sale"),
  storeTotal: c("Estimated total", "Total estimado"),
  storeAll: c("Every supermarket Pick plans around", "Todos los supermercados con los que Pick planifica"),
  storeOther: c("Shop somewhere else?", "¿Compras en otro sitio?"),
} as const

export type CopyKey = keyof typeof T

/** `t("heroCta")` bound to one language — used by every Pick page. */
export const tr = (lang: Lang) => (key: CopyKey) => T[key][lang]

export const FAQ: { q: Copy; a: Copy }[] = [
  {
    q: c("Do I need to create an account?", "¿Necesito crear una cuenta?"),
    a: c(
      "No. Pick has no sign-up — your plan, preferences and favourites are stored on your iPhone, so it works offline. The only thing we receive is anonymous usage analytics (see our Privacy Policy).",
      "No. Pick no tiene registro: tu plan, preferencias y favoritos se guardan en tu iPhone, así que funciona sin conexión. Lo único que recibimos son analíticas de uso anónimas (mira la Política de Privacidad).",
    ),
  },
  {
    q: c("How many recipes are in Pick?", "¿Cuántas recetas tiene Pick?"),
    a: c(
      "349 dinners, all bundled inside the app with their photo, ingredients, macros, estimated cost and step-by-step method. No internet needed to cook from them.",
      "349 cenas, todas dentro de la app con su foto, ingredientes, macros, coste estimado y elaboración paso a paso. No hace falta internet para cocinarlas.",
    ),
  },
  {
    q: c("Are the supermarket prices exact?", "¿Los precios del súper son exactos?"),
    a: c(
      "They're estimates to help you plan and stay on budget. Real in-store prices vary by location and over time, so treat the total as a guide, not a receipt.",
      "Son estimaciones para ayudarte a planificar y no pasarte del presupuesto. El precio real varía según la tienda y el momento, así que tómalo como guía, no como ticket.",
    ),
  },
  {
    q: c("Is Pick affiliated with Walmart, Mercadona, etc.?", "¿Pick está afiliado a Walmart, Mercadona, etc.?"),
    a: c(
      "No. Supermarket names and logos are trademarks of their respective owners. Pick has no commercial or sponsorship relationship with any of them — we only use the store you pick to estimate prices and organise your list.",
      "No. Los nombres y logotipos de los supermercados son marcas de sus respectivos titulares. Pick no tiene relación comercial ni de patrocinio con ninguno — solo usamos tu tienda para estimar precios y organizar la lista.",
    ),
  },
  {
    q: c("Can I handle allergies and diets?", "¿Puedo gestionar alergias y dietas?"),
    a: c(
      "Yes — set vegetarian, vegan or pescatarian diets, exclude allergens (gluten, dairy, nuts, shellfish and more) and pick which proteins you like. The allergy filter is a guide only: always check the label on the products you buy.",
      "Sí — marca dieta vegetariana, vegana o pescetariana, excluye alérgenos (gluten, lácteos, frutos secos, marisco y más) y elige qué proteínas te gustan. El filtro de alergias es solo orientativo: revisa siempre la etiqueta de lo que compres.",
    ),
  },
  {
    q: c("How does the free trial work?", "¿Cómo funciona la prueba gratis?"),
    a: c(
      "You get 3 days free with the yearly plan. If you don't cancel, it becomes an auto-renewing subscription ($49.99/year, or $9.99/week on the weekly plan) managed by Apple. Pick also sends you a reminder on your iPhone about 24 hours before it converts. Cancel anytime from your Apple account settings.",
      "Tienes 3 días gratis con el plan anual. Si no cancelas, pasa a una suscripción de renovación automática (39,99 €/año, o 9,99 €/semana en el plan semanal) gestionada por Apple. Pick además te avisa en el iPhone unas 24 horas antes de que se cobre. Cancela cuando quieras desde los ajustes de tu cuenta de Apple.",
    ),
  },
  {
    q: c("Which iPhone do I need?", "¿Qué iPhone necesito?"),
    a: c(
      "Pick runs on iPhone with iOS 17 or later. It's iPhone-only for now.",
      "Pick funciona en iPhone con iOS 17 o posterior. De momento es solo para iPhone.",
    ),
  },
]
