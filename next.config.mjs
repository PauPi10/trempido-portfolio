/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/cumpli',
        destination: '/umi',
        permanent: true,
      },
      {
        source: '/cumpli/privacy',
        destination: '/umi/privacy',
        permanent: true,
      },
      {
        source: '/cumpli/terms',
        destination: '/umi/terms',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
