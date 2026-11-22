// robots.txt for https://www.trempido.com.
// It is a route handler (like app/(kari)/kari/robots.txt) because the
// metadata file app/(site)/robots.ts was not being emitted by the build:
// /robots.txt answered 404 in production (checked 19-nov-2026).
//
// AI search / assistant crawlers are listed explicitly so their access never
// depends on the wildcard rule. Nothing is disallowed: no private areas.
export const dynamic = "force-static"

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "DuckAssistBot",
  "Amazonbot",
  "meta-externalagent",
]

export function GET() {
  const blocks = AI_CRAWLERS.map((ua) => `User-Agent: ${ua}\nAllow: /\n`).join("\n")
  const body = `User-Agent: *
Allow: /

${blocks}
Host: https://www.trempido.com
Sitemap: https://www.trempido.com/sitemap.xml
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
