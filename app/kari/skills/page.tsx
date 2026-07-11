import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SKILLS } from "@/lib/kari-content"
import { KariNav, KariFooter, CtaBanner, PageHeader } from "@/components/kari/chrome"
import { JsonLd } from "@/components/kari/bits"
import { Reveal } from "@/components/kari/reveal"

export const metadata: Metadata = {
  title: "9 Social Skills You Can Train by Speaking — 45 Voice Lessons",
  description:
    "The 9 skills Kari trains with 45 spoken lessons: social confidence, public speaking, dating and attraction, leadership presence, conflict and boundaries, charisma, storytelling, persuasion and negotiation. One technique per lesson, practiced out loud.",
  alternates: { canonical: "https://karicoach.app/skills" },
}

const LIST_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Skills trained in Kari",
  description: "The 9 social skills Kari trains through 45 spoken lessons.",
  numberOfItems: SKILLS.length,
  itemListElement: SKILLS.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    description: `${s.tagline} Lessons: ${s.subskills.join(", ")}.`,
  })),
}

export default function Skills() {
  return (
    <>
      <KariNav current="/kari/skills" />
      <JsonLd data={LIST_LD} />
      <main>
        <PageHeader
          crumb="Skills"
          eyebrow="9 skills · 45 spoken lessons"
          title={<>One technique at a time, <span className="k-italic">out loud</span></>}
          lead="Every lesson follows deliberate practice: one concrete technique, immediate attempts in your own voice, one correction quoting your literal words — and the difficulty ramps only when you nail it. Then a transfer plan: “today, when you order coffee…”"
        />

        <section className="k-section k-section--tight">
          <div className="k-wrap">
            {SKILLS.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.05}>
                <div className="k-skill">
                  <div>
                    <h2 className="k-h3" style={{ fontSize: "clamp(1.4rem,2.4vw,1.9rem)" }}>{s.name}</h2>
                    <p className="k-italic" style={{ marginTop: 6, fontSize: "1.05rem" }}>{s.tagline}</p>
                  </div>
                  <div className="k-skill__tags">
                    {s.subskills.map((sub) => (
                      <span className="k-tag" key={sub}>{sub}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="k-section k-section--tight" style={{ background: "var(--k-paper-deep)" }}>
          <div className="k-wrap" style={{ textAlign: "center" }}>
            <Reveal>
              <h2 className="k-h2" style={{ maxWidth: "24ch", marginInline: "auto" }}>
                Lessons teach the move. <span className="k-italic">Roleplays make it yours.</span>
              </h2>
              <p className="k-lead" style={{ margin: "18px auto 30px" }}>
                The evidence is blunt: skills training plus real exposure beats either alone. That's the
                whole app.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <Link className="k-btn k-btn--primary" href="/roleplays">
                  See the 160+ roleplays <ArrowRight size={17} />
                </Link>
                <Link className="k-btn k-btn--ghost" href="/science">
                  Why this works
                </Link>
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
