import { notFound } from "next/navigation"
import { VolanteDoc, volanteMeta } from "@/components/volante/volante"
import { VDOCS, VPREFIXED, VSLUGS, pageFromSlug, type VLang } from "@/lib/volante-content"

type Props = { params: Promise<{ lang: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return VPREFIXED.flatMap((lang) => VDOCS.map((p) => ({ lang, slug: VSLUGS[lang][p] })))
}

function resolve(lang: string, slug: string) {
  if (!(VPREFIXED as string[]).includes(lang)) return undefined
  const page = pageFromSlug(lang as VLang, slug)
  return page ? { lang: lang as VLang, page } : undefined
}

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params
  const r = resolve(lang, slug)
  return r ? volanteMeta(r.lang, r.page) : {}
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params
  const r = resolve(lang, slug)
  if (!r) notFound()
  return <VolanteDoc lang={r.lang} page={r.page} />
}
