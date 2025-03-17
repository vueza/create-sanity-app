import { defineQuery } from "groq";

export const getRedirects = defineQuery(`
  *[_type == "redirect"] {
    source,
    destination,
    "permanent": defined(permanent) && permanent == true,
  }
`);
