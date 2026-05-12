import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  poweredByHeader: false,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerCompiles: false,
    parallelServerBuildTraces: false,
  }
};

export default withNextIntl(nextConfig);

