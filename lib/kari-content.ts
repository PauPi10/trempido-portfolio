// Real product content for the Kari marketing pages, extracted from the app
// (ContentStore, RoleplayCatalog, FUNDAMENTOS.md) and translated to English.
// Single source of truth for /kari/* pages.

export const KARI = {
  name: "Kari",
  siteUrl: "https://karicoach.app",
  appStoreUrl: "https://apps.apple.com/app/id6788028264",
  appStoreId: "6788028264",
  tagline: "Your social gym, by voice",
  oneLiner:
    "Kari is an iPhone app that trains your charisma and social skills through real spoken conversation with an AI coach. You practice out loud, a character talks back, and you get a report on exactly what to improve.",
  supportEmail: "ppidelaserra2@gmail.com",
  languages: 31,
} as const;

export type Skill = {
  id: string;
  name: string;
  tagline: string;
  subskills: string[];
};

// The 9 skills × 5 sub-skills = 45 spoken lessons.
export const SKILLS: Skill[] = [
  {
    id: "confidence",
    name: "Social confidence",
    tagline: "Talk to anyone without going blank.",
    subskills: [
      "Mastering small talk",
      "Breaking the ice",
      "Quieting overthinking",
      "Authentic self-expression",
      "Speaking up in groups",
    ],
  },
  {
    id: "speaking",
    name: "Public speaking",
    tagline: "Be listened to the moment you open your mouth.",
    subskills: [
      "Openings and hooks",
      "Stage presence",
      "Vocal pace and emphasis",
      "Captivating an audience",
      "Handling nerves",
    ],
  },
  {
    id: "dating",
    name: "Dating and attraction",
    tagline: "Build chemistry without scripted lines.",
    subskills: [
      "Cold approach",
      "Creating chemistry",
      "Flirting and teasing",
      "Reading signals",
      "Emotional security",
    ],
  },
  {
    id: "leadership",
    name: "Leadership presence",
    tagline: "Make sure your idea has your name on it.",
    subskills: [
      "Executive clarity",
      "Vision and inspiration",
      "Speaking with authority",
      "Influencing up and down",
      "Handling tension",
    ],
  },
  {
    id: "boundaries",
    name: "Conflict and boundaries",
    tagline: "A clean no, without a mile of excuses.",
    subskills: [
      "Saying no",
      "De-escalating tension",
      "Holding your position",
      "Giving feedback",
      "Calling things out with respect",
    ],
  },
  {
    id: "charisma",
    name: "Charisma",
    tagline: "The presence people notice when you walk in.",
    subskills: [
      "Storytelling",
      "Presence and vocal tone",
      "First impressions",
      "Emotional expressiveness",
      "Commanding attention",
    ],
  },
  {
    id: "storytelling",
    name: "Storytelling",
    tagline: "Tell anything and leave them wanting more.",
    subskills: [
      "Narrative arcs",
      "Tension and stakes",
      "Personal anecdotes",
      "Emotional contrast",
      "Suspense and reveals",
    ],
  },
  {
    id: "persuasion",
    name: "Persuasion and influence",
    tagline: "From “sounds good” to “done”.",
    subskills: [
      "Framing and reframing",
      "Handling objections",
      "Speaking with conviction",
      "Building credibility",
      "Creating commitment",
    ],
  },
  {
    id: "negotiation",
    name: "Negotiation",
    tagline: "Ask for more without breaking the relationship.",
    subskills: [
      "Anchoring and framing",
      "Power without aggression",
      "Creating win-wins",
      "Tactical silence",
      "Reading the other side",
    ],
  },
];

export type RoleplayCategory = {
  id: string;
  name: string;
  count: number;
  blurb: string;
  scenes: { icon: string; title: string; character: string; mission: string }[];
};

