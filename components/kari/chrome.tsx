/* Nav, footer, page header and CTA banner for the Kari pages. */

import Link from "next/link"
import Image from "next/image"
import { KARI, NAV_LINKS, TOTAL_ROLEPLAYS } from "@/lib/kari-content"
import { Sunburst, breadcrumbLd, JsonLd } from "./bits"

export function KariNav({ current }: { current?: string }) {
  return (
    <nav className="k-nav">
      <div className="k-wrap k-nav__inner">
        <Link href="/" className="k-nav__logo">
          <Image src="/images/kari/logo.png" alt="" width={34} height={34} style={{ borderRadius: 9 }} />
          Kari
        </Link>
        <div className="k-nav__links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </div>
        <a className="k-btn k-btn--primary" href={KARI.appStoreUrl} target="_blank" rel="noopener">
          Get the app
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
  title = "Train the conversation before life throws it at you.",
  body = `${TOTAL_ROLEPLAYS}+ scenes, 45 spoken lessons and a coach who tells you the truth. Five minutes a day.`,
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="k-section k-section--tight">
      <div className="k-wrap">
        <div className="k-cta">
          <Sunburst size={520} color="rgba(239,193,99,0.18)" style={{ bottom: -220, left: -180 }} />
          <h2 className="k-h2">{title}</h2>
          <p className="k-lead" style={{ margin: "18px auto 32px", color: "rgba(246,237,221,0.8)" }}>{body}</p>
          <a className="k-btn k-btn--gold" href={KARI.appStoreUrl} target="_blank" rel="noopener">
            Download Kari on the App Store
          </a>
        </div>
      </div>
    </section>
  )
}

export function KariFooter() {
  return (
    <footer className="k-footer">
      <Sunburst size={460} color="rgba(239,193,99,0.07)" style={{ right: -160, bottom: -180 }} />
      <div className="k-wrap">
        <div className="k-footer__cols">
          <div>
            <Link href="/" className="k-nav__logo" style={{ color: "var(--k-cream)" }}>
              <Image src="/images/kari/logo.png" alt="" width={34} height={34} style={{ borderRadius: 9 }} />
              Kari
            </Link>
            <p style={{ marginTop: 14, maxWidth: "30ch", fontSize: "0.95rem" }}>
              {KARI.tagline}. Train your charisma by speaking — backed by science.
            </p>
            <a
              className="k-btn k-btn--gold"
              style={{ marginTop: 20, padding: "12px 24px", fontSize: "0.9rem" }}
              href={KARI.appStoreUrl}
              target="_blank"
              rel="noopener"
            >
              Download on the App Store
            </a>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><Link href="/how-it-works">How it works</Link></li>
              <li><Link href="/roleplays">Roleplays</Link></li>
              <li><Link href="/skills">Skills</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/science">The science</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><a href={`mailto:${KARI.supportEmail}`}>Support</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><a href="https://www.trempido.com">trempido</a></li>
            </ul>
          </div>
        </div>
        <div className="k-footer__bottom">
          <span>© 2026 Kari · by Pau Pidelaserra</span>
          <span>Made for iPhone · Available in {KARI.languages} languages</span>
        </div>
      </div>
    </footer>
  )
}
