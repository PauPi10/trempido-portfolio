// robots.txt for https://karicoach.app (served via the host rewrite).
// AI search crawlers are listed explicitly so their access never depends on
// the wildcard rule. Nothing is disallowed: the site has no private areas.
export const dynamic = "force-static"

const AI_SEARCH_CRAWLERS = [
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
  const blocks = AI_SEARCH_CRAWLERS.map((ua) => `User-Agent: ${ua}\nAllow: /\n`).join("\n")
  const body = `User-Agent: *
Allow: /

${blocks}
Host: https://karicoach.app
Sitemap: https://karicoach.app/sitemap.xml
`
  return new Response(body, { headers: { "Content-Type": "text/plain" } })
}
