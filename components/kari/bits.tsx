/* Shared building blocks for the Kari pages: sunburst, voice bars, JSON-LD. */

export function Sunburst({
  size = 380,
  color = "rgba(201,106,30,0.16)",
  style,
  className,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg
      className={`k-sunburst ${className ?? ""}`}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      {rays.map((r) => (
        <rect
          key={r}
          x="47.2"
          y="6"
          width="5.6"
          height="26"
          rx="2.8"
          fill={color}
          transform={`rotate(${r} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="11" fill={color} />
    </svg>
  );
}

export function Voice({ className }: { className?: string }) {
  return (
    <span className={`k-voice ${className ?? ""}`} aria-hidden="true">
      <i /><i /><i /><i /><i />
    </span>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
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
  };
}
