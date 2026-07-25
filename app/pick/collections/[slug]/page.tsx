import { notFound } from "next/navigation"
import { CollectionPage } from "@/components/pick/pages"
import { COLLECTIONS, collectionBySlug } from "@/lib/pick-catalog"
import { collectionMeta } from "@/lib/pick-meta"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug.en }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const c = collectionBySlug("en", slug)
  return c ? collectionMeta("en", c) : {}
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const c = collectionBySlug("en", slug)
  if (!c) notFound()
  return <CollectionPage lang="en" collection={c} />
}