// The 5 groups of the 160+ roleplay catalog, with real scenes from the app.
export const ROLEPLAY_CATEGORIES: RoleplayCategory[] = [
  {
    id: "dating",
    name: "Dating and flirting",
    count: 46,
    blurb:
      "Approach someone cold, build chemistry, escape the friendzone or take a no with grace. Characters who get bored the second you sound scripted.",
    scenes: [
      {
        icon: "Martini",
        title: "Cold approach at a bar",
        character: "Noa is out with her friends and bored of pickup lines.",
        mission: "Start a natural conversation and earn three minutes of real talk.",
      },
      {
        icon: "Coffee",
        title: "Nail the first Tinder date",
        character: "Lía is sizing you up and drops trap topics: the ex, what you're looking for.",
        mission: "Turn the interrogation into a conversation with chemistry.",
      },
      {
        icon: "HeartCrack",
        title: "Get out of the friendzone",
        character: "Carla is your lifelong friend and doesn't see it coming.",
        mission: "Express your interest without pressure, protecting the friendship.",
      },
      {
        icon: "CloudRain",
        title: "Take a no with elegance",
        character: "She's flattered but not interested, and watching how you react.",
        mission: "Accept it gracefully and leave a better impression than you came with.",
      },
    ],
  },
  {
    id: "career",
    name: "Work and career",
    count: 27,
    blurb:
      "Job interviews, promotions, salary negotiation, hard feedback, saying no to your boss. Interlocutors with trap questions and tight budgets.",
    scenes: [
      {
        icon: "Briefcase",
        title: "Ace the job interview",
        character: "Elena from HR is friendly but hides trap questions.",
        mission: "Present your strengths with confidence, without sounding arrogant.",
      },
      {
        icon: "TrendingUp",
        title: "Make your case for a promotion",
        character: "Víctor, your boss, hides behind a limited budget.",
        mission: "Defend your value with data and ask for the promotion outright.",
      },
      {
        icon: "OctagonX",
        title: "Say no to your boss",
        character: "Óscar overloads you by appealing to your commitment.",
        mission: "Decline the extra work with a viable, professional alternative.",
      },
      {
        icon: "Coins",
        title: "Negotiate your compensation",
        character: "Marta plants herself on the initial offer and waits you out.",
        mission: "Raise the number without ultimatums and without folding first.",
      },
    ],
  },
  {
    id: "persuasion",
    name: "Persuasion and negotiation",
    count: 30,
    blurb:
      "Pitch an investor, negotiate rent, get your money back or cancel a subscription without being talked out of it by retention.",
    scenes: [
      {
        icon: "Gem",
        title: "Win over a millionaire",
        character: "Mr. Soler has heard a thousand pitches; he gets bored and interrupts.",
        mission: "Hook him and earn five more minutes of the meeting.",
      },
      {
        icon: "Scissors",
        title: "Cancel a subscription without being upsold",
        character: "Iker from retention uses aggressive offers and emotional blackmail.",
        mission: "Stay firm until he confirms your cancellation is processed.",
      },
      {
        icon: "ToyBrick",
        title: "Convince a 3-year-old to share",
        character: "Teo shuts down completely: “it's mine” — pure toddler logic.",
        mission: "Get him to share without yelling, punishments or absurd bribes.",
      },
      {
        icon: "House",
        title: "Negotiate the rent down",
        character: "The landlord insists the market is “on fire”.",
        mission: "Anchor low with reasons and close a real discount.",
      },
    ],
  },
  {
    id: "everyday",
    name: "Everyday situations",
    count: 36,
    blurb:
      "The noisy neighbor, the line-cutter, the unfair group bill, the taxi driver taking the scenic route. Stand your ground without making a scene.",
    scenes: [
      {
        icon: "Volume2",
        title: "Address the neighbor's noise",
        character: "Toni gets defensive: in his house he does what he wants.",
        mission: "Get the music down now, without starting a neighborhood war.",
      },
      {
        icon: "Receipt",
        title: "Push back on the group bill",
        character: "Hugo pressures everyone to split evenly and calls you cheap.",
        mission: "Pay only your share, naturally and firmly.",
      },
      {
        icon: "Footprints",
        title: "Defend your place in line",
        character: "He cuts in and plays dumb.",
        mission: "Reclaim your spot firmly, without a scene.",
      },
      {
        icon: "CarTaxiFront",
        title: "The scenic-route taxi",
        character: "The meter keeps running while he swears it's a shortcut.",
        mission: "Get back on the direct route without an argument.",
      },
    ],
  },
  {
    id: "relationships",
    name: "Relationships and family",
    count: 21,
    blurb:
      "Apologize for real, set boundaries with your mother-in-law, tell a friend what bothers you, reconnect with someone you lost. Delicate conversations, done well.",
    scenes: [
      {
        icon: "HandHeart",
        title: "Apologize for real",
        character: "Ot is hurt but pretends nothing happened.",
        mission: "Apologize without excuses and propose how to repair it.",
      },
      {
        icon: "Soup",
        title: "Boundaries with the mother-in-law",
        character: "Pilar shows up unannounced, “just to help”.",
        mission: "Ask her to call first without hurting her feelings.",
      },
      {
        icon: "PhoneCall",
        title: "Reconnect with a lost friend",
        character: "Roc is distant after three years of silence.",
        mission: "Break the ice and get a plan for next week.",
      },
      {
        icon: "Timer",
        title: "Confront the chronic lateness",
        character: "He always cancels last minute and jokes it away.",
        mission: "Say it straight, keep the friendship, get a real change.",
      },
    ],
  },
];

