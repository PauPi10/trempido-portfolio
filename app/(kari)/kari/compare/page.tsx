import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { KARI, TOTAL_ROLEPLAYS } from "@/lib/kari-content"
import { AUTHOR_LD, ORG_ID, OG_IMAGE_URL, ogImage } from "@/lib/kari-ld"
import { KariNav, KariFooter, CtaBanner, PageHeader } from "@/components/kari/chrome"
import { JsonLd } from "@/components/kari/bits"
import { Reveal } from "@/components/kari/reveal"

const URL = `${KARI.siteUrl}/compare`
const CHECKED = "2026-09-12"

export const metadata: Metadata = {
  title: { absolute: "Kari vs CharmXP vs Vocal Image vs ChatGPT Voice: Which AI Charisma Coach Fits You" },
  description:
    "An honest comparison of AI apps for practicing conversations out loud: Kari, CharmXP, Vocal Image and ChatGPT voice mode. What each measures, how the characters behave, languages, pricing model and who each one is best for. Facts checked on the US App Store, September 2026.",
  alternates: { canonical: URL },
  openGraph: { type: "article", url: URL, images: [{ url: ogImage("compare"), width: 1200, height: 630 }], publishedTime: `${CHECKED}T00:00:00Z`, modifiedTime: `${CHECKED}T00:00:00Z` },
}

// Facts below were read from each app's US App Store listing on CHECKED.
// Prices are the listed in-app purchase ranges that day; they change.
const ROWS = [
  {
    dim: "How you practice",
    kari: "Live spoken conversation. You talk, the character answers by voice in real time.",
    charmxp: "Voice-based practice with an AI coach in chosen scenarios (its listing: “Talk it out”).",
    vocal: "AI roleplay with an AI that plays the other person, plus voice drills, breathing and diction exercises.",
    chatgpt: "Voice mode with a general assistant. You write the roleplay prompt yourself.",
  },
  {
    dim: "Who answers",
    kari: "Characters with a personality and a threshold: they get bored, push back, and only give in to technique.",
    charmxp: "“Lifelike AI that adapts to your tone and conversation flow” (listing).",
    vocal: "The AI “plays the other person, your manager, your partner, your teenager, and pushes back the way they might” (listing).",
    chatgpt: "A helpful assistant. It tends to cooperate unless you instruct it to resist, and it does not keep a scene's stakes.",
  },
  {
    dim: "What the feedback measures",
    kari: "Counted behaviors: filler words one by one, silences over 4 s, follow-up questions, talk-time balance; four traits (Listening, Clarity, Confidence, Tone) and a 0–100 charisma number with your weakest lever.",
    charmxp: "A “heat-map” performance report on clarity, empathy and engagement, plus XP and level-ups (listing).",
    vocal: "After roleplay: “what worked, what did not, where filler words crept in, and better ways to say it”; instant Clarity and Speed scores on drills (listing).",
    chatgpt: "No built-in behavioral scoring. You can ask for feedback, but nothing is counted unless you build that into the prompt.",
  },
  {
    dim: "Catalog",
    kari: `${TOTAL_ROLEPLAYS}+ scenes in 5 categories (dating 46, everyday 36, persuasion 30, work 27, relationships 21) and 45 spoken lessons in 9 skills.`,
    charmxp: "“Various social and professional situations (interviews, networking events, or social connections)” and bite-sized lessons on charisma, storytelling, listening, body language (listing).",
    vocal: "Workplace-heavy roleplays (raise, interviews, feedback, conflict, client calls) inside a daily plan with videos, podcasts and drills (listing).",
    chatgpt: "Unlimited, but unstructured: no catalog, no missions, no progression.",
  },
  {
    dim: "Evidence base",
    kari: "Design derived from primary studies and meta-analyses (exposure, skills training, prosodic feedback, question-asking), with references on the Science page.",
    charmxp: "Not stated on the listing.",
    vocal: "Not stated on the listing.",
    chatgpt: "Not applicable.",
  },
  {
    dim: "Languages",
    kari: "31 interface languages; Spanish and English first. You train in the language you choose.",
    charmxp: "English (listing).",
    vocal: "English and 8 more: Estonian, French, German, Italian, Polish, Russian, Spanish, Ukrainian (listing).",
    chatgpt: "Most major languages.",
  },
  {
    dim: "Platform",
    kari: "iPhone.",
    charmxp: "iPhone, Mac (Apple silicon) and Apple Vision (listing).",
    vocal: "iPhone and Android.",
    chatgpt: "Everywhere.",
  },
  {
    dim: "Pricing model",
    kari: "Subscription (weekly or annual) plus one-time minute packs. Prices shown in the App Store.",
    charmxp: "Subscription required; listed tiers from $6.99 to $87.90 on the day checked.",
    vocal: "Subscriptions listed from $7.99 weekly to $129.99 annual on the day checked.",
    chatgpt: "Free tier; voice limits vary by plan.",
  },
]

