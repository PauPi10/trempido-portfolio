import type { Metadata } from "next"
import { PICK, PRICING } from "@/lib/pick-content"
import { LegalChrome, LegalHeader } from "@/components/pick/chrome"

export const metadata: Metadata = {
  title: "Terms of Use (EULA)",
  description:
    "Terms of Use and End-User Licence Agreement for Pick: licence, auto-renewable subscriptions, nutrition and allergy disclaimer, price estimates and Apple's minimum EULA terms.",
  alternates: {
    canonical: "/pick/terms",
    languages: {
      en: "https://www.trempido.com/pick/terms",
      "es-ES": "https://www.trempido.com/pick/es/terminos",
      "x-default": "https://www.trempido.com/pick/terms",
    },
  },
}

const APPLE_EULA = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"

export default function TermsPage() {
  return (
    <LegalChrome>
      <LegalHeader crumb="Terms" eyebrow="Legal" title="terms of use (EULA)" />
      <section className="p-section p-section--tight">
        <div className="p-wrap p-prose">
          <p className="p-prose__meta">Last updated: 25 July 2026.</p>

          <div className="p-legal-card">
            <strong>These Terms are the End-User Licence Agreement (EULA) for Pick.</strong> They are an
            agreement between you and TREMPIDO SL — not with Apple. They incorporate Apple&apos;s{" "}
            <a href={APPLE_EULA} target="_blank" rel="noopener noreferrer">
              Licensed Application End User Licence Agreement
            </a>{" "}
            as minimum terms; section 11 sets those out. A Spanish version is available at{" "}
            <a href="/pick/es/terminos">trempido.com/pick/es/terminos</a>.
          </div>

          <h2>1. Acceptance</h2>
          <p>
            Pick is an iPhone app published by <strong>TREMPIDO SL</strong> (tax ID {PICK.company.taxId}),{" "}
            {PICK.company.address}. By downloading, installing or using Pick you agree to these Terms and to
            the Apple Media Services Terms and Conditions, including the App Store Usage Rules. If you do not
            agree, do not use the app.
          </p>

          <h2>2. What Pick is</h2>
          <p>
            Pick helps you plan a week of dinners around your budget, dietary preferences and appliances,
            builds a grocery list sorted by aisle and shows estimated prices at the supermarket you choose.
            Pick is a planning and organisation tool. <strong>It is not medical, dietary or nutritional
            advice</strong> and does not replace a doctor, dietitian or other qualified professional.
          </p>

          <h2>3. Nutrition, allergies and food safety</h2>
          <p>
            Recipe information — including calories, macronutrients, ingredients and allergen filters — is
            provided for general guidance and may contain errors or omissions. Allergen and dietary filters
            are a guide only and are <strong>not a guarantee</strong>. Always read the label of the products
            you buy and prepare food safely. If you have a food allergy, intolerance or medical condition,
            rely on packaging and professional advice, not on the app.
          </p>

          <h2>4. Price estimates and recipe photos</h2>
          <p>
            Prices and budget totals shown in the app are <strong>estimates</strong> to help you plan. They
            are not quotes and may differ from the actual price at any store, which varies by location, retailer
            and over time. Recipe photos are <strong>AI-generated illustrations</strong> of the dish, not
            photographs of the food you will produce. TREMPIDO SL is not responsible for differences between
            estimated and in-store prices, or between a photo and your result.
          </p>

          <h2>5. Supermarket names and trademarks</h2>
          <p>
            Supermarket names and logos — including Walmart, Aldi, Kroger, Target, Safeway, Publix, Trader
            Joe&apos;s, Costco and Whole Foods in the United States, and Mercadona, Carrefour, Lidl, Dia,
            Eroski, Alcampo, El Corte Inglés and Consum in Spain — are trademarks of their respective owners.
            Pick and TREMPIDO SL have <strong>no commercial, affiliation, sponsorship or endorsement
            relationship</strong> with any of them. Store names are used only to help you organise your
            shopping and estimate prices.
          </p>

          <h2>6. Licence</h2>
          <p>
            Subject to these Terms, we grant you a personal, limited, non-exclusive, non-transferable,
            revocable licence to use Pick on Apple-branded devices that you own or control, as permitted by the
            App Store Usage Rules. You may not copy, resell, sublicense, rent, reverse-engineer, decompile or
            redistribute the app, its software or its recipe catalogue, in whole or in part, without our prior
            written permission.
          </p>

          <h2>7. Subscriptions, free trial and cancellation</h2>
          <p>
            Full access to Pick (&ldquo;Pick Premium&rdquo;) is sold as an <strong>auto-renewable
            subscription</strong> processed by Apple. Two plans are offered:
          </p>
          <ul>
            <li>
              <strong>Pick Premium — Yearly</strong>: 12 months, {PRICING.en.yearly} per year in the United
              States ({PRICING.es.yearly} per year in Spain), which works out at {PRICING.en.yearlyWeekly} per
              week ({PRICING.es.yearlyWeekly} per week in Spain). It includes a{" "}
              <strong>{PRICING.en.trialDays}-day free trial</strong> for users who have not used it before.
            </li>
            <li>
              <strong>Pick Premium — Weekly</strong>: 7 days, {PRICING.en.weekly} per week in the United States
              ({PRICING.es.weekly} per week in Spain). No free trial.
            </li>
          </ul>
          <p>
            Prices for other App Store storefronts, and the exact price and trial terms that apply to you, are
            always shown in the app and on the App Store before you confirm the purchase.
          </p>
          <ul>
            <li>Payment is charged to your Apple Account at confirmation of purchase.</li>
            <li>
              The subscription renews automatically unless auto-renew is turned off at least 24 hours before
              the end of the current period.
            </li>
            <li>
              Your account is charged for renewal within 24 hours prior to the end of the current period, at
              the price of the plan you selected.
            </li>
            <li>
              You can manage or cancel your subscription in your Apple Account settings (Settings &rarr; your
              name &rarr; Subscriptions) after purchase. Deleting the app does not cancel a subscription.
            </li>
            <li>
              If you subscribe during a free trial, any unused portion of that trial is forfeited when you
              purchase the subscription.
            </li>
            <li>
              Except where mandatory law provides otherwise, payments are non-refundable. Refunds are handled
              by Apple under its own policies, at{" "}
              <a href="https://support.apple.com/billing" target="_blank" rel="noopener noreferrer">
                support.apple.com/billing
              </a>
              .
            </li>
            <li>
              We may change subscription prices for future periods. Where required, Apple will ask you to
              consent to the new price before it applies; otherwise the subscription will not renew.
            </li>
          </ul>

          <h2>8. Your data</h2>
          <p>
            Pick has no account and no servers of ours: your plan, preferences, budget and favourites are
            stored on your device, and you can erase them at any time from Settings &rarr; Delete my data, or
            by deleting the app. What we do receive is anonymous usage analytics, described in full in our{" "}
            <a href="/pick/privacy">Privacy Policy</a>, which forms part of these Terms.
          </p>

          <h2>9. Acceptable use and intellectual property</h2>
          <p>
            You agree to use Pick lawfully and not to use it in a way that infringes the rights of others or
            interferes with the app&apos;s operation. The Pick brand, design, software, recipe texts and images
            are owned by TREMPIDO SL or used under licence and are protected by intellectual property law.
          </p>

          <h2>10. Warranty disclaimer and limitation of liability</h2>
          <p>
            The app is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties of any
            kind other than those that cannot be excluded by law. To the maximum extent permitted by law,
            TREMPIDO SL is not liable for indirect or consequential damages arising from use of the app,
            including reliance on estimated prices, nutritional information or allergen filters.{" "}
            <strong>Nothing in these Terms limits or excludes liability that cannot be limited or excluded
            under applicable law</strong>, including your statutory rights as a consumer.
          </p>

          <h2>11. App Store EULA — Apple&apos;s minimum terms</h2>
          <p>
            These Terms are a custom End-User Licence Agreement and incorporate Apple&apos;s{" "}
            <a href={APPLE_EULA} target="_blank" rel="noopener noreferrer">
              Licensed Application End User Licence Agreement
            </a>{" "}
            as minimum terms. Where these Terms are less restrictive than, or otherwise conflict with,
            Apple&apos;s minimum terms, Apple&apos;s minimum terms apply. If you obtained the app from the
            Apple App Store, the following also applies:
          </p>
          <ul>
            <li>
              <strong>Parties.</strong> This agreement is concluded between you and TREMPIDO SL only, and not
              with Apple. Apple is not responsible for the app or its content.
            </li>
            <li>
              <strong>Scope of licence.</strong> The licence granted to you is a non-transferable licence to
              use the app on any Apple-branded device that you own or control, as permitted by the Usage Rules
              of the Apple Media Services Terms and Conditions.
            </li>
            <li>
              <strong>Maintenance and support.</strong> TREMPIDO SL is solely responsible for providing
              maintenance and support for the app. Apple has no obligation to furnish any maintenance or
              support services.
            </li>
            <li>
              <strong>Warranty.</strong> In the event of any failure of the app to conform to any applicable
              warranty, you may notify Apple, and Apple will refund the purchase price of the app to you. To
              the maximum extent permitted by applicable law, Apple has no other warranty obligation
              whatsoever with respect to the app.
            </li>
            <li>
              <strong>Product claims.</strong> TREMPIDO SL, not Apple, is responsible for addressing any claims
              relating to the app or your possession and use of it, including product liability claims, any
              claim that the app fails to conform to any applicable legal or regulatory requirement, and claims
              arising under consumer protection, privacy or similar legislation.
            </li>
            <li>
              <strong>Intellectual property.</strong> In the event of any third-party claim that the app or
              your possession and use of it infringes that third party&apos;s intellectual property rights,
              TREMPIDO SL, not Apple, is solely responsible for the investigation, defence, settlement and
              discharge of that claim.
            </li>
            <li>
              <strong>Legal compliance.</strong> You represent and warrant that you are not located in a
              country subject to a U.S. Government embargo or designated as a &ldquo;terrorist
              supporting&rdquo; country, and that you are not listed on any U.S. Government list of prohibited
              or restricted parties.
            </li>
            <li>
              <strong>Third-party beneficiary.</strong> Apple and Apple&apos;s subsidiaries are third-party
              beneficiaries of these Terms and, upon your acceptance, have the right (and are deemed to have
              accepted the right) to enforce these Terms against you as a third-party beneficiary.
            </li>
            <li>
              <strong>Contact.</strong> Questions, complaints or claims about the app should be directed to{" "}
              <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>.
            </li>
          </ul>

          <h2>12. Governing law</h2>
          <p>
            These Terms are governed by Spanish law. If you are a consumer, you keep the protection of the
            mandatory provisions of the law of your country of residence, and you may bring proceedings before
            the courts of your place of residence. Consumers in the EU may also use the European Commission&apos;s{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              online dispute resolution platform
            </a>
            .
          </p>

          <h2>13. Changes and contact</h2>
          <p>
            We may update these Terms; the current version is always published on this page with its date.
            Continued use of the app after a change means you accept the updated Terms. For anything at all,
            write to <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>.
          </p>
        </div>
      </section>
    </LegalChrome>
  )
}