export const TOTAL_ROLEPLAYS = ROLEPLAY_CATEGORIES.reduce((n, c) => n + c.count, 0);

// The training loop: lesson → roleplay → report.
export const HOW_STEPS = [
  {
    n: "01",
    kicker: "Learn the technique",
    title: "A spoken lesson, not a video",
    body: "Kari teaches you one concrete technique and you practice it out loud with her on the spot. One attempt, one correction quoting your literal words. When you nail it, the difficulty goes up.",
  },
  {
    n: "02",
    kicker: "Put it to the test",
    title: "Real scenes with a character who talks back",
    body: "You pick a roleplay, you speak, and the character reacts the way that person would: bored by canned lines, pushing back, giving in only to real technique. It's genuine exposure practice, without the social cost.",
  },
  {
    n: "03",
    kicker: "See what to fix",
    title: "A report that measures behavior, not calm",
    body: "When you finish, Kari shows you where you won and where it slipped, with evidence of what she heard: filler words, silences, sentence endings, follow-up questions. And the one thing to change next time.",
  },
];

// Science page — distilled from FUNDAMENTOS.md (75 claims from primary studies and meta-analyses).
export const SCIENCE = [
  {
    stat: "d = −1.39 vs −1.41",
    claim: "Talking to an AI by voice matches real-life exposure.",
    detail:
      "A meta-analysis of 11 controlled studies (N=508) found simulated exposure for public-speaking fear practically identical to in-vivo exposure (d=−1.39 vs d=−1.41). Practicing out loud with a voice AI is a legitimate form of exposure.",
    source: "Meta-analysis · 11 RCTs · N=508",
  },
  {
    stat: "d = 0.87",
    claim: "Technique plus practice works — exposure alone doesn't build skill.",
    detail:
      "In a randomized trial (N=106, social anxiety), exposure plus skills training beat exposure alone on judge-rated skill (d=0.87), avoidance (d=0.61) and depression (d=0.79). That's why Kari pairs lessons with roleplays: neither leg is optional.",
    source: "RCT · social anxiety · N=106",
  },
  {
    stat: "40 → 71",
    claim: "Vocal charisma is trainable in hours, not years.",
    detail:
      "The “Pascal” system (N=72) produced a large improvement in prosodic charisma after 4 hours of feedback-driven practice (score 40 → 71, p<0.001). Acoustic signal alone predicts 66–75% of perceived charisma.",
    source: "Pascal system · N=72 · p<0.001",
  },
  {
    stat: "g = 0.33",
    claim: "The model → rehearse → feedback loop is the proven core.",
    detail:
      "A meta-analysis of 27 randomized trials of social skills training found reliable effects (g=0.33) even in hard clinical populations, maintained at follow-up. That loop — see it, try it, get corrected — is exactly Kari's lesson engine.",
    source: "Meta-analysis · 27 RCTs",
  },
  {
    stat: "2011",
    claim: "Charisma can be taught — and trained people are seen as more influential.",
    detail:
      "Managers trained in concrete verbal tactics (stories, metaphors, contrasts, three-part lists) were rated significantly more influential by their own teams. These are the only charisma tactics with demonstrated causal effect — and the ones Kari drills.",
    source: "Antonakis et al. · Univ. of Lausanne · 2011",
  },
  {
    stat: "Huang 2017",
    claim: "Follow-up questions predict being liked.",
    detail:
      "Asking questions that dig into what the other person just said predicts likability and even second dates (Huang et al., 2017). Kari counts your follow-up questions, long silences and energy variation as hard evidence in the report.",
    source: "Huang et al. · JPSP · 2017",
  },
];

