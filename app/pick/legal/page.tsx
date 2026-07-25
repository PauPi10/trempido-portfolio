import type { Metadata } from "next"
import { PICK } from "@/lib/pick-content"
import { LegalChrome, LegalHeader } from "@/components/pick/chrome"

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice and owner identification for Pick, published by TREMPIDO SL.",
  alternates: {
    canonical: "/pick/legal",
    languages: {
      en: "https://www.trempido.com/pick/legal",
      "es-ES": "https://www.trempido.com/pick/es/aviso-legal",
      "x-default": "https://www.trempido.com/pick/legal",
    },
  },
}

export default function LegalPage() {
  return (
    <LegalChrome>
      <LegalHeader crumb="Legal Notice" eyebrow="Legal" title="legal notice" />
      <section className="p-section p-section--tight">
        <div className="p-wrap p-prose">
          <p className="p-prose__meta">Aviso legal · Last updated: July 2026.</p>

          <h2>1. Owner identification</h2>
          <p>
            In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic
            Commerce (LSSI-CE), the owner of the Pick app and of these pages is:
          </p>
          <div className="p-legal-card">
            <strong>TREMPIDO SL</strong>
            <br />
            Tax ID (NIF): {PICK.company.taxId}
            <br />
            Registered address: {PICK.company.address}
            <br />
            Email: <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>
          </div>

          <h2>2. Purpose</h2>
          <p>
            Pick is an iPhone application that helps users plan weekly dinners, build a grocery list and
            estimate the cost of their shop at a chosen supermarket. These pages provide information about the
            app and its legal terms.
          </p>

          <h2>3. Trademarks</h2>
          <p>
            Supermarket names and logos (including Walmart, Aldi, Kroger, Target, Safeway, Publix, Trader
            Joe&apos;s, Costco and Whole Foods) are registered trademarks of their respective owners. TREMPIDO
            SL and Pick have <strong>no commercial, affiliation or sponsorship relationship</strong> with any of
            them. These names are used solely to help users organise their shopping and estimate prices.
          </p>

          <h2>4. Intellectual property</h2>
          <p>
            The Pick brand, design, software and recipe content are owned by TREMPIDO SL or used under licence,
            and are protected by intellectual property law. Reproduction, distribution or modification without
            authorisation is prohibited.
          </p>

          <h2>5. Support</h2>
          <p>
            Questions, suggestions or a problem with the app? Write to us at{" "}
            <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>.
          </p>

          <h2>6. Applicable law</h2>
          <p>
            These terms are governed by Spanish law. Any dispute will be subject to the courts of Barcelona,
            Spain, except where mandatory consumer protection law provides otherwise.
          </p>

          <h2>Related</h2>
          <ul>
            <li><a href="/pick/terms">Terms of Use</a></li>
            <li><a href="/pick/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </section>
    </LegalChrome>
  )
}
