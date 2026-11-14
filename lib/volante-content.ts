// Volante marketing pages: languages, URLs, countries and every UI string, in
// the five languages of the app. Facts are checked against the iOS app
// (Models/Market.swift, content/<cc>/exam.json, Services/CoachClient.swift,
// Services/Subscriptions.swift). If the app changes, this changes.

import { volanteAppStoreUrl } from "./volante-config"

export type VLang = "en" | "es" | "de" | "it" | "nl"
export const VLANGS: VLang[] = ["en", "es", "de", "it", "nl"]
/** Languages that live under /volante/<lang>/… (English is the default, unprefixed). */
export const VPREFIXED: Exclude<VLang, "en">[] = ["es", "de", "it", "nl"]

export const VOLANTE = {
  name: "Volante",
  origin: "https://www.trempido.com",
  supportEmail: "ppidelaserra2@gmail.com",
  eula: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  manageSubs: "https://apps.apple.com/account/subscriptions",
  refunds: "https://reportaproblem.apple.com",
  appStoreUrl: volanteAppStoreUrl,
  company: {
    name: "TREMPIDO SL",
    taxId: "B75830257",
    address: "Carrer Nil Fabra 16, Escalera A, Ático 2ª, 08012 Barcelona, España",
  },
} as const

// ── URLs ─────────────────────────────────────────────────────────────────────

export type VPage = "home" | "privacy" | "terms" | "support" | "legal"
export const VDOCS: Exclude<VPage, "home">[] = ["privacy", "terms", "support", "legal"]

/** Localised slug of every inner page. */
export const VSLUGS: Record<VLang, Record<Exclude<VPage, "home">, string>> = {
  en: { privacy: "privacy", terms: "terms", support: "support", legal: "legal" },
  es: { privacy: "privacidad", terms: "terminos", support: "soporte", legal: "aviso-legal" },
  de: { privacy: "datenschutz", terms: "agb", support: "hilfe", legal: "impressum" },
  it: { privacy: "privacy", terms: "termini", support: "assistenza", legal: "note-legali" },
  nl: { privacy: "privacy", terms: "voorwaarden", support: "hulp", legal: "juridisch" },
}

export function vpath(lang: VLang, page: VPage = "home"): string {
  const base = lang === "en" ? "/volante" : `/volante/${lang}`
  return page === "home" ? base : `${base}/${VSLUGS[lang][page]}`
}

export const vabs = (path: string) => `${VOLANTE.origin}${path}`

export function pageFromSlug(lang: VLang, slug: string): Exclude<VPage, "home"> | undefined {
  return VDOCS.find((p) => VSLUGS[lang][p] === slug)
}

/** hreflang map for the same page in the five languages (+ x-default = English). */
export function valternates(page: VPage) {
  const languages: Record<string, string> = {}
  for (const l of VLANGS) languages[l] = vabs(vpath(l, page))
  languages["x-default"] = vabs(vpath("en", page))
  return languages
}

export const LANG_NAME: Record<VLang, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
  nl: "Nederlands",
}

// ── countries (Country in Models/Market.swift + content/<cc>/exam.json) ─────

export type VCountry = "es" | "de" | "uk" | "it" | "nl"
export const VCOUNTRIES: VCountry[] = ["es", "de", "uk", "it", "nl"]

/** Which country's screenshots a language shows first. */
export const HOME_COUNTRY: Record<VLang, VCountry> = { en: "uk", es: "es", de: "de", it: "it", nl: "nl" }

export const FLAG: Record<VCountry, string[]> = {
  es: ["#AA151B", "#F1BF00", "#F1BF00", "#AA151B"],
  de: ["#000000", "#DD0000", "#FFCE00"],
  uk: ["#012169", "#FFFFFF", "#C8102E", "#FFFFFF", "#012169"],
  it: ["#009246", "#FFFFFF", "#CE2B37"],
  nl: ["#AE1C28", "#FFFFFF", "#21468B"],
}
/** Italy's flag stripes are vertical. */
export const FLAG_VERTICAL: Record<VCountry, boolean> = { es: false, de: false, uk: false, it: true, nl: false }

export const screen = (c: VCountry, key: "welcome" | "home" | "lesson" | "sign" | "scene" | "fix" | "result" | "signs") =>
  `/images/volante/screens/${c}-${key}.webp`

type L5 = Record<VLang, string>

