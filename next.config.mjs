/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ContextWeaverWebsite',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
