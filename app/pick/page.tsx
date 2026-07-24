"use client"

import { LanguageProvider } from "@/lib/language-context"
import { PickLanding } from "@/components/pick/landing"

export default function PickPage() {
  return (
    <LanguageProvider defaultLang="en">
      <PickLanding />
    </LanguageProvider>
  )
}