export const COUNTRY_NAME: Record<VCountry, L5> = {
  es: { en: "Spain", es: "España", de: "Spanien", it: "Spagna", nl: "Spanje" },
  de: { en: "Germany", es: "Alemania", de: "Deutschland", it: "Germania", nl: "Duitsland" },
  uk: { en: "United Kingdom", es: "Reino Unido", de: "Vereinigtes Königreich", it: "Regno Unito", nl: "Verenigd Koninkrijk" },
  it: { en: "Italy", es: "Italia", de: "Italien", it: "Italia", nl: "Italië" },
  nl: { en: "Netherlands", es: "Países Bajos", de: "Niederlande", it: "Paesi Bassi", nl: "Nederland" },
}

/** Exam name as the learner knows it (always in the country's own language). */
export const EXAM: Record<VCountry, { authority: string; exam: string; lang: string }> = {
  es: { authority: "DGT", exam: "Permiso B · examen teórico", lang: "Español" },
  de: { authority: "TÜV | DEKRA", exam: "Theorieprüfung Klasse B", lang: "Deutsch" },
  uk: { authority: "DVSA", exam: "Car theory test", lang: "English" },
  it: { authority: "Motorizzazione", exam: "Esame di teoria patente B", lang: "Italiano" },
  nl: { authority: "CBR", exam: "Theorie-examen B", lang: "Nederlands" },
}

/** Exam format, written in each page language. */
export const FORMAT: Record<VCountry, L5> = {
  es: {
    en: "30 questions · 30 min · pass with 27",
    es: "30 preguntas · 30 min · máximo 3 fallos",
    de: "30 Fragen · 30 Min. · max. 3 Fehler",
    it: "30 domande · 30 min · massimo 3 errori",
    nl: "30 vragen · 30 min · max. 3 fouten",
  },
  de: {
    en: "30 questions · max. 10 error points",
    es: "30 preguntas · máximo 10 puntos de error",
    de: "30 Fragen · max. 10 Fehlerpunkte",
    it: "30 domande · massimo 10 punti di errore",
    nl: "30 vragen · max. 10 foutpunten",
  },
  uk: {
    en: "50 questions · 57 min · pass with 43",
    es: "50 preguntas · 57 min · aprobado con 43",
    de: "50 Fragen · 57 Min. · bestanden ab 43",
    it: "50 domande · 57 min · si passa con 43",
    nl: "50 vragen · 57 min · geslaagd met 43",
  },
  it: {
    en: "30 true/false statements · 20 min · max. 3 errors",
    es: "30 afirmaciones V/F · 20 min · máximo 3 errores",
    de: "30 Wahr/Falsch-Aussagen · 20 Min. · max. 3 Fehler",
    it: "30 affermazioni Vero/Falso · 20 min · massimo 3 errori",
    nl: "30 waar/niet waar-stellingen · 20 min · max. 3 fouten",
  },
  nl: {
    en: "50 questions · 30 min · pass with 44",
    es: "50 preguntas · 30 min · aprobado con 44",
    de: "50 Fragen · 30 Min. · bestanden ab 44",
    it: "50 domande · 30 min · si passa con 44",
    nl: "50 vragen · 30 min · geslaagd met 44",
  },
}

// ── UI strings ───────────────────────────────────────────────────────────────

