import type { Metadata } from "next"
import Link from "next/link"
import { Mic, Flame, ClipboardList, Gauge, LayoutGrid, Lock, ArrowRight } from "lucide-react"
import {
  KARI,
  SKILLS,
  ROLEPLAY_CATEGORIES,
  TOTAL_ROLEPLAYS,
  HOW_STEPS,
  SCIENCE,
  FEATURES,
  OUTCOMES,
  FAQS,
  REPORT_DEMO,
  PROMISE,
} from "@/lib/kari-content"
import { KariNav, KariFooter, CtaBanner } from "@/components/kari/chrome"
import { Sunburst, Voice, JsonLd } from "@/components/kari/bits"
import { Reveal } from "@/components/kari/reveal"

export const metadata: Metadata = {
  title: "Kari — The AI Charisma Coach You Talk To, Out Loud",
  description:
    "Kari is an iPhone app that trains charisma and social skills by real spoken conversation with an AI coach: 160+ roleplays, 45 voice lessons and a report that measures your behavior. Backed by science.",
  alternates: { canonical: "https://www.trempido.com/kari" },
}

const FEATURE_ICONS = {
  mic: Mic,
  flame: Flame,
  report: ClipboardList,
  gauge: Gauge,
  grid: LayoutGrid,
  lock: Lock,
} as const

const marqueeScenes = ROLEPLAY_CATEGORIES.flatMap((c) => c.scenes.map((s) => ({ emoji: s.emoji, title: s.title })))

