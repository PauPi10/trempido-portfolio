import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { KARI } from "@/lib/kari-content"
import { CATEGORIES, categoryBySlug } from "@/lib/kari-categories"
import { roleplaysIn, type RoleplaySlug } from "@/lib/kari-roleplays"
import { ORG_ID, ogImage } from "@/lib/kari-ld"
import { KariNav, KariFooter, CtaBanner } from "@/components/kari/chrome"
import { JsonLd, breadcrumbLd, Sunburst } from "@/components/kari/bits"
import { Reveal } from "@/components/kari/reveal"
import { SceneIcon } from "@/components/kari/scene-icon"

export const dynamicParams = false

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  const c = categoryBySlug(category)
  if (!c) return {}
  const url = `${KARI.siteUrl}/roleplays/${c.slug}`
  return {
    title: { absolute: `${c.title} — Kari` },
    description: c.description,
    alternates: { canonical: url },
    openGraph: { url, title: c.title, description: c.description, images: [{ url: ogImage(c.slug), width: 1200, height: 630 }] },
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const c = categoryBySlug(category)
  if (!c) notFound()
  const scenes = roleplaysIn(c.slug as RoleplaySlug)
  const url = `${KARI.siteUrl}/roleplays/${c.slug}`
  const popular = scenes.filter((s) => s.popular)
  const rest = scenes.filter((s) => !s.popular)
  const others = CATEGORIES.filter((o) => o.slug !== c.slug)

  const LD = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${url}#page`,
      url,
      name: c.title,
      description: c.description,
      inLanguage: "en",
      isPartOf: { "@id": `${KARI.siteUrl}/#website` },
      about: { "@id": `${KARI.siteUrl}/#app` },
      publisher: { "@id": ORG_ID },
      image: ogImage(c.slug),
      datePublished: KARI.lastReviewed,
      dateModified: KARI.lastReviewed,
      mainEntity: {
        "@type": "ItemList",
        name: `${c.name} roleplays in Kari`,
        numberOfItems: scenes.length,
        itemListOrder: "https://schema.org/ItemListUnordered",
        itemListElement: scenes.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.title,
          description: `${s.situation} ${s.character} Mission: ${s.mission}`,
          url: `${url}#${s.id}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: c.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    breadcrumbLd([
      { name: "Kari", path: "/" },
      { name: "Roleplays", path: "/roleplays" },
      { name: c.name, path: `/roleplays/${c.slug}` },
    ]),
  ]

  return (
    <>
      <KariNav current="/roleplays" />
      <JsonLd data={LD} />
      <main>
        <header className="k-pagehead">
          <Sunburst size={430} style={{ top: -160, right: -140 }} />
          <div className="k-wrap">
            <nav className="k-crumb" aria-label="Breadcrumb">
              <Link href="/">Kari</Link>
              <span aria-hidden="true">/</span>
              <Link href="/roleplays">Roleplays</Link>
              <span aria-hidden="true">/</span>
              <span>{c.name}</span>
            </nav>
            <div className="k-cat" style={{ alignItems: "center", marginTop: 8 }}>
              <Image src={c.img} alt="" width={72} height={72} style={{ filter: "drop-shadow(0 10px 16px rgba(93,36,16,0.22))" }} />
              <span className="k-eyebrow">{c.name} · {scenes.length} scenes</span>
            </div>
            <h1 className="k-display" style={{ marginTop: 16, fontSize: "clamp(2.4rem, 5.6vw, 4.2rem)" }}>{c.h1}</h1>
          </div>
        </header>

        {/* Direct answer block */}
        <section className="k-section k-section--tight" style={{ paddingTop: 0 }}>
          <div className="k-wrap k-prose" style={{ maxWidth: 800 }}>
            <Reveal>
              <h2 className="k-h2" style={{ fontSize: "clamp(1.5rem,2.8vw,2.1rem)" }}>{c.question}</h2>
              <p style={{ marginTop: 16 }}>{c.intro}</p>
              <p className="k-muted" style={{ fontSize: "0.88rem", marginTop: 10 }}>
                Scene list below is the app's full {c.name.toLowerCase()} catalog as of {KARI.lastReviewed}. Every scene is a live voice conversation; you speak, the character answers, and the session ends with a report.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Popular scenes */}
        {popular.length > 0 && (
          <section className="k-section k-section--tight" style={{ background: "var(--k-paper-deep)" }}>
            <div className="k-wrap">
              <Reveal>
                <span className="k-eyebrow">Most played</span>
                <h2 className="k-h2" style={{ marginTop: 14, fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>Where most people start</h2>
              </Reveal>
              <div className="k-grid-2" style={{ marginTop: 30 }}>
                {popular.map((s, i) => (
                  <Reveal key={s.id} delay={(i % 2) * 0.07}>
                    <article className="k-scene" id={s.id} style={{ height: "100%" }}>
                      <span className="k-scene__icon">{s.icon ? <SceneIcon name={s.icon} size={22} /> : null}</span>
                      <h3 className="k-scene__title">{s.title}</h3>
                      <p className="k-muted" style={{ marginTop: 6, fontSize: "0.95rem" }}>{s.situation}</p>
                      <p className="k-scene__char">{s.character}</p>
                      <p className="k-scene__mission">Mission: {s.mission}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Full catalog */}
        <section className="k-section k-section--tight">
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">The full list</span>
              <h2 className="k-h2" style={{ marginTop: 14, fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>
                All {scenes.length} {c.name.toLowerCase()} scenes
              </h2>
            </Reveal>
            <div className="k-grid-2" style={{ marginTop: 30 }}>
              {rest.map((s, i) => (
                <Reveal key={s.id} delay={(i % 2) * 0.05}>
                  <article className="k-scene" id={s.id} style={{ height: "100%" }}>
                    <span className="k-scene__icon">{s.icon ? <SceneIcon name={s.icon} size={22} /> : null}</span>
                    <h3 className="k-scene__title">{s.title}</h3>
                    <p className="k-muted" style={{ marginTop: 6, fontSize: "0.95rem" }}>{s.situation}</p>
                    <p className="k-scene__char">{s.character}</p>
                    <p className="k-scene__mission">Mission: {s.mission}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="k-section k-section--tight" style={{ background: "var(--k-paper-deep)" }}>
          <div className="k-wrap" style={{ maxWidth: 860 }}>
            <Reveal>
              <span className="k-eyebrow">Questions</span>
              <h2 className="k-h2" style={{ marginTop: 14, fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>About {c.name.toLowerCase()} practice</h2>
            </Reveal>
            <div className="k-faq" style={{ marginTop: 28 }}>
              {c.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Other categories */}
        <section className="k-section k-section--tight">
          <div className="k-wrap">
            <Reveal>
              <span className="k-eyebrow">More scenes</span>
              <h2 className="k-h2" style={{ marginTop: 14, fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>Other categories</h2>
            </Reveal>
            <div className="k-catart" style={{ marginTop: 30 }}>
              {others.map((o) => (
                <Link key={o.slug} href={`/roleplays/${o.slug}`} className="k-catart__item" style={{ textDecoration: "none" }}>
                  <Image src={o.img} alt="" width={84} height={84} />
                  <div className="k-catart__name">{o.name}</div>
                  <div className="k-catart__count">{roleplaysIn(o.slug).length} scenes</div>
                </Link>
              ))}
            </div>
            <Reveal>
              <Link className="k-btn k-btn--ghost" href="/roleplays" style={{ marginTop: 30 }}>
                All categories <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </section>

        <CtaBanner title={`Pick a ${c.short.toLowerCase()} scene and say it out loud.`} body={`${scenes.length} ${c.name.toLowerCase()} scenes, each with a character who reacts and a report that counts what you did. Five minutes.`} />
      </main>
      <KariFooter />
    </>
  )
}