const FAQ = [
  {
    q: "Is Kari a good CharmXP alternative?",
    a: "If what you want is spoken practice with a report that counts behaviors, yes. Both are voice-based and both have scenarios and lessons. Kari's differences: characters with a defined threshold who resist until technique earns it, a report built on counted signals (filler words, silences, follow-up questions) rather than a heat-map, a documented evidence base, and 31 languages. CharmXP runs on Mac and Vision Pro as well as iPhone; Kari is iPhone only.",
  },
  {
    q: "Kari or Vocal Image?",
    a: "Vocal Image is broader: voice warm-ups, breathing, diction drills, podcasts and a daily plan, with roleplay as one component and a workplace focus. Kari is narrower on purpose: every session is a spoken conversation with a character, across dating, everyday conflict, persuasion, work and family, and the whole product is the lesson → roleplay → report loop. If you mainly want to train your voice as an instrument, Vocal Image fits. If you want to rehearse the actual conversations, Kari does.",
  },
  {
    q: "Why not just use ChatGPT voice mode to practice?",
    a: "You can, and it is free. Three things are missing: the assistant cooperates by default, so there is no real resistance unless you engineer it every time; nothing is counted, so you never learn you said “um” nine times or left a five-second silence; and there is no curriculum, so you do not progress from a technique to a harder scene. Kari exists to supply exactly those three things.",
  },
  {
    q: "Which app is best for dating conversations?",
    a: "Of the four, Kari is the only one whose catalog is built around dating as a first-class category (46 scenes: cold approach, first date, friendzone, taking a no) with characters who get bored by canned lines. Vocal Image and CharmXP lean professional; ChatGPT can improvise a date but will not hold the scene's stakes.",
  },
]

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${URL}#article`,
    headline: "Kari vs CharmXP vs Vocal Image vs ChatGPT voice: which AI charisma coach fits you",
    description: "Comparison of four ways to practice conversations out loud with AI, with facts read from each app's US App Store listing.",
    inLanguage: "en",
    image: ogImage("compare"),
    datePublished: CHECKED,
    dateModified: CHECKED,
    author: AUTHOR_LD,
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: URL,
    about: [{ "@id": `${KARI.siteUrl}/#app` }, "CharmXP", "Vocal Image", "ChatGPT voice mode"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${URL}#faq`,
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
]

