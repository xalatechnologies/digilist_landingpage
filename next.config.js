/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.digilist.no',
        pathname: '/api/utleieobjekter/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/api/utleieobjekter/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig

