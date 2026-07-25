// The inner pages of the Pick site. Each one is rendered from the app's own
// catalog, in both languages, from a single component so English and Spanish
// can never drift apart.

import Link from "next/link"
import {
  PICK,
  T,
  tr,
  paths,
  dishImg,
  storesFor,
  storeLogo,
  type Lang,
  type Store,
} from "@/lib/pick-content"
import {
  COLLECTIONS,
  aisle,
  allergenLabel,
  applianceLabel,
  catalogStats,
  collectionRecipes,
  collectionsFor,
  dietLabel,
  groceryList,
  isoDuration,
  money,
  qtyLabel,
  recipes,
  relatedRecipes,
  sampleWeek,
  tagLabel,
  type Collection,
  type Recipe,
} from "@/lib/pick-catalog"
import { PickNav, PickFooter, CtaBanner, PageHead, AppStoreButton } from "./chrome"
import { RecipeGrid, CollectionGroups, CollectionLinks, AppCallout, SectionHead } from "./cards"
import { JsonLd, itemListLd } from "./jsonld"
import { IconArrow, IconCheck, IconClock, IconStore } from "./icons"

const other = (lang: Lang): Lang => (lang === "es" ? "en" : "es")

/** Counts for every collection, in one pass — used by the link chips. */
function collectionCounts(lang: Lang): Record<string, number> {
  const out: Record<string, number> = {}
  for (const c of COLLECTIONS) out[c.key] = collectionRecipes(lang, c).length
  return out
}

function groupedCollections(lang: Lang) {
  const t = tr(lang)
  const g = (group: Collection["group"]) => COLLECTIONS.filter((c) => c.group === group)
  return [
    { label: t("groupVibe"), items: g("vibe") },
    { label: t("groupDiet"), items: g("diet") },
    { label: t("groupProtein"), items: g("protein") },
    { label: t("groupTime"), items: g("time") },
    { label: t("groupFree"), items: g("free-from") },
    { label: t("groupBudget"), items: g("budget") },
  ]
}

// ── /pick/recipes ────────────────────────────────────────────────────────────

export function RecipeIndexPage({ lang }: { lang: Lang }) {
  const t = tr(lang)
  const all = [...recipes(lang)].sort((a, b) => a.name.localeCompare(b.name, lang))
  const stats = catalogStats(lang)
  const counts = collectionCounts(lang)

  return (
    <>
      <PickNav lang={lang} alt={paths.recipes(other(lang))} />
      <PageHead
        lang={lang}
        crumbs={[
          { name: "Pick", path: paths.home(lang) },
          { name: t("navRecipes"), path: "" },
        ]}
        eyebrow={t("dishesEyebrow")}
        title={t("recipesTitle")}
        lead={t("recipesLead")}
      />
      <JsonLd
        data={itemListLd(
          t("recipesTitle"),
          all.map((r) => paths.recipe(lang, r.id)),
        )}
      />

      <section className="p-section">
        <div className="p-wrap">
          <h2 className="p-subhead">{t("browseBy")}</h2>
          <CollectionGroups lang={lang} groups={groupedCollections(lang)} counts={counts} />

          <h2 className="p-subhead" style={{ marginTop: 52 }}>
            {t("recipesAll")}{" "}
            <span className="p-muted" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
              · {stats.count} {t("recipeCountLabel")}
            </span>
          </h2>
          <RecipeGrid lang={lang} recipes={all} priorityCount={6} />
        </div>
      </section>

      <CtaBanner lang={lang} dishes={all.slice(0, 3).map((r) => r.id)} />
      <PickFooter lang={lang} />
    </>
  )
}

// ── /pick/recipes/[slug] ─────────────────────────────────────────────────────

/**
 * A short, honest lead built from the recipe's own numbers — no invented
 * claims, just what the catalog says, phrased for a reader.
 */
