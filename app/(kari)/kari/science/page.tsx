import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { KARI, SCIENCE, SCIENCE_PRINCIPLES } from "@/lib/kari-content"
import { AUTHOR_LD, ORG_ID, OG_IMAGE_URL, ogImage } from "@/lib/kari-ld"
import { KariNav, KariFooter, CtaBanner, PageHeader } from "@/components/kari/chrome"
import { JsonLd } from "@/components/kari/bits"
import { Reveal } from "@/components/kari/reveal"

const URL = `${KARI.siteUrl}/science`

export const metadata: Metadata = {
  title: { absolute: "The Science Behind Kari: Evidence for Voice-Based Social Skills Training" },
  description:
    "The research Kari is built on: simulated exposure matches real exposure (d=−1.39 vs −1.41, N=508), skills training doubles the effect of exposure alone (d=0.87), and vocal charisma improves within hours of feedback-driven practice (N=72, p<0.001). With references.",
  alternates: { canonical: URL },
  openGraph: { type: "article", url: URL, images: [{ url: ogImage("science"), width: 1200, height: 630 }], publishedTime: `${KARI.datePublished}T00:00:00Z`, modifiedTime: `${KARI.lastReviewed}T00:00:00Z`, authors: ["https://www.trempido.com"] },
}

const ARTICLE_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${URL}#article`,
  headline: "The science behind Kari: evidence for voice-based social skills training",
  description:
    "A summary of the primary studies and meta-analyses behind Kari's design: exposure research, social skills training, prosodic charisma feedback and measurable conversational signals.",
  inLanguage: "en",
  image: ogImage("science"),
  datePublished: KARI.datePublished,
  dateModified: KARI.lastReviewed,
  author: AUTHOR_LD,
  publisher: { "@id": ORG_ID },
  mainEntityOfPage: URL,
  about: ["charisma", "social skills training", "exposure therapy", "prosody", "conversation skills"],
  citation: SCIENCE.map((s) => ({
    "@type": "ScholarlyArticle",
    name: s.ref,
    ...(s.url ? { url: s.url, sameAs: s.url } : {}),
  })),
}

const fmt = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })

export default function Science() {
  return (
    <>
      <KariNav current="/science" />
      <JsonLd data={ARTICLE_LD} />
      <main>
        <PageHeader
          crumb="Science"
          eyebrow="75 claims · primary studies & meta-analyses"
          title={<>Built on evidence, <span className="k-italic">not vibes</span></>}
          lead="Every rule in Kari — how characters respond, what the report measures, why lessons pair with roleplays — traces back to a specific finding. These are the load-bearing ones."
        />

        {/* Byline + direct answer block (the citable unit) */}
        <section className="k-section k-section--tight" style={{ paddingTop: 0 }}>
          <div className="k-wrap k-prose" style={{ maxWidth: 800 }}>
            <Reveal>
              <p className="k-muted" style={{ fontSize: "0.9rem" }}>
                By <a href="https://www.trempido.com" rel="author">Pau Pidelaserra</a>, founder of Kari · Published{" "}
                <time dateTime={KARI.datePublished}>{fmt(KARI.datePublished)}</time> · Sources last reviewed{" "}
                <time dateTime={KARI.lastReviewed}>{fmt(KARI.lastReviewed)}</time>
              </p>
              <h2 className="k-h2" style={{ marginTop: 18, fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>
                Does training charisma by voice actually work?
              </h2>
              <p style={{ marginTop: 16 }}>
                Yes, within limits the research defines. Three findings carry the design. First, simulated exposure
                works as well as real exposure for the fear of speaking (11 controlled studies, N = 508, d = −1.39 vs
                −1.41), so practicing out loud with a voice AI is a legitimate exposure trial. Second, exposure alone
                does not build observable skill; adding skills training does (randomized trial, N = 106, judge-rated
                skill d = 0.87), so Kari pairs every roleplay with a spoken lesson. Third, the vocal part of charisma
                responds to feedback within hours (N = 72, score 40 to 71, p &lt; 0.001), so the app listens to your
                voice instead of reading a transcript. What the evidence does not support is a clinical promise:
                direct studies of AI voice roleplay are early and mostly self-report. Kari is a training tool, not
                therapy, and it only measures behaviors it can count.
              </p>
            </Reveal>
          </div>
        </section>

        {/* The six pillars */}
        <section className="k-section k-section--tight" style={{ paddingTop: 0 }}>
          <div className="k-wrap">
            <div className="k-grid-2" style={{ gap: "clamp(26px,3.5vw,44px)" }}>
              {SCIENCE.map((s, i) => (
                <Reveal key={s.claim} delay={(i % 2) * 0.07}>
                  <article className="k-stat" id={`finding-${i + 1}`}>
                    <div className="k-stat__big">{s.stat}</div>
                    <h2 className="k-h3" style={{ fontSize: "1.3rem" }}>{s.claim}</h2>
                    <p className="k-muted" style={{ marginTop: 10 }}>{s.detail}</p>
                    <details style={{ marginTop: 12 }}>
                      <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: "0.95rem" }}>What the study found, and what Kari does with it</summary>
                      <p style={{ marginTop: 10, fontSize: "0.97rem" }}>{s.long}</p>
                    </details>
                    <span className="k-stat__src">
                      {s.url ? (
                        <a href={s.url} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                          {s.source} <ExternalLink size={12} aria-hidden="true" />
                        </a>
                      ) : (
                        s.source
                      )}
                    </span>
                  </article>
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

        {/* References */}
        <section className="k-section k-section--tight" style={{ background: "var(--k-paper-deep)" }}>
          <div className="k-wrap k-prose" style={{ maxWidth: 800 }}>
            <Reveal>
              <span className="k-eyebrow">References</span>
              <h2 className="k-h2" style={{ marginTop: 14, fontSize: "clamp(1.5rem,2.6vw,2rem)" }}>The studies cited on this page</h2>
              <ol style={{ marginTop: 18, paddingLeft: 22, fontSize: "0.95rem" }}>
                {SCIENCE.map((s, i) => (
                  <li key={s.ref} id={`ref-${i + 1}`} style={{ marginBottom: 10 }}>
                    {s.ref}{" "}
                    {s.url ? (
                      <a href={s.url} target="_blank" rel="noopener">{s.url.replace("https://doi.org/", "doi:")}</a>
                    ) : null}
                  </li>
                ))}
              </ol>
              <p className="k-muted" style={{ fontSize: "0.88rem", marginTop: 12 }}>
                Kari's full research notes cover 75 claims. This page lists the ones each product rule depends on.
                Effect sizes are reported as in the original papers (Cohen's d or Hedges' g).
              </p>
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
