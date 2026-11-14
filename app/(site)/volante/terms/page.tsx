import { VolanteDoc, volanteMeta } from "@/components/volante/volante"

export const metadata = volanteMeta("en", "terms")

export default function Page() {
  return <VolanteDoc lang="en" page="terms" />
}
