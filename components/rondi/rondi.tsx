import Link from "next/link"
import type { Metadata } from "next"
import { RONDI_BRAND } from "@/lib/rondi-config"
import {
  RONDI,
  RLANGS,
  LANG_NAME,
  LANDING,
  RCOUNTRIES,
  COUNTRY_NAME,
  EXAM,
  FORMAT,
  PASS,
  FLAG,
  FLAG_VERTICAL,
  HOME_COUNTRY,
  UPDATED_LABEL,
  SCREEN_W,
  SCREEN_H,
  contentLine,
  screen,
  t,
  rabs,
  ralternates,
  rpath,
  type RCountry,
  type RLang,
  type RPage,
  type ScreenKey,
} from "@/lib/rondi-content"
import { LEGAL, type Block, type DocKey } from "@/lib/rondi-legal"

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

/** JSON-LD, server-rendered. "<" is escaped so a string can never close the tag. */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

/** App icon + wordmark. The wordmark is an image of the word, so it carries the alt. */
function Lockup({ ivory = false, size = 34 }: { ivory?: boolean; size?: number }) {
  return (
    <>
      <img className="r-mark" src={RONDI_BRAND.icon} alt="" width={size} height={size} />
      <img
        className="r-wordmark"
        src={ivory ? RONDI_BRAND.wordmarkIvory : RONDI_BRAND.wordmarkInk}
        alt="Rondi"
        width={Math.round((size * 0.74 * 980) / 372)}
        height={Math.round(size * 0.74)}
      />
    </>
  )
}

