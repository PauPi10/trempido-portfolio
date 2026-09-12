/* Branded OG images (1200×630), one per page family, generated at build with
   the app's real art. Served at https://karicoach.app/og/<variant> via the
   host rewrite, so og:image never goes through a redirect.
   Variants: home, es, science, compare, dating, career, persuasion, everyday,
   relationships. */

import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { CATEGORIES } from "@/lib/kari-categories"

export const dynamic = "force-static"
export const dynamicParams = false

const SIZE = { width: 1200, height: 630 }

type Variant = {
  eyebrow: string
  line1: string
  line2: string
  sub: string
  chips: string[]
  art: string
  artRadius?: number
}

const VARIANTS: Record<string, Variant> = {
  home: {
    eyebrow: "Kari",
    line1: "Your social gym,",
    line2: "by voice.",
    sub: "Practice real conversations out loud with an AI coach — and get a report on exactly what to improve.",
    chips: ["160+ roleplays", "45 voice lessons", "Science-backed"],
    art: "public/images/kari/char/kari.png",
  },
  es: {
    eyebrow: "Kari",
    line1: "Tu gimnasio social,",
    line2: "por voz.",
    sub: "Practica conversaciones reales en voz alta con una coach de IA y recibe un informe de qué mejorar.",
    chips: ["+160 roleplays", "45 lecciones por voz", "Base científica"],
    art: "public/images/kari/char/kari.png",
  },
  science: {
    eyebrow: "Kari · The science",
    line1: "Built on evidence,",
    line2: "not vibes.",
    sub: "Simulated exposure matches real exposure (d = −1.39 vs −1.41). Skills training adds d = 0.87. Vocal charisma moves in hours.",
    chips: ["6 studies cited", "DOIs linked", "Reviewed Sep 2026"],
    art: "public/images/kari/char/kari.png",
  },
  compare: {
    eyebrow: "Kari · Compare",
    line1: "Kari vs CharmXP,",
    line2: "Vocal Image, ChatGPT.",
    sub: "Who answers, what gets measured, what you pay for. Facts from each App Store listing, September 2026.",
    chips: ["Voice vs text", "Counted feedback", "Honest table"],
    art: "public/images/kari/char/kari.png",
  },
  ...Object.fromEntries(
    CATEGORIES.map((c) => [
      c.slug,
      {
        eyebrow: `Kari · ${c.name}`,
        line1: c.h1.split(",")[0].length < 26 ? c.h1.split(",")[0] : c.name,
        line2: "out loud.",
        sub: c.description.split(":")[0] + ".",
        chips: [`${c.name}`, "Characters who push back", "Report on what you did"],
        art: `public${c.img}`,
        artRadius: 40,
      } satisfies Variant,
    ]),
  ),
}

export function generateStaticParams() {
  return Object.keys(VARIANTS).map((variant) => ({ variant }))
}

export async function GET(_req: Request, { params }: { params: Promise<{ variant: string }> }) {
  const { variant } = await params
  const v = VARIANTS[variant] ?? VARIANTS.home
  const [art, logo] = await Promise.all([
    readFile(join(process.cwd(), v.art)),
    readFile(join(process.cwd(), "public/images/kari/logo.png")),
  ])
  const artSrc = `data:image/png;base64,${art.toString("base64")}`
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F6EDDD",
          backgroundImage: "radial-gradient(circle at 88% 18%, rgba(239,193,99,0.55) 0%, rgba(246,237,221,0) 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "64px 10px 64px 80px", width: 720 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={72} height={72} style={{ borderRadius: 18 }} alt="" />
            <div style={{ fontSize: 40, fontWeight: 800, color: "#5D2410" }}>{v.eyebrow}</div>
          </div>
          <div style={{ marginTop: 34, fontSize: 60, fontWeight: 800, lineHeight: 1.06, color: "#5D2410", letterSpacing: "-2px" }}>{v.line1}</div>
          <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.06, color: "#C96A1E", letterSpacing: "-2px", fontStyle: "italic" }}>{v.line2}</div>
          <div style={{ marginTop: 26, fontSize: 25, color: "rgba(51,24,10,0.72)", lineHeight: 1.4 }}>{v.sub}</div>
          <div style={{ display: "flex", gap: 12, marginTop: 30, alignItems: "center", flexWrap: "wrap" }}>
            {v.chips.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "9px 18px",
                  borderRadius: 999,
                  background: "rgba(239,193,99,0.35)",
                  border: "1.5px solid rgba(201,106,30,0.4)",
                  color: "#7C3F12",
                  fontSize: 19,
                  fontWeight: 700,
                  alignItems: "center",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: v.artRadius ? "center" : "flex-end", justifyContent: "center", width: 460, position: "relative" }}>
          <div
            style={{
              position: "absolute",
              bottom: v.artRadius ? 60 : -140,
              width: 520,
              height: 520,
              borderRadius: 9999,
              background: "linear-gradient(160deg, #EFC163 0%, #C96A1E 80%)",
              display: "flex",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={artSrc} width={v.artRadius ? 380 : 430} height={v.artRadius ? 380 : 430} style={{ position: "relative", borderRadius: v.artRadius ?? 0 }} alt="" />
        </div>
      </div>
    ),
    { ...SIZE },
  )
}
