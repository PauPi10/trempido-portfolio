/* Branded OG image (1200×630) for every Pick page, generated at build
   with the app's real logo and recipe photos. */

import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Pick — eat well, stress less. Weekly dinner plans on your budget."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const DISHES = ["chicken-ramen-bowl", "beef-tacos", "greek-chicken-salad", "chicken-tikka-masala-rice"]

export default async function OgImage() {
  const [logo, ...dishes] = await Promise.all([
    readFile(join(process.cwd(), "public/images/pick/logo.png")),
    ...DISHES.map((id) => readFile(join(process.cwd(), `public/images/pick/dishes/${id}.jpg`))),
  ])
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`
  const dishSrcs = dishes.map((d) => `data:image/jpeg;base64,${d.toString("base64")}`)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f7f6f1",
          backgroundImage: "radial-gradient(circle at 85% 15%, rgba(201,229,168,0.6) 0%, rgba(247,246,241,0) 55%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* left: brand + claim */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 20px 72px 80px",
            width: 680,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={88} height={88} style={{ borderRadius: 24 }} alt="" />
            <div style={{ fontSize: 60, fontWeight: 800, color: "#141414", letterSpacing: "-2px" }}>pick</div>
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.02,
              color: "#141414",
              letterSpacing: "-3px",
            }}
          >
            eat well,
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.02,
              color: "#6fb52c",
              letterSpacing: "-3px",
              fontStyle: "italic",
            }}
          >
            stress less
          </div>
          <div style={{ marginTop: 28, fontSize: 27, color: "#6b7075", lineHeight: 1.4 }}>
            A week of dinners on your budget, with a grocery list sorted by aisle. For iPhone.
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 34, alignItems: "center" }}>
            {["229 recipes", "3-day free trial", "No account"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "9px 18px",
                  borderRadius: 999,
                  background: "rgba(201,229,168,0.5)",
                  border: "1.5px solid rgba(111,181,44,0.4)",
                  color: "#2e5312",
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

        {/* right: 2×2 grid of real recipe photos */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            gap: 18,
            width: 520,
            padding: "40px 0",
          }}
        >
          {dishSrcs.map((src, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={i}
              src={src}
              width={225}
              height={225}
              style={{
                borderRadius: 28,
                objectFit: "cover",
                transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
                boxShadow: "0 20px 40px -18px rgba(46,83,18,0.4)",
              }}
              alt=""
            />
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
