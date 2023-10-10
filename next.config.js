const path = require('path')
const pwaInit = require('next-pwa')

// Next PWA workaround taken from: https://github.com/Schular/next-with-pwa
const nextPWA = pwaInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  buildExcludes: ['app-build-manifest.json'],
  disable: process.env.NODE_ENV === 'development'
})

const generateAppDirEntry = (entry) => {
  const packagePath = require.resolve('next-pwa')
  const packageDirectory = path.dirname(packagePath)
  const registerJs = path.join(packageDirectory, 'register.js')

  return entry().then((entries) => {
    if (entries['main-app'] && !entries['main-app'].includes(registerJs)) {
      if (Array.isArray(entries['main-app'])) {
        entries['main-app'].unshift(registerJs)
      } else if (typeof entries['main-app'] === 'string') {
        entries['main-app'] = [registerJs, entries['main-app']]
      }
    }
    return entries
  })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (config) => {
    if (process.env.NODE_ENV === 'development') return config

    const entry = generateAppDirEntry(config.entry)
    config.entry = () => entry

    return config
  }
}

module.exports = nextPWA(nextConfig)
