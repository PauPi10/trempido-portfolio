import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Mic, Flame, ClipboardList, Gauge, LayoutGrid, Lock, ArrowRight, ExternalLink } from "lucide-react"
import { KARI, TOTAL_ROLEPLAYS } from "@/lib/kari-content"
import {
  KARI_ES,
  SKILLS_ES,
  HOW_STEPS_ES,
  ROLEPLAY_CATEGORIES_ES,
  FEATURES_ES,
  REPORT_ES,
  SCIENCE_ES,
  FAQS_ES,
} from "@/lib/kari-content-es"
import { ORG_ID } from "@/lib/kari-ld"
import { KariNav, KariFooter, CtaBanner } from "@/components/kari/chrome"
import { Sunburst, Voice, JsonLd } from "@/components/kari/bits"
import { Reveal } from "@/components/kari/reveal"
import { SceneIcon } from "@/components/kari/scene-icon"

const URL_ES = `${KARI.siteUrl}/es`

export const metadata: Metadata = {
  alternates: {
    canonical: URL_ES,
    languages: { en: KARI.siteUrl, es: URL_ES, "x-default": KARI.siteUrl },
  },
}

const FEATURE_ICONS = { mic: Mic, flame: Flame, report: ClipboardList, gauge: Gauge, grid: LayoutGrid, lock: Lock } as const

const SHOTS_ES = [
  { src: "/images/kari/shots/es-1.webp", alt: "Captura de Kari en la App Store: «Domina tus habilidades sociales», con las áreas Carisma, Influencia, Confianza, Límites y Conecta con cualquiera." },
  { src: "/images/kari/shots/es-5.webp", alt: "Captura de Kari: pantalla de Roleplay con 160 situaciones reales, como hablar con tu vecino sobre el ruido o defender tu turno en la cola." },
  { src: "/images/kari/shots/es-6.webp", alt: "Captura de Kari: conversación en tiempo real con María, un personaje que escucha, responde y se adapta mientras hablas." },
  { src: "/images/kari/shots/es-4.webp", alt: "Captura de Kari: «Hola, soy Kari, ¿qué te gustaría mejorar hoy?», coaching centrado en tus objetivos." },
  { src: "/images/kari/shots/es-3.webp", alt: "Captura de Kari: «Conoce a tu coach social personal», practica conversaciones reales y recibe feedback al instante." },
  { src: "/images/kari/shots/es-2.webp", alt: "Captura de Kari: más citas, relaciones más fuertes, conversaciones más profundas, ascensos más rápidos, confianza de verdad." },
]

const SHOTS_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${URL_ES}#screenshots`,
  name: "Capturas de la app Kari",
  inLanguage: "es",
  itemListElement: SHOTS_ES.map((s, i) => ({
    "@type": "ImageObject",
    position: i + 1,
    contentUrl: `${KARI.siteUrl}${s.src}`,
    url: `${KARI.siteUrl}${s.src}`,
    caption: s.alt,
    width: 920,
    height: 1993,
    representativeOfPage: i === 0,
  })),
}

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${URL_ES}#faq`,
  inLanguage: "es",
  mainEntity: FAQS_ES.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const PAGE_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${URL_ES}#webpage`,
  url: URL_ES,
  name: "Kari — Coach de carisma por voz",
  inLanguage: "es",
  isPartOf: { "@id": `${KARI.siteUrl}/#website` },
  about: { "@id": `${KARI.siteUrl}/#app` },
  publisher: { "@id": ORG_ID },
  datePublished: KARI.lastReviewed,
  dateModified: KARI.lastReviewed,
}

