import { defineField, defineType } from "sanity";
import { linkRequiredValidation } from "./link";

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "link",
      title: "Link",
      type: "link",
      validation: linkRequiredValidation,
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required().assetRequired(),
    }),
  ],
  validation: (Rule) => Rule.required(),
});
