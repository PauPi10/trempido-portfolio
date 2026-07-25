import type { Metadata } from "next"
import { PICK } from "@/lib/pick-content"
import { LegalChrome, LegalHeader } from "@/components/pick/chrome"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Pick's privacy policy: no account, your plan stays on your iPhone, anonymous EU-hosted usage analytics.",
  alternates: {
    canonical: "/pick/privacy",
    languages: {
      en: "https://www.trempido.com/pick/privacy",
      "es-ES": "https://www.trempido.com/pick/es/privacidad",
      "x-default": "https://www.trempido.com/pick/privacy",
    },
  },
}

export default function PrivacyPage() {
  return (
    <LegalChrome>
      <LegalHeader crumb="Privacy" eyebrow="Legal" title="privacy policy" />
      <section className="p-section p-section--tight">
        <div className="p-wrap p-prose">
          <p className="p-prose__meta">Last updated: July 2026.</p>

          <div className="p-legal-card">
            <strong>The short version.</strong> Pick has no account and no servers of our own. Your meal
            plan, preferences, budget and favourites are stored only on your iPhone. We collect anonymous
            usage analytics to improve the app, and we never sell or share your personal data.
          </div>

          <h2>1. Who we are</h2>
          <p>
            Pick is published by <strong>TREMPIDO SL</strong> (tax ID {PICK.company.taxId}), {PICK.company.address}.
            For any privacy question, email <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>.
          </p>

          <h2>2. Data stored on your device</h2>
          <p>
            To work, Pick saves the following <strong>locally on your device only</strong> (in the app&apos;s
            private storage): your name (optional), chosen supermarket, household size, cooking days, weekly
            budget, dietary preferences, allergen selections, liked proteins, appliances, your generated meal
            plan, grocery checklist and favourites. The master copy of this information lives only on your
            device — we have no account system and cannot look it up. A subset of your onboarding preferences
            is included in the anonymous usage analytics described in section 3.
          </p>

          <h2>3. Usage analytics</h2>
          <p>
            To understand how the app is used and improve it, Pick sends <strong>anonymous usage
            analytics</strong> to PostHog, an analytics provider whose servers for our project are located in
            the <strong>European Union</strong>. This includes events such as which screens are viewed,
            onboarding answers (for example your selected supermarket, household size or dietary
            preferences), plan generations and purchases, together with a randomly generated identifier and
            standard device information (device model, iOS version, app version, language). Session replays
            of in-app interactions may also be recorded with text inputs and images masked. This data is not
            tied to your name, email or any account (there are none), and we do not use it for advertising
            or sell it to anyone.
          </p>

          <h2>4. What we do not collect</h2>
          <ul>
            <li>No account, email or password.</li>
            <li>No precise location.</li>
            <li>No selling or sharing of personal data with advertisers.</li>
            <li>No third-party advertising or cross-app tracking.</li>
          </ul>

          <h2>5. Payments</h2>
          <p>
            Subscriptions and the free trial are processed by <strong>Apple</strong> through the App Store. We
            never receive or store your payment details. To validate purchases and manage subscription status
            we use <strong>RevenueCat</strong>, which receives your App Store purchase receipt and a randomly
            generated app user identifier — never your name, email or payment details. Apple&apos;s handling of
            your data is governed by Apple&apos;s privacy policy, and RevenueCat&apos;s by theirs.
          </p>

          <h2>6. Diagnostics</h2>
          <p>
            If you have enabled it in iOS, Apple may share standard, anonymised crash and performance
            diagnostics with developers. This data is aggregated and does not identify you. You can turn this
            off in iOS Settings → Privacy &amp; Security → Analytics &amp; Improvements.
          </p>

          <h2>7. This website</h2>
          <p>
            This page is hosted on Vercel and uses privacy-friendly, aggregate analytics (Vercel Analytics)
            that do not use cookies to identify you personally. It measures anonymous page views to understand
            traffic.
          </p>

          <h2>8. Your rights</h2>
          <p>
            Your plan and preferences live on your device and are removed when you delete the app (or via
            Settings → Delete my data inside the app). Analytics data is keyed to a random identifier, not to
            your name or any account, so in most cases we cannot match records to you; if you have any
            question or request about it, contact us at{" "}
            <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>. If you are in the EU/EEA, you
            have rights under the GDPR (Regulation (EU) 2016/679) and may also lodge a complaint with the
            Spanish Data Protection Agency (AEPD).
          </p>

          <h2>9. Children</h2>
          <p>Pick is not directed at children under 13 and we do not knowingly collect their data.</p>

          <h2>10. Changes</h2>
          <p>
            We may update this policy; the current version is always published here. Significant changes will
            be reflected by the &ldquo;last updated&rdquo; date above.
          </p>
        </div>
      </section>
    </LegalChrome>
  )
}
