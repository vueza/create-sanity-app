import { defineField, defineType } from "sanity";

export const contentObject = defineType({
  name: "contentObject",
  title: "Content",
  type: "object",
  fields: [
    defineField({
      name: "value",
      title: "Content",
      type: "content",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Content",
      };
    },
  },
});
