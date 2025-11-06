import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable SWC minification
  swcMinify: true,
  
  // Disable React StrictMode if not needed (can help with some build issues)
  reactStrictMode: true,
  
  // Configure webpack to handle lightningcss
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `lightningcss` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
      };
    }
    return config;
  },
  
  // Enable experimental features if needed
  experimental: {
    // Enable server components external packages if using them
    serverComponentsExternalPackages: ['@opennextjs/cloudflare'],
  },
  
  // Configure output for Cloudflare
  output: 'standalone',
};

export default nextConfig;

// Enable Cloudflare context in development
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
