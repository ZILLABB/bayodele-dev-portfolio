import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['github.com'],
        unoptimized: true,
    },
    output: 'export',
    distDir: '.next',
    trailingSlash: true, webpack: (config) => {
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

export default nextConfig;