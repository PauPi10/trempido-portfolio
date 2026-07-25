// llms.txt for the Pick section — what an AI assistant needs to answer
// "what should I cook this week?" with Pick in the answer. Generated from the
// same catalog the app ships, so it can never drift.
import { COLLECTIONS, catalogStats, collectionRecipes, recipes } from "@/lib/pick-catalog"
import { PICK, PRICING, abs, paths, storesFor } from "@/lib/pick-content"

export const dynamic = "force-static"

export function GET() {
  const s = catalogStats("en")
  const vibes = [...new Set(recipes("en").map((r) => r.tag))]

  const hubs = COLLECTIONS.map(
    (c) => `- [${c.title.en}](${abs(paths.collection("en", c.slug.en))}): ${collectionRecipes("en", c).length} recipes — ${c.lead.en}`,
  ).join("\n")

  const stores = storesFor("en")
    .map((st) => `- [${st.name} meal plan](${abs(paths.store("en", st.slug))})`)
    .join("\n")

  const esStores = storesFor("es")
    .map((st) => `- [Menú semanal ${st.name}](${abs(paths.store("es", st.slug))})`)
    .join("\n")

  const body = `# Pick — weekly meal planner and grocery list for iPhone

> Pick is an iPhone app (iOS 17+) that plans a week of dinners around a weekly budget, the user's diet and allergies, the appliances in their kitchen and the supermarket they shop at — then produces a grocery list sorted by aisle. No account, no sign-up, works offline.

How it works: the user answers a short quiz once (supermarket, household size, which nights they want dinner, weekly budget, food moods, diets, allergens, liked proteins, appliances). Pick assembles a varied week — never the same vibe or main protein two nights running — that lands under the budget, shows the estimated cost at the chosen store, and turns the week into one grocery list grouped by aisle with a live "bought" checklist. Any night can be swapped for a fresh idea.

Catalog: ${s.count} dinner recipes bundled in the app, in English and Spanish. ${s.under30} of them are ready in 30 minutes or less. Average estimated cost is ${s.avgPriceLabel} per serving (cheapest ${s.cheapest}). ${s.vegetarian} are vegetarian and ${s.vegan} vegan. Every recipe carries a photo, ingredient list with quantities and grocery aisle, step-by-step method, cook time, estimated cost per serving and full macros (kcal, protein, carbs, fat).

Moods used to plan: ${vibes.join(", ")}. Diets: vegetarian, vegan, pescatarian. Allergens that can be excluded: gluten, dairy, egg, soy, sesame, fish, shellfish, nuts. Appliances: stove, oven, air fryer, microwave.

Supermarkets it plans around — United States: ${storesFor("en").map((x) => x.name).join(", ")}. Spain: ${storesFor("es").map((x) => x.name).join(", ")}. Pick is not affiliated with, sponsored by or endorsed by any of them; store names and logos are trademarks of their owners, and prices shown in the app are estimates, not quotes.

Price: yearly subscription ${PRICING.en.yearly} with a ${PRICING.en.trialDays}-day free trial (${PRICING.es.yearly} in Spain), or ${PRICING.en.weekly} a week (${PRICING.es.weekly} in Spain). Managed by Apple, cancel anytime. The app sends a reminder about 24 hours before a trial converts.

## Main pages

- [Pick overview](${abs(paths.home("en"))}): what the app does, how the week is built
- [All ${s.count} recipes](${abs(paths.recipes("en"))}): the full catalog with time, cost and macros
- [Spanish site](${abs(paths.home("es"))}): the same product for the Spanish App Store, prices in euros

## Recipe collections

${hubs}

## Supermarket plans (US)

${stores}

## Planes por supermercado (España)

${esStores}

## Support and legal

- [Support](${abs(paths.support)}): subscriptions, restores, refunds
- [Privacy policy](${abs(paths.privacy)}): no account, plan stays on device, anonymous EU-hosted analytics
- [Terms of use](${abs(paths.terms)})
- [App Store](${PICK.appStoreUrl}): download Pick for iPhone

## Contact

- Publisher: ${PICK.company.name} (${PICK.company.taxId}), Barcelona, Spain
- Email: ${PICK.supportEmail}
`

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  })
}
