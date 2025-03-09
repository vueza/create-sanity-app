import { assist } from "@sanity/assist";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { env } from "./src/env";
import { structure } from "./src/structure";
import { types } from "./src/types";

if (!env) {
  throw new Error("Invalid environment variables");
}

export default defineConfig({
  name: "default",
  title: "Sanity",
  projectId: env.SANITY_STUDIO_PROJECT_ID,
  dataset: env.SANITY_STUDIO_DATASET,
  plugins: [structureTool({ structure }), assist(), visionTool()],
  schema: {
    types,
  },
});
