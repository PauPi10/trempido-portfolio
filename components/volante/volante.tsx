import Link from "next/link"
import type { Metadata } from "next"
import { VOLANTE_BRAND } from "@/lib/volante-config"
import {
  VOLANTE,
  VLANGS,
  LANG_NAME,
  LANDING,
  VCOUNTRIES,
  COUNTRY_NAME,
  EXAM,
  FORMAT,
  FLAG,
  FLAG_VERTICAL,
  HOME_COUNTRY,
  screen,
  t,
  vabs,
  valternates,
  vpath,
  type VCountry,
  type VLang,
  type VPage,
} from "@/lib/volante-content"
import { LEGAL, type Block, type DocKey } from "@/lib/volante-legal"

// ── small pieces ─────────────────────────────────────────────────────────────

/** **bold** and [label](url) → React. Nothing else is interpreted. */
function Rich({ text }: { text: string }) {
  const out: React.ReactNode[] = []
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[1]) out.push(<strong key={i++}>{m[1]}</strong>)
    else {
      const href = m[3]
      const ext = href.startsWith("http")
      out.push(
        ext ? (
          <a key={i++} href={href} target="_blank" rel="noopener">{m[2]}</a>
        ) : href.startsWith("/") ? (
          <Link key={i++} href={href}>{m[2]}</Link>
        ) : (
          <a key={i++} href={href}>{m[2]}</a>
        ),
      )
    }
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return <>{out}</>
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) =>
        typeof b === "string" ? (
          <p key={i}><Rich text={b} /></p>
        ) : (
          <ul key={i}>{b.ul.map((li, j) => <li key={j}><Rich text={li} /></li>)}</ul>
        ),
      )}
    </>
  )
}

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function VMark({ size = 32 }: { size?: number }) {
  return <img className="v-mark" src={VOLANTE_BRAND.logo} alt="" width={size} height={size} aria-hidden="true" />
}

function Flag({ c }: { c: VCountry }) {
  return (
    <span className={`v-flag ${FLAG_VERTICAL[c] ? "v-flag--v" : ""}`} aria-hidden="true">
      {FLAG[c].map((col, i) => <span key={i} style={{ background: col }} />)}
    </span>
  )
}

function IconApple({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.37 12.73c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.41 1.2-2.47-.03-.01-2.3-.88-2.32-3.5zM14.2 6.26c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.68-.92 2.67.97.07 1.96-.49 2.56-1.22z" />
    </svg>
  )
}

export function AppStoreButton({ lang, small = false, light = false }: { lang: VLang; small?: boolean; light?: boolean }) {
  const cls = `v-btn ${small ? "v-btn--sm" : ""}`
  if (!VOLANTE.appStoreUrl) {
    return (
      <span className={`${cls} v-btn--soon`} aria-disabled="true">
        <IconApple size={small ? 15 : 18} />
        {t(lang, "soon")}
      </span>
    )
  }
  return (
    <a className={`${cls} ${light ? "v-btn--light" : "v-btn--ink"}`} href={VOLANTE.appStoreUrl} target="_blank" rel="noopener">
      <IconApple size={small ? 15 : 18} />
      {t(lang, "getApp")}
    </a>
  )
}

function LangPicker({ lang, page }: { lang: VLang; page: VPage }) {
  return (
    <details className="v-lang">
      <summary aria-label={t(lang, "language")}>
        {lang.toUpperCase()} <span aria-hidden="true">▾</span>
      </summary>
      <div className="v-lang__panel">
        {VLANGS.map((l) => (
          <Link key={l} href={vpath(l, page)} hrefLang={l} lang={l} aria-current={l === lang ? "true" : undefined}>
            {LANG_NAME[l]}
          </Link>
        ))}
      </div>
    </details>
  )
}

function Nav({ lang, page }: { lang: VLang; page: VPage }) {
  const home = vpath(lang)
  const onHome = page === "home"
  const anchor = (id: string) => (onHome ? `#${id}` : `${home}#${id}`)
  return (
    <nav className="v-nav">
      <div className="v-wrap v-nav__inner">
        <Link href={home} className="v-nav__logo">
          <VMark />
          <span>volante</span>
        </Link>
        <div className="v-nav__links">
          <a href={anchor("countries")}>{t(lang, "navCountries")}</a>
          <a href={anchor("how")}>{t(lang, "navHow")}</a>
          <a href={anchor("pro")}>{t(lang, "navPro")}</a>
          <a href={anchor("faq")}>{t(lang, "navFaq")}</a>
        </div>
        <div className="v-nav__right">
          <LangPicker lang={lang} page={page} />
          <AppStoreButton lang={lang} small />
        </div>
      </div>
    </nav>
  )
}

