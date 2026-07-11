/** @type {import('next').NextConfig} */

// The Kari site lives in app/kari/* but is served on its own domain,
// https://karicoach.app, with clean URLs (no /kari prefix):
//   karicoach.app/roleplays  →  (rewrite)  →  app/kari/roleplays
// trempido.com keeps the portfolio and Umi; its old /kari/* URLs 301
// to the new domain so SEO consolidates there.
const KARI_HOSTS = ['karicoach.app', 'www.karicoach.app']
const TREMPIDO_HOSTS = ['www.trempido.com', 'trempido.com']

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // cumpli → umi (legacy)
      { source: '/cumpli', destination: '/umi', permanent: true },
      { source: '/cumpli/privacy', destination: '/umi/privacy', permanent: true },
      { source: '/cumpli/terms', destination: '/umi/terms', permanent: true },

      // www.karicoach.app → apex
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.karicoach.app' }],
        destination: 'https://karicoach.app/:path*',
        permanent: true,
      },

      // on karicoach.app, strip any legacy /kari prefix
      {
        source: '/kari',
        has: [{ type: 'host', value: 'karicoach.app' }],
        destination: 'https://karicoach.app/',
        permanent: true,
      },
      {
        source: '/kari/:path*',
        has: [{ type: 'host', value: 'karicoach.app' }],
        destination: 'https://karicoach.app/:path*',
        permanent: true,
      },

      // trempido.com/kari/* moved permanently to the new domain
      ...TREMPIDO_HOSTS.flatMap((host) => [
        {
          source: '/kari',
          has: [{ type: 'host', value: host }],
          destination: 'https://karicoach.app/',
          permanent: true,
        },
        {
          source: '/kari/:path*',
          has: [{ type: 'host', value: host }],
          destination: 'https://karicoach.app/:path*',
          permanent: true,
        },
      ]),
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        // karicoach.app serves the app/kari/* tree at the root
        ...KARI_HOSTS.flatMap((host) => [
          {
            source: '/',
            has: [{ type: 'host', value: host }],
            destination: '/kari',
          },
          {
            source: '/sitemap.xml',
            has: [{ type: 'host', value: host }],
            destination: '/kari/sitemap.xml',
          },
          {
            source: '/robots.txt',
            has: [{ type: 'host', value: host }],
            destination: '/kari/robots.txt',
          },
          {
            source: '/llms.txt',
            has: [{ type: 'host', value: host }],
            destination: '/kari/llms.txt',
          },
          {
            // everything else without a file extension, except assets and
            // the kari/umi trees themselves (kari is redirect-stripped above)
            source: '/:path((?!kari|umi|images|_next|api|favicon|icon|apple-icon|.*\\..*).+)',
            has: [{ type: 'host', value: host }],
            destination: '/kari/:path',
          },
        ]),
      ],
    }
  },
}

export default nextConfig
