"use client"

import { useLanguage } from "@/lib/language-context"
import { Mail } from "lucide-react"

export function PortfolioContact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          {t("contact.title")}
        </h2>

        <p className="text-lg text-neutral-400 mb-10">
          {t("contact.text")}
        </p>

        <a
          href="mailto:ppidelaserra2@gmail.com"
          className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-white bg-neutral-900 border border-neutral-800 rounded-full hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(255,214,10,0.15)] transition-all duration-300"
        >
          <Mail className="w-5 h-5 text-amber-400" />
          ppidelaserra2@gmail.com
        </a>
      </div>
    </section>
  )
}
