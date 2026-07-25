import { RecipeIndexPage } from "@/components/pick/pages"
import { recipesIndexMeta } from "@/lib/pick-meta"

export const metadata = recipesIndexMeta("es")

export default function Page() {
  return <RecipeIndexPage lang="es" />
}
