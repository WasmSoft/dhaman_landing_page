import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AR: يحتاج OpenNext على Cloudflare إلى مخرجات standalone لقراءة manifests الخادم أثناء النشر.
  // EN: OpenNext on Cloudflare needs standalone output to read server manifests during deploy builds.
  output: "standalone",
};

export default nextConfig;
