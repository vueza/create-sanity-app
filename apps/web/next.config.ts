import type { NextConfig } from "next";
import { env } from "./src/env";

if (!env) {
  throw new Error("Invalid environment variables");
}

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withBundleAnalyzer(nextConfig);
