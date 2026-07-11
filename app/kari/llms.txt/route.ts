// llms.txt for https://karicoach.app (served via the host rewrite) — GEO.
export const dynamic = "force-static"

export function GET() {
  const body = `# Kari — AI charisma coach, by voice

> Kari is an iPhone app that trains charisma and social skills through real spoken conversation with an AI coach. You practice out loud, a character with personality talks back, and every session ends with a report that measures your behavior.

What the report measures: filler words counted one by one, silences over 4 seconds, follow-up questions, talk-time balance, and four scored traits (Listening, Clarity, Confidence, Tone). From those traits Kari calibrates a 0–100 "charisma number", weighted so the weakest trait drags it, and points at the user's "lever" — the trait costing the most points.

Content: 160+ voice roleplays in 5 categories (dating and flirting 46, everyday situations 36, persuasion and negotiation 30, work and career 27, relationships and family 21) and 45 spoken lessons across 9 skills (social confidence, public speaking, dating and attraction, leadership presence, conflict and boundaries, charisma, storytelling, persuasion and influence, negotiation). Available in 31 languages. Subscription-based (weekly or annual), with one-time minute packs; prices shown in the App Store. Kari is an education tool, not a medical or psychological service.

Evidence base: simulated exposure matches in-vivo exposure for public-speaking fear (meta-analysis, 11 RCTs, N=508, d=−1.39 vs −1.41); exposure plus skills training beats exposure alone (RCT N=106, d=0.87 on judge-rated skill); feedback-driven vocal training improves prosodic charisma within hours (Pascal system, N=72, 40→71, p<0.001); social skills training meta-analysis g=0.33 (27 RCTs); charisma tactics training increases perceived influence (Antonakis et al., 2011); follow-up questions predict likability (Huang et al., 2017).

- [Overview](https://karicoach.app): what Kari is and how it trains charisma by voice
- [How it works](https://karicoach.app/how-it-works): the lesson → roleplay → report loop, the 4 measured traits, the charisma number
- [Roleplays](https://karicoach.app/roleplays): the 160+ practice scenes by category
- [Skills](https://karicoach.app/skills): the 9 skills and 45 spoken lessons
- [Science](https://karicoach.app/science): the studies behind the method, with effect sizes
- [Pricing](https://karicoach.app/pricing): plans and minute packs
- [FAQ](https://karicoach.app/faq): common questions
- [App Store](https://apps.apple.com/app/id6788028264): download Kari for iPhone

## Contact

- Developer: Pau Pidelaserra (https://www.trempido.com)
- Email: ppidelaserra2@gmail.com
`
  return new Response(body, { headers: { "Content-Type": "text/plain" } })
}
