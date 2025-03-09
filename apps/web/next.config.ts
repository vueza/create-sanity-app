import type { NextConfig } from "next";
import { env } from "./src/env";

if (!env) {
  throw new Error("Invalid environment variables");
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