export default function Compare() {
  return (
    <>
      <KariNav />
      <JsonLd data={LD} />
      <main>
        <PageHeader
          crumb="Compare"
          eyebrow="Kari vs the alternatives"
          title={<>Four ways to practice talking. <span className="k-italic">One honest table.</span></>}
          lead="Kari, CharmXP, Vocal Image and ChatGPT voice mode all let you speak to an AI. They differ in who answers, what gets measured and what you are paying for. Written by Kari's founder; competitor facts are quoted from their App Store listings, checked September 2026."
        />

        <section className="k-section k-section--tight" style={{ paddingTop: 0 }}>
          <div className="k-wrap k-prose" style={{ maxWidth: 800 }}>
            <Reveal>
              <h2 className="k-h2" style={{ fontSize: "clamp(1.5rem,2.8vw,2.1rem)" }}>What is the difference between these AI conversation coaches?</h2>
              <p style={{ marginTop: 16 }}>
                All four put a voice in your ear. The difference is what happens after you speak. Kari answers with a
                character who has a threshold and a mission, then hands you a report of counted behaviors: filler
                words, silences over four seconds, follow-up questions, talk-time balance, four scored traits and a
                charisma number with your weakest lever. CharmXP, by its own listing, offers voice practice in
                professional and social scenarios with a heat-map report on clarity, empathy and engagement, plus XP.
                Vocal Image wraps AI roleplay inside a daily plan of voice drills, breathing, diction and podcasts,
                with a workplace focus and feedback on filler words and phrasing. ChatGPT voice mode is a general
                assistant: it will roleplay if you ask, cooperates by default, and counts nothing. Kari is also the
                only one of the four with a published evidence base and with dating as a first-class category.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="k-section k-section--tight" style={{ background: "var(--k-paper-deep)" }}>
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">Side by side</span>
              <h2 className="k-h2" style={{ marginTop: 14, fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>Feature by feature</h2>
              <p className="k-muted" style={{ marginTop: 10, fontSize: "0.9rem" }}>
                Competitor cells quote or paraphrase each app's US App Store listing as read on {CHECKED}. Prices change; check the store.
              </p>
            </Reveal>
            <div style={{ overflowX: "auto", marginTop: 26 }}>
              <table className="k-table" style={{ minWidth: 900, width: "100%", borderCollapse: "collapse", fontSize: "0.93rem" }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: "left", padding: "12px 10px", borderBottom: "2px solid var(--k-line)" }}></th>
                    <th scope="col" style={{ textAlign: "left", padding: "12px 10px", borderBottom: "2px solid var(--k-line)", color: "var(--k-teja)" }}>Kari</th>
                    <th scope="col" style={{ textAlign: "left", padding: "12px 10px", borderBottom: "2px solid var(--k-line)" }}>CharmXP</th>
                    <th scope="col" style={{ textAlign: "left", padding: "12px 10px", borderBottom: "2px solid var(--k-line)" }}>Vocal Image</th>
                    <th scope="col" style={{ textAlign: "left", padding: "12px 10px", borderBottom: "2px solid var(--k-line)" }}>ChatGPT voice</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r) => (
                    <tr key={r.dim}>
                      <th scope="row" style={{ textAlign: "left", verticalAlign: "top", padding: "12px 10px", borderBottom: "1px solid var(--k-line)", whiteSpace: "nowrap" }}>{r.dim}</th>
                      <td style={{ verticalAlign: "top", padding: "12px 10px", borderBottom: "1px solid var(--k-line)" }}>{r.kari}</td>
                      <td style={{ verticalAlign: "top", padding: "12px 10px", borderBottom: "1px solid var(--k-line)" }}>{r.charmxp}</td>
                      <td style={{ verticalAlign: "top", padding: "12px 10px", borderBottom: "1px solid var(--k-line)" }}>{r.vocal}</td>
                      <td style={{ verticalAlign: "top", padding: "12px 10px", borderBottom: "1px solid var(--k-line)" }}>{r.chatgpt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="k-section k-section--tight">
          <div className="k-wrap k-prose" style={{ maxWidth: 800 }}>
            <Reveal>
              <span className="k-eyebrow">Straight answer</span>
              <h2 className="k-h2" style={{ marginTop: 14, fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>Who each one is for</h2>
              <ul style={{ marginTop: 16, paddingLeft: 22 }}>
                <li style={{ marginBottom: 10 }}><strong>Kari</strong>: you want to rehearse specific conversations (a date, an interview, a neighbor, an apology) against a character who resists, and get a count of what you did. iPhone, 31 languages.</li>
                <li style={{ marginBottom: 10 }}><strong>CharmXP</strong>: you want voice scenario practice with gamified progression, mostly professional and networking, and you use a Mac or Vision Pro as well as an iPhone.</li>
                <li style={{ marginBottom: 10 }}><strong>Vocal Image</strong>: your priority is the voice itself: warm-ups, diction, breathing, a daily plan, with workplace roleplay as one piece. Android available.</li>
                <li style={{ marginBottom: 10 }}><strong>ChatGPT voice</strong>: you want free, open-ended practice and are willing to write the scene and ask for feedback yourself every time.</li>
              </ul>
              <p className="k-muted" style={{ fontSize: "0.9rem" }}>
                Kari is a training tool, not a medical or psychological service, and none of the apps above should be read as one.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="k-section k-section--tight" style={{ background: "var(--k-paper-deep)" }}>
          <div className="k-wrap" style={{ maxWidth: 860 }}>
            <Reveal>
              <span className="k-eyebrow">Questions</span>
              <h2 className="k-h2" style={{ marginTop: 14, fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>Choosing between them</h2>
            </Reveal>
            <div className="k-faq" style={{ marginTop: 28 }}>
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <Reveal>
              <Link className="k-btn k-btn--ghost" href="/how-it-works" style={{ marginTop: 28 }}>
                See how Kari's loop works <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </section>

        <CtaBanner title="Try the one that counts." body="Your first Kari session takes five minutes and ends with a report. Judge it on that." />
      </main>
      <KariFooter />
    </>
  )
}
