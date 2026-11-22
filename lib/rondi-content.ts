// Rondi marketing pages: languages, URLs, countries, exam facts and every UI
// string, in the five languages of the app.
//
// Facts are checked against the iOS app (19-nov-2026):
// • exam formats  → content/<cc>/exam.json (questions, minutes, pass mark)
// • content sizes → content/**/questions_*.json, lessons_*.json, signs_*.json,
//                   nl/hazard_nl.json
// If the app changes, this changes. Nothing here may promise a pass, quote
// reviews, ratings or user numbers, or print prices.
// Plans (22-nov-2026): Rondi Pro = "Until you pass" (one-time,
// non-consumable) or monthly / weekly auto-renewing subscriptions.

import { RONDI_NAME, RONDI_ORIGIN, RONDI_BASE_PATH, RONDI_UPDATED, rondiAppStoreUrl } from "./rondi-config"

export type RLang = "en" | "es" | "de" | "it" | "nl"
export const RLANGS: RLang[] = ["en", "es", "de", "it", "nl"]
/** Languages that live under /rondi/<lang>/… (English is the default, unprefixed). */
export const RPREFIXED: Exclude<RLang, "en">[] = ["es", "de", "it", "nl"]

export const RONDI = {
  name: RONDI_NAME,
  origin: RONDI_ORIGIN,
  supportEmail: "ppidelaserra2@gmail.com",
  eula: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  manageSubs: "https://apps.apple.com/account/subscriptions",
  refunds: "https://reportaproblem.apple.com",
  appStoreUrl: rondiAppStoreUrl,
  updated: RONDI_UPDATED,
  minIos: "17.0",
  company: {
    name: "TREMPIDO SL",
    legalName: "TREMPIDO S.L.",
    taxId: "B75830257",
    address: "Carrer Nil Fabra 16, Escalera A, Ático 2ª, 08012 Barcelona, España",
    street: "Carrer Nil Fabra 16, Escalera A, Ático 2ª",
    postalCode: "08012",
    city: "Barcelona",
    country: "ES",
  },
} as const

// ── URLs ─────────────────────────────────────────────────────────────────────

export type RPage = "home" | "privacy" | "terms" | "support" | "legal"
export const RDOCS: Exclude<RPage, "home">[] = ["privacy", "terms", "support", "legal"]

/** Localised slug of every inner page (same slugs the old /volante section used). */
export const RSLUGS: Record<RLang, Record<Exclude<RPage, "home">, string>> = {
  en: { privacy: "privacy", terms: "terms", support: "support", legal: "legal" },
  es: { privacy: "privacidad", terms: "terminos", support: "soporte", legal: "aviso-legal" },
  de: { privacy: "datenschutz", terms: "agb", support: "hilfe", legal: "impressum" },
  it: { privacy: "privacy", terms: "termini", support: "assistenza", legal: "note-legali" },
  nl: { privacy: "privacy", terms: "voorwaarden", support: "hulp", legal: "juridisch" },
}

export function rpath(lang: RLang, page: RPage = "home"): string {
  const base = lang === "en" ? RONDI_BASE_PATH : `${RONDI_BASE_PATH}/${lang}`
  return page === "home" ? base : `${base}/${RSLUGS[lang][page]}`
}

export const rabs = (path: string) => `${RONDI.origin}${path}`

export function pageFromSlug(lang: RLang, slug: string): Exclude<RPage, "home"> | undefined {
  return RDOCS.find((p) => RSLUGS[lang][p] === slug)
}

/** hreflang map for the same page in the five languages (+ x-default = English). */
export function ralternates(page: RPage) {
  const languages: Record<string, string> = {}
  for (const l of RLANGS) languages[l] = rabs(rpath(l, page))
  languages["x-default"] = rabs(rpath("en", page))
  return languages
}

export const LANG_NAME: Record<RLang, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
  nl: "Nederlands",
}

type L5 = Record<RLang, string>

/** Date of the last update, written out in each language. */
export const UPDATED_LABEL: L5 = {
  en: "22 November 2026",
  es: "22 de noviembre de 2026",
  de: "22. November 2026",
  it: "22 novembre 2026",
  nl: "22 november 2026",
}

// ── countries ────────────────────────────────────────────────────────────────

export type RCountry = "es" | "de" | "uk" | "it" | "nl"
export const RCOUNTRIES: RCountry[] = ["es", "de", "uk", "it", "nl"]

/** Which country's screenshots (and FAQ) a language shows. */
export const HOME_COUNTRY: Record<RLang, RCountry> = { en: "uk", es: "es", de: "de", it: "it", nl: "nl" }

export const FLAG: Record<RCountry, string[]> = {
  es: ["#AA151B", "#F1BF00", "#F1BF00", "#AA151B"],
  de: ["#000000", "#DD0000", "#FFCE00"],
  uk: ["#012169", "#FFFFFF", "#C8102E", "#FFFFFF", "#012169"],
  it: ["#009246", "#FFFFFF", "#CE2B37"],
  nl: ["#AE1C28", "#FFFFFF", "#21468B"],
}
/** Italy's flag stripes are vertical. */
export const FLAG_VERTICAL: Record<RCountry, boolean> = { es: false, de: false, uk: false, it: true, nl: false }

export type ScreenKey = "home" | "question" | "fix" | "lesson" | "result"
/** Real app screenshots (720×1566 webp). None of them shows the old name. */
export const screen = (c: RCountry, key: ScreenKey) => `/rondi/screens/${c}-${key}.webp`
export const SCREEN_W = 720
export const SCREEN_H = 1566

