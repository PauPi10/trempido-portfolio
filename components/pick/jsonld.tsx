import { abs } from "@/lib/pick-content"

/** Inline JSON-LD structured data (server-rendered, never hydrated). */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.path ? { item: abs(it.path) } : {}),
    })),
  }
}

/** ItemList for hub pages — tells Google the page is a curated set, not a dupe. */
export function itemListLd(name: string, urls: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: urls.length,
    itemListElement: urls.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: abs(u),
    })),
  }
}
