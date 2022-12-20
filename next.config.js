/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    IMMERSY: process.env.NEXT_PUBLIC_IMMERSY_MAIL,
  },
}

module.exports = nextConfig