// Design principles from the research (for the science page).
export const SCIENCE_PRINCIPLES = [
  {
    title: "Behavior, never “calmness”",
    body: "End-of-session calm doesn't predict long-term results. Kari's report measures what you did — techniques used, questions asked, filler words — never whether you seemed relaxed.",
  },
  {
    title: "Expectation violation over repetition",
    body: "Exposure teaches when reality disconfirms your catastrophic prediction. Kari captures what you fear will happen and contrasts it with what actually happened.",
  },
  {
    title: "Drop the safety crutches",
    body: "Minimal answers, constant apologies, deflecting humor — safety behaviors keep fear alive. Kari's characters make crutches visibly costly, and lessons assign “this time without X”.",
  },
  {
    title: "Variety beats grinding one scene",
    body: "Varied stimuli and contexts retain more than repeating the same scene until comfortable. Kari always nudges you to switch scenarios and characters.",
  },
];

export const FEATURES = [
  {
    icon: "mic",
    title: "You train by speaking, out loud",
    body: "No theory to read, no buttons to tap. Kari genuinely hears you through a live voice API and answers in the moment, like a real conversation.",
  },
  {
    icon: "flame",
    title: "Characters who don't make it easy",
    body: "Every roleplay has a personality and a mission. They don't cave at the first try: they punish crutches and only give in to technique used well.",
  },
  {
    icon: "report",
    title: "A report with evidence, not flattery",
    body: "Filler words counted, silences measured, sentence endings, talk time. Kari tells you the truth with data, not a pat on the back.",
  },
  {
    icon: "gauge",
    title: "Your charisma number",
    body: "As you train, Kari calibrates a score from real evidence in your sessions — and points at your lever: the one thing holding you back most.",
  },
  {
    icon: "grid",
    title: "160+ scenes and 45 lessons",
    body: "From a job interview to escaping the friendzone. Varied scenarios and characters, because variety retains more than repeating one scene until it feels comfortable.",
  },
  {
    icon: "lock",
    title: "Unfiltered, and private",
    body: "Kari counts your filler words one by one — the thing nobody told you in years. You practice alone, whenever you want, with zero social cost for failing.",
  },
];

// Outcome vignettes (product truths, not fabricated reviews).
export const OUTCOMES = [
  {
    title: "“I thought I was shy.”",
    body: "Most people aren't shy — they have zero trained scenes. After a few weeks of spoken practice, meetings stop being ambushes: you've already had that conversation.",
  },
  {
    title: "The filler-word mirror",
    body: "Kari counts them one by one, session after session. First you're shocked. Then you hear them coming — and stop them mid-air.",
  },
  {
    title: "No more disappearing in groups",
    body: "Knowing what to say was never the problem; entering the conversation was. It's a trainable move, and there's a lesson — and a report metric — for it.",
  },
];

