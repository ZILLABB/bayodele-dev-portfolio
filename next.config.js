/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["github.com"],
  },
  distDir: ".next",
  trailingSlash: true,
  webpack: (config) => {
    // Revert to original webpack config, if needed
    return config;
  },
};

module.exports = nextConfig;
