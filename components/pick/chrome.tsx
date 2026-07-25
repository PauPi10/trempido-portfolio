import Link from "next/link"
import {
  PICK,
  T,
  tr,
  paths,
  storesFor,
  storeLogo,
  type Lang,
} from "@/lib/pick-content"
import { COLLECTIONS } from "@/lib/pick-catalog"
import { IconApple, IconArrow } from "./icons"
import { breadcrumbLd, JsonLd } from "./jsonld"

/** The real app icon (chef hat on green, from the iOS asset catalog). */
export function PickMark({ size = 30 }: { size?: number }) {
  return (
    <img
      src="/images/pick/logo.webp"
      alt=""
      width={size}
      height={size}
      style={{ borderRadius: Math.round(size * 0.28), display: "block" }}
      aria-hidden="true"
    />
  )
}

export function AppStoreButton({
  lang,
  className = "p-btn p-btn--primary",
  label,
}: {
  lang: Lang
  className?: string
  label?: string
}) {
  return (
    <a className={className} href={PICK.appStoreUrl} target="_blank" rel="noopener">
      <IconApple size={17} />
      {label ?? T.getApp[lang]}
    </a>
  )
}

type NavProps = {
  lang: Lang
  /** Same page in the other language; falls back to that language's home. */
  alt?: string
}

