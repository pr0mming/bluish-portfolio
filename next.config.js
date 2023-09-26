/** @type {import('next').NextConfig} */

const nextPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

module.exports = nextPWA({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'projecteuler.net',
        port: '',
        pathname: '/profile/**'
      },
      {
        protocol: 'https',
        hostname: 'hackthebox.com',
        port: '',
        pathname: '/badge/**'
      }
    ]
  }
})
