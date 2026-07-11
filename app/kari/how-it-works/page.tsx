import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { HOW_STEPS, TRAITS, ARCHETYPES, REPORT_DEMO, COMPARISON, KARI } from "@/lib/kari-content"
import { KariNav, KariFooter, CtaBanner, PageHeader } from "@/components/kari/chrome"
import { JsonLd, Voice } from "@/components/kari/bits"
import { Reveal } from "@/components/kari/reveal"

export const metadata: Metadata = {
  title: "How Kari Works: Spoken Lesson, Live Roleplay, Evidence Report",
  description:
    "How the Kari method works: you learn one technique in a spoken lesson, test it in a live voice roleplay against a character who pushes back, and get a report measuring Listening, Clarity, Confidence and Tone.",
  alternates: { canonical: "https://www.trempido.com/kari/how-it-works" },
}

const HOWTO_LD = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to train charisma with Kari",
  description:
    "The three-step loop Kari uses to train social skills by voice: spoken lesson, live roleplay, evidence-based report.",
  step: HOW_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.body,
  })),
}

export default function HowItWorks() {
  return (
    <>
      <KariNav current="/kari/how-it-works" />
      <JsonLd data={HOWTO_LD} />
      <main>
        <PageHeader
          crumb="How it works"
          eyebrow="The method"
          title={<>Learn it. Live it. <span className="k-italic">Measure it.</span></>}
          lead="Kari's whole design is one loop, borrowed from the strongest evidence in skills training: model → rehearse → feedback. Out loud, every time."
        />

        {/* The loop, expanded */}
        <section className="k-section k-section--tight">
          <div className="k-wrap">
            {HOW_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="k-step">
                  <div className="k-step__n">{s.n}</div>
                  <div>
                    <div className="k-step__kicker">{s.kicker}</div>
                    <h2 className="k-h3">{s.title}</h2>
                    <p className="k-muted" style={{ marginTop: 10, maxWidth: "64ch" }}>{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* What gets measured */}
        <section className="k-section k-dark">
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">What Kari measures</span>
              <h2 className="k-h2" style={{ marginTop: 14, maxWidth: "22ch" }}>
                Four traits. One number. <span className="k-italic" style={{ color: "var(--k-gold)" }}>One lever.</span>
              </h2>
              <p className="k-lead" style={{ marginTop: 18 }}>
                Every session feeds four measured traits. From them, Kari calibrates your
                <strong style={{ color: "var(--k-gold)" }}> charisma number</strong> (0–100) — weighted so your
                weakest trait drags it, because charisma doesn't average out. The trait costing you the most
                points is your <em>lever</em>: fix that first.
              </p>
            </Reveal>
            <div className="k-grid-2" style={{ marginTop: 40 }}>
              {TRAITS.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.06}>
                  <div className="k-card">
                    <h3 className="k-h3" style={{ fontSize: "1.3rem", color: "var(--k-gold)" }}>{t.name}</h3>
                    <p className="k-muted" style={{ marginTop: 8 }}>{t.blurb}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="k-report-chip" style={{ marginTop: 44, maxWidth: 560 }}>
                <div className="k-report-chip__title"><Voice /> Real report, real session</div>
                <p style={{ margin: "0 0 14px", fontStyle: "italic", fontSize: "0.95rem" }}>
                  “{REPORT_DEMO.verdict}”
                </p>
                <div className="k-report-chip__rows">
                  {REPORT_DEMO.metrics.map((m) => (
                    <div key={m.name}>
                      <span>{m.name} — <em style={{ opacity: 0.8 }}>{m.note}</em></span>
                      <strong>{m.pct}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Archetypes */}
        <section className="k-section">
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">Your profile</span>
              <h2 className="k-h2" style={{ marginTop: 14 }}>
                Five conversational <span className="k-italic">archetypes</span>
              </h2>
              <p className="k-lead" style={{ marginTop: 18 }}>
                As evidence accumulates, Kari maps your trait profile to five archetypes — not to put you
                in a box, but to show you what your strengths already look like and where your training is
                taking you.
              </p>
            </Reveal>
            <div className="k-grid-3" style={{ marginTop: 40 }}>
              {ARCHETYPES.map((a, i) => (
                <Reveal key={a.name} delay={(i % 3) * 0.07}>
                  <div className="k-card">
                    <h3 className="k-h3" style={{ fontSize: "1.25rem", fontStyle: "italic" }}>{a.name}</h3>
                    <p className="k-muted" style={{ marginTop: 8 }}>{a.blurb}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="k-section" style={{ background: "var(--k-paper-deep)" }}>
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">Kari vs. the usual advice</span>
              <h2 className="k-h2" style={{ marginTop: 14, maxWidth: "22ch" }}>
                Why <span className="k-italic">speaking</span> beats reading about speaking
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="k-table-wrap" style={{ marginTop: 36 }}>
                <table className="k-table">
                  <thead>
                    <tr>
                      <th scope="col">Dimension</th>
                      <th scope="col">Kari</th>
                      <th scope="col">Books, videos & chatbots</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row) => (
                      <tr key={row.dimension}>
                        <td>{row.dimension}</td>
                        <td>{row.kari}</td>
                        <td>{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <Reveal>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 34 }}>
                <Link className="k-btn k-btn--ghost" href="/kari/science">
                  The evidence behind each choice <ArrowRight size={17} />
                </Link>
                <a className="k-btn k-btn--primary" href={KARI.appStoreUrl} target="_blank" rel="noopener">
                  Try it yourself
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <CtaBanner />
      </main>
      <KariFooter />
    </>
  )
}
