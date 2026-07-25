"use client"

import { useEffect, useRef, useState } from "react"

/** Fade + rise into view on scroll. The only client-side JS on the Pick pages. */
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
