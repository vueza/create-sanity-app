import { z } from "zod";
import { q } from "../client/client";
import { contentObject } from "./content-object";
import { heading, headingTyped } from "./heading";
import { hero } from "./hero";

export const pageBuilder = /* groq */ `{
  _type,
  _key,
  _type == "contentObject" => ${contentObject}
  _type == "hero" => ${hero}
  _type == "heading" => ${heading}
},`;

export const pageBuilderTyped = q
  .fragment<{
    pageBuilder: {
      _key: string;
      _type: string;
    }[];
  }>()
  .project((sub) => ({
    pageBuilder: sub.field("pageBuilder[]").project((sub) => ({
      _key: z.string(),
      _type: z.string(),
      ...sub.conditionalByType({
        heading: headingTyped,
      }),
    })),
  }));
