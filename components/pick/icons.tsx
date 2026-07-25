// Line icons for the Pick site. Drawn in the same 24px grid and stroke weight
// so the set reads as one family — replaces the emoji that used to sit in the
// feature cards and the hero.

type P = { size?: number; className?: string }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
})

export function IconPlan({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="3" y="4.5" width="18" height="16" rx="3" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
      <path d="M7.5 13.5h4M7.5 17h6.5" />
    </svg>
  )
}

export function IconBudget({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 8.5a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
      <path d="M16.5 12.2h3.2" />
      <path d="M6.5 5.5 14 2.8" />
    </svg>
  )
}

export function IconPan({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 11.5h12.5a1 1 0 0 1 1 1v1.2a5.6 5.6 0 0 1-5.6 5.6H8.6A5.6 5.6 0 0 1 3 13.7z" />
      <path d="M16.5 13.2 21 10" />
      <path d="M6.5 8.2c0-1.6 1.6-1.6 1.6-3.2M10.5 8.2c0-1.6 1.6-1.6 1.6-3.2" />
    </svg>
  )
}

export function IconCart({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M2.5 3.5h2.2l2.1 10.4a2 2 0 0 0 2 1.6h7.5a2 2 0 0 0 2-1.5l1.4-5.6H6" />
      <circle cx="9.5" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
    </svg>
  )
}

export function IconSwap({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3.5 8.5h13.2l-3-3M20.5 15.5H7.3l3 3" />
    </svg>
  )
}

export function IconLock({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <rect x="4.5" y="10" width="15" height="10.5" rx="3" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
      <path d="M12 14.2v2.4" />
    </svg>
  )
}

export function IconClock({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="8.7" />
      <path d="M12 7.2V12l3.1 1.9" />
    </svg>
  )
}

export function IconTag({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3.5 10.6V4.5a1 1 0 0 1 1-1h6.1a2 2 0 0 1 1.4.6l8 8a2 2 0 0 1 0 2.8l-5.1 5.1a2 2 0 0 1-2.8 0l-8-8a2 2 0 0 1-.6-1.4z" />
      <circle cx="7.7" cy="7.7" r="1.2" />
    </svg>
  )
}

export function IconFlame({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 2.8c3.4 3.2 5.6 6 5.6 9.2a5.6 5.6 0 1 1-11.2 0c0-1.6.6-3 1.8-4.5.5 1.3 1.2 2 2.1 2.2-.2-2.4.4-4.6 1.7-6.9z" />
    </svg>
  )
}

export function IconLeaf({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M20 4c0 8.3-4.3 12.5-10.5 12.5A5.5 5.5 0 0 1 4 11c0-4.3 5.3-7 16-7z" />
      <path d="M4.5 20c2.5-4.5 5.6-7.3 9.5-9" />
    </svg>
  )
}

export function IconStore({ size = 24, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 9.5h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M3 9.5 4.7 4.4A1.3 1.3 0 0 1 6 3.5h12c.6 0 1.1.4 1.3.9L21 9.5" />
      <path d="M9.8 21v-5.4h4.4V21" />
    </svg>
  )
}

export function IconCheck({ size = 20, className }: P) {
  return (
    <svg {...base(size)} className={className} strokeWidth={2.4}>
      <path d="M4.5 12.5l4.5 4.5L19.5 6.5" />
    </svg>
  )
}

export function IconArrow({ size = 20, className }: P) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5" />
    </svg>
  )
}

export function IconApple({ size = 20, className }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.9-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.6 2.3 2.8 2.2 1.1 0 1.6-.7 2.9-.7s1.7.7 2.9.7 2-1.1 2.7-2.2c.9-1.2 1.2-2.4 1.3-2.5 0 0-2.5-1-2.5-3.5zM14.2 5.4c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.7-.9 2.8 1 0 2-.5 2.6-1.3z" />
    </svg>
  )
}
