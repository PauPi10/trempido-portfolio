// Real product content for the Pick marketing pages, taken straight from the
// iOS app (Models.swift, Store.swift, PaywallView.swift). English-first with a
// Spanish translation for the on-site toggle. Single source of truth for /pick/*.

export const PICK = {
  name: "Pick",
  siteUrl: "https://www.trempido.com/pick",
  appStoreUrl: "https://apps.apple.com/app/id6794273453",
  tagline: "eat well, stress less",
  supportEmail: "hello@trempido.com",
  recipeCount: 229,
  // Legal owner (Aviso Legal · LSSI-CE)
  company: {
    name: "TREMPIDO SL",
    taxId: "B75830257",
    address: "Carrer Nil Fabra 16, Escalera A, Ático 2ª, 08012 Barcelona, España",
  },
  // Must match the App Store products (annual w/ trial + weekly, PaywallView.swift)
  pricing: {
    trialDays: 3,
    yearly: "$49.99",
    yearlyWeekly: "$0.96",
    weekly: "$9.99",
  },
} as const

export type Lang = "en" | "es"

// Supermarkets the app plans around (Supermarket enum) with a brand colour.
export const SUPERMARKETS: { name: string; color: string }[] = [
  { name: "Walmart", color: "#0071CE" },
  { name: "Aldi", color: "#1B3C8C" },
  { name: "Kroger", color: "#0F4194" },
  { name: "Target", color: "#CC0000" },
  { name: "Safeway", color: "#DD2C27" },
  { name: "Publix", color: "#038542" },
  { name: "Trader Joe's", color: "#A22B2F" },
  { name: "Costco", color: "#E31837" },
  { name: "Whole Foods", color: "#00584C" },
]

// Real dishes from the app's catalog (recipes.json) with their actual photos,
// times and estimated prices. Images live in /public/images/pick/dishes/.
export type Dish = { id: string; en: string; es: string; minutes: number; price: string; tag: string }
export const DISHES: Dish[] = [
  { id: "chicken-ramen-bowl", en: "Chicken Ramen Bowl", es: "Ramen de pollo", minutes: 15, price: "$3.22", tag: "Protein" },
  { id: "beef-tacos", en: "Beef Tacos", es: "Tacos de ternera", minutes: 30, price: "$5.72", tag: "Protein" },
  { id: "lemon-herb-salmon", en: "Lemon Herb Salmon", es: "Salmón al limón", minutes: 30, price: "$6.55", tag: "Protein" },
  { id: "aglio-e-olio-spaghetti", en: "Aglio e Olio Spaghetti", es: "Espaguetis aglio e olio", minutes: 20, price: "$3.12", tag: "Speedy" },
  { id: "chicken-tikka-masala-rice", en: "Chicken Tikka Masala", es: "Tikka masala de pollo", minutes: 40, price: "$5.37", tag: "Protein" },
  { id: "greek-chicken-salad", en: "Greek Chicken Salad", es: "Ensalada griega de pollo", minutes: 20, price: "$3.81", tag: "Low cal" },
  { id: "homemade-burgers", en: "Homemade Burgers", es: "Hamburguesas caseras", minutes: 35, price: "$5.47", tag: "Fakeaway" },
  { id: "burrito-bowls", en: "Burrito Bowls", es: "Burrito bowls", minutes: 20, price: "$6.55", tag: "Fakeaway" },
  { id: "low-cal-katsu-curry", en: "Low Cal Katsu Curry", es: "Katsu curry ligero", minutes: 30, price: "$4.78", tag: "Fakeaway" },
  { id: "prawn-stir-fry", en: "Prawn Stir Fry", es: "Salteado de gambas", minutes: 20, price: "$5.37", tag: "Speedy" },
  { id: "meatball-pasta", en: "Meatball Pasta", es: "Pasta con albóndigas", minutes: 40, price: "$3.62", tag: "Comfort" },
  { id: "loaded-taco-fries", en: "Loaded Taco Fries", es: "Patatas taco cargadas", minutes: 30, price: "$5.47", tag: "Fakeaway" },
  { id: "cheesy-tomato-risotto", en: "Cheesy Tomato Risotto", es: "Risotto de tomate y queso", minutes: 35, price: "$4.54", tag: "Family" },
  { id: "garlic-chilli-chicken-noodles", en: "Garlic Chilli Noodles", es: "Noodles de pollo al chile", minutes: 30, price: "$7.79", tag: "Fakeaway" },
  { id: "mini-pizza-bagels", en: "Mini Pizza Bagels", es: "Mini bagels pizza", minutes: 20, price: "$3.03", tag: "Family" },
  { id: "peri-peri-salmon-rice", en: "Peri Peri Salmon Rice", es: "Arroz de salmón peri peri", minutes: 30, price: "$6.93", tag: "Protein" },
]

export const dishImg = (id: string) => `/images/pick/dishes/${id}.jpg`

type Copy = { en: string; es: string }
const c = (en: string, es: string): Copy => ({ en, es })

