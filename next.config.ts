/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output untuk Docker optimization
  output: 'standalone',

  // Compress images
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // Enable experimental features jika diperlukan
  experimental: {
    // outputFileTracingRoot: path.join(__dirname, '../../'),
  },

  // Base path and asset prefix for GitHub Pages deployment
  basePath: '/personal-profile',
  assetPrefix: '/personal-profile/',
  trailingSlash: true, // Important for static export on GitHub Pages
}

module.exports = nextConfig
