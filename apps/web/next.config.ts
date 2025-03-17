import { client } from "@company/cms/client/client";
import { env } from "@company/cms/client/env";
import { getRedirects } from "@company/cms/queries/get-redirects";
import type { NextConfig } from "next";

if (!env) {
  throw new Error("Invalid environment variables");
}

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  redirects: async () => await client.fetch(getRedirects),
};

export default withBundleAnalyzer(nextConfig);
