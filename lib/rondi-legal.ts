// Rondi legal pages (privacy, terms, support, legal notice) in five languages.
// Written from what the app really does (checked 14-nov-2026 against
// App COnducir/Volante and ~/Desktop/volante-backend; app renamed to Rondi on 19-nov-2026;
// legal audit 23-nov-2026: analisis/lanzamiento/AUDITORIA-LEGAL-WEB.md):
// • No account. Progress, name (optional), country, exam date, province,
//   reminders… stored only on the device (UserDefaults). Settings → delete progress.
//   Exam country is suggested from the device region/language, on the device.
// • No analytics SDK in the app. Local notifications only (optional daily study
//   reminder).
// • Rondi Pro (22-nov-2026): «Until you pass» one-time non-consumable purchase,
//   or monthly / weekly auto-renewing subscriptions. No free trial.
// • AI instructor: POST to our own backend on Vercel with the question (≤500
//   characters), the last turns of the conversation (≤10), country, language,
//   lesson/question id, a random id (random or the RevenueCat app user id) and the IP.
//   Backend → Google Vertex AI (Gemini, location "global"). Upstash Redis keeps daily
//   counters keyed by that id / IP for 2 days and caches the RevenueCat Pro status
//   for ≤5 minutes. Conversations are not stored; logs hold technical metadata only.
//   Server-side PostHog exists in the code but is OFF (no POSTHOG_API_KEY). If it is
//   ever switched on, add it back to sections 3, 10 and 12 of the privacy policy.
// • Purchases: Apple + RevenueCat (random app user id + receipt).
// • Website: Vercel hosting + Vercel Web Analytics (cookieless). No cookies.
//
// Markup inside strings: **bold** and [label](url).

import type { RLang } from "./rondi-content"
import { RONDI } from "./rondi-content"

export type Block = string | { ul: string[] }
export type Section = { h: string; body: Block[] }
export type Doc = { title: string; description: string; summary?: string; sections: Section[] }
export type DocKey = "privacy" | "terms" | "support" | "legal"

const E = RONDI.supportEmail
const MAIL = `[${E}](mailto:${E})`
const C = RONDI.company
const EULA = RONDI.eula
const SUBS = RONDI.manageSubs
const RAP = RONDI.refunds
const AMS = "https://www.apple.com/legal/internet-services/itunes/"
const AEPD = "[aepd.es](https://www.aepd.es)"
const ICO = "[ico.org.uk](https://ico.org.uk)"
const VERCEL_PRIVACY = "https://vercel.com/legal/privacy-policy"

// ── owner data for the legal notice (empty fields are left out until Pau fills them) ──
type OwnerLabels = { company: string; taxId: string; address: string; email: string; registry: string; representative: string; vatId: string; activity: string }
function owner(l: OwnerLabels, form = ""): string[] {
  return [
    `${l.company}: **${C.legalName}**${form}`,
    `${l.taxId}: ${C.taxId}`,
    ...(C.vatId ? [`${l.vatId}: ${C.vatId}`] : []),
    `${l.address}: ${C.address}`,
    ...(C.registry ? [`${l.registry}: ${C.registry}`] : []),
    ...(C.representative ? [`${l.representative}: ${C.representative}`] : []),
    `${l.email}: ${MAIL}`,
    l.activity,
  ]
}

// ── third-party images that appear inside the app screenshots on this website ──
const BYSA3 = "https://creativecommons.org/licenses/by-sa/3.0/"
const BYSA4 = "https://creativecommons.org/licenses/by-sa/4.0/"
const OGL3 = "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
type Credit = { what: string; author: string; licence: string; licenceUrl: string; src: string }
const CREDITS: Credit[] = [
  { what: "“Roundabout in Barakaldo 2”", author: "Tiia Monto", licence: "CC BY-SA 3.0", licenceUrl: BYSA3, src: "https://commons.wikimedia.org/wiki/File:Roundabout_in_Barakaldo_2.jpg" },
  { what: "“Road M-100, M-111, M-106”", author: "Tiia Monto", licence: "CC BY-SA 3.0", licenceUrl: BYSA3, src: "https://commons.wikimedia.org/wiki/File:Road_M-100,_M-111,_M-106.jpg" },
  { what: "“Kreisverkehr in Bayern Aerial fg182”", author: "Fritz Geller-Grimm, unterstützt von Rüdiger Wandke", licence: "CC BY-SA 3.0", licenceUrl: BYSA3, src: "https://commons.wikimedia.org/wiki/File:Kreisverkehr_in_Bayern_Aerial_fg182.jpg" },
  { what: "“L07 888 Capilungo, Kreisverkehr”", author: "Falk2", licence: "CC BY-SA 4.0", licenceUrl: BYSA4, src: "https://commons.wikimedia.org/wiki/File:L07_888_Capilungo,_Kreisverkehr.jpg" },
  { what: "“Italian traffic signs - rotatoria” (II.84)", author: "F l a n k e r", licence: "CC BY-SA 3.0", licenceUrl: BYSA3, src: "https://commons.wikimedia.org/wiki/File:Italian_traffic_signs_-_rotatoria.svg" },
  { what: "“Malden, rotonde bij de Grootveldschelaan foto7 2016-03-26 17.18”", author: "Michielverbeek", licence: "CC BY-SA 4.0", licenceUrl: BYSA4, src: "https://commons.wikimedia.org/wiki/File:Malden,_rotonde_bij_de_Grootveldschelaan_foto7_2016-03-26_17.18.jpg" },
]
const creditLines = (by: string, source: string): string[] =>
  CREDITS.map((c) => `${c.what} · ${by} ${c.author} · [${c.licence}](${c.licenceUrl}) · [${source}](${c.src})`)
const HC_ILLUSTRATION = "[The Highway Code](https://www.gov.uk/guidance/the-highway-code/using-the-road-159-to-203), Department for Transport / DVSA"
const OGL_LINE = `Contains public sector information licensed under the [Open Government Licence v3.0](${OGL3}).`

