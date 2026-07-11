import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SCIENCE, SCIENCE_PRINCIPLES } from "@/lib/kari-content"
import { KariNav, KariFooter, CtaBanner, PageHeader } from "@/components/kari/chrome"
import { JsonLd } from "@/components/kari/bits"
import { Reveal } from "@/components/kari/reveal"

export const metadata: Metadata = {
  title: "The Science Behind Kari: Evidence for Voice-Based Social Skills Training",
  description:
    "The research Kari is built on: simulated exposure matches real exposure (d=−1.39 vs −1.41, N=508), skills training doubles the effect of exposure alone (d=0.87), and vocal charisma improves within hours of feedback-driven practice (N=72, p<0.001).",
  alternates: { canonical: "https://karicoach.app/science" },
}

const ARTICLE_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The science behind Kari: evidence for voice-based social skills training",
  description:
    "A summary of the primary studies and meta-analyses behind Kari's design: exposure research, social skills training, prosodic charisma feedback and measurable conversational signals.",
  author: { "@type": "Person", name: "Pau Pidelaserra" },
  publisher: { "@type": "Person", name: "Pau Pidelaserra" },
  mainEntityOfPage: "https://karicoach.app/science",
}

export default function Science() {
  return (
    <>
      <KariNav current="/kari/science" />
      <JsonLd data={ARTICLE_LD} />
      <main>
        <PageHeader
          crumb="Science"
          eyebrow="75 claims · primary studies & meta-analyses"
          title={<>Built on evidence, <span className="k-italic">not vibes</span></>}
          lead="Every rule in Kari — how characters respond, what the report measures, why lessons pair with roleplays — traces back to a specific finding. These are the load-bearing ones."
        />

        {/* The six pillars */}
        <section className="k-section k-section--tight">
          <div className="k-wrap">
            <div className="k-grid-2" style={{ gap: "clamp(26px,3.5vw,44px)" }}>
              {SCIENCE.map((s, i) => (
                <Reveal key={s.claim} delay={(i % 2) * 0.07}>
                  <div className="k-stat">
                    <div className="k-stat__big">{s.stat}</div>
                    <h2 className="k-h3" style={{ fontSize: "1.3rem" }}>{s.claim}</h2>
                    <p className="k-muted" style={{ marginTop: 10 }}>{s.detail}</p>
                    <span className="k-stat__src">{s.source}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Design principles */}
        <section className="k-section k-dark">
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">How the findings become rules</span>
              <h2 className="k-h2" style={{ marginTop: 14, maxWidth: "22ch" }}>
                Four principles the app <span className="k-italic" style={{ color: "var(--k-gold)" }}>refuses to break</span>
              </h2>
            </Reveal>
            <div className="k-grid-2" style={{ marginTop: 40 }}>
              {SCIENCE_PRINCIPLES.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 0.07}>
                  <div className="k-card">
                    <h3 className="k-h3" style={{ fontSize: "1.25rem", color: "var(--k-gold)" }}>{p.title}</h3>
                    <p className="k-muted" style={{ marginTop: 10 }}>{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Honesty note */}
        <section className="k-section k-section--tight">
          <div className="k-wrap k-prose" style={{ maxWidth: 800 }}>
            <Reveal>
              <span className="k-eyebrow">Where the evidence ends</span>
              <h2 className="k-h2" style={{ marginTop: 14, fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>
                What we <span className="k-italic">don't</span> claim
              </h2>
              <p style={{ marginTop: 20 }}>
                Direct studies of AI voice roleplay are early and promising — medical students practicing
                with voice AI improved confidence across three domains (p&lt;0.001), and 82% of MIT
                negotiation-course students felt better prepared after bot practice — but most of that is
                self-report without control groups. So Kari doesn't promise clinical outcomes, and it is
                not therapy.
              </p>
              <p>
                What the strong evidence does support: simulated exposure works like real exposure,
                skills training plus exposure beats either alone, prosodic feedback improves perceived
                charisma fast, and specific behaviors (follow-up questions, hedging, silences over four
                seconds, concrete language) reliably shape how people perceive you. Kari measures exactly
                those behaviors — nothing mystical, nothing it can't count.
              </p>
              <Link className="k-btn k-btn--ghost" href="/how-it-works" style={{ marginTop: 16 }}>
                See how this becomes the method <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </section>

        <CtaBanner
          title="Read enough. Say something."
          body="The research says hours of spoken practice with feedback move the needle. Your first session takes five minutes."
        />
      </main>
      <KariFooter />
    </>
  )
}
