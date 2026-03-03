"use client"

import { LanguageProvider } from "@/lib/language-context"
import { UmiHeader } from "@/components/umi/umi-header"
import { UmiHero } from "@/components/umi/umi-hero"
import { UmiFeatures } from "@/components/umi/umi-features"
import { UmiScreenshots } from "@/components/umi/umi-screenshots"
import { UmiSocialProof } from "@/components/umi/umi-social-proof"
import { UmiPricing } from "@/components/umi/umi-pricing"
import { UmiFaq } from "@/components/umi/umi-faq"
import { UmiSupportForm } from "@/components/umi/umi-support-form"
import { UmiFooter } from "@/components/umi/umi-footer"

export default function UmiPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FFFDF5]">
        <UmiHeader />
        <UmiHero />
        <UmiFeatures />
        <UmiScreenshots />
        <UmiSocialProof />
        <UmiPricing />
        <UmiFaq />
        <UmiSupportForm />
        <UmiFooter />
      </div>
    </LanguageProvider>
  )
}
