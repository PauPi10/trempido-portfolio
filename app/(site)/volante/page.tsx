import { VolanteLanding, volanteMeta } from "@/components/volante/volante"

export const metadata = volanteMeta("en", "home")

export default function Page() {
  return <VolanteLanding lang="en" />
}
