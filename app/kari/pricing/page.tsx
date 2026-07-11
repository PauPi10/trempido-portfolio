import type { Metadata } from "next"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { KARI, TOTAL_ROLEPLAYS } from "@/lib/kari-content"
import { KariNav, KariFooter, PageHeader } from "@/components/kari/chrome"
import { Reveal } from "@/components/kari/reveal"

export const metadata: Metadata = {
  title: "Kari Pricing — Plans, Free Trial and Minute Packs",
  description:
    "Kari Pro is a subscription: weekly for trying it properly, annual for actually changing how you talk. Conversation time is measured in minutes, and you can top up with one-time minute packs. Exact prices in the App Store.",
  alternates: { canonical: "https://www.trempido.com/kari/pricing" },
}

const PLANS = [
  {
    name: "Weekly",
    tag: "No commitment",
    blurb: "For trying Kari properly: full access, renewably weekly, cancel anytime from your Apple account.",
    features: [
      "All 160+ roleplays and 45 lessons",
      "Live voice conversations with report",
      "Charisma number and progress tracking",
      "Minutes included with every renewal",
    ],
    featured: false,
  },
  {
    name: "Annual",
    tag: "Best value",
    blurb: "For actually changing how you talk. One payment, and the training habit has a whole year to work.",
    features: [
      "Everything in weekly",
      "A full year of minutes, up front",
      "One payment, a year of training",
      "The plan chosen by people who stay",
    ],
    featured: true,
  },
]

export default function Pricing() {
  return (
    <>
      <KariNav current="/kari/pricing" />
      <main>
        <PageHeader
          crumb="Pricing"
          eyebrow="Simple, managed by Apple"
          title={<>Cheaper than one hour <span className="k-italic">with a coach</span></>}
          lead="A human communication coach runs €200 an hour. Kari trains you every day, without an audience, for less than most people spend on coffee. Exact prices are shown in the App Store before you buy."
        />

        <section className="k-section k-section--tight">
          <div className="k-wrap">
            <div className="k-grid-2" style={{ maxWidth: 900, marginInline: "auto" }}>
              {PLANS.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.08}>
                  <div
                    className="k-card"
                    style={
                      p.featured
                        ? {
                            height: "100%",
                            background: "linear-gradient(150deg, #fff8ec, var(--k-cream))",
                            borderColor: "rgba(201,106,30,0.45)",
                            boxShadow: "var(--k-shadow)",
                          }
                        : { height: "100%" }
                    }
                  >
                    <span
                      className="k-eyebrow"
                      style={p.featured ? { color: "var(--k-amber)" } : undefined}
                    >
                      {p.tag}
                    </span>
                    <h2 className="k-h3" style={{ fontSize: "1.7rem", marginTop: 12 }}>{p.name}</h2>
                    <p className="k-muted" style={{ marginTop: 10 }}>{p.blurb}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 26px", display: "grid", gap: 10 }}>
                      {p.features.map((f) => (
                        <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.95rem" }}>
                          <Check size={18} style={{ color: "var(--k-amber)", flexShrink: 0, marginTop: 2 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      className={`k-btn ${p.featured ? "k-btn--primary" : "k-btn--ghost"}`}
                      style={{ width: "100%" }}
                      href={KARI.appStoreUrl}
                      target="_blank"
                      rel="noopener"
                    >
                      {p.featured ? "Get the annual plan" : "Get started"}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="k-card" style={{ maxWidth: 900, margin: "18px auto 0" }}>
                <h3 className="k-h3" style={{ fontSize: "1.2rem" }}>Talk a lot? Minute packs.</h3>
                <p className="k-muted" style={{ marginTop: 8 }}>
                  Conversation time is measured in minutes — like a gym measures sessions. If a big week
                  empties your bag, one-time minute packs top it up without touching your plan. They never
                  expire with your subscription active.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div style={{ textAlign: "center", marginTop: 44 }}>
                <p className="k-muted" style={{ maxWidth: "62ch", marginInline: "auto", fontSize: "0.92rem" }}>
                  Subscriptions renew automatically unless canceled at least 24 hours before the period
                  ends. Manage or cancel anytime in Settings → your name → Subscriptions. Payments are
                  processed by Apple; we never see your card.
                </p>
                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
                  <Link className="k-btn k-btn--ghost" href="/kari/faq">
                    Pricing questions <ArrowRight size={17} />
                  </Link>
                  <Link className="k-btn k-btn--ghost" href="/kari/terms">
                    Terms
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="k-section k-section--tight" style={{ background: "var(--k-paper-deep)" }}>
          <div className="k-wrap" style={{ textAlign: "center" }}>
            <Reveal>
              <h2 className="k-h2" style={{ maxWidth: "24ch", marginInline: "auto" }}>
                {TOTAL_ROLEPLAYS}+ scenes. 45 lessons. <span className="k-italic">Five minutes a day.</span>
              </h2>
              <a
                className="k-btn k-btn--primary"
                style={{ marginTop: 30 }}
                href={KARI.appStoreUrl}
                target="_blank"
                rel="noopener"
              >
                Download Kari on the App Store
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <KariFooter />
    </>
  )
}
