"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { T, type CopyKey, type Lang } from "@/lib/pick-content"

/** Read the current language as a Pick lang ("en" default). */
export function usePickLang(): Lang {
  const { lang } = useLanguage()
  return lang === "es" ? "es" : "en"
}

/** Translate a Pick copy key with the current language. */
export function usePickT() {
  const lang = usePickLang()
  return (key: CopyKey) => T[key][lang]
}

/** Inline JSON-LD structured data. */
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
      item: `https://www.trempido.com${it.path}`,
    })),
  }
}

/** Fade + rise into view on scroll. */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}: {
  children: React.ReactNode
  delay?: number
  as?: React.ElementType
  className?: string
} & React.HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || seen) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [seen])

  return (
    <Tag
      ref={ref}
      className={`p-reveal ${seen ? "is-in" : ""} ${className}`}
      style={{ ["--p-delay" as string]: `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
