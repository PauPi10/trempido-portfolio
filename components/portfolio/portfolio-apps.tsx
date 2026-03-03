"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { ExternalLink, ArrowRight } from "lucide-react"

export function PortfolioApps() {
  const { t } = useLanguage()

  return (
    <section id="apps" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-16 animate-fade-up">
          {t("apps.title")}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Restory Card */}
          <div className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-10 hover:border-neutral-700 transition-all duration-300 animate-fade-up delay-100">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <Image
                  src="/images/restory/logo.png"
                  alt="Restory"
                  width={72}
                  height={72}
                  className="rounded-2xl shadow-lg"
                />
                <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
                  App Store
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                Restory
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                {t("apps.restory.desc")}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 text-xs text-neutral-300 bg-neutral-800 rounded-full">iOS</span>
                <span className="px-3 py-1 text-xs text-neutral-300 bg-neutral-800 rounded-full">{t("apps.restory.tag.ai")}</span>
                <span className="px-3 py-1 text-xs text-neutral-300 bg-neutral-800 rounded-full">{t("apps.restory.tag.photos")}</span>
                <span className="px-3 py-1 text-xs text-neutral-300 bg-neutral-800 rounded-full">{t("apps.restory.tag.restore")}</span>
              </div>

              <a
                href="https://www.restory.photos/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-amber-400 transition-colors"
              >
                {t("apps.restory.cta")}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Umi Card */}
          <div className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-10 hover:border-neutral-700 transition-all duration-300 animate-fade-up delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <Image
                  src="/images/umi/logo.png"
                  alt="Umi"
                  width={72}
                  height={72}
                  className="rounded-2xl shadow-lg"
                />
                <span className="px-3 py-1 text-xs font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full">
                  {t("apps.umi.soon")}
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                Umi
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-6">
                {t("apps.umi.desc")}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 text-xs text-neutral-300 bg-neutral-800 rounded-full">iOS</span>
                <span className="px-3 py-1 text-xs text-neutral-300 bg-neutral-800 rounded-full">{t("apps.umi.tag.reminders")}</span>
                <span className="px-3 py-1 text-xs text-neutral-300 bg-neutral-800 rounded-full">{t("apps.umi.tag.birthdays")}</span>
              </div>

              <Link
                href="/umi"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-amber-400 transition-colors"
              >
                {t("apps.umi.cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
