/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Keep this for static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 