import Link from "next/link"
import {
  PICK,
  PRICING,
  FAQ,
  T,
  tr,
  paths,
  dishImg,
  storesFor,
  type Lang,
} from "@/lib/pick-content"
import {
  COLLECTIONS,
  catalogStats,
  collectionRecipes,
  money,
  recipes,
  sampleWeek,
  tagLabel,
} from "@/lib/pick-catalog"
import { Reveal } from "./reveal"
import { PickNav, PickFooter, CtaBanner, StoreWall, AppStoreButton } from "./chrome"
import { Phone, PlanScreen, ListScreen, RecipeScreen } from "./device"
import { SectionHead, StatStrip } from "./cards"
import {
  IconArrow,
  IconBudget,
  IconCheck,
  IconClock,
  IconLock,
  IconPan,
  IconPlan,
  IconCart,
  IconSwap,
} from "./icons"

/** The week shown on the phone in the hero — one dinner per vibe. */
const HERO_WEEK = [
  "chicken-ramen-bowl",
  "homemade-burgers",
  "meatball-pasta",
  "cheesy-tomato-risotto",
  "aglio-e-olio-spaghetti",
]

/** Sixteen dinners for the photo wall, spread across every vibe in the catalog. */
function wallDishes(lang: Lang) {
  const all = recipes(lang)
  const tags = [...new Set(all.map((r) => r.tag))]
  const out: typeof all = []
  for (let round = 0; out.length < 16; round++) {
    for (const tag of tags) {
      const next = all.filter((r) => r.tag === tag)[round * 2]
      if (next && !out.includes(next)) out.push(next)
      if (out.length >= 16) break
    }
  }
  return out
}

