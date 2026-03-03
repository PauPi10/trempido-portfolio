"use client"

import { useLanguage } from "@/lib/language-context"
import { Bell, Users, Timer, Puzzle, Gift, LayoutGrid } from "lucide-react"

const features = [
  { icon: Bell, titleKey: "umi.feat.reminders.title", descKey: "umi.feat.reminders.desc", gradient: "from-amber-50 to-orange-50", border: "border-amber-100", iconBg: "bg-amber-500" },
  { icon: Users, titleKey: "umi.feat.import.title", descKey: "umi.feat.import.desc", gradient: "from-rose-50 to-pink-50", border: "border-rose-100", iconBg: "bg-rose-500" },
  { icon: Timer, titleKey: "umi.feat.countdown.title", descKey: "umi.feat.countdown.desc", gradient: "from-sky-50 to-blue-50", border: "border-sky-100", iconBg: "bg-sky-500" },
  { icon: Puzzle, titleKey: "umi.feat.trivia.title", descKey: "umi.feat.trivia.desc", gradient: "from-violet-50 to-purple-50", border: "border-violet-100", iconBg: "bg-violet-500" },
  { icon: Gift, titleKey: "umi.feat.gifts.title", descKey: "umi.feat.gifts.desc", gradient: "from-emerald-50 to-teal-50", border: "border-emerald-100", iconBg: "bg-emerald-500" },
  { icon: LayoutGrid, titleKey: "umi.feat.widgets.title", descKey: "umi.feat.widgets.desc", gradient: "from-orange-50 to-red-50", border: "border-orange-100", iconBg: "bg-orange-500" },
] as const

export function UmiFeatures() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t("umi.features.title")}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t("umi.features.sub")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.titleKey}
                className={`bg-gradient-to-br ${feat.gradient} rounded-2xl p-8 border ${feat.border} animate-fade-up`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-14 h-14 ${feat.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {t(feat.titleKey)}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {t(feat.descKey)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
