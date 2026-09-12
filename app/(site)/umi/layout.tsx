import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Umi — Nunca olvides un cumpleaños",
  description: "Umi te ayuda a recordar los cumpleaños de todos tus seres queridos. Recordatorios inteligentes, trivia y la forma más bonita de celebrar.",
}

export default function UmiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="umi-theme">
      {children}
    </div>
  )
}
