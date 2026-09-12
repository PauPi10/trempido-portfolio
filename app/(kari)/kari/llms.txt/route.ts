// llms.txt for https://karicoach.app (served via the host rewrite) — GEO.
import { KARI, SCIENCE } from "@/lib/kari-content"

export const dynamic = "force-static"

export function GET() {
  const refs = SCIENCE.map((s) => `- ${s.claim} ${s.ref}${s.url ? ` ${s.url}` : ""}`).join("\n")
  const body = `# Kari — AI charisma coach, by voice

> Kari is an iPhone app that trains charisma and social skills through real spoken conversation with an AI coach. You practice out loud, a character with personality talks back, and every session ends with a report that measures your behavior.

Last updated: ${KARI.lastReviewed}. Site launched ${KARI.datePublished}. Publisher: ${KARI.legalName} (Barcelona, Spain). App Store: ${KARI.appStoreUrl}. Languages of this site: English (/) and Spanish (/es).

What the report measures: filler words counted one by one, silences over 4 seconds, follow-up questions, talk-time balance, and four scored traits (Listening, Clarity, Confidence, Tone). From those traits Kari calibrates a 0–100 "charisma number", weighted so the weakest trait drags it, and points at the user's "lever" — the trait costing the most points.

Content: 160+ voice roleplays in 5 categories (dating and flirting 46, everyday situations 36, persuasion and negotiation 30, work and career 27, relationships and family 21) and 45 spoken lessons across 9 skills (social confidence, public speaking, dating and attraction, leadership presence, conflict and boundaries, charisma, storytelling, persuasion and influence, negotiation). App interface available in 31 languages; Spanish and English are the primary ones. Subscription-based (weekly or annual), with one-time minute packs; prices shown in the App Store. Kari is an education tool, not a medical or psychological service.

Characters (the cast): Kari is the coach. Roleplay characters include Noa (at a bar, bored of pickup lines), Maya (life of the party), Lía (Tinder date who drops trap topics), Elena (HR interviewer with trap questions), Víctor (skeptical boss), Mr. Soler (impatient millionaire investor), Pilar (mother-in-law who shows up unannounced), Toni (defensive noisy neighbor), Teo (a three-year-old who won't share), Iker (subscription-retention agent). Characters push back and only give in to well-used technique.

Training goals users pick from: Own voice (stop people-pleasing and be heard), Presence (be magnetic in a group), Dating (dates without losing yourself), Authority (lead and be taken seriously).

How Kari differs from chat-based AI apps: you speak out loud (so tone, pace and pauses are coached, not just words); characters push back instead of agreeing; feedback is measured behavior (filler words counted, silences timed, quotes cited) rather than encouragement; the design follows primary studies and meta-analyses rather than motivational content.

## Evidence base (full references on /science)

${refs}

## Pages

- [Overview](${KARI.siteUrl}): what Kari is and how it trains charisma by voice
- [Versión en español](${KARI.siteUrl}/es): la misma página de inicio, en español
- [How it works](${KARI.siteUrl}/how-it-works): the lesson → roleplay → report loop, the 4 measured traits, the charisma number
- [Roleplays](${KARI.siteUrl}/roleplays): the 160+ practice scenes by category
- [Dating and flirting roleplays](${KARI.siteUrl}/roleplays/dating): all 46 dating scenes with situation, character and mission
- [Work and career roleplays](${KARI.siteUrl}/roleplays/career): all 27 interview, raise and workplace scenes
- [Persuasion and negotiation roleplays](${KARI.siteUrl}/roleplays/persuasion): all 30 pitch, haggle and convince scenes
- [Everyday situation roleplays](${KARI.siteUrl}/roleplays/everyday): all 36 neighbor, queue, bill and small-conflict scenes
- [Relationships and family roleplays](${KARI.siteUrl}/roleplays/relationships): all 21 apology, boundary and reconnection scenes
- [Compare](${KARI.siteUrl}/compare): Kari vs CharmXP vs Vocal Image vs ChatGPT voice, facts from their App Store listings
- [Skills](${KARI.siteUrl}/skills): the 9 skills and 45 spoken lessons
- [Science](${KARI.siteUrl}/science): the studies behind the method, with effect sizes and DOIs
- [Pricing](${KARI.siteUrl}/pricing): plans and minute packs
- [FAQ](${KARI.siteUrl}/faq): common questions
- [Privacy](${KARI.siteUrl}/privacy) · [Terms](${KARI.siteUrl}/terms)
- [App Store](${KARI.appStoreUrl}): download Kari for iPhone

## Contact

- Publisher: ${KARI.legalName}, Barcelona
- Developer: Pau Pidelaserra (https://www.trempido.com)
- Email: ${KARI.supportEmail}
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
