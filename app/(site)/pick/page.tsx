import { PickLanding, landingLd } from "@/components/pick/landing"
import { JsonLd } from "@/components/pick/jsonld"
import { homeMeta } from "@/lib/pick-meta"

export const metadata = homeMeta("en")

export default function Page() {
  return (
    <>
      <JsonLd data={landingLd("en")} />
      <PickLanding lang="en" />
    </>
  )
}
