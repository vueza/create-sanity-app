import { defineField, defineType } from "sanity";

export const heading = defineType({
  name: "heading",
  title: "Heading",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  validation: (Rule) => Rule.required(),
});
