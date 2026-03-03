import Link from "next/link"
import { Mail, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">Contacto</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6 text-balance">
            ¿Tienes un proyecto en mente? Me encantaría escucharte.
          </h2>
          <div className="flex flex-col gap-4">
            <Link 
              href="mailto:hello@example.com" 
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Mail className="w-5 h-5" />
              <span className="border-b border-transparent group-hover:border-foreground transition-colors">
                ppidelaserra2@gmail.com
              </span>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  )
}
