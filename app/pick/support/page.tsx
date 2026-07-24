import type { Metadata } from "next"
import Link from "next/link"
import { PICK } from "@/lib/pick-content"
import { LegalChrome, LegalHeader } from "@/components/pick/chrome"

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Pick: contact support, manage or cancel your subscription, restore purchases and delete your data.",
  alternates: { canonical: "/pick/support" },
}

export default function SupportPage() {
  return (
    <LegalChrome>
      <LegalHeader crumb="Support" eyebrow="Help" title="support" />
      <section className="p-section p-section--tight">
        <div className="p-wrap p-prose">
          <div className="p-legal-card">
            <strong>Need a hand?</strong> Email us at{" "}
            <a href={`mailto:${PICK.supportEmail}`}>{PICK.supportEmail}</a> and we&apos;ll get back to you
            as soon as we can — usually within 1–2 business days.
          </div>

          <h2>manage or cancel your subscription</h2>
          <p>
            Subscriptions are handled by Apple. To manage, change or cancel your plan, open{" "}
            <strong>Settings → your name → Subscriptions → Pick</strong> on your iPhone, or visit{" "}
            <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noopener">
              apps.apple.com/account/subscriptions
            </a>
            . If you cancel during the free trial, you won&apos;t be charged.
          </p>

          <h2>restore purchases</h2>
          <p>
            Already subscribed but the app doesn&apos;t recognise it (new phone, reinstall)? Open Pick and go
            to <strong>Settings → Restore purchases</strong>. Make sure you&apos;re signed in with the same
            Apple Account you used to subscribe.
          </p>

          <h2>refunds</h2>
          <p>
            Payments are processed by Apple, so refunds are requested directly from them at{" "}
            <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener">
              reportaproblem.apple.com
            </a>
            .
          </p>

          <h2>your data</h2>
          <p>
            Pick has no accounts — your plan and preferences live on your iPhone, and we only receive
            anonymous usage analytics. To erase everything, use <strong>Settings → Delete my data</strong>{" "}
            inside the app, or simply delete the app. See the{" "}
            <Link href="/pick/privacy">privacy policy</Link> for details.
          </p>

          <h2>common questions</h2>
          <p>
            The <Link href="/pick#faq">FAQ on the main page</Link> covers accounts, supermarket prices,
            allergies and diets, the free trial and device requirements.
          </p>
        </div>
      </section>
    </LegalChrome>
  )
}
