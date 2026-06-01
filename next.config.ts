import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    deviceSizes: [390, 768, 1024, 1280, 1536],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 86400,
  },
  compress: true,
};

export default nextConfig;
