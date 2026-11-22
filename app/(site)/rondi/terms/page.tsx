import { RondiDoc, rondiMeta } from "@/components/rondi/rondi"

export const metadata = rondiMeta("en", "terms")

export default function Page() {
  return <RondiDoc lang="en" page="terms" />
}
