import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,
  // Skip trailing slash redirect
  skipTrailingSlashRedirect: false,
};

export default nextConfig;
