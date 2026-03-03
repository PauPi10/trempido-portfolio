"use client"

import { useLanguage } from "@/lib/language-context"
import { Check } from "lucide-react"

export function UmiPricing() {
  const { t } = useLanguage()

  const features = [
    t("umi.pricing.feat.unlimited"),
    t("umi.pricing.feat.reminders"),
    t("umi.pricing.feat.trivia"),
    t("umi.pricing.feat.widgets"),
  ]

  return (
    <section className="py-20 px-6 bg-[var(--umi-cream)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {t("umi.pricing.title")}
          </h2>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto">
            {t("umi.pricing.sub")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Monthly */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-2">
              {t("umi.pricing.monthly")}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-neutral-900">$3.99</span>
              <span className="text-neutral-500 ml-1">{t("umi.pricing.mo")}</span>
            </div>
            <ul className="space-y-3">
              {features.map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Yearly - highlighted */}
          <div className="relative bg-white rounded-2xl p-8 border-2 border-[var(--umi-yellow)] shadow-lg shadow-amber-100 scale-105">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--umi-yellow)] text-neutral-900 text-xs font-bold rounded-full">
              {t("umi.pricing.popular")}
            </div>
            <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-2">
              {t("umi.pricing.yearly")}
            </h3>
            <div className="mb-2">
              <span className="text-4xl font-bold text-neutral-900">$9.99</span>
              <span className="text-neutral-500 ml-1">{t("umi.pricing.yr")}</span>
            </div>
            <p className="text-sm text-amber-600 font-medium mb-6">
              {t("umi.pricing.trial")}
            </p>
            <ul className="space-y-3">
              {features.map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Lifetime */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-2">
              {t("umi.pricing.lifetime")}
            </h3>
            <div className="mb-2">
              <span className="text-4xl font-bold text-neutral-900">$19.99</span>
            </div>
            <p className="text-sm text-neutral-500 mb-6">
              {t("umi.pricing.once")}
            </p>
            <ul className="space-y-3">
              {features.map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm text-neutral-600">
                  <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
