import { VolanteDoc, volanteMeta } from "@/components/volante/volante"

export const metadata = volanteMeta("en", "privacy")

export default function Page() {
  return <VolanteDoc lang="en" page="privacy" />
}
