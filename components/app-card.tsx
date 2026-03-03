import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface AppCardProps {
  name: string
  description: string
  category: string
  logoUrl: string
  link: string
  tags: string[]
  comingSoon?: boolean
}

export function AppCard({ 
  name, 
  description, 
  category, 
  logoUrl, 
  link, 
  tags,
  comingSoon 
}: AppCardProps) {
  return (
    <Link 
      href={link} 
      target="_blank"
      className="group block"
    >
      <article className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-muted-foreground/20">
        <div className="aspect-[16/10] relative bg-muted overflow-hidden">
          <Image
            src={logoUrl || "/placeholder.svg"}
            alt={`${name} logo`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {comingSoon && (
            <div className="absolute top-4 right-4 bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-full">
              Próximamente
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{category}</p>
              <h3 className="text-xl font-medium text-foreground group-hover:text-foreground/80 transition-colors flex items-center gap-2">
                {name}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
