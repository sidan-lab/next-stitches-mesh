/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const appConfig = {
  NODE_ENV: process.env.NODE_ENV
}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  publicRuntimeConfig: {
    ...appConfig
  },
  webpack: function (config) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true
    }
    return config
  }
}

module.exports = nextConfig
