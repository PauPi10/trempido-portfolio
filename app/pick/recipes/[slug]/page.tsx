import { notFound } from "next/navigation"
import { RecipePage } from "@/components/pick/pages"
import { recipe, recipes } from "@/lib/pick-catalog"
import { recipeMeta } from "@/lib/pick-meta"
import { isReleased } from "@/lib/pick-release"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return recipes("en").map((r) => ({ slug: r.id }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const r = recipe("en", slug)
  if (!r) return {}
  const meta = recipeMeta("en", r)
  // Staged rollout: linked and readable, but out of the index until released.
  return isReleased(r.id) ? meta : { ...meta, robots: { index: false, follow: true } }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const r = recipe("en", slug)
  if (!r) notFound()
  return <RecipePage lang="en" recipe={r} />
}
