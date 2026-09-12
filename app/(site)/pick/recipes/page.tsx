import { RecipeIndexPage } from "@/components/pick/pages"
import { recipesIndexMeta } from "@/lib/pick-meta"

export const metadata = recipesIndexMeta("en")

export default function Page() {
  return <RecipeIndexPage lang="en" />
}
