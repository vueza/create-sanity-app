import { z } from "zod";
import { q } from "../client/client";

export const heading = /* groq */ `{
  heading,
},`;

export const headingTyped = q.fragment<{ heading: string }>().project({
  heading: z.string(),
});