function Flag({ c }: { c: RCountry }) {
  if (c === "uk") {
    return (
      <span className="r-flag" aria-hidden="true">
        <svg viewBox="0 0 24 17" preserveAspectRatio="none">
          <rect width="24" height="17" fill="#012169" />
          <path d="M0 0 24 17M24 0 0 17" stroke="#fff" strokeWidth="3.4" />
          <path d="M0 0 24 17M24 0 0 17" stroke="#C8102E" strokeWidth="1.2" />
          <path d="M12 0v17M0 8.5h24" stroke="#fff" strokeWidth="5" />
          <path d="M12 0v17M0 8.5h24" stroke="#C8102E" strokeWidth="2.8" />
        </svg>
      </span>
    )
  }
  return (
    <span className={`r-flag ${FLAG_VERTICAL[c] ? "r-flag--v" : ""}`} aria-hidden="true">
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

/**
 * The main call to action. While RONDI_APP_STORE_ID is empty (app not
 * published) it is a plain, non-interactive "coming soon" notice: no link.
 */
export function AppStoreButton({ lang, small = false, onDark = false }: { lang: RLang; small?: boolean; onDark?: boolean }) {
  if (!RONDI.appStoreUrl) {
    return (
      <span className={`r-soon ${small ? "r-soon--sm" : ""} ${onDark ? "r-soon--dark" : ""}`}>
        <span className="r-soon__dot" aria-hidden="true" />
        <IconApple size={small ? 15 : 18} />
        {t(lang, small ? "soonShort" : "soon")}
      </span>
    )
  }
  return (
    <a
      className={`r-btn ${small ? "r-btn--sm" : ""} ${onDark ? "r-btn--light" : "r-btn--ink"}`}
      href={RONDI.appStoreUrl}
      target="_blank"
      rel="noopener"
    >
      <IconApple size={small ? 15 : 18} />
      {t(lang, "getApp")}
    </a>
  )
}

function LangPicker({ lang, page }: { lang: RLang; page: RPage }) {
  return (
    <details className="r-lang">
      <summary aria-label={`${t(lang, "language")}: ${LANG_NAME[lang]}`}>
        {lang.toUpperCase()} <span aria-hidden="true">▾</span>
      </summary>
      <div className="r-lang__panel">
        {RLANGS.map((l) => (
          <Link key={l} href={rpath(l, page)} hrefLang={l} lang={l} aria-current={l === lang ? "page" : undefined}>
            {LANG_NAME[l]}
          </Link>
        ))}
      </div>
    </details>
  )
}

function Nav({ lang, page }: { lang: RLang; page: RPage }) {
  const home = rpath(lang)
  const anchor = (id: string) => (page === "home" ? `#${id}` : `${home}#${id}`)
  return (
    <header className="r-nav">
      <a className="r-skip" href="#content">{t(lang, "skip")}</a>
      <div className="r-wrap r-nav__inner">
        <Link href={home} className="r-nav__logo">
          <Lockup />
        </Link>
        <nav className="r-nav__links" aria-label={t(lang, "mainNav")}>
          <a href={anchor("what")}>{t(lang, "navWhat")}</a>
          <a href={anchor("exams")}>{t(lang, "navExams")}</a>
          <a href={anchor("how")}>{t(lang, "navHow")}</a>
          <a href={anchor("pro")}>{t(lang, "navPro")}</a>
          <a href={anchor("faq")}>{t(lang, "navFaq")}</a>
        </nav>
        <div className="r-nav__right">
          <LangPicker lang={lang} page={page} />
          <span className="r-nav__cta"><AppStoreButton lang={lang} small /></span>
        </div>
      </div>
    </header>
  )
}

function Updated({ lang }: { lang: RLang }) {
  return (
    <>
      {t(lang, "updatedPrefix")} <time dateTime={RONDI.updated}>{UPDATED_LABEL[lang]}</time>
    </>
  )
}

function Footer({ lang, page }: { lang: RLang; page: RPage }) {
  return (
    <footer className="r-footer">
      <div className="r-wrap">
        <div className="r-footer__cols">
          <div>
            <Link href={rpath(lang)} className="r-nav__logo">
              <Lockup size={30} />
            </Link>
            <p className="r-footer__tag">{t(lang, "footTagline")}</p>
            <AppStoreButton lang={lang} small />
          </div>
          <nav aria-label={t(lang, "legalHead")}>
            <h2 className="r-footer__h">{t(lang, "legalHead")}</h2>
            <ul>
              <li><Link href={rpath(lang, "privacy")}>{t(lang, "privacy")}</Link></li>
              <li><Link href={rpath(lang, "terms")}>{t(lang, "terms")}</Link></li>
              <li><Link href={rpath(lang, "legal")}>{t(lang, "legal")}</Link></li>
              <li><a href={RONDI.eula} target="_blank" rel="noopener">{t(lang, "eula")}</a></li>
            </ul>
          </nav>
          <nav aria-label={t(lang, "support")}>
            <h2 className="r-footer__h">{t(lang, "support")}</h2>
            <ul>
              <li><Link href={rpath(lang, "support")}>{t(lang, "support")}</Link></li>
              <li><a href={`mailto:${RONDI.supportEmail}`}>{RONDI.supportEmail}</a></li>
            </ul>
          </nav>
          <nav aria-label={t(lang, "langHead")}>
            <h2 className="r-footer__h">{t(lang, "langHead")}</h2>
            <ul>
              {RLANGS.map((l) => (
                <li key={l}>
                  <Link href={rpath(l, page)} hrefLang={l} lang={l} aria-current={l === lang ? "page" : undefined}>
                    {LANG_NAME[l]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="r-footer__note">{t(lang, "notAffiliated")}</p>
        <div className="r-footer__bottom">
          <span>
            © 2026 Rondi · {t(lang, "madeBy")} <a href={RONDI.origin}>{RONDI.company.legalName}</a>
          </span>
          <span><Updated lang={lang} /></span>
        </div>
      </div>
    </footer>
  )
}

// ── metadata ─────────────────────────────────────────────────────────────────

const OG_LOCALE: Record<RLang, string> = { en: "en_GB", es: "es_ES", de: "de_DE", it: "it_IT", nl: "nl_NL" }

export function rondiMeta(lang: RLang, page: RPage): Metadata {
  const isHome = page === "home"
  const doc = isHome ? undefined : LEGAL[lang][page as DocKey]
  const title = isHome ? LANDING[lang].title : `${doc!.title} · Rondi`
  const description = isHome ? LANDING[lang].description : doc!.description
  const path = rpath(lang, page)
  const og = RONDI_BRAND.ogImage[lang]
  return {
    title: { absolute: title },
    description,
    applicationName: "Rondi",
    authors: [{ name: RONDI.company.legalName, url: RONDI.origin }],
    creator: RONDI.company.legalName,
    publisher: RONDI.company.legalName,
    category: "education",
    alternates: { canonical: path, languages: ralternates(page) },
    openGraph: {
      type: "website",
      siteName: "Rondi",
      title,
      description,
      url: rabs(path),
      locale: OG_LOCALE[lang],
      alternateLocale: RLANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images: [{ url: og, width: 1200, height: 630, alt: LANDING[lang].ogAlt, type: "image/jpeg" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: og, alt: LANDING[lang].ogAlt }] },
    icons: {
      icon: [
        { url: RONDI_BRAND.favicon, type: "image/svg+xml" },
        { url: RONDI_BRAND.faviconPng, type: "image/png", sizes: "48x48" },
      ],
      apple: RONDI_BRAND.appleIcon,
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  }
}

// ── structured data ──────────────────────────────────────────────────────────

const ORG_ID = `${RONDI.origin}/#organization`

function organizationLd() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: RONDI.company.legalName,
    legalName: RONDI.company.legalName,
    url: RONDI.origin,
    email: RONDI.supportEmail,
    taxID: RONDI.company.taxId,
    address: {
      "@type": "PostalAddress",
      streetAddress: RONDI.company.street,
      postalCode: RONDI.company.postalCode,
      addressLocality: RONDI.company.city,
      addressCountry: RONDI.company.country,
    },
  }
}

function landingLd(lang: RLang) {
  const L = LANDING[lang]
  const url = rabs(rpath(lang))
  const appId = `${rabs(rpath("en"))}#app`
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationLd(),
      {
        "@type": ["MobileApplication", "SoftwareApplication"],
        "@id": appId,
        name: "Rondi",
        description: L.what.join(" "),
        operatingSystem: "iOS",
        softwareRequirements: `iOS ${RONDI.minIos} or later`,
        applicationCategory: "EducationalApplication",
        applicationSubCategory: "Driving theory test preparation",
        inLanguage: RLANGS,
        url,
        image: rabs(RONDI_BRAND.iconPng),
        screenshot: (["home", "question", "fix", "lesson", "result"] as ScreenKey[]).map((k) => rabs(screen(HOME_COUNTRY[lang], k))),
        featureList: [...L.shots.map((s) => s.title), ...L.more.map((s) => s.title)],
        countriesSupported: ["ES", "DE", "GB", "IT", "NL"],
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          category: "free",
          description: "Free download with optional in-app purchases (Rondi Pro: one-time “Until you pass” purchase, or monthly or weekly subscription)",
          ...(RONDI.appStoreUrl ? { url: RONDI.appStoreUrl, availability: "https://schema.org/InStock" } : {}),
        },
        ...(RONDI.appStoreUrl ? { installUrl: RONDI.appStoreUrl, downloadUrl: RONDI.appStoreUrl } : {}),
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        dateModified: RONDI.updated,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: L.title,
        description: L.description,
        inLanguage: lang,
        dateModified: RONDI.updated,
        about: { "@id": appId },
        publisher: { "@id": ORG_ID },
        primaryImageOfPage: rabs(RONDI_BRAND.ogImage[lang]),
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trempido", item: `${RONDI.origin}/` },
          { "@type": "ListItem", position: 2, name: "Rondi", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: lang,
        mainEntity: L.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  }
}

// ── illustration: the roundabout ─────────────────────────────────────────────

/** The coral car of the app icon, seen from above, nose pointing up (−y). ~156×320 units. */
function Car({ body = "#F07A5F", light = "#F58C73", dark = "#D9573C" }: { body?: string; light?: string; dark?: string }) {
  return (
    <>
      <ellipse cx="10" cy="14" rx="90" ry="158" fill="#150F18" opacity=".28" />
      <rect x="-93" y="-108" width="22" height="34" rx="9" fill={dark} />
      <rect x="71" y="-108" width="22" height="34" rx="9" fill={dark} />
      <path d="M-52 -150 Q0 -172 52 -150 Q78 -138 78 -96 L78 104 Q78 142 50 150 Q0 160 -50 150 Q-78 142 -78 104 L-78 -96 Q-78 -138 -52 -150Z" fill={body} />
      <path d="M-52 -150 Q0 -172 52 -150 Q78 -138 78 -96 L78 -70 Q0 -96 -78 -70 L-78 -96 Q-78 -138 -52 -150Z" fill={light} />
      <path d="M-58 -52 Q0 -78 58 -52 L50 -6 Q0 -18 -50 -6Z" fill="#221C26" />
      <path d="M-50 74 Q0 62 50 74 L56 110 Q0 126 -56 110Z" fill="#221C26" />
      <rect x="-52" y="2" width="104" height="64" rx="16" fill={light} />
      <ellipse cx="-46" cy="-138" rx="15" ry="7" fill="#FBF7F2" transform="rotate(-18 -46 -138)" />
      <ellipse cx="46" cy="-138" rx="15" ry="7" fill="#FBF7F2" transform="rotate(18 46 -138)" />
    </>
  )
}

const EXIT_LABEL: Record<RCountry, string> = { es: "DGT", de: "Klasse B", uk: "DVSA", it: "Patente B", nl: "CBR" }

/** A five-exit roundabout seen from above: one exit per country. Pure SVG + CSS. */
function Roundabout({ alt }: { alt: string }) {
  const C = 320
  const R = 132 // centre line of the ring
  const rad = (d: number) => (d * Math.PI) / 180
  const pt = (deg: number, r: number) => [C + r * Math.cos(rad(deg)), C + r * Math.sin(rad(deg))] as const
  const f = (n: number) => n.toFixed(1)
  const exits = RCOUNTRIES.map((c, i) => ({ c, deg: -90 + i * 72 }))
  return (
    <svg className="r-rb" viewBox="0 0 640 640" role="img" aria-label={alt} width="640" height="640">
      <defs>
        <clipPath id="r-rb-clip"><circle cx={C} cy={C} r="312" /></clipPath>
      </defs>
      <circle cx={C} cy={C} r="318" fill="#EDE2D8" />
      <g clipPath="url(#r-rb-clip)">
        <rect width="640" height="640" fill="#E4EFE8" />
        {/* blocks and trees between the exits */}
        {exits.map(({ deg }, i) => {
          const [bx, by] = pt(deg + 36, 236)
          const [tx, ty] = pt(deg + 20, 268)
          const [ux, uy] = pt(deg + 54, 262)
          const fill = ["#F6E3DA", "#E6DDF1", "#FBF7F2", "#F6E3DA", "#E6DDF1"][i]
          const roof = ["#EFCDBF", "#D4C6E8", "#EDE2D8", "#EFCDBF", "#D4C6E8"][i]
          return (
            <g key={deg}>
              <g transform={`rotate(${deg + 36} ${f(bx)} ${f(by)})`}>
                <rect x={f(bx - 30)} y={f(by - 38)} width="60" height="76" rx="12" fill={roof} />
                <rect x={f(bx - 30)} y={f(by - 38)} width="60" height="62" rx="12" fill={fill} />
              </g>
              <circle cx={f(tx)} cy={f(ty)} r="17" fill="#A9D4BB" />
              <circle cx={f(tx - 4)} cy={f(ty - 4)} r="7" fill="#C5E3D1" />
              <circle cx={f(ux)} cy={f(uy)} r="13" fill="#A9D4BB" />
              <circle cx={f(ux - 3)} cy={f(uy - 3)} r="5" fill="#C5E3D1" />
            </g>
          )
        })}
        {/* kerbs, then asphalt, so the junctions merge cleanly */}
        {exits.map(({ deg }) => {
          const [x, y] = pt(deg, 360)
          return <line key={deg} x1={C} y1={C} x2={f(x)} y2={f(y)} stroke="#FBF7F2" strokeWidth="76" />
        })}
        <circle cx={C} cy={C} r={R} fill="none" stroke="#FBF7F2" strokeWidth="84" />
        {exits.map(({ deg }) => {
          const [x, y] = pt(deg, 360)
          return <line key={deg} x1={C} y1={C} x2={f(x)} y2={f(y)} stroke="#4B4150" strokeWidth="62" />
        })}
        <circle cx={C} cy={C} r={R} fill="none" stroke="#4B4150" strokeWidth="70" />
        {/* lane markings */}
        {exits.map(({ deg }) => {
          const [x1, y1] = pt(deg, R + 52)
          const [x2, y2] = pt(deg, 360)
          return <line key={deg} x1={f(x1)} y1={f(y1)} x2={f(x2)} y2={f(y2)} stroke="#FBF7F2" strokeWidth="3.5" strokeDasharray="15 13" strokeLinecap="round" />
        })}
        <circle cx={C} cy={C} r={R} fill="none" stroke="#FBF7F2" strokeWidth="3.5" strokeDasharray="15 12.6" strokeLinecap="round" opacity=".9" />
        {/* island */}
        <circle cx={C} cy={C} r={R - 35} fill="#FBF7F2" />
        <circle cx={C} cy={C} r={R - 41} fill="#A9D4BB" />
        <circle cx={C} cy={C} r={R - 62} fill="#7FB898" opacity=".55" />
        <circle cx={C - 22} cy={C - 26} r="22" fill="#C5E3D1" />
        <circle cx={C + 12} cy={C - 4} r="15" fill="#BBDDC9" />
        {/* traffic: drives anticlockwise, island on its left */}
        <g className="r-rb__orbit r-rb__orbit--b">
          <g transform={`translate(${C} ${C - R + 17}) rotate(-90) scale(.135)`}>
            <Car body="#E6DDF1" light="#F1EBF8" dark="#B9A7D6" />
          </g>
        </g>
        <g className="r-rb__orbit">
          <g transform={`translate(${C} ${C - R - 17}) rotate(-90) scale(.155)`}>
            <Car />
          </g>
        </g>
        {/* one signpost per exit */}
        {exits.map(({ c, deg }) => {
          const [ax, ay] = pt(deg, 226)
          const side = 58
          const lx = ax + side * Math.cos(rad(deg + 90))
          const ly = ay + side * Math.sin(rad(deg + 90))
          const label = `${EXAM[c].code} · ${EXIT_LABEL[c]}`
          const w = label.length * 8.4 + 30
          return (
            <g key={c} aria-hidden="true">
              <rect x={f(lx - w / 2)} y={f(ly - 17)} width={f(w)} height="34" rx="17" fill="#221C26" />
              <text x={f(lx)} y={f(ly + 5.2)} textAnchor="middle" className="r-rb__label">{label}</text>
            </g>
          )
        })}
      </g>
    </svg>
  )
}

/** A strip of road with the coral car driving along it. Decorative. */
function RoadStrip() {
  return (
    <div className="r-road" aria-hidden="true">
      <svg className="r-road__car" viewBox="-170 -100 340 200" width="48" height="28">
        <g transform="rotate(90)"><Car /></g>
      </svg>
    </div>
  )
}

function Phone({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  return (
    <div className="r-phone">
      <img
        src={src}
        alt={alt}
        width={SCREEN_W}
        height={SCREEN_H}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  )
}

const MORE_ICONS = [
  // road sign
  <path key="a" d="M12 3.2 21.4 19.5H2.6L12 3.2Zm0 6.3v4.6m0 2.6v.2" />,
  // come back
  <path key="b" d="M4.5 12a7.5 7.5 0 1 1 2.4 5.5M4.5 12V7.4m0 4.6h4.6" />,
  // calendar / streak
  <path key="c" d="M5 6.5h14a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.500a1 1 0 0 1 1-1Zm3-3v5m8-5v5M4 11h16m-11.200 4.300 2.100 2.100 4.300-4.300" />,
  // chat
  <path key="d" d="M5 5h14a1.500 1.500 0 0 1 1.500 1.500v8A1.500 1.500 0 0 1 19 16h-6.500L8 20v-4H5a1.500 1.500 0 0 1-1.500-1.500v-8A1.500 1.500 0 0 1 5 5Zm3.500 4.500h7m-7 3h4.500" />,
]

// ── landing ──────────────────────────────────────────────────────────────────

export function RondiLanding({ lang }: { lang: RLang }) {
  const L = LANDING[lang]
  const hc = HOME_COUNTRY[lang]
  const shotKeys: ScreenKey[] = ["lesson", "fix", "result"]
  // The home country goes first in the table; the rest keep their order.
  const order: RCountry[] = [hc, ...RCOUNTRIES.filter((c) => c !== hc)]

  return (
    <div lang={lang}>
      <JsonLd data={landingLd(lang)} />
      <Nav lang={lang} page="home" />

      <main id="content">
        <section className="r-hero" aria-labelledby="r-h1">
          <div className="r-wrap r-hero__grid">
            <div className="r-hero__copy">
              <p className="r-eyebrow">{L.eyebrow}</p>
              <h1 className="r-display" id="r-h1">
                {L.h1} <span className="r-accent">{L.h1Accent}</span>
              </h1>
              <p className="r-lead">{L.lead}</p>
              <div className="r-hero__cta">
                <AppStoreButton lang={lang} />
                <a className="r-link" href="#exams">{L.examsTitle} <span aria-hidden="true">↓</span></a>
              </div>
              <p className="r-hero__note">{L.note}</p>
            </div>
            <div className="r-hero__art">
              <Roundabout alt={L.heroArtAlt} />
            </div>
          </div>
        </section>

        <RoadStrip />

        <section className="r-what" id="what" aria-labelledby="r-what-h">
          <div className="r-wrap r-what__grid">
            <div>
              <p className="r-eyebrow r-eyebrow--sage">{L.whatEyebrow}</p>
              <h2 className="r-h2" id="r-what-h">{L.whatTitle}</h2>
              <div className="r-what__answer">
                {L.what.map((p) => <p key={p}>{p}</p>)}
              </div>
              <dl className="r-stats">
                {L.stats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.n}</dd>
                  </div>
                ))}
              </dl>
              <p className="r-what__meta"><Updated lang={lang} /></p>
            </div>
            <div className="r-what__phone">
              <Phone src={screen(hc, "home")} alt={L.homeAlt} />
            </div>
          </div>
        </section>

        <section className="r-section" id="exams" aria-labelledby="r-exams-h">
          <div className="r-wrap">
            <div className="r-shead">
              <p className="r-eyebrow">{L.examsEyebrow}</p>
              <h2 className="r-h2" id="r-exams-h">{L.examsTitle}</h2>
              <p className="r-lead">{L.examsLead}</p>
            </div>
            <div className="r-tablecard">
              <table className="r-table">
                <caption>{L.examsCaption}</caption>
                <thead>
                  <tr>
                    <th scope="col">{L.th.country}</th>
                    <th scope="col">{L.th.exam}</th>
                    <th scope="col">{L.th.format}</th>
                    <th scope="col">{L.th.pass}</th>
                    <th scope="col">{L.th.rondi}</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((c) => (
                    <tr key={c}>
                      <th scope="row">
                        <span className="r-table__country"><Flag c={c} />{COUNTRY_NAME[c][lang]}</span>
                      </th>
                      <td data-label={L.th.exam}>
                        <span lang={EXAM[c].hreflang}>{EXAM[c].exam}</span>
                        <span className="r-table__sub">{EXAM[c].authority}</span>
                      </td>
                      <td data-label={L.th.format}>{FORMAT[c][lang]}</td>
                      <td data-label={L.th.pass}><strong>{PASS[c][lang]}</strong></td>
                      <td data-label={L.th.rondi}>
                        <ul className="r-table__list">
                          {contentLine(c, lang).map((x) => <li key={x}>{x}</li>)}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="r-fine">{L.examsNote}</p>
            <p className="r-fine">
              {L.sourcesLabel}{" "}
              {order.map((c, i) => (
                <span key={c}>
                  {i > 0 && " · "}
                  <a href={EXAM[c].sourceUrl} target="_blank" rel="noopener" hrefLang={EXAM[c].hreflang}>{EXAM[c].source}</a>
                </span>
              ))}
              . <Updated lang={lang} />.
            </p>
          </div>
        </section>

        <section className="r-section r-section--blush" id="how" aria-labelledby="r-how-h">
          <div className="r-wrap">
            <div className="r-shead">
              <p className="r-eyebrow">{L.howEyebrow}</p>
              <h2 className="r-h2" id="r-how-h">{L.howTitle}</h2>
              <p className="r-lead">{L.howLead}</p>
            </div>
            <ol className="r-shots">
              {L.shots.map((s, i) => (
                <li key={s.title} className={`r-shot r-shot--${i + 1}`}>
                  <div className="r-shot__stage">
                    <Phone src={screen(hc, shotKeys[i])} alt={s.alt} />
                  </div>
                  <div className="r-shot__text">
                    <span className="r-shot__n" aria-hidden="true">{i + 1}</span>
                    <h3 className="r-h3">{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ul className="r-more">
              {L.more.map((m, i) => (
                <li key={m.title}>
                  <svg className="r-more__icon" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {MORE_ICONS[i]}
                  </svg>
                  <h3 className="r-h3">{m.title}</h3>
                  <p>{m.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="r-section" id="pro" aria-labelledby="r-pro-h">
          <div className="r-wrap">
            <div className="r-shead">
              <p className="r-eyebrow">{L.proEyebrow}</p>
              <h2 className="r-h2" id="r-pro-h">{L.proTitle}</h2>
              <p className="r-lead">{L.proLead}</p>
            </div>
            <div className="r-plans">
              <div className="r-plan">
                <h3 className="r-plan__name">{L.freeTitle}</h3>
                <ul>{L.freeList.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
              <div className="r-plan r-plan--pro">
                <h3 className="r-plan__name">{L.proName}</h3>
                <ul>{L.proList.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </div>
            <p className="r-fine">
              {L.proFine}{" "}
              <Link href={rpath(lang, "terms")}>{t(lang, "terms")}</Link> ·{" "}
              <a href={RONDI.eula} target="_blank" rel="noopener">{t(lang, "eula")}</a> ·{" "}
              <Link href={rpath(lang, "privacy")}>{t(lang, "privacy")}</Link>
            </p>
          </div>
        </section>

        <section className="r-section r-section--sage" id="honest" aria-labelledby="r-honest-h">
          <div className="r-wrap">
            <div className="r-shead">
              <p className="r-eyebrow r-eyebrow--green">{L.honestEyebrow}</p>
              <h2 className="r-h2" id="r-honest-h">{L.honestTitle}</h2>
            </div>
            <ul className="r-honest">
              {L.honest.map((h) => (
                <li key={h.title}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.200" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="8.800" />
                    <path d="m5.900 5.900 12.200 12.200" />
                  </svg>
                  <div>
                    <h3 className="r-h3">{h.title}</h3>
                    <p>{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="r-section" id="faq" aria-labelledby="r-faq-h">
          <div className="r-wrap r-faq__grid">
            <div className="r-shead">
              <p className="r-eyebrow">{L.faqEyebrow}</p>
              <h2 className="r-h2" id="r-faq-h">{L.faqTitle}</h2>
              <p className="r-fine">
                <Link href={rpath(lang, "support")}>{t(lang, "support")}</Link> ·{" "}
                <a href={`mailto:${RONDI.supportEmail}`}>{RONDI.supportEmail}</a>
              </p>
            </div>
            <div className="r-faq">
              {L.faq.map((f) => (
                <details key={f.q}>
                  <summary><h3>{f.q}</h3></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="r-section r-section--cta" aria-labelledby="r-cta-h">
          <div className="r-wrap">
            <div className="r-cta">
              <div className="r-cta__ring" aria-hidden="true" />
              <img src={RONDI_BRAND.wordmarkIvory} alt="" width={132} height={50} loading="lazy" />
              <h2 className="r-h2" id="r-cta-h">{L.ctaTitle}</h2>
              <p>{L.ctaBody}</p>
              <AppStoreButton lang={lang} onDark />
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} page="home" />
    </div>
  )
}

// ── legal / support pages ────────────────────────────────────────────────────

export function RondiDoc({ lang, page }: { lang: RLang; page: DocKey }) {
  const doc = LEGAL[lang][page]
  const url = rabs(rpath(lang, page))
  const crumbs = [
    { name: "Trempido", url: `${RONDI.origin}/` },
    { name: "Rondi", url: rabs(rpath(lang)) },
    { name: doc.title, url },
  ]
  const others = (["privacy", "terms", "support", "legal"] as DocKey[]).filter((p) => p !== page)
  return (
    <div lang={lang}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            organizationLd(),
            {
              "@type": "WebPage",
              "@id": `${url}#webpage`,
              url,
              name: `${doc.title} · Rondi`,
              description: doc.description,
              inLanguage: lang,
              dateModified: RONDI.updated,
              publisher: { "@id": ORG_ID },
              breadcrumb: { "@id": `${url}#breadcrumb` },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${url}#breadcrumb`,
              itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.url })),
            },
          ],
        }}
      />
      <Nav lang={lang} page={page} />
      <main id="content">
        <div className="r-pagehead">
          <div className="r-wrap">
            <nav className="r-crumb" aria-label={t(lang, "breadcrumb")}>
              <Link href={rpath(lang)}>Rondi</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{doc.title}</span>
            </nav>
            <h1 className="r-display r-display--page">{doc.title}</h1>
          </div>
        </div>
        <div className="r-wrap r-prose">
          <p className="r-prose__meta"><Updated lang={lang} /></p>
          {doc.summary && (
            <div className="r-card-note"><p><Rich text={doc.summary} /></p></div>
          )}
          {doc.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              <Blocks blocks={s.body} />
            </section>
          ))}
          <div className="r-otherdocs">
            {others.map((p) => <Link key={p} href={rpath(lang, p)}>{LEGAL[lang][p].title}</Link>)}
            <a href={RONDI.eula} target="_blank" rel="noopener">{t(lang, "eula")}</a>
          </div>
        </div>
      </main>
      <Footer lang={lang} page={page} />
    </div>
  )
}
