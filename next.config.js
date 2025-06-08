/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["github.com"],
    unoptimized: true,
  },
  distDir: ".next",
  trailingSlash: true,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        net: false,
        dns: false,
        tls: false,
      },
    };
    return config;
  },
};

module.exports = nextConfig;