export const LEGAL: Record<RLang, Record<DocKey, Doc>> = {
  // ───────────────────────────────── ENGLISH ─────────────────────────────────
  en: {
    privacy: {
      title: "Privacy policy",
      description: "Rondi's privacy policy: no account, your progress stays on your iPhone, the AI instructor uses a random identifier, payments go through Apple and this website sets no cookies.",
      summary: "**The short version.** Rondi has no account. Your progress stays on your iPhone. When you ask the AI instructor a question, the question travels with a random identifier to our server, which asks Google's AI (Vertex AI) for the answer; we don't keep the conversation. Payments are handled by Apple. We don't sell your data, show ads or use analytics in the app, and this website sets no cookies.",
      sections: [
        { h: "1. Who is responsible", body: [
          `The data controller for the Rondi app and for this website is **${C.legalName}** (tax ID ${C.taxId}), ${C.address}. For any privacy question or request, write to ${MAIL}. We have not appointed a data protection officer because the law does not require one for our activity.`,
        ] },
        { h: "2. What stays on your iPhone", body: [
          "To work, Rondi saves on your device only (in the app's private storage): the name you choose to give (optional), your exam country, the app language, your exam date and province if you add them, how you like to practise, your daily goal and reminder time, your answers, mock tests, lessons completed, mistakes to review and streak. We have no copy of this information and cannot see it.",
          "The first time you open the app, Rondi suggests your exam country from your iPhone's region and language settings. This happens on the device: the app does not use GPS or ask for location permission.",
          "You can erase it all at any time in **Settings → Delete all my progress**, or by deleting the app.",
        ] },
        { h: "3. The AI instructor (AI coach)", body: [
          "The instructor is an **artificial intelligence system**, not a person. When you use «Ask your question», the app sends to our own server (hosted by Vercel) the following data, and only this:",
          { ul: [
            "the text of your question (up to 500 characters) and the last few messages of that conversation (up to ten);",
            "your exam country and the app language, and the lesson or question you were looking at, if any;",
            "a random identifier created by the app (or the purchase identifier described in section 5), used to count your questions per day and to know whether you have Rondi Pro. It does not contain your name or email, but it is pseudonymous data, not anonymous data;",
            "your IP address, which every internet connection reveals, used only to prevent abuse.",
          ] },
          "Our server looks up the relevant passages in Rondi's own lessons and sends them with your question to **Google Vertex AI** (Gemini models, Google Cloud), which generates the answer; sometimes it first translates the question to search the lessons better. Google processes this data on our behalf as a processor, only to generate the answer and, under its Cloud terms, does not use it to train its models. **We do not store your conversations**: they are not saved on our server, and the conversation you see lives only on your phone.",
          "To enforce the daily limits we keep counters (number of questions per identifier and per IP) in a database (Upstash Redis) that deletes them automatically after 2 days. To know whether you have Rondi Pro, our server asks RevenueCat and remembers the answer for 5 minutes at most. Our server logs record technical data about each answer — identifier, country, language, free or Pro, questions used, size of the answer, response time, errors — but **never the text of your questions**.",
          "Please don't write personal information (your name, ID number, health data…) in your questions: the instructor doesn't need it.",
        ] },
        { h: "4. Notifications", body: [
          "If you switch on the daily study reminder, the app schedules **local notifications** on your iPhone. They are created on the device; we don't use a push notification server and don't receive any token.",
        ] },
        { h: "5. Purchases", body: [
          "Rondi Pro purchases (the one-time “Until you pass” purchase and the monthly and weekly subscriptions) are made through the **App Store**. Apple processes the payment as an independent controller under its own privacy policy; we never receive your card details, name or Apple Account email.",
          "To validate purchases and know whether you have Rondi Pro we use **RevenueCat**, our processor. It receives your App Store receipt (products bought, dates, renewal status), a random app user identifier and the technical data any connection sends (IP address, device model, iOS version, App Store country). It never receives your name or email.",
        ] },
        { h: "6. If you write to us", body: [
          `If you email ${MAIL} — including through the flag on a question, which opens an email with that question already filled in — we receive your email address, your message and whatever you choose to include. We use it only to answer you and fix what you report. Our mailbox is provided by Google (Gmail).`,
        ] },
        { h: "7. This website", body: [
          `This website (www.trempido.com) is hosted by **Vercel**. As with any website, when you visit it the server processes your IP address, browser type, the page requested and the time, to deliver the page and keep it secure; Vercel keeps these logs for a short time ([Vercel's privacy policy](${VERCEL_PRIVACY})).`,
          "We use **Vercel Web Analytics** to count visits per page in aggregate. It does not use cookies or store anything on your device, and it does not identify you: it groups requests using a hash that changes every day and does not keep your IP address.",
          "**This website sets no cookies**, shows no ads and loads no third-party trackers. Fonts are served from our own domain.",
        ] },
        { h: "8. What we don't do", body: [
          { ul: [
            "No account, email or password.",
            "No advertising and no tracking across other companies' apps or websites.",
            "No analytics tool inside the app.",
            "No location, contacts, photos or microphone.",
            "We don't sell or rent your data.",
          ] },
        ] },
        { h: "9. Legal bases", body: [
          { ul: [
            "AI instructor and purchase validation: necessary to provide the service you ask for (Art. 6(1)(b) GDPR).",
            "Counters, IP address, Pro-status cache and technical logs: our legitimate interest in preventing abuse, keeping the service secure and running and controlling its costs (Art. 6(1)(f) GDPR).",
            "Emails: answering your request (Art. 6(1)(b) GDPR) or our legitimate interest in answering messages and fixing reported errors (Art. 6(1)(f) GDPR).",
            "Website logs and visit statistics: our legitimate interest in delivering the website securely and knowing which pages are useful (Art. 6(1)(f) GDPR).",
          ] },
          "You don't have to give us any of this data. Without sending your question, the instructor simply can't answer it; the rest of the app works without it.",
        ] },
        { h: "10. Who receives data", body: [
          "Processors acting on our behalf, under a data processing agreement:",
          { ul: [
            "Vercel Inc. (USA) — hosting of our server and of this website, website statistics.",
            "Google Cloud (Google Ireland Ltd. / Google LLC, USA) — Vertex AI, which generates the instructor's answers.",
            "Upstash, Inc. (USA) — daily counters and the Pro-status cache (deleted after 2 days at most).",
            "RevenueCat, Inc. (USA) — purchase validation and Pro status.",
            "Google (Gmail) — our support mailbox.",
          ] },
          "Apple (Apple Distribution International Ltd., Ireland, and Apple Inc.) receives purchase data as an independent controller when you buy through the App Store. We only disclose data to authorities when the law requires it.",
        ] },
        { h: "11. International transfers", body: [
          "Vertex AI runs on Google's global infrastructure, and Vercel, Upstash, RevenueCat and Google are US companies, so some data may be processed outside the European Economic Area. These transfers rely on the European Commission's adequacy decision for the EU–US Data Privacy Framework for providers certified under it, and otherwise on the Commission's Standard Contractual Clauses (Art. 46(2)(c) GDPR) included in their data processing agreements; for users in the United Kingdom, on the UK Extension to the Data Privacy Framework or the UK Addendum to those clauses. You can ask us for a copy of these safeguards at the address above.",
        ] },
        { h: "12. How long we keep data", body: [
          { ul: [
            "Conversations with the instructor: not stored by us.",
            "Daily counters: 2 days. Pro-status cache: 5 minutes.",
            "Server logs: 30 days at most.",
            "Purchase data at RevenueCat: while Rondi uses that service, unless you ask us to delete it earlier; Apple keeps its own records under its policy.",
            "Emails: while we handle your request and up to 2 years afterwards, then deleted.",
            "Website logs: the short period set by Vercel. Visit statistics are aggregated and do not identify you.",
            "Data on your iPhone: until you delete it or the app.",
          ] },
        ] },
        { h: "13. Your rights", body: [
          `You can request access, rectification, erasure, restriction or portability of your data, and you can **object** at any time to processing based on our legitimate interest, by writing to ${MAIL}. We answer within one month. Because there is no account, tell us roughly when you used the instructor or include the identifier if you have it, and we'll find your data; if we can't link any data to you, we'll tell you.`,
          `You can also complain to the Spanish Data Protection Agency (${AEPD}), to the authority of the EU country where you live or, if you live in the United Kingdom, to the Information Commissioner's Office (${ICO}).`,
        ] },
        { h: "14. Automated decisions", body: [
          "We don't take decisions based solely on automated processing that have legal or similarly significant effects on you (Art. 22 GDPR). The AI instructor generates study answers, and the daily question limits are applied automatically, but neither has legal effects.",
        ] },
        { h: "15. Children", body: [
          "Rondi is meant for people preparing a driving licence. It is not directed at children under 14, and we don't knowingly collect data from them. If you believe a child under 14 has sent us data, write to us and we'll delete it.",
        ] },
        { h: "16. Changes", body: [
          "If the app or this website start handling data differently we will update this page and the date at the top, and if the change is important we'll also tell you in the app.",
        ] },
      ],
    },
    terms: {
      title: "Terms of use",
      description: "Rondi terms of use: Rondi Pro as a one-time purchase or an auto-renewing subscription sold through the App Store, Apple's standard EULA, an AI instructor, study material only, not affiliated with DGT, TÜV/DEKRA, DVSA, the Italian Ministry or CBR.",
      summary: `**In short.** Rondi is a study aid. It is free to start and offers Rondi Pro, billed by Apple, as a one-time purchase or an auto-renewing subscription. The instructor is an AI and can make mistakes. Rondi is not affiliated with any exam authority, and its content does not replace the official rules. Use of the app is also governed by [Apple's standard licence agreement (EULA)](${EULA}). Nothing here takes away your rights as a consumer.`,
      sections: [
        { h: "1. Who we are and what applies", body: [
          `Rondi is provided by **${C.legalName}** (tax ID ${C.taxId}), ${C.address}, contact ${MAIL}. These terms apply to the use of the app together with the [Apple Licensed Application End User License Agreement (standard EULA)](${EULA}); if there is a conflict, the Apple EULA governs your licence to use the app. Purchases in the App Store are also subject to [Apple's Media Services Terms](${AMS}).`,
        ] },
        { h: "2. Rondi Pro", body: [
          { ul: [
            "Rondi Pro comes in three options: **“Until you pass”**, a one-time purchase; a **monthly** subscription; and a **weekly** subscription. There is no free trial. The price (and, for subscriptions, the billing period) is shown in the app, in your local currency and with taxes included, before you confirm.",
            "**“Until you pass”** is a one-time in-app purchase (non-consumable): it is charged to your Apple Account once, when you confirm the purchase, and it does not renew. Despite its name it does not expire when you pass: it unlocks Rondi Pro for good on that Apple Account, and you can get it back on another device or after reinstalling with **Restore purchases**.",
            "The **monthly and weekly plans are auto-renewing subscriptions**. Payment is charged to your Apple Account when you confirm the purchase.",
            "The subscription **renews automatically** for the same period and price unless you cancel it at least 24 hours before the end of the current period. Your account is charged for renewal within the 24 hours before the period ends.",
            `You can manage or cancel your subscription in **Settings → your name → Subscriptions** on your iPhone, or at [apps.apple.com/account/subscriptions](${SUBS}). If you cancel, Pro stays active until the end of the period already paid.`,
            "Purchases are concluded through Apple, which sells and charges on our behalf (in the European Union and the United Kingdom, Apple Distribution International Ltd. acts as our commissionaire) and handles payments, cancellations and refunds.",
            `**Right of withdrawal and refunds.** If you are a consumer in the EU or the UK, Apple's terms let you cancel a purchase within 14 days of receiving the receipt without giving a reason; refunds and cancellations are requested from Apple at [reportaproblem.apple.com](${RAP}) and decided by Apple under [its terms](${AMS}).`,
          ] },
        ] },
        { h: "3. The AI instructor", body: [
          "The instructor in Rondi is an **artificial intelligence system** (Google Gemini models), not a person and not a qualified driving instructor. It generates its answers automatically from Rondi's lessons and can make mistakes or leave things out: when in doubt, check the official source it cites.",
          "It needs an internet connection and has a **daily question limit**, shown in the app: free use includes a few questions a day, and Rondi Pro has a much higher fair-use limit, which is reset every day. Please don't share personal data in your questions.",
        ] },
        { h: "4. Study material, not the official rules", body: [
          "Rondi's lessons, questions, explanations and the instructor's answers are **study material**. We write and review them carefully against the regulations in force in each country, but they may contain errors or become outdated when the rules change. They do not replace the official legislation, the material of the exam authorities or the advice of a driving school, and they are not legal advice.",
          "Rondi does not guarantee that you will pass any exam.",
        ] },
        { h: "5. Not affiliated with any authority", body: [
          "Rondi is independent. It is not affiliated with, endorsed by or connected to the Dirección General de Tráfico (DGT), TÜV, DEKRA, the Driver and Vehicle Standards Agency (DVSA), the Italian Ministry of Infrastructure and Transport (Motorizzazione) or the Centraal Bureau Rijvaardigheidsbewijzen (CBR). The questions are our own, written on the same topics and in the same format as the official exams; they are not the official questions. Names of authorities and organisations, which may be trademarks of their owners, are used only to describe which exam the app prepares.",
        ] },
        { h: "6. Fair use", body: [
          "The app and the instructor are for your personal study. Don't try to extract the content in bulk, get around the limits, attack the service or use the instructor for things unrelated to driving. We may limit the instructor if we detect abuse.",
        ] },
        { h: "7. Intellectual property", body: [
          `The texts, questions, illustrations, design and code of Rondi belong to ${C.legalName} or are used under licence. Official road sign images and some photos are public domain or used under free licences (such as Creative Commons or the Open Government Licence); they are credited with their author and licence inside the app (Settings → Sources and credits) and can be reused under those licences. The credits for the images that appear in the screenshots on this website are in the legal notice.`,
        ] },
        { h: "8. If something doesn't work", body: [
          `You have the legal guarantee of conformity for digital content and services (Directive (EU) 2019/770 and, in Spain, the consumer protection law, TRLGDCU). If Rondi or Rondi Pro doesn't work as described, write to ${MAIL} and we'll fix it; you can also ask Apple for a refund. We provide the updates needed to keep the app working and secure.`,
        ] },
        { h: "9. Liability", body: [
          `${C.legalName} is fully liable for damage caused intentionally or through gross negligence, for death or personal injury, and wherever the law does not allow liability to be limited. In cases of slight negligence we are only liable if we breach an essential obligation of these terms, and only for the foreseeable damage typical of this kind of contract. We are not responsible for exam results, which depend on you. Nothing in these terms limits your rights as a consumer under the law of your country.`,
        ] },
        { h: "10. Changes to these terms", body: [
          "We may update these terms when the app, the law or our plans change; the date at the top shows the current version. If a change matters to you, we'll announce it in the app before it applies. Changes never affect purchases already made, and if you don't agree you can stop using the app and cancel your subscription.",
        ] },
        { h: "11. Law and disputes", body: [
          `These terms are governed by Spanish law, without prejudice to the mandatory consumer protection rules of your country of residence. As a consumer you can bring a claim before the courts of the country where you live. If you have a problem, please write to us first at ${MAIL}. The EU online dispute resolution platform (ODR) was closed on 20 July 2025, and we are not currently part of any alternative dispute resolution scheme.`,
        ] },
      ],
    },
    support: {
      title: "Support",
      description: "Help with Rondi: restore purchases, cancel the subscription, refunds, the AI instructor's daily limit, change exam country or language, delete your progress, privacy requests and contact.",
      summary: `**Need a hand?** Write to ${MAIL} and we'll get back to you, usually within 1–2 working days. Inside the app: Settings → Help.`,
      sections: [
        { h: "Restore purchases", body: [
          "New phone or reinstalled the app? Open Rondi and go to **Settings → Subscription → Restore purchases** (also on the Pro screen). This brings back both the one-time “Until you pass” purchase and an active subscription. Make sure you are signed in with the same Apple Account you bought Rondi Pro with.",
        ] },
        { h: "Cancel or change your subscription", body: [
          `Subscriptions are handled by Apple. On your iPhone open **Settings → your name → Subscriptions → Rondi**, or go to [apps.apple.com/account/subscriptions](${SUBS}). Cancel at least 24 hours before the renewal date to avoid the next charge. This only applies to the monthly and weekly subscriptions: the one-time “Until you pass” purchase does not renew, so there is nothing to cancel.`,
        ] },
        { h: "Refunds and 14-day cancellation", body: [
          `Payments go through Apple, so refunds — and, in the EU and the UK, cancelling a purchase within 14 days — are requested from Apple at [reportaproblem.apple.com](${RAP}). If something in Rondi doesn't work, tell us as well so we can fix it.`,
        ] },
        { h: "The AI instructor's daily limit", body: [
          "The instructor is an AI and has a daily number of questions, shown in the app. When you reach it, it resets the next day. It needs an internet connection; the lessons, questions and signs work offline.",
        ] },
        { h: "Change exam country or language", body: [
          "Go to **Settings → Your test**. «Test country» switches the rules, signs and exam format (Spain, Germany, United Kingdom, Italy, Netherlands). «App language» changes the language of the app; it can be different from the exam country.",
        ] },
        { h: "Delete your progress", body: [
          "Rondi has no account: everything is on your iPhone. Use **Settings → Delete all my progress**, or delete the app.",
        ] },
        { h: "Privacy requests", body: [
          `To access, delete or object to the use of data held on our side (for example, the instructor's counters), write to ${MAIL}. The details are in the privacy policy.`,
        ] },
        { h: "Found a mistake in a question?", body: [
          `Tap the flag on the correction of that question (it opens an email with the question filled in), or write to ${MAIL} with the question and your country. We check every report.`,
        ] },
        { h: "Contact", body: [
          `${MAIL} · ${C.legalName}, ${C.address}.`,
        ] },
      ],
    },
    legal: {
      title: "Legal notice",
      description: "Legal notice for Rondi (Spanish Law 34/2002, LSSI-CE, Art. 10): TREMPIDO S.L., tax ID B75830257, Barcelona, and image credits for this website.",
      sections: [
        { h: "Owner of the app and this website", body: [
          `In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE):`,
          { ul: owner({ company: "Company", taxId: "Tax ID (NIF)", address: "Registered address", email: "Email", registry: "Commercial Registry", representative: "Represented by", vatId: "EU VAT number", activity: "Activity: development and publication of mobile applications." }, " (Spanish limited company, sociedad limitada)") },
        ] },
        { h: "Purpose", body: [
          "This website gives information about the Rondi app and its legal terms. The app is distributed exclusively through Apple's App Store.",
        ] },
        { h: "Intellectual property", body: [
          `The content of this website and of the app (texts, design, logos, screenshots, code) belongs to ${C.legalName} or is used under licence. Reproducing it without permission is not allowed, except for third-party works published under free licences, which anyone may reuse under the terms of their licence. Rondi is not affiliated with any exam authority (DGT, TÜV, DEKRA, DVSA, Motorizzazione, CBR); their names may be trademarks of their owners and are used only descriptively.`,
        ] },
        { h: "Image credits on this website", body: [
          "The app screenshots on this website show some third-party images, reduced and cropped. The road signs are official public-domain designs, except the one listed below. The other images are:",
          { ul: [
            ...creditLines("by", "source"),
            `Roundabout illustration (UK screenshots): ${HC_ILLUSTRATION}. ${OGL_LINE}`,
          ] },
          "The app screenshots that include works under CC BY-SA are shared under the same licence. The full credits for the app are in Rondi, under Settings → Sources and credits.",
        ] },
        { h: "Liability", body: [
          "We try to keep the information accurate and up to date, but, except where the law provides otherwise, we are not liable for errors or for the use made of it. Links to external sites are provided for convenience; we don't control their content.",
        ] },
        { h: "Law and jurisdiction", body: [
          "Spanish law applies. Consumers may go to the courts of their place of residence.",
        ] },
      ],
    },
  },

  // ───────────────────────────────── ESPAÑOL ─────────────────────────────────
  es: {
    privacy: {
      title: "Política de privacidad",
      description: "Privacidad de Rondi: sin cuenta, tu progreso se queda en tu iPhone, el profesor con IA usa un identificador aleatorio, los pagos los gestiona Apple y esta web no usa cookies.",
      summary: "**En resumen.** Rondi no tiene cuenta. Tu progreso se queda en tu iPhone. Cuando preguntas al profesor con IA, la pregunta viaja con un identificador aleatorio a nuestro servidor, que pide la respuesta a la IA de Google (Vertex AI); no guardamos la conversación. Los pagos los gestiona Apple. No vendemos tus datos, no mostramos anuncios ni usamos analítica en la app, y esta web no instala cookies.",
      sections: [
        { h: "1. Responsable del tratamiento", body: [
          `El responsable del tratamiento de la app Rondi y de esta web es **${C.legalName}** (NIF ${C.taxId}), ${C.address}. Para cualquier duda o solicitud sobre privacidad, escribe a ${MAIL}. No hemos designado delegado de protección de datos porque la ley no lo exige para nuestra actividad.`,
        ] },
        { h: "2. Lo que se queda en tu iPhone", body: [
          "Para funcionar, Rondi guarda solo en tu dispositivo (en el almacenamiento privado de la app): el nombre que quieras darle (opcional), el país del examen, el idioma de la app, tu fecha de examen y provincia si las añades, cómo prefieres practicar, tu meta diaria y la hora del recordatorio, tus respuestas, simulacros, clases hechas, fallos por repasar y racha. No tenemos copia de esta información ni podemos verla.",
          "La primera vez que abres la app, Rondi te propone el país del examen a partir de la región y el idioma configurados en tu iPhone. Ocurre en el propio dispositivo: la app no usa el GPS ni pide permiso de ubicación.",
          "Puedes borrarlo todo cuando quieras en **Ajustes → Borrar todo mi progreso**, o eliminando la app.",
        ] },
        { h: "3. El profesor con IA (coach con IA)", body: [
          "El profesor es un **sistema de inteligencia artificial**, no una persona. Cuando usas «Pregunta tu duda», la app envía a nuestro propio servidor (alojado en Vercel) estos datos, y solo estos:",
          { ul: [
            "el texto de tu pregunta (hasta 500 caracteres) y los últimos mensajes de esa conversación (como mucho diez);",
            "el país del examen y el idioma de la app, y la clase o pregunta que estabas viendo, si la hay;",
            "un identificador aleatorio creado por la app (o el identificador de compras del apartado 5), para contar tus preguntas del día y saber si tienes Rondi Pro. No contiene tu nombre ni tu email, pero es un dato seudónimo, no anónimo;",
            "tu dirección IP, que revela cualquier conexión a internet, usada solo para evitar abusos.",
          ] },
          "Nuestro servidor busca los fragmentos relevantes de las clases de Rondi y los envía con tu pregunta a **Google Vertex AI** (modelos Gemini, Google Cloud), que genera la respuesta; a veces, antes, traduce la pregunta para buscar mejor en las clases. Google trata estos datos por cuenta nuestra como encargado del tratamiento, solo para generar la respuesta y, según sus condiciones de Cloud, no los usa para entrenar sus modelos. **No guardamos tus conversaciones**: no se almacenan en nuestro servidor, y la conversación que ves vive solo en tu teléfono.",
          "Para aplicar los límites diarios guardamos contadores (número de preguntas por identificador y por IP) en una base de datos (Upstash Redis) que los borra sola a los 2 días. Para saber si tienes Rondi Pro, nuestro servidor lo consulta a RevenueCat y recuerda la respuesta como mucho 5 minutos. Los registros de nuestro servidor anotan datos técnicos de cada respuesta —identificador, país, idioma, gratis o Pro, preguntas usadas, tamaño de la respuesta, tiempo de respuesta, errores—, pero **nunca el texto de tus preguntas**.",
          "Por favor, no escribas datos personales en tus preguntas (tu nombre, DNI, datos de salud…): el profesor no los necesita.",
        ] },
        { h: "4. Notificaciones", body: [
          "Si activas el recordatorio diario de estudio, la app programa **notificaciones locales** en tu iPhone. Se crean en el propio dispositivo; no usamos un servidor de notificaciones push ni recibimos ningún token.",
        ] },
        { h: "5. Compras", body: [
          "Las compras de Rondi Pro (el pago único «Hasta que apruebes» y las suscripciones mensual y semanal) se hacen a través del **App Store**. Apple trata el pago como responsable independiente, según su propia política de privacidad; nunca recibimos los datos de tu tarjeta, tu nombre ni el email de tu cuenta de Apple.",
          "Para validar las compras y saber si tienes Rondi Pro usamos **RevenueCat**, nuestro encargado del tratamiento. Recibe el recibo del App Store (productos comprados, fechas, estado de la renovación), un identificador aleatorio de usuario de la app y los datos técnicos que envía cualquier conexión (dirección IP, modelo del dispositivo, versión de iOS, país del App Store). Nunca recibe tu nombre ni tu email.",
        ] },
        { h: "6. Si nos escribes", body: [
          `Si nos escribes a ${MAIL} —también con la bandera de una pregunta, que abre un email con esa pregunta ya rellenada— recibimos tu dirección de email, tu mensaje y lo que decidas incluir. Lo usamos solo para contestarte y corregir lo que nos indiques. Nuestro buzón lo presta Google (Gmail).`,
        ] },
        { h: "7. Esta web", body: [
          `Esta web (www.trempido.com) está alojada en **Vercel**. Como en cualquier web, al visitarla el servidor trata tu dirección IP, el tipo de navegador, la página pedida y la hora, para servirte la página y mantenerla segura; Vercel conserva estos registros poco tiempo ([política de privacidad de Vercel](${VERCEL_PRIVACY})).`,
          "Usamos **Vercel Web Analytics** para contar las visitas de cada página de forma agregada. No usa cookies ni guarda nada en tu dispositivo, y no te identifica: agrupa las visitas con un código (hash) que cambia cada día y no conserva tu dirección IP.",
          "**Esta web no instala cookies**, no muestra anuncios ni carga rastreadores de terceros. Las fuentes tipográficas se sirven desde nuestro propio dominio.",
        ] },
        { h: "8. Lo que no hacemos", body: [
          { ul: [
            "Ni cuenta, ni email, ni contraseña.",
            "Ni publicidad ni seguimiento entre apps o webs de otras empresas.",
            "Ninguna herramienta de analítica dentro de la app.",
            "Ni ubicación, ni contactos, ni fotos, ni micrófono.",
            "No vendemos ni alquilamos tus datos.",
          ] },
        ] },
        { h: "9. Bases legales", body: [
          { ul: [
            "Profesor con IA y validación de compras: necesarios para prestar el servicio que pides (art. 6.1.b RGPD).",
            "Contadores, dirección IP, caché del estado Pro y registros técnicos: nuestro interés legítimo en evitar abusos, mantener el servicio seguro y en marcha y controlar su coste (art. 6.1.f RGPD).",
            "Emails: atender tu solicitud (art. 6.1.b RGPD) o nuestro interés legítimo en contestar mensajes y corregir los errores que nos avisas (art. 6.1.f RGPD).",
            "Registros y estadísticas de visitas de la web: nuestro interés legítimo en servir la web de forma segura y saber qué páginas son útiles (art. 6.1.f RGPD).",
          ] },
          "No estás obligado a darnos ninguno de estos datos. Sin enviar tu pregunta, el profesor simplemente no puede responderla; el resto de la app funciona sin ellos.",
        ] },
        { h: "10. Quién recibe los datos", body: [
          "Encargados del tratamiento que actúan por cuenta nuestra, con contrato de encargo:",
          { ul: [
            "Vercel Inc. (EE. UU.) — alojamiento de nuestro servidor y de esta web, estadísticas de la web.",
            "Google Cloud (Google Ireland Ltd. / Google LLC, EE. UU.) — Vertex AI, que genera las respuestas del profesor.",
            "Upstash, Inc. (EE. UU.) — contadores diarios y caché del estado Pro (se borran como mucho a los 2 días).",
            "RevenueCat, Inc. (EE. UU.) — validación de compras y estado Pro.",
            "Google (Gmail) — nuestro buzón de soporte.",
          ] },
          "Apple (Apple Distribution International Ltd., Irlanda, y Apple Inc.) recibe los datos de compra como responsable independiente cuando compras en el App Store. Solo comunicamos datos a autoridades cuando la ley lo exige.",
        ] },
        { h: "11. Transferencias internacionales", body: [
          "Vertex AI funciona sobre la infraestructura global de Google, y Vercel, Upstash, RevenueCat y Google son empresas estadounidenses, así que algunos datos pueden tratarse fuera del Espacio Económico Europeo. Estas transferencias se basan en la decisión de adecuación de la Comisión Europea sobre el Marco de Privacidad de Datos UE-EE. UU. para los proveedores adheridos a él y, en otro caso, en las Cláusulas Contractuales Tipo de la Comisión (art. 46.2.c RGPD) incluidas en sus contratos de encargo; para usuarios del Reino Unido, en la extensión británica del Marco o en el anexo británico a esas cláusulas. Puedes pedirnos una copia de estas garantías en la dirección de arriba.",
        ] },
        { h: "12. Cuánto tiempo los guardamos", body: [
          { ul: [
            "Conversaciones con el profesor: no las guardamos.",
            "Contadores diarios: 2 días. Caché del estado Pro: 5 minutos.",
            "Registros del servidor: como máximo 30 días.",
            "Datos de compra en RevenueCat: mientras Rondi use ese servicio, salvo que nos pidas borrarlos antes; Apple conserva sus propios registros según su política.",
            "Emails: mientras atendemos tu solicitud y hasta 2 años después; luego se borran.",
            "Registros de la web: el plazo corto que fija Vercel. Las estadísticas de visitas son agregadas y no te identifican.",
            "Datos de tu iPhone: hasta que los borres o elimines la app.",
          ] },
        ] },
        { h: "13. Tus derechos", body: [
          `Puedes ejercer los derechos de acceso, rectificación, supresión, limitación y portabilidad, y **oponerte** en cualquier momento a los tratamientos basados en nuestro interés legítimo, escribiendo a ${MAIL}. Respondemos en el plazo de un mes. Como no hay cuenta, indícanos aproximadamente cuándo usaste el profesor o el identificador si lo tienes, y buscaremos tus datos; si no podemos asociarte ningún dato, te lo diremos.`,
          `También puedes reclamar ante la Agencia Española de Protección de Datos (${AEPD}) o ante la autoridad de protección de datos del país de la UE donde vivas; si vives en el Reino Unido, ante la Information Commissioner's Office (${ICO}).`,
        ] },
        { h: "14. Decisiones automatizadas", body: [
          "No tomamos decisiones basadas únicamente en tratamientos automatizados que produzcan efectos jurídicos sobre ti o te afecten de forma similar (art. 22 RGPD). El profesor con IA genera respuestas de estudio y los límites diarios de preguntas se aplican de forma automática, pero ninguno tiene efectos jurídicos.",
        ] },
        { h: "15. Menores", body: [
          "Rondi está pensada para quien prepara el carnet de conducir. No va dirigida a menores de 14 años (art. 7 LOPDGDD) y no recogemos conscientemente datos suyos. Si crees que un menor de 14 años nos ha enviado datos, escríbenos y los borraremos.",
        ] },
        { h: "16. Cambios", body: [
          "Si la app o esta web empiezan a tratar datos de otra forma, actualizaremos esta página y la fecha de arriba, y si el cambio es importante también te avisaremos en la app.",
        ] },
      ],
    },
    terms: {
      title: "Términos de uso",
      description: "Términos de Rondi: Rondi Pro como pago único o suscripción con renovación automática vendida a través del App Store, EULA estándar de Apple, profesor con IA, material de estudio, sin relación con la DGT, TÜV/DEKRA, DVSA, el Ministerio italiano ni el CBR.",
      summary: `**En resumen.** Rondi es una ayuda para estudiar. Se empieza gratis y ofrece Rondi Pro, que cobra Apple, como pago único o como suscripción con renovación automática. El profesor es una IA y puede equivocarse. Rondi no está afiliada a ninguna autoridad de exámenes y su contenido no sustituye a la normativa oficial. El uso de la app se rige también por el [contrato de licencia estándar de Apple (EULA)](${EULA}). Nada de esto te quita tus derechos como consumidor.`,
      sections: [
        { h: "1. Quiénes somos y qué se aplica", body: [
          `Rondi la ofrece **${C.legalName}** (NIF ${C.taxId}), ${C.address}, contacto ${MAIL}. Estos términos se aplican al uso de la app junto con el [Contrato de licencia de usuario final de aplicaciones con licencia de Apple (EULA estándar)](${EULA}); si hubiera contradicción, tu licencia de uso de la app se rige por el EULA de Apple. Las compras en el App Store se rigen además por las [Condiciones de los Servicios Multimedia de Apple](${AMS}).`,
        ] },
        { h: "2. Rondi Pro", body: [
          { ul: [
            "Rondi Pro tiene tres opciones: **«Hasta que apruebes»**, un pago único; una suscripción **mensual**, y una suscripción **semanal**. No hay periodo de prueba gratuito. El precio (y, en las suscripciones, el periodo de cobro) se muestra en la app, en tu moneda y con impuestos incluidos, antes de confirmar.",
            "**«Hasta que apruebes»** es una compra única dentro de la app (no consumible): se cobra una sola vez a tu cuenta de Apple al confirmar la compra y no se renueva. Pese a su nombre, no caduca cuando apruebas: desbloquea Rondi Pro para siempre en esa cuenta de Apple, y puedes recuperarla en otro dispositivo o tras reinstalar la app con **Restaurar compras**.",
            "Los **planes mensual y semanal son suscripciones con renovación automática**. El pago se carga a tu cuenta de Apple al confirmar la compra.",
            "La suscripción **se renueva sola** por el mismo periodo y precio salvo que la canceles al menos 24 horas antes de que acabe el periodo en curso. La renovación se cobra dentro de las 24 horas anteriores al final del periodo.",
            `Puedes gestionar o cancelar la suscripción en **Ajustes → tu nombre → Suscripciones** del iPhone, o en [apps.apple.com/account/subscriptions](${SUBS}). Si cancelas, Pro sigue activo hasta el final del periodo ya pagado.`,
            "Las compras se hacen a través de Apple, que vende y cobra por cuenta nuestra (en la Unión Europea y el Reino Unido, Apple Distribution International Ltd. actúa como nuestro comisionista) y gestiona los pagos, las cancelaciones y los reembolsos.",
            `**Desistimiento y reembolsos.** Si eres consumidor en la UE o el Reino Unido, las condiciones de Apple te permiten cancelar una compra en los 14 días siguientes a recibir el recibo sin dar ninguna razón; los reembolsos y cancelaciones se piden a Apple en [reportaproblem.apple.com](${RAP}) y los resuelve Apple según [sus condiciones](${AMS}).`,
          ] },
        ] },
        { h: "3. El profesor con IA", body: [
          "El profesor de Rondi es un **sistema de inteligencia artificial** (modelos Gemini de Google), no una persona ni un profesor de autoescuela titulado. Genera sus respuestas automáticamente a partir de las clases de Rondi y puede equivocarse u omitir cosas: ante la duda, consulta la fuente oficial que cita.",
          "Necesita conexión a internet y tiene un **límite diario de preguntas**, que se muestra en la app: el uso gratis incluye unas pocas preguntas al día y Rondi Pro tiene un límite de uso razonable mucho más alto, que se renueva cada día. Por favor, no compartas datos personales en tus preguntas.",
        ] },
        { h: "4. Material de estudio, no la normativa oficial", body: [
          "Las clases, preguntas, explicaciones y respuestas del profesor de Rondi son **material de estudio**. Las escribimos y revisamos con cuidado según la normativa vigente de cada país, pero pueden contener errores o quedarse desfasadas cuando cambian las normas. No sustituyen a la legislación oficial, al material de las autoridades de examen ni al consejo de una autoescuela, y no son asesoramiento jurídico.",
          "Rondi no garantiza que apruebes ningún examen.",
        ] },
        { h: "5. Sin relación con ninguna autoridad", body: [
          "Rondi es independiente. No está afiliada, avalada ni vinculada a la Dirección General de Tráfico (DGT), TÜV, DEKRA, la Driver and Vehicle Standards Agency (DVSA), el Ministerio de Infraestructuras y Transportes de Italia (Motorizzazione) ni el Centraal Bureau Rijvaardigheidsbewijzen (CBR). Las preguntas son nuestras, escritas sobre los mismos temas y con el mismo formato que los exámenes oficiales; no son las preguntas oficiales. Los nombres de autoridades y organizaciones, que pueden ser marcas de sus titulares, se usan solo para indicar qué examen prepara la app.",
        ] },
        { h: "6. Uso razonable", body: [
          "La app y el profesor son para tu estudio personal. No intentes extraer el contenido en masa, saltarte los límites, atacar el servicio ni usar el profesor para cosas que no tengan que ver con conducir. Podemos limitar el profesor si detectamos abusos.",
        ] },
        { h: "7. Propiedad intelectual", body: [
          `Los textos, preguntas, ilustraciones, diseño y código de Rondi pertenecen a ${C.legalName} o se usan con licencia. Las imágenes de señales oficiales y algunas fotos son de dominio público o tienen licencias libres (como Creative Commons o la Open Government Licence); dentro de la app figuran con su autor y su licencia (Ajustes → Fuentes y créditos) y pueden reutilizarse según esas licencias. Los créditos de las imágenes que aparecen en las capturas de esta web están en el aviso legal.`,
        ] },
        { h: "8. Si algo no funciona", body: [
          `Tienes la garantía legal de conformidad de los contenidos y servicios digitales (Directiva (UE) 2019/770 y, en España, el texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios). Si Rondi o Rondi Pro no funcionan como se describe, escríbenos a ${MAIL} y lo arreglaremos; también puedes pedir el reembolso a Apple. Publicamos las actualizaciones necesarias para que la app siga funcionando y sea segura.`,
        ] },
        { h: "9. Responsabilidad", body: [
          `${C.legalName} responde sin limitación de los daños causados con dolo o culpa grave, de los daños por muerte o lesiones y siempre que la ley no permita limitar la responsabilidad. En caso de culpa leve, solo respondemos si incumplimos una obligación esencial de estos términos y solo por el daño previsible y típico de este tipo de contrato. No respondemos de los resultados de los exámenes, que dependen de ti. Nada de estos términos limita tus derechos como consumidor según la ley de tu país.`,
        ] },
        { h: "10. Cambios en estos términos", body: [
          "Podemos actualizar estos términos cuando cambien la app, la ley o nuestros planes; la fecha de arriba indica la versión vigente. Si un cambio te afecta, lo avisaremos en la app antes de que se aplique. Los cambios nunca afectan a compras ya hechas, y si no estás de acuerdo puedes dejar de usar la app y cancelar tu suscripción.",
        ] },
        { h: "11. Ley aplicable y reclamaciones", body: [
          `Estos términos se rigen por la ley española, sin perjuicio de las normas imperativas de protección de los consumidores de tu país de residencia. Como consumidor puedes reclamar ante los tribunales del país donde vives. Si tienes un problema, escríbenos primero a ${MAIL}. La plataforma europea de resolución de litigios en línea (ODR) cerró el 20 de julio de 2025, y actualmente no estamos adheridos a ningún sistema de resolución alternativa de litigios ni a la Junta Arbitral de Consumo.`,
        ] },
      ],
    },
    support: {
      title: "Soporte",
      description: "Ayuda con Rondi: restaurar compras, cancelar la suscripción, reembolsos, el límite diario del profesor con IA, cambiar de país o idioma del examen, borrar tu progreso, privacidad y contacto.",
      summary: `**¿Necesitas ayuda?** Escríbenos a ${MAIL} y te contestamos, normalmente en 1–2 días laborables. Dentro de la app: Ajustes → Ayuda.`,
      sections: [
        { h: "Restaurar compras", body: [
          "¿Móvil nuevo o has reinstalado la app? Abre Rondi y ve a **Ajustes → Suscripción → Restaurar compras** (también está en la pantalla de Pro). Recupera tanto el pago único «Hasta que apruebes» como una suscripción activa. Asegúrate de usar la misma cuenta de Apple con la que compraste Rondi Pro.",
        ] },
        { h: "Cancelar o cambiar la suscripción", body: [
          `Las suscripciones las gestiona Apple. En el iPhone abre **Ajustes → tu nombre → Suscripciones → Rondi**, o entra en [apps.apple.com/account/subscriptions](${SUBS}). Cancela al menos 24 horas antes de la renovación para evitar el siguiente cobro. Esto solo aplica a las suscripciones mensual y semanal: el pago único «Hasta que apruebes» no se renueva, así que no hay nada que cancelar.`,
        ] },
        { h: "Reembolsos y desistimiento en 14 días", body: [
          `Los pagos pasan por Apple, así que los reembolsos —y, en la UE y el Reino Unido, cancelar una compra en los 14 días siguientes— se piden a Apple en [reportaproblem.apple.com](${RAP}). Si algo de Rondi no funciona, cuéntanoslo también para que lo arreglemos.`,
        ] },
        { h: "El límite diario del profesor con IA", body: [
          "El profesor es una IA y tiene un número de preguntas al día, que se muestra en la app. Cuando llegas al límite, se renueva al día siguiente. Necesita conexión a internet; las clases, las preguntas y las señales funcionan sin conexión.",
        ] },
        { h: "Cambiar de país o idioma del examen", body: [
          "Ve a **Ajustes → Tu examen**. «País del examen» cambia las normas, las señales y el formato del examen (España, Alemania, Reino Unido, Italia, Países Bajos). «Idioma de la app» cambia el idioma de la app; puede ser distinto del país del examen.",
        ] },
        { h: "Borrar tu progreso", body: [
          "Rondi no tiene cuenta: todo está en tu iPhone. Usa **Ajustes → Borrar todo mi progreso**, o elimina la app.",
        ] },
        { h: "Solicitudes de privacidad", body: [
          `Para acceder, borrar u oponerte al uso de los datos que tenemos de nuestro lado (por ejemplo, los contadores del profesor), escribe a ${MAIL}. Los detalles están en la política de privacidad.`,
        ] },
        { h: "¿Has visto un error en una pregunta?", body: [
          `Toca la bandera en la corrección de esa pregunta (abre un email con la pregunta ya rellenada), o escribe a ${MAIL} con la pregunta y tu país. Revisamos cada aviso.`,
        ] },
        { h: "Contacto", body: [
          `${MAIL} · ${C.legalName}, ${C.address}.`,
        ] },
      ],
    },
    legal: {
      title: "Aviso legal",
      description: "Aviso legal de Rondi (art. 10 de la Ley 34/2002, LSSI-CE): TREMPIDO S.L., NIF B75830257, Barcelona, y créditos de las imágenes de esta web.",
      sections: [
        { h: "Titular de la app y de esta web", body: [
          "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE):",
          { ul: owner({ company: "Sociedad", taxId: "NIF", address: "Domicilio social", email: "Correo electrónico", registry: "Datos registrales", representative: "Representante", vatId: "NIF-IVA", activity: "Actividad: desarrollo y publicación de aplicaciones móviles." }) },
        ] },
        { h: "Objeto", body: [
          "Esta web informa sobre la app Rondi y sus condiciones legales. La app se distribuye exclusivamente a través del App Store de Apple.",
        ] },
        { h: "Propiedad intelectual e industrial", body: [
          `Los contenidos de esta web y de la app (textos, diseño, logotipos, capturas, código) pertenecen a ${C.legalName} o se usan con licencia. No se permite su reproducción sin autorización, salvo la de obras de terceros publicadas con licencias libres, que cualquiera puede reutilizar en los términos de su licencia. Rondi no está vinculada a ninguna autoridad de examen (DGT, TÜV, DEKRA, DVSA, Motorizzazione, CBR); sus nombres pueden ser marcas de sus titulares y se usan solo de forma descriptiva.`,
        ] },
        { h: "Créditos de las imágenes de esta web", body: [
          "Las capturas de la app que aparecen en esta web muestran algunas imágenes de terceros, reducidas y recortadas. Las señales de tráfico son diseños oficiales de dominio público, salvo la que se indica abajo. Las demás imágenes son:",
          { ul: [
            ...creditLines("autor:", "fuente"),
            `Ilustración de la rotonda (capturas del Reino Unido): ${HC_ILLUSTRATION}. ${OGL_LINE}`,
          ] },
          "Las capturas de la app que incluyen obras CC BY-SA se comparten con la misma licencia. Los créditos completos de la app están en Rondi, en Ajustes → Fuentes y créditos.",
        ] },
        { h: "Responsabilidad", body: [
          "Procuramos que la información sea correcta y esté al día, pero, salvo que la ley disponga otra cosa, no respondemos de posibles errores ni del uso que se haga de ella. Los enlaces a webs externas se ofrecen por comodidad; no controlamos su contenido.",
        ] },
        { h: "Ley aplicable y jurisdicción", body: [
          "Se aplica la legislación española. Los consumidores pueden acudir a los tribunales de su domicilio.",
        ] },
      ],
    },
  },

  // ───────────────────────────────── DEUTSCH ─────────────────────────────────
  de: {
    privacy: {
      title: "Datenschutzerklärung",
      description: "Datenschutz bei Rondi: kein Konto, dein Fortschritt bleibt auf deinem iPhone, der KI-Fahrlehrer nutzt eine zufällige Kennung, Zahlungen laufen über Apple, und diese Website setzt keine Cookies.",
      summary: "**Kurz gesagt.** Rondi hat kein Konto. Dein Fortschritt bleibt auf deinem iPhone. Wenn du den KI-Fahrlehrer fragst, geht die Frage mit einer zufälligen Kennung an unseren Server, der die Antwort bei Googles KI (Vertex AI) anfragt; das Gespräch speichern wir nicht. Zahlungen wickelt Apple ab. Wir verkaufen keine Daten, zeigen keine Werbung, nutzen in der App keine Analyse-Tools, und diese Website setzt keine Cookies.",
      sections: [
        { h: "1. Verantwortlicher", body: [
          `Verantwortlich im Sinne der DSGVO für die App Rondi und diese Website ist die **${C.legalName}** (Steuer-Nr. ${C.taxId}), ${C.address}. Für Fragen oder Anliegen zum Datenschutz schreib an ${MAIL}. Einen Datenschutzbeauftragten haben wir nicht benannt, weil das Gesetz es für unsere Tätigkeit nicht verlangt.`,
        ] },
        { h: "2. Was auf deinem iPhone bleibt", body: [
          "Damit die App funktioniert, speichert Rondi nur auf deinem Gerät (im privaten Speicher der App): den Namen, den du angibst (optional), dein Prüfungsland, die App-Sprache, Prüfungstermin und Region, falls du sie einträgst, wie du üben möchtest, dein Tagesziel und die Erinnerungszeit, deine Antworten, Simulationen, erledigte Lektionen, zu wiederholende Fehler und deine Serie. Wir haben keine Kopie dieser Daten und können sie nicht einsehen.",
          "Beim ersten Öffnen schlägt Rondi dein Prüfungsland anhand der Region und Sprache vor, die auf deinem iPhone eingestellt sind. Das passiert auf dem Gerät: Die App nutzt kein GPS und fragt nicht nach deinem Standort.",
          "Du kannst alles jederzeit unter **Einstellungen → Meinen ganzen Fortschritt löschen** oder durch Löschen der App entfernen.",
        ] },
        { h: "3. Der KI-Fahrlehrer (KI-Coach)", body: [
          "Der Fahrlehrer ist ein **KI-System**, kein Mensch. Wenn du «Stell deine Frage» nutzt, sendet die App an unseren eigenen Server (gehostet bei Vercel) folgende Daten – und nur diese:",
          { ul: [
            "den Text deiner Frage (bis zu 500 Zeichen) und die letzten Nachrichten dieses Gesprächs (höchstens zehn);",
            "dein Prüfungsland und die App-Sprache sowie ggf. die Lektion oder Frage, die du gerade angesehen hast;",
            "eine von der App erzeugte zufällige Kennung (oder die Kauf-Kennung aus Abschnitt 5), um deine Fragen pro Tag zu zählen und zu erkennen, ob du Rondi Pro hast. Sie enthält weder Namen noch E-Mail, ist aber ein pseudonymes, kein anonymes Datum;",
            "deine IP-Adresse, die jede Internetverbindung übermittelt, nur zur Missbrauchsabwehr.",
          ] },
          "Unser Server sucht die passenden Abschnitte in den Lektionen von Rondi und sendet sie mit deiner Frage an **Google Vertex AI** (Gemini-Modelle, Google Cloud), das die Antwort erzeugt; manchmal wird die Frage vorher übersetzt, um besser in den Lektionen zu suchen. Google verarbeitet diese Daten in unserem Auftrag als Auftragsverarbeiter, nur um die Antwort zu erzeugen, und nutzt sie laut seinen Cloud-Bedingungen nicht zum Training seiner Modelle. **Wir speichern deine Gespräche nicht**: Sie werden auf unserem Server nicht abgelegt, und das Gespräch, das du siehst, existiert nur auf deinem Telefon.",
          "Für die Tageslimits speichern wir Zähler (Anzahl der Fragen pro Kennung und pro IP) in einer Datenbank (Upstash Redis), die sie nach 2 Tagen automatisch löscht. Ob du Rondi Pro hast, fragt unser Server bei RevenueCat ab und merkt sich die Antwort höchstens 5 Minuten. Unsere Server-Logs erfassen technische Daten zu jeder Antwort – Kennung, Land, Sprache, kostenlos oder Pro, genutzte Fragen, Länge der Antwort, Antwortzeit, Fehler –, aber **niemals den Text deiner Fragen**.",
          "Bitte schreib keine persönlichen Daten (Name, Ausweisnummer, Gesundheitsdaten …) in deine Fragen: Der Fahrlehrer braucht sie nicht.",
        ] },
        { h: "4. Mitteilungen", body: [
          "Wenn du die tägliche Lern-Erinnerung einschaltest, plant die App **lokale Mitteilungen** auf deinem iPhone. Sie entstehen auf dem Gerät; wir nutzen keinen Push-Server und erhalten kein Token.",
        ] },
        { h: "5. Käufe", body: [
          "Käufe von Rondi Pro (der Einmalkauf „Bis du bestehst“ sowie Monats- und Wochenabo) laufen über den **App Store**. Apple verarbeitet die Zahlung als eigenständiger Verantwortlicher nach seiner eigenen Datenschutzrichtlinie; deine Zahlungsdaten, deinen Namen oder die E-Mail deines Apple-Accounts erhalten wir nie.",
          "Zur Prüfung der Käufe und deines Pro-Status nutzen wir **RevenueCat** als Auftragsverarbeiter. RevenueCat erhält deinen App-Store-Beleg (gekaufte Produkte, Daten, Verlängerungsstatus), eine zufällige App-Nutzerkennung und die technischen Daten, die jede Verbindung mitsendet (IP-Adresse, Gerätemodell, iOS-Version, App-Store-Land). Deinen Namen oder deine E-Mail erhält RevenueCat nie.",
        ] },
        { h: "6. Wenn du uns schreibst", body: [
          `Wenn du an ${MAIL} schreibst – auch über die Fahne bei einer Frage, die eine E-Mail mit dieser Frage öffnet –, erhalten wir deine E-Mail-Adresse, deine Nachricht und alles, was du hinzufügst. Wir nutzen das nur, um dir zu antworten und Gemeldetes zu korrigieren. Unser Postfach stellt Google (Gmail) bereit.`,
        ] },
        { h: "7. Diese Website", body: [
          `Diese Website (www.trempido.com) wird bei **Vercel** gehostet. Wie bei jeder Website verarbeitet der Server beim Besuch deine IP-Adresse, den Browsertyp, die aufgerufene Seite und die Uhrzeit, um die Seite auszuliefern und sicher zu betreiben; Vercel speichert diese Logs nur kurz ([Datenschutzerklärung von Vercel](${VERCEL_PRIVACY})).`,
          "Wir nutzen **Vercel Web Analytics**, um Seitenaufrufe zusammengefasst zu zählen. Es verwendet keine Cookies, speichert nichts auf deinem Gerät und identifiziert dich nicht: Aufrufe werden über einen täglich wechselnden Hash gruppiert, deine IP-Adresse wird nicht gespeichert.",
          "**Diese Website setzt keine Cookies**, zeigt keine Werbung und lädt keine Tracker von Dritten. Die Schriften werden von unserer eigenen Domain geladen.",
        ] },
        { h: "8. Was wir nicht tun", body: [
          { ul: [
            "Kein Konto, keine E-Mail, kein Passwort.",
            "Keine Werbung und kein Tracking über Apps oder Websites anderer Unternehmen.",
            "Kein Analyse-Tool in der App.",
            "Kein Standort, keine Kontakte, keine Fotos, kein Mikrofon.",
            "Wir verkaufen oder vermieten deine Daten nicht.",
          ] },
        ] },
        { h: "9. Rechtsgrundlagen", body: [
          { ul: [
            "KI-Fahrlehrer und Prüfung der Käufe: zur Erbringung des gewünschten Dienstes erforderlich (Art. 6 Abs. 1 lit. b DSGVO).",
            "Zähler, IP-Adresse, Zwischenspeicher des Pro-Status und technische Logs: unser berechtigtes Interesse, Missbrauch zu verhindern, den Dienst sicher zu betreiben und seine Kosten zu kontrollieren (Art. 6 Abs. 1 lit. f DSGVO).",
            "E-Mails: Bearbeitung deiner Anfrage (Art. 6 Abs. 1 lit. b DSGVO) oder unser berechtigtes Interesse, Nachrichten zu beantworten und gemeldete Fehler zu beheben (Art. 6 Abs. 1 lit. f DSGVO).",
            "Logs und Besuchsstatistik der Website: unser berechtigtes Interesse, die Website sicher auszuliefern und zu wissen, welche Seiten nützlich sind (Art. 6 Abs. 1 lit. f DSGVO).",
          ] },
          "Du bist nicht verpflichtet, uns diese Daten zu geben. Ohne deine Frage kann der Fahrlehrer sie schlicht nicht beantworten; der Rest der App funktioniert ohne sie.",
        ] },
        { h: "10. Empfänger", body: [
          "Auftragsverarbeiter, die in unserem Auftrag und mit Auftragsverarbeitungsvertrag tätig sind:",
          { ul: [
            "Vercel Inc. (USA) – Hosting unseres Servers und dieser Website, Website-Statistik.",
            "Google Cloud (Google Ireland Ltd. / Google LLC, USA) – Vertex AI, erzeugt die Antworten des Fahrlehrers.",
            "Upstash, Inc. (USA) – Tageszähler und Zwischenspeicher des Pro-Status (spätestens nach 2 Tagen gelöscht).",
            "RevenueCat, Inc. (USA) – Prüfung der Käufe und Pro-Status.",
            "Google (Gmail) – unser Support-Postfach.",
          ] },
          "Apple (Apple Distribution International Ltd., Irland, und Apple Inc.) erhält Kaufdaten als eigenständiger Verantwortlicher, wenn du im App Store kaufst. Behörden geben wir Daten nur, wenn das Gesetz es verlangt.",
        ] },
        { h: "11. Übermittlung in Drittländer", body: [
          "Vertex AI läuft auf der weltweiten Infrastruktur von Google, und Vercel, Upstash, RevenueCat und Google sind US-Unternehmen; einige Daten können daher außerhalb des Europäischen Wirtschaftsraums verarbeitet werden. Grundlage ist der Angemessenheitsbeschluss der Europäischen Kommission zum EU-US Data Privacy Framework für dort zertifizierte Anbieter, andernfalls die in ihren Auftragsverarbeitungsverträgen enthaltenen Standardvertragsklauseln der Kommission (Art. 46 Abs. 2 lit. c DSGVO); für Nutzer im Vereinigten Königreich die britische Erweiterung des Frameworks bzw. der britische Zusatz zu diesen Klauseln. Eine Kopie dieser Garantien kannst du bei uns anfordern.",
        ] },
        { h: "12. Speicherdauer", body: [
          { ul: [
            "Gespräche mit dem Fahrlehrer: speichern wir nicht.",
            "Tageszähler: 2 Tage. Zwischenspeicher des Pro-Status: 5 Minuten.",
            "Server-Logs: höchstens 30 Tage.",
            "Kaufdaten bei RevenueCat: solange Rondi diesen Dienst nutzt, sofern du nicht vorher die Löschung verlangst; Apple bewahrt eigene Unterlagen nach seinen Richtlinien auf.",
            "E-Mails: solange wir dein Anliegen bearbeiten und bis zu 2 Jahre danach, dann gelöscht.",
            "Website-Logs: die kurze von Vercel festgelegte Frist. Die Besuchsstatistik ist zusammengefasst und identifiziert dich nicht.",
            "Daten auf deinem iPhone: bis du sie oder die App löschst.",
          ] },
        ] },
        { h: "13. Deine Rechte", body: [
          `Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Datenübertragbarkeit und kannst Verarbeitungen, die auf unserem berechtigten Interesse beruhen, jederzeit **widersprechen** – schreib einfach an ${MAIL}. Wir antworten innerhalb eines Monats. Da es kein Konto gibt, nenne uns ungefähr, wann du den Fahrlehrer genutzt hast, oder die Kennung, falls du sie hast; dann suchen wir deine Daten. Können wir dir keine Daten zuordnen, sagen wir es dir.`,
          `Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren, etwa der deines Bundeslandes ([Liste der Aufsichtsbehörden](https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html)) oder der spanischen AEPD (${AEPD}).`,
        ] },
        { h: "14. Automatisierte Entscheidungen", body: [
          "Wir treffen keine ausschließlich automatisierten Entscheidungen, die dir gegenüber rechtliche Wirkung entfalten oder dich in ähnlicher Weise erheblich beeinträchtigen (Art. 22 DSGVO). Der KI-Fahrlehrer erzeugt Lernantworten, und die täglichen Fragelimits greifen automatisch, aber beides hat keine rechtliche Wirkung.",
        ] },
        { h: "15. Kinder", body: [
          "Rondi richtet sich an Menschen, die den Führerschein machen. Die App richtet sich nicht an Kinder unter 14 Jahren, und wir erheben wissentlich keine Daten von ihnen. Wenn du glaubst, dass uns ein Kind unter 14 Jahren Daten geschickt hat, schreib uns, und wir löschen sie.",
        ] },
        { h: "16. Änderungen", body: [
          "Wenn die App oder diese Website Daten anders verarbeiten, aktualisieren wir diese Seite und das Datum oben; bei wichtigen Änderungen informieren wir dich auch in der App.",
        ] },
      ],
    },
    terms: {
      title: "Nutzungsbedingungen (AGB)",
      description: "Nutzungsbedingungen von Rondi: Rondi Pro als Einmalkauf oder automatisch verlängerndes Abo über den App Store, Standard-EULA von Apple, KI-Fahrlehrer, Lernmaterial, keine Verbindung zu TÜV/DEKRA, DGT, DVSA, Motorizzazione oder CBR.",
      summary: `**Kurz gesagt.** Rondi ist eine Lernhilfe. Der Einstieg ist kostenlos; Rondi Pro gibt es als Einmalkauf oder als automatisch verlängerndes Abo, abgerechnet von Apple. Der Fahrlehrer ist eine KI und kann sich irren. Rondi steht in keiner Verbindung zu Prüfungsstellen, und die Inhalte ersetzen nicht die amtlichen Vorschriften. Für die Nutzung gilt außerdem die [Standard-Lizenzvereinbarung von Apple (EULA)](${EULA}). Deine Verbraucherrechte bleiben in jedem Fall unberührt.`,
      sections: [
        { h: "1. Anbieter und Geltung", body: [
          `Rondi wird von der **${C.legalName}** (Steuer-Nr. ${C.taxId}), ${C.address}, angeboten, Kontakt ${MAIL}. Diese Bedingungen gelten für die Nutzung der App zusammen mit der [Lizenzvereinbarung für lizenzierte Apple-Apps (Standard-EULA)](${EULA}); bei Widersprüchen gilt für deine Nutzungslizenz die EULA von Apple. Für Käufe im App Store gelten zusätzlich die [Bedingungen für Apple-Mediendienste](${AMS}).`,
        ] },
        { h: "2. Rondi Pro", body: [
          { ul: [
            "Rondi Pro gibt es in drei Varianten: **„Bis du bestehst“** als Einmalkauf, als **Monatsabo** und als **Wochenabo**. Eine kostenlose Testphase gibt es nicht. Der Preis (und bei Abos der Abrechnungszeitraum) wird in der App in deiner Währung und inklusive Steuern angezeigt, bevor du bestätigst.",
            "**„Bis du bestehst“** ist ein einmaliger In-App-Kauf (nicht verbrauchbar): Er wird deinem Apple-Account einmal bei Bestätigung des Kaufs belastet und verlängert sich nicht. Trotz des Namens endet er nicht, wenn du bestehst: Er schaltet Rondi Pro dauerhaft für diesen Apple-Account frei; auf einem anderen Gerät oder nach einer Neuinstallation holst du ihn mit **Käufe wiederherstellen** zurück.",
            "**Monats- und Wochenabo verlängern sich automatisch.** Die Zahlung wird bei Bestätigung des Kaufs deinem Apple-Account belastet.",
            "Das Abo **verlängert sich automatisch** um denselben Zeitraum zum selben Preis, wenn du es nicht mindestens 24 Stunden vor Ablauf des aktuellen Zeitraums kündigst. Die Verlängerung wird innerhalb von 24 Stunden vor Ablauf abgerechnet.",
            `Verwalten oder kündigen kannst du das Abo unter **Einstellungen → dein Name → Abonnements** auf dem iPhone oder unter [apps.apple.com/account/subscriptions](${SUBS}). Nach der Kündigung bleibt Pro bis zum Ende des bezahlten Zeitraums aktiv.`,
            "Gekauft wird über Apple, das in unserem Auftrag verkauft und abrechnet (in der Europäischen Union und im Vereinigten Königreich handelt Apple Distribution International Ltd. als unser Kommissionär) und Zahlungen, Widerrufe und Erstattungen abwickelt.",
            `**Widerrufsrecht und Erstattungen.** Als Verbraucher in der EU oder im Vereinigten Königreich kannst du nach den Bedingungen von Apple einen Kauf innerhalb von 14 Tagen nach Erhalt der Quittung ohne Angabe von Gründen widerrufen; Erstattungen und Widerrufe beantragst du bei Apple unter [reportaproblem.apple.com](${RAP}), Apple entscheidet nach [seinen Bedingungen](${AMS}).`,
          ] },
        ] },
        { h: "3. Der KI-Fahrlehrer", body: [
          "Der Fahrlehrer in Rondi ist ein **KI-System** (Gemini-Modelle von Google), kein Mensch und kein staatlich anerkannter Fahrlehrer. Er erzeugt seine Antworten automatisch aus den Lektionen von Rondi und kann sich irren oder etwas auslassen: Prüfe im Zweifel die genannte amtliche Quelle.",
          "Er braucht eine Internetverbindung und hat ein **tägliches Fragelimit**, das in der App angezeigt wird: Kostenlos gibt es ein paar Fragen pro Tag, mit Rondi Pro gilt ein deutlich höheres Fair-Use-Limit, das sich täglich erneuert. Bitte teile in deinen Fragen keine persönlichen Daten.",
        ] },
        { h: "4. Lernmaterial, keine amtlichen Vorschriften", body: [
          "Die Lektionen, Fragen, Erklärungen und Antworten des Fahrlehrers von Rondi sind **Lernmaterial**. Wir schreiben und prüfen sie sorgfältig anhand der geltenden Vorschriften jedes Landes, sie können aber Fehler enthalten oder veralten, wenn sich Regeln ändern. Sie ersetzen weder die amtlichen Rechtsvorschriften noch das Material der Prüfstellen oder den Rat einer Fahrschule und sind keine Rechtsberatung.",
          "Rondi garantiert nicht das Bestehen einer Prüfung.",
        ] },
        { h: "5. Keine Verbindung zu Behörden", body: [
          "Rondi ist unabhängig. Die App ist nicht mit TÜV, DEKRA, der Dirección General de Tráfico (DGT), der Driver and Vehicle Standards Agency (DVSA), dem italienischen Ministerium für Infrastruktur und Verkehr (Motorizzazione) oder dem Centraal Bureau Rijvaardigheidsbewijzen (CBR) verbunden und wird von diesen nicht unterstützt. Die Fragen sind unsere eigenen, zu denselben Themen und im selben Format wie die amtlichen Prüfungen; es sind nicht die amtlichen Fragen. Namen von Behörden und Organisationen, die Marken ihrer Inhaber sein können, nennen wir nur, um zu beschreiben, auf welche Prüfung die App vorbereitet.",
        ] },
        { h: "6. Faire Nutzung", body: [
          "App und Fahrlehrer sind für dein persönliches Lernen. Versuche nicht, Inhalte massenhaft auszulesen, Limits zu umgehen, den Dienst anzugreifen oder den Fahrlehrer für Themen ohne Bezug zum Fahren zu nutzen. Bei Missbrauch können wir den Fahrlehrer einschränken.",
        ] },
        { h: "7. Geistiges Eigentum", body: [
          `Texte, Fragen, Illustrationen, Design und Code von Rondi gehören der ${C.legalName} oder werden unter Lizenz genutzt. Bilder amtlicher Verkehrszeichen und einige Fotos sind gemeinfrei oder stehen unter freien Lizenzen (etwa Creative Commons oder der Open Government Licence); sie sind in der App mit Urheber und Lizenz genannt (Einstellungen → Quellen und Bildnachweise) und dürfen nach diesen Lizenzen weiterverwendet werden. Die Nachweise der Bilder in den Screenshots dieser Website stehen im Impressum.`,
        ] },
        { h: "8. Wenn etwas nicht funktioniert", body: [
          `Für digitale Inhalte und Dienstleistungen gilt die gesetzliche Gewährleistung (Richtlinie (EU) 2019/770; in Deutschland §§ 327 ff. BGB). Wenn Rondi oder Rondi Pro nicht wie beschrieben funktioniert, schreib an ${MAIL}, und wir beheben es; du kannst auch bei Apple eine Erstattung beantragen. Wir stellen die Updates bereit, die nötig sind, damit die App funktioniert und sicher bleibt.`,
        ] },
        { h: "9. Haftung", body: [
          `Die ${C.legalName} haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit, für Schäden aus der Verletzung von Leben, Körper oder Gesundheit, nach dem Produkthaftungsgesetz und überall dort, wo das Gesetz keine Beschränkung zulässt. Bei leichter Fahrlässigkeit haften wir nur für die Verletzung wesentlicher Vertragspflichten (Pflichten, deren Erfüllung die Nutzung erst ermöglicht und auf die du vertrauen darfst), begrenzt auf den vorhersehbaren, vertragstypischen Schaden. Für Prüfungsergebnisse, die von dir abhängen, haften wir nicht. Deine zwingenden Verbraucherrechte bleiben unberührt.`,
        ] },
        { h: "10. Änderungen dieser Bedingungen", body: [
          "Wir können diese Bedingungen anpassen, wenn sich die App, das Recht oder unser Angebot ändern; das Datum oben zeigt die gültige Fassung. Betrifft dich eine Änderung, kündigen wir sie vorher in der App an. Änderungen wirken nie auf bereits getätigte Käufe zurück, und wenn du nicht einverstanden bist, kannst du die App nicht mehr nutzen und dein Abo kündigen.",
        ] },
        { h: "11. Anwendbares Recht und Streitbeilegung", body: [
          `Es gilt spanisches Recht, unbeschadet der zwingenden Verbraucherschutzvorschriften deines Wohnsitzlandes. Als Verbraucher kannst du vor den Gerichten deines Wohnsitzlandes klagen. Bei Problemen schreib uns bitte zuerst an ${MAIL}. Die EU-Plattform zur Online-Streitbeilegung (OS) wurde am 20. Juli 2025 eingestellt. Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`,
        ] },
      ],
    },
    support: {
      title: "Hilfe",
      description: "Hilfe zu Rondi: Käufe wiederherstellen, Abo kündigen, Erstattungen, Tageslimit des KI-Fahrlehrers, Prüfungsland oder Sprache ändern, Fortschritt löschen, Datenschutz und Kontakt.",
      summary: `**Brauchst du Hilfe?** Schreib an ${MAIL}, wir antworten meist innerhalb von 1–2 Werktagen. In der App: Einstellungen → Hilfe.`,
      sections: [
        { h: "Käufe wiederherstellen", body: [
          "Neues iPhone oder App neu installiert? Öffne Rondi und geh zu **Einstellungen → Abo → Käufe wiederherstellen** (auch auf dem Pro-Bildschirm). Damit kommen sowohl der Einmalkauf „Bis du bestehst“ als auch ein aktives Abo zurück. Achte darauf, mit demselben Apple-Account angemeldet zu sein, mit dem du Rondi Pro gekauft hast.",
        ] },
        { h: "Abo kündigen oder ändern", body: [
          `Abos verwaltet Apple. Öffne auf dem iPhone **Einstellungen → dein Name → Abonnements → Rondi** oder geh auf [apps.apple.com/account/subscriptions](${SUBS}). Kündige mindestens 24 Stunden vor der Verlängerung, um die nächste Abbuchung zu vermeiden. Das gilt nur für Monats- und Wochenabo: Der Einmalkauf „Bis du bestehst“ verlängert sich nicht, es gibt also nichts zu kündigen.`,
        ] },
        { h: "Erstattungen und Widerruf in 14 Tagen", body: [
          `Zahlungen laufen über Apple, daher beantragst du Erstattungen – und in der EU und im Vereinigten Königreich den Widerruf eines Kaufs innerhalb von 14 Tagen – bei Apple unter [reportaproblem.apple.com](${RAP}). Wenn in Rondi etwas nicht funktioniert, sag es uns bitte auch, damit wir es beheben.`,
        ] },
        { h: "Das Tageslimit des KI-Fahrlehrers", body: [
          "Der Fahrlehrer ist eine KI und hat eine tägliche Anzahl an Fragen, die in der App angezeigt wird. Ist sie erreicht, erneuert sie sich am nächsten Tag. Er braucht eine Internetverbindung; Lektionen, Fragen und Verkehrszeichen funktionieren offline.",
        ] },
        { h: "Prüfungsland oder Sprache ändern", body: [
          "Geh zu **Einstellungen → Deine Prüfung**. «Prüfungsland» stellt Regeln, Verkehrszeichen und Prüfungsformat um (Spanien, Deutschland, Vereinigtes Königreich, Italien, Niederlande). «App-Sprache» ändert die Sprache der App; sie kann sich vom Prüfungsland unterscheiden.",
        ] },
        { h: "Fortschritt löschen", body: [
          "Rondi hat kein Konto: Alles liegt auf deinem iPhone. Nutze **Einstellungen → Meinen ganzen Fortschritt löschen** oder lösche die App.",
        ] },
        { h: "Datenschutz-Anfragen", body: [
          `Für Auskunft, Löschung oder Widerspruch zu Daten auf unserer Seite (z. B. die Zähler des Fahrlehrers) schreib an ${MAIL}. Einzelheiten stehen in der Datenschutzerklärung.`,
        ] },
        { h: "Fehler in einer Frage gefunden?", body: [
          `Tipp auf die Fahne in der Korrektur dieser Frage (sie öffnet eine E-Mail mit der Frage) oder schreib an ${MAIL} mit der Frage und deinem Land. Wir prüfen jede Meldung.`,
        ] },
        { h: "Kontakt", body: [
          `${MAIL} · ${C.legalName}, ${C.address}.`,
        ] },
      ],
    },
    legal: {
      title: "Impressum",
      description: "Impressum von Rondi (Anbieterkennzeichnung nach Art. 10 des spanischen Gesetzes 34/2002, LSSI-CE): TREMPIDO S.L., B75830257, Barcelona, und Bildnachweise dieser Website.",
      sections: [
        { h: "Anbieter der App und dieser Website", body: [
          "Angaben gemäß Art. 10 des spanischen Gesetzes 34/2002 über Dienste der Informationsgesellschaft und den elektronischen Geschäftsverkehr (LSSI-CE). Der Anbieter hat seinen Sitz in Spanien; es gilt das spanische Recht des Herkunftslandes.",
          { ul: owner({ company: "Gesellschaft", taxId: "Steuernummer (NIF)", address: "Sitz", email: "E-Mail", registry: "Registereintrag", representative: "Vertretungsberechtigt", vatId: "USt-IdNr.", activity: "Tätigkeit: Entwicklung und Veröffentlichung von mobilen Apps." }, " (spanische Gesellschaft mit beschränkter Haftung, Sociedad Limitada)") },
        ] },
        { h: "Zweck", body: [
          "Diese Website informiert über die App Rondi und ihre rechtlichen Bedingungen. Die App wird ausschließlich über den App Store von Apple vertrieben.",
        ] },
        { h: "Urheberrecht und Marken", body: [
          `Die Inhalte dieser Website und der App (Texte, Design, Logos, Screenshots, Code) gehören der ${C.legalName} oder werden unter Lizenz genutzt. Eine Vervielfältigung ohne Erlaubnis ist nicht gestattet, ausgenommen Werke Dritter unter freien Lizenzen, die jeder nach den Bedingungen ihrer Lizenz weiterverwenden darf. Rondi steht in keiner Verbindung zu Prüfstellen (TÜV, DEKRA, DGT, DVSA, Motorizzazione, CBR); ihre Namen können Marken ihrer Inhaber sein und werden nur beschreibend verwendet.`,
        ] },
        { h: "Bildnachweise dieser Website", body: [
          "Die App-Screenshots auf dieser Website zeigen einige Bilder Dritter, verkleinert und zugeschnitten. Die Verkehrszeichen sind amtliche, gemeinfreie Entwürfe, außer dem unten genannten. Die übrigen Bilder sind:",
          { ul: [
            ...creditLines("von", "Quelle"),
            `Kreisverkehr-Illustration (britische Screenshots): ${HC_ILLUSTRATION}. ${OGL_LINE}`,
          ] },
          "Die App-Screenshots mit Werken unter CC BY-SA werden unter derselben Lizenz geteilt. Die vollständigen Nachweise der App findest du in Rondi unter Einstellungen → Quellen und Bildnachweise.",
        ] },
        { h: "Haftung", body: [
          "Wir bemühen uns um richtige und aktuelle Informationen, haften aber, soweit gesetzlich nichts anderes gilt, nicht für Fehler oder deren Verwendung. Links zu externen Seiten dienen der Bequemlichkeit; ihre Inhalte kontrollieren wir nicht.",
        ] },
        { h: "Anwendbares Recht", body: [
          "Es gilt spanisches Recht. Verbraucher können sich an die Gerichte ihres Wohnsitzes wenden.",
        ] },
      ],
    },
  },

  // ───────────────────────────────── ITALIANO ────────────────────────────────
  it: {
    privacy: {
      title: "Informativa sulla privacy",
      description: "Privacy di Rondi: nessun account, i tuoi progressi restano sull'iPhone, l'istruttore con IA usa un identificativo casuale, i pagamenti passano da Apple e questo sito non usa cookie.",
      summary: "**In breve.** Rondi non ha account. I tuoi progressi restano sul tuo iPhone. Quando fai una domanda all'istruttore con IA, la domanda viaggia con un identificativo casuale fino al nostro server, che chiede la risposta all'IA di Google (Vertex AI); non conserviamo la conversazione. I pagamenti li gestisce Apple. Non vendiamo i tuoi dati, non mostriamo pubblicità né usiamo strumenti di analisi nell'app, e questo sito non installa cookie.",
      sections: [
        { h: "1. Titolare del trattamento", body: [
          `Il titolare del trattamento per l'app Rondi e per questo sito è **${C.legalName}** (codice fiscale spagnolo ${C.taxId}), ${C.address}. Per qualsiasi domanda o richiesta sulla privacy, scrivi a ${MAIL}. Non abbiamo nominato un responsabile della protezione dei dati perché la legge non lo richiede per la nostra attività.`,
        ] },
        { h: "2. Cosa resta sul tuo iPhone", body: [
          "Per funzionare, Rondi salva solo sul tuo dispositivo (nello spazio privato dell'app): il nome che vuoi indicare (facoltativo), il paese dell'esame, la lingua dell'app, data dell'esame e provincia se le inserisci, come preferisci esercitarti, l'obiettivo giornaliero e l'ora del promemoria, le tue risposte, simulazioni, lezioni completate, errori da ripassare e serie di giorni. Non ne abbiamo copia e non possiamo vederli.",
          "La prima volta che apri l'app, Rondi ti propone il paese dell'esame in base alla regione e alla lingua impostate sul tuo iPhone. Avviene sul dispositivo: l'app non usa il GPS e non chiede il permesso di localizzazione.",
          "Puoi cancellare tutto quando vuoi in **Impostazioni → Cancella tutti i miei progressi**, o eliminando l'app.",
        ] },
        { h: "3. L'istruttore con IA (coach con IA)", body: [
          "L'istruttore è un **sistema di intelligenza artificiale**, non una persona. Quando usi «Fai la tua domanda», l'app invia al nostro server (ospitato da Vercel) questi dati, e solo questi:",
          { ul: [
            "il testo della tua domanda (fino a 500 caratteri) e gli ultimi messaggi di quella conversazione (al massimo dieci);",
            "il paese dell'esame e la lingua dell'app, e la lezione o la domanda che stavi guardando, se c'è;",
            "un identificativo casuale creato dall'app (o l'identificativo degli acquisti descritto al punto 5), per contare le domande del giorno e sapere se hai Rondi Pro. Non contiene nome né email, ma è un dato pseudonimo, non anonimo;",
            "il tuo indirizzo IP, che ogni connessione a internet rivela, usato solo per prevenire abusi.",
          ] },
          "Il nostro server cerca i passaggi pertinenti nelle lezioni di Rondi e li invia con la tua domanda a **Google Vertex AI** (modelli Gemini, Google Cloud), che genera la risposta; a volte prima traduce la domanda per cercare meglio nelle lezioni. Google tratta questi dati per nostro conto come responsabile del trattamento, solo per generare la risposta e, secondo le sue condizioni Cloud, non li usa per addestrare i suoi modelli. **Non conserviamo le tue conversazioni**: non vengono salvate sul nostro server, e la conversazione che vedi esiste solo sul tuo telefono.",
          "Per applicare i limiti giornalieri teniamo dei contatori (numero di domande per identificativo e per IP) in un database (Upstash Redis) che li cancella da solo dopo 2 giorni. Per sapere se hai Rondi Pro, il nostro server lo chiede a RevenueCat e ricorda la risposta per al massimo 5 minuti. I log del nostro server registrano dati tecnici di ogni risposta — identificativo, paese, lingua, gratuito o Pro, domande usate, lunghezza della risposta, tempo di risposta, errori — ma **mai il testo delle tue domande**.",
          "Per favore non scrivere dati personali nelle domande (nome, documento, dati sanitari…): all'istruttore non servono.",
        ] },
        { h: "4. Notifiche", body: [
          "Se attivi il promemoria giornaliero di studio, l'app programma **notifiche locali** sul tuo iPhone. Vengono create sul dispositivo; non usiamo un server di notifiche push e non riceviamo alcun token.",
        ] },
        { h: "5. Acquisti", body: [
          "Gli acquisti di Rondi Pro (l'acquisto unico «Fino a quando lo superi» e gli abbonamenti mensile e settimanale) avvengono tramite l'**App Store**. Apple tratta il pagamento come titolare autonomo, secondo la propria informativa; non riceviamo mai i dati della tua carta, il tuo nome o l'email del tuo account Apple.",
          "Per convalidare gli acquisti e sapere se hai Rondi Pro usiamo **RevenueCat**, nostro responsabile del trattamento. Riceve la ricevuta dell'App Store (prodotti acquistati, date, stato del rinnovo), un identificativo casuale dell'utente dell'app e i dati tecnici che ogni connessione invia (indirizzo IP, modello del dispositivo, versione di iOS, paese dell'App Store). Non riceve mai il tuo nome o la tua email.",
        ] },
        { h: "6. Se ci scrivi", body: [
          `Se scrivi a ${MAIL} — anche con la bandierina di una domanda, che apre un'email con quella domanda già compilata — riceviamo il tuo indirizzo email, il messaggio e ciò che decidi di includere. Li usiamo solo per risponderti e correggere quello che segnali. La nostra casella è fornita da Google (Gmail).`,
        ] },
        { h: "7. Questo sito", body: [
          `Questo sito (www.trempido.com) è ospitato da **Vercel**. Come per ogni sito, quando lo visiti il server tratta il tuo indirizzo IP, il tipo di browser, la pagina richiesta e l'ora, per mostrarti la pagina e mantenerla sicura; Vercel conserva questi log per poco tempo ([informativa privacy di Vercel](${VERCEL_PRIVACY})).`,
          "Usiamo **Vercel Web Analytics** per contare le visite di ogni pagina in forma aggregata. Non usa cookie né salva nulla sul tuo dispositivo e non ti identifica: raggruppa le visite con un codice (hash) che cambia ogni giorno e non conserva il tuo indirizzo IP.",
          "**Questo sito non installa cookie**, non mostra pubblicità e non carica tracker di terzi. I caratteri tipografici sono serviti dal nostro dominio.",
        ] },
        { h: "8. Cosa non facciamo", body: [
          { ul: [
            "Niente account, email o password.",
            "Niente pubblicità né tracciamento tra app o siti di altre aziende.",
            "Nessuno strumento di analisi dentro l'app.",
            "Niente posizione, contatti, foto o microfono.",
            "Non vendiamo né cediamo i tuoi dati.",
          ] },
        ] },
        { h: "9. Basi giuridiche", body: [
          { ul: [
            "Istruttore con IA e convalida degli acquisti: necessari a fornire il servizio che richiedi (art. 6.1.b GDPR).",
            "Contatori, indirizzo IP, cache dello stato Pro e log tecnici: il nostro legittimo interesse a prevenire abusi, mantenere il servizio sicuro e funzionante e controllarne i costi (art. 6.1.f GDPR).",
            "Email: rispondere alla tua richiesta (art. 6.1.b GDPR) o il nostro legittimo interesse a rispondere ai messaggi e correggere gli errori segnalati (art. 6.1.f GDPR).",
            "Log e statistiche delle visite al sito: il nostro legittimo interesse a fornire il sito in modo sicuro e sapere quali pagine sono utili (art. 6.1.f GDPR).",
          ] },
          "Non sei obbligato a fornirci questi dati. Senza inviare la domanda, l'istruttore semplicemente non può rispondere; il resto dell'app funziona senza.",
        ] },
        { h: "10. Chi riceve i dati", body: [
          "Responsabili del trattamento che agiscono per nostro conto, con contratto di trattamento:",
          { ul: [
            "Vercel Inc. (USA) — hosting del nostro server e di questo sito, statistiche del sito.",
            "Google Cloud (Google Ireland Ltd. / Google LLC, USA) — Vertex AI, che genera le risposte dell'istruttore.",
            "Upstash, Inc. (USA) — contatori giornalieri e cache dello stato Pro (cancellati al massimo dopo 2 giorni).",
            "RevenueCat, Inc. (USA) — convalida degli acquisti e stato Pro.",
            "Google (Gmail) — la nostra casella di assistenza.",
          ] },
          "Apple (Apple Distribution International Ltd., Irlanda, e Apple Inc.) riceve i dati d'acquisto come titolare autonomo quando acquisti nell'App Store. Comunichiamo dati alle autorità solo quando la legge lo richiede.",
        ] },
        { h: "11. Trasferimenti internazionali", body: [
          "Vertex AI funziona sull'infrastruttura globale di Google, e Vercel, Upstash, RevenueCat e Google sono aziende statunitensi, quindi alcuni dati possono essere trattati fuori dallo Spazio economico europeo. Questi trasferimenti si basano sulla decisione di adeguatezza della Commissione europea relativa al Data Privacy Framework UE-USA per i fornitori certificati e, negli altri casi, sulle Clausole contrattuali tipo della Commissione (art. 46.2.c GDPR) incluse nei loro contratti di trattamento; per gli utenti del Regno Unito, sull'estensione britannica del Framework o sull'addendum britannico a tali clausole. Puoi chiederci una copia di queste garanzie all'indirizzo indicato sopra.",
        ] },
        { h: "12. Per quanto tempo", body: [
          { ul: [
            "Conversazioni con l'istruttore: non le conserviamo.",
            "Contatori giornalieri: 2 giorni. Cache dello stato Pro: 5 minuti.",
            "Log del server: al massimo 30 giorni.",
            "Dati d'acquisto presso RevenueCat: finché Rondi usa quel servizio, salvo tua richiesta di cancellarli prima; Apple conserva i propri registri secondo le sue regole.",
            "Email: finché gestiamo la tua richiesta e fino a 2 anni dopo, poi cancellate.",
            "Log del sito: il breve periodo stabilito da Vercel. Le statistiche delle visite sono aggregate e non ti identificano.",
            "Dati sul tuo iPhone: finché non li cancelli o elimini l'app.",
          ] },
        ] },
        { h: "13. I tuoi diritti", body: [
          `Puoi chiedere accesso, rettifica, cancellazione, limitazione e portabilità dei tuoi dati e puoi **opporti** in qualsiasi momento ai trattamenti basati sul nostro legittimo interesse, scrivendo a ${MAIL}. Rispondiamo entro un mese. Non essendoci account, indicaci più o meno quando hai usato l'istruttore o l'identificativo se lo hai, e cercheremo i tuoi dati; se non possiamo collegarti alcun dato, te lo diremo.`,
          `Puoi anche presentare reclamo al Garante per la protezione dei dati personali ([garanteprivacy.it](https://www.garanteprivacy.it)), all'autorità spagnola AEPD (${AEPD}) o all'autorità del paese UE in cui vivi.`,
        ] },
        { h: "14. Decisioni automatizzate", body: [
          "Non prendiamo decisioni basate unicamente su trattamenti automatizzati che producano effetti giuridici su di te o che ti incidano in modo analogo (art. 22 GDPR). L'istruttore con IA genera risposte di studio e i limiti giornalieri di domande si applicano automaticamente, ma nessuno dei due ha effetti giuridici.",
        ] },
        { h: "15. Minori", body: [
          "Rondi è pensata per chi prepara la patente. Non è rivolta a minori di 14 anni e non raccogliamo consapevolmente loro dati. Se pensi che un minore di 14 anni ci abbia inviato dati, scrivici e li cancelleremo.",
        ] },
        { h: "16. Modifiche", body: [
          "Se l'app o questo sito inizieranno a trattare i dati in modo diverso, aggiorneremo questa pagina e la data in alto, e se la modifica è importante te lo diremo anche nell'app.",
        ] },
      ],
    },
    terms: {
      title: "Termini di utilizzo",
      description: "Termini di Rondi: Rondi Pro come acquisto unico o abbonamento a rinnovo automatico venduto tramite l'App Store, EULA standard di Apple, istruttore con IA, materiale di studio, nessun legame con Motorizzazione, DGT, TÜV/DEKRA, DVSA o CBR.",
      summary: `**In breve.** Rondi è un aiuto allo studio. Si inizia gratis e offre Rondi Pro, addebitato da Apple, come acquisto unico o come abbonamento a rinnovo automatico. L'istruttore è un'IA e può sbagliare. Rondi non è affiliata ad alcuna autorità d'esame e i suoi contenuti non sostituiscono la normativa ufficiale. L'uso dell'app è regolato anche dal [contratto di licenza standard di Apple (EULA)](${EULA}). Niente di tutto questo toglie i tuoi diritti di consumatore.`,
      sections: [
        { h: "1. Chi siamo e cosa si applica", body: [
          `Rondi è offerta da **${C.legalName}** (codice fiscale spagnolo ${C.taxId}), ${C.address}, contatto ${MAIL}. Questi termini si applicano all'uso dell'app insieme al [Contratto di licenza per l'utente finale delle app con licenza Apple (EULA standard)](${EULA}); in caso di contrasto, la tua licenza d'uso dell'app è regolata dall'EULA di Apple. Gli acquisti nell'App Store sono regolati anche dai [Termini dei servizi multimediali di Apple](${AMS}).`,
        ] },
        { h: "2. Rondi Pro", body: [
          { ul: [
            "Rondi Pro ha tre opzioni: **«Fino a quando lo superi»**, un acquisto unico; un abbonamento **mensile**; e un abbonamento **settimanale**. Non c'è un periodo di prova gratuito. Il prezzo (e, per gli abbonamenti, il periodo di addebito) è indicato nell'app, nella tua valuta e con le imposte incluse, prima della conferma.",
            "**«Fino a quando lo superi»** è un acquisto in-app unico (non consumabile): viene addebitato una sola volta sul tuo account Apple alla conferma dell'acquisto e non si rinnova. Nonostante il nome, non scade quando superi l'esame: sblocca Rondi Pro per sempre su quell'account Apple e puoi recuperarlo su un altro dispositivo o dopo aver reinstallato l'app con **Ripristina acquisti**.",
            "I **piani mensile e settimanale sono abbonamenti a rinnovo automatico**. Il pagamento viene addebitato sul tuo account Apple alla conferma dell'acquisto.",
            "L'abbonamento **si rinnova automaticamente** per lo stesso periodo e prezzo, a meno che tu non lo annulli almeno 24 ore prima della fine del periodo in corso. Il rinnovo viene addebitato nelle 24 ore precedenti la fine del periodo.",
            `Puoi gestire o annullare l'abbonamento in **Impostazioni → il tuo nome → Abbonamenti** sull'iPhone, o su [apps.apple.com/account/subscriptions](${SUBS}). Se annulli, Pro resta attivo fino alla fine del periodo già pagato.`,
            "Gli acquisti avvengono tramite Apple, che vende e incassa per nostro conto (nell'Unione europea e nel Regno Unito Apple Distribution International Ltd. agisce come nostro commissionario) e gestisce pagamenti, recessi e rimborsi.",
            `**Recesso e rimborsi.** Se sei un consumatore nell'UE o nel Regno Unito, i termini di Apple ti permettono di annullare un acquisto entro 14 giorni dal ricevimento della ricevuta senza indicarne il motivo; rimborsi e recessi si chiedono ad Apple su [reportaproblem.apple.com](${RAP}) e li decide Apple secondo [i suoi termini](${AMS}).`,
          ] },
        ] },
        { h: "3. L'istruttore con IA", body: [
          "L'istruttore di Rondi è un **sistema di intelligenza artificiale** (modelli Gemini di Google), non una persona né un istruttore di scuola guida abilitato. Genera le risposte automaticamente dalle lezioni di Rondi e può sbagliare o tralasciare qualcosa: nel dubbio, controlla la fonte ufficiale che cita.",
          "Ha bisogno della connessione a internet e ha un **limite giornaliero di domande**, indicato nell'app: l'uso gratuito include poche domande al giorno e Rondi Pro ha un limite di uso corretto molto più alto, che si rinnova ogni giorno. Per favore non condividere dati personali nelle domande.",
        ] },
        { h: "4. Materiale di studio, non la normativa ufficiale", body: [
          "Le lezioni, le domande, le spiegazioni e le risposte dell'istruttore di Rondi sono **materiale di studio**. Le scriviamo e le verifichiamo con cura secondo le norme vigenti di ogni paese, ma possono contenere errori o diventare superate quando le regole cambiano. Non sostituiscono la normativa ufficiale, il materiale delle autorità d'esame o i consigli di un'autoscuola, e non sono consulenza legale.",
          "Rondi non garantisce il superamento di alcun esame.",
        ] },
        { h: "5. Nessun legame con le autorità", body: [
          "Rondi è indipendente. Non è affiliata, approvata né collegata al Ministero delle Infrastrutture e dei Trasporti (Motorizzazione), alla Dirección General de Tráfico (DGT), a TÜV, DEKRA, alla Driver and Vehicle Standards Agency (DVSA) o al Centraal Bureau Rijvaardigheidsbewijzen (CBR). Le domande sono nostre, scritte sugli stessi argomenti e nello stesso formato degli esami ufficiali; non sono le domande ufficiali. I nomi di autorità e organizzazioni, che possono essere marchi dei rispettivi titolari, sono usati solo per indicare quale esame prepara l'app.",
        ] },
        { h: "6. Uso corretto", body: [
          "L'app e l'istruttore servono al tuo studio personale. Non cercare di estrarre i contenuti in massa, aggirare i limiti, attaccare il servizio o usare l'istruttore per argomenti che non riguardano la guida. Possiamo limitare l'istruttore in caso di abusi.",
        ] },
        { h: "7. Proprietà intellettuale", body: [
          `Testi, domande, illustrazioni, design e codice di Rondi appartengono a ${C.legalName} o sono usati su licenza. Le immagini dei segnali ufficiali e alcune foto sono di pubblico dominio o con licenze libere (come Creative Commons o la Open Government Licence); nell'app sono citate con autore e licenza (Impostazioni → Fonti e crediti) e possono essere riutilizzate secondo tali licenze. I crediti delle immagini che compaiono nelle schermate di questo sito sono nelle note legali.`,
        ] },
        { h: "8. Se qualcosa non funziona", body: [
          `Hai la garanzia legale di conformità per i contenuti e i servizi digitali (Direttiva (UE) 2019/770; in Italia, artt. 135-octies e seguenti del Codice del consumo). Se Rondi o Rondi Pro non funzionano come descritto, scrivi a ${MAIL} e lo sistemeremo; puoi anche chiedere il rimborso ad Apple. Forniamo gli aggiornamenti necessari perché l'app continui a funzionare in modo sicuro.`,
        ] },
        { h: "9. Responsabilità", body: [
          `${C.legalName} risponde senza limiti dei danni causati con dolo o colpa grave, dei danni alla vita o alla salute e in tutti i casi in cui la legge non consente di limitare la responsabilità. In caso di colpa lieve rispondiamo solo se violiamo un obbligo essenziale di questi termini e solo per il danno prevedibile e tipico di questo tipo di contratto. Non rispondiamo dei risultati degli esami, che dipendono da te. Nulla in questi termini limita i tuoi diritti di consumatore previsti dalla legge del tuo paese.`,
        ] },
        { h: "10. Modifiche a questi termini", body: [
          "Possiamo aggiornare questi termini quando cambiano l'app, la legge o la nostra offerta; la data in alto indica la versione in vigore. Se una modifica ti riguarda, la annunceremo nell'app prima che si applichi. Le modifiche non toccano mai gli acquisti già fatti e, se non sei d'accordo, puoi smettere di usare l'app e annullare l'abbonamento.",
        ] },
        { h: "11. Legge applicabile e controversie", body: [
          `Si applica la legge spagnola, fatte salve le norme imperative a tutela dei consumatori del tuo paese di residenza. Come consumatore puoi agire davanti ai giudici del paese in cui vivi. Se hai un problema, scrivici prima a ${MAIL}. La piattaforma europea per la risoluzione delle controversie online (ODR) è stata chiusa il 20 luglio 2025, e al momento non aderiamo ad alcun sistema di risoluzione alternativa delle controversie.`,
        ] },
      ],
    },
    support: {
      title: "Assistenza",
      description: "Aiuto con Rondi: ripristinare gli acquisti, annullare l'abbonamento, rimborsi, il limite giornaliero dell'istruttore con IA, cambiare paese o lingua dell'esame, cancellare i progressi, privacy e contatti.",
      summary: `**Ti serve aiuto?** Scrivici a ${MAIL}, di solito rispondiamo entro 1–2 giorni lavorativi. Nell'app: Impostazioni → Aiuto.`,
      sections: [
        { h: "Ripristinare gli acquisti", body: [
          "Nuovo iPhone o app reinstallata? Apri Rondi e vai su **Impostazioni → Abbonamento → Ripristina acquisti** (c'è anche nella schermata Pro). Ripristina sia l'acquisto unico «Fino a quando lo superi» sia un abbonamento attivo. Assicurati di usare lo stesso account Apple con cui hai acquistato Rondi Pro.",
        ] },
        { h: "Annullare o cambiare l'abbonamento", body: [
          `Gli abbonamenti li gestisce Apple. Sull'iPhone apri **Impostazioni → il tuo nome → Abbonamenti → Rondi**, oppure vai su [apps.apple.com/account/subscriptions](${SUBS}). Annulla almeno 24 ore prima del rinnovo per evitare il prossimo addebito. Vale solo per gli abbonamenti mensile e settimanale: l'acquisto unico «Fino a quando lo superi» non si rinnova, quindi non c'è nulla da annullare.`,
        ] },
        { h: "Rimborsi e recesso entro 14 giorni", body: [
          `I pagamenti passano da Apple, quindi i rimborsi — e, nell'UE e nel Regno Unito, l'annullamento di un acquisto entro 14 giorni — si chiedono ad Apple su [reportaproblem.apple.com](${RAP}). Se qualcosa in Rondi non funziona, diccelo anche a noi così lo sistemiamo.`,
        ] },
        { h: "Il limite giornaliero dell'istruttore con IA", body: [
          "L'istruttore è un'IA e ha un numero di domande al giorno, indicato nell'app. Quando lo raggiungi, si rinnova il giorno dopo. Ha bisogno della connessione a internet; lezioni, domande e segnali funzionano offline.",
        ] },
        { h: "Cambiare paese o lingua dell'esame", body: [
          "Vai su **Impostazioni → Il tuo esame**. «Paese dell'esame» cambia norme, segnali e formato dell'esame (Spagna, Germania, Regno Unito, Italia, Paesi Bassi). «Lingua dell'app» cambia la lingua dell'app; può essere diversa dal paese dell'esame.",
        ] },
        { h: "Cancellare i progressi", body: [
          "Rondi non ha account: è tutto sul tuo iPhone. Usa **Impostazioni → Cancella tutti i miei progressi**, oppure elimina l'app.",
        ] },
        { h: "Richieste sulla privacy", body: [
          `Per accedere, cancellare od opporti all'uso dei dati che teniamo dalla nostra parte (ad esempio i contatori dell'istruttore), scrivi a ${MAIL}. I dettagli sono nell'informativa sulla privacy.`,
        ] },
        { h: "Hai trovato un errore in una domanda?", body: [
          `Tocca la bandierina nella correzione di quella domanda (apre un'email con la domanda già compilata), o scrivi a ${MAIL} con la domanda e il tuo paese. Controlliamo ogni segnalazione.`,
        ] },
        { h: "Contatti", body: [
          `${MAIL} · ${C.legalName}, ${C.address}.`,
        ] },
      ],
    },
    legal: {
      title: "Note legali",
      description: "Note legali di Rondi (art. 10 della legge spagnola 34/2002, LSSI-CE): TREMPIDO S.L., B75830257, Barcellona, e crediti delle immagini di questo sito.",
      sections: [
        { h: "Titolare dell'app e di questo sito", body: [
          "Ai sensi dell'articolo 10 della legge spagnola 34/2002 sui servizi della società dell'informazione e il commercio elettronico (LSSI-CE):",
          { ul: owner({ company: "Società", taxId: "Codice fiscale (NIF)", address: "Sede legale", email: "Email", registry: "Dati di iscrizione al registro", representative: "Rappresentante", vatId: "Partita IVA UE", activity: "Attività: sviluppo e pubblicazione di app per dispositivi mobili." }, " (società a responsabilità limitata di diritto spagnolo)") },
        ] },
        { h: "Finalità", body: [
          "Questo sito informa sull'app Rondi e sulle sue condizioni legali. L'app è distribuita esclusivamente tramite l'App Store di Apple.",
        ] },
        { h: "Proprietà intellettuale", body: [
          `I contenuti di questo sito e dell'app (testi, design, loghi, schermate, codice) appartengono a ${C.legalName} o sono usati su licenza. Non ne è consentita la riproduzione senza autorizzazione, salvo le opere di terzi pubblicate con licenze libere, che chiunque può riutilizzare alle condizioni della loro licenza. Rondi non è collegata ad alcuna autorità d'esame (Motorizzazione, DGT, TÜV, DEKRA, DVSA, CBR); i loro nomi possono essere marchi dei rispettivi titolari e sono usati solo a scopo descrittivo.`,
        ] },
        { h: "Crediti delle immagini di questo sito", body: [
          "Le schermate dell'app su questo sito mostrano alcune immagini di terzi, ridotte e ritagliate. I segnali stradali sono disegni ufficiali di pubblico dominio, salvo quello indicato sotto. Le altre immagini sono:",
          { ul: [
            ...creditLines("di", "fonte"),
            `Illustrazione della rotatoria (schermate del Regno Unito): ${HC_ILLUSTRATION}. ${OGL_LINE}`,
          ] },
          "Le schermate dell'app che includono opere CC BY-SA sono condivise con la stessa licenza. I crediti completi dell'app sono in Rondi, in Impostazioni → Fonti e crediti.",
        ] },
        { h: "Responsabilità", body: [
          "Cerchiamo di mantenere le informazioni corrette e aggiornate ma, salvo diversa disposizione di legge, non rispondiamo di eventuali errori né dell'uso che se ne fa. I link a siti esterni sono offerti per comodità; non ne controlliamo i contenuti.",
        ] },
        { h: "Legge applicabile", body: [
          "Si applica la legge spagnola. I consumatori possono rivolgersi ai tribunali del luogo di residenza.",
        ] },
      ],
    },
  },

  // ─────────────────────────────── NEDERLANDS ────────────────────────────────
  nl: {
    privacy: {
      title: "Privacyverklaring",
      description: "Privacy bij Rondi: geen account, je voortgang blijft op je iPhone, de AI-instructeur gebruikt een willekeurige ID, betalingen lopen via Apple en deze website plaatst geen cookies.",
      summary: "**Kort gezegd.** Rondi heeft geen account. Je voortgang blijft op je iPhone. Als je de AI-instructeur iets vraagt, gaat de vraag met een willekeurige ID naar onze server, die het antwoord bij de AI van Google (Vertex AI) opvraagt; we bewaren het gesprek niet. Betalingen regelt Apple. We verkopen je gegevens niet, tonen geen advertenties, gebruiken geen analysetools in de app en deze website plaatst geen cookies.",
      sections: [
        { h: "1. Verwerkingsverantwoordelijke", body: [
          `De verwerkingsverantwoordelijke voor de app Rondi en deze website is **${C.legalName}** (Spaans fiscaal nummer ${C.taxId}), ${C.address}. Voor vragen of verzoeken over privacy kun je mailen naar ${MAIL}. We hebben geen functionaris voor gegevensbescherming aangesteld, omdat de wet dat voor onze activiteit niet verplicht.`,
        ] },
        { h: "2. Wat op je iPhone blijft", body: [
          "Om te werken bewaart Rondi alleen op je apparaat (in de privéopslag van de app): de naam die je opgeeft (optioneel), het land van je examen, de taal van de app, je examendatum en provincie als je die invult, hoe je wilt oefenen, je dagdoel en het tijdstip van de herinnering, je antwoorden, oefenexamens, afgeronde lessen, fouten om te herhalen en je reeks. Wij hebben hier geen kopie van en kunnen het niet zien.",
          "De eerste keer dat je de app opent, stelt Rondi je examenland voor op basis van de regio en taal die op je iPhone zijn ingesteld. Dat gebeurt op het apparaat zelf: de app gebruikt geen gps en vraagt geen toestemming voor je locatie.",
          "Je kunt alles altijd wissen via **Instellingen → Al mijn voortgang wissen**, of door de app te verwijderen.",
        ] },
        { h: "3. De AI-instructeur (AI-coach)", body: [
          "De instructeur is een **AI-systeem**, geen mens. Als je «Stel je vraag» gebruikt, stuurt de app naar onze eigen server (gehost bij Vercel) deze gegevens, en alleen deze:",
          { ul: [
            "de tekst van je vraag (tot 500 tekens) en de laatste berichten van dat gesprek (hooguit tien);",
            "het land van je examen en de taal van de app, en de les of vraag die je bekeek, als die er is;",
            "een willekeurige ID die de app aanmaakt (of de aankoop-ID uit punt 5), om je vragen per dag te tellen en te weten of je Rondi Pro hebt. Die bevat geen naam of e-mail, maar is een gepseudonimiseerd gegeven, geen anoniem gegeven;",
            "je IP-adres, dat elke internetverbinding meestuurt, alleen gebruikt om misbruik te voorkomen.",
          ] },
          "Onze server zoekt de relevante passages in de lessen van Rondi en stuurt die met je vraag naar **Google Vertex AI** (Gemini-modellen, Google Cloud), dat het antwoord maakt; soms wordt de vraag eerst vertaald om beter in de lessen te zoeken. Google verwerkt deze gegevens namens ons als verwerker, alleen om het antwoord te maken, en gebruikt ze volgens zijn Cloud-voorwaarden niet om zijn modellen te trainen. **We bewaren je gesprekken niet**: ze worden niet op onze server opgeslagen, en het gesprek dat je ziet bestaat alleen op je telefoon.",
          "Voor de daglimieten houden we tellers bij (aantal vragen per ID en per IP) in een database (Upstash Redis) die ze na 2 dagen automatisch wist. Om te weten of je Rondi Pro hebt, vraagt onze server dat aan RevenueCat en onthoudt het antwoord hooguit 5 minuten. Onze serverlogs registreren technische gegevens over elk antwoord — ID, land, taal, gratis of Pro, gebruikte vragen, lengte van het antwoord, reactietijd, fouten — maar **nooit de tekst van je vragen**.",
          "Zet alsjeblieft geen persoonsgegevens in je vragen (naam, BSN, gezondheidsgegevens…): de instructeur heeft ze niet nodig.",
        ] },
        { h: "4. Meldingen", body: [
          "Als je de dagelijkse studieherinnering aanzet, plant de app **lokale meldingen** op je iPhone. Die worden op het apparaat zelf gemaakt; we gebruiken geen pushserver en ontvangen geen token.",
        ] },
        { h: "5. Aankopen", body: [
          "Aankopen van Rondi Pro (de eenmalige aankoop „Tot je slaagt“ en het maand- en weekabonnement) lopen via de **App Store**. Apple verwerkt de betaling als zelfstandige verwerkingsverantwoordelijke, volgens zijn eigen privacybeleid; je betaalgegevens, je naam of het e-mailadres van je Apple-account ontvangen we nooit.",
          "Om aankopen te controleren en te weten of je Rondi Pro hebt, gebruiken we **RevenueCat** als verwerker. RevenueCat ontvangt je App Store-bewijs (gekochte producten, data, verlengingsstatus), een willekeurige gebruikers-ID van de app en de technische gegevens die elke verbinding meestuurt (IP-adres, apparaatmodel, iOS-versie, App Store-land). Je naam of e-mail ontvangt RevenueCat nooit.",
        ] },
        { h: "6. Als je ons mailt", body: [
          `Als je mailt naar ${MAIL} — ook via het vlaggetje bij een vraag, dat een e-mail met die vraag al ingevuld opent — ontvangen we je e-mailadres, je bericht en wat je zelf toevoegt. We gebruiken dat alleen om je te antwoorden en te verbeteren wat je meldt. Onze mailbox wordt geleverd door Google (Gmail).`,
        ] },
        { h: "7. Deze website", body: [
          `Deze website (www.trempido.com) wordt gehost bij **Vercel**. Zoals bij elke website verwerkt de server bij een bezoek je IP-adres, het type browser, de opgevraagde pagina en het tijdstip, om de pagina te tonen en veilig te houden; Vercel bewaart deze logs kort ([privacybeleid van Vercel](${VERCEL_PRIVACY})).`,
          "We gebruiken **Vercel Web Analytics** om bezoeken per pagina geaggregeerd te tellen. Het gebruikt geen cookies, slaat niets op je apparaat op en identificeert je niet: bezoeken worden gegroepeerd met een hash die elke dag verandert, en je IP-adres wordt niet bewaard.",
          "**Deze website plaatst geen cookies**, toont geen advertenties en laadt geen trackers van derden. De lettertypen komen van ons eigen domein.",
        ] },
        { h: "8. Wat we niet doen", body: [
          { ul: [
            "Geen account, e-mail of wachtwoord.",
            "Geen advertenties en geen tracking via apps of websites van andere bedrijven.",
            "Geen analysetool in de app.",
            "Geen locatie, contacten, foto's of microfoon.",
            "We verkopen of verhuren je gegevens niet.",
          ] },
        ] },
        { h: "9. Rechtsgronden", body: [
          { ul: [
            "AI-instructeur en controle van aankopen: nodig om de dienst te leveren waar je om vraagt (art. 6 lid 1 sub b AVG).",
            "Tellers, IP-adres, tijdelijke opslag van de Pro-status en technische logs: ons gerechtvaardigd belang om misbruik te voorkomen, de dienst veilig en werkend te houden en de kosten te beheersen (art. 6 lid 1 sub f AVG).",
            "E-mails: je verzoek afhandelen (art. 6 lid 1 sub b AVG) of ons gerechtvaardigd belang om berichten te beantwoorden en gemelde fouten te verbeteren (art. 6 lid 1 sub f AVG).",
            "Logs en bezoekstatistieken van de website: ons gerechtvaardigd belang om de website veilig te tonen en te weten welke pagina's nuttig zijn (art. 6 lid 1 sub f AVG).",
          ] },
          "Je bent niet verplicht ons deze gegevens te geven. Zonder je vraag te sturen kan de instructeur die gewoon niet beantwoorden; de rest van de app werkt zonder.",
        ] },
        { h: "10. Wie gegevens ontvangt", body: [
          "Verwerkers die namens ons werken, met een verwerkersovereenkomst:",
          { ul: [
            "Vercel Inc. (VS) — hosting van onze server en deze website, websitestatistieken.",
            "Google Cloud (Google Ireland Ltd. / Google LLC, VS) — Vertex AI, dat de antwoorden van de instructeur maakt.",
            "Upstash, Inc. (VS) — dagtellers en tijdelijke opslag van de Pro-status (uiterlijk na 2 dagen gewist).",
            "RevenueCat, Inc. (VS) — controle van aankopen en Pro-status.",
            "Google (Gmail) — onze supportmailbox.",
          ] },
          "Apple (Apple Distribution International Ltd., Ierland, en Apple Inc.) ontvangt aankoopgegevens als zelfstandige verwerkingsverantwoordelijke wanneer je in de App Store koopt. We geven alleen gegevens aan autoriteiten als de wet dat vereist.",
        ] },
        { h: "11. Doorgifte buiten de EER", body: [
          "Vertex AI draait op de wereldwijde infrastructuur van Google, en Vercel, Upstash, RevenueCat en Google zijn Amerikaanse bedrijven, dus sommige gegevens kunnen buiten de Europese Economische Ruimte worden verwerkt. Die doorgifte berust op het adequaatheidsbesluit van de Europese Commissie over het EU-VS Data Privacy Framework voor gecertificeerde partijen en anders op de standaardcontractbepalingen van de Commissie (art. 46 lid 2 sub c AVG) in hun verwerkersovereenkomsten; voor gebruikers in het Verenigd Koninkrijk op de Britse uitbreiding van het Framework of het Britse addendum bij die bepalingen. Je kunt ons om een kopie van deze waarborgen vragen.",
        ] },
        { h: "12. Hoe lang we gegevens bewaren", body: [
          { ul: [
            "Gesprekken met de instructeur: bewaren we niet.",
            "Dagtellers: 2 dagen. Tijdelijke opslag van de Pro-status: 5 minuten.",
            "Serverlogs: hooguit 30 dagen.",
            "Aankoopgegevens bij RevenueCat: zolang Rondi die dienst gebruikt, tenzij je ons vraagt ze eerder te wissen; Apple bewaart zijn eigen gegevens volgens zijn beleid.",
            "E-mails: zolang we je verzoek afhandelen en tot 2 jaar daarna, daarna gewist.",
            "Websitelogs: de korte termijn die Vercel hanteert. Bezoekstatistieken zijn geaggregeerd en identificeren je niet.",
            "Gegevens op je iPhone: tot je ze of de app verwijdert.",
          ] },
        ] },
        { h: "13. Je rechten", body: [
          `Je hebt recht op inzage, rectificatie, wissing, beperking en overdraagbaarheid van je gegevens, en je kunt altijd **bezwaar** maken tegen verwerking op basis van ons gerechtvaardigd belang: mail naar ${MAIL}. We antwoorden binnen een maand. Omdat er geen account is, vertel ons ongeveer wanneer je de instructeur gebruikte of geef de ID als je die hebt, dan zoeken we je gegevens op; kunnen we geen gegevens aan je koppelen, dan laten we je dat weten.`,
          `Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens ([autoriteitpersoonsgegevens.nl](https://www.autoriteitpersoonsgegevens.nl)), bij de Spaanse AEPD (${AEPD}) of bij de toezichthouder van het EU-land waar je woont.`,
        ] },
        { h: "14. Geautomatiseerde besluiten", body: [
          "We nemen geen besluiten die uitsluitend op geautomatiseerde verwerking berusten en rechtsgevolgen voor je hebben of je in vergelijkbare mate treffen (art. 22 AVG). De AI-instructeur maakt studieantwoorden en de daglimieten voor vragen worden automatisch toegepast, maar geen van beide heeft rechtsgevolgen.",
        ] },
        { h: "15. Kinderen", body: [
          "Rondi is bedoeld voor mensen die hun rijbewijs halen. De app is niet gericht op kinderen jonger dan 14 jaar en we verzamelen niet bewust hun gegevens. Denk je dat een kind jonger dan 14 ons gegevens heeft gestuurd, mail ons dan en we wissen ze.",
        ] },
        { h: "16. Wijzigingen", body: [
          "Als de app of deze website gegevens anders gaan verwerken, passen we deze pagina en de datum bovenaan aan, en bij belangrijke wijzigingen laten we het je ook in de app weten.",
        ] },
      ],
    },
    terms: {
      title: "Gebruiksvoorwaarden",
      description: "Voorwaarden van Rondi: Rondi Pro als eenmalige aankoop of automatisch verlengend abonnement via de App Store, standaard-EULA van Apple, AI-instructeur, studiemateriaal, niet verbonden aan het CBR, DGT, TÜV/DEKRA, DVSA of Motorizzazione.",
      summary: `**Kort gezegd.** Rondi is een hulpmiddel om te leren. Je begint gratis en Rondi Pro is er als eenmalige aankoop of als automatisch verlengend abonnement, afgerekend door Apple. De instructeur is een AI en kan zich vergissen. Rondi is niet verbonden aan een examenorganisatie en de inhoud vervangt de officiële regels niet. Voor het gebruik geldt ook de [standaard licentieovereenkomst van Apple (EULA)](${EULA}). Niets hiervan neemt je rechten als consument weg.`,
      sections: [
        { h: "1. Wie we zijn en wat geldt", body: [
          `Rondi wordt aangeboden door **${C.legalName}** (Spaans fiscaal nummer ${C.taxId}), ${C.address}, contact ${MAIL}. Deze voorwaarden gelden voor het gebruik van de app samen met de [Licentieovereenkomst voor eindgebruikers van gelicentieerde Apple-apps (standaard-EULA)](${EULA}); bij tegenstrijdigheid geldt voor je gebruikslicentie de EULA van Apple. Voor aankopen in de App Store gelden daarnaast de [voorwaarden van Apple Mediadiensten](${AMS}).`,
        ] },
        { h: "2. Rondi Pro", body: [
          { ul: [
            "Rondi Pro heeft drie opties: **„Tot je slaagt“**, een eenmalige aankoop; een **maandabonnement**; en een **weekabonnement**. Er is geen gratis proefperiode. De prijs (en bij abonnementen de betaalperiode) zie je in de app, in je eigen valuta en inclusief belastingen, voordat je bevestigt.",
            "**„Tot je slaagt“** is een eenmalige in-app-aankoop (niet-verbruikbaar): die wordt één keer van je Apple-account afgeschreven bij bevestiging van de aankoop en wordt niet verlengd. Ondanks de naam vervalt hij niet als je slaagt: Rondi Pro blijft voorgoed ontgrendeld op dat Apple-account, en op een ander apparaat of na herinstallatie haal je de aankoop terug met **Aankopen herstellen**.",
            "Het **maand- en weekabonnement worden automatisch verlengd**. De betaling wordt van je Apple-account afgeschreven bij bevestiging van de aankoop.",
            "Het abonnement **verlengt automatisch** met dezelfde periode en prijs, tenzij je het minstens 24 uur voor het einde van de lopende periode opzegt. De verlenging wordt binnen 24 uur voor het einde van de periode afgerekend.",
            `Je beheert of zegt het abonnement op via **Instellingen → je naam → Abonnementen** op je iPhone, of via [apps.apple.com/account/subscriptions](${SUBS}). Na opzegging blijft Pro actief tot het einde van de betaalde periode.`,
            "Aankopen lopen via Apple, dat namens ons verkoopt en afrekent (in de Europese Unie en het Verenigd Koninkrijk treedt Apple Distribution International Ltd. op als onze commissionair) en betalingen, herroepingen en terugbetalingen afhandelt.",
            `**Herroepingsrecht en terugbetalingen.** Ben je consument in de EU of het Verenigd Koninkrijk, dan kun je volgens de voorwaarden van Apple een aankoop binnen 14 dagen na ontvangst van het bewijs zonder opgave van redenen annuleren; terugbetalingen en herroepingen vraag je aan bij Apple via [reportaproblem.apple.com](${RAP}) en Apple beslist volgens [zijn voorwaarden](${AMS}).`,
          ] },
        ] },
        { h: "3. De AI-instructeur", body: [
          "De instructeur in Rondi is een **AI-systeem** (Gemini-modellen van Google), geen mens en geen erkende rijinstructeur. Hij maakt zijn antwoorden automatisch op basis van de lessen van Rondi en kan zich vergissen of iets weglaten: controleer bij twijfel de officiële bron die hij noemt.",
          "Hij heeft een internetverbinding nodig en een **daglimiet voor vragen**, die je in de app ziet: gratis krijg je een paar vragen per dag, met Rondi Pro geldt een veel hogere fair-use-limiet die elke dag opnieuw begint. Deel alsjeblieft geen persoonsgegevens in je vragen.",
        ] },
        { h: "4. Studiemateriaal, niet de officiële regels", body: [
          "De lessen, vragen, uitleg en antwoorden van de instructeur van Rondi zijn **studiemateriaal**. We schrijven en controleren ze zorgvuldig aan de hand van de geldende regels in elk land, maar ze kunnen fouten bevatten of verouderen als regels veranderen. Ze vervangen niet de officiële wetgeving, het materiaal van de examenorganisaties of het advies van een rijschool, en zijn geen juridisch advies.",
          "Rondi garandeert niet dat je slaagt voor een examen.",
        ] },
        { h: "5. Niet verbonden aan een instantie", body: [
          "Rondi is onafhankelijk. De app is niet verbonden aan of goedgekeurd door het Centraal Bureau Rijvaardigheidsbewijzen (CBR), de Dirección General de Tráfico (DGT), TÜV, DEKRA, de Driver and Vehicle Standards Agency (DVSA) of het Italiaanse ministerie van Infrastructuur en Vervoer (Motorizzazione). De vragen zijn van onszelf, over dezelfde onderwerpen en in hetzelfde format als de officiële examens; het zijn geen officiële examenvragen. Namen van instanties en organisaties, die merken van hun eigenaars kunnen zijn, gebruiken we alleen om aan te geven op welk examen de app voorbereidt.",
        ] },
        { h: "6. Redelijk gebruik", body: [
          "De app en de instructeur zijn voor je eigen studie. Probeer niet de inhoud massaal te kopiëren, limieten te omzeilen, de dienst aan te vallen of de instructeur te gebruiken voor onderwerpen die niets met autorijden te maken hebben. Bij misbruik kunnen we de instructeur beperken.",
        ] },
        { h: "7. Intellectueel eigendom", body: [
          `Teksten, vragen, illustraties, ontwerp en code van Rondi zijn van ${C.legalName} of worden onder licentie gebruikt. Afbeeldingen van officiële verkeersborden en sommige foto's zijn publiek domein of vallen onder vrije licenties (zoals Creative Commons of de Open Government Licence); ze staan met maker en licentie in de app (Instellingen → Bronnen en vermeldingen) en mogen volgens die licenties worden hergebruikt. De vermeldingen van de afbeeldingen in de schermafbeeldingen op deze website staan bij de juridische informatie.`,
        ] },
        { h: "8. Als iets niet werkt", body: [
          `Je hebt de wettelijke garantie van conformiteit voor digitale inhoud en diensten (Richtlijn (EU) 2019/770, zoals omgezet in het Burgerlijk Wetboek). Werkt Rondi of Rondi Pro niet zoals beschreven, mail dan naar ${MAIL} en we lossen het op; je kunt ook Apple om terugbetaling vragen. We leveren de updates die nodig zijn om de app werkend en veilig te houden.`,
        ] },
        { h: "9. Aansprakelijkheid", body: [
          `${C.legalName} is onbeperkt aansprakelijk voor schade door opzet of grove nalatigheid, voor schade door dood of letsel en overal waar de wet geen beperking toestaat. Bij lichte nalatigheid zijn we alleen aansprakelijk als we een wezenlijke verplichting uit deze voorwaarden schenden, en alleen voor de voorzienbare schade die typisch is voor dit soort overeenkomst. We zijn niet aansprakelijk voor examenresultaten, die van jou afhangen. Niets in deze voorwaarden beperkt je rechten als consument volgens de wet van je land.`,
        ] },
        { h: "10. Wijzigingen in deze voorwaarden", body: [
          "We kunnen deze voorwaarden aanpassen als de app, de wet of ons aanbod verandert; de datum bovenaan toont de geldende versie. Raakt een wijziging jou, dan kondigen we die vooraf in de app aan. Wijzigingen gelden nooit voor aankopen die al gedaan zijn, en als je het er niet mee eens bent, kun je stoppen met de app en je abonnement opzeggen.",
        ] },
        { h: "11. Toepasselijk recht en geschillen", body: [
          `Op deze voorwaarden is Spaans recht van toepassing, onverminderd de dwingende consumentenbescherming van je woonland. Als consument kun je naar de rechter in het land waar je woont. Heb je een probleem, mail ons dan eerst via ${MAIL}. Het Europese platform voor onlinegeschillenbeslechting (ODR) is op 20 juli 2025 gesloten, en we zijn momenteel niet aangesloten bij een geschilleninstantie.`,
        ] },
      ],
    },
    support: {
      title: "Hulp",
      description: "Hulp bij Rondi: aankopen herstellen, abonnement opzeggen, terugbetalingen, de daglimiet van de AI-instructeur, examenland of taal wijzigen, voortgang wissen, privacy en contact.",
      summary: `**Hulp nodig?** Mail naar ${MAIL}, we antwoorden meestal binnen 1–2 werkdagen. In de app: Instellingen → Hulp.`,
      sections: [
        { h: "Aankopen herstellen", body: [
          "Nieuwe iPhone of de app opnieuw geïnstalleerd? Open Rondi en ga naar **Instellingen → Abonnement → Aankopen herstellen** (ook op het Pro-scherm). Zo komen zowel de eenmalige aankoop „Tot je slaagt“ als een actief abonnement terug. Zorg dat je bent ingelogd met hetzelfde Apple-account waarmee je Rondi Pro hebt gekocht.",
        ] },
        { h: "Abonnement opzeggen of wijzigen", body: [
          `Abonnementen worden beheerd door Apple. Open op je iPhone **Instellingen → je naam → Abonnementen → Rondi**, of ga naar [apps.apple.com/account/subscriptions](${SUBS}). Zeg minstens 24 uur voor de verlenging op om de volgende afschrijving te voorkomen. Dit geldt alleen voor het maand- en weekabonnement: de eenmalige aankoop „Tot je slaagt“ wordt niet verlengd, dus daar valt niets op te zeggen.`,
        ] },
        { h: "Terugbetalingen en herroeping binnen 14 dagen", body: [
          `Betalingen lopen via Apple, dus terugbetalingen — en in de EU en het Verenigd Koninkrijk het annuleren van een aankoop binnen 14 dagen — vraag je aan bij Apple via [reportaproblem.apple.com](${RAP}). Werkt er iets niet in Rondi, laat het ons dan ook weten zodat we het oplossen.`,
        ] },
        { h: "De daglimiet van de AI-instructeur", body: [
          "De instructeur is een AI en heeft een aantal vragen per dag, dat je in de app ziet. Heb je dat bereikt, dan begint het de volgende dag opnieuw. Hij heeft een internetverbinding nodig; lessen, vragen en borden werken offline.",
        ] },
        { h: "Examenland of taal wijzigen", body: [
          "Ga naar **Instellingen → Jouw examen**. «Land van het examen» schakelt regels, borden en examenformat om (Spanje, Duitsland, Verenigd Koninkrijk, Italië, Nederland). «Taal van de app» verandert de taal van de app; die kan anders zijn dan het examenland.",
        ] },
        { h: "Je voortgang wissen", body: [
          "Rondi heeft geen account: alles staat op je iPhone. Gebruik **Instellingen → Al mijn voortgang wissen**, of verwijder de app.",
        ] },
        { h: "Privacyverzoeken", body: [
          `Voor inzage, wissing of bezwaar tegen gegevens aan onze kant (bijvoorbeeld de tellers van de instructeur) mail je naar ${MAIL}. De details staan in de privacyverklaring.`,
        ] },
        { h: "Fout in een vraag gevonden?", body: [
          `Tik op het vlaggetje bij de correctie van die vraag (dat opent een e-mail met de vraag erin), of mail naar ${MAIL} met de vraag en je land. We bekijken elke melding.`,
        ] },
        { h: "Contact", body: [
          `${MAIL} · ${C.legalName}, ${C.address}.`,
        ] },
      ],
    },
    legal: {
      title: "Juridische informatie",
      description: "Juridische informatie over Rondi (art. 10 van de Spaanse wet 34/2002, LSSI-CE): TREMPIDO S.L., B75830257, Barcelona, en vermeldingen van de afbeeldingen op deze website.",
      sections: [
        { h: "Eigenaar van de app en deze website", body: [
          "Volgens artikel 10 van de Spaanse wet 34/2002 over diensten van de informatiemaatschappij en elektronische handel (LSSI-CE):",
          { ul: owner({ company: "Bedrijf", taxId: "Fiscaal nummer (NIF)", address: "Statutair adres", email: "E-mail", registry: "Inschrijving handelsregister", representative: "Vertegenwoordigd door", vatId: "Btw-nummer", activity: "Activiteit: ontwikkeling en publicatie van mobiele apps." }, " (Spaanse besloten vennootschap)") },
        ] },
        { h: "Doel", body: [
          "Deze website geeft informatie over de app Rondi en de juridische voorwaarden. De app wordt uitsluitend via de App Store van Apple verspreid.",
        ] },
        { h: "Intellectueel eigendom", body: [
          `De inhoud van deze website en van de app (teksten, ontwerp, logo's, schermafbeeldingen, code) is van ${C.legalName} of wordt onder licentie gebruikt. Overnemen zonder toestemming is niet toegestaan, behalve voor werken van derden onder vrije licenties, die iedereen volgens hun licentie mag hergebruiken. Rondi is niet verbonden aan een examenorganisatie (CBR, DGT, TÜV, DEKRA, DVSA, Motorizzazione); hun namen kunnen merken van hun eigenaars zijn en worden alleen beschrijvend gebruikt.`,
        ] },
        { h: "Vermeldingen van afbeeldingen op deze website", body: [
          "De schermafbeeldingen van de app op deze website tonen enkele afbeeldingen van derden, verkleind en bijgesneden. De verkeersborden zijn officiële ontwerpen in het publieke domein, behalve het bord hieronder. De overige afbeeldingen zijn:",
          { ul: [
            ...creditLines("door", "bron"),
            `Illustratie van de rotonde (Britse schermafbeeldingen): ${HC_ILLUSTRATION}. ${OGL_LINE}`,
          ] },
          "De schermafbeeldingen van de app met werken onder CC BY-SA worden onder dezelfde licentie gedeeld. De volledige vermeldingen van de app staan in Rondi, onder Instellingen → Bronnen en vermeldingen.",
        ] },
        { h: "Aansprakelijkheid", body: [
          "We doen ons best om de informatie juist en actueel te houden, maar zijn, tenzij de wet anders bepaalt, niet aansprakelijk voor fouten of voor het gebruik ervan. Links naar externe sites zijn er voor het gemak; we hebben geen controle over de inhoud.",
        ] },
        { h: "Toepasselijk recht", body: [
          "Het Spaanse recht is van toepassing. Consumenten kunnen terecht bij de rechter van hun woonplaats.",
        ] },
      ],
    },
  },
}
