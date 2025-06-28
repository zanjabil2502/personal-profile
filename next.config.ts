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
}

module.exports = nextConfig