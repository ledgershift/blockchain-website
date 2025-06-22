/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // GitHub Pages deployment configuration
  basePath: process.env.NODE_ENV === 'production' ? '/v0-blockchain-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/v0-blockchain-website/' : '',
}

export default nextConfig