const S = {
  getApp: { en: "Download on the App Store", es: "Descargar en el App Store", de: "Im App Store laden", it: "Scarica sull'App Store", nl: "Download in de App Store" },
  soon: { en: "Coming soon to the App Store", es: "Muy pronto en el App Store", de: "Bald im App Store", it: "Presto sull'App Store", nl: "Binnenkort in de App Store" },
  navCountries: { en: "Countries", es: "Países", de: "Länder", it: "Paesi", nl: "Landen" },
  navHow: { en: "How it works", es: "Cómo funciona", de: "So funktioniert's", it: "Come funziona", nl: "Zo werkt het" },
  navPro: { en: "Pro", es: "Pro", de: "Pro", it: "Pro", nl: "Pro" },
  navFaq: { en: "FAQ", es: "Preguntas", de: "FAQ", it: "FAQ", nl: "FAQ" },
  language: { en: "Language", es: "Idioma", de: "Sprache", it: "Lingua", nl: "Taal" },

  privacy: { en: "Privacy", es: "Privacidad", de: "Datenschutz", it: "Privacy", nl: "Privacy" },
  terms: { en: "Terms", es: "Términos", de: "AGB", it: "Termini", nl: "Voorwaarden" },
  support: { en: "Support", es: "Soporte", de: "Hilfe", it: "Assistenza", nl: "Hulp" },
  legal: { en: "Legal notice", es: "Aviso legal", de: "Impressum", it: "Note legali", nl: "Juridische info" },
  eula: { en: "Apple EULA", es: "EULA de Apple", de: "Apple-EULA", it: "EULA di Apple", nl: "EULA van Apple" },
  footTagline: {
    en: "Pass your driving theory test with short lessons and real exam-style practice.",
    es: "Aprueba el teórico del carnet con clases cortas y tests como los del examen.",
    de: "Bestehe die Führerschein-Theorie mit kurzen Lektionen und Prüfungssimulationen.",
    it: "Supera la teoria della patente con lezioni brevi e quiz come all'esame.",
    nl: "Haal je theorie-examen met korte lessen en oefenexamens zoals het echte.",
  },
  updated: { en: "Last updated: 14 November 2026.", es: "Última actualización: 14 de noviembre de 2026.", de: "Stand: 14. November 2026.", it: "Ultimo aggiornamento: 14 novembre 2026.", nl: "Laatst bijgewerkt: 14 november 2026." },
  notAffiliated: {
    en: "Volante is an independent study app by TREMPIDO SL. It is not affiliated with, endorsed by or connected to the DGT, TÜV, DEKRA, the DVSA, the Italian Ministry of Infrastructure and Transport (Motorizzazione) or the CBR. The questions are written by Volante on the same topics as the official exams; they are not the official questions.",
    es: "Volante es una app de estudio independiente de TREMPIDO SL. No está afiliada, avalada ni vinculada a la DGT, TÜV, DEKRA, la DVSA, el Ministerio de Infraestructuras y Transportes de Italia (Motorizzazione) ni el CBR. Las preguntas las escribe Volante sobre los mismos temas que los exámenes oficiales; no son las preguntas oficiales.",
    de: "Volante ist eine unabhängige Lern-App der TREMPIDO SL. Sie steht in keiner Verbindung zu DGT, TÜV, DEKRA, DVSA, dem italienischen Verkehrsministerium (Motorizzazione) oder dem CBR und wird von diesen nicht unterstützt. Die Fragen schreibt Volante selbst zu denselben Themen wie die amtlichen Prüfungen; es sind nicht die amtlichen Fragen.",
    it: "Volante è un'app di studio indipendente di TREMPIDO SL. Non è affiliata, approvata né collegata a DGT, TÜV, DEKRA, DVSA, al Ministero delle Infrastrutture e dei Trasporti (Motorizzazione) o al CBR. Le domande sono scritte da Volante sugli stessi argomenti degli esami ufficiali; non sono le domande ufficiali.",
    nl: "Volante is een onafhankelijke studie-app van TREMPIDO SL. De app is niet verbonden aan of goedgekeurd door de DGT, TÜV, DEKRA, de DVSA, het Italiaanse ministerie van Infrastructuur en Vervoer (Motorizzazione) of het CBR. De vragen zijn door Volante zelf geschreven over dezelfde onderwerpen als de officiële examens; het zijn geen officiële examenvragen.",
  },
} satisfies Record<string, L5>

export const t = (lang: VLang, key: keyof typeof S) => S[key][lang]

// ── landing copy ─────────────────────────────────────────────────────────────