export const FAQS = [
  {
    q: "What exactly is Kari?",
    a: "Kari is an iPhone app for training social skills and charisma by talking out loud with an AI coach. It combines spoken lessons (one concrete technique you practice on the spot) with roleplays (real scenes where a character talks back), and every session ends with a report that tells you exactly what to improve.",
  },
  {
    q: "Does practicing with an AI actually work?",
    a: "The evidence says yes. A meta-analysis of 11 studies found simulated exposure practically identical to real exposure for public-speaking fear (d=−1.39 vs −1.41), and feedback-driven vocal training improved perceived charisma within hours (Pascal system, N=72, p<0.001). Kari's whole design is built on primary studies and meta-analyses — see the Science page.",
  },
  {
    q: "Do I have to speak out loud?",
    a: "Yes — that's the point. Kari really listens: she hears your filler words, silences, pace and sentence endings. That feedback about how you sound is only possible speaking, not typing. You practice alone and in private, so there's no embarrassment in failing.",
  },
  {
    q: "What can I practice?",
    a: "Over 160 roleplays (dating, work, negotiation, neighbor conflicts, family) and 45 lessons across 9 skills: social confidence, public speaking, dating and attraction, leadership presence, conflict and boundaries, charisma, storytelling, persuasion, and negotiation.",
  },
  {
    q: "Is Kari like a therapy app?",
    a: "No. Kari is an education and training tool for communication skills — a social gym. It is not a medical or psychological service and doesn't replace a mental-health professional.",
  },
  {
    q: "What languages does Kari support?",
    a: "Kari is available in 31 languages. You can train in whichever feels most natural.",
  },
  {
    q: "How much does Kari cost?",
    a: "Kari is subscription-based: a weekly plan and an annual plan, and you can top up conversation time with one-time minute packs. Exact pricing is shown in the App Store before you buy, and you can cancel anytime from your Apple account settings.",
  },
  {
    q: "Does Kari record or judge me?",
    a: "Kari analyzes your voice in real time to give you feedback, but audio is not stored and no human ever hears it. The goal is measuring behavior to help you improve — never judging you. Kari never scores you on “staying calm”. See the Privacy Policy for details.",
  },
];

// Comparison table for GEO (AI answers love structured contrast).
export const COMPARISON = [
  { dimension: "How you practice", kari: "Speaking out loud, live voice conversation", others: "Reading theory, watching videos, typing to a chatbot" },
  { dimension: "Who answers", kari: "Characters with personality who push back", others: "Generic assistant that agrees with you" },
  { dimension: "Feedback", kari: "Evidence: filler words counted, silences measured, literal quotes", others: "Vague encouragement (“great job!”)" },
  { dimension: "What's measured", kari: "Behavior — techniques used, follow-up questions", others: "Streaks, minutes watched, quiz scores" },
  { dimension: "Basis", kari: "Primary studies and meta-analyses (exposure + skills training)", others: "Motivational content" },
];

export const NAV_LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/roleplays", label: "Roleplays" },
  { href: "/skills", label: "Skills" },
  { href: "/science", label: "Science" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
] as const;

// The 4 traits Kari measures in every session (from Models.swift).
export const TRAITS = [
  { name: "Listening", blurb: "Follow-up questions, callbacks, building on what they said." },
  { name: "Clarity", blurb: "One idea per turn, sentences that end instead of trailing off." },
  { name: "Confidence", blurb: "Holding your point without permission words or over-explaining." },
  { name: "Tone", blurb: "Energy variation, emphasis, pace — the voice that fills the room." },
] as const;

// The 5 conversational archetypes (profile radar in the app).
export const ARCHETYPES = [
  { name: "The Observer", blurb: "You read the room before stepping in." },
  { name: "The Improviser", blurb: "You think on your feet." },
  { name: "The Storyteller", blurb: "You don't report — you narrate." },
  { name: "The Spark", blurb: "Pure energy; it's contagious." },
  { name: "The Magnetic", blurb: "You get to the point and they stay." },
] as const;

// Real demo report from the app (SessionReport demo), translated.
export const REPORT_DEMO = {
  verdict: "You walked in nervous and walked out with her recommendation. That's craft.",
  mission: "Mission accomplished",
  metrics: [
    { name: "Listening", pct: 71, note: "Two follow-up questions and a callback: you actually listened." },
    { name: "Tone", pct: 66, note: "The theater anecdote changed her face." },
    { name: "Clarity", pct: 63, note: "One idea per turn, though the second one ran long." },
    { name: "Confidence", pct: 58, note: "One permission-seeking “I guess”, but you held your point." },
  ],
  evidence: [
    { label: "Filler words", value: "7 counted" },
    { label: "Silences over 4s", value: "2 measured" },
    { label: "Follow-up questions", value: "2 asked" },
    { label: "Talk-time balance", value: "48 / 52" },
  ],
} as const;

// Hero promise (from the app's onboarding opening).
export const PROMISE = [
  "There's a version of you the world hasn't seen yet.",
  "The one who says what they think.",
  "The one who speaks and gets listened to.",
  "The one who makes people laugh without trying.",
] as const;
