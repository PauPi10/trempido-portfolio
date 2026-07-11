import type { Metadata } from "next"
import { ROLEPLAY_CATEGORIES, TOTAL_ROLEPLAYS } from "@/lib/kari-content"
import { KariNav, KariFooter, CtaBanner, PageHeader } from "@/components/kari/chrome"
import { JsonLd } from "@/components/kari/bits"
import { Reveal } from "@/components/kari/reveal"

export const metadata: Metadata = {
  title: `${TOTAL_ROLEPLAYS}+ Conversation Roleplays to Practice Out Loud`,
  description:
    "Browse Kari's catalog of 160+ voice roleplays: dating and flirting, job interviews and salary talks, persuasion and negotiation, everyday conflicts, family conversations. Practice each scene out loud with an AI character who talks back.",
  alternates: { canonical: "https://www.trempido.com/kari/roleplays" },
}

const LIST_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Kari roleplay categories",
  description: `The ${TOTAL_ROLEPLAYS}+ conversation practice scenarios in Kari, grouped in 5 categories.`,
  numberOfItems: ROLEPLAY_CATEGORIES.length,
  itemListElement: ROLEPLAY_CATEGORIES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.name} (${c.count} scenes)`,
    description: c.blurb,
  })),
}

export default function Roleplays() {
  return (
    <>
      <KariNav current="/kari/roleplays" />
      <JsonLd data={LIST_LD} />
      <main>
        <PageHeader
          crumb="Roleplays"
          eyebrow={`${TOTAL_ROLEPLAYS}+ scenes · 5 categories`}
          title={<>Every conversation you've been <span className="k-italic">avoiding</span></>}
          lead="Each roleplay is a live voice scene with a mission and a character who reacts like the real person would: bored by canned lines, pushing back, giving in only to technique. Variety is deliberate — varied scenes retain more than repeating one until it feels comfortable."
        />

        {ROLEPLAY_CATEGORIES.map((cat, ci) => (
          <section
            className="k-section k-section--tight"
            key={cat.id}
            style={ci % 2 === 1 ? { background: "var(--k-paper-deep)" } : undefined}
          >
            <div className="k-wrap">
              <Reveal>
                <div className="k-cat">
                  <h2 className="k-h2" style={{ fontSize: "clamp(1.7rem,3.4vw,2.5rem)" }}>{cat.name}</h2>
                  <span className="k-cat__count">{cat.count} scenes</span>
                </div>
                <p className="k-lead" style={{ marginBottom: 30 }}>{cat.blurb}</p>
              </Reveal>
              <div className="k-grid-2">
                {cat.scenes.map((s, i) => (
                  <Reveal key={s.title} delay={(i % 2) * 0.07}>
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
                <p className="k-muted" style={{ marginTop: 22, fontSize: "0.9rem", fontStyle: "italic" }}>
                  …and {cat.count - cat.scenes.length} more {cat.name.toLowerCase()} scenes in the app.
                </p>
              </Reveal>
            </div>
          </section>
        ))}

        <CtaBanner
          title="Pick tonight's scene."
          body="Noa is at the bar, Elena has the trap questions ready and the retention guy is warming up. Five minutes, out loud."
        />
      </main>
      <KariFooter />
    </>
  )
}
