"use client"

import { LanguageProvider } from "@/lib/language-context"
import { PortfolioHeader } from "@/components/portfolio/portfolio-header"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioApps } from "@/components/portfolio/portfolio-apps"
import { PortfolioAbout } from "@/components/portfolio/portfolio-about"
import { PortfolioContact } from "@/components/portfolio/portfolio-contact"
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-neutral-950 text-white">
        <PortfolioHeader />
        <PortfolioHero />
        <PortfolioApps />
        <PortfolioAbout />
        <PortfolioContact />
        <PortfolioFooter />
      </main>
    </LanguageProvider>
  )
}
