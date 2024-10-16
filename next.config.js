/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'fogon-food-ordering.s3.sa-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'w0.peakpx.com',
      },
      {
        protocol: 'https',
        hostname: 'static.tildacdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.argentinacabanas.com',
      },
      {
        protocol: 'https',
        hostname: 'ejemplo.com',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },

    ],
  },
}

module.exports = nextConfig