import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-foreground font-medium text-lg">
          My Apps
        </Link>
        <nav className="flex items-center gap-8">
          <Link 
            href="#apps" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Apps
          </Link>
          <Link 
            href="#contact" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}
