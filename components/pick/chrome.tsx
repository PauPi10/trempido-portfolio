"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { PICK } from "@/lib/pick-content"
import { usePickT, breadcrumbLd, JsonLd } from "./bits"

/** Small green "P" logo mark (SVG, no asset needed). */
export function PickMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#6FB52C" />
      <path
        d="M14 29V12.5h6.6c3.4 0 5.7 2.1 5.7 5.3 0 3.2-2.3 5.4-5.7 5.4H17.8V29H14zm3.8-8.7h2.3c1.5 0 2.4-.9 2.4-2.4s-.9-2.4-2.4-2.4h-2.3v4.8z"
        fill="#fff"
      />
    </svg>
  )
}

export function PickNav({ current }: { current?: string }) {
  const t = usePickT()
  const { lang, setLang } = useLanguage()
  return (
    <nav className="p-nav">
      <div className="p-wrap p-nav__inner">
        <Link href="/pick" className="p-nav__logo">
          <PickMark size={30} />
          <span>pick</span>
        </Link>
        <div className="p-nav__links">
          <Link href="/pick#how" aria-current={current === "how" ? "page" : undefined}>{t("navHow")}</Link>
          <Link href="/pick#features" aria-current={current === "features" ? "page" : undefined}>{t("navFeatures")}</Link>
          <Link href="/pick#pricing" aria-current={current === "pricing" ? "page" : undefined}>{t("navPricing")}</Link>
          <Link href="/pick#faq" aria-current={current === "faq" ? "page" : undefined}>{t("navFaq")}</Link>
        </div>
        <div className="p-nav__right">
          <button
            className="p-lang"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label="Toggle language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a className="p-btn p-btn--primary" href={PICK.appStoreUrl} target="_blank" rel="noopener">
            {t("getApp")}
          </a>
        </div>
      </div>
    </nav>
  )
}

export function PickFooter() {
  const t = usePickT()
  return (
    <footer className="p-footer">
      <div className="p-wrap">
        <div className="p-footer__cols">
          <div>
            <Link href="/pick" className="p-footer__logo">
              <PickMark size={30} />
              <span>pick</span>
            </Link>
            <p style={{ marginTop: 14, maxWidth: "32ch", fontSize: "0.95rem" }}>
              {t("footTagline")}
            </p>
            <a
              className="p-btn p-btn--primary"
              style={{ marginTop: 20, padding: "12px 24px", fontSize: "0.9rem" }}
              href={PICK.appStoreUrl}
              target="_blank"
              rel="noopener"
            >
              {t("getApp")}
            </a>
          </div>
          <div>
            <h4>{t("footProduct")}</h4>
            <ul>
              <li><Link href="/pick#how">{t("navHow")}</Link></li>
              <li><Link href="/pick#features">{t("navFeatures")}</Link></li>
              <li><Link href="/pick#pricing">{t("navPricing")}</Link></li>
              <li><Link href="/pick#faq">{t("navFaq")}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t("footLegal")}</h4>
            <ul>
              <li><Link href="/pick/privacy">{t("footPrivacy")}</Link></li>
              <li><Link href="/pick/terms">{t("footTerms")}</Link></li>
              <li><Link href="/pick/legal">{t("footLegalNotice")}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t("footMore")}</h4>
            <ul>
              <li><a href={`mailto:${PICK.supportEmail}`}>{t("footSupport")}</a></li>
              <li><a href="https://www.trempido.com">trempido</a></li>
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

export function CtaBanner() {
  const t = usePickT()
  return (
    <section className="p-section p-section--tight">
      <div className="p-wrap">
        <div className="p-cta">
          <div className="p-cta__emojis" aria-hidden="true">🍋 🥑 🍅 🌶️</div>
          <h2 className="p-h2">{t("ctaTitle")}</h2>
          <p className="p-lead" style={{ margin: "16px auto 30px", color: "rgba(255,255,255,0.88)" }}>
            {t("ctaBody")}
          </p>
          <a className="p-btn p-btn--dark" href={PICK.appStoreUrl} target="_blank" rel="noopener">
            {t("ctaBtn")}
          </a>
        </div>
      </div>
    </section>
  )
}

/** Header for the legal subpages (server-rendered, English). */
export function LegalHeader({
  crumb,
  eyebrow,
  title,
}: {
  crumb: string
  eyebrow: string
  title: string
}) {
  return (
    <header className="p-pagehead">
      <JsonLd data={breadcrumbLd([{ name: "Pick", path: "/pick" }, { name: crumb, path: "" }])} />
      <div className="p-wrap">
        <nav className="p-crumb" aria-label="Breadcrumb">
          <Link href="/pick">Pick</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb}</span>
        </nav>
        <span className="p-eyebrow">{eyebrow}</span>
        <h1 className="p-display" style={{ marginTop: 14, fontSize: "clamp(2.4rem, 5.6vw, 4rem)" }}>
          {title}
        </h1>
      </div>
    </header>
  )
}

/** Static nav + footer for legal pages (no language toggle, English). */
export function LegalChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="p-nav">
        <div className="p-wrap p-nav__inner">
          <Link href="/pick" className="p-nav__logo">
            <PickMark size={30} />
            <span>pick</span>
          </Link>
          <a className="p-btn p-btn--primary" href={PICK.appStoreUrl} target="_blank" rel="noopener">
            Get the app
          </a>
        </div>
      </nav>
      {children}
      <footer className="p-footer">
        <div className="p-wrap">
          <div className="p-footer__bottom" style={{ borderTop: 0, paddingTop: 0 }}>
            <span>© 2026 Pick · TREMPIDO SL</span>
            <span>
              <Link href="/pick/privacy">Privacy</Link> · <Link href="/pick/terms">Terms</Link> ·{" "}
              <Link href="/pick/legal">Legal Notice</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
