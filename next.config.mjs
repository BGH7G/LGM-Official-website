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
    if (process.env.NODE_ENV !== "development") {
      return []
    }
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/v1/:path*',
      },
    ]
  },
}

export default nextConfig
