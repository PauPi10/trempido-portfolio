/* Branded OG image (1200×630) for every Kari page, generated at build
   with the app's real coach portrait. */

import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Kari — the AI charisma coach you talk to, out loud"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OgImage() {
  const [kari, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/images/kari/char/kari.png")),
    readFile(join(process.cwd(), "public/images/kari/logo.png")),
  ])
  const kariSrc = `data:image/png;base64,${kari.toString("base64")}`
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
        {/* left: brand + claim */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 10px 72px 80px",
            width: 700,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={84} height={84} style={{ borderRadius: 22 }} alt="" />
            <div style={{ fontSize: 58, fontWeight: 800, color: "#5D2410" }}>Kari</div>
          </div>
          <div
            style={{
              marginTop: 38,
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.06,
              color: "#5D2410",
              letterSpacing: "-2px",
            }}
          >
            Your social gym,
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.06,
              color: "#C96A1E",
              letterSpacing: "-2px",
              fontStyle: "italic",
            }}
          >
            by voice.
          </div>
          <div style={{ marginTop: 30, fontSize: 27, color: "rgba(51,24,10,0.72)", lineHeight: 1.4 }}>
            Practice real conversations out loud with an AI coach — and get a report on exactly what to improve.
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 34, alignItems: "center" }}>
            {["160+ roleplays", "45 voice lessons", "Science-backed"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "9px 18px",
                  borderRadius: 999,
                  background: "rgba(239,193,99,0.35)",
                  border: "1.5px solid rgba(201,106,30,0.4)",
                  color: "#7C3F12",
                  fontSize: 20,
                  fontWeight: 700,
                  alignItems: "center",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* right: the coach */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: 480,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: -140,
              width: 560,
              height: 560,
              borderRadius: 9999,
              background: "linear-gradient(160deg, #EFC163 0%, #C96A1E 80%)",
              display: "flex",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={kariSrc} width={430} height={430} style={{ position: "relative" }} alt="" />
        </div>
      </div>
    ),
    { ...size },
  )
}
