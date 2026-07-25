// The app, on screen. Three iPhone frames rebuilt in HTML from the real
// catalog — the plan, the grocery list it produces and a recipe — so the
// marketing page shows the actual product instead of describing it.

import {
  groceryList,
  money,
  qtyLabel,
  tagLabel,
  type Recipe,
} from "@/lib/pick-catalog"
import { dishImg, T, type Lang } from "@/lib/pick-content"
import { IconCheck, IconSwap } from "./icons"

const DAYS: Record<Lang, string[]> = {
  en: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  es: ["Lun", "Mar", "Mié", "Jue", "Vie"],
}

export function Phone({
  children,
  label,
  caption,
  className = "",
}: {
  children: React.ReactNode
  label: string
  caption: string
  className?: string
}) {
  return (
    <figure className={`p-phonewrap ${className}`}>
      <div className="p-phone">
        <div className="p-phone__island" aria-hidden="true" />
        <div className="p-phone__screen">{children}</div>
      </div>
      <figcaption>
        <strong>{label}</strong>
        <span>{caption}</span>
      </figcaption>
    </figure>
  )
}

function ScreenHead({ title, right }: { title: string; right?: React.ReactNode }) {
  return (
    <div className="p-scr__head">
      <span className="p-scr__title">{title}</span>
      {right}
    </div>
  )
}

/** Screen 1 — the week Pick builds, with the budget bar at the bottom. */
export function PlanScreen({
  lang,
  week,
  budget,
  store,
}: {
  lang: Lang
  week: Recipe[]
  budget: number
  store: string
}) {
  const total = week.reduce((s, r) => s + r.price, 0)
  const pct = Math.min(100, Math.round((total / budget) * 100))
  return (
    <>
      <ScreenHead
        title={T.planTitle[lang]}
        right={<span className="p-scr__chip">{store}</span>}
      />
      <div className="p-scr__body">
        {week.map((r, i) => (
          <div className="p-scr__meal" key={r.id}>
            <span className="p-scr__day">{DAYS[lang][i]}</span>
            <img src={dishImg(r.id, 360)} alt="" width={40} height={40} loading="lazy" />
            <span className="p-scr__mealbody">
              <strong>{r.name}</strong>
              <span>{r.minutes} min · {tagLabel(lang, r.tag)}</span>
            </span>
            <span className="p-scr__price">{money(lang, r.price)}</span>
          </div>
        ))}
      </div>
      <div className="p-scr__foot">
        <div className="p-scr__bar" aria-hidden="true">
          <span style={{ width: `${pct}%` }} />
        </div>
        <div className="p-scr__footrow">
          <span>{money(lang, Math.round(total * 100) / 100)}</span>
          <span>/ {money(lang, budget)}</span>
        </div>
      </div>
    </>
  )
}

/** Screen 2 — the grocery list those dinners produce, grouped by aisle. */
export function ListScreen({ lang, week }: { lang: Lang; week: Recipe[] }) {
  const groups = groceryList(lang, week).slice(0, 3)
  let n = 0
  return (
    <>
      <ScreenHead
        title={lang === "es" ? "la compra" : "groceries"}
        right={<span className="p-scr__chip">{groups.reduce((s, g) => s + g.items.length, 0)}</span>}
      />
      <div className="p-scr__body p-scr__body--list">
        {groups.map((g) => (
          <div key={g.aisle} className="p-scr__aisle">
            <span className="p-scr__aisletitle">{g.label}</span>
            {g.items.slice(0, 4).map((it) => {
              const done = n++ % 3 === 0
              return (
                <div className={`p-scr__item ${done ? "is-done" : ""}`} key={it.name}>
                  <span className="p-scr__box">{done && <IconCheck size={12} />}</span>
                  <span className="p-scr__itemname">{it.name}</span>
                  <span className="p-scr__qty">{qtyLabel(it.qty, it.unit)}</span>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </>
  )
}

/** Screen 3 — a recipe as the app shows it: photo, macros, ingredients. */
export function RecipeScreen({ lang, recipe }: { lang: Lang; recipe: Recipe }) {
  const macros: [string, string][] = [
    [T.kcal[lang], `${recipe.kcal}`],
    [T.protein[lang], `${recipe.protein}g`],
    [T.carbs[lang], `${recipe.carbs}g`],
    [T.fats[lang], `${recipe.fats}g`],
  ]
  return (
    <>
      <div className="p-scr__hero">
        <img src={dishImg(recipe.id, 360)} alt="" width={280} height={170} loading="lazy" />
        <span className="p-scr__herochip">
          <IconSwap size={13} /> {lang === "es" ? "cambiar" : "swap"}
        </span>
      </div>
      <div className="p-scr__body p-scr__body--recipe">
        <strong className="p-scr__recipename">{recipe.name}</strong>
        <span className="p-scr__recipemeta">
          {recipe.minutes} min · {money(lang, recipe.price)} · {tagLabel(lang, recipe.tag)}
        </span>
        <div className="p-scr__macros">
          {macros.map(([k, v]) => (
            <span key={k}>
              <strong>{v}</strong>
              <em>{k}</em>
            </span>
          ))}
        </div>
        <span className="p-scr__aisletitle">{T.ingredients[lang]}</span>
        {recipe.ingredients.slice(0, 4).map((it) => (
          <div className="p-scr__item" key={it.name}>
            <span className="p-scr__emoji" aria-hidden="true">{it.emoji}</span>
            <span className="p-scr__itemname">{it.name}</span>
            <span className="p-scr__qty">{qtyLabel(it.qty, it.unit)}</span>
          </div>
        ))}
      </div>
    </>
  )
}

/** The three-phone showcase used on the landing page. */
export function DeviceShowcase({
  lang,
  week,
  budget,
  store,
  captions,
}: {
  lang: Lang
  week: Recipe[]
  budget: number
  store: string
  captions: { plan: [string, string]; list: [string, string]; recipe: [string, string] }
}) {
  return (
    <div className="p-phones">
      <Phone label={captions.plan[0]} caption={captions.plan[1]}>
        <PlanScreen lang={lang} week={week} budget={budget} store={store} />
      </Phone>
      <Phone label={captions.list[0]} caption={captions.list[1]} className="p-phonewrap--lift">
        <ListScreen lang={lang} week={week} />
      </Phone>
      <Phone label={captions.recipe[0]} caption={captions.recipe[1]}>
        <RecipeScreen lang={lang} recipe={week[0]} />
      </Phone>
    </div>
  )
}
