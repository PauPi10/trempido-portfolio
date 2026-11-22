import { notFound } from "next/navigation"
import { RondiDoc, rondiMeta } from "@/components/rondi/rondi"
import { RDOCS, RPREFIXED, RSLUGS, pageFromSlug, type RLang } from "@/lib/rondi-content"

type Props = { params: Promise<{ lang: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return RPREFIXED.flatMap((lang) => RDOCS.map((p) => ({ lang, slug: RSLUGS[lang][p] })))
}

function resolve(lang: string, slug: string) {
  if (!(RPREFIXED as string[]).includes(lang)) return undefined
  const page = pageFromSlug(lang as RLang, slug)
  return page ? { lang: lang as RLang, page } : undefined
}

export async function generateMetadata({ params }: Props) {
  const { lang, slug } = await params
  const r = resolve(lang, slug)
  return r ? rondiMeta(r.lang, r.page) : {}
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params
  const r = resolve(lang, slug)
  if (!r) notFound()
  return <RondiDoc lang={r.lang} page={r.page} />
}
