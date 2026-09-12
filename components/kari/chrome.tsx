/* Nav, footer, page header and CTA banner for the Kari pages.
   Every piece takes an optional `lang` so the Spanish home (/es) reuses the
   same chrome. Product pages only exist in English for now, so the Spanish
   nav links point at them; hreflang is only declared where a real pair exists. */

import Link from "next/link"
import Image from "next/image"
import { KARI, NAV_LINKS, TOTAL_ROLEPLAYS } from "@/lib/kari-content"
import { Sunburst, breadcrumbLd, JsonLd } from "./bits"

export type Lang = "en" | "es"

const T = {
  en: {
    nav: { "/how-it-works": "How it works", "/roleplays": "Roleplays", "/skills": "Skills", "/science": "Science", "/pricing": "Pricing", "/faq": "FAQ" } as Record<string, string>,
    getApp: "Get the app",
    switchLabel: "Español",
    switchHref: "/es",
    switchAria: "Leer esta web en español",
    home: "/",
    ctaTitle: "Train the conversation before life throws it at you.",
    ctaBody: `${TOTAL_ROLEPLAYS}+ scenes, 45 spoken lessons and a coach who tells you the truth. Five minutes a day.`,
    ctaBtn: "Download Kari on the App Store",
    footTag: `${KARI.tagline}. Train your charisma by speaking — backed by science.`,
    footBtn: "Download on the App Store",
    product: "Product",
    resources: "Resources",
    legal: "Legal",
    science: "The science",
    faq: "FAQ",
    compare: "Compare with alternatives",
    support: "Support",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    made: `Made for iPhone · Available in ${KARI.languages} languages`,
    by: "by",
  },
  es: {
    nav: { "/how-it-works": "Cómo funciona", "/roleplays": "Roleplays", "/skills": "Habilidades", "/science": "Ciencia", "/pricing": "Precios", "/faq": "FAQ" } as Record<string, string>,
    getApp: "Descargar",
    switchLabel: "English",
    switchHref: "/",
    switchAria: "Read this site in English",
    home: "/es",
    ctaTitle: "Ensaya la conversación antes de vivirla.",
    ctaBody: `Más de ${TOTAL_ROLEPLAYS} escenas, 45 lecciones habladas y una coach que te dice la verdad. Cinco minutos al día.`,
    ctaBtn: "Descargar Kari en la App Store",
    footTag: "Tu gimnasio social por voz. Entrena tu carisma hablando, con base científica.",
    footBtn: "Descárgala en la App Store",
    product: "Producto",
    resources: "Recursos",
    legal: "Legal",
    science: "La ciencia",
    faq: "Preguntas frecuentes",
    compare: "Comparativa con alternativas",
    support: "Soporte",
    privacy: "Política de privacidad",
    terms: "Términos de uso",
    made: `Diseñada para iPhone · Disponible en ${KARI.languages} idiomas`,
    by: "por",
  },
} as const

export function KariNav({ current, lang = "en" }: { current?: string; lang?: Lang }) {
  const t = T[lang]
  return (
    <nav className="k-nav">
      <div className="k-wrap k-nav__inner">
        <Link href={t.home} className="k-nav__logo">
          <Image src="/images/kari/logo.png" alt="" width={34} height={34} style={{ borderRadius: 9 }} />
          Kari
        </Link>
        <div className="k-nav__links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current === l.href ? "page" : undefined}>
              {t.nav[l.href] ?? l.label}
            </Link>
          ))}
          <Link href={t.switchHref} hrefLang={lang === "en" ? "es" : "en"} lang={lang === "en" ? "es" : "en"} aria-label={t.switchAria} style={{ opacity: 0.75 }}>
            {t.switchLabel}
          </Link>
        </div>
        <a className="k-btn k-btn--primary" href={KARI.appStoreUrl} target="_blank" rel="noopener">
          {t.getApp}
        </a>
      </div>
    </nav>
  )
}

