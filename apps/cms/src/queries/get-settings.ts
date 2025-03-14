import { defineQuery } from "groq";

export const getSettings = defineQuery(`
  *[_type == "settings"][0] {
    title,
  }
`);
