import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mic, LineChart, FlaskConical, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"

// App Store: https://apps.apple.com/app/id6788028264 — swap the "Coming Soon"
// button for this link once Kari is live on the store.
const APP_STORE_URL = "https://apps.apple.com/app/id6788028264"

const FEATURES = [
  {
    icon: Mic,
    title: "Practice by voice",
    body: "Hold real conversations out loud with an AI. Roleplays and lessons that feel like the real thing — a social gym you can open anytime.",
  },
  {
    icon: LineChart,
    title: "Get a report",
    body: "After each session Kari tells you exactly what to improve: filler words, pace, pauses, clarity — and your charisma score over time.",
  },
  {
    icon: FlaskConical,
    title: "Backed by science",
    body: "Built on evidence from social-skills training and exposure research. Kari measures behavior, not how calm you felt.",
  },
]

export default function KariPage() {
  return (
    <div className="min-h-screen bg-[#F6EDDD] text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-black/5 bg-[#F6EDDD]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            trempido
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/kari/privacy" className="text-neutral-600 hover:text-neutral-900 transition-colors">Privacy</Link>
            <Link href="/kari/terms" className="text-neutral-600 hover:text-neutral-900 transition-colors">Terms</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-16 md:pt-24 pb-16 max-w-4xl text-center">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-[28px] bg-gradient-to-br from-amber-400 to-orange-600 p-0.5 shadow-xl">
            <div className="w-full h-full rounded-[26px] overflow-hidden">
              <Image src="/images/kari/logo.png" alt="Kari" width={96} height={96} className="w-full h-full object-cover" priority />
            </div>
          </div>
        </div>
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-orange-800 bg-amber-400/30 border border-amber-500/30 rounded-full">
          Coming soon to the App Store
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
          Your social gym,
          <br />
          <span className="bg-gradient-to-br from-amber-500 to-orange-600 bg-clip-text text-transparent">by voice</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed mb-10">
          Kari is a charisma and social-skills coach. You practice real conversations out loud with an AI, and when you
          finish you get a report that tells you exactly what to improve. Backed by science.
        </p>
        <div className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-neutral-900 text-white font-medium shadow-lg">
          <Mic className="w-5 h-5" />
          Coming soon to the App Store
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 pb-20 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <Card key={f.title} className="p-7 bg-white/60 border-black/5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-5 shadow">
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-neutral-700 leading-relaxed">{f.body}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Support */}
      <section id="support" className="container mx-auto px-4 pb-24 max-w-4xl">
        <Card className="p-8 md:p-10 bg-white/70 border-black/5 text-center">
          <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center mx-auto mb-5">
            <Mail className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Support</h2>
          <p className="text-neutral-700 max-w-xl mx-auto mb-6 leading-relaxed">
            Questions, problems or ideas? We&apos;re happy to help. To manage or cancel a subscription, open Settings &gt;
            your name &gt; Subscriptions on your iPhone.
          </p>
          <a href="mailto:ppidelaserra2@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors">
            <Mail className="w-4 h-4" />
            ppidelaserra2@gmail.com
          </a>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-neutral-600">
            <Link href="/kari/privacy" className="hover:text-neutral-900 transition-colors">Privacy Policy</Link>
            <Link href="/kari/terms" className="hover:text-neutral-900 transition-colors">Terms of Service</Link>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
          <p>© 2026 Kari · by Pau Pidelaserra · <Link href="/" className="hover:text-neutral-800">trempido</Link></p>
        </div>
      </footer>
    </div>
  )
}
