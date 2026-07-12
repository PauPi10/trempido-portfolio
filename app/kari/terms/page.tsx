import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText, Sparkles, CreditCard, ShieldAlert, Scale, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Terms of Service — Kari",
  description: "Terms of Service for Kari, the voice-based social-skills coaching app.",
  alternates: { canonical: "https://karicoach.app/terms" },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Kari
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b bg-card/30">
        <div className="container mx-auto px-4 py-16 md:py-20 max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-600 p-0.5">
              <div className="w-full h-full rounded-3xl overflow-hidden">
                <Image src="/images/kari/logo.png" alt="Kari" width={80} height={80} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Terms of Service</h1>
          <p className="text-lg text-muted-foreground mb-2">Kari</p>
          <p className="text-sm text-muted-foreground">Last Updated: July 12, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <Card className="p-6 md:p-8 mb-8">
          <p className="text-lg leading-relaxed">
            These Terms of Service govern your use of Kari (&quot;the App&quot;), developed by{" "}
            <strong>Pau Pidelaserra</strong>. By downloading and using Kari you agree to these terms. If you do not agree,
            please do not use the App.
          </p>
        </Card>

        <div className="space-y-8">
          {/* 1 */}
          <Card className="p-6 md:p-8 bg-gradient-to-br from-amber-500/5 to-orange-500/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold">1. What Kari Is</h2>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              Kari is a tool for training social skills, communication and charisma by voice. You practice conversations
              out loud with an AI and receive educational feedback. <strong>Kari is not a medical, psychological or
              therapeutic service</strong> and does not replace a mental-health professional. If you are going through a
              crisis or need professional help, please reach out to a specialist or emergency services. Conversations are
              simulations with AI characters; they do not represent real people.
            </p>
          </Card>

          {/* 2 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold">2. License to Use</h2>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              We grant you a personal, limited, non-exclusive and non-transferable license to use the App on your devices,
              subject to these terms and to the App Store terms.
            </p>
          </Card>

          {/* 3 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold">3. Subscriptions and Minute Packs</h2>
            </div>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Pro access is offered through a subscription managed by Apple.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Conversation time is consumed in minutes; you can top up with minute packs (in-app purchases).</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Payment is charged to your Apple Account at confirmation of purchase.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Subscriptions renew automatically unless canceled at least 24 hours before the end of the current period.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Your account is charged for renewal within 24 hours prior to the end of the current period.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>You can manage or cancel your subscription in your Apple account settings (Settings &gt; Apple&nbsp;ID &gt; Subscriptions) after purchase.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Minute packs are one-time consumable purchases; once used they are non-refundable except where required by law.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Exact price and trial terms are shown in the App Store before you buy.</span></li>
            </ul>
          </Card>

          {/* 4 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold">4. Responsible Use</h2>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              You agree to use the App legally and respectfully, and not for harmful, unlawful or rights-infringing
              purposes.
            </p>
          </Card>

          {/* 5 */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-foreground/90 leading-relaxed">
              The content, brand, characters and software of Kari are protected and belong to their owner. You may not
              copy or redistribute them without permission.
            </p>
          </Card>

          {/* 6 */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              The App is provided &quot;as is&quot;. To the extent permitted by law, we do not guarantee specific results
              and are not liable for damages arising from use of the App. Progress depends on your practice and individual
              factors.
            </p>
          </Card>

          {/* 7 */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to These Terms</h2>
            <p className="text-foreground/90 leading-relaxed">
              We may update these terms; we will post the current version here and update the &quot;Last Updated&quot;
              date. Continued use of the App after changes constitutes acceptance of the updated terms.
            </p>
          </Card>

          {/* 8 EULA — Apple's minimum terms for a custom End-User License Agreement */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">8. App Store EULA</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              These Terms constitute the End-User License Agreement (EULA) for the App and incorporate Apple&apos;s{" "}
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="text-amber-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Licensed Application End User License Agreement
              </a>{" "}
              as minimum terms. If you downloaded the App from the Apple App Store, the following also applies:
            </p>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Parties:</strong> this agreement is between you and the Developer only — not with Apple. Apple is not responsible for the App or its content.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>License scope:</strong> a non-transferable license to use the App on Apple-branded devices that you own or control, as permitted by the App Store Usage Rules.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Maintenance and support:</strong> the Developer is solely responsible for the App. Apple has no obligation to provide maintenance or support services.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Warranty:</strong> if the App fails to conform to an applicable warranty, you may notify Apple, and Apple will refund the purchase price. To the maximum extent permitted by law, Apple has no other warranty obligation.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Claims:</strong> the Developer, not Apple, is responsible for addressing any claims relating to the App, including product liability, legal or regulatory non-conformity, and consumer-protection claims.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Intellectual property:</strong> in the event of a third-party claim that the App infringes intellectual property rights, the Developer, not Apple, is responsible for its investigation, defense and resolution.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Legal compliance:</strong> you represent that you are not located in a country subject to a U.S. Government embargo or designated as &quot;terrorist supporting&quot;, and that you are not on any U.S. Government list of prohibited or restricted parties.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Third-party beneficiary:</strong> Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.</span></li>
            </ul>
          </Card>

          {/* 9 Contact */}
          <Card className="p-6 md:p-8 bg-gradient-to-br from-amber-500/5 to-orange-500/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold">9. Contact</h2>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <strong>Email:</strong>
                <a href="mailto:ppidelaserra2@gmail.com" className="text-amber-600 hover:underline">ppidelaserra2@gmail.com</a>
              </p>
              <p><strong>Developer:</strong> Pau Pidelaserra</p>
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>These Terms of Service are effective as of July 10, 2026.</p>
        </div>
      </div>
    </div>
  )
}