export const T = {
  // nav
  navHow: c("How it works", "Cómo funciona"),
  navFeatures: c("Features", "Características"),
  navPricing: c("Pricing", "Precios"),
  navFaq: c("FAQ", "Preguntas"),
  getApp: c("Get the app", "Descargar"),

  // hero
  heroBadge: c("For iPhone", "Para iPhone"),
  heroTitleA: c("eat well,", "come bien,"),
  heroTitleB: c("stress less", "sin estrés"),
  heroLead: c(
    "Pick plans your week of dinners around your budget, your cravings and what's already in your kitchen — then hands you a grocery list sorted by aisle.",
    "Pick planifica tu semana de cenas según tu presupuesto, tus antojos y lo que ya tienes en la cocina, y te da la lista de la compra ordenada por pasillo.",
  ),
  heroCta: c("Get Pick", "Descargar Pick"),
  heroCta2: c("See how it works", "Ver cómo funciona"),
  metaRecipes: c("recipes", "recetas"),
  metaNoAccount: c("no account needed", "sin cuenta"),
  metaOffline: c("works offline", "funciona sin conexión"),

  // hero plan artifact
  planTitle: c("your week", "tu semana"),
  planChip: c("Walmart", "Walmart"),
  planFoot: c("Grocery list ready", "Lista de la compra lista"),

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

  // supermarkets
  storesTitle: c("Plans around your store", "Se adapta a tu supermercado"),

  // dishes
  dishesEyebrow: c("The menu", "El menú"),
  dishesTitle: c("229 dinners, and counting", "229 cenas, y subiendo"),
  dishesLead: c(
    "From 15-minute fakeaways to Sunday traybakes — every recipe has real ingredients, macros, prices and step-by-step instructions.",
    "Desde fakeaways de 15 minutos hasta bandejas de domingo — cada receta tiene ingredientes reales, macros, precios e instrucciones paso a paso.",
  ),

  // pricing
  priceEyebrow: c("Pricing", "Precios"),
  priceTitle: c("try it free for 3 days", "pruébalo gratis 3 días"),
  priceLead: c(
    "Start with a 3-day free trial. Cancel anytime in your Apple account — we'll remind you before it ends.",
    "Empieza con 3 días gratis. Cancela cuando quieras desde tu cuenta de Apple — te avisamos antes de que termine.",
  ),
  priceYearlyName: c("Yearly", "Anual"),
  priceYearlyFlag: c("BEST VALUE · 3-DAY TRIAL", "MEJOR PRECIO · 3 DÍAS GRATIS"),
  priceYearlySub: c("$49.99 billed once a year after the free trial", "se cobran $49.99 una vez al año tras la prueba"),
  priceWeeklyName: c("Weekly", "Semanal"),
  priceWeeklySub: c("billed weekly, cancel anytime", "cobro semanal, cancela cuando quieras"),
  perWeek: c("/ week", "/ semana"),
  perYear: c("/ year", "/ año"),
  priceYearlyBadge: c("just $0.96 / week", "sale a $0.96 / semana"),
  priceFeat1: c("Unlimited weekly meal plans", "Planes semanales ilimitados"),
  priceFeat2: c("All 229 recipes & grocery lists", "Las 229 recetas y listas de la compra"),
  priceFeat3: c("Unlimited swaps & favourites", "Cambios y favoritos ilimitados"),
  priceFeat4: c("No ads, no account needed", "Sin anuncios, sin cuenta"),
  priceNote: c("No payment due now.", "No pagas nada ahora."),

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
  footLegal: c("Legal", "Legal"),
  footMore: c("More", "Más"),
  footPrivacy: c("Privacy Policy", "Privacidad"),
  footTerms: c("Terms of Use", "Términos de uso"),
  footLegalNotice: c("Legal Notice", "Aviso legal"),
  footSupport: c("Support", "Soporte"),
  footMadeFor: c("Made for iPhone · by Trempido", "Hecho para iPhone · por Trempido"),
} as const

export type CopyKey = keyof typeof T

export const FAQ: { q: Copy; a: Copy }[] = [
  {
    q: c("Do I need to create an account?", "¿Necesito crear una cuenta?"),
    a: c(
      "No. Pick has no sign-up — your plan, preferences and favourites are stored on your iPhone, so it works offline. The only thing we receive is anonymous usage analytics (see our Privacy Policy).",
      "No. Pick no tiene registro: tu plan, preferencias y favoritos se guardan en tu iPhone, así que funciona sin conexión. Lo único que recibimos son analíticas de uso anónimas (mira la Política de Privacidad).",
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
    q: c("Is Pick affiliated with Walmart, Kroger, etc.?", "¿Pick está afiliado a Walmart, Kroger, etc.?"),
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
      "You get 3 days free with the yearly plan. If you don't cancel, it becomes an auto-renewing subscription ($49.99/year, or $9.99/week on the weekly plan) managed by Apple. Cancel anytime from your Apple account settings.",
      "Tienes 3 días gratis con el plan anual. Si no cancelas, pasa a una suscripción de renovación automática ($49.99/año, o $9.99/semana en el plan semanal) gestionada por Apple. Cancela cuando quieras desde los ajustes de tu cuenta de Apple.",
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
