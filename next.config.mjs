/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lcw.nyc3.cdn.digitaloceanspaces.com',
                port: '',
                pathname: '/production/currencies/32/**',
            },
        ],
    },
};

export default nextConfig;
