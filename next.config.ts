import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/CreativeLAB.in.th",
  assetPrefix: "/CreativeLAB.in.th/",
};

export default nextConfig;
