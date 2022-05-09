/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:[
      "firebasestorage.googleapis.com",
      "platform-lookaside.fbsbx.com"
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
