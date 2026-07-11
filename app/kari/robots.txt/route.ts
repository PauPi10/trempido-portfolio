// robots.txt for https://karicoach.app (served via the host rewrite).
export const dynamic = "force-static"

export function GET() {
  const body = `User-Agent: *
Allow: /

Host: https://karicoach.app
Sitemap: https://karicoach.app/sitemap.xml
`
  return new Response(body, { headers: { "Content-Type": "text/plain" } })
}
