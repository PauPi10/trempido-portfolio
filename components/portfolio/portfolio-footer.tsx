"use client"

import { useLanguage } from "@/lib/language-context"

export function PortfolioFooter() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading text-sm font-bold text-neutral-600">trempido</span>
        <p className="text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} Pau Pidelaserra. {t("footer.rights")}
        </p>
      </div>
    </footer>
  )
}
