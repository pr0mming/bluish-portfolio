const pwaInit = require('next-pwa')

const nextPWA = pwaInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true
}

module.exports = nextPWA(nextConfig)
