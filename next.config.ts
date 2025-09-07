import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { hostname: "**", protocol: "https" },
      { hostname: "**", protocol: "http" },
    ],
  },
  /* config options here */
};

export default nextConfig;
