import { notFound } from "next/navigation"
import { RondiLanding, rondiMeta } from "@/components/rondi/rondi"
import { RPREFIXED, type RLang } from "@/lib/rondi-content"

type Props = { params: Promise<{ lang: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return RPREFIXED.map((lang) => ({ lang }))
}

const valid = (l: string): l is Exclude<RLang, "en"> => (RPREFIXED as string[]).includes(l)

export async function generateMetadata({ params }: Props) {
  const { lang } = await params
  return valid(lang) ? rondiMeta(lang, "home") : {}
}

export default async function Page({ params }: Props) {
  const { lang } = await params
  if (!valid(lang)) notFound()
  return <RondiLanding lang={lang} />
}