export const LANDING: Record<VLang, {
  title: string
  description: string
  eyebrow: string
  h1: string
  lead: string
  noAccount: string
  countriesEyebrow: string
  countriesTitle: string
  countriesLead: string
  inYourLang: string
  howEyebrow: string
  howTitle: string
  features: { title: string; body: string }[]
  shotsAlt: string[]
  proEyebrow: string
  proTitle: string
  proBody: string
  proPoints: string[]
  proFine: string
  faqTitle: string
  faq: { q: string; a: string }[]
  ctaTitle: string
  ctaBody: string
}> = {
  en: {
    title: "Volante — driving theory test practice for the UK, Spain, Germany, Italy and the Netherlands",
    description: "Pass your driving theory test: short lessons with real photos, exam-style mock tests and an AI driving instructor. DVSA, DGT, TÜV/DEKRA, Motorizzazione and CBR formats. For iPhone.",
    eyebrow: "Driving theory · iPhone",
    h1: "Your licence, without the stress.",
    lead: "Ten minutes a day of short lessons and exam-style questions for the theory test in your country. The questions you get wrong come back until you get them right.",
    noAccount: "No sign-up · your progress stays on your iPhone",
    countriesEyebrow: "Five countries",
    countriesTitle: "One app, the exam of your country",
    countriesLead: "Pick your country and Volante switches to its rules, its road signs and the exact format of its theory test.",
    inYourLang: "In",
    howEyebrow: "How it works",
    howTitle: "Study a little, every day",
    features: [
      { title: "Short lessons with real photos", body: "Every topic explained in a few minutes, with photos of real roads and a mini-test at the end." },
      { title: "Mock tests like the real one", body: "Same number of questions, same time and same pass mark as the official exam of your country." },
      { title: "Your mistakes come back", body: "Each correction tells you why, cites the rule, and the question returns until you master it." },
      { title: "Every road sign", body: "The official sign catalogue of your country and a quick game to recognise them at a glance." },
      { title: "Ask the instructor", body: "An AI instructor answers your doubts using only Volante's checked lessons, and shows you where it comes from." },
    ],
    shotsAlt: ["Welcome screen", "Today's session", "Lesson with photo", "Question with a road sign", "Correction with the rule", "Mock test result"],
    proEyebrow: "Free to start",
    proTitle: "Try it free. Go Pro when you're serious.",
    proBody: "Start studying for free. Volante Pro unlocks every lesson, unlimited mock tests and more questions to the instructor.",
    proPoints: ["3-month plan with a 3-day free trial", "Or a weekly plan, no trial", "Cancel anytime in your Apple Account settings"],
    proFine: "Auto-renewing subscription billed through your Apple Account. The price in your currency is shown in the app before you confirm.",
    faqTitle: "Questions",
    faq: [
      { q: "Are these the official exam questions?", a: "No. Volante writes its own questions on the same topics, in the same format as the official exam, and checks them against the current rules of each country." },
      { q: "Do I need an account?", a: "No. There is no sign-up: your progress is saved only on your iPhone." },
      { q: "Can I change country or language?", a: "Yes, any time in Settings → Your test. The app language can be different from the exam country." },
      { q: "How do I cancel?", a: "In Settings on your iPhone → your name → Subscriptions → Volante. You keep Pro until the end of the period you paid for." },
    ],
    ctaTitle: "Ten minutes today.",
    ctaBody: "Your first lesson takes less than a coffee.",
  },
  es: {
    title: "Volante — test del carnet de conducir DGT (y de Alemania, Reino Unido, Italia y Países Bajos)",
    description: "Aprueba el teórico del carnet: clases cortas con fotos reales, simulacros como el examen de la DGT y un profesor de autoescuela con IA. Para iPhone.",
    eyebrow: "Teórico del carnet · iPhone",
    h1: "Tu carnet, sin agobios.",
    lead: "Diez minutos al día de clases cortas y preguntas como las del examen teórico de tu país. Lo que fallas vuelve hasta que lo aciertas.",
    noAccount: "Sin registro · tu progreso se queda en tu iPhone",
    countriesEyebrow: "Cinco países",
    countriesTitle: "Una app, el examen de tu país",
    countriesLead: "Elige tu país y Volante cambia a sus normas, sus señales y el formato exacto de su examen teórico.",
    inYourLang: "En",
    howEyebrow: "Cómo funciona",
    howTitle: "Un poco cada día",
    features: [
      { title: "Clases cortas con fotos reales", body: "Cada tema explicado en pocos minutos, con fotos de carreteras de verdad y un mini-test al final." },
      { title: "Simulacros como el examen", body: "Mismas preguntas, mismo tiempo y mismo aprobado que el examen oficial de tu país." },
      { title: "Tus fallos vuelven", body: "Cada corrección te dice por qué y cita la norma, y la pregunta vuelve hasta que la dominas." },
      { title: "Todas las señales", body: "El catálogo oficial de señales de tu país y un juego rápido para reconocerlas de un vistazo." },
      { title: "Pregunta al profesor", body: "Un profesor con IA resuelve tus dudas usando solo las clases revisadas de Volante y te dice de dónde lo saca." },
    ],
    shotsAlt: ["Pantalla de bienvenida", "Sesión de hoy", "Clase con foto", "Pregunta con señal", "Corrección con la norma", "Resultado del simulacro"],
    proEyebrow: "Empieza gratis",
    proTitle: "Pruébala gratis. Pasa a Pro cuando vayas en serio.",
    proBody: "Empieza a estudiar gratis. Volante Pro desbloquea todas las clases, simulacros sin límite y más preguntas al profesor.",
    proPoints: ["Plan de 3 meses con 3 días de prueba gratis", "O plan semanal, sin prueba", "Cancela cuando quieras desde tu cuenta de Apple"],
    proFine: "Suscripción con renovación automática cobrada a tu cuenta de Apple. El precio en tu moneda se ve en la app antes de confirmar.",
    faqTitle: "Preguntas",
    faq: [
      { q: "¿Son las preguntas oficiales del examen?", a: "No. Volante escribe sus propias preguntas sobre los mismos temas y con el mismo formato que el examen oficial, y las revisa con la normativa vigente de cada país." },
      { q: "¿Necesito una cuenta?", a: "No. No hay registro: tu progreso se guarda solo en tu iPhone." },
      { q: "¿Puedo cambiar de país o de idioma?", a: "Sí, cuando quieras, en Ajustes → Tu examen. El idioma de la app puede ser distinto del país del examen." },
      { q: "¿Cómo cancelo?", a: "En Ajustes del iPhone → tu nombre → Suscripciones → Volante. Sigues con Pro hasta el final del periodo pagado." },
    ],
    ctaTitle: "Diez minutos hoy.",
    ctaBody: "Tu primera clase dura menos que un café.",
  },
  de: {
    title: "Volante — Führerschein-Theorie Klasse B lernen (TÜV/DEKRA), auch für UK, Spanien, Italien und NL",
    description: "Bestehe die Theorieprüfung: kurze Lektionen mit echten Fotos, Prüfungssimulationen wie bei TÜV/DEKRA und ein KI-Fahrlehrer für deine Fragen. Für iPhone.",
    eyebrow: "Führerschein-Theorie · iPhone",
    h1: "Dein Führerschein, ganz entspannt.",
    lead: "Zehn Minuten am Tag: kurze Lektionen und Fragen wie in der Theorieprüfung deines Landes. Was du falsch machst, kommt wieder, bis es sitzt.",
    noAccount: "Ohne Anmeldung · dein Fortschritt bleibt auf deinem iPhone",
    countriesEyebrow: "Fünf Länder",
    countriesTitle: "Eine App, die Prüfung deines Landes",
    countriesLead: "Wähle dein Land, und Volante stellt auf seine Regeln, seine Verkehrszeichen und das genaue Format seiner Theorieprüfung um.",
    inYourLang: "Auf",
    howEyebrow: "So funktioniert's",
    howTitle: "Jeden Tag ein bisschen",
    features: [
      { title: "Kurze Lektionen mit echten Fotos", body: "Jedes Thema in wenigen Minuten erklärt, mit Fotos echter Straßen und einem Mini-Test am Ende." },
      { title: "Prüfungssimulation wie echt", body: "Gleiche Fragenanzahl und gleiche Bewertung wie die amtliche Prüfung deines Landes." },
      { title: "Deine Fehler kommen wieder", body: "Jede Korrektur erklärt das Warum und nennt die Vorschrift, und die Frage kommt wieder, bis du sie kannst." },
      { title: "Alle Verkehrszeichen", body: "Der amtliche Zeichenkatalog deines Landes und ein schnelles Spiel, um sie auf einen Blick zu erkennen." },
      { title: "Frag den Fahrlehrer", body: "Ein KI-Fahrlehrer beantwortet deine Fragen nur mit den geprüften Lektionen von Volante und zeigt dir die Quelle." },
    ],
    shotsAlt: ["Willkommen", "Heutige Lerneinheit", "Lektion mit Foto", "Frage mit Verkehrszeichen", "Korrektur mit Vorschrift", "Ergebnis der Simulation"],
    proEyebrow: "Kostenlos starten",
    proTitle: "Kostenlos testen. Pro, wenn es ernst wird.",
    proBody: "Fang kostenlos an. Volante Pro schaltet alle Lektionen, unbegrenzte Prüfungssimulationen und mehr Fragen an den Fahrlehrer frei.",
    proPoints: ["3-Monats-Abo mit 3 Tagen gratis", "Oder Wochenabo, ohne Testphase", "Jederzeit in deinem Apple-Account kündbar"],
    proFine: "Automatisch verlängerndes Abo, abgerechnet über deinen Apple-Account. Den Preis in deiner Währung siehst du in der App, bevor du bestätigst.",
    faqTitle: "Fragen",
    faq: [
      { q: "Sind das die amtlichen Prüfungsfragen?", a: "Nein. Volante schreibt eigene Fragen zu denselben Themen und im selben Format wie die amtliche Prüfung und prüft sie anhand der geltenden Vorschriften jedes Landes." },
      { q: "Brauche ich ein Konto?", a: "Nein. Es gibt keine Anmeldung: Dein Fortschritt wird nur auf deinem iPhone gespeichert." },
      { q: "Kann ich Land oder Sprache ändern?", a: "Ja, jederzeit unter Einstellungen → Deine Prüfung. Die App-Sprache kann sich vom Prüfungsland unterscheiden." },
      { q: "Wie kündige ich?", a: "In den iPhone-Einstellungen → dein Name → Abonnements → Volante. Pro bleibt bis zum Ende des bezahlten Zeitraums aktiv." },
    ],
    ctaTitle: "Zehn Minuten heute.",
    ctaBody: "Deine erste Lektion dauert kürzer als ein Kaffee.",
  },
  it: {
    title: "Volante — quiz patente B e teoria (Motorizzazione), anche per Spagna, Germania, UK e Paesi Bassi",
    description: "Supera l'esame di teoria della patente: lezioni brevi con foto reali, simulazioni come l'esame ministeriale e un istruttore con IA per i tuoi dubbi. Per iPhone.",
    eyebrow: "Teoria patente · iPhone",
    h1: "La tua patente, senza ansia.",
    lead: "Dieci minuti al giorno di lezioni brevi e affermazioni Vero/Falso come all'esame di teoria. Quello che sbagli torna finché non lo azzecchi.",
    noAccount: "Senza registrazione · i tuoi progressi restano sul tuo iPhone",
    countriesEyebrow: "Cinque paesi",
    countriesTitle: "Un'app, l'esame del tuo paese",
    countriesLead: "Scegli il tuo paese e Volante passa alle sue regole, ai suoi segnali e al formato esatto del suo esame di teoria.",
    inYourLang: "In",
    howEyebrow: "Come funziona",
    howTitle: "Un po' ogni giorno",
    features: [
      { title: "Lezioni brevi con foto reali", body: "Ogni argomento spiegato in pochi minuti, con foto di strade vere e un mini-quiz alla fine." },
      { title: "Simulazioni come l'esame", body: "Stesso numero di domande, stesso tempo e stessa soglia dell'esame ufficiale del tuo paese." },
      { title: "I tuoi errori tornano", body: "Ogni correzione ti spiega il perché e cita la norma, e la domanda torna finché non la padroneggi." },
      { title: "Tutti i segnali", body: "Il catalogo ufficiale dei segnali del tuo paese e un gioco veloce per riconoscerli al volo." },
      { title: "Chiedi all'istruttore", body: "Un istruttore con IA risponde ai tuoi dubbi usando solo le lezioni verificate di Volante e ti mostra la fonte." },
    ],
    shotsAlt: ["Benvenuto", "La sessione di oggi", "Lezione con foto", "Domanda con segnale", "Correzione con la norma", "Risultato della simulazione"],
    proEyebrow: "Inizia gratis",
    proTitle: "Provala gratis. Passa a Pro quando fai sul serio.",
    proBody: "Inizia a studiare gratis. Volante Pro sblocca tutte le lezioni, simulazioni illimitate e più domande all'istruttore.",
    proPoints: ["Piano di 3 mesi con 3 giorni di prova gratuita", "Oppure piano settimanale, senza prova", "Annulla quando vuoi dal tuo account Apple"],
    proFine: "Abbonamento a rinnovo automatico addebitato sul tuo account Apple. Il prezzo nella tua valuta è indicato nell'app prima della conferma.",
    faqTitle: "Domande",
    faq: [
      { q: "Sono le domande ufficiali dell'esame?", a: "No. Volante scrive le proprie domande sugli stessi argomenti e nello stesso formato dell'esame ufficiale, e le verifica con le norme vigenti di ogni paese." },
      { q: "Serve un account?", a: "No. Non c'è registrazione: i tuoi progressi sono salvati solo sul tuo iPhone." },
      { q: "Posso cambiare paese o lingua?", a: "Sì, quando vuoi, in Impostazioni → Il tuo esame. La lingua dell'app può essere diversa dal paese dell'esame." },
      { q: "Come annullo?", a: "In Impostazioni dell'iPhone → il tuo nome → Abbonamenti → Volante. Resti Pro fino alla fine del periodo pagato." },
    ],
    ctaTitle: "Dieci minuti oggi.",
    ctaBody: "La prima lezione dura meno di un caffè.",
  },
  nl: {
    title: "Volante — CBR theorie-examen auto (B) oefenen, ook voor Spanje, Duitsland, VK en Italië",
    description: "Haal je theorie-examen: korte lessen met echte foto's, oefenexamens zoals bij het CBR, gevaarherkenning en een AI-rijinstructeur voor je vragen. Voor iPhone.",
    eyebrow: "Theorie-examen · iPhone",
    h1: "Je rijbewijs, zonder stress.",
    lead: "Tien minuten per dag korte lessen en vragen zoals op het theorie-examen van jouw land. Wat je fout hebt, komt terug tot je het goed hebt.",
    noAccount: "Geen account · je voortgang blijft op je iPhone",
    countriesEyebrow: "Vijf landen",
    countriesTitle: "Eén app, het examen van jouw land",
    countriesLead: "Kies je land en Volante schakelt over op de regels, de verkeersborden en het precieze format van het theorie-examen daar.",
    inYourLang: "In het",
    howEyebrow: "Zo werkt het",
    howTitle: "Elke dag een beetje",
    features: [
      { title: "Korte lessen met echte foto's", body: "Elk onderwerp in een paar minuten uitgelegd, met foto's van echte wegen en een mini-toets aan het eind." },
      { title: "Oefenexamens zoals het echte", body: "Evenveel vragen, dezelfde tijd en dezelfde cesuur als het officiële examen van jouw land." },
      { title: "Je fouten komen terug", body: "Elke correctie legt uit waarom en noemt de regel, en de vraag komt terug tot je hem beheerst." },
      { title: "Alle verkeersborden", body: "De officiële bordencatalogus van jouw land en een snel spel om ze in één oogopslag te herkennen." },
      { title: "Vraag het de instructeur", body: "Een AI-instructeur beantwoordt je vragen met alleen de gecontroleerde lessen van Volante en laat zien waar het vandaan komt." },
    ],
    shotsAlt: ["Welkomstscherm", "Sessie van vandaag", "Les met foto", "Vraag met verkeersbord", "Correctie met de regel", "Uitslag oefenexamen"],
    proEyebrow: "Gratis beginnen",
    proTitle: "Probeer gratis. Ga voor Pro als het menens wordt.",
    proBody: "Begin gratis met leren. Volante Pro ontgrendelt alle lessen, onbeperkt oefenexamens en meer vragen aan de instructeur.",
    proPoints: ["Abonnement van 3 maanden met 3 dagen gratis", "Of een weekabonnement, zonder proefperiode", "Altijd opzegbaar via je Apple-account"],
    proFine: "Automatisch verlengend abonnement, afgerekend via je Apple-account. De prijs in jouw valuta zie je in de app voordat je bevestigt.",
    faqTitle: "Vragen",
    faq: [
      { q: "Zijn dit de officiële CBR-vragen?", a: "Nee. Volante schrijft eigen vragen over dezelfde onderwerpen en in hetzelfde format als het officiële examen, en controleert ze met de geldende regels van elk land." },
      { q: "Heb ik een account nodig?", a: "Nee. Je hoeft je niet te registreren: je voortgang wordt alleen op je iPhone bewaard." },
      { q: "Kan ik van land of taal wisselen?", a: "Ja, altijd, via Instellingen → Jouw examen. De taal van de app kan anders zijn dan het land van het examen." },
      { q: "Hoe zeg ik op?", a: "In Instellingen op je iPhone → je naam → Abonnementen → Volante. Je houdt Pro tot het einde van de betaalde periode." },
    ],
    ctaTitle: "Tien minuten vandaag.",
    ctaBody: "Je eerste les duurt korter dan een kop koffie.",
  },
}
