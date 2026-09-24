import type { NextConfig } from "next";

// GitHub Pages 미리보기용 정적 빌드: STATIC_EXPORT=1, NEXT_PUBLIC_BASE_PATH=/저장소이름
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport && { output: "export", trailingSlash: true }),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
