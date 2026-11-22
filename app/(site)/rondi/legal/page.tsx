import { RondiDoc, rondiMeta } from "@/components/rondi/rondi"

export const metadata = rondiMeta("en", "legal")

export default function Page() {
  return <RondiDoc lang="en" page="legal" />
}
