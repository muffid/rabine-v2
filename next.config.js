/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'drive.usercontent.google.com',
        port: '',
        pathname: '/**',
      },
    ]
   
  },
}

module.exports = nextConfig
