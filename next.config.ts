import type { NextConfig } from "next";

// GitHub Pages 정적 빌드: STATIC_EXPORT=1 (정식 도메인이라 NEXT_PUBLIC_BASE_PATH 는 비움)
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport && { output: "export", trailingSlash: true }),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
