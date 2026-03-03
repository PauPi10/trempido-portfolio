"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { ArrowLeft } from "lucide-react"

export function UmiHeader() {
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--umi-cream)]/80 backdrop-blur-md border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {t("umi.nav.back")}
        </Link>
        <div className="flex items-center gap-3">
          <Image
            src="/images/umi/logo.png"
            alt="Umi"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-heading font-bold text-neutral-900">Umi</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/umi/privacy" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors hidden sm:block">
            {t("umi.nav.privacy")}
          </Link>
          <Link href="/umi/terms" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors hidden sm:block">
            {t("umi.nav.terms")}
          </Link>
          <LanguageToggle className="border-amber-200 text-neutral-600 hover:text-neutral-900 hover:border-amber-400" />
        </div>
      </div>
    </header>
  )
}
