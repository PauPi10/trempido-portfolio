import { notFound } from "next/navigation"
import { CollectionPage } from "@/components/pick/pages"
import { COLLECTIONS, collectionBySlug } from "@/lib/pick-catalog"
import { collectionMeta } from "@/lib/pick-meta"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug.es }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const c = collectionBySlug("es", slug)
  return c ? collectionMeta("es", c) : {}
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const c = collectionBySlug("es", slug)
  if (!c) notFound()
  return <CollectionPage lang="es" collection={c} />
}
