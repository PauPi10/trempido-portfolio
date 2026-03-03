"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function UmiSocialProof() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="font-heading text-7xl md:text-8xl font-bold text-[var(--umi-yellow)] mb-4">
            78%
          </div>
          <p className="text-xl text-neutral-600 leading-relaxed mb-4">
            {t("umi.social.stat")}
          </p>
          <p className="text-lg text-neutral-900 font-medium leading-relaxed">
            {t("umi.social.text")}
          </p>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/images/umi/notificaciones.png"
            alt="Umi notifications mascot"
            width={200}
            height={200}
            className="animate-float drop-shadow-[0_10px_30px_rgba(255,214,10,0.2)]"
          />
        </div>
      </div>
    </section>
  )
}
