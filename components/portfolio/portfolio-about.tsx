"use client"

import { useLanguage } from "@/lib/language-context"

export function PortfolioAbout() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-up">
          {t("about.title")}
        </h2>

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-12 max-w-3xl animate-fade-up delay-100">
          {t("about.text")}
        </p>

        <div className="grid grid-cols-2 gap-8 max-w-md animate-fade-up delay-200">
          <div>
            <div className="font-heading text-4xl md:text-5xl font-bold text-amber-400 mb-2">2</div>
            <div className="text-neutral-500 text-sm">{t("about.stat.apps")}</div>
          </div>
          <div>
            <div className="font-heading text-4xl md:text-5xl font-bold text-amber-400 mb-2">1K+</div>
            <div className="text-neutral-500 text-sm">{t("about.stat.users")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
