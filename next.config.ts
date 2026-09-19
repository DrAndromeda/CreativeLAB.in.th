import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/CreativeLAB.in.th",
  images: {
    unoptimized: true,
  },
  // Lets the dev server's HMR/data requests through when the site is
  // opened via the LAN IP (e.g. testing from a phone) instead of
  // localhost — otherwise Next.js blocks those as cross-origin for
  // safety, which breaks client-side interactivity (header dropdowns,
  // etc.) even though the initial page still renders.
  allowedDevOrigins: ["192.168.1.101"],
};

export default nextConfig;