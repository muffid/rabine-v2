/** @type {import('next').NextConfig} */
const nextConfig = {
  output : 'standalone',
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['drive.usercontent.google.com'],
  },
}

module.exports = nextConfig
