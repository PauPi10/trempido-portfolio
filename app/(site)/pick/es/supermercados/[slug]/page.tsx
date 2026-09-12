import { notFound } from "next/navigation"
import { StorePage } from "@/components/pick/pages"
import { storesFor, storeBySlug } from "@/lib/pick-content"
import { storeMeta } from "@/lib/pick-meta"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return storesFor("es").map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const s = storeBySlug(slug)
  return s ? storeMeta("es", s) : {}
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const s = storeBySlug(slug)
  if (!s || !s.markets.includes("es")) notFound()
  return <StorePage lang="es" store={s} />
}
