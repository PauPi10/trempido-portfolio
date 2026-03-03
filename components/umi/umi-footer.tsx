"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function UmiFooter() {
  const { t } = useLanguage()

  return (
    <footer className="py-10 px-6 bg-white border-t border-amber-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/umi/logo.png"
              alt="Umi"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-heading font-bold text-neutral-900">Umi</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/umi/privacy" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              {t("umi.footer.privacy")}
            </Link>
            <Link href="/umi/terms" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              {t("umi.footer.terms")}
            </Link>
            <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
              {t("umi.footer.more")}
            </Link>
          </div>

          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Pau Pidelaserra
          </p>
        </div>
      </div>
    </footer>
  )
}
