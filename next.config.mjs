/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    const origin = process.env.API_ORIGIN || 'http://localhost:3000'
    return [
      {
        source: '/api/:path*',
        destination: `${origin}/api/v1/:path*`,
      },
    ]
  },
}

export default nextConfig