export default function KariHome() {
  return (
    <>
      <KariNav />
      <main>
        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="k-hero">
          <Sunburst size={640} style={{ top: -230, left: -230 }} />
          <div className="k-wrap k-hero__grid">
            <div>
              <Reveal>
                <span className="k-hero__badge">
                  <span className="k-dot" />
                  Live voice AI · for iPhone
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="k-display">
                  Your social gym, <span className="k-gold-word">by voice</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="k-lead" style={{ marginTop: 26 }}>
                  Kari is an AI charisma coach you practice with <strong style={{ color: "var(--k-teja)" }}>out loud</strong>.
                  Real conversations with characters who talk back, and a report that tells you exactly
                  what to improve — filler words counted, silences measured, no flattery.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
                  <a className="k-btn k-btn--primary" href={KARI.appStoreUrl} target="_blank" rel="noopener">
                    Download on the App Store
                  </a>
                  <Link className="k-btn k-btn--ghost" href="/kari/how-it-works">
                    How it works <ArrowRight size={17} />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="k-hero__meta">
                  <span><strong>{TOTAL_ROLEPLAYS}+</strong> roleplay scenes</span>
                  <span><strong>45</strong> voice lessons</span>
                  <span><strong>{KARI.languages}</strong> languages</span>
                  <span><strong>Science</strong>-backed</span>
                </div>
              </Reveal>
            </div>

            {/* conversation artifact */}
            <Reveal delay={0.2}>
              <div className="k-device" aria-hidden="true">
                <div className="k-bubble k-bubble--them">
                  <span className="k-bubble__who">Noa · cold approach at a bar</span>
                  Another “do you come here often”? Really?
                </div>
                <div className="k-bubble k-bubble--you">
                  <span className="k-bubble__who" style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    You, out loud <Voice />
                  </span>
                  No line. I just heard you defend pineapple pizza and I need to understand.
                </div>
                <div className="k-bubble k-bubble--them">
                  <span className="k-bubble__who">Noa</span>
                  Okay… you get three minutes. Impress me.
                </div>
                <div className="k-report-chip">
                  <div className="k-report-chip__title">
                    <Voice /> Session report
                  </div>
                  <div className="k-report-chip__rows">
                    <div><span>Filler words</span> <strong>7 counted</strong></div>
                    <div><span>Follow-up questions</span> <strong>2 asked</strong></div>
                    <div><span>Silences over 4s</span> <strong>2 measured</strong></div>
                    <div><span>Mission</span> <strong>accomplished</strong></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ─── SCENE MARQUEE ────────────────────────────────── */}
        <div className="k-marquee" aria-hidden="true">
          <div className="k-marquee__track">
            {[...marqueeScenes, ...marqueeScenes].map((s, i) => (
              <span className="k-marquee__item" key={i}>
                <span>{s.emoji}</span> {s.title}
              </span>
            ))}
          </div>
        </div>

        {/* ─── THE PROMISE ──────────────────────────────────── */}
        <section className="k-section k-section--tight" aria-label="The promise">
          <div className="k-wrap" style={{ textAlign: "center" }}>
            <Reveal>
              <p
                className="k-h2"
                style={{ maxWidth: "22ch", marginInline: "auto", fontWeight: 480 }}
              >
                {PROMISE[0]}{" "}
                <span className="k-italic">{PROMISE[1]}</span>{" "}
                <span className="k-italic">{PROMISE[2]}</span>{" "}
                <span className="k-gold-word">{PROMISE[3]}</span>
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="k-lead" style={{ margin: "26px auto 0" }}>
                It's already in you. Nobody trained it — that's all. Kari is the gym.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─────────────────────────────────── */}
        <section className="k-section">
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">The training loop</span>
              <h2 className="k-h2" style={{ marginTop: 14, maxWidth: "18ch" }}>
                Learn it. Live it. <span className="k-italic">See it in numbers.</span>
              </h2>
            </Reveal>
            <div style={{ marginTop: 48 }}>
              {HOW_STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="k-step">
                    <div className="k-step__n">{s.n}</div>
                    <div>
                      <div className="k-step__kicker">{s.kicker}</div>
                      <h3 className="k-h3">{s.title}</h3>
                      <p className="k-muted" style={{ marginTop: 10, maxWidth: "62ch" }}>{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <Link className="k-btn k-btn--ghost" href="/kari/how-it-works" style={{ marginTop: 18 }}>
                See the full method <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ─── MIRROR (dark) ────────────────────────────────── */}
        <section className="k-section k-dark">
          <Sunburst size={560} color="rgba(239,193,99,0.06)" style={{ top: -200, right: -180 }} />
          <div className="k-wrap">
            <div className="k-grid-2" style={{ gap: "clamp(36px, 5vw, 72px)", alignItems: "center" }}>
              <div>
                <Reveal>
                  <span className="k-eyebrow">The report</span>
                  <h2 className="k-h2" style={{ marginTop: 14 }}>
                    A coach who <span className="k-italic" style={{ color: "var(--k-gold)" }}>doesn't flatter you</span>
                  </h2>
                  <p className="k-lead" style={{ marginTop: 20 }}>
                    Every session ends with evidence, not encouragement: your filler words counted one by
                    one, your silences timed, your literal quotes analyzed. Four traits measured —
                    Listening, Clarity, Confidence, Tone — and the one lever holding you back.
                  </p>
                  <p className="k-muted" style={{ marginTop: 16, fontStyle: "italic" }}>
                    “{REPORT_DEMO.verdict}”
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.12}>
                <div className="k-evidence">
                  {REPORT_DEMO.metrics.map((m) => (
                    <div className="k-evidence__row" key={m.name}>
                      <span>
                        <strong style={{ marginRight: 12 }}>{m.pct}</strong>
                        <b>{m.name}</b>
                        <span style={{ display: "block", fontSize: "0.84rem", opacity: 0.75 }}>{m.note}</span>
                      </span>
                    </div>
                  ))}
                  {REPORT_DEMO.evidence.map((e) => (
                    <div className="k-evidence__row" key={e.label}>
                      <span>{e.label}</span>
                      <strong>{e.value}</strong>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─────────────────────────────────────── */}
        <section className="k-section">
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">Why Kari is different</span>
              <h2 className="k-h2" style={{ marginTop: 14, maxWidth: "20ch" }}>
                Not lessons about talking. <span className="k-italic">Talking.</span>
              </h2>
            </Reveal>
            <div className="k-grid-3" style={{ marginTop: 44 }}>
              {FEATURES.map((f, i) => {
                const Icon = FEATURE_ICONS[f.icon as keyof typeof FEATURE_ICONS]
                return (
                  <Reveal key={f.title} delay={(i % 3) * 0.08}>
                    <div className="k-card" style={{ height: "100%" }}>
                      <div className="k-icon-tile"><Icon size={22} /></div>
                      <h3 className="k-h3" style={{ fontSize: "1.25rem" }}>{f.title}</h3>
                      <p className="k-muted" style={{ marginTop: 8, fontSize: "0.97rem" }}>{f.body}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── ROLEPLAYS PREVIEW ────────────────────────────── */}
        <section className="k-section" style={{ background: "var(--k-paper-deep)" }}>
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">{TOTAL_ROLEPLAYS}+ roleplays</span>
              <h2 className="k-h2" style={{ marginTop: 14, maxWidth: "22ch" }}>
                Every conversation you've been <span className="k-italic">avoiding</span>
              </h2>
              <p className="k-lead" style={{ marginTop: 18 }}>
                {ROLEPLAY_CATEGORIES.map((c) => `${c.name} (${c.count})`).join(" · ")}
              </p>
            </Reveal>
            <div className="k-grid-3" style={{ marginTop: 40 }}>
              {[
                ROLEPLAY_CATEGORIES[0].scenes[0],
                ROLEPLAY_CATEGORIES[1].scenes[0],
                ROLEPLAY_CATEGORIES[2].scenes[1],
              ].map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <article className="k-scene" style={{ height: "100%" }}>
                    <span className="k-scene__emoji">{s.emoji}</span>
                    <h3 className="k-scene__title">{s.title}</h3>
                    <p className="k-scene__char">{s.character}</p>
                    <p className="k-scene__mission">{s.mission}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <Link className="k-btn k-btn--ghost" href="/kari/roleplays" style={{ marginTop: 34 }}>
                Browse all {TOTAL_ROLEPLAYS}+ scenes <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ─── SKILLS STRIP ─────────────────────────────────── */}
        <section className="k-section">
          <div className="k-wrap">
            <div className="k-grid-2" style={{ alignItems: "center", gap: "clamp(30px,4vw,60px)" }}>
              <Reveal>
                <span className="k-eyebrow">9 skills · 45 lessons</span>
                <h2 className="k-h2" style={{ marginTop: 14 }}>
                  From small talk to <span className="k-italic">negotiation</span>
                </h2>
                <p className="k-lead" style={{ marginTop: 18 }}>
                  Each skill is five spoken lessons: one concrete technique, practiced out loud with
                  Kari correcting your literal words, until the difficulty goes up.
                </p>
                <Link className="k-btn k-btn--ghost" href="/kari/skills" style={{ marginTop: 28 }}>
                  Explore the 9 skills <ArrowRight size={17} />
                </Link>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="k-skill__tags">
                  {SKILLS.map((s) => (
                    <span className="k-tag" key={s.id} style={{ fontSize: "0.95rem", padding: "10px 18px" }}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── SCIENCE PREVIEW ──────────────────────────────── */}
        <section className="k-section" style={{ background: "var(--k-paper-deep)" }}>
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">Built on evidence</span>
              <h2 className="k-h2" style={{ marginTop: 14, maxWidth: "20ch" }}>
                The science is <span className="k-italic">unreasonably clear</span>
              </h2>
            </Reveal>
            <div className="k-grid-3" style={{ marginTop: 44 }}>
              {SCIENCE.slice(0, 3).map((s, i) => (
                <Reveal key={s.claim} delay={i * 0.08}>
                  <div className="k-stat">
                    <div className="k-stat__big">{s.stat}</div>
                    <h3 className="k-h3" style={{ fontSize: "1.2rem" }}>{s.claim}</h3>
                    <p className="k-muted" style={{ marginTop: 8, fontSize: "0.93rem" }}>{s.detail}</p>
                    <span className="k-stat__src">{s.source}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <Link className="k-btn k-btn--ghost" href="/kari/science" style={{ marginTop: 36 }}>
                Read the research behind Kari <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ─── OUTCOMES ─────────────────────────────────────── */}
        <section className="k-section">
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">What changes</span>
              <h2 className="k-h2" style={{ marginTop: 14 }}>
                Weeks, <span className="k-italic">not years</span>
              </h2>
            </Reveal>
            <div className="k-grid-3" style={{ marginTop: 44 }}>
              {OUTCOMES.map((o, i) => (
                <Reveal key={o.title} delay={i * 0.08}>
                  <div className="k-card" style={{ height: "100%" }}>
                    <h3 className="k-h3" style={{ fontSize: "1.3rem", fontStyle: "italic" }}>{o.title}</h3>
                    <p className="k-muted" style={{ marginTop: 12 }}>{o.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ (top 4) ──────────────────────────────────── */}
        <section className="k-section k-section--tight">
          <div className="k-wrap" style={{ maxWidth: 860 }}>
            <Reveal>
              <span className="k-eyebrow">Questions</span>
              <h2 className="k-h2" style={{ marginTop: 14 }}>Fair questions</h2>
            </Reveal>
            <div className="k-faq" style={{ marginTop: 32 }}>
              {FAQS.slice(0, 4).map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <Reveal>
              <Link className="k-btn k-btn--ghost" href="/kari/faq" style={{ marginTop: 28 }}>
                All questions <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </section>

        <CtaBanner />
      </main>
      <KariFooter />
    </>
  )
}
