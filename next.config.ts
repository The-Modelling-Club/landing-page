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
};

export default nextConfig;
