"use client"

import { PICK, SUPERMARKETS, DISHES, FAQ } from "@/lib/pick-content"
import { usePickT, usePickLang, Reveal } from "./bits"
import { PickNav, PickFooter, CtaBanner } from "./chrome"

const FLOATERS = [
  { e: "🍋", x: "6%", y: "16%", s: 38, d: 5.2, delay: 0 },
  { e: "🥑", x: "90%", y: "12%", s: 44, d: 6, delay: 0.6 },
  { e: "🧄", x: "14%", y: "68%", s: 32, d: 4.6, delay: 0.3 },
  { e: "🌶️", x: "86%", y: "72%", s: 34, d: 5.6, delay: 0.9 },
  { e: "🥕", x: "3%", y: "44%", s: 34, d: 5, delay: 1.1 },
  { e: "🍅", x: "94%", y: "46%", s: 30, d: 4.8, delay: 0.4 },
]

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PickLanding() {
  const t = usePickT()
  const lang = usePickLang()

  const features = [
    { icon: "📅", bg: "var(--p-lavender)", t: t("f1t"), b: t("f1b") },
    { icon: "💰", bg: "var(--p-mint)", t: t("f2t"), b: t("f2b") },
    { icon: "🍳", bg: "var(--p-peach)", t: t("f3t"), b: t("f3b") },
    { icon: "🛒", bg: "var(--p-blue)", t: t("f4t"), b: t("f4b") },
    { icon: "🔁", bg: "var(--p-yellow)", t: t("f5t"), b: t("f5b") },
    { icon: "🔒", bg: "var(--p-teal)", t: t("f6t"), b: t("f6b") },
  ]

  const steps = [
    { k: t("s1k"), t: t("s1t"), b: t("s1b") },
    { k: t("s2k"), t: t("s2t"), b: t("s2b") },
    { k: t("s3k"), t: t("s3t"), b: t("s3b") },
  ]

  const planMeals = [
    { day: "Mon", emoji: "🍜", bg: "var(--p-peach)", name: lang === "es" ? "Ramen de pollo" : "Chicken ramen", meta: "18m · $6.40" },
    { day: "Tue", emoji: "🌮", bg: "var(--p-orange)", name: lang === "es" ? "Tacos de ternera" : "Beef tacos", meta: "25m · $7.10" },
    { day: "Wed", emoji: "🐟", bg: "var(--p-blue)", name: lang === "es" ? "Salmón al limón" : "Lemon herb salmon", meta: "20m · $8.20" },
  ]

  return (
    <>
      <PickNav />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="p-hero">
        <div className="p-float" aria-hidden="true">
          {FLOATERS.map((f, i) => (
            <span
              key={i}
              style={{
                left: f.x,
                top: f.y,
                ["--s" as string]: `${f.s}px`,
                ["--d" as string]: `${f.d}s`,
                ["--delay" as string]: `${f.delay}s`,
              }}
            >
              {f.e}
            </span>
          ))}
        </div>
        <div className="p-wrap p-hero__grid">
          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="p-badge">
              <span className="p-dot" /> {t("heroBadge")} · iOS 17+
            </span>
            <h1 className="p-display">
              {t("heroTitleA")}
              <br />
              <span className="p-green-word p-italic">{t("heroTitleB")}</span>
            </h1>
            <p className="p-lead" style={{ marginTop: 22 }}>{t("heroLead")}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }}>
              <a className="p-btn p-btn--primary" href={PICK.appStoreUrl} target="_blank" rel="noopener">
                {t("heroCta")}
              </a>
              <a className="p-btn p-btn--ghost" href="#how">{t("heroCta2")}</a>
            </div>
            <div className="p-hero__meta">
              <span><strong>{PICK.recipeCount}</strong> {t("metaRecipes")}</span>
              <span>✓ {t("metaNoAccount")}</span>
              <span>✓ {t("metaOffline")}</span>
            </div>
          </div>

          {/* Plan artifact */}
          <Reveal className="p-plan" delay={0.1}>
            <div className="p-plan__head">
              <span className="p-plan__title">{t("planTitle")}</span>
              <span className="p-plan__chip">◍ {t("planChip")}</span>
            </div>
            {planMeals.map((m) => (
              <div className="p-meal" key={m.day}>
                <div className="p-meal__day">{m.day}</div>
                <div className="p-meal__emoji" style={{ background: m.bg }}>{m.emoji}</div>
                <div className="p-meal__body">
                  <div className="p-meal__name">{m.name}</div>
                  <div className="p-meal__meta">{m.meta}</div>
                </div>
                <div className="p-meal__price">{m.meta.split("· ")[1]}</div>
              </div>
            ))}
            <div className="p-plan__foot">
              <span>✓ {t("planFoot")}</span>
              <span>$21.70 / $50</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Supermarket marquee ──────────────────────────────── */}
      <div className="p-marquee" aria-label={t("storesTitle")}>
        <div className="p-marquee__track">
          {[...SUPERMARKETS, ...SUPERMARKETS].map((s, i) => (
            <span className="p-chip" key={i}>
              <span className="p-chip__dot" style={{ background: s.color }} />
              {s.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="p-section" id="features">
        <div className="p-wrap">
          <Reveal className="p-shead">
            <span className="p-eyebrow">{t("featEyebrow")}</span>
            <h2 className="p-h2">{t("featTitle")}</h2>
            <p className="p-lead">{t("featLead")}</p>
          </Reveal>
          <div className="p-grid-3">
            {features.map((f, i) => (
              <Reveal className="p-card" key={f.t} delay={(i % 3) * 0.08}>
                <div className="p-card__icon" style={{ background: f.bg }}>{f.icon}</div>
                <h3>{f.t}</h3>
                <p>{f.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="p-section" id="how" style={{ background: "var(--p-cream-deep)" }}>
        <div className="p-wrap">
          <Reveal className="p-shead">
            <span className="p-eyebrow">{t("howEyebrow")}</span>
            <h2 className="p-h2">{t("howTitle")}</h2>
          </Reveal>
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
        </div>
      </section>

      {/* ── Dishes ───────────────────────────────────────────── */}
      <section className="p-section">
        <div className="p-wrap">
          <Reveal className="p-shead">
            <span className="p-eyebrow">{t("dishesEyebrow")}</span>
            <h2 className="p-h2">{t("dishesTitle")}</h2>
            <p className="p-lead">{t("dishesLead")}</p>
          </Reveal>
          <Reveal className="p-dishes">
            {DISHES.map((d) => (
              <div className="p-dish" key={d.en} style={{ background: d.bg }}>
                <span aria-hidden="true" style={{ fontSize: "inherit", position: "static" }}>{d.emoji}</span>
                <span>{lang === "es" ? d.es : d.en}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section className="p-section" id="pricing" style={{ background: "var(--p-green-soft)" }}>
        <div className="p-wrap">
          <Reveal className="p-shead" style={{ textAlign: "center", marginInline: "auto" }}>
            <span className="p-eyebrow" style={{ justifyContent: "center" }}>{t("priceEyebrow")}</span>
            <h2 className="p-h2">{t("priceTitle")}</h2>
            <p className="p-lead" style={{ marginInline: "auto" }}>{t("priceLead")}</p>
          </Reveal>
          <div className="p-price-grid">
            <Reveal className="p-price p-price--best">
              <span className="p-price__flag">{t("priceYearlyFlag")}</span>
              <div className="p-price__name">{t("priceYearlyName")}</div>
              <div className="p-price__amount">{PICK.pricing.yearlyMonthly} <small>{t("perMonth")}</small></div>
              <div className="p-price__sub">{t("priceYearlySub")}</div>
              <ul>
                <li><Check /> {t("priceFeat1")}</li>
                <li><Check /> {t("priceFeat2")}</li>
                <li><Check /> {t("priceFeat3")}</li>
                <li><Check /> {t("priceFeat4")}</li>
              </ul>
            </Reveal>
            <Reveal className="p-price" delay={0.08}>
              <div className="p-price__name">{t("priceMonthlyName")}</div>
              <div className="p-price__amount">{PICK.pricing.monthly} <small>{t("perMonth")}</small></div>
              <div className="p-price__sub">{t("priceMonthlySub")}</div>
              <ul>
                <li><Check /> {t("priceFeat1")}</li>
                <li><Check /> {t("priceFeat2")}</li>
                <li><Check /> {t("priceFeat3")}</li>
                <li><Check /> {t("priceFeat4")}</li>
              </ul>
            </Reveal>
          </div>
          <p className="p-muted" style={{ textAlign: "center", marginTop: 22, fontWeight: 700 }}>
            ✓ {t("priceNote")}
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="p-section" id="faq">
        <div className="p-wrap">
          <Reveal className="p-shead">
            <span className="p-eyebrow">{t("faqEyebrow")}</span>
            <h2 className="p-h2">{t("faqTitle")}</h2>
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

      <CtaBanner />
      <PickFooter />
    </>
  )
}
