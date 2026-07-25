// Staged release of the recipe pages.
//
// All 349 recipes are always live and always linked (the index and the
// collection hubs list every one of them, so nothing is a dead end for a
// reader). What is staged is *indexation*: only the released batches are
// indexable and in the sitemap. Everything else ships `noindex, follow`, so
// Google still walks the links and passes signals to the hubs, but doesn't
// take 698 thin-ish pages into its index in one go.
//
// ── HOW TO RELEASE THE NEXT BATCH ──
// Bump RELEASED_BATCHES by one and redeploy. Do it when Search Console shows
// the current batch mostly indexed (say >70% of submitted). If instead they
// pile up in "Crawled – currently not indexed", DON'T release more: that's
// Google saying the recipe template needs more substance first.

import { recipes } from "./pick-catalog"

/** How many batches below are live. 1 = only the curated first batch. */
export const RELEASED_BATCHES = 1

/**
 * Batch 1, hand-picked: dishes people actually type into a search box, spread
 * across cuisines, proteins and diets so the sample tells us something about
 * every kind of page in the catalog.
 */
const BATCH_1 = [
  "chicken-ramen-bowl",
  "beef-tacos",
  "lemon-herb-salmon",
  "chicken-tikka-masala-rice",
  "spaghetti-carbonara",
  "spaghetti-bolognese",
  "homemade-burgers",
  "low-cal-katsu-curry",
  "burrito-bowls",
  "greek-chicken-salad",
  "aglio-e-olio-spaghetti",
  "meatball-pasta",
  "cheesy-tomato-risotto",
  "prawn-stir-fry",
  "chicken-fajita-rice-bowl",
  "egg-fried-rice",
  "margherita-flatbread-pizza",
  "veggie-pad-thai",
  "creamy-garlic-parmesan-pasta",
  "chicken-parmesan",
  "beef-stroganoff",
  "thai-green-curry-with-tofu",
  "crispy-gnocchi-with-pesto",
  "kimchi-fried-rice",
  "chipotle-lentil-tacos",
  "garlic-mushroom-risotto",
  "loaded-taco-fries",
  "peri-peri-salmon-rice",
  "garlic-chilli-chicken-noodles",
  "mini-pizza-bagels",
  "chicken-quesadilla",
  "sesame-peanut-noodles",
  "smoky-black-bean-tacos",
  "broccoli-cheddar-soup",
  "baked-falafel-wraps",
  "teriyaki-tofu-rice-bowl",
  "air-fryer-chicken-shawarma-wraps",
  "paneer-curry",
  "breakfast-burrito",
  "tuscan-white-bean-soup",
]

/** Everything else, in a stable order, cut into batches of this size. */
const BATCH_SIZE = 60

/** All batches, batch 1 first. Deterministic: same order on every build. */
export function batches(): string[][] {
  const all = recipes("en").map((r) => r.id)
  const first = BATCH_1.filter((id) => all.includes(id))
  const rest = all.filter((id) => !first.includes(id)).sort()
  const out: string[][] = [first]
  for (let i = 0; i < rest.length; i += BATCH_SIZE) out.push(rest.slice(i, i + BATCH_SIZE))
  return out
}

let releasedCache: Set<string> | null = null

/** Ids allowed into the index and the sitemap right now. */
export function releasedIds(): Set<string> {
  if (!releasedCache) {
    releasedCache = new Set(batches().slice(0, RELEASED_BATCHES).flat())
  }
  return releasedCache
}

export function isReleased(id: string): boolean {
  return releasedIds().has(id)
}

/** For the build log / a quick sanity check. */
export function releaseSummary() {
  const all = batches()
  return {
    batches: all.length,
    released: RELEASED_BATCHES,
    indexable: releasedIds().size,
    total: all.flat().length,
  }
}
