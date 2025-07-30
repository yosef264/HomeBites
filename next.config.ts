import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['placehold.co'],
    unoptimized: true // temp fix
  }
};

export default nextConfig;
