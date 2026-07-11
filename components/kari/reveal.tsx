"use client"

import { useEffect, useRef } from "react"

/* Adds .is-in when the element enters the viewport (staggered via --k-delay). */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: {
  children: React.ReactNode
  delay?: number
  as?: "div" | "section" | "article" | "li" | "span"
  className?: string
}) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in")
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`k-reveal ${className ?? ""}`} style={{ "--k-delay": `${delay}s` } as React.CSSProperties}>
      {children}
    </Tag>
  )
}
