import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Shield, Lock, Eye, Database, Mail, Globe, Mic } from "lucide-react"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy — Kari",
  description: "Privacy Policy for Kari, the voice-based social-skills coaching app.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/kari"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Kari
          </Link>
          <Link href="/kari/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground mb-2">Kari</p>
          <p className="text-sm text-muted-foreground">Last Updated: July 10, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <Card className="p-6 md:p-8 mb-8">
          <p className="text-lg leading-relaxed">
            This Privacy Policy describes how Kari (&quot;the App&quot;), developed by <strong>Pau Pidelaserra</strong>{" "}
            (&quot;Developer&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), collects, uses and protects your
            information. Kari is a voice-based coaching app for social skills, communication and charisma: you practice
            conversations out loud with an AI and receive feedback to improve.
          </p>
        </Card>

        <div className="space-y-8">
          {/* 1. Overview */}
          <Card className="p-6 md:p-8 bg-gradient-to-br from-amber-500/5 to-orange-500/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold">1. Overview</h2>
            </div>
            <p className="text-foreground/90 leading-relaxed">
              To work, Kari processes your <strong>voice in real time</strong> during a session. Your audio is streamed to
              our AI provider to power the live conversation and generate your feedback. It is processed on the fly and{" "}
              <strong>not stored</strong> on our servers. We do not require an account, and we do not ask for your name,
              email or any directly identifying information inside the App.
            </p>
          </Card>

          {/* 2. Information We Collect */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">2.1 Your voice during sessions</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Kari needs microphone access. During a conversation or lesson, your audio is transmitted over an
                  encrypted connection (HTTPS/TLS) and processed in real time to sustain the conversation and generate
                  feedback (filler words, pace, pauses, clarity). Audio is processed as a live stream and is{" "}
                  <strong>not permanently stored</strong> on our servers. By starting a session you consent to your voice
                  being transmitted and processed by the AI providers described below.
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Mic className="w-5 h-5 text-amber-600" /> 2.2 Voice data — specific notice
                </h3>
                <p className="text-foreground/90 mb-2">
                  <strong>What we process:</strong> when you speak, our AI analyzes the content of what you say and speech
                  characteristics (pace, pauses, filler words, intonation) for the sole purpose of talking with you and
                  giving you feedback.
                </p>
                <p className="text-foreground/90 mb-2">
                  <strong>No biometric identification:</strong> we do <strong>not</strong> create voiceprints or biometric
                  identifiers. Kari does not identify you from your voice and does not perform speaker recognition.
                </p>
                <p className="text-foreground/90">
                  <strong>No human review, no retention:</strong> analysis is fully automatic; no person listens to your
                  audio, and we do not build databases of voices or voice traits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2.3 Progress data</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We keep indicators from your sessions (evidence, techniques practiced, evolution and your charisma
                  score) to calculate your progress and personalize recommendations. This data is tied to an{" "}
                  <strong>anonymous identifier</strong> generated by the App, without your name or contact details.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2.4 Account and subscription</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Pro access and minute packs are purchased and managed through Apple in the App Store. We store your
                  subscription status and minute balance, tied to the same anonymous identifier. We do{" "}
                  <strong>not</strong> have access to your payment information (card, bank) — all payments are processed
                  securely by Apple.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2.5 Technical and usage data</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Device type and iOS version.</span></li>
                  <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>App usage statistics (features used, session duration).</span></li>
                  <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Crash and performance reports.</span></li>
                  <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Language and region settings.</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* 3. How We Use */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
            </div>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Power the live voice conversations and generate your feedback and reports.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Calculate your progress and personalize recommendations.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Manage your subscription and minute balance.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Maintain, analyze and improve how the App works.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Comply with legal obligations.</span></li>
            </ul>
            <p className="text-foreground/90 mt-4 font-medium">
              We do not use your data for advertising, profiling or any purpose unrelated to the App&apos;s core function.
            </p>
          </Card>

          {/* 4. Third-Party Services */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="text-foreground/90 mb-4">
              We rely on the following providers, which act as data processors under contract and only for the purposes
              described. They are contractually required to protect your data.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-1">Google Cloud — Vertex AI</h3>
                <p className="text-sm text-foreground/90 mb-1"><strong>Purpose:</strong> the voice AI models (Gemini) that sustain the live conversation and generate feedback.</p>
                <p className="text-sm text-foreground/90">Your audio is sent to Vertex AI for real-time inference. Per Vertex AI&apos;s data processing terms, this content is <strong>not used to train models</strong> and is not retained beyond what is needed to provide the service.</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-1">Vercel</h3>
                <p className="text-sm text-foreground/90">Hosts our backend API. Your audio passes through Vercel&apos;s infrastructure in memory during the session and is not written to disk or any database.</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-1">Neon</h3>
                <p className="text-sm text-foreground/90">Database that stores only your minute balance, linked to your anonymous identifier. No voice, name or contact details.</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-1">PostHog (EU)</h3>
                <p className="text-sm text-foreground/90">Product analytics with pseudonymized usage data, hosted in the European Union.</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="text-lg font-semibold mb-1">Apple</h3>
                <p className="text-sm text-foreground/90">Handles all payment processing for subscriptions and minute packs. We do not have access to your payment information.</p>
              </div>
            </div>
            <p className="text-foreground/90 mt-4 font-medium">We do not sell your personal data to anyone.</p>
          </Card>

          {/* 5. Retention */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Voice:</strong> processed in real time, not stored.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Progress and minute balance:</strong> for as long as you use the App or keep an active subscription.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Usage analytics:</strong> up to 12 months.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Crash reports:</strong> up to 90 days.</span></li>
            </ul>
          </Card>

          {/* 6. Security */}
          <Card className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold">6. Data Security</h2>
            </div>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>All traffic is encrypted with HTTPS/TLS.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Audio is processed in memory and never written to persistent storage on our servers.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>No human reviews your audio.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span>Access-controlled servers and periodic security reviews.</span></li>
            </ul>
          </Card>

          {/* 7. Rights */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
            <p className="text-foreground/90 mb-3">You can request access, rectification, erasure, restriction, objection and portability of your data, and withdraw your consent. You can also:</p>
            <ul className="space-y-2 text-foreground/90">
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Manage your subscription</strong> in Settings &gt; Apple ID &gt; Subscriptions.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Revoke microphone access</strong> at any time in Settings &gt; Kari.</span></li>
              <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Request deletion</strong> of your data by emailing us (see Contact).</span></li>
            </ul>
          </Card>

          {/* 8. Children */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-foreground/90 leading-relaxed">
              Kari is not intended for children under 13 (or the applicable age in your jurisdiction) and we do not
              knowingly collect data from them. If you believe a child has provided us data, contact us and we will delete
              it.
            </p>
          </Card>

          {/* 9-11 international + CCPA + GDPR */}
          <Card className="p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-semibold">9. International Data Transfers</h2>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Your data may be processed in the European Union and the United States. We apply appropriate safeguards
                  for these transfers in line with applicable law.
                </p>
              </div>
              <div className="pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-3">10. California Privacy Rights (CCPA)</h2>
                <p className="text-foreground/90 leading-relaxed">
                  California residents have the right to know what personal information is collected, to request its
                  deletion, to non-discrimination, and to opt out of the sale of personal information. We do not sell
                  personal information.
                </p>
              </div>
              <div className="pt-6 border-t">
                <h2 className="text-2xl font-semibold mb-3">11. European Privacy Rights (GDPR)</h2>
                <p className="text-foreground/90 leading-relaxed mb-2">
                  EU/EEA residents have the rights of access, rectification, erasure, restriction, portability and
                  objection, and to withdraw consent. Legal bases for processing:
                </p>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Consent</strong> — for processing your voice.</span></li>
                  <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Performance of a contract</strong> — to provide the subscription service.</span></li>
                  <li className="flex gap-2"><span className="text-amber-600">&bull;</span><span><strong>Legitimate interests</strong> — to improve and secure the App.</span></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* 12. Tracking */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">12. Analytics and Tracking</h2>
            <p className="text-foreground/90 leading-relaxed">
              Kari does <strong>not</strong> track you across other companies&apos; apps and websites and does not share
              your data with third parties for advertising. The analytics we use are first-party and pseudonymized. If we
              ever introduced tracking, we would ask your permission through Apple&apos;s App Tracking Transparency (ATT)
              framework, which you can change in Settings &gt; Privacy &gt; Tracking.
            </p>
          </Card>

          {/* 13. Changes */}
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4">13. Changes to This Policy</h2>
            <p className="text-foreground/90 leading-relaxed">
              We may update this Privacy Policy. Any change will be reflected by updating the &quot;Last Updated&quot; date
              above. Continued use of the App after changes constitutes acceptance of the updated policy.
            </p>
          </Card>

          {/* 14. Contact */}
          <Card className="p-6 md:p-8 bg-gradient-to-br from-amber-500/5 to-orange-500/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-2xl font-semibold">14. Contact Us</h2>
            </div>
            <p className="text-foreground/90 mb-4">If you have questions or requests about this Privacy Policy or your data, contact us:</p>
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
          <p>This Privacy Policy is effective as of July 10, 2026.</p>
        </div>
      </div>
    </div>
  )
}
