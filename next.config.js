/** @type {import('next').NextConfig} */
const nextConfig = {output: 'export'}

module.exports = {
    experimental: {
      images: {
        unoptimized: true,
      },
    },
  }

module.exports = nextConfig
