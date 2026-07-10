import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kari — Your social gym, by voice",
  description:
    "Kari is a voice-based charisma and social-skills coach. Practice real conversations out loud with an AI and get a report on exactly what to improve. Backed by science.",
}

export default function KariLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="kari-theme">{children}</div>
}
