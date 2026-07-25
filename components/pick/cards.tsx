import Link from "next/link"
import { money, tagLabel, type Recipe, type Collection } from "@/lib/pick-catalog"
import { dishImg, paths, T, type Lang } from "@/lib/pick-content"
import { IconClock, IconTag } from "./icons"

export function RecipeCard({
  lang,
  recipe,
  priority = false,
}: {
  lang: Lang
  recipe: Recipe
  priority?: boolean
}) {
  return (
    <li className="p-rcard">
      <Link href={paths.recipe(lang, recipe.id)}>
        <img
          src={dishImg(recipe.id, 360)}
          alt={recipe.name}
          width={360}
          height={360}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
        />
        <div className="p-rcard__body">
          <h3>{recipe.name}</h3>
          <div className="p-rcard__meta">
            <span><IconClock size={14} /> {recipe.minutes} min</span>
            <span>{money(lang, recipe.price)}</span>
          </div>
          <span className="p-rcard__tag"><IconTag size={13} /> {tagLabel(lang, recipe.tag)}</span>
        </div>
      </Link>
    </li>
  )
}

export function RecipeGrid({
  lang,
  recipes,
  priorityCount = 4,
}: {
  lang: Lang
  recipes: Recipe[]
  priorityCount?: number
}) {
  return (
    <ul className="p-rgrid">
      {recipes.map((r, i) => (
        <RecipeCard key={r.id} lang={lang} recipe={r} priority={i < priorityCount} />
      ))}
    </ul>
  )
}

/** Compact link list of collections, grouped — the site's main internal linking. */
export function CollectionLinks({
  lang,
  collections,
  counts,
  current,
}: {
  lang: Lang
  collections: Collection[]
  counts: Record<string, number>
  current?: string
}) {
  return (
    <ul className="p-collinks">
      {collections.map((c) => (
        <li key={c.key}>
          <Link
            href={paths.collection(lang, c.slug[lang])}
            className={`p-collink ${current === c.key ? "is-current" : ""}`}
            aria-current={current === c.key ? "page" : undefined}
          >
            {c.title[lang]}
            <em>{counts[c.key]}</em>
          </Link>
        </li>
      ))}
    </ul>
  )
}

/** "Browse by mood / diet / protein…" block used on the recipe index. */
export function CollectionGroups({
  lang,
  groups,
  counts,
  current,
}: {
  lang: Lang
  groups: { label: string; items: Collection[] }[]
  counts: Record<string, number>
  current?: string
}) {
  return (
    <div className="p-collgroups">
      {groups.map((g) => (
        <div key={g.label}>
          <h2 className="p-collgroup__title">{g.label}</h2>
          <CollectionLinks lang={lang} collections={g.items} counts={counts} current={current} />
        </div>
      ))}
    </div>
  )
}

export function StatStrip({ items }: { items: { value: string; label: string }[] }) {
  return (
    <ul className="p-stats">
      {items.map((s) => (
        <li key={s.label}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </li>
      ))}
    </ul>
  )
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow?: string
  title: string
  lead?: string
  center?: boolean
}) {
  return (
    <div className={`p-shead ${center ? "p-shead--center" : ""}`}>
      {eyebrow && <span className="p-eyebrow">{eyebrow}</span>}
      <h2 className="p-h2">{title}</h2>
      {lead && <p className="p-lead">{lead}</p>}
    </div>
  )
}

/** Small "in the app" call-out reused across recipe and collection pages. */
export function AppCallout({ lang, variant = "recipe" }: { lang: Lang; variant?: "recipe" | "week" }) {
  const title = variant === "week" ? T.inTheAppWeek[lang] : T.inTheApp[lang]
  const body = variant === "week" ? T.inTheAppWeekBody[lang] : T.inTheAppBody[lang]
  return (
    <aside className="p-callout">
      <h2>{title}</h2>
      <p>{body}</p>
    </aside>
  )
}
