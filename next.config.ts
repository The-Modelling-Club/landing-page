import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
      },
      {
        hostname: "cdn.sanity.io",
      },
      {
        hostname: "ui-avatars.com",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Completely exclude PDF-related packages from server bundle
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        'react-pdf': 'commonjs react-pdf',
        'pdfjs-dist': 'commonjs pdfjs-dist',
        'canvas': 'commonjs canvas',
      });

      // Also add to resolve alias for server
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-pdf': false,
        'pdfjs-dist': false,
      };
    }

    // Fix for react-pdf client-side issues
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        canvas: false,
      };

      // Ensure proper module resolution for client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        stream: false,
      };
    }

    return config;
  },

  serverExternalPackages: ['react-pdf', 'pdfjs-dist'],
};

export default nextConfig;