export default function KariHomeEs() {
  return (
    <>
      <KariNav lang="es" />
      <JsonLd data={[PAGE_LD, FAQ_LD, SHOTS_LD]} />
      <main>
        {/* HERO */}
        <section className="k-hero">
          <Sunburst size={640} style={{ top: -230, left: -230 }} />
          <div className="k-wrap k-hero__grid">
            <div>
              <Reveal>
                <span className="k-hero__badge">
                  <span className="k-dot" />
                  Voz en directo con IA · para iPhone
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="k-display">
                  Tu gimnasio social, <span className="k-gold-word">por voz</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="k-lead" style={{ marginTop: 26 }}>
                  Kari es una coach de carisma con la que entrenas <strong style={{ color: "var(--k-teja)" }}>hablando en voz alta</strong>.
                  Conversaciones reales con personajes que te responden, y un informe que te dice exactamente
                  qué mejorar: muletillas contadas, silencios medidos, cero halagos.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
                  <a className="k-btn k-btn--primary" href={KARI.appStoreUrl} target="_blank" rel="noopener">
                    Descargar en la App Store
                  </a>
                  <Link className="k-btn k-btn--ghost" href="/how-it-works" hrefLang="en">
                    Cómo funciona <ArrowRight size={17} />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="k-hero__meta">
                  <span><strong>{TOTAL_ROLEPLAYS}+</strong> escenas para practicar</span>
                  <span><strong>45</strong> lecciones habladas</span>
                  <span><strong>{KARI.languages}</strong> idiomas</span>
                  <span><strong>Base</strong> científica</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="k-device" aria-hidden="true">
                <div className="k-bubble k-bubble--them" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <Image className="k-ava" src="/images/kari/char/noa.png" alt="" width={44} height={44} />
                  <span>
                    <span className="k-bubble__who">Noa · acercamiento en frío en un bar</span>
                    ¿Otro «¿vienes mucho por aquí?»? ¿En serio?
                  </span>
                </div>
                <div className="k-bubble k-bubble--you">
                  <span className="k-bubble__who" style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    Tú, en voz alta <Voice />
                  </span>
                  Sin frase. Te he oído defender la pizza con piña y necesito entenderlo.
                </div>
                <div className="k-bubble k-bubble--them">
                  <span className="k-bubble__who">Noa</span>
                  Vale… tienes tres minutos. Sorpréndeme.
                </div>
                <div className="k-report-chip">
                  <div className="k-report-chip__title">
                    <Voice /> Informe de sesión
                  </div>
                  <div className="k-report-chip__rows">
                    <div><span>Muletillas</span> <strong>7 contadas</strong></div>
                    <div><span>Preguntas de seguimiento</span> <strong>2</strong></div>
                    <div><span>Silencios de más de 4 s</span> <strong>2</strong></div>
                    <div><span>Misión</span> <strong>cumplida</strong></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* QUÉ ES (bloque citable) */}
        <section className="k-section k-section--tight" aria-label="Qué es Kari">
          <div className="k-wrap k-prose" style={{ maxWidth: 800 }}>
            <Reveal>
              <h2 className="k-h2" style={{ fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>¿Qué es Kari?</h2>
              <p style={{ marginTop: 16 }}>
                {KARI_ES.oneLiner} No es una app de teoría ni un chatbot al que escribes: es entrenamiento.
                Combina 45 lecciones habladas, cada una con una técnica concreta que practicas al momento,
                con más de {TOTAL_ROLEPLAYS} roleplays en los que un personaje con carácter te responde y
                solo cede cuando la técnica está bien usada. Al terminar, el informe mide conducta, no
                sensaciones: muletillas contadas una a una, silencios de más de cuatro segundos, preguntas
                de seguimiento, equilibrio de tiempo de habla y cuatro rasgos puntuados (Escucha, Claridad,
                Confianza y Tono). Con ellos Kari calibra un número de carisma de 0 a 100 y te señala tu
                palanca: el rasgo que más puntos te está costando. Es una herramienta educativa, no un
                servicio médico ni psicológico.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CAPTURAS */}
        <section className="k-section k-section--tight" aria-label="Capturas de la app">
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">Dentro de la app</span>
              <h2 className="k-h2" style={{ marginTop: 14, maxWidth: "22ch" }}>
                Así es una <span className="k-italic">sesión</span>
              </h2>
            </Reveal>
            <div className="k-grid-3" style={{ marginTop: 36, alignItems: "start" }}>
              {SHOTS_ES.map((sh, i) => (
                <Reveal key={sh.src} delay={(i % 3) * 0.08}>
                  <figure style={{ margin: 0 }}>
                    <Image
                      src={sh.src}
                      alt={sh.alt}
                      width={920}
                      height={1993}
                      sizes="(max-width: 720px) 90vw, 30vw"
                      style={{ width: "100%", height: "auto", borderRadius: 26, boxShadow: "var(--k-shadow)" }}
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <a className="k-btn k-btn--ghost" href={KARI.appStoreUrl} target="_blank" rel="noopener" style={{ marginTop: 30 }}>
                Verla en la App Store <ArrowRight size={17} />
              </a>
            </Reveal>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="k-section" style={{ background: "var(--k-paper-deep)" }}>
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">El bucle que funciona</span>
              <h2 className="k-h2" style={{ marginTop: 14, maxWidth: "18ch" }}>
                Aprende la técnica, pruébala, <span className="k-italic">mira qué falló.</span>
              </h2>
            </Reveal>
            <div style={{ marginTop: 48 }}>
              {HOW_STEPS_ES.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="k-step">
                    <div className="k-step__n">{s.n}</div>
                    <div>
                      <div className="k-step__kicker">{s.kicker}</div>
                      <h3 className="k-h3">{s.title}</h3>
                      <p className="k-muted" style={{ marginTop: 10, maxWidth: "62ch" }}>{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INFORME (oscuro) */}
        <section className="k-section k-dark">
          <Sunburst size={560} color="rgba(239,193,99,0.06)" style={{ top: -200, right: -180 }} />
          <div className="k-wrap">
            <div className="k-grid-2" style={{ gap: "clamp(36px, 5vw, 72px)", alignItems: "center" }}>
              <div>
                <Reveal>
                  <div className="k-coach">
                    <Image src="/images/kari/char/kari.png" alt="Kari, la coach de carisma de la app" width={72} height={72} />
                    <div>
                      <div className="k-coach__name">Kari</div>
                      <div className="k-coach__sub">Tu coach. Lo oye todo.</div>
                    </div>
                  </div>
                  <span className="k-eyebrow">El informe</span>
                  <h2 className="k-h2" style={{ marginTop: 14 }}>
                    Una coach que <span className="k-italic" style={{ color: "var(--k-gold)" }}>no te hace la pelota</span>
                  </h2>
                  <p className="k-lead" style={{ marginTop: 20 }}>
                    Cada sesión termina con evidencia, no con ánimos: tus muletillas contadas una a una, tus
                    silencios cronometrados, tus frases literales analizadas. Cuatro rasgos medidos, Escucha,
                    Claridad, Confianza y Tono, y la única palanca que te frena.
                  </p>
                  <p className="k-muted" style={{ marginTop: 16, fontStyle: "italic" }}>«{REPORT_ES.verdict}»</p>
                </Reveal>
              </div>
              <Reveal delay={0.12}>
                <div className="k-evidence">
                  <div className="k-evidence__row">
                    <span><b>{REPORT_ES.title}</b><span style={{ display: "block", fontSize: "0.84rem", opacity: 0.75 }}>Informe de sesión</span></span>
                    <strong>{REPORT_ES.score} <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>carisma</span></strong>
                  </div>
                  {REPORT_ES.metrics.map((m) => (
                    <div className="k-evidence__row" key={m.label}>
                      <span>{m.label}<span style={{ display: "block", fontSize: "0.84rem", opacity: 0.75 }}>{m.note}</span></span>
                      <strong>{m.value}</strong>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* POR QUÉ KARI */}
        <section className="k-section">
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">Por qué Kari es distinta</span>
              <h2 className="k-h2" style={{ marginTop: 14, maxWidth: "20ch" }}>
                No son lecciones sobre hablar. <span className="k-italic">Es hablar.</span>
              </h2>
            </Reveal>
            <div className="k-grid-3" style={{ marginTop: 44 }}>
              {FEATURES_ES.map((f, i) => {
                const Icon = FEATURE_ICONS[f.icon as keyof typeof FEATURE_ICONS]
                return (
                  <Reveal key={f.title} delay={(i % 3) * 0.08}>
                    <div className="k-card" style={{ height: "100%" }}>
                      <div className="k-icon-tile"><Icon size={22} /></div>
                      <h3 className="k-h3" style={{ fontSize: "1.25rem" }}>{f.title}</h3>
                      <p className="k-muted" style={{ marginTop: 8, fontSize: "0.97rem" }}>{f.body}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ROLEPLAYS */}
        <section className="k-section" style={{ background: "var(--k-paper-deep)" }}>
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">{TOTAL_ROLEPLAYS}+ roleplays</span>
              <h2 className="k-h2" style={{ marginTop: 14, maxWidth: "22ch" }}>
                Todas las conversaciones que llevas tiempo <span className="k-italic">evitando</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="k-catart" style={{ marginTop: 40 }}>
                {ROLEPLAY_CATEGORIES_ES.map((c) => (
                  <a key={c.id} href={`#${c.id}`} className="k-catart__item" style={{ textDecoration: "none" }}>
                    <Image src={c.img} alt={`Roleplays de ${c.name.toLowerCase()}: ${c.count} escenas`} width={84} height={84} />
                    <div className="k-catart__name">{c.name}</div>
                    <div className="k-catart__count">{c.count} escenas</div>
                  </a>
                ))}
              </div>
            </Reveal>
            {ROLEPLAY_CATEGORIES_ES.map((c) => (
              <div key={c.id} id={c.id} style={{ marginTop: 48 }}>
                <Reveal>
                  <h3 className="k-h3" style={{ fontSize: "1.5rem" }}>
                    {c.name} <span className="k-muted" style={{ fontSize: "1rem", fontWeight: 500 }}>· {c.count} escenas</span>
                  </h3>
                  <p className="k-muted" style={{ marginTop: 8, maxWidth: "62ch" }}>{c.blurb}</p>
                </Reveal>
                <div className="k-grid-3" style={{ marginTop: 22 }}>
                  {c.scenes.map((s, i) => (
                    <Reveal key={s.title} delay={i * 0.06}>
                      <article className="k-scene" style={{ height: "100%" }}>
                        <span className="k-scene__icon"><SceneIcon name={s.icon} size={22} /></span>
                        <h4 className="k-scene__title">{s.title}</h4>
                        <p className="k-scene__char">{s.character}</p>
                        <p className="k-scene__mission">Tu misión: {s.mission}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
            <Reveal>
              <Link className="k-btn k-btn--ghost" href="/roleplays" hrefLang="en" style={{ marginTop: 34 }}>
                Ver las {TOTAL_ROLEPLAYS}+ escenas (en inglés) <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* HABILIDADES */}
        <section className="k-section">
          <div className="k-wrap">
            <div className="k-grid-2" style={{ alignItems: "center", gap: "clamp(30px,4vw,60px)" }}>
              <Reveal>
                <span className="k-eyebrow">9 habilidades · 45 lecciones</span>
                <h2 className="k-h2" style={{ marginTop: 14 }}>
                  De la charla casual a la <span className="k-italic">negociación</span>
                </h2>
                <p className="k-lead" style={{ marginTop: 18 }}>
                  Cada habilidad son cinco lecciones habladas: una técnica concreta, practicada en voz alta con
                  Kari corrigiendo tus palabras literales, hasta que sube la dificultad.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="k-skill__tags" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {SKILLS_ES.map((s) => (
                    <li className="k-tag" key={s.name} style={{ fontSize: "0.95rem", padding: "10px 18px" }} title={s.tagline}>
                      {s.name}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CIENCIA */}
        <section className="k-section" style={{ background: "var(--k-paper-deep)" }}>
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">Basado en evidencia</span>
              <h2 className="k-h2" style={{ marginTop: 14, maxWidth: "22ch" }}>
                ¿De verdad funciona entrenar el carisma <span className="k-italic">por voz?</span>
              </h2>
              <p className="k-lead" style={{ marginTop: 18, maxWidth: "70ch" }}>
                Sí, dentro de los límites que marca la investigación. El diseño de Kari parte de 75 afirmaciones
                extraídas de estudios primarios y meta-análisis sobre carisma, exposición y entrenamiento de
                habilidades. Estas son las que sostienen cada regla de la app.
              </p>
            </Reveal>
            <div className="k-grid-3" style={{ marginTop: 44 }}>
              {SCIENCE_ES.slice(0, 3).map((s, i) => (
                <Reveal key={s.claim} delay={i * 0.08}>
                  <div className="k-stat">
                    <div className="k-stat__big">{s.stat}</div>
                    <h3 className="k-h3" style={{ fontSize: "1.2rem" }}>{s.claim}</h3>
                    <p className="k-muted" style={{ marginTop: 8, fontSize: "0.93rem" }}>{s.detail}</p>
                    <span className="k-stat__src">
                      {s.url ? (
                        <a href={s.url} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                          {s.source} <ExternalLink size={12} aria-hidden="true" />
                        </a>
                      ) : s.source}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <Link className="k-btn k-btn--ghost" href="/science" hrefLang="en" style={{ marginTop: 36 }}>
                Leer toda la base científica (en inglés) <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="k-section k-section--tight">
          <div className="k-wrap" style={{ maxWidth: 860 }}>
            <Reveal>
              <span className="k-eyebrow">Dudas</span>
              <h2 className="k-h2" style={{ marginTop: 14 }}>Preguntas frecuentes</h2>
            </Reveal>
            <div className="k-faq" style={{ marginTop: 32 }}>
              {FAQS_ES.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner lang="es" />
      </main>
      <KariFooter lang="es" />
    </>
  )
}