function recipeLead(lang: Lang, r: Recipe, avgPrice: number): string {
  const vibe = tagLabel(lang, r.tag).toLowerCase()
  const cheaper = r.price < avgPrice
  const appliances = r.appliances.map((a) => applianceLabel(lang, a).toLowerCase()).join(" + ")
  if (lang === "es") {
    return `${r.name} es una cena ${vibe} de ${r.minutes} minutos. Pick la estima en ${money(lang, r.price)} por ración, ${
      cheaper ? "por debajo" : "por encima"
    } de la media del catálogo (${money(lang, Math.round(avgPrice * 100) / 100)}), con ${r.protein} g de proteína y ${r.kcal} kcal. Necesitas ${appliances} y ${r.ingredients.length} ingredientes.`
  }
  return `${r.name} is a ${r.minutes}-minute ${vibe} dinner. Pick estimates ${money(lang, r.price)} a serving, ${
    cheaper ? "below" : "above"
  } the catalog average of ${money(lang, Math.round(avgPrice * 100) / 100)}, with ${r.protein}g of protein and ${r.kcal} kcal. You need ${appliances} and ${r.ingredients.length} ingredients.`
}

export function RecipePage({ lang, recipe: r }: { lang: Lang; recipe: Recipe }) {
  const t = tr(lang)
  const stats = catalogStats(lang)
  const related = relatedRecipes(lang, r, 6)
  const cols = collectionsFor(r)
  const counts = collectionCounts(lang)
  const lead = recipeLead(lang, r, stats.avgPrice)

  const ld = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: r.name,
    image: [`${PICK.origin}${dishImg(r.id, 720)}`],
    description: lead,
    inLanguage: lang === "es" ? "es-ES" : "en",
    author: { "@type": "Organization", name: PICK.company.name, url: PICK.origin },
    recipeCategory: lang === "es" ? "Cena" : "Dinner",
    recipeCuisine: undefined,
    keywords: [tagLabel(lang, r.tag), ...r.dietary.map((d) => dietLabel(lang, d))].join(", "),
    totalTime: isoDuration(r.minutes),
    cookTime: isoDuration(r.minutes),
    recipeYield: lang === "es" ? "1 ración" : "1 serving",
    suitableForDiet: r.dietary.map(
      (d) =>
        ({
          vegan: "https://schema.org/VeganDiet",
          vegetarian: "https://schema.org/VegetarianDiet",
          pescatarian: "https://schema.org/PescatarianDiet",
        })[d],
    ),
    recipeIngredient: r.ingredients.map((i) => `${qtyLabel(i.qty, i.unit)} ${i.name}`),
    recipeInstructions: r.instructions.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step,
    })),
    nutrition: {
      "@type": "NutritionInformation",
      calories: `${r.kcal} kcal`,
      proteinContent: `${r.protein} g`,
      carbohydrateContent: `${r.carbs} g`,
      fatContent: `${r.fats} g`,
      servingSize: lang === "es" ? "1 ración" : "1 serving",
    },
  }

  return (
    <>
      <PickNav lang={lang} alt={paths.recipe(other(lang), r.id)} />
      <PageHead
        lang={lang}
        crumbs={[
          { name: "Pick", path: paths.home(lang) },
          { name: t("navRecipes"), path: paths.recipes(lang) },
          { name: r.name, path: "" },
        ]}
        eyebrow={tagLabel(lang, r.tag)}
        title={r.name}
      />
      <JsonLd data={ld} />

      <section className="p-section">
        <div className="p-wrap p-recipe">
          <div className="p-recipe__photo">
            <img
              src={dishImg(r.id, 720)}
              alt={r.name}
              width={720}
              height={720}
              fetchPriority="high"
            />
          </div>

          <div>
            <p className="p-lead" style={{ marginTop: 0 }}>{lead}</p>

            <ul className="p-facts">
              <li><strong>{r.minutes} min</strong><span>{t("cookTime")}</span></li>
              <li><strong>{money(lang, r.price)}</strong><span>{t("estCost")}</span></li>
              <li><strong>{r.kcal}</strong><span>{t("kcal")}</span></li>
              <li><strong>{r.protein}g</strong><span>{t("protein")}</span></li>
              <li><strong>{r.carbs}g</strong><span>{t("carbs")}</span></li>
              <li><strong>{r.fats}g</strong><span>{t("fats")}</span></li>
            </ul>
            <p className="p-fineprint" style={{ marginTop: -12 }}>{t("costNote")}</p>

            <h2 className="p-subhead">{t("ingredients")}</h2>
            <ul className="p-ing">
              {r.ingredients.map((i) => (
                <li key={i.name}>
                  <span className="p-ing__emoji" aria-hidden="true">{i.emoji}</span>
                  <span className="p-ing__name">{i.name}</span>
                  <span className="p-ing__aisle">{aisle(lang, i.category)}</span>
                  <span className="p-ing__qty">{qtyLabel(i.qty, i.unit)}</span>
                </li>
              ))}
            </ul>

            <h2 className="p-subhead">{t("method")}</h2>
            <ol className="p-steps">
              {r.instructions.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <h2 className="p-subhead">{t("youNeed")}</h2>
            <div className="p-tags">
              {r.appliances.map((a) => (
                <span className="p-pill" key={a}>{applianceLabel(lang, a)}</span>
              ))}
              {r.dietary.length > 0 && (
                <>
                  {r.dietary.map((d) => (
                    <span className="p-pill p-pill--good" key={d}>
                      <IconCheck size={14} /> {dietLabel(lang, d)}
                    </span>
                  ))}
                </>
              )}
              {r.allergens.map((a) => (
                <span className="p-pill p-pill--warn" key={a}>
                  {t("containsAllergens")}: {allergenLabel(lang, a)}
                </span>
              ))}
            </div>
            <p className="p-fineprint">{t("allergenNote")}</p>

            <AppCallout lang={lang} />
            <AppStoreButton lang={lang} label={t("ctaBtn")} />

            {cols.length > 0 && (
              <>
                <h2 className="p-subhead">{t("alsoIn")}</h2>
                <CollectionLinks lang={lang} collections={cols} counts={counts} />
              </>
            )}
          </div>
        </div>
      </section>

      <section className="p-section" style={{ background: "var(--p-cream-deep)" }}>
        <div className="p-wrap">
          <SectionHead title={t("moreLike")} />
          <RecipeGrid lang={lang} recipes={related} priorityCount={0} />
        </div>
      </section>

      <PickFooter lang={lang} />
    </>
  )
}

