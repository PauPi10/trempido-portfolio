import { AppCard } from "./app-card"

const apps = [
  {
    name: "Restory",
    description: "Transforma fotos dañadas, descoloridas y en blanco y negro en recuerdos vívidos con IA de grado profesional. Restauración de fotos familiares en segundos.",
    category: "Restauración de Fotos",
    logoUrl: "/images/logo.png",
    link: "https://www.restory.photos/",
    tags: ["iOS", "IA", "Fotos", "Restauración"],
    comingSoon: false,
  },
  {
    name: "Cumpli",
    description: "Nunca olvides un cumpleaños importante. Recibe recordatorios personalizados y organiza todos los cumpleaños de tus seres queridos en un solo lugar.",
    category: "Productividad",
    logoUrl: "/images/chatgpt-20image-2028-20de-20gen.png",
    link: "/cumpli",
    tags: ["iOS", "Recordatorios", "Cumpleaños"],
    comingSoon: true,
  },
]

export function AppsSection() {
  return (
    <section id="apps" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm text-muted-foreground uppercase tracking-wide">Mis Apps</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {apps.map((app) => (
            <AppCard key={app.name} {...app} />
          ))}
        </div>
      </div>
    </section>
  )
}
