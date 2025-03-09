import { assist } from "@sanity/assist";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { env } from "./src/env";
import { presentation } from "./src/presentation";
import { structure } from "./src/structure";
import { types } from "./src/types";

if (!env) {
  throw new Error("Invalid environment variables");
}

export default defineConfig({
  name: env.SANITY_STUDIO_NAME,
  title: env.SANITY_STUDIO_TITLE,
  projectId: env.SANITY_STUDIO_PROJECT_ID,
  dataset: env.SANITY_STUDIO_DATASET,
  plugins: [
    presentationTool(presentation),
    structureTool(structure),
    assist(),
    visionTool(),
  ],
  schema: {
    types,
  },
});