// ── /pick/collections/[slug] ─────────────────────────────────────────────────

export function CollectionPage({ lang, collection: c }: { lang: Lang; collection: Collection }) {
  const t = tr(lang)
  const list = [...collectionRecipes(lang, c)].sort((a, b) => a.price - b.price || a.name.localeCompare(b.name, lang))
  const counts = collectionCounts(lang)
  const avgMin = Math.round(list.reduce((s, r) => s + r.minutes, 0) / list.length)
  const avgPrice = list.reduce((s, r) => s + r.price, 0) / list.length
  const others = COLLECTIONS.filter((x) => x.key !== c.key && x.group === c.group)
  const rest = COLLECTIONS.filter((x) => x.key !== c.key && x.group !== c.group)

  return (
    <>
      <PickNav lang={lang} alt={paths.collection(other(lang), c.slug[other(lang)])} />
      <PageHead
        lang={lang}
        crumbs={[
          { name: "Pick", path: paths.home(lang) },
          { name: t("navRecipes"), path: paths.recipes(lang) },
          { name: c.title[lang], path: "" },
        ]}
        eyebrow={`${list.length} ${t("recipeCountLabel")}`}
        title={c.title[lang]}
        lead={c.lead[lang]}
      />
      <JsonLd data={itemListLd(c.title[lang], list.map((r) => paths.recipe(lang, r.id)))} />

      <section className="p-section">
        <div className="p-wrap">
          <ul className="p-facts" style={{ maxWidth: 620 }}>
            <li><strong>{list.length}</strong><span>{t("recipeCountLabel")}</span></li>
            <li><strong>{avgMin} min</strong><span>{lang === "es" ? "tiempo medio" : "average time"}</span></li>
            <li>
              <strong>{money(lang, Math.round(avgPrice * 100) / 100)}</strong>
              <span>{lang === "es" ? "coste medio" : "average cost"}</span>
            </li>
          </ul>
          <RecipeGrid lang={lang} recipes={list} priorityCount={6} />

          <h2 className="p-subhead" style={{ marginTop: 52 }}>
            {lang === "es" ? "Otras colecciones" : "Other collections"}
          </h2>
          <CollectionLinks lang={lang} collections={[...others, ...rest]} counts={counts} current={c.key} />
        </div>
      </section>

      <CtaBanner lang={lang} dishes={list.slice(0, 3).map((r) => r.id)} />
      <PickFooter lang={lang} />
    </>
  )
}

