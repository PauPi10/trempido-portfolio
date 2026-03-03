"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage()

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className={`text-sm font-medium px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${className}`}
      aria-label="Toggle language"
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  )
}