export function PickLanding({ lang }: { lang: Lang }) {
  const t = tr(lang)
  const stats = catalogStats(lang)
  const price = PRICING[lang]
  // Hand-picked for the hero: five different vibes, five different mains, all
  // real catalog entries with their real times and prices.
  const week = HERO_WEEK.map((id) => recipes(lang).find((r) => r.id === id)!).filter(Boolean)
  const wall = wallDishes(lang)
  const budget = 40
  const homeStore = lang === "es" ? "Mercadona" : "Walmart"

  const features = [
    { Icon: IconPlan, bg: "var(--p-lavender)", t: t("f1t"), b: t("f1b") },
    { Icon: IconBudget, bg: "var(--p-mint)", t: t("f2t"), b: t("f2b") },
    { Icon: IconPan, bg: "var(--p-peach)", t: t("f3t"), b: t("f3b") },
    { Icon: IconCart, bg: "var(--p-blue)", t: t("f4t"), b: t("f4b") },
    { Icon: IconSwap, bg: "var(--p-yellow)", t: t("f5t"), b: t("f5b") },
    { Icon: IconLock, bg: "var(--p-teal)", t: t("f6t"), b: t("f6b") },
  ]

  const steps = [
    { k: t("s1k"), t: t("s1t"), b: t("s1b") },
    { k: t("s2k"), t: t("s2t"), b: t("s2b") },
    { k: t("s3k"), t: t("s3t"), b: t("s3b") },
  ]

  // The hubs worth surfacing from the home page, with their real sizes.
  const featured = ["under30", "cheap", "chicken", "vegan", "speedy", "gluten-free", "fakeaway", "lowcal"]
    .map((key) => COLLECTIONS.find((c) => c.key === key)!)
    .map((c) => ({ c, n: collectionRecipes(lang, c).length }))

  return (
    <>
      <PickNav lang={lang} alt={paths.home(lang === "es" ? "en" : "es")} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="p-hero">
        <div className="p-wrap p-hero__grid">
          <div>
            <span className="p-badge">
              <span className="p-dot" /> {t("heroBadge")} · iOS 17+
            </span>
            <p className="p-kicker">{t("heroKicker")}</p>
            <h1 className="p-display">
              {t("heroTitleA")}
              <br />
              <span className="p-green-word p-italic">{t("heroTitleB")}</span>
            </h1>
            <p className="p-lead" style={{ marginTop: 20 }}>{t("heroLead")}</p>
            <div className="p-btnrow">
              <AppStoreButton lang={lang} label={t("heroCta")} />
              <a className="p-btn p-btn--ghost" href="#how">{t("heroCta2")}</a>
            </div>
            <div className="p-hero__meta">
              <span><strong>{stats.count}</strong> {t("metaRecipes")}</span>
              <span><IconCheck size={15} /> {t("metaNoAccount")}</span>
              <span><IconCheck size={15} /> {t("metaOffline")}</span>
            </div>
          </div>

          <Phone
            label={t("planTitle")}
            caption={lang === "es" ? "Plan de la semana en la app" : "The week, inside the app"}
            className="p-phonewrap--hero"
          >
            <PlanScreen lang={lang} week={week} budget={budget} store={homeStore} />
          </Phone>
        </div>
      </section>

      {/* ── Proof, from the catalog itself ───────────────────── */}
      <div className="p-statband">
        <div className="p-wrap">
          <StatStrip
            items={[
              { value: String(stats.count), label: t("proofRecipes") },
              { value: String(stats.under30), label: t("proofUnder30") },
              { value: stats.avgPriceLabel, label: t("proofAvg") },
              { value: String(storesFor(lang).length), label: t("proofStores") },
            ]}
          />
        </div>
      </div>

      {/* ── Supermarkets (real brand marks) ─────────────────── */}
      <StoreWall lang={lang} />

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="p-section" id="features">
        <div className="p-wrap">
          <Reveal>
            <SectionHead eyebrow={t("featEyebrow")} title={t("featTitle")} lead={t("featLead")} />
          </Reveal>
          <div className="p-grid-3">
            {features.map((f, i) => (
              <Reveal className="p-card" key={f.t} delay={(i % 3) * 0.08}>
                <div className="p-card__icon" style={{ background: f.bg }}>
                  <f.Icon size={26} />
                </div>
                <h3>{f.t}</h3>
                <p>{f.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works, with the app on screen ─────────────── */}
      <section className="p-section" id="how" style={{ background: "var(--p-cream-deep)" }}>
        <div className="p-wrap">
          <Reveal>
            <SectionHead eyebrow={t("howEyebrow")} title={t("howTitle")} />
          </Reveal>
          <div className="p-howgrid">
            <div>
              {steps.map((s, i) => (
                <Reveal className="p-step" key={s.t} delay={i * 0.06}>
                  <div className="p-step__n">{i + 1}</div>
                  <div>
                    <div className="p-step__kicker">{s.k}</div>
                    <h3>{s.t}</h3>
                    <p>{s.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="p-phones p-phones--pair" delay={0.1}>
              <Phone
                label={lang === "es" ? "la compra" : "groceries"}
                caption={lang === "es" ? "Ordenada por pasillo" : "Sorted by aisle"}
              >
                <ListScreen lang={lang} week={week} />
              </Phone>
              <Phone
                label={lang === "es" ? "la receta" : "the recipe"}
                caption={lang === "es" ? "Macros y pasos" : "Macros and steps"}
                className="p-phonewrap--lift"
              >
                <RecipeScreen lang={lang} recipe={week[0]} />
              </Phone>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── The catalog ──────────────────────────────────────── */}
      <section className="p-section">
        <div className="p-wrap">
          <Reveal>
            <SectionHead
              eyebrow={t("dishesEyebrow")}
              title={t("dishesTitle")}
              lead={t("dishesLead")}
            />
            <Link href={paths.recipes(lang)} className="p-btn p-btn--ghost">
              {t("dishesCta")} <IconArrow size={18} />
            </Link>
          </Reveal>
        </div>

        <div className="p-dishwall" aria-label={t("dishesTitle")}>
          {[wall.slice(0, 8), wall.slice(8)].map((row, ri) => (
            <div className={`p-dishwall__track ${ri === 1 ? "p-dishwall__track--rev" : ""}`} key={ri}>
              {[...row, ...row].map((d, i) => (
                <figure className="p-dishcard" key={`${d.id}-${i}`} aria-hidden={i >= row.length}>
                  {i < row.length ? (
                    <Link href={paths.recipe(lang, d.id)}>
                      <img src={dishImg(d.id, 360)} alt={d.name} width={360} height={360} loading="lazy" />
                      <figcaption>
                        <strong>{d.name}</strong>
                        <span>{d.minutes} min · {money(lang, d.price)}</span>
                      </figcaption>
                    </Link>
                  ) : (
                    <>
                      <img src={dishImg(d.id, 360)} alt="" width={360} height={360} loading="lazy" />
                      <figcaption>
                        <strong>{d.name}</strong>
                        <span>{d.minutes} min · {money(lang, d.price)}</span>
                      </figcaption>
                    </>
                  )}
                </figure>
              ))}
            </div>
          ))}
        </div>

        <div className="p-wrap" style={{ marginTop: 44 }}>
          <ul className="p-collinks p-collinks--wide">
            {featured.map(({ c, n }) => (
              <li key={c.key}>
                <Link href={paths.collection(lang, c.slug[lang])} className="p-collink">
                  {c.title[lang]}
                  <em>{n}</em>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section className="p-section" id="pricing" style={{ background: "var(--p-green-soft)" }}>
        <div className="p-wrap">
          <Reveal>
            <SectionHead center eyebrow={t("priceEyebrow")} title={t("priceTitle")} lead={t("priceLead")} />
          </Reveal>
          <div className="p-price-grid">
            <Reveal className="p-price p-price--best">
              <span className="p-price__flag">{t("priceYearlyFlag")}</span>
              <div className="p-price__name">{t("priceYearlyName")}</div>
              <div className="p-price__amount">{price.yearly} <small>{t("perYear")}</small></div>
              <div className="p-price__badge">
                {lang === "es" ? `sale a ${price.yearlyWeekly} / semana` : `just ${price.yearlyWeekly} / week`}
              </div>
              <div className="p-price__sub">
                {lang === "es"
                  ? `se cobran ${price.yearly} una vez al año tras la prueba`
                  : `${price.yearly} billed once a year after the free trial`}
              </div>
              <ul>
                {[t("priceFeat1"), t("priceFeat2"), t("priceFeat3"), t("priceFeat4")].map((f) => (
                  <li key={f}><IconCheck size={18} /> {f}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="p-price" delay={0.08}>
              <div className="p-price__name">{t("priceWeeklyName")}</div>
              <div className="p-price__amount">{price.weekly} <small>{t("perWeek")}</small></div>
              <div className="p-price__sub">{t("priceWeeklySub")}</div>
              <ul>
                {[t("priceFeat1"), t("priceFeat2"), t("priceFeat3"), t("priceFeat4")].map((f) => (
                  <li key={f}><IconCheck size={18} /> {f}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <p className="p-muted" style={{ textAlign: "center", marginTop: 22, fontWeight: 700 }}>
            <IconCheck size={16} /> {t("priceNote")}
          </p>
          <p className="p-fineprint" style={{ textAlign: "center" }}>{t("priceStorefront")}</p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="p-section" id="faq">
        <div className="p-wrap">
          <Reveal>
            <SectionHead eyebrow={t("faqEyebrow")} title={t("faqTitle")} />
          </Reveal>
          <div className="p-faq">
            {FAQ.map((item) => (
              <details key={item.q.en}>
                <summary>{item.q[lang]}</summary>
                <p>{item.a[lang]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner lang={lang} dishes={week.slice(0, 3).map((r) => r.id)} />
      <PickFooter lang={lang} />
    </>
  )
}

/** Structured data for the landing page, in the page's own language. */
export function landingLd(lang: Lang) {
  const price = PRICING[lang]
  const stats = catalogStats(lang)
  const num = (s: string) => s.replace(/[^\d.,]/g, "").replace(",", ".")
  return [
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: "Pick",
      alternateName: lang === "es" ? "Pick: Menú Semanal y Compra" : "Pick: Weekly Meal Planner",
      operatingSystem: "iOS 17",
      applicationCategory: "LifestyleApplication",
      url: `${PICK.origin}${paths.home(lang)}`,
      installUrl: PICK.appStoreUrl,
      inLanguage: lang === "es" ? "es-ES" : "en",
      description:
        lang === "es"
          ? `Planificador de menús semanales para iPhone: ${stats.count} cenas con lista de la compra por pasillos y coste estimado en tu supermercado.`
          : `Weekly dinner planner for iPhone: ${stats.count} recipes with an aisle-sorted grocery list and the estimated cost at your supermarket.`,
      offers: [
        {
          "@type": "Offer",
          name: lang === "es" ? "Suscripción anual (3 días de prueba)" : "Yearly subscription (3-day free trial)",
          price: num(price.yearly),
          priceCurrency: lang === "es" ? "EUR" : "USD",
          category: "subscription",
        },
        {
          "@type": "Offer",
          name: lang === "es" ? "Suscripción semanal" : "Weekly subscription",
          price: num(price.weekly),
          priceCurrency: lang === "es" ? "EUR" : "USD",
          category: "subscription",
        },
      ],
      featureList: [T.f1t[lang], T.f2t[lang], T.f3t[lang], T.f4t[lang], T.f5t[lang], T.f6t[lang]],
      publisher: {
        "@type": "Organization",
        name: PICK.company.name,
        email: PICK.supportEmail,
        url: PICK.origin,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q[lang],
        acceptedAnswer: { "@type": "Answer", text: item.a[lang] },
      })),
    },
  ]
}

/** Vibe list used in a couple of places; keeps tagLabel imported where needed. */
export const vibeNames = (lang: Lang) =>
  [...new Set(recipes(lang).map((r) => r.tag))].map((t) => tagLabel(lang, t))
