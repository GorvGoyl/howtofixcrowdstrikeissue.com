/* eslint-disable require-await */
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        scrollRestoration: true,
    },
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: '*',
    //         },
    //     ],
    // },
    // async redirects() {
    //     return [];
    // },
    // async rewrites() {
    //     return [];
    // },
};

module.exports = nextConfig;
