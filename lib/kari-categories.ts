// Editorial layer for the 5 roleplay category pages (/roleplays/<slug>).
// Each intro is a self-contained 130–170 word block: the citable unit for
// AI search. Facts (counts, character names, what the report measures) come
// from the app; keep them in sync with lib/kari-roleplays.ts.

import type { RoleplaySlug } from "./kari-roleplays"

export type CategoryMeta = {
  slug: RoleplaySlug
  name: string
  short: string
  title: string
  description: string
  h1: string
  question: string
  intro: string
  img: string
  faq: { q: string; a: string }[]
}

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "dating",
    name: "Dating and flirting",
    short: "Dating",
    title: "46 Dating Roleplays to Practice Out Loud: First Dates, Cold Approaches, Rejection",
    description:
      "Practice dating conversations out loud with an AI character who talks back: cold approach at a bar, first Tinder date, escaping the friendzone, taking a no with grace. 46 voice scenes with a mission and a report on what to improve.",
    h1: "Dating conversations, rehearsed out loud",
    question: "How do you practice dating conversations before the real date?",
    intro:
      "You practice them out loud, with someone who reacts. Kari has 46 dating and flirting roleplays, each a live voice scene with a character, a situation and a mission: approach Noa cold at a bar while she is bored of pickup lines, turn Lía's first-date interrogation into chemistry, tell Carla you want more than friendship, or take Julia's no with dignity. The characters push back the way real people do. They get bored by canned lines, they change the subject, and they only warm up when the technique earns it. After each scene Kari's report counts what actually happened: filler words one by one, silences over four seconds, follow-up questions asked, and the balance of talk time, then scores Listening, Clarity, Confidence and Tone. Research on follow-up questions (Huang et al., 2017) shows they predict second dates, so the report treats them as a hard metric, not a vibe.",
    img: "/images/kari/cat/cat-citas.png",
    faq: [
      {
        q: "Can practicing a first date with an AI actually help?",
        a: "Yes, for the parts that are trainable. A meta-analysis of 11 controlled studies (N=508) found simulated exposure works as well as real exposure for the fear of speaking, and follow-up questions measurably predict being liked. Kari's dating scenes train exactly those behaviors, out loud, and count them in the report.",
      },
      {
        q: "Are the dating characters realistic or do they just agree with you?",
        a: "They push back. Noa is bored of canned lines, Lía drops trap topics like your ex, Julia holds her no. Each character has a threshold, and the scene only opens up when your technique earns it. That is what makes it exposure rather than a chat.",
      },
      {
        q: "Do I have to speak out loud for dating practice?",
        a: "Yes. Tone, pace, pauses and sentence endings are most of what a date reads from you, and Kari can only measure them if you speak. You practice alone, in private, so there is no social cost to a bad attempt.",
      },
    ],
  },
  {
    slug: "career",
    name: "Work and career",
    short: "Work",
    title: "27 Job Interview and Workplace Roleplays: Practice Interviews, Raises and Saying No Out Loud",
    description:
      "Rehearse job interviews, salary negotiations, promotion talks, difficult feedback and saying no to your boss, out loud with an AI character who pushes back. 27 voice scenes with a mission and a behavior report.",
    h1: "Interviews, raises and hard conversations at work",
    question: "How do you prepare for a job interview or a salary talk out loud?",
    intro:
      "By rehearsing the actual conversation with someone who asks the hard questions. Kari's 27 work and career roleplays are live voice scenes: Elena from HR smiles while hiding trap questions in the interview, Víctor the boss hides behind a limited budget when you ask for a promotion, Marta from recruiting insists the offer is the top of the band, and Bosch on the steering committee gives you five minutes before he loses interest. You speak, they react, and you have a mission to complete. The report then shows what an interviewer would have noticed: filler words counted, silences over four seconds, whether you ended sentences downward or trailed off, whether you asked anything back. The evidence for the method is direct. Exposure plus skills training beats exposure alone on judge-rated skill (randomized trial, N=106, d=0.87), which is why every scene here pairs with a spoken lesson on the technique it demands.",
    img: "/images/kari/cat/cat-profesional.png",
    faq: [
      {
        q: "Can I practice a job interview with AI by voice?",
        a: "Yes. Kari's interview scenes put you in front of an HR character who asks real questions, including the trap ones, and reacts to how you answer. Afterwards the report counts your filler words, measures your pauses and tells you the one thing to change before the real interview.",
      },
      {
        q: "Does Kari help with asking for a raise?",
        a: "There are scenes for negotiating compensation, defending a promotion and pushing back on a lowball offer. The characters use the real objections (budget, band, timing), so you rehearse holding your number without permission words or over-explaining.",
      },
      {
        q: "Is this for managers too?",
        a: "Yes. Scenes cover giving difficult feedback, saying no to your boss, presenting to leadership under time pressure and handling tension in a meeting. The Leadership presence skill has five spoken lessons that pair with them.",
      },
    ],
  },
  {
    slug: "persuasion",
    name: "Persuasion and negotiation",
    short: "Persuasion",
    title: "30 Persuasion and Negotiation Roleplays: Pitch, Haggle, Cancel and Convince Out Loud",
    description:
      "Practice persuading and negotiating out loud: pitch a bored investor, negotiate rent, cancel a subscription against a retention agent, convince a three-year-old to share. 30 voice scenes with characters who only give in to technique.",
    h1: "Persuasion you can rehearse, with people who resist",
    question: "How do you get better at persuading and negotiating?",
    intro:
      "You practice against resistance, out loud, and you get told exactly which move worked. Kari's 30 persuasion and negotiation roleplays are built around characters whose job is to say no: Mr. Soler the investor has heard a thousand pitches and interrupts, Iker from retention deploys aggressive offers and guilt when you try to cancel, Mr. Vidal the landlord reminds you there is a queue for the flat, and Teo, aged three, meets every argument with “it's mine”. Each scene has a mission and ends only when your technique earns it. The report tells you what you actually used: framing and reframing, anchoring, a contrast, a three-part list, a tactical silence, or a concession you did not need to make. These are the verbal tactics with demonstrated causal effect on perceived influence (Antonakis et al., 2011), and the persuasion and negotiation skills each have five spoken lessons that drill them one at a time.",
    img: "/images/kari/cat/cat-persuasion.png",
    faq: [
      {
        q: "What negotiation techniques does Kari train?",
        a: "Anchoring and framing, power without aggression, creating win-win options, tactical silence and reading the other side. Each is a spoken lesson in the Negotiation skill, and the roleplays put them under pressure with characters who hold their position.",
      },
      {
        q: "Can I practice a sales pitch or investor pitch by voice?",
        a: "Yes. The investor scene gives you a bored, interrupting listener and a mission to earn five more minutes. The report shows where you lost him: hedging, a monotone stretch, a sentence that trailed off, or a question you never asked.",
      },
      {
        q: "Why is there a scene with a three-year-old?",
        a: "Because persuasion without authority or logic is the purest form. Teo does not care about your arguments, so the scene forces you to work with framing, choice and tone. People find it the hardest one in the category.",
      },
    ],
  },
  {
    slug: "everyday",
    name: "Everyday situations",
    short: "Everyday",
    title: "36 Everyday Conflict Roleplays: Neighbors, Queue-Jumpers, the Group Bill and Other Small Battles",
    description:
      "Practice standing your ground in everyday situations out loud: the noisy neighbor, the person who cuts in line, the unfair group bill, the taxi taking the scenic route. 36 voice scenes with characters who get defensive and a report on what you did.",
    h1: "The small battles you replay in your head",
    question: "How do you speak up in everyday situations without making a scene?",
    intro:
      "You rehearse the exact moment out loud until the words come without the adrenaline. Kari's 36 everyday roleplays are the situations people replay afterwards wishing they had said something: Toni the neighbor turns the music up and says it is his house, Hugo pushes to split the bill evenly and calls you cheap, the guy in the queue plays dumb about cutting in, Paco the taxi driver blames roadworks for the detour, and someone stands too close and ignores your signals. Every character gets defensive in a realistic way, so the scene trains the two things that matter: saying it clearly, and holding it without escalating. The report counts the crutches the research links to fear staying alive, the extra apologies, the deflecting joke, the sentence that ended upward like a question, and shows you the one to drop next time. The Conflict and boundaries skill has five spoken lessons that pair with these scenes.",
    img: "/images/kari/cat/cat-situaciones.png",
    faq: [
      {
        q: "What kind of everyday situations can I practice?",
        a: "Noise complaints, queue-jumpers, splitting a bill fairly, a taxi taking the long way, personal space, returning a faulty product, a friend who is always late. 36 scenes, each with a character who reacts and a clear mission.",
      },
      {
        q: "I freeze in these moments. Does practicing help with that?",
        a: "Freezing is usually an untrained scene, not a personality trait. Exposure research shows the fear drops when the predicted catastrophe fails to happen, so Kari asks what you fear before the scene and contrasts it with what actually happened after.",
      },
      {
        q: "Does Kari teach me to be aggressive?",
        a: "No. The scenes reward a clear, calm position and penalize escalation. The report measures behaviors like sentence endings, silences and follow-up questions, never how loud or forceful you were.",
      },
    ],
  },
  {
    slug: "relationships",
    name: "Relationships and family",
    short: "Relationships",
    title: "21 Relationship and Family Roleplays: Apologize, Set Boundaries, Reconnect, Say the Hard Thing",
    description:
      "Practice delicate conversations with partners, friends and family out loud: a real apology, boundaries with the mother-in-law, reconnecting with a lost friend, telling someone what bothers you. 21 voice scenes with a report on what you did.",
    h1: "The delicate conversations, done well",
    question: "How do you have a hard conversation with someone you love?",
    intro:
      "You practice it first, out loud, with a character who reacts the way they would. Kari's 21 relationship and family roleplays cover the conversations people postpone for years: apologizing to Ot, who is hurt but pretends nothing is wrong; asking Pilar the mother-in-law to call before showing up, without starting a family schism; calling Roc after three years of silence and getting him to agree to a coffee; telling a friend what has been bothering you. These scenes reward listening as much as speaking. The report counts your follow-up questions and callbacks, the behaviors research links to being liked and to repair, and flags the ones that undo an apology: the excuse attached to “sorry”, the over-explanation, the silence that ran too long. Kari is a training tool, not therapy, and it says so. What it trains is the craft of the conversation, so that when it happens for real, you have already had it once.",
    img: "/images/kari/cat/cat-relaciones.png",
    faq: [
      {
        q: "Can I practice an apology with Kari?",
        a: "Yes. The apology scene gives you a hurt character who avoids conflict, and a mission to own the mistake without excuses and propose a repair. The report catches the excuse attached to the sorry, which is the most common way apologies fail.",
      },
      {
        q: "Is Kari a couples or family therapy app?",
        a: "No. Kari is an education and training tool for communication skills. It is not a medical or psychological service and does not replace a professional. It trains the conversation, not the relationship.",
      },
      {
        q: "What does the report measure in these scenes?",
        a: "Follow-up questions and callbacks (the Listening trait), sentence endings and pace (Tone), whether you held your point without over-explaining (Confidence) and one idea per turn (Clarity), plus filler words and silences over four seconds.",
      },
    ],
  },
]

export const categoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug)
