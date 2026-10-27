import type { NextConfig } from "next";

// Static export for GitHub Pages. No Node.js server is required.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
    ],
  },
};

export default nextConfig;
