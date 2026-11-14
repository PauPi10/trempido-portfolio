import { notFound } from "next/navigation"
import { VolanteLanding, volanteMeta } from "@/components/volante/volante"
import { VPREFIXED, type VLang } from "@/lib/volante-content"

type Props = { params: Promise<{ lang: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return VPREFIXED.map((lang) => ({ lang }))
}

const valid = (l: string): l is Exclude<VLang, "en"> => (VPREFIXED as string[]).includes(l)

export async function generateMetadata({ params }: Props) {
  const { lang } = await params
  return valid(lang) ? volanteMeta(lang, "home") : {}
}

export default async function Page({ params }: Props) {
  const { lang } = await params
  if (!valid(lang)) notFound()
  return <VolanteLanding lang={lang} />
}
