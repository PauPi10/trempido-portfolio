import type { Metadata } from "next"
import { PICK } from "@/lib/pick-content"
import { LegalChrome, LegalHeader } from "@/components/pick/chrome"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Pick's privacy policy: no account, no servers, all your data stays on your iPhone.",
  alternates: { canonical: "/pick/privacy" },
}

export default function PrivacyPage() {
  return (
    <LegalChrome>
      <LegalHeader crumb="Privacy" eyebrow="Legal" title="privacy policy" />
      <section className="p-section p-section--tight">
        <div className="p-wrap p-prose">
          <p className="p-prose__meta">Last updated: July 2026.</p>

          <div className="p-legal-card">
            <strong>The short version.</strong> Pick has no account and no servers. Your meal plan,
            preferences, budget and favourites are stored only on your iPhone. We don&apos;t collect,
            sell or share your personal data.
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
            plan, grocery checklist and favourites. This information never leaves your iPhone, is not sent to
            us and is not accessible to us.
          </p>

          <h2>3. What we do not collect</h2>
          <ul>
            <li>No account, email or password.</li>
            <li>No name, contact details or location sent to our servers — we don&apos;t run any.</li>
            <li>No selling or sharing of personal data with advertisers.</li>
            <li>No third-party advertising or cross-app tracking.</li>
          </ul>

          <h2>4. Payments</h2>
          <p>
            Subscriptions and the free trial are processed by <strong>Apple</strong> through the App Store. We
            never receive or store your payment details. Apple may share limited, aggregated purchase and
            subscription status with us so we can provide the subscription. Apple&apos;s handling of your data
            is governed by Apple&apos;s privacy policy.
          </p>

          <h2>5. Diagnostics</h2>
          <p>
            If you have enabled it in iOS, Apple may share standard, anonymised crash and performance
            diagnostics with developers. This data is aggregated and does not identify you. You can turn this
            off in iOS Settings → Privacy &amp; Security → Analytics &amp; Improvements.
          </p>

          <h2>6. This website</h2>
          <p>
            This page is hosted on Vercel and uses privacy-friendly, aggregate analytics (Vercel Analytics)
            that do not use cookies to identify you personally. It measures anonymous page views to understand
            traffic.
          </p>

          <h2>7. Your rights</h2>
          <p>
            Because we don&apos;t collect your personal data, there is nothing for us to access, correct or
            delete on our side — all your data lives on your device and is removed when you delete the app. If
            you are in the EU/EEA, you still have rights under the GDPR (Regulation (EU) 2016/679) and may
            contact us at <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a> or lodge a complaint
            with the Spanish Data Protection Agency (AEPD).
          </p>

          <h2>8. Children</h2>
          <p>Pick is not directed at children under 13 and we do not knowingly collect their data.</p>

          <h2>9. Changes</h2>
          <p>
            We may update this policy; the current version is always published here. Significant changes will
            be reflected by the &ldquo;last updated&rdquo; date above.
          </p>
        </div>
      </section>
    </LegalChrome>
  )
}
