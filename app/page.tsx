import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AppsSection } from "@/components/apps-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AppsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
