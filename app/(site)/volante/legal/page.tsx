import { VolanteDoc, volanteMeta } from "@/components/volante/volante"

export const metadata = volanteMeta("en", "legal")

export default function Page() {
  return <VolanteDoc lang="en" page="legal" />
}
