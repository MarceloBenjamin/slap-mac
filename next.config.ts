import type { NextConfig } from "next";

/** Set to `/nome-do-repo` when publishing to GitHub Project Pages (omit for user/org site or custom domain). */
const basePath = process.env.NEXT_STATIC_BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
