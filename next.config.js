require('dotenv').config()
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = {
  env: {
    // Build Time
    UNSPLASH_CLIENT_ID: process.env.UNSPLASH_CLIENT_ID
  },
  plugins: withPlugins([[withBundleAnalyzer]])
}
