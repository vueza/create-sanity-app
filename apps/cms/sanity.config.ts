import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { structure } from "./src/structure";
import { types } from "./src/types";

if (!process.env.SANITY_STUDIO_PROJECT_ID) {
  throw new Error("SANITY_STUDIO_PROJECT_ID is not set");
}

if (!process.env.SANITY_STUDIO_DATASET) {
  throw new Error("SANITY_STUDIO_DATASET is not set");
}

export default defineConfig({
  name: "default",
  title: "Sanity",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types,
  },
});
