"use client"

import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export function PortfolioHeader() {
  const { t } = useLanguage()

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fade-up">
      <nav className="flex items-center gap-6 px-6 py-3 bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-full shadow-2xl shadow-black/30">
        <a href="#" className="font-heading text-lg font-bold text-white tracking-tight">
          trempido
        </a>
        <div className="w-px h-5 bg-neutral-700" />
        <a href="#apps" className="text-sm text-neutral-400 hover:text-white transition-colors">
          {t("nav.apps")}
        </a>
        <a href="#about" className="text-sm text-neutral-400 hover:text-white transition-colors">
          {t("nav.about")}
        </a>
        <a href="#contact" className="text-sm text-neutral-400 hover:text-white transition-colors">
          {t("nav.contact")}
        </a>
        <LanguageToggle className="border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500" />
      </nav>
    </header>
  )
}
