"use client"

import { useLanguage } from "@/lib/language-context"
import { ArrowDown } from "lucide-react"

export function PortfolioHero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,214,10,0.08)_0%,_transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full mb-8">
            {t("hero.badge")}
          </span>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight animate-fade-up delay-100">
          {t("hero.headline.pre")}{" "}
          <span className="text-amber-400">{t("hero.headline.accent")}</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-200">
          {t("hero.sub")}
        </p>

        <div className="mt-10 animate-fade-up delay-300">
          <a
            href="#apps"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-950 font-semibold rounded-full hover:bg-neutral-200 transition-colors"
          >
            {t("hero.cta")}
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