export function PageHeader({
  crumb,
  eyebrow,
  title,
  lead,
}: {
  crumb: string
  eyebrow: string
  title: React.ReactNode
  lead?: string
}) {
  return (
    <header className="k-pagehead">
      <JsonLd data={breadcrumbLd([{ name: "Kari", path: "/" }, { name: crumb, path: "" }])} />
      <Sunburst size={430} style={{ top: -160, right: -140 }} />
      <div className="k-wrap">
        <nav className="k-crumb" aria-label="Breadcrumb">
          <Link href="/">Kari</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb}</span>
        </nav>
        <span className="k-eyebrow">{eyebrow}</span>
        <h1 className="k-display" style={{ marginTop: 16, fontSize: "clamp(2.4rem, 5.6vw, 4.2rem)" }}>
          {title}
        </h1>
        {lead ? <p className="k-lead" style={{ marginTop: 22 }}>{lead}</p> : null}
      </div>
    </header>
  )
}

export function CtaBanner({
  title,
  body,
  lang = "en",
}: {
  title?: string
  body?: string
  lang?: Lang
}) {
  const t = T[lang]
  return (
    <section className="k-section k-section--tight">
      <div className="k-wrap">
        <div className="k-cta">
          <Sunburst size={520} color="rgba(239,193,99,0.18)" style={{ bottom: -220, left: -180 }} />
          <h2 className="k-h2">{title ?? t.ctaTitle}</h2>
          <p className="k-lead" style={{ margin: "18px auto 32px", color: "rgba(246,237,221,0.8)" }}>{body ?? t.ctaBody}</p>
          <a className="k-btn k-btn--gold" href={KARI.appStoreUrl} target="_blank" rel="noopener">
            {t.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  )
}

export function KariFooter({ lang = "en" }: { lang?: Lang }) {
  const t = T[lang]
  return (
    <footer className="k-footer">
      <Sunburst size={460} color="rgba(239,193,99,0.07)" style={{ right: -160, bottom: -180 }} />
      <div className="k-wrap">
        <div className="k-footer__cols">
          <div>
            <Link href={t.home} className="k-nav__logo" style={{ color: "var(--k-cream)" }}>
              <Image src="/images/kari/logo.png" alt="" width={34} height={34} style={{ borderRadius: 9 }} />
              Kari
            </Link>
            <p style={{ marginTop: 14, maxWidth: "30ch", fontSize: "0.95rem" }}>{t.footTag}</p>
            <a
              className="k-btn k-btn--gold"
              style={{ marginTop: 20, padding: "12px 24px", fontSize: "0.9rem" }}
              href={KARI.appStoreUrl}
              target="_blank"
              rel="noopener"
            >
              {t.footBtn}
            </a>
          </div>
          <div>
            <h4>{t.product}</h4>
            <ul>
              <li><Link href="/how-it-works">{t.nav["/how-it-works"]}</Link></li>
              <li><Link href="/roleplays">{t.nav["/roleplays"]}</Link></li>
              <li><Link href="/skills">{t.nav["/skills"]}</Link></li>
              <li><Link href="/pricing">{t.nav["/pricing"]}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.resources}</h4>
            <ul>
              <li><Link href="/science">{t.science}</Link></li>
              <li><Link href="/faq">{t.faq}</Link></li>
              <li><Link href="/compare">{t.compare}</Link></li>
              <li><a href={`mailto:${KARI.supportEmail}`}>{t.support}</a></li>
              <li><Link href={t.switchHref} hrefLang={lang === "en" ? "es" : "en"}>{t.switchLabel}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.legal}</h4>
            <ul>
              <li><Link href="/privacy">{t.privacy}</Link></li>
              <li><Link href="/terms">{t.terms}</Link></li>
              <li><a href="https://www.trempido.com">trempido</a></li>
            </ul>
          </div>
        </div>
        <div className="k-footer__bottom">
          <span>© 2026 {KARI.legalName} · Kari {t.by} Pau Pidelaserra</span>
          <span>{t.made}</span>
        </div>
      </div>
    </footer>
  )
}