export const COUNTRY_NAME: Record<RCountry, L5> = {
  es: { en: "Spain", es: "España", de: "Spanien", it: "Spagna", nl: "Spanje" },
  de: { en: "Germany", es: "Alemania", de: "Deutschland", it: "Germania", nl: "Duitsland" },
  uk: { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", it: "Regno Unito", nl: "Verenigd Koninkrijk" },
  it: { en: "Italy", es: "Italia", de: "Italien", it: "Italia", nl: "Italië" },
  nl: { en: "Netherlands", es: "Países Bajos", de: "Niederlande", it: "Paesi Bassi", nl: "Nederland" },
}

/** Exam as the learner knows it (always in the country's own language) + the
 *  official source the format was checked against. */
export const EXAM: Record<RCountry, { code: string; authority: string; exam: string; hreflang: string; source: string; sourceUrl: string }> = {
  es: {
    code: "ES", authority: "DGT", exam: "Examen teórico del permiso B", hreflang: "es",
    source: "BOE · Reglamento General de Conductores (RD 818/2009)",
    sourceUrl: "https://www.boe.es/buscar/act.php?id=BOE-A-2009-9481",
  },
  de: {
    code: "DE", authority: "TÜV | DEKRA", exam: "Theorieprüfung Klasse B", hreflang: "de",
    source: "FeV Anlage 7 (gesetze-im-internet.de)",
    sourceUrl: "https://www.gesetze-im-internet.de/fev_2010/anlage_7.html",
  },
  uk: {
    code: "UK", authority: "DVSA", exam: "Car theory test", hreflang: "en",
    source: "GOV.UK · Theory test: cars",
    sourceUrl: "https://www.gov.uk/theory-test/multiple-choice-questions",
  },
  it: {
    code: "IT", authority: "Motorizzazione", exam: "Esame di teoria patente B", hreflang: "it",
    source: "Il Portale dell'Automobilista",
    sourceUrl: "https://www.ilportaledellautomobilista.it/web/portale-automobilista/foglio-rosa-e-prove-new",
  },
  nl: {
    code: "NL", authority: "CBR", exam: "Theorie-examen auto (B)", hreflang: "nl",
    source: "CBR · Hoe gaat het theorie-examen auto?",
    sourceUrl: "https://www.cbr.nl/nl/rijbewijs-halen/auto/theorie-examen-auto/hoe-gaat-het-theorie-examen-auto",
  },
}

/** What Rondi ships for each country (counted in the app's content folder). */
export const CONTENT: Record<RCountry, { questions: number; lessons: number; signs?: number; hazards?: number; trueFalse?: boolean }> = {
  es: { questions: 789, lessons: 32, signs: 211 },
  de: { questions: 752, lessons: 37, signs: 267 },
  uk: { questions: 743, lessons: 36, signs: 229 },
  it: { questions: 1536, lessons: 43, trueFalse: true },
  nl: { questions: 750, lessons: 36, signs: 202, hazards: 150 },
}

export const fmtNum = (n: number, lang: RLang) =>
  n < 1000 ? String(n) : `${Math.floor(n / 1000)}${lang === "en" ? "," : "."}${String(n % 1000).padStart(3, "0")}`

const W = {
  questions: { en: "questions", es: "preguntas", de: "Fragen", it: "domande", nl: "vragen" },
  statements: { en: "true/false statements", es: "afirmaciones vero/falso", de: "Wahr/Falsch-Aussagen", it: "affermazioni vero/falso", nl: "waar/niet waar-stellingen" },
  lessons: { en: "lessons", es: "clases", de: "Lektionen", it: "lezioni", nl: "lessen" },
  signs: { en: "road signs", es: "señales", de: "Verkehrszeichen", it: "segnali", nl: "verkeersborden" },
  hazards: {
    en: "drawn hazard-perception situations",
    es: "situaciones dibujadas de gevaarherkenning",
    de: "gezeichnete Gevaarherkenning-Situationen",
    it: "situazioni disegnate di gevaarherkenning",
    nl: "getekende situaties gevaarherkenning",
  },
} satisfies Record<string, L5>

/** "789 preguntas · 32 clases · 211 señales" */
export function contentLine(c: RCountry, lang: RLang): string[] {
  const k = CONTENT[c]
  const out = [
    `${fmtNum(k.questions, lang)} ${k.trueFalse ? W.statements[lang] : W.questions[lang]}`,
    `${k.lessons} ${W.lessons[lang]}`,
  ]
  if (k.signs) out.push(`${k.signs} ${W.signs[lang]}`)
  if (k.hazards) out.push(`${k.hazards} ${W.hazards[lang]}`)
  return out
}

/** Official exam format, written in each page language. */
export const FORMAT: Record<RCountry, L5> = {
  es: {
    en: "30 questions with 3 options · 30 minutes",
    es: "30 preguntas de 3 opciones · 30 minutos",
    de: "30 Fragen mit 3 Antworten · 30 Minuten",
    it: "30 domande a 3 risposte · 30 minuti",
    nl: "30 vragen met 3 antwoorden · 30 minuten",
  },
  de: {
    en: "30 questions scored in error points (2 to 5 per question)",
    es: "30 preguntas por puntos de error (de 2 a 5 por pregunta)",
    de: "30 Fragen mit Fehlerpunkten (2 bis 5 je Frage)",
    it: "30 domande a punti di errore (da 2 a 5 per domanda)",
    nl: "30 vragen met foutpunten (2 tot 5 per vraag)",
  },
  uk: {
    en: "50 multiple-choice questions · 57 minutes",
    es: "50 preguntas tipo test · 57 minutos",
    de: "50 Multiple-Choice-Fragen · 57 Minuten",
    it: "50 domande a scelta multipla · 57 minuti",
    nl: "50 meerkeuzevragen · 57 minuten",
  },
  it: {
    en: "30 true/false statements · 20 minutes",
    es: "30 afirmaciones vero/falso · 20 minutos",
    de: "30 Wahr/Falsch-Aussagen · 20 Minuten",
    it: "30 affermazioni vero/falso · 20 minuti",
    nl: "30 waar/niet waar-stellingen · 20 minuten",
  },
  nl: {
    en: "50 questions, hazard perception included · 30 minutes",
    es: "50 preguntas, con gevaarherkenning incluida · 30 minutos",
    de: "50 Fragen inklusive Gevaarherkenning · 30 Minuten",
    it: "50 domande, gevaarherkenning inclusa · 30 minuti",
    nl: "50 vragen, inclusief gevaarherkenning · 30 minuten",
  },
}

/** Pass mark, written in each page language. */
export const PASS: Record<RCountry, L5> = {
  es: {
    en: "3 mistakes at most (27 of 30)",
    es: "Máximo 3 fallos (27 de 30)",
    de: "Höchstens 3 Fehler (27 von 30)",
    it: "Massimo 3 errori (27 su 30)",
    nl: "Maximaal 3 fouten (27 van 30)",
  },
  de: {
    en: "10 error points at most; two wrong 5-point questions fail",
    es: "Máximo 10 puntos de error; dos fallos de 5 puntos suspenden",
    de: "Höchstens 10 Fehlerpunkte; zwei falsche 5-Punkte-Fragen = nicht bestanden",
    it: "Massimo 10 punti di errore; due errori da 5 punti bocciano",
    nl: "Maximaal 10 foutpunten; twee fouten van 5 punten = gezakt",
  },
  uk: {
    en: "43 of 50",
    es: "43 de 50",
    de: "43 von 50",
    it: "43 su 50",
    nl: "43 van 50",
  },
  it: {
    en: "3 mistakes at most (27 of 30)",
    es: "Máximo 3 errores (27 de 30)",
    de: "Höchstens 3 Fehler (27 von 30)",
    it: "Massimo 3 errori (27 su 30)",
    nl: "Maximaal 3 fouten (27 van 30)",
  },
  nl: {
    en: "44 of 50",
    es: "44 de 50",
    de: "44 von 50",
    it: "44 su 50",
    nl: "44 van 50",
  },
}

// ── UI strings ───────────────────────────────────────────────────────────────

const S = {
  getApp: { en: "Download on the App Store", es: "Descargar en el App Store", de: "Im App Store laden", it: "Scarica sull'App Store", nl: "Download in de App Store" },
  soon: { en: "Coming soon to the App Store", es: "Muy pronto en el App Store", de: "Bald im App Store", it: "Presto sull'App Store", nl: "Binnenkort in de App Store" },
  soonShort: { en: "Coming soon", es: "Muy pronto", de: "Bald verfügbar", it: "In arrivo", nl: "Binnenkort" },
  navWhat: { en: "What it is", es: "Qué es", de: "Was es ist", it: "Cos'è", nl: "Wat het is" },
  navExams: { en: "Exams", es: "Exámenes", de: "Prüfungen", it: "Esami", nl: "Examens" },
  navHow: { en: "How it works", es: "Cómo funciona", de: "So funktioniert's", it: "Come funziona", nl: "Zo werkt het" },
  navPro: { en: "Free & Pro", es: "Gratis y Pro", de: "Gratis & Pro", it: "Gratis e Pro", nl: "Gratis & Pro" },
  navFaq: { en: "FAQ", es: "Preguntas", de: "FAQ", it: "Domande", nl: "Vragen" },
  language: { en: "Language", es: "Idioma", de: "Sprache", it: "Lingua", nl: "Taal" },
  skip: { en: "Skip to content", es: "Saltar al contenido", de: "Zum Inhalt springen", it: "Vai al contenuto", nl: "Naar de inhoud" },
  mainNav: { en: "Main", es: "Principal", de: "Hauptnavigation", it: "Principale", nl: "Hoofdnavigatie" },
  breadcrumb: { en: "Breadcrumb", es: "Migas de pan", de: "Brotkrumen", it: "Percorso", nl: "Kruimelpad" },

  privacy: { en: "Privacy", es: "Privacidad", de: "Datenschutz", it: "Privacy", nl: "Privacy" },
  terms: { en: "Terms", es: "Términos", de: "AGB", it: "Termini", nl: "Voorwaarden" },
  support: { en: "Support", es: "Soporte", de: "Hilfe", it: "Assistenza", nl: "Hulp" },
  legal: { en: "Legal notice", es: "Aviso legal", de: "Impressum", it: "Note legali", nl: "Juridische info" },
  legalHead: { en: "Legal", es: "Legal", de: "Rechtliches", it: "Note legali", nl: "Juridisch" },
  eula: { en: "Apple EULA", es: "EULA de Apple", de: "Apple-EULA", it: "EULA di Apple", nl: "EULA van Apple" },
  langHead: { en: "Rondi in other languages", es: "Rondi en otros idiomas", de: "Rondi in anderen Sprachen", it: "Rondi in altre lingue", nl: "Rondi in andere talen" },
  footTagline: {
    en: "Driving theory test practice for five countries: short lessons, explained answers and mock tests in the real format.",
    es: "El teórico del carnet de conducir de cinco países: clases cortas, test con corrección explicada y simulacros con el formato real.",
    de: "Führerschein-Theorie für fünf Länder: kurze Lektionen, erklärte Antworten und Prüfungssimulationen im echten Format.",
    it: "La teoria della patente di cinque paesi: lezioni brevi, correzioni spiegate e simulazioni nel formato reale.",
    nl: "Theorie oefenen voor vijf landen: korte lessen, uitleg bij elk antwoord en oefenexamens in het echte format.",
  },
  updatedPrefix: { en: "Last updated:", es: "Última actualización:", de: "Zuletzt aktualisiert:", it: "Ultimo aggiornamento:", nl: "Laatst bijgewerkt:" },
  madeBy: { en: "An app by", es: "Una app de", de: "Eine App der", it: "Un'app di", nl: "Een app van" },
  notAffiliated: {
    en: "Rondi is an independent study app by TREMPIDO S.L. It is not affiliated with, endorsed by or connected to the DGT, TÜV, DEKRA, the DVSA, the Italian Ministry of Infrastructure and Transport (Motorizzazione) or the CBR. The questions are written by Rondi on the same topics as the official exams; they are not the official questions.",
    es: "Rondi es una app de estudio independiente de TREMPIDO S.L. No está afiliada, avalada ni vinculada a la DGT, TÜV, DEKRA, la DVSA, el Ministerio de Infraestructuras y Transportes de Italia (Motorizzazione) ni el CBR. Las preguntas las escribe Rondi sobre los mismos temas que los exámenes oficiales; no son las preguntas oficiales.",
    de: "Rondi ist eine unabhängige Lern-App der TREMPIDO S.L. Sie steht in keiner Verbindung zu DGT, TÜV, DEKRA, DVSA, dem italienischen Verkehrsministerium (Motorizzazione) oder dem CBR und wird von diesen nicht unterstützt. Die Fragen schreibt Rondi selbst zu denselben Themen wie die amtlichen Prüfungen; es sind nicht die amtlichen Fragen.",
    it: "Rondi è un'app di studio indipendente di TREMPIDO S.L. Non è affiliata, approvata né collegata a DGT, TÜV, DEKRA, DVSA, al Ministero delle Infrastrutture e dei Trasporti (Motorizzazione) o al CBR. Le domande sono scritte da Rondi sugli stessi argomenti degli esami ufficiali; non sono le domande ufficiali.",
    nl: "Rondi is een onafhankelijke studie-app van TREMPIDO S.L. De app is niet verbonden aan of goedgekeurd door de DGT, TÜV, DEKRA, de DVSA, het Italiaanse ministerie van Infrastructuur en Vervoer (Motorizzazione) of het CBR. De vragen zijn door Rondi zelf geschreven over dezelfde onderwerpen als de officiële examens; het zijn geen officiële examenvragen.",
  },
} satisfies Record<string, L5>

export const t = (lang: RLang, key: keyof typeof S) => S[key][lang]

// ── landing copy ─────────────────────────────────────────────────────────────

export type Landing = {
  /** <title>, ≤ 60 characters. */
  title: string
  /** meta description, ≤ 155 characters. */
  description: string
  ogAlt: string
  eyebrow: string
  /** h1 = h1 + " " + h1Accent (the accent part is painted coral). */
  h1: string
  h1Accent: string
  lead: string
  note: string
  heroArtAlt: string

  whatEyebrow: string
  whatTitle: string
  /** The citable answer block: 2–3 self-contained sentences. */
  what: string[]
  stats: { n: string; label: string }[]

  examsEyebrow: string
  examsTitle: string
  examsLead: string
  th: { country: string; exam: string; format: string; pass: string; rondi: string }
  examsCaption: string
  examsNote: string
  sourcesLabel: string

  howEyebrow: string
  howTitle: string
  howLead: string
  /** Three features shown with a real screenshot (lesson, correction, mock result). */
  shots: { title: string; body: string; alt: string }[]
  /** Four more features, text only (signs game, mistakes, daily plan, AI coach). */
  more: { title: string; body: string }[]

  proEyebrow: string
  proTitle: string
  proLead: string
  freeTitle: string
  freeList: string[]
  proName: string
  proList: string[]
  proFine: string

  honestEyebrow: string
  honestTitle: string
  honest: { title: string; body: string }[]

  faqEyebrow: string
  faqTitle: string
  faq: { q: string; a: string }[]

  ctaTitle: string
  ctaBody: string
  homeAlt: string
}

export const LANDING: Record<RLang, Landing> = {
  // ───────────────────────────────── ENGLISH ─────────────────────────────────
  en: {
    title: "Rondi: driving theory test practice app for iPhone",
    description: "Theory test practice on iPhone: short lessons, explained answers and mock tests in the real format. UK, Spain, Germany, Italy and the Netherlands.",
    ogAlt: "Rondi, driving theory test practice for five countries",
    eyebrow: "Driving theory test · iPhone app",
    h1: "Driving theory test practice,",
    h1Accent: "without going round in circles.",
    lead: "Rondi turns the car theory test into ten minutes a day: short lessons with real photos, questions corrected and explained on the spot, and mock tests in the exact format of your country's exam.",
    note: "iPhone app · no sign-up · your progress stays on your phone",
    heroArtAlt: "A roundabout seen from above with five exits, one for each country Rondi covers, and a coral car driving round it.",

    whatEyebrow: "What is Rondi?",
    whatTitle: "One app, five theory tests, each with its own content.",
    what: [
      "Rondi is an iPhone app for preparing the car driving theory test in five countries: the United Kingdom, Spain, Germany, Italy and the Netherlands.",
      "Each country has its own lessons, questions and road signs, written by Rondi and checked against that country's rules, such as the Highway Code in Great Britain.",
      "It is an independent study tool by TREMPIDO S.L.: the questions are Rondi's own, not the official ones, and it does not promise a pass.",
    ],
    stats: [
      { n: "5", label: "countries, each with its own syllabus" },
      { n: "4,570", label: "practice questions in total" },
      { n: "184", label: "short lessons of 4 to 8 minutes" },
      { n: "10 min", label: "daily plan, with a streak" },
    ],

    examsEyebrow: "The facts",
    examsTitle: "The car theory test in each country",
    examsLead: "Number of questions, time and pass mark of the official exam, next to what Rondi includes to prepare it. Rondi's mock tests copy these formats.",
    th: { country: "Country", exam: "Exam", format: "Official format", pass: "To pass", rondi: "In Rondi" },
    examsCaption: "Format of the car theory test (category B) in the United Kingdom, Spain, Germany, Italy and the Netherlands, and Rondi's content for each one.",
    examsNote: "In Great Britain the theory test also has a separate hazard perception part with video clips. Rondi covers the multiple-choice part only and does not include hazard perception videos.",
    sourcesLabel: "Official sources for the exam formats:",

    howEyebrow: "How it works",
    howTitle: "A little every day, and you always know why",
    howLead: "No three-hour cramming sessions. You study in short stretches, and every answer comes with its explanation.",
    shots: [
      { title: "Short lessons with real photos", body: "Each topic takes 4 to 8 minutes: roundabouts, priority, speed limits, signs. Explained in plain language with photos of real roads.", alt: "Rondi lesson about roundabouts, with a picture of a roundabout seen from above" },
      { title: "Explained on the spot", body: "Answer a question and you see straight away whether it was right, which option was correct and the rule behind it.", alt: "Rondi question corrected at once, showing the right answer and the explanation" },
      { title: "Mock tests in the real format", body: "Same number of questions, same time and same pass mark as the exam in your country, so the result means something.", alt: "Result screen of a Rondi mock theory test, with the score and the pass mark" },
    ],
    more: [
      { title: "Road signs game", body: "Quick rounds to recognise signs at a glance, plus your country's sign catalogue to look them up." },
      { title: "Your mistakes come back", body: "What you get wrong goes to a revision list and returns until you get it right." },
      { title: "A 10-minute daily plan", body: "Rondi picks today's session from your weakest topic and keeps your streak going." },
      { title: "An AI coach that knows the syllabus", body: "Ask your question and it answers from the lessons of your country. It needs an internet connection." },
    ],

    proEyebrow: "Free & Rondi Pro",
    proTitle: "Start free. Go Pro if it helps you.",
    proLead: "You can try Rondi properly without paying. Rondi Pro unlocks everything else: pay once until you pass, or subscribe monthly or weekly.",
    freeTitle: "Free",
    freeList: ["The first block of lessons", "3 full mock tests", "Practice by topic", "2 rounds of the road signs game (10 signs each)", "The road sign catalogue"],
    proName: "Rondi Pro",
    proList: ["Every lesson of your country", "All the mock tests", "The whole signs game and your mistakes list", "“Until you pass” (one-time purchase), monthly or weekly"],
    proFine: "“Until you pass” is a one-time purchase: you pay once and keep Rondi Pro on your Apple Account, with no renewal. The monthly and weekly plans are auto-renewing subscriptions that you can cancel any time in your Apple Account settings. Everything is billed through your Apple Account, and the price in your currency is shown in the app before you confirm.",

    honestEyebrow: "Straight talk",
    honestTitle: "What Rondi is not",
    honest: [
      { title: "It is not official", body: "Rondi is an independent app. It is not affiliated with the DVSA, the DGT, TÜV, DEKRA, the Italian Motorizzazione or the CBR." },
      { title: "These are not the official questions", body: "Every question is written by Rondi on the syllabus of each country. In Germany it is not the official TÜV | DEKRA question catalogue." },
      { title: "No hazard perception videos", body: "For the UK theory test, Rondi prepares the multiple-choice part. The hazard perception clips are not included." },
      { title: "No guaranteed pass", body: "Nobody can honestly promise that. Rondi gives you lessons, practice and mock tests; passing depends on you." },
    ],

    faqEyebrow: "FAQ",
    faqTitle: "Questions people ask about Rondi",
    faq: [
      { q: "Is Rondi official? Are these the real theory test questions?", a: "No. Rondi is an independent study app by TREMPIDO S.L. and is not affiliated with the DVSA or any other authority. The questions are written by Rondi on the same topics and in the same format as the official exam; they are not the official questions." },
      { q: "Which countries does Rondi cover?", a: "Five: the United Kingdom (car theory test), Spain (DGT, permiso B), Germany (Theorieprüfung Klasse B), Italy (quiz patente B) and the Netherlands (CBR theorie-examen auto). Each one has its own lessons, questions and signs; they are not translations of each other." },
      { q: "Is Rondi enough for the DVSA theory test?", a: "It prepares the multiple-choice part: 743 questions, 36 lessons and 229 road signs based on the Highway Code, with mock tests of 50 questions and a pass mark of 43. It does not include the hazard perception video clips, which you need to practise separately, and it does not replace the official DVSA material." },
      { q: "How long does it take to prepare the theory test with Rondi?", a: "It depends on where you start and how often you study, so Rondi does not promise a date. The app is built around a 10-minute daily plan, lessons take 4 to 8 minutes each, and the mock tests tell you how close you are to the pass mark." },
      { q: "Is Rondi free?", a: "Part of it is: the first block of lessons, 3 mock tests in total, practice by topic, 2 rounds of the signs game (10 signs each) and the sign catalogue. The rest needs Rondi Pro: “Until you pass”, a one-time purchase with no renewal, or a monthly or weekly subscription. The price is shown in the app before you buy." },
      { q: "Does Rondi work offline?", a: "The lessons, questions and road signs are included inside the app. The AI coach needs an internet connection to answer." },
      { q: "Do I need an account?", a: "No. There is no sign-up, and your progress is saved only on your iPhone." },
      { q: "Where can I download Rondi?", a: "Rondi is an iPhone app (iOS 17 or later) and is coming soon to the App Store. It is not published yet, and there is no Android version." },
    ],

    ctaTitle: "Ten minutes today.",
    ctaBody: "Your first lesson takes less time than a coffee.",
    homeAlt: "Rondi home screen with today's 10-minute session, your readiness and your weekly streak",
  },

  // ───────────────────────────────── ESPAÑOL ─────────────────────────────────
  es: {
    title: "Rondi: test DGT y teórico del carnet de conducir en iPhone",
    description: "Prepara el examen teórico del permiso B en el iPhone: clases cortas, test DGT con corrección explicada y simulacros con el formato real. Cinco países.",
    ogAlt: "Rondi, el teórico del carnet de conducir en cinco países",
    eyebrow: "Teórico del carnet de conducir · app para iPhone",
    h1: "Prepara el teórico del carnet de conducir",
    h1Accent: "sin dar más vueltas.",
    lead: "Rondi convierte el examen teórico del permiso B en diez minutos al día: clases cortas con fotos reales, test corregidos y explicados al momento y simulacros con el formato exacto del examen de tu país.",
    note: "App para iPhone · sin registro · tu progreso se queda en tu móvil",
    heroArtAlt: "Una rotonda vista desde arriba con cinco salidas, una por cada país que cubre Rondi, y un coche coral dando la vuelta.",

    whatEyebrow: "¿Qué es Rondi?",
    whatTitle: "Una app, cinco exámenes teóricos, cada uno con su contenido.",
    what: [
      "Rondi es una app para iPhone que prepara el examen teórico del carnet de coche en cinco países: España, Alemania, Reino Unido, Italia y Países Bajos.",
      "Cada país tiene sus propias clases, preguntas y señales, escritas por Rondi y revisadas con la norma de ese país; en España, el temario del permiso B de la DGT.",
      "Es una herramienta de estudio independiente de TREMPIDO S.L.: las preguntas son de redacción propia, no las oficiales, y no promete el aprobado.",
    ],
    stats: [
      { n: "5", label: "países, cada uno con su temario" },
      { n: "4.570", label: "preguntas de práctica en total" },
      { n: "184", label: "clases cortas de 4 a 8 minutos" },
      { n: "10 min", label: "de plan diario, con racha" },
    ],

    examsEyebrow: "Los datos",
    examsTitle: "El examen teórico en cada país",
    examsLead: "Número de preguntas, tiempo y nota de corte del examen oficial, junto a lo que incluye Rondi para prepararlo. Los simulacros de Rondi copian estos formatos.",
    th: { country: "País", exam: "Examen", format: "Formato oficial", pass: "Para aprobar", rondi: "En Rondi" },
    examsCaption: "Formato del examen teórico del carnet de coche (permiso B) en España, Alemania, Reino Unido, Italia y Países Bajos, y contenido de Rondi para cada uno.",
    examsNote: "En Reino Unido el examen tiene además una parte aparte de percepción de riesgos (hazard perception) con vídeos. Rondi prepara solo la parte de preguntas y no incluye esos vídeos.",
    sourcesLabel: "Fuentes oficiales de los formatos de examen:",

    howEyebrow: "Cómo funciona",
    howTitle: "Un poco cada día, y siempre sabes por qué",
    howLead: "Nada de atracones de tres horas. Estudias en ratos cortos y cada respuesta llega con su explicación.",
    shots: [
      { title: "Clases cortas con fotos reales", body: "Cada tema son de 4 a 8 minutos: rotondas, prioridad, velocidad, señales. Explicado en claro y con fotos de carreteras de verdad.", alt: "Clase de Rondi sobre rotondas, con una foto aérea de una glorieta real" },
      { title: "Test con corrección al momento", body: "Respondes y ves enseguida si has acertado, cuál era la buena y el artículo de la norma que lo explica.", alt: "Pregunta de test corregida al momento en Rondi, con la respuesta correcta y la explicación" },
      { title: "Simulacros con el formato real", body: "30 preguntas, 30 minutos y un máximo de 3 fallos, como en el examen de la DGT. O el formato del país que elijas.", alt: "Resultado de un simulacro del examen teórico en Rondi: apto con 29 de 30 aciertos" },
    ],
    more: [
      { title: "Juego de señales", body: "Partidas rápidas para reconocer las señales de un vistazo y el catálogo de tu país para consultarlas." },
      { title: "Tus fallos vuelven", body: "Lo que fallas va a una lista de repaso y vuelve hasta que lo aciertas." },
      { title: "Plan diario de 10 minutos", body: "Rondi elige la sesión de hoy a partir de tu tema más flojo y lleva la cuenta de tu racha." },
      { title: "Un coach con IA que se sabe el temario", body: "Le escribes tu duda y responde con las clases de tu país. Necesita conexión a internet." },
    ],

    proEyebrow: "Gratis y Rondi Pro",
    proTitle: "Empieza gratis. Pasa a Pro si te sirve.",
    proLead: "Puedes probar Rondi de verdad sin pagar. Rondi Pro desbloquea todo lo demás: pagas una vez hasta que apruebes o te suscribes por meses o por semanas.",
    freeTitle: "Gratis",
    freeList: ["El primer bloque de clases", "3 simulacros completos", "Práctica por temas", "2 partidas del juego de señales (10 señales cada una)", "El catálogo de señales"],
    proName: "Rondi Pro",
    proList: ["Todas las clases de tu país", "Todos los simulacros", "El juego de señales entero y el repaso de fallos", "«Hasta que apruebes» (pago único), plan mensual o semanal"],
    proFine: "«Hasta que apruebes» es un pago único: pagas una vez y Rondi Pro se queda en tu cuenta de Apple, sin renovaciones. Los planes mensual y semanal son suscripciones con renovación automática que puedes cancelar cuando quieras desde los ajustes de tu cuenta de Apple. Todo se cobra a tu cuenta de Apple y el precio en tu moneda se ve en la app antes de confirmar.",

    honestEyebrow: "Las cosas claras",
    honestTitle: "Lo que Rondi no es",
    honest: [
      { title: "No es oficial", body: "Rondi es una app independiente. No está afiliada a la DGT, TÜV, DEKRA, la DVSA, la Motorizzazione italiana ni el CBR." },
      { title: "No son las preguntas oficiales", body: "Todas las preguntas las escribe Rondi sobre el temario de cada país. En Alemania no es el catálogo oficial de TÜV | DEKRA." },
      { title: "Sin vídeos de hazard perception", body: "Del examen de Reino Unido, Rondi prepara la parte de preguntas. Los vídeos de percepción de riesgos no están incluidos." },
      { title: "Sin aprobado garantizado", body: "Nadie puede prometer eso con honestidad. Rondi te da clases, práctica y simulacros; aprobar depende de ti." },
    ],

    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Lo que la gente pregunta sobre Rondi",
    faq: [
      { q: "¿Rondi es oficial? ¿Son las preguntas reales del examen?", a: "No. Rondi es una app de estudio independiente de TREMPIDO S.L. y no está afiliada a la DGT ni a ninguna otra autoridad. Las preguntas las escribe Rondi sobre los mismos temas y con el mismo formato que el examen oficial; no son las preguntas oficiales." },
      { q: "¿Qué países cubre Rondi?", a: "Cinco: España (DGT, permiso B), Alemania (Theorieprüfung Klasse B), Reino Unido (driving theory test), Italia (quiz patente B) y Países Bajos (CBR, theorie-examen auto). Cada uno tiene sus propias clases, preguntas y señales; no son traducciones unos de otros." },
      { q: "¿Sirve Rondi para el examen teórico de la DGT?", a: "Está hecha para prepararlo: 789 preguntas tipo test DGT, 32 clases y 211 señales sobre el temario del permiso B, y simulacros de 30 preguntas con 3 opciones, 30 minutos y un máximo de 3 fallos. Las preguntas son de redacción propia, no las oficiales, y Rondi no sustituye al material de la DGT ni a tu autoescuela." },
      { q: "¿Cuánto se tarda en preparar el teórico con Rondi?", a: "Depende de dónde partas y de cuánto estudies, así que Rondi no promete una fecha. La app gira alrededor de un plan de 10 minutos al día, cada clase dura de 4 a 8 minutos y los simulacros te dicen lo cerca que estás de la nota de corte." },
      { q: "¿Rondi es gratis?", a: "Una parte sí: el primer bloque de clases, 3 simulacros en total, la práctica por temas, 2 partidas del juego de señales (de 10 señales cada una) y el catálogo de señales. El resto necesita Rondi Pro: «Hasta que apruebes», un pago único sin renovaciones, o una suscripción mensual o semanal. El precio se ve en la app antes de comprar." },
      { q: "¿Rondi funciona sin conexión?", a: "Las clases, las preguntas y las señales van incluidas dentro de la app. El coach con IA sí necesita conexión a internet para responder." },
      { q: "¿Necesito crear una cuenta?", a: "No. No hay registro y tu progreso se guarda solo en tu iPhone." },
      { q: "¿Dónde se descarga Rondi?", a: "Rondi es una app para iPhone (iOS 17 o posterior) y llegará muy pronto al App Store. Todavía no está publicada y no hay versión para Android." },
    ],

    ctaTitle: "Diez minutos hoy.",
    ctaBody: "Tu primera clase dura menos que un café.",
    homeAlt: "Pantalla de inicio de Rondi con la sesión de hoy de 10 minutos, tu preparación y tu racha semanal",
  },

  // ───────────────────────────────── DEUTSCH ─────────────────────────────────
  de: {
    title: "Rondi: Führerschein Theorie lernen – Theorieprüfung Klasse B",
    description: "Führerschein-Theorie am iPhone lernen: kurze Lektionen, erklärte Antworten und Prüfungssimulationen im echten Format der Theorieprüfung Klasse B.",
    ogAlt: "Rondi, Führerschein-Theorie für fünf Länder",
    eyebrow: "Führerschein-Theorie · iPhone-App",
    h1: "Führerschein-Theorie lernen,",
    h1Accent: "ohne dich im Kreis zu drehen.",
    lead: "Rondi macht aus der Theorieprüfung Klasse B zehn Minuten am Tag: kurze Lektionen mit echten Fotos, Fragen mit sofortiger Erklärung und Prüfungssimulationen im genauen Format der Prüfung deines Landes.",
    note: "iPhone-App · ohne Anmeldung · dein Fortschritt bleibt auf deinem Handy",
    heroArtAlt: "Ein Kreisverkehr von oben mit fünf Ausfahrten, eine für jedes Land in Rondi, und einem korallroten Auto, das im Kreis fährt.",

    whatEyebrow: "Was ist Rondi?",
    whatTitle: "Eine App, fünf Theorieprüfungen, jede mit eigenem Inhalt.",
    what: [
      "Rondi ist eine iPhone-App zur Vorbereitung auf die theoretische Führerscheinprüfung für den Pkw in fünf Ländern: Deutschland, Spanien, Vereinigtes Königreich, Italien und Niederlande.",
      "Jedes Land hat eigene Lektionen, Fragen und Verkehrszeichen, von Rondi geschrieben und anhand der Vorschriften des Landes geprüft; in Deutschland StVO und Fahrerlaubnis-Verordnung für die Klasse B.",
      "Rondi ist ein unabhängiges Lernwerkzeug der TREMPIDO S.L.: Die Fragen sind selbst verfasst, es ist nicht der amtliche Fragenkatalog, und ein Bestehen wird nicht versprochen.",
    ],
    stats: [
      { n: "5", label: "Länder, jedes mit eigenem Stoff" },
      { n: "4.570", label: "Übungsfragen insgesamt" },
      { n: "184", label: "kurze Lektionen von 4 bis 8 Minuten" },
      { n: "10 Min.", label: "Tagesplan, mit Serie" },
    ],

    examsEyebrow: "Die Fakten",
    examsTitle: "Die Theorieprüfung in jedem Land",
    examsLead: "Fragenanzahl, Zeit und Bestehensgrenze der amtlichen Prüfung, daneben das, was Rondi zur Vorbereitung enthält. Die Simulationen in Rondi übernehmen diese Formate.",
    th: { country: "Land", exam: "Prüfung", format: "Amtliches Format", pass: "Bestanden mit", rondi: "In Rondi" },
    examsCaption: "Format der theoretischen Pkw-Führerscheinprüfung (Klasse B) in Deutschland, Spanien, dem Vereinigten Königreich, Italien und den Niederlanden und Rondis Inhalt je Land.",
    examsNote: "Im Vereinigten Königreich gehört zur Prüfung zusätzlich ein eigener Teil zur Gefahrenwahrnehmung (hazard perception) mit Videos. Rondi bereitet nur den Fragenteil vor und enthält diese Videos nicht.",
    sourcesLabel: "Amtliche Quellen zu den Prüfungsformaten:",

    howEyebrow: "So funktioniert's",
    howTitle: "Jeden Tag ein bisschen, und du weißt immer warum",
    howLead: "Keine Drei-Stunden-Lernmarathons. Du lernst in kurzen Einheiten, und jede Antwort kommt mit Erklärung.",
    shots: [
      { title: "Kurze Lektionen mit echten Fotos", body: "Jedes Thema dauert 4 bis 8 Minuten: Kreisverkehr, Vorfahrt, Geschwindigkeit, Verkehrszeichen. Klar erklärt, mit Fotos echter Straßen.", alt: "Rondi-Lektion zum Kreisverkehr mit einem Foto einer echten Straße" },
      { title: "Sofort erklärt", body: "Du antwortest und siehst gleich, ob es stimmt, welche Antwort richtig war und welche Vorschrift dahintersteht.", alt: "Sofort korrigierte Frage in Rondi mit richtiger Antwort und Erklärung" },
      { title: "Simulationen im echten Format", body: "30 Fragen mit Fehlerpunkten, höchstens 10 Fehlerpunkte, wie in der Theorieprüfung Klasse B. Oder das Format des Landes, das du wählst.", alt: "Ergebnis einer Prüfungssimulation in Rondi: bestanden mit 5 Fehlerpunkten" },
    ],
    more: [
      { title: "Verkehrszeichen-Spiel", body: "Schnelle Runden, um Zeichen auf einen Blick zu erkennen, und der Zeichenkatalog deines Landes zum Nachschlagen." },
      { title: "Deine Fehler kommen wieder", body: "Was du falsch hast, landet in deiner Wiederholung und kommt wieder, bis es sitzt." },
      { title: "Tagesplan mit 10 Minuten", body: "Rondi wählt die heutige Einheit aus deinem schwächsten Thema und zählt deine Serie mit." },
      { title: "Ein KI-Coach, der den Stoff kennt", body: "Du stellst deine Frage, und er antwortet mit den Lektionen deines Landes. Er braucht eine Internetverbindung." },
    ],

    proEyebrow: "Gratis & Rondi Pro",
    proTitle: "Kostenlos starten. Pro, wenn es dir hilft.",
    proLead: "Du kannst Rondi richtig ausprobieren, ohne zu zahlen. Rondi Pro schaltet alles Weitere frei: einmal zahlen, bis du bestehst, oder als Monats- oder Wochenabo.",
    freeTitle: "Gratis",
    freeList: ["Der erste Lektionsblock", "3 komplette Prüfungssimulationen", "Üben nach Themen", "2 Runden Verkehrszeichen-Spiel (je 10 Zeichen)", "Der Verkehrszeichen-Katalog"],
    proName: "Rondi Pro",
    proList: ["Alle Lektionen deines Landes", "Alle Prüfungssimulationen", "Das ganze Zeichen-Spiel und die Fehler-Wiederholung", "„Bis du bestehst“ (Einmalkauf), Monatsabo oder Wochenabo"],
    proFine: "„Bis du bestehst“ ist ein Einmalkauf: Du zahlst einmal und behältst Rondi Pro auf deinem Apple-Account, ohne Verlängerung. Monats- und Wochenabo verlängern sich automatisch; kündigen kannst du jederzeit in den Einstellungen deines Apple-Accounts. Abgerechnet wird alles über deinen Apple-Account, und den Preis in deiner Währung siehst du in der App, bevor du bestätigst.",

    honestEyebrow: "Klartext",
    honestTitle: "Was Rondi nicht ist",
    honest: [
      { title: "Nicht amtlich", body: "Rondi ist eine unabhängige App. Sie steht in keiner Verbindung zu TÜV, DEKRA, DGT, DVSA, der italienischen Motorizzazione oder dem CBR." },
      { title: "Nicht der amtliche Fragenkatalog", body: "Alle Fragen schreibt Rondi selbst zum Prüfungsstoff jedes Landes. Für Deutschland ist es nicht der amtliche Fragenkatalog von TÜV | DEKRA." },
      { title: "Keine Hazard-Perception-Videos", body: "Für die britische Prüfung bereitet Rondi den Fragenteil vor. Die Videos zur Gefahrenwahrnehmung sind nicht enthalten." },
      { title: "Keine Bestehensgarantie", body: "Das kann niemand ehrlich versprechen. Rondi gibt dir Lektionen, Übung und Simulationen; bestehen musst du selbst." },
    ],

    faqEyebrow: "Häufige Fragen",
    faqTitle: "Was Leute über Rondi wissen wollen",
    faq: [
      { q: "Ist Rondi amtlich? Sind das die echten Prüfungsfragen?", a: "Nein. Rondi ist eine unabhängige Lern-App der TREMPIDO S.L. und steht in keiner Verbindung zu TÜV, DEKRA oder einer anderen Stelle. Die Fragen schreibt Rondi selbst zu denselben Themen und im selben Format wie die amtliche Prüfung; es ist nicht der amtliche Fragenkatalog." },
      { q: "Welche Länder deckt Rondi ab?", a: "Fünf: Deutschland (Theorieprüfung Klasse B), Spanien (DGT, permiso B), Vereinigtes Königreich (driving theory test), Italien (quiz patente B) und Niederlande (CBR, theorie-examen auto). Jedes Land hat eigene Lektionen, Fragen und Zeichen; es sind keine Übersetzungen voneinander." },
      { q: "Reicht Rondi für die Theorieprüfung bei TÜV oder DEKRA?", a: "Rondi hilft dir, den Stoff zu verstehen und zu üben: 752 Fragen, 37 Lektionen und 267 Verkehrszeichen für die Klasse B, dazu Simulationen mit Fehlerpunkten (höchstens 10; zwei falsche 5-Punkte-Fragen bedeuten nicht bestanden). Es ist aber nicht der amtliche Fragenkatalog von TÜV | DEKRA und ersetzt weder ihn noch deine Fahrschule." },
      { q: "Wie lange dauert die Vorbereitung auf die Führerschein-Theorie mit Rondi?", a: "Das hängt davon ab, wo du startest und wie oft du lernst; Rondi verspricht deshalb kein Datum. Die App ist um einen Tagesplan von 10 Minuten gebaut, eine Lektion dauert 4 bis 8 Minuten, und die Simulationen zeigen dir, wie nah du an der Bestehensgrenze bist." },
      { q: "Ist Rondi kostenlos?", a: "Ein Teil ja: der erste Lektionsblock, insgesamt 3 Prüfungssimulationen, das Üben nach Themen, 2 Runden Zeichen-Spiel (je 10 Zeichen) und der Zeichenkatalog. Für den Rest brauchst du Rondi Pro: „Bis du bestehst“, ein Einmalkauf ohne Verlängerung, oder ein Monats- bzw. Wochenabo. Den Preis siehst du in der App vor dem Kauf." },
      { q: "Funktioniert Rondi ohne Internet?", a: "Lektionen, Fragen und Verkehrszeichen sind in der App enthalten. Der KI-Coach braucht eine Internetverbindung, um zu antworten." },
      { q: "Brauche ich ein Konto?", a: "Nein. Es gibt keine Anmeldung, und dein Fortschritt wird nur auf deinem iPhone gespeichert." },
      { q: "Wo kann ich Rondi laden?", a: "Rondi ist eine iPhone-App (iOS 17 oder neuer) und kommt bald in den App Store. Sie ist noch nicht veröffentlicht, und es gibt keine Android-Version." },
    ],

    ctaTitle: "Zehn Minuten heute.",
    ctaBody: "Deine erste Lektion dauert kürzer als ein Kaffee.",
    homeAlt: "Startbildschirm von Rondi mit der heutigen 10-Minuten-Einheit, deiner Vorbereitung und deiner Wochenserie",
  },

  // ───────────────────────────────── ITALIANO ────────────────────────────────
  it: {
    title: "Rondi: quiz patente B ed esame di teoria su iPhone",
    description: "Prepara l'esame di teoria su iPhone: lezioni brevi, quiz patente B vero/falso con correzione spiegata e simulazioni nel formato reale. Cinque paesi.",
    ogAlt: "Rondi, la teoria della patente in cinque paesi",
    eyebrow: "Teoria della patente · app per iPhone",
    h1: "Quiz patente B ed esame di teoria,",
    h1Accent: "senza girarci intorno.",
    lead: "Rondi trasforma l'esame di teoria della patente B in dieci minuti al giorno: lezioni brevi con foto reali, quiz corretti e spiegati subito e simulazioni nel formato esatto dell'esame del tuo paese.",
    note: "App per iPhone · senza registrazione · i tuoi progressi restano sul telefono",
    heroArtAlt: "Una rotatoria vista dall'alto con cinque uscite, una per ogni paese coperto da Rondi, e un'auto corallo che gira.",

    whatEyebrow: "Che cos'è Rondi?",
    whatTitle: "Un'app, cinque esami di teoria, ognuno con i suoi contenuti.",
    what: [
      "Rondi è un'app per iPhone per preparare l'esame di teoria della patente dell'auto in cinque paesi: Italia, Spagna, Germania, Regno Unito e Paesi Bassi.",
      "Ogni paese ha le sue lezioni, le sue domande e i suoi segnali, scritti da Rondi e verificati con le norme di quel paese; in Italia, il Codice della Strada e il programma della patente B.",
      "È uno strumento di studio indipendente di TREMPIDO S.L.: le domande sono scritte da Rondi, non sono quelle ufficiali, e non promette la promozione.",
    ],
    stats: [
      { n: "5", label: "paesi, ognuno con il suo programma" },
      { n: "4.570", label: "domande di esercizio in totale" },
      { n: "184", label: "lezioni brevi da 4 a 8 minuti" },
      { n: "10 min", label: "di piano giornaliero, con serie" },
    ],

    examsEyebrow: "I dati",
    examsTitle: "L'esame di teoria in ogni paese",
    examsLead: "Numero di domande, tempo e soglia dell'esame ufficiale, accanto a ciò che Rondi include per prepararlo. Le simulazioni di Rondi copiano questi formati.",
    th: { country: "Paese", exam: "Esame", format: "Formato ufficiale", pass: "Per superarlo", rondi: "In Rondi" },
    examsCaption: "Formato dell'esame di teoria della patente dell'auto (B) in Italia, Spagna, Germania, Regno Unito e Paesi Bassi, e contenuti di Rondi per ciascuno.",
    examsNote: "Nel Regno Unito l'esame ha anche una parte separata di percezione del pericolo (hazard perception) con video. Rondi prepara solo la parte di domande e non include quei video.",
    sourcesLabel: "Fonti ufficiali dei formati d'esame:",

    howEyebrow: "Come funziona",
    howTitle: "Un po' ogni giorno, e sai sempre perché",
    howLead: "Niente maratone di tre ore. Studi a piccole dosi e ogni risposta arriva con la sua spiegazione.",
    shots: [
      { title: "Lezioni brevi con foto reali", body: "Ogni argomento dura da 4 a 8 minuti: rotatorie, precedenze, velocità, segnali. Spiegato in modo chiaro, con foto di strade vere.", alt: "Lezione di Rondi su rotatorie e strettoie, con la foto di una strada reale" },
      { title: "Correzione spiegata subito", body: "Rispondi vero o falso e vedi subito se era giusto e la norma che lo spiega.", alt: "Affermazione vero/falso corretta subito in Rondi, con la spiegazione" },
      { title: "Simulazioni nel formato reale", body: "30 affermazioni vero/falso, 20 minuti e al massimo 3 errori, come all'esame di teoria. Oppure il formato del paese che scegli.", alt: "Risultato di una simulazione d'esame in Rondi: superato con 29 su 30" },
    ],
    more: [
      { title: "Gioco dei segnali", body: "Partite veloci per riconoscere i segnali al volo e il catalogo dei segnali del tuo paese da consultare." },
      { title: "I tuoi errori tornano", body: "Quello che sbagli finisce nel ripasso e torna finché non lo azzecchi." },
      { title: "Piano giornaliero di 10 minuti", body: "Rondi sceglie la sessione di oggi dal tuo argomento più debole e tiene il conto della tua serie." },
      { title: "Un coach con IA che conosce il programma", body: "Scrivi il tuo dubbio e risponde con le lezioni del tuo paese. Ha bisogno della connessione a internet." },
    ],

    proEyebrow: "Gratis e Rondi Pro",
    proTitle: "Inizia gratis. Passa a Pro se ti serve.",
    proLead: "Puoi provare Rondi sul serio senza pagare. Rondi Pro sblocca tutto il resto: paghi una volta fino a quando superi l'esame, oppure ti abboni al mese o alla settimana.",
    freeTitle: "Gratis",
    freeList: ["Il primo blocco di lezioni", "3 simulazioni complete", "Esercizi per argomento", "2 partite al gioco dei segnali (10 segnali ciascuna)", "Il catalogo dei segnali"],
    proName: "Rondi Pro",
    proList: ["Tutte le lezioni del tuo paese", "Tutte le simulazioni", "Il gioco dei segnali completo e il ripasso degli errori", "«Fino a quando lo superi» (acquisto unico), piano mensile o settimanale"],
    proFine: "«Fino a quando lo superi» è un acquisto unico: paghi una volta e Rondi Pro resta sul tuo account Apple, senza rinnovi. I piani mensile e settimanale sono abbonamenti a rinnovo automatico che puoi annullare quando vuoi dalle impostazioni del tuo account Apple. Tutto viene addebitato sul tuo account Apple e il prezzo nella tua valuta è indicato nell'app prima della conferma.",

    honestEyebrow: "Patti chiari",
    honestTitle: "Che cosa Rondi non è",
    honest: [
      { title: "Non è ufficiale", body: "Rondi è un'app indipendente. Non è collegata alla Motorizzazione, alla DGT, a TÜV, DEKRA, alla DVSA né al CBR." },
      { title: "Non sono i quiz ministeriali", body: "Tutte le domande sono scritte da Rondi sul programma di ogni paese. In Germania non è il catalogo ufficiale di TÜV | DEKRA." },
      { title: "Senza video di hazard perception", body: "Dell'esame del Regno Unito, Rondi prepara la parte di domande. I video di percezione del pericolo non sono inclusi." },
      { title: "Nessuna promozione garantita", body: "Nessuno può prometterlo onestamente. Rondi ti dà lezioni, esercizi e simulazioni; passare dipende da te." },
    ],

    faqEyebrow: "Domande frequenti",
    faqTitle: "Quello che la gente chiede su Rondi",
    faq: [
      { q: "Rondi è ufficiale? Sono i quiz ministeriali?", a: "No. Rondi è un'app di studio indipendente di TREMPIDO S.L. e non è collegata alla Motorizzazione né ad altre autorità. Le affermazioni sono scritte da Rondi sugli stessi argomenti e nello stesso formato dell'esame ufficiale; non sono i quiz ministeriali." },
      { q: "Quali paesi copre Rondi?", a: "Cinque: Italia (quiz patente B), Spagna (DGT, permiso B), Germania (Theorieprüfung Klasse B), Regno Unito (driving theory test) e Paesi Bassi (CBR, theorie-examen auto). Ognuno ha le sue lezioni, domande e segnali; non sono traduzioni l'uno dell'altro." },
      { q: "Rondi serve per l'esame di teoria della patente B?", a: "È fatta per prepararlo: 1.536 affermazioni vero/falso e 43 lezioni sul programma della patente B, con simulazioni da 30 affermazioni, 20 minuti e al massimo 3 errori. Le affermazioni sono scritte da Rondi, non sono i quiz ministeriali, e Rondi non sostituisce il materiale ufficiale né l'autoscuola." },
      { q: "Quanto tempo serve per preparare la teoria con Rondi?", a: "Dipende da dove parti e da quanto studi, quindi Rondi non promette una data. L'app ruota attorno a un piano di 10 minuti al giorno, ogni lezione dura da 4 a 8 minuti e le simulazioni ti dicono quanto sei vicino alla soglia." },
      { q: "Rondi è gratis?", a: "In parte sì: il primo blocco di lezioni, 3 simulazioni in tutto, gli esercizi per argomento, 2 partite al gioco dei segnali (da 10 segnali ciascuna) e il catalogo dei segnali. Il resto richiede Rondi Pro: «Fino a quando lo superi», un acquisto unico senza rinnovi, oppure un abbonamento mensile o settimanale. Il prezzo è indicato nell'app prima dell'acquisto." },
      { q: "Rondi funziona senza connessione?", a: "Le lezioni, le domande e i segnali sono inclusi nell'app. Il coach con IA ha bisogno della connessione a internet per rispondere." },
      { q: "Devo creare un account?", a: "No. Non c'è registrazione e i tuoi progressi sono salvati solo sul tuo iPhone." },
      { q: "Dove si scarica Rondi?", a: "Rondi è un'app per iPhone (iOS 17 o successivo) e arriverà presto sull'App Store. Non è ancora pubblicata e non esiste una versione Android." },
    ],

    ctaTitle: "Dieci minuti oggi.",
    ctaBody: "La prima lezione dura meno di un caffè.",
    homeAlt: "Schermata iniziale di Rondi con la sessione di oggi da 10 minuti, la tua preparazione e la serie settimanale",
  },

  // ──────────────────────────────── NEDERLANDS ───────────────────────────────
  nl: {
    title: "Rondi: auto theorie examen oefenen (CBR) op je iPhone",
    description: "CBR theorie oefenen op je iPhone: korte lessen, uitleg bij elk antwoord, gevaarherkenning en oefenexamens in het echte format van het auto theorie examen.",
    ogAlt: "Rondi, auto theorie oefenen voor vijf landen",
    eyebrow: "Auto theorie examen · iPhone-app",
    h1: "Auto theorie oefenen,",
    h1Accent: "zonder rondjes te blijven draaien.",
    lead: "Rondi maakt van het auto theorie examen tien minuten per dag: korte lessen met echte foto's, vragen die meteen worden nagekeken en uitgelegd, en oefenexamens in het precieze format van het examen in jouw land.",
    note: "iPhone-app · geen account · je voortgang blijft op je telefoon",
    heroArtAlt: "Een rotonde van bovenaf met vijf afslagen, één voor elk land in Rondi, en een koraalrode auto die rondrijdt.",

    whatEyebrow: "Wat is Rondi?",
    whatTitle: "Eén app, vijf theorie-examens, elk met eigen inhoud.",
    what: [
      "Rondi is een iPhone-app om het theorie-examen voor de auto voor te bereiden in vijf landen: Nederland, Spanje, Duitsland, het Verenigd Koninkrijk en Italië.",
      "Elk land heeft eigen lessen, vragen en verkeersborden, door Rondi geschreven en gecontroleerd met de regels van dat land; voor Nederland ook 150 getekende situaties gevaarherkenning.",
      "Het is een onafhankelijk studiehulpmiddel van TREMPIDO S.L.: de vragen zijn zelf geschreven, het zijn geen officiële CBR-vragen, en slagen wordt niet beloofd.",
    ],
    stats: [
      { n: "5", label: "landen, elk met eigen lesstof" },
      { n: "4.570", label: "oefenvragen in totaal" },
      { n: "184", label: "korte lessen van 4 tot 8 minuten" },
      { n: "10 min", label: "dagplan, met reeks" },
    ],

    examsEyebrow: "De feiten",
    examsTitle: "Het theorie-examen in elk land",
    examsLead: "Aantal vragen, tijd en cesuur van het officiële examen, naast wat Rondi biedt om het voor te bereiden. De oefenexamens in Rondi nemen deze formats over.",
    th: { country: "Land", exam: "Examen", format: "Officieel format", pass: "Geslaagd met", rondi: "In Rondi" },
    examsCaption: "Format van het theorie-examen voor de auto (rijbewijs B) in Nederland, Spanje, Duitsland, het Verenigd Koninkrijk en Italië, en de inhoud van Rondi per land.",
    examsNote: "In het Verenigd Koninkrijk heeft het examen daarnaast een apart onderdeel gevaarherkenning (hazard perception) met video's. Rondi bereidt alleen het vragendeel voor en bevat die video's niet.",
    sourcesLabel: "Officiële bronnen voor de examenformats:",

    howEyebrow: "Zo werkt het",
    howTitle: "Elke dag een beetje, en je weet altijd waarom",
    howLead: "Geen stampsessies van drie uur. Je leert in korte stukjes en bij elk antwoord krijg je uitleg.",
    shots: [
      { title: "Korte lessen met echte foto's", body: "Elk onderwerp duurt 4 tot 8 minuten: rotondes, voorrang, snelheid, verkeersborden. Helder uitgelegd, met foto's van echte wegen.", alt: "Rondi-les over rotondes met een foto van een echte weg" },
      { title: "Meteen uitgelegd", body: "Je antwoordt en ziet direct of het goed was, wat het juiste antwoord is en welke regel erachter zit.", alt: "Vraag die in Rondi meteen is nagekeken, met het juiste antwoord en de uitleg" },
      { title: "Oefenexamens in het echte format", body: "50 vragen inclusief gevaarherkenning, 30 minuten en geslaagd met 44 goed, net als bij het CBR. Of het format van het land dat je kiest.", alt: "Uitslag van een oefenexamen in Rondi: geslaagd met 49 van de 50 goed" },
    ],
    more: [
      { title: "Bordenspel", body: "Snelle rondes om verkeersborden in één oogopslag te herkennen, plus de bordencatalogus van jouw land om ze op te zoeken." },
      { title: "Je fouten komen terug", body: "Wat je fout hebt, komt in je herhaling en keert terug tot je het goed hebt." },
      { title: "Dagplan van 10 minuten", body: "Rondi kiest de sessie van vandaag uit je zwakste onderwerp en houdt je reeks bij." },
      { title: "Een AI-coach die de lesstof kent", body: "Je stelt je vraag en hij antwoordt met de lessen van jouw land. Hij heeft een internetverbinding nodig." },
    ],

    proEyebrow: "Gratis & Rondi Pro",
    proTitle: "Begin gratis. Ga voor Pro als het je helpt.",
    proLead: "Je kunt Rondi echt uitproberen zonder te betalen. Rondi Pro ontgrendelt al het andere: één keer betalen tot je slaagt, of een abonnement per maand of per week.",
    freeTitle: "Gratis",
    freeList: ["Het eerste blok lessen", "3 volledige oefenexamens", "Oefenen per onderwerp", "2 rondes van het bordenspel (10 borden per ronde)", "De bordencatalogus"],
    proName: "Rondi Pro",
    proList: ["Alle lessen van jouw land", "Alle oefenexamens", "Het hele bordenspel en je foutenherhaling", "„Tot je slaagt“ (eenmalige aankoop), per maand of per week"],
    proFine: "„Tot je slaagt“ is een eenmalige aankoop: je betaalt één keer en houdt Rondi Pro op je Apple-account, zonder verlenging. Het maand- en weekabonnement worden automatisch verlengd en je kunt ze altijd opzeggen in de instellingen van je Apple-account. Alles wordt afgerekend via je Apple-account en de prijs in jouw valuta zie je in de app voordat je bevestigt.",

    honestEyebrow: "Eerlijk is eerlijk",
    honestTitle: "Wat Rondi niet is",
    honest: [
      { title: "Niet officieel", body: "Rondi is een onafhankelijke app. De app is niet verbonden aan het CBR, de DGT, TÜV, DEKRA, de DVSA of de Italiaanse Motorizzazione." },
      { title: "Geen officiële examenvragen", body: "Alle vragen zijn door Rondi geschreven over de examenstof van elk land. Voor Duitsland is het niet de officiële vragencatalogus van TÜV | DEKRA." },
      { title: "Geen hazard perception-video's", body: "Voor het Britse examen bereidt Rondi het vragendeel voor. De video's voor gevaarherkenning zitten er niet in." },
      { title: "Geen slaaggarantie", body: "Dat kan niemand eerlijk beloven. Rondi geeft je lessen, oefening en oefenexamens; slagen doe je zelf." },
    ],

    faqEyebrow: "Veelgestelde vragen",
    faqTitle: "Wat mensen over Rondi vragen",
    faq: [
      { q: "Is Rondi officieel? Zijn dit de echte CBR-vragen?", a: "Nee. Rondi is een onafhankelijke studie-app van TREMPIDO S.L. en is niet verbonden aan het CBR of een andere instantie. De vragen zijn door Rondi geschreven over dezelfde onderwerpen en in hetzelfde format als het officiële examen; het zijn geen officiële CBR-vragen." },
      { q: "Welke landen zitten in Rondi?", a: "Vijf: Nederland (CBR, theorie-examen auto), Spanje (DGT, permiso B), Duitsland (Theorieprüfung Klasse B), het Verenigd Koninkrijk (driving theory test) en Italië (quiz patente B). Elk land heeft eigen lessen, vragen en borden; het zijn geen vertalingen van elkaar." },
      { q: "Kan ik met Rondi oefenen voor het CBR theorie-examen?", a: "Daar is het voor gemaakt: 750 vragen, 36 lessen, 202 verkeersborden en 150 getekende situaties gevaarherkenning, met oefenexamens van 50 vragen, 30 minuten en geslaagd met 44 goed. De vragen zijn door Rondi geschreven, het zijn geen CBR-vragen, en Rondi vervangt het officiële materiaal of je rijschool niet." },
      { q: "Hoe lang duurt het om met Rondi je auto theorie te leren?", a: "Dat hangt af van waar je begint en hoe vaak je oefent, dus Rondi belooft geen datum. De app draait om een dagplan van 10 minuten, een les duurt 4 tot 8 minuten en de oefenexamens laten zien hoe dicht je bij de cesuur zit." },
      { q: "Is Rondi gratis?", a: "Deels: het eerste blok lessen, in totaal 3 oefenexamens, oefenen per onderwerp, 2 rondes van het bordenspel (10 borden per ronde) en de bordencatalogus. Voor de rest heb je Rondi Pro nodig: „Tot je slaagt“, een eenmalige aankoop zonder verlenging, of een abonnement per maand of per week. De prijs zie je in de app voordat je koopt." },
      { q: "Werkt Rondi zonder internet?", a: "De lessen, vragen en verkeersborden zitten in de app. De AI-coach heeft een internetverbinding nodig om te antwoorden." },
      { q: "Heb ik een account nodig?", a: "Nee. Je hoeft je niet te registreren en je voortgang wordt alleen op je iPhone bewaard." },
      { q: "Waar kan ik Rondi downloaden?", a: "Rondi is een iPhone-app (iOS 17 of nieuwer) en komt binnenkort in de App Store. De app is nog niet gepubliceerd en er is geen Android-versie." },
    ],

    ctaTitle: "Tien minuten vandaag.",
    ctaBody: "Je eerste les duurt korter dan een kop koffie.",
    homeAlt: "Startscherm van Rondi met de sessie van vandaag van 10 minuten, je voorbereiding en je weekreeks",
  },
}