// ── /pick/supermarkets/[slug] ────────────────────────────────────────────────

export function StorePage({ lang, store }: { lang: Lang; store: Store }) {
  const t = tr(lang)
  // Seed the sample week off the store's position so no two stores match.
  const seed = storesFor(lang).findIndex((s) => s.slug === store.slug) + 1
  const week = sampleWeek(lang, seed, 5)
  const total = week.reduce((s, r) => s + r.price, 0)
  const list = groceryList(lang, week)
  const others = storesFor(lang).filter((s) => s.slug !== store.slug)
  const altPath = store.markets.includes(other(lang)) ? paths.store(other(lang), store.slug) : undefined

  const title = t("storeTitleTpl").replace("{store}", store.name)
  const lead = t("storeLeadTpl").replace("{store}", store.name)

  return (
    <>
      <PickNav lang={lang} alt={altPath} />
      <PageHead
        lang={lang}
        crumbs={[
          { name: "Pick", path: paths.home(lang) },
          { name: t("navStores"), path: `${paths.home(lang)}#stores` },
          { name: store.name, path: "" },
        ]}
        title={title}
        lead={lead}
      />
      <JsonLd data={itemListLd(title, week.map((r) => paths.recipe(lang, r.id)))} />

      <section className="p-section">
        <div className="p-wrap">
          <div className="p-storehead">
            <img src={storeLogo(store)} alt="" width={62} height={62} aria-hidden="true" />
            <div>
              <span className="p-eyebrow">{t("storeWeek")}</span>
              <h2 className="p-h2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                {lang === "es"
                  ? `5 cenas, ${money(lang, Math.round(total * 100) / 100)}`
                  : `5 dinners, ${money(lang, Math.round(total * 100) / 100)}`}
              </h2>
            </div>
          </div>
          <p className="p-fineprint" style={{ marginBottom: 26 }}>{t("costNote")}</p>

          <RecipeGrid lang={lang} recipes={week} priorityCount={5} />

          <h2 className="p-subhead" style={{ marginTop: 52 }}>{t("storeList")}</h2>
          <div className="p-listcols">
            {list.map((g) => (
              <div className="p-listcol" key={g.aisle}>
                <h3>{g.label}</h3>
                <ul>
                  {g.items.map((i) => (
                    <li key={i.name}>
                      {i.name}
                      <span>{qtyLabel(i.qty, i.unit)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="p-total">
            <span>{t("storeTotal")} · {store.name}</span>
            <strong>{money(lang, Math.round(total * 100) / 100)}</strong>
          </div>

          <AppCallout lang={lang} variant="week" />

          <h2 className="p-subhead" style={{ marginTop: 44 }}>{t("storeOther")}</h2>
          <ul className="p-stores">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={paths.store(lang, s.slug)} className="p-store">
                  <img src={storeLogo(s)} alt="" width={44} height={44} loading="lazy" aria-hidden="true" />
                  <span>{s.name}</span>
                  <IconArrow size={16} />
                </Link>
              </li>
            ))}
          </ul>
          <p className="p-fineprint">{t("storesDisclaimer")}</p>
        </div>
      </section>

      <CtaBanner lang={lang} dishes={week.slice(0, 3).map((r) => r.id)} />
      <PickFooter lang={lang} />
    </>
  )
}

/** Shared bits for the store index section on the landing page. */
export function StoreIndexTeaser({ lang }: { lang: Lang }) {
  const t = tr(lang)
  return (
    <p className="p-lead">
      <IconStore size={18} /> {t("storeAll")}: {storesFor(lang).map((s) => s.name).join(" · ")}
    </p>
  )
}

/** Reading time-ish helper kept for the recipe cards' clock icon import. */
export const clockIcon = IconClock
