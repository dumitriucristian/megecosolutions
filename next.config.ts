import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Alpine (musl) only needs the linuxmusl sharp binaries; drop glibc copies.
  outputFileTracingExcludes: {
    "*": [
      "node_modules/@img/sharp-libvips-linux-x64/**",
      "node_modules/@img/sharp-linux-x64/**",
    ],
  },
};

export default nextConfig;
