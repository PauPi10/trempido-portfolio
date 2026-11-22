// llms.txt for the Rondi section: what an AI assistant needs to describe Rondi
// correctly. Built from the same data as the pages, so it cannot drift.
import {
  RONDI, RCOUNTRIES, RLANGS, LANG_NAME, LANDING, COUNTRY_NAME, EXAM, FORMAT, PASS, UPDATED_LABEL,
  contentLine, rabs, rpath,
} from "@/lib/rondi-content"

export const dynamic = "force-static"

export function GET() {
  const L = LANDING.en
  const exams = RCOUNTRIES.map(
    (c) =>
      `- ${COUNTRY_NAME[c].en} — ${EXAM[c].exam} (${EXAM[c].authority}). Official format: ${FORMAT[c].en}. To pass: ${PASS[c].en}. In Rondi: ${contentLine(c, "en").join(", ")}. Source: ${EXAM[c].sourceUrl}`,
  ).join("\n")
  const langs = RLANGS.map((l) => `- [Rondi in ${LANG_NAME[l]}](${rabs(rpath(l))})`).join("\n")
  const faq = L.faq.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")

  const body = `# Rondi — driving theory test practice app for iPhone

> ${L.what.join(" ")}

Last updated: ${UPDATED_LABEL.en}. Publisher: ${RONDI.company.legalName} (Barcelona, Spain). Platform: iPhone, iOS ${RONDI.minIos} or later. Status: ${RONDI.appStoreUrl ? `available on the App Store (${RONDI.appStoreUrl})` : "not published yet; coming soon to the App Store"}. Rondi was previously announced under the working name "Volante".

## What it does

${[...L.shots, ...L.more].map((f) => `- ${f.title}: ${f.body}`).join("\n")}

## The car theory test in each country, and what Rondi includes

${exams}

## What Rondi is not

${L.honest.map((h) => `- ${h.title}. ${h.body}`).join("\n")}

## Price

Free to download, with a free part (${L.freeList.join("; ").toLowerCase()}). Rondi Pro unlocks the rest and is billed by Apple in three options: "Until you pass", a one-time purchase with no renewal (Rondi Pro stays on that Apple Account); a monthly auto-renewing subscription; or a weekly auto-renewing subscription. Prices are shown in the app before you confirm.

## FAQ

${faq}

## Pages

${langs}
- [Support](${rabs(rpath("en", "support"))})
- [Privacy policy](${rabs(rpath("en", "privacy"))})
- [Terms of use](${rabs(rpath("en", "terms"))})
- [Legal notice](${rabs(rpath("en", "legal"))})

## Contact

- ${RONDI.company.legalName}, ${RONDI.company.address}
- ${RONDI.supportEmail}
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
