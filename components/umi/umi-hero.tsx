"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UmiHero() {
  const { t } = useLanguage()

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Yellow glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--umi-yellow)] rounded-full opacity-[0.07] blur-[120px]" />

      <div className="max-w-4xl mx-auto text-center relative">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            {t("umi.hero.badge")}
          </span>
        </div>

        <div className="mb-8 animate-fade-up delay-100">
          <Image
            src="/images/umi/contento.png"
            alt="Umi mascot"
            width={160}
            height={160}
            className="mx-auto animate-float drop-shadow-[0_10px_30px_rgba(255,214,10,0.3)]"
          />
        </div>

        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 text-balance animate-fade-up delay-200">
          {t("umi.hero.title")}
        </h1>

        <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-300">
          {t("umi.hero.sub")}
        </p>

        <div className="animate-fade-up delay-400">
          <Button
            size="lg"
            className="bg-[var(--umi-yellow)] hover:bg-amber-400 text-neutral-900 px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-200 font-semibold cursor-default"
            disabled
          >
            <Bell className="w-5 h-5 mr-2" />
            {t("umi.hero.cta")}
          </Button>
        </div>
      </div>
    </section>
  )
}