export function PickNav({ lang, alt }: NavProps) {
  const t = tr(lang)
  const other: Lang = lang === "es" ? "en" : "es"
  const home = paths.home(lang)
  const links = [
    { href: `${home}#how`, label: t("navHow") },
    { href: paths.recipes(lang), label: t("navRecipes") },
    { href: `${home}#stores`, label: t("navStores") },
    { href: `${home}#pricing`, label: t("navPricing") },
    { href: `${home}#faq`, label: t("navFaq") },
  ]

  return (
    <nav className="p-nav">
      <div className="p-wrap p-nav__inner">
        <Link href={home} className="p-nav__logo">
          <PickMark />
          <span>pick</span>
        </Link>

        <div className="p-nav__links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </div>

        <div className="p-nav__right">
          <Link className="p-lang" href={alt ?? paths.home(other)} hrefLang={other} lang={other}>
            {other.toUpperCase()}
          </Link>
          <AppStoreButton lang={lang} />
          {/* Menu for narrow screens — <details> keeps it working without JS. */}
          <details className="p-mobmenu">
            <summary aria-label={t("menu")}>
              <span /><span /><span />
            </summary>
            <div className="p-mobmenu__panel">
              {links.map((l) => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </nav>
  )
}

export function PickFooter({ lang }: { lang: Lang }) {
  const t = tr(lang)
  const home = paths.home(lang)
  const featured = COLLECTIONS.filter((c) =>
    ["under30", "cheap", "chicken", "vegan"].includes(c.key),
  )
  return (
    <footer className="p-footer">
      <div className="p-wrap">
        <div className="p-footer__cols">
          <div>
            <Link href={home} className="p-footer__logo">
              <PickMark />
              <span>pick</span>
            </Link>
            <p style={{ marginTop: 14, maxWidth: "32ch", fontSize: "0.95rem" }}>{t("footTagline")}</p>
            <AppStoreButton
              lang={lang}
              className="p-btn p-btn--primary p-btn--sm"
            />
          </div>
          <div>
            <h4>{t("footProduct")}</h4>
            <ul>
              <li><Link href={`${home}#how`}>{t("navHow")}</Link></li>
              <li><Link href={`${home}#features`}>{t("navFeatures")}</Link></li>
              <li><Link href={`${home}#pricing`}>{t("navPricing")}</Link></li>
              <li><Link href={`${home}#faq`}>{t("navFaq")}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t("footBrowse")}</h4>
            <ul>
              <li><Link href={paths.recipes(lang)}>{t("navRecipes")}</Link></li>
              {featured.map((c) => (
                <li key={c.key}>
                  <Link href={paths.collection(lang, c.slug[lang])}>{c.title[lang]}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t("footLegal")}</h4>
            <ul>
              <li><Link href={paths.privacy(lang)}>{t("footPrivacy")}</Link></li>
              <li><Link href={paths.terms(lang)}>{t("footTermsShort")}</Link></li>
              <li><Link href={paths.legal(lang)}>{t("footLegalNotice")}</Link></li>
              <li><Link href={paths.support}>{t("footSupport")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="p-footer__bottom">
          <span>© 2026 Pick · TREMPIDO SL</span>
          <span>{t("footMadeFor")}</span>
        </div>
      </div>
    </footer>
  )
}

export function CtaBanner({ lang, dishes }: { lang: Lang; dishes: string[] }) {
  const t = tr(lang)
  return (
    <section className="p-section p-section--tight">
      <div className="p-wrap">
        <div className="p-cta">
          <div className="p-cta__photos" aria-hidden="true">
            {dishes.map((id) => (
              <img key={id} src={`/images/pick/dishes/${id}-360.webp`} alt="" width={72} height={72} loading="lazy" />
            ))}
          </div>
          <h2 className="p-h2">{t("ctaTitle")}</h2>
          <p className="p-lead" style={{ margin: "16px auto 30px", color: "rgba(255,255,255,0.88)" }}>
            {t("ctaBody")}
          </p>
          <AppStoreButton lang={lang} className="p-btn p-btn--dark" label={t("ctaBtn")} />
        </div>
      </div>
    </section>
  )
}

/**
 * The supermarket wall: real brand marks from the app, each linking to its own
 * plan page. The trademark disclaimer sits right under it on purpose.
 */
export function StoreWall({ lang, current }: { lang: Lang; current?: string }) {
  const t = tr(lang)
  return (
    <section className="p-section" id="stores" style={{ background: "var(--p-cream-deep)" }}>
      <div className="p-wrap">
        <div className="p-shead">
          <span className="p-eyebrow">{t("storesEyebrow")}</span>
          <h2 className="p-h2">{t("storesTitle")}</h2>
          <p className="p-lead">{t("storesLead")}</p>
        </div>
        <ul className="p-stores">
          {storesFor(lang).map((s) => (
            <li key={s.slug}>
              <Link
                href={paths.store(lang, s.slug)}
                className={`p-store ${current === s.slug ? "is-current" : ""}`}
              >
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
  )
}

/** Header for the inner pages (recipes, collections, stores, legal). */
export function PageHead({
  crumbs,
  eyebrow,
  title,
  lead,
  lang,
}: {
  crumbs: { name: string; path: string }[]
  eyebrow?: string
  title: string
  lead?: string
  lang: Lang
}) {
  return (
    <header className="p-pagehead">
      <JsonLd data={breadcrumbLd(crumbs)} />
      <div className="p-wrap">
        <nav className="p-crumb" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.name + i} style={{ display: "inline-flex", gap: 8 }}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.path ? <Link href={c.path}>{c.name}</Link> : <span>{c.name}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <span className="p-eyebrow">{eyebrow}</span>}
        <h1 className="p-display p-display--page">{title}</h1>
        {lead && <p className="p-lead" style={{ marginTop: 18 }}>{lead}</p>}
      </div>
    </header>
  )
}

/** Nav + footer for the legal pages, in either language. */
export function LegalChrome({ children, lang = "en" }: { children: React.ReactNode; lang?: Lang }) {
  const t = tr(lang)
  const other: Lang = lang === "es" ? "en" : "es"
  return (
    <>
      <nav className="p-nav">
        <div className="p-wrap p-nav__inner">
          <Link href={paths.home(lang)} className="p-nav__logo">
            <PickMark />
            <span>pick</span>
          </Link>
          <div className="p-nav__right">
            <Link className="p-lang" href={paths.home(other)} hrefLang={other} lang={other}>
              {other.toUpperCase()}
            </Link>
            <AppStoreButton lang={lang} />
          </div>
        </div>
      </nav>
      {children}
      <footer className="p-footer">
        <div className="p-wrap">
          <div className="p-footer__bottom" style={{ borderTop: 0, paddingTop: 0 }}>
            <span>© 2026 Pick · TREMPIDO SL</span>
            <span>
              <Link href={paths.privacy(lang)}>{t("footPrivacy")}</Link> ·{" "}
              <Link href={paths.terms(lang)}>{t("footTermsShort")}</Link> ·{" "}
              <Link href={paths.legal(lang)}>{t("footLegalNotice")}</Link> ·{" "}
              <Link href={paths.support}>{t("footSupport")}</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

/** Page header for the legal pages. */
export function LegalHeader({
  crumb,
  eyebrow,
  title,
  lang = "en",
}: {
  crumb: string
  eyebrow: string
  title: string
  lang?: Lang
}) {
  return (
    <PageHead
      lang={lang}
      crumbs={[{ name: "Pick", path: paths.home(lang) }, { name: crumb, path: "" }]}
      eyebrow={eyebrow}
      title={title}
    />
  )
}
