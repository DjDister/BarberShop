/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  ...nextConfig,
  images: {
    domains: ["cdn.discordapp.com"],

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
