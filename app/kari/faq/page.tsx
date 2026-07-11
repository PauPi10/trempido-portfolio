import type { Metadata } from "next"
import { FAQS, KARI } from "@/lib/kari-content"
import { KariNav, KariFooter, CtaBanner, PageHeader } from "@/components/kari/chrome"
import { JsonLd } from "@/components/kari/bits"
import { Reveal } from "@/components/kari/reveal"

export const metadata: Metadata = {
  title: "Kari FAQ — What It Is, How It Works, What It Costs",
  description:
    "Answers about Kari, the voice AI charisma coach: what it is, whether practicing with an AI works, what you can practice, languages, pricing and privacy.",
  alternates: { canonical: "https://karicoach.app/faq" },
}

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function Faq() {
  return (
    <>
      <KariNav current="/kari/faq" />
      <JsonLd data={FAQ_LD} />
      <main>
        <PageHeader
          crumb="FAQ"
          eyebrow="Straight answers"
          title={<>Fair <span className="k-italic">questions</span></>}
        />
        <section className="k-section k-section--tight">
          <div className="k-wrap" style={{ maxWidth: 860 }}>
            <Reveal>
              <div className="k-faq">
                {FAQS.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <div className="k-card" style={{ marginTop: 36, textAlign: "center" }}>
                <h2 className="k-h3" style={{ fontSize: "1.3rem" }}>Still stuck? That's what support is for.</h2>
                <p className="k-muted" style={{ marginTop: 8 }}>
                  Questions, problems or ideas — write us and we answer personally. To manage or cancel a
                  subscription: Settings → your name → Subscriptions on your iPhone.
                </p>
                <a className="k-btn k-btn--primary" style={{ marginTop: 20 }} href={`mailto:${KARI.supportEmail}`}>
                  {KARI.supportEmail}
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
