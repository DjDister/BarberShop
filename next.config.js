/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  ...nextConfig,
  images: {
    domains: ["cdn.discordapp.com", "cdn.sanity.io"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "/attachments/**",
      },
    ],
  },
};
