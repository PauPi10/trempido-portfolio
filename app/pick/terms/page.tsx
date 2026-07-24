import type { Metadata } from "next"
import { PICK } from "@/lib/pick-content"
import { LegalChrome, LegalHeader } from "@/components/pick/chrome"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Pick: licence, subscriptions, nutrition and allergy disclaimer, price estimates and limitation of liability.",
  alternates: { canonical: "/pick/terms" },
}

export default function TermsPage() {
  return (
    <LegalChrome>
      <LegalHeader crumb="Terms" eyebrow="Legal" title="terms of use" />
      <section className="p-section p-section--tight">
        <div className="p-wrap p-prose">
          <p className="p-prose__meta">Last updated: July 2026.</p>

          <h2>1. Acceptance</h2>
          <p>
            Pick is an iPhone app published by <strong>TREMPIDO SL</strong> (tax ID {PICK.company.taxId}),
            {" "}{PICK.company.address}. By downloading or using Pick you agree to these Terms of Use and to the
            Apple Media Services / App Store terms. If you do not agree, please do not use the app.
          </p>

          <h2>2. What Pick is</h2>
          <p>
            Pick helps you plan a week of dinners around your budget, dietary preferences and appliances,
            builds a grocery list and shows estimated prices at the supermarket you choose. Pick is a
            planning and organisation tool. <strong>It is not medical, dietary or nutritional advice</strong> and
            does not replace a doctor, dietitian or other qualified professional.
          </p>

          <h2>3. Nutrition, allergies and food safety</h2>
          <p>
            Recipe information — including calories, macronutrients, ingredients and allergen filters — is
            provided for general guidance and may contain errors or omissions. Allergen and dietary filters
            are a guide only and are <strong>not a guarantee</strong>. Always read the label of the products you
            buy and prepare food safely. If you have a food allergy, intolerance or medical condition, rely on
            packaging and professional advice, not on the app.
          </p>

          <h2>4. Price estimates</h2>
          <p>
            Prices and budget totals are estimates to help you plan. They are not quotes and may differ from
            the actual price at any store, which varies by location and over time. Pick is not responsible for
            differences between estimated and in-store prices.
          </p>

          <h2>5. Store names and trademarks</h2>
          <p>
            Supermarket names and logos (including Walmart, Aldi, Kroger, Target, Safeway, Publix, Trader
            Joe&apos;s, Costco and Whole Foods) are trademarks of their respective owners. Pick has
            <strong> no commercial, affiliation or sponsorship relationship</strong> with any of them. Store
            names are used only to help you organise your shopping and estimate prices.
          </p>

          <h2>6. Licence</h2>
          <p>
            We grant you a personal, limited, non-exclusive, non-transferable licence to use Pick on your
            devices in accordance with these terms and the App Store rules. You may not copy, resell,
            reverse-engineer or redistribute the app, its content or its recipe catalogue without permission.
          </p>

          <h2>7. Subscriptions and free trial</h2>
          <ul>
            <li>Pick offers a subscription with a {PICK.pricing.trialDays}-day free trial, managed by Apple.</li>
            <li>After the trial, the subscription auto-renews at {PICK.pricing.yearly}/year or {PICK.pricing.monthly}/month unless cancelled.</li>
            <li>You can cancel at any time from your Apple account settings, at least 24 hours before the end of the current period to avoid the next charge.</li>
            <li>Payment is charged to your Apple ID. Exact price and trial terms are shown in the App Store before you subscribe.</li>
            <li>Except where required by law, payments are non-refundable; refunds are handled by Apple under its policies.</li>
          </ul>

          <h2>8. Your content and device data</h2>
          <p>
            Pick stores your plan, preferences and favourites locally on your device. You are responsible for
            keeping your device secure. Deleting the app removes this data from the device.
          </p>

          <h2>9. Limitation of liability</h2>
          <p>
            The app is provided &ldquo;as is&rdquo;. To the maximum extent permitted by law, TREMPIDO SL is not
            liable for any indirect or consequential damages arising from use of the app, including reliance on
            estimated prices, nutritional information or allergen filters. Nothing in these terms limits
            liability that cannot be excluded under applicable law.
          </p>

          <h2>10. Changes and contact</h2>
          <p>
            We may update these terms; the current version will always be published here. For any questions,
            contact us at <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a>.
          </p>
        </div>
      </section>
    </LegalChrome>
  )
}