function Footer({ lang }: { lang: VLang }) {
  return (
    <footer className="v-footer">
      <div className="v-wrap">
        <div className="v-footer__cols">
          <div>
            <Link href={vpath(lang)} className="v-nav__logo" style={{ fontSize: "1.15rem" }}>
              <VMark size={28} />
              <span>volante</span>
            </Link>
            <p style={{ color: "var(--v-ink-dim)", maxWidth: "36ch", margin: "12px 0 16px" }}>{t(lang, "footTagline")}</p>
            <AppStoreButton lang={lang} small />
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href={vpath(lang, "privacy")}>{t(lang, "privacy")}</Link></li>
              <li><Link href={vpath(lang, "terms")}>{t(lang, "terms")}</Link></li>
              <li><Link href={vpath(lang, "legal")}>{t(lang, "legal")}</Link></li>
              <li><a href={VOLANTE.eula} target="_blank" rel="noopener">{t(lang, "eula")}</a></li>
            </ul>
          </div>
          <div>
            <h4>{t(lang, "support")}</h4>
            <ul>
              <li><Link href={vpath(lang, "support")}>{t(lang, "support")}</Link></li>
              <li><a href={`mailto:${VOLANTE.supportEmail}`}>{VOLANTE.supportEmail}</a></li>
            </ul>
          </div>
        </div>
        <div className="v-footer__bottom">
          <span>© 2026 Volante · {VOLANTE.company.name}</span>
          <span>
            {VLANGS.map((l, i) => (
              <span key={l}>
                {i > 0 && " · "}
                <Link href={vpath(l)} hrefLang={l} lang={l}>{LANG_NAME[l]}</Link>
              </span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  )
}

// ── metadata ─────────────────────────────────────────────────────────────────

const OG_LOCALE: Record<VLang, string> = { en: "en_GB", es: "es_ES", de: "de_DE", it: "it_IT", nl: "nl_NL" }

export function volanteMeta(lang: VLang, page: VPage): Metadata {
  const isHome = page === "home"
  const doc = isHome ? undefined : LEGAL[lang][page as DocKey]
  const title = isHome ? LANDING[lang].title : `${doc!.title} · Volante`
  const description = isHome ? LANDING[lang].description : doc!.description
  const path = vpath(lang, page)
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path, languages: valternates(page) },
    openGraph: {
      type: "website",
      siteName: "Volante",
      title,
      description,
      url: vabs(path),
      locale: OG_LOCALE[lang],
      images: [{ url: VOLANTE_BRAND.ogImage[lang], width: 1200, height: 630, alt: "Volante" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [VOLANTE_BRAND.ogImage[lang]] },
    icons: { icon: VOLANTE_BRAND.favicon, apple: VOLANTE_BRAND.appleIcon },
    robots: { index: true, follow: true },
  }
}

// ── landing ──────────────────────────────────────────────────────────────────

export function VolanteLanding({ lang }: { lang: VLang }) {
  const L = LANDING[lang]
  const hc = HOME_COUNTRY[lang]
  const shotKeys = ["welcome", "home", "lesson", "sign", "fix", "result"] as const
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: "Volante",
      operatingSystem: "iOS",
      applicationCategory: "EducationalApplication",
      description: L.description,
      inLanguage: VLANGS,
      image: vabs(VOLANTE_BRAND.logoPng),
      url: vabs(vpath(lang)),
      ...(VOLANTE.appStoreUrl ? { installUrl: VOLANTE.appStoreUrl, downloadUrl: VOLANTE.appStoreUrl } : {}),
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", category: "free" },
      publisher: { "@type": "Organization", name: VOLANTE.company.name, url: VOLANTE.origin },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: L.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ]

  return (
    <div lang={lang}>
      {ld.map((d, i) => <JsonLd key={i} data={d} />)}
      <Nav lang={lang} page="home" />

      <header className="v-hero">
        <div className="v-wrap v-hero__grid">
          <div>
            <span className="v-eyebrow">{L.eyebrow}</span>
            <h1 className="v-display">{L.h1}</h1>
            <p className="v-lead">{L.lead}</p>
            <div className="v-hero__cta">
              <AppStoreButton lang={lang} />
              <span className="v-hero__note">{L.noAccount}</span>
            </div>
          </div>
          <div className="v-hero__phones">
            <div className="v-hero__road" aria-hidden="true" />
            <div className="v-phone"><img src={screen(hc, "welcome")} alt={L.shotsAlt[0]} width={600} height={1305} /></div>
            <div className="v-phone"><img src={screen(hc, "home")} alt={L.shotsAlt[1]} width={600} height={1305} /></div>
          </div>
        </div>
      </header>

      <section className="v-section" id="countries">
        <div className="v-wrap">
          <div className="v-shead">
            <span className="v-eyebrow">{L.countriesEyebrow}</span>
            <h2 className="v-h2">{L.countriesTitle}</h2>
            <p className="v-lead">{L.countriesLead}</p>
          </div>
          <ul className="v-countries" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {VCOUNTRIES.map((c) => (
              <li key={c} className="v-country">
                <div className="v-country__shot">
                  <img src={screen(c, "sign")} alt={`${COUNTRY_NAME[c][lang]} · ${EXAM[c].exam}`} width={600} height={1305} loading="lazy" />
                </div>
                <div className="v-country__name"><Flag c={c} />{COUNTRY_NAME[c][lang]}</div>
                <div>
                  <div className="v-country__exam">{EXAM[c].authority} · {EXAM[c].exam}</div>
                  <div className="v-country__fmt">{FORMAT[c][lang]}</div>
                </div>
                <span className="v-country__chip" lang={c === "uk" ? "en" : c}>{EXAM[c].lang}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="v-section" id="how" style={{ background: "var(--v-bg-deep)" }}>
        <div className="v-wrap">
          <div className="v-shead">
            <span className="v-eyebrow">{L.howEyebrow}</span>
            <h2 className="v-h2">{L.howTitle}</h2>
          </div>
          <div className="v-features">
            {L.features.map((f, i) => (
              <div key={f.title} className="v-feature">
                <span className="v-feature__n">{i + 1}</span>
                <h3 className="v-h3">{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
          <div className="v-shots">
            {shotKeys.map((k, i) => (
              <figure key={k}>
                <div className="v-phone v-phone--sm">
                  <img src={screen(hc, k)} alt={L.shotsAlt[i]} width={600} height={1305} loading="lazy" />
                </div>
                <figcaption>{L.shotsAlt[i]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="v-section" id="pro">
        <div className="v-wrap">
          <div className="v-pro">
            <div>
              <span className="v-eyebrow">{L.proEyebrow}</span>
              <h2 className="v-h2">{L.proTitle}</h2>
              <p className="v-lead">{L.proBody}</p>
            </div>
            <div>
              <ul>{L.proPoints.map((p) => <li key={p}>{p}</li>)}</ul>
              <p className="v-pro__fine">
                {L.proFine}{" "}
                <Link href={vpath(lang, "terms")}>{t(lang, "terms")}</Link> ·{" "}
                <a href={VOLANTE.eula} target="_blank" rel="noopener">{t(lang, "eula")}</a> ·{" "}
                <Link href={vpath(lang, "privacy")}>{t(lang, "privacy")}</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="v-section" id="faq" style={{ paddingTop: 24 }}>
        <div className="v-wrap">
          <div className="v-shead"><h2 className="v-h2">{L.faqTitle}</h2></div>
          <div className="v-faq">
            {L.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="v-section--tight">
        <div className="v-wrap">
          <div className="v-cta">
            <h2 className="v-h2">{L.ctaTitle}</h2>
            <p>{L.ctaBody}</p>
            <AppStoreButton lang={lang} />
          </div>
          <p className="v-disclaimer">{t(lang, "notAffiliated")}</p>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  )
}

// ── legal / support pages ────────────────────────────────────────────────────

export function VolanteDoc({ lang, page }: { lang: VLang; page: DocKey }) {
  const doc = LEGAL[lang][page]
  const crumbs = [
    { name: "Volante", path: vpath(lang) },
    { name: doc.title, path: vpath(lang, page) },
  ]
  const others = (["privacy", "terms", "support", "legal"] as DocKey[]).filter((p) => p !== page)
  return (
    <div lang={lang}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: vabs(c.path) })),
        }}
      />
      <Nav lang={lang} page={page} />
      <header className="v-pagehead">
        <div className="v-wrap">
          <nav className="v-crumb" aria-label="Breadcrumb">
            <Link href={vpath(lang)}>Volante</Link>
            <span aria-hidden="true">/</span>
            <span>{doc.title}</span>
          </nav>
          <h1 className="v-display v-display--page">{doc.title}</h1>
        </div>
      </header>
      <section className="v-section--tight">
        <div className="v-wrap v-prose">
          <p className="v-prose__meta">{t(lang, "updated")}</p>
          {doc.summary && (
            <div className="v-card-note"><p><Rich text={doc.summary} /></p></div>
          )}
          {doc.sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              <Blocks blocks={s.body} />
            </div>
          ))}
          {page !== "legal" && <p className="v-prose__meta" style={{ marginTop: 32 }}>{t(lang, "notAffiliated")}</p>}
          <div className="v-otherdocs">
            {others.map((p) => <Link key={p} href={vpath(lang, p)}>{LEGAL[lang][p].title}</Link>)}
            <a href={VOLANTE.eula} target="_blank" rel="noopener">{t(lang, "eula")}</a>
          </div>
        </div>
      </section>
      <Footer lang={lang} />
    </div>
  )
}
